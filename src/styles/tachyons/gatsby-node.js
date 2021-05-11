exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  actions: { replaceWebpackConfig },
}) => {
  switch (stage) {
    case "build-javascript":
      // We want to include the babel polyfills before any application code,
      // so we're inserting it as an additional entry point.  Gatsby does not allow
      // this in "setWebpackConfig", so we have to use "replaceWebpackConfig"
      const config = getConfig();

      const app =
        typeof config.entry.app === "string"
          ? [config.entry.app]
          : config.entry.app;

      config.entry.app = ["@babel/polyfill", ...app];
      replaceWebpackConfig(config);
    case "build-javascript":
      actions.setWebpackConfig({
        externals: getConfig().externals.concat(function(
          context,
          request,
          callback
        ) {
          const regex = /^@?firebase(\/(.+))?/;
          if (regex.test(request)) {
            return callback(null, `umd ${request}`);
          }
          callback();
        }),
      });

      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /firebase/,
              use: loaders.null(),
            },
          ],
        },
      });
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {};
