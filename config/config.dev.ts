// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  proxy: {
    "/article": { // 标识需要进行转换的请求的url
      "target": "http://localhost:7001", // 服务端域名
      "changeOrigin": true, // 允许域名进行转换
      // "pathRewrite": { "^/article": ''}  // 将请求url里的ci去掉
    }
  }
});
