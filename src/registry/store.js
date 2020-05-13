export default $http => {
  const name = "global";

  const state = {
    screen: {
      width: 375,
      height: 667
    },
    theme: 1
  };
  const mutations = {};
  const actions = {};

  return {
    name,
    state,
    mutations,
    actions
  };
};
