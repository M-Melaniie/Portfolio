const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  devServer: {
    proxy: "http://localhost:3000", // Proxy vers ton API
  },
};
module.exports = {
  devServer: {
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/réalisations\/.*$/,
          to: (context) => context.parsedUrl.pathname,
        },
      ],
    },
  },
};
