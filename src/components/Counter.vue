<template>
  <h1 :style="{ color: color }">
    {{ count }}
    {{ color }}
  </h1>
</template>

<script setup>
import store from "../store/index";

let count = store.state.count;
let color = store.state.colorCode;
</script>

<style>
</style>