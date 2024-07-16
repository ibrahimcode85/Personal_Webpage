const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    home: "./src/bundler_js/index.js",
    career: "./src/bundler_js/career_bundler.js",
    projects: "./src/bundler_js/projects_bundler.js",
    interests: "./src/bundler_js/interests_bundler.js",
    interests_sub1: "./src/bundler_js/interests_lap1_bundler.js",
    interests_sub2: "./src/bundler_js/interests_stoosRidgeHike_bundler.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/home.html",
      filename: "home.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/career.html",
      filename: "career.html",
      chunks: ["career"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/projects.html",
      filename: "projects.html",
      chunks: ["projects"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests.html",
      filename: "interests.html",
      chunks: ["interests"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_lap1.html",
      filename: "interests_subpages/interests_lap1.html",
      chunks: ["interests_sub1"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_stoosRidgeHike.html",
      filename: "interests_subpages/interests_stoosRidgeHike.html",
      chunks: ["interests_sub2"],
    }),
    // // Add HtmlWebpackPlugin instances for each interests_subpages HTML file
    // new HtmlWebpackPlugin({
    //   template: "./src/interests_subpages/interests_kapasMarangSwimathon.html",
    //   filename: "interests_subpages/interests_kapasMarangSwimathon.html",
    // }),
    // new HtmlWebpackPlugin({
    //   template: "./src/interests_subpages/interests_langkawiSwimFest.html",
    //   filename: "interests_subpages/interests_langkawiSwimFest.html",
    // }),

    // new HtmlWebpackPlugin({
    //   template: "./src/interests_subpages/interests_OWSClinic.html",
    //   filename: "interests_subpages/interests_OWSClinic.html",
    // }),
    // new HtmlWebpackPlugin({
    //   template: "./src/interests_subpages/interests_PDClassic.html",
    //   filename: "interests_subpages/interests_PDClassic.html",
    // }),
    // new HtmlWebpackPlugin({
    //   template: "./src/interests_subpages/interests_PDFreeAndEasy.html",
    //   filename: "interests_subpages/interests_PDFreeAndEasy.html",
    // }),
    // new HtmlWebpackPlugin({
    //   template:
    //     "./src/interests_subpages/interests_PulauTenggolDivingTrip.html",
    //   filename: "interests_subpages/interests_PulauTenggolDivingTrip.html",
    // }),

    // new HtmlWebpackPlugin({
    //   template: "./src/interests_subpages/interests_swimSquad.html",
    //   filename: "interests_subpages/interests_swimSquad.html",
    // }),
    // new HtmlWebpackPlugin({
    //   template: "./src/interests_subpages/interests_tripFrance.html",
    //   filename: "interests_subpages/interests_tripFrance.html",
    // }),
    // new HtmlWebpackPlugin({
    //   template: "./src/interests_subpages/interests_tripSwiss.html",
    //   filename: "interests_subpages/interests_tripSwiss.html",
    // }),
  ],
};
