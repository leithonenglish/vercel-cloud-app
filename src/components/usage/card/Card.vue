<script lang="ts" setup>
import { ref, watch } from "vue-demi";
import {
  wrapperStyle,
  headerStyle,
  titleStyle,
  descriptionStyle,
  insightsWrapperVariant,
  insightsTitleWrapperStyle,
  insightsTitleArrowStyle,
  insightsDrawerStyle,
  emptyInsightStyle,
  dataWrapperStyle,
} from "./card.css";
import { ChevronRight, CircleCheckFilled } from "../../icons";
import { useMotion } from "@vueuse/motion";

type CardProps = {
  title: string;
  description: string;
  insights?: { description: string; type: number; action: number }[];
};

defineProps<CardProps>();
const insightsOpen = ref(false);
const insightDrawer = ref<HTMLDivElement | null>(null);
const { apply } = useMotion(insightDrawer, {
  initial: {
    opacity: 0,
    height: 0,
  },
});
watch(insightsOpen, (opened) => {
  if (opened && insightDrawer.value) {
    apply({ opacity: 1, height: insightDrawer.value.scrollHeight });
  } else {
    apply({ opacity: 0, height: 0 });
  }
});
</script>
<template>
  <div :class="wrapperStyle">
    <div :class="headerStyle">
      <h1 :class="titleStyle">{{ title }}</h1>
      <p :class="descriptionStyle">{{ description }}</p>
    </div>
    <div :class="insightsWrapperVariant[insightsOpen ? `opened` : `closed`]">
      <summary :class="insightsTitleWrapperStyle" @click="insightsOpen = !insightsOpen">
        <ChevronRight :class="insightsTitleArrowStyle[insightsOpen ? `opened` : `default`]" />
        <h1>Insights</h1>
      </summary>
      <div ref="insightDrawer" :class="insightsDrawerStyle">
        <p v-if="insights">Yea</p>
        <div v-else :class="emptyInsightStyle">
          <CircleCheckFilled />
          <p>There are no new Insights for this period.</p>
        </div>
      </div>
    </div>
    <div :class="dataWrapperStyle"></div>
  </div>
</template>
