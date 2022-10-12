module.exports = {
  plugins: ['scss'],
  modifyWebpackConfig({webpackConfig}) {
    webpackConfig.module.rules[1].exclude.push(/\.svg$/);
    webpackConfig.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return webpackConfig;
  }
};