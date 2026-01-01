const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/bundler_js/index.js",
    career: "./src/bundler_js/career_bundler.js",
    projects: "./src/bundler_js/projects_bundler.js",
    interests: "./src/bundler_js/interests_bundler.js",
    interests_sub1: "./src/bundler_js/interests_lap1_bundler.js",
    interests_sub2: "./src/bundler_js/interests_stoosRidgeHike_bundler.js",
    interests_sub3: "./src/bundler_js/interests_tripSwiss_bundler.js",
    interests_sub4: "./src/bundler_js/interests_tripFrance_bundler.js",
    interests_sub5: "./src/bundler_js/interests_langkawiSwimFest_bundler.js",
    interests_sub6:
      "./src/bundler_js/interests_pulauTenggolDivingTrip_bundler.js",
    interests_sub7:
      "./src/bundler_js/interests_kapasMarangSwimathon_bundler.js",
    interests_sub8: "./src/bundler_js/interests_PDFreeAndEasy_bundler.js",
    interests_sub9: "./src/bundler_js/interests_PDClassic_bundler.js",
    interests_sub10: "./src/bundler_js/interests_OWSClinic_bundler.js",
    interests_sub11: "./src/bundler_js/interests_swimSquad_bundler.js",
    interests_sub12: "./src/bundler_js/interests_oneHUndredHoursPT.js",
    interests_sub13:
      "./src/bundler_js/interests_perhentianChallenge_bundler.js",
    interests_sub14: "./src/bundler_js/interests_training_PB_bundler.js",
    interests_sub15: "./src/bundler_js/interests_MFC2024_bundler.js",
    interests_sub16: "./src/bundler_js/interests_DNFWorkshop_bundler.js",
    interests_sub17: "./src/bundler_js/interests_Deadfish10k_bundler.js",
    interests_sub18: "./src/bundler_js/interests_PB_NR.js",
    interests_sub19: "./src/bundler_js/interests_PenangPoolGames.js",
    interests_sub20: "./src/bundler_js/interests_SingaporeUFC.js",
    interests_sub21: "./src/bundler_js/interests_WakayamaPoolChampionship.js",
    interests_sub22: "./src/bundler_js/interests_tripJapan.js",
    interests_sub23: "./src/bundler_js/interests_bayanPoolChallenge.js",
    interests_sub24: "./src/bundler_js/interests_MFPG_Penang.js",
    interests_sub25: "./src/bundler_js/interests_DNF2025.js",
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
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
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
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_tripSwiss.html",
      filename: "interests_subpages/interests_tripSwiss.html",
      chunks: ["interests_sub3"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_tripFrance.html",
      filename: "interests_subpages/interests_tripFrance.html",
      chunks: ["interests_sub4"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_langkawiSwimFest.html",
      filename: "interests_subpages/interests_langkawiSwimFest.html",
      chunks: ["interests_sub5"],
    }),
    new HtmlWebpackPlugin({
      template:
        "./src/interests_subpages/interests_PulauTenggolDivingTrip.html",
      filename: "interests_subpages/interests_PulauTenggolDivingTrip.html",
      chunks: ["interests_sub6"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_kapasMarangSwimathon.html",
      filename: "interests_subpages/interests_kapasMarangSwimathon.html",
      chunks: ["interests_sub7"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_PDFreeAndEasy.html",
      filename: "interests_subpages/interests_PDFreeAndEasy.html",
      chunks: ["interests_sub8"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_PDClassic.html",
      filename: "interests_subpages/interests_PDClassic.html",
      chunks: ["interests_sub9"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_OWSClinic.html",
      filename: "interests_subpages/interests_OWSClinic.html",
      chunks: ["interests_sub10"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_swimSquad.html",
      filename: "interests_subpages/interests_swimSquad.html",
      chunks: ["interests_sub11"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_oneHundredHoursPT.html",
      filename: "interests_subpages/interests_oneHundredHoursPT.html",
      chunks: ["interests_sub12"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_perhentianChallenge.html",
      filename: "interests_subpages/interests_perhentianChallenge.html",
      chunks: ["interests_sub13"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_training_PB.html",
      filename: "interests_subpages/interests_training_PB.html",
      chunks: ["interests_sub14"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_MFC2024.html",
      filename: "interests_subpages/interests_MFC2024.html",
      chunks: ["interests_sub15"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_DNFWorkshop.html",
      filename: "interests_subpages/interests_DNFWorkshop.html",
      chunks: ["interests_sub16"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_Deadfish10k.html",
      filename: "interests_subpages/interests_Deadfish10k.html",
      chunks: ["interests_sub17"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_PB_NR.html",
      filename: "interests_subpages/interests_PB_NR.html",
      chunks: ["interests_sub18"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_PenangPoolGames.html",
      filename: "interests_subpages/interests_PenangPoolGames.html",
      chunks: ["interests_sub19"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_SingaporeUFC.html",
      filename: "interests_subpages/interests_SingaporeUFC.html",
      chunks: ["interests_sub20"],
    }),
    new HtmlWebpackPlugin({
      template:
        "./src/interests_subpages/interests_WakayamaPoolChampionship.html",
      filename: "interests_subpages/interests_WakayamaPoolChampionship.html",
      chunks: ["interests_sub21"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_tripJapan.html",
      filename: "interests_subpages/interests_tripJapan.html",
      chunks: ["interests_sub22"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_bayanPoolChallenge.html",
      filename: "interests_subpages/interests_bayanPoolChallenge.html",
      chunks: ["interests_sub23"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_MFPG_Penang.html",
      filename: "interests_subpages/interests_MFPG_Penang.html",
      chunks: ["interests_sub24"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/interests_subpages/interests_DNF2025.html",
      filename: "interests_subpages/interests_DNF2025.html",
      chunks: ["interests_sub25"],
    }),
  ],
};
