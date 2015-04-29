Package.describe({
  name: "gwendall:jquery-animation-callback",
  summary: "Callback for animation end",
  version: "0.1.0",
  git: "https://github.com/gwendall/meteor-jquery-animation-callback.git"
});

Package.onUse(function (api, where) {
  api.use("jquery@1.11.3_2", "client");
  api.addFiles("lib.js", "client");
});
