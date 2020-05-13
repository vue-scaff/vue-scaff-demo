export default (
  mode = [`store`, `component`, `route`, `style`, `util`, `i18n`],
  injection = {}
) => {
  const stores = mode.includes(`store`)
    ? {
        context: require.context(`@/pages/`, true, /\w+\/store.js$/),
        expect: pkg => pkg,
        inject: {
          ...injection
        }
      }
    : {};

  const components = mode.includes(`component`)
    ? {
        context: require.context(`@/components`, true, /.vue$/),
        expect: pkg => pkg
      }
    : {};

  const routes = mode.includes(`route`)
    ? {
        context: require.context(`@/pages/`, true, /\w+\/route.js$/),
        expect: pkg => pkg
      }
    : {};

  const styles = mode.includes(`style`)
    ? {
        context: require.context(`@/sheet`, true, /variables.scss/),
        expect: pkg => pkg
      }
    : {};

  const utils = mode.includes(`util`)
    ? {
        context: require.context(`@/utils`, true, /.js$/),
        expect: pkg => pkg
      }
    : {};

  const i18n = mode.includes(`i18n`)
    ? {
        context: require.context(`@/i18n`, true, /.js$/),
        expect: pkg => pkg
      }
    : {};

  return {
    stores,
    components,
    routes,
    styles,
    utils,
    i18n
  };
};
