module.exports = (baseConfig, env, config) => {
  config.module.rules.unshift({
    test: /font.*\.svg$/,
    loader: require.resolve("file-loader")
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader")
      },
      {
        loader: require.resolve("awesome-typescript-loader")
      },
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: {
          parser: "typescript"
        }
      }
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx", ".json");
  return config;
};
