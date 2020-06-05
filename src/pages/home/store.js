export default ({ $http, $style, each }) => {
  console.log(0, $http, $style, each);

  const name = "home";

  const state = {
    name: "Vue Scaff",
    nick: "Social Cat"
  };

  const mutations = {
    MUTATE_RENAME(state, option) {
      state.name = option;
    }
  };

  const actions = {
    ACTION_CHANCE({ commit, state }, message) {
      commit("MUTATE_RENAME", message);
    },
    async ACTION_CHANCE_SYNC({ commit, state }, message) {
      return await new Promise(resolve => {
        commit("MUTATE_RENAME", message);
        resolve("Dispatch Sync 1");
      });
    }
  };

  return {
    name,
    state,
    mutations,
    actions
  };
};
