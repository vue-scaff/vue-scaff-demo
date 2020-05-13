<style lang="scss">
.sample {
  transition: all 0.6s;

  &-dark {
    color: $theme--light;

    .bulletin {
      h1 {
        background-image: linear-gradient(
          180deg,
          $bulletin-warm,
          $bulletin-warm
        );
        -webkit-animation: hue-warm 12s infinite alternate linear;
      }

      span {
        box-shadow: 0 -0.125rem 0.375rem rgba(255, 255, 255, 0.375);
      }
    }
  }
  &-light {
    color: $theme--dark;

    .bulletin {
      h1 {
        background-image: linear-gradient(
          180deg,
          $bulletin-warm,
          $bulletin-warm
        );
        -webkit-animation: hue-warm 12s infinite alternate linear;
      }

      span {
        box-shadow: 0 -0.125rem 0.375rem rgba(0, 0, 0, 0.375);
      }
    }
  }
}
</style>

<template>
  <div class="sample" :class="`sample-${['dark', 'light'][global.theme]}`">
    <x-example class="bulletin" :message="home.name" :color="$style.theme">
      <span />
    </x-example>
    <ul class="panel">
      <li>
        <button type="default" @click="doState()">
          [State] Change
        </button>
      </li>
      <li>
        <button type="default" @click="doCommit()">
          [Mutation] Commit
        </button>
      </li>
      <li>
        <button type="default" @click="doDispatch()">
          [Action] Dispatch
        </button>
      </li>
      <li>
        <button type="default" @click="doDispatchSync()">
          [Action] Dispatch Sync
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requestAddress: this.$api.mock("hello", "world", "honey")
    };
  },
  mixins: [registry.mixin],
  components: {},
  methods: {
    doState() {
      this.home.name = "Hi, Anonymous !";
    },
    doCommit() {
      this.$store.commit("home/MUTATE_RENAME", "Commit By Mutate");
    },
    doDispatch() {
      this.$store.dispatch("home/ACTION_CHANCE", "Dispatch By Action");
    },
    async doDispatchSync() {
      const data = await this.$store.dispatch(
        "home/ACTION_CHANCE_SYNC",
        "Dispatch Sync 0"
      );

      this.$util.sleep(1200).then(() => (this.home.name = data));
    }
  },
  mounted() {
    this.$http(this.requestAddress)
      .get({ a: 1, b: 2, c: 3 }, { headerParams: "header-params" })
      .then(response => {
        console.log("http response is : ", response);
      });
  }
};
</script>
