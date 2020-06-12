<style lang="scss">
.theme {
  transition: all 0.6s;

  &-light {
    background-color: $theme--light;
  }

  &-dark {
    background-color: $theme--dark;
  }

  &-switch {
    font-size: 30px;

    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 1;

    cursor: pointer;
  }
}
</style>

<template>
  <div
    id="app"
    class="theme"
    :style="{ backgroundColor: $style[`theme${skin[global.theme]}`] }"
  >
    <div class="theme-switch" @click="themeSwitch">
      {{ global.theme ? "☀️" : "🌙" }}
    </div>
    <transition name="fade-transform" mode="out-in">
      <router-view class="page" />
    </transition>
  </div>
</template>

<script>
import mixin from "@/registry/mixin";

export default {
  mixins: [mixin],
  data() {
    return {
      skin: ["Dark", "Light"]
    };
  },
  methods: {
    themeSwitch() {
      this.global.theme = !this.global.theme - 0;
    }
  }
};
</script>
