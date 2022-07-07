<script lang="ts" setup>
import { ref } from "vue-demi";
import { vIntersectionObserver } from "@vueuse/components";
import { Card } from "../../components/usage";
import { CircleCheckFilled } from "../../components/icons";
import {
  wrapperStyle,
  headerWrapperStyle,
  headerWrapperInnerStyle,
  headerTitleWrapperStyle,
  headerTitleStyle,
  invoicePeriodWrapperStyle,
  invoicePeriodTextStyle,
  invoicePeriodButtonStyle,
  sectionTabHolderStyle,
  sectionTabVariant,
  sectionTabIconSvgStyleVariant,
  sectionTabIconPathStyleVariant,
  sectionHolderStyle,
  sectionStyle,
  sectionTitleStyle,
  sectionCardListStyle,
} from "./usage.css";

const sections = ref([
  {
    title: `Networking`,
    checked: true,
    cards: [
      {
        title: `Bandwidth`,
        description: `The amount of data that your Deployments have received or sent.`,
        data: [],
      },
      {
        title: `Requests`,
        description: `The number of requests your Deployments have received.`,
        data: [],
      },
    ],
  },
  {
    title: `Serverless Functions`,
    checked: true,
    cards: [
      {
        title: `Invocations`,
        description: `The number of times your Functions received a request (does not include Cache Hits).`,
        data: [],
      },
      {
        title: `Execution`,
        description: `The amount of time your Functions have spent computing responses to the requests they've received.`,
        data: [],
      },
      {
        title: `Throttles`,
        description: `The number of times that a request to your Functions could not be served because the concurrency limit was hit.`,
        data: [],
      },
    ],
  },
  {
    title: `Edge Functions`,
    checked: true,
    cards: [
      {
        title: `Invocations`,
        description: `The number of times your Edge Functions received a request.`,
        data: [],
      },
      {
        title: `Execution`,
        description: `The amount of time your Edge Functions have spent computing responses to the requests they've received.`,
        data: [],
      },
    ],
  },
  {
    title: `Builds`,
    checked: true,
    cards: [
      {
        title: `Build Time`,
        description: `The amount of time that your Deployments have spent being queued or building.`,
        data: [],
      },
      {
        title: `Number of Builds`,
        description: `How many times a build was issued for one of your Deployments.`,
        data: [],
      },
    ],
  },
  {
    title: `Artifacts`,
    checked: true,
    cards: [
      {
        title: `Time Saved`,
        description: `The time saved by using local or remote cached artifacts.`,
        data: [],
      },
      {
        title: `Number of Remote Cache Artifacts`,
        description: `The number of downloaded and uploaded artifacts.`,
        data: [],
      },
      {
        title: `Total Size of Remote Cache Artifacts`,
        description: `The total size of all successfully downloaded and uploaded artifacts.`,
        data: [],
      },
    ],
  },
  {
    title: `Other`,
    cards: [
      {
        title: `Analytics`,
        description: `The number of individual points of data that were reported from your visitor’s browsers for the Analytics feature.`,
        data: [],
      },
      {
        title: `Image Optimization`,
        description: `The number of source images that were requested from your Deployments.`,
        data: [],
      },
    ],
  },
]);
const selectedTab = ref<string | null>(null);

const onIntersectionObserver = (
  [{ isIntersecting, intersectionRatio }]: IntersectionObserverEntry[],
  tab: string
) => {
  if (isIntersecting && intersectionRatio > 0) {
    selectedTab.value = tab;
  }
};

const tabIsSelected = (tab: string) => selectedTab.value === tab;
</script>
<template>
  <div :class="wrapperStyle">
    <div :class="headerWrapperStyle">
      <div :class="headerWrapperInnerStyle">
        <div :class="headerTitleWrapperStyle">
          <h1 :class="headerTitleStyle">Usage</h1>
          <div :class="invoicePeriodWrapperStyle">
            <span :class="invoicePeriodTextStyle">Apr 17, 2022 - Apr 24, 2022</span>
            <button :class="invoicePeriodButtonStyle">View Invoices</button>
          </div>
        </div>
        <div :class="sectionTabHolderStyle">
          <button
            v-for="({ title, checked }, index) in sections"
            :key="title + index"
            :id="title + index"
            :class="sectionTabVariant[tabIsSelected(title) ? 'active' : 'default']"
          >
            <CircleCheckFilled
              v-if="checked"
              :svg-class="sectionTabIconSvgStyleVariant[tabIsSelected(title) ? 'active' : 'default']"
              :path-class="sectionTabIconPathStyleVariant[tabIsSelected(title) ? 'active' : 'default']"
            />
            {{ title }}
          </button>
        </div>
      </div>
    </div>
    <div :class="sectionHolderStyle">
      <section v-for="{ title, cards } in sections" :class="sectionStyle">
        <h1
          v-intersection-observer="(event) => onIntersectionObserver(event, title)"
          :class="sectionTitleStyle"
        >
          {{ title }}
        </h1>
        <div :class="sectionCardListStyle">
          <Card v-for="card in cards" v-bind="card" />
        </div>
      </section>
    </div>
  </div>
</template>
