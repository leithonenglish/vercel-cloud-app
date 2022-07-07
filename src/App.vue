<script setup lang="ts">
import { mainStyle } from "./app.css";
import HeaderBar from "./components/header-bar";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";
</script>

<template>
  <HeaderBar />
  <NavBar />
  <main :class="mainStyle">
    <router-view />
  </main>
  <Footer />
</template>
