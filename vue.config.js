module.exports = {
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/constants.scss"; @import "@/scss/global.scss";`
      }
    }
  }
};