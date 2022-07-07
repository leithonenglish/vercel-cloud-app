<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue-demi";
import { useMotion } from "@vueuse/motion";
import { useRoute } from "vue-router";
import {
  wrapperStyle,
  navWrapperStyle,
  navItemStyleVariant,
  navItemTextStyle,
  slidingBarStyle,
  slidingBlockStyle,
} from "./nav-bar.css";

const route = useRoute();
const menuItems = [
  { name: `Overview`, url: `/` },
  { name: `Integrations`, url: `/integrations` },
  { name: `Activity`, url: `/activity` },
  { name: `Domains`, url: `/domains` },
  { name: `Usage`, url: `/usage` },
  { name: `Settings`, url: `/settings` },
];
const linkRefs = ref<HTMLAnchorElement[]>([]);
const slidingBarRef = ref<HTMLDivElement | null>(null);
const slidingBlockRef = ref<HTMLDivElement | null>(null);
const { apply: slidingBarApply } = useMotion(slidingBarRef, {
  initial: {
    opacity: 0,
    left: 0,
    width: 0,
  },
});
const { apply: slidingBlockApply } = useMotion(slidingBlockRef, {
  initial: {
    opacity: 0,
    left: 0,
    width: 0,
  },
});
const slideBar = () => {
  if (linkRefs.value.length > 0 && slidingBarRef.value) {
    const animateBar = (link: HTMLAnchorElement) => {
      if (link) {
        const span = link.childNodes.item(0) as HTMLSpanElement;
        const { width } = span.getBoundingClientRect();
        slidingBarApply({
          opacity: 1,
          width,
          x: link.offsetLeft + span.offsetLeft,
          transition: {
            duration: 300,
            opacity: {
              delay: 300,
            },
          },
        });
      }
    };
    const activeLink = linkRefs.value.find((el) => el.dataset.active === `true`) || linkRefs.value[0];
    animateBar(activeLink);
  }
};
const onLinkMouseOver = (event: MouseEvent) => {
  const link = event.target as HTMLElement | null;
  if (link && link.dataset.active != `true`) {
    link.dataset.hovered = `true`;
    const { width, x } = link.getBoundingClientRect();
    slidingBlockApply({
      scale: 1,
      opacity: 1,
      width,
      x,
      transition: {
        duration: 150,
        left: {
          bounce: 0,
        },
      },
    });
  }
};
const onLinkMouseLeave = (event: MouseEvent) => {
  const link = event.target as HTMLElement | null;
  if (link) {
    slidingBlockApply({
      opacity: 0,
      scale: 0.8,
    });
  }
};
onMounted(() => {
  slideBar();
});
watch(() => route.path, slideBar, { flush: `post` });
</script>
<template>
  <nav :class="wrapperStyle">
    <div ref="slidingBlockRef" :class="slidingBlockStyle"></div>
    <div :class="navWrapperStyle">
      <div ref="slidingBarRef" :class="slidingBarStyle"></div>
      <router-link
        v-for="{ name, url } in menuItems"
        :key="name"
        :to="url"
        custom
        v-slot="{ href, navigate, isExactActive }"
      >
        <a
          :href="href"
          :ref="(el) => linkRefs.push(el as HTMLAnchorElement)"
          :class="navItemStyleVariant[isExactActive ? 'active' : 'default']"
          :data-active="isExactActive"
          @click="navigate"
          @mouseover.stop="onLinkMouseOver"
          @mouseleave="onLinkMouseLeave"
        >
          <span :class="navItemTextStyle">{{ name }}</span>
        </a>
      </router-link>
    </div>
  </nav>
</template>
