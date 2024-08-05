import autoprefixer from "autoprefixer";

export default {
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [autoprefixer],
    },
  },
};
