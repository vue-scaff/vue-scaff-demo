import { mapState } from "vuex";

export default {
  computed: mapState({
    global: state => state.global,
    home: state => state.home,
    sample: state => state.sample
  })
};
