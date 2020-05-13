<template>
  <div class="home">
    <!-- Jumbotron -->
    <div class="jumbotron">
      <img
        class="logo animted"
        :class="{ effect }"
        src="@/assets/logo.png"
        @click="camera"
      />
      <div class="slogan">
        <h1>{{ $t("hello") }} Vue Scaff</h1>
        <span>= Next Engineering Scaffold =</span>
      </div>
    </div>

    <!-- Start -->
    <div class="start">
      <router-link :to="{ name: 'sample' }">
        <div class="start-text">
          <span>Click me to get started !</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mixins: [registry.mixin],
  data() {
    return {
      effect: false
    };
  },
  methods: {
    camera() {
      // in Effect
      if (this.effect) {
        return;
      }

      // run Effect
      this.effect = true;

      // clean Effect
      this.$util.sleep(1000).then(() => (this.effect = false));
    }
  },
  mounted() {}
};
</script>
