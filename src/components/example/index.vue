<style lang="scss" scoped>
.example {
  h1 {
    font-size: 36px;
    line-height: 48px;
  }
}
</style>

<template>
  <div class="example">
    <h1 :style="{ color }">
      {{ message }}
    </h1>
    <slot />
  </div>
</template>

<script>
export default {
  name: "example",
  props: {
    message: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "default color"
    }
  },
  data() {
    return {};
  }
};
</script>
