import type { NextConfig } from "next";
// import { i18n } from "./app/i18n/settings";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export", // 配置这个后,项目会生成静态资源,不可以起node服务访问了,如果需要服务端渲染,要关闭这个配置项(如果项目简单不需要node服务,可以这个配置)
  distDir: "dist",
  // i18n, // 使用app文件夹的话  不要配置i18n,否则[lang]会404
  typescript: {
    ignoreBuildErrors: false,
  },
  // images: {
  //   // 静态打包时添加这个配置,避免文件找不到路径,服务端渲染时不添加
  //   loader: "custom",
  //   loaderFile: "./images-loader.ts",
  // },
  devServer: {
    host: "0.0.0.0", // 让服务可以通过 IP 访问
    port: 3000, // 默认端口是 3000
  },
};

export default nextConfig;
