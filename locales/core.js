import i18n from "i18next";
export default i18n;

import opening_hours_resources from "./opening_hours_resources.yaml";

i18n.init({
  fallbackLng: "en",
  // lngWhitelist: ['en', 'de'],
  resStore: opening_hours_resources,
  getAsync: true,
  useCookie: true
  // debug: true,
});
// compat with an app that already initializes i18n

i18n.on("initialized", function(options) {
  for (var lang in opening_hours_resources) {
    i18n.addResourceBundle(
      lang,
      "opening_hours",
      opening_hours_resources[lang]["opening_hours"],
      true
    );
  }
});
