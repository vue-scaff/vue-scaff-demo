// Service Worker
import "./registerServiceWorker";

// Import Staff
import Scaff from "@scaff/vue-cli-scaff";

// Import Utils
import { vueInterceptor, vuePreset, vueProce } from "./engineer";

// Import Sheet
import "@/sheet/index.scss";

// Export Useage
export default App =>
  // Instantiation
  new Scaff({
    /* Some Configure */
  }).then(
    (
      // Subscript Face
      { subscript },
      // Runner
      next
    ) => {
      subscript("util", config => {
        console.log("UTIL MODULE : ", config);
      });

      subscript("route", config => {
        console.log("ROUTE CONFIGURE : ", config);

        config.mode = "history";
        config.baseRoute = process.env.publicPath;
      });

      subscript("component", (config, model) => {
        config.prefix = "x";
      });

      subscript("request", ({ data, headers }) => {
        data.token = "wechat: kazami500";
      });

      subscript("response", config => {
        console.log("HTTP Response : ", config);
      });

      subscript("custom", config => {
        return {
          author: "joenix"
        };
      });

      // Runner
      return next(App);
    }
  );
