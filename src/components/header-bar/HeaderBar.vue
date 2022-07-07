<script setup lang="ts">
import { Logo, Slash } from "../icons";
import {
  wrapperStyle,
  wrapperInnerStyle,
  rightWrapperStyle,
  userAvatar,
  teamWrapperStyle,
  usernameStyle,
  teamNameStyle,
  linkWrapperStyle,
  linkStyleVariant,
  actionButtonStyle,
} from "./header-bar.css";
const externalLinks = [
  { name: `Changelog`, url: `#` },
  { name: `Support`, url: `#` },
  { name: `Docs`, url: `#` },
];
</script>
<template>
  <div :class="wrapperStyle">
    <div :class="wrapperInnerStyle">
      <div :class="rightWrapperStyle">
        <Logo />
        <Slash />
        <div :class="userAvatar"></div>
        <div :class="teamWrapperStyle">
          <span :class="usernameStyle">leithonenglish</span>
          <span :class="teamNameStyle">Hobby</span>
        </div>
      </div>
      <div :class="linkWrapperStyle">
        <button :class="linkStyleVariant.button">Feedback</button>
        <a v-for="{ name, url } in externalLinks" :href="url" :class="linkStyleVariant.default">{{ name }}</a>
        <button :class="actionButtonStyle">
          <div :class="userAvatar"></div>
        </button>
      </div>
    </div>
  </div>
</template>
