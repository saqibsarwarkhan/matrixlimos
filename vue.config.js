module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/scss/main.scss";`
        }
      }
    },
    devServer: {
      proxy: 'https://matrixlimos.pearlalgorithms.com/',
  }
  };