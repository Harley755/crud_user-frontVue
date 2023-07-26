<template>
  <div>
    <Counter />
    <div>
      <h3>
        {{ $store.state.count }} <sup>2</sup> = {{ $store.getters.getCount }}
      </h3>
    </div>
    <button @click="$store.dispatch('decreaseCount')">-</button>
    <button @click="$store.dispatch('increaseCount')">+</button>
  </div>
  <div>
    <input type="text" placeholder="Enter color code" v-model="colorCode" />
    {{ $store.state.colorCode }}
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../../store/index";
import Counter from "../../components/Counter.vue";
console.log("store: ", store);

const colorCode = computed({
  get() {
    return store.state.colorCode;
  },
  set(newValue) {
    console.log(newValue);
    // store.commit("setColorCode", newValue);
    store.dispatch("setColorCode", newValue);
  },
});
</script>