create-tell
=======

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/create-tell.svg?style=flat-square
[npm-url]: https://npmjs.org/package/create-tell
[travis-image]: https://img.shields.io/travis/unclexiao/create-tell.svg?style=flat-square
[travis-url]: https://travis-ci.org/unclexiao/create-tell.svg?branch=master


创建EggJS项目的脚手架：整合[微信公众平台](https://mp.weixin.qq.com/)基本服务

## 技术选型
### 数据库
- 文档型数据库：[MongoDB](https://www.mongodb.com/)
- 高性能缓存：[Redis](https://redis.io/)
- 对象云存储：[OSS](https://www.aliyun.com/product/oss/)

### 插件
- 表单验证插件：[egg-validate](https://github.com/eggjs/egg-validate)
- 跨域设置插件：[egg-cors](https://github.com/eggjs/egg-cors)
- 国际化插件：[egg-i18n](https://github.com/eggjs/egg-i18n)

### 辅助
- 性能监控平台：[alinode](https://cn.aliyun.com/product/nodejs)
- 时间处理工具库：[momentjs](https://momentjs.com/)

## 如何使用
### 安装模块

```bash
$ npm init tell
? Please select a boilerplate type (Use arrow keys)
  basic - egg-boilerplate-basic
> mp - wechat app boilerplate
  rtc - real time communication app boilerplate
```

### 下载模板

在 **package.json** 指定 **egg.framework**，默认为 **egg**

```json
{
  "egg": {
    "declarations": true,
    "framework": "egg-tell-basic"
  },
  "dependencies": {
    "egg": "^2.15.1",
    "egg-scripts": "^2.11.0",
    "egg-tell-basic": "^1.0.5"
  },
}
```
### 修改配置

指定[配置文件](https://eggjs.org/zh-cn/basics/config.html)覆盖数据库地址

```javascript
  /**
  * 跨域设置
  * @member Config#mp
  * @property {String} appId - 公众平台应用编号
  * @property {String} appSecret - 公众平台应用密钥
  * @property {String} mchId - 商户平台商家编号
  * @property {String} apiKey - 商户支付密钥
  * @property {number}  notifyUrl  - 支付结果回调地址
  */
  config.mp = {
    appId: '',
    appSecret: '',
    mchId: '',
    apiKey: '',
    notifyUrl: '',
  };


  /**
   * 高性能缓存数据库
   * @member Config#redis
   * @property {String} host - 主机
   * @property {int} port - 端口
   * @property {String} password - 密码
   * @property {String} db - 数据库空间
   */
  config.redis = {
    client: {
      host: process.env.EGG_REDIS_HOST || '127.0.0.1',
      port: process.env.EGG_REDIS_PORT || 6379,
      password: process.env.EGG_REDIS_PASSWORD || '',
      db: process.env.EGG_REDIS_DB || '10',
    },
  };

  /**
   * 文档型数据库
   * @member Config#mongoose
   * @property {String} url - 地址
   * @property {Object} optints - 参数
   */
  config.mongoose = {
    url: 'mongodb://localhost:27017/teller',
    options: {
      useNewUrlParser: true,
      autoIndex: true,
      useCreateIndex: true,
    },
  };

  /**
  * 安全设置
  * @member Config#security
  * @property {String} domainWhiteList - 白名单列表
  * @property {Object} csrf - 跨站请求伪造
  */
  config.security = {
    domainWhiteList: [],
    csrf: {
      enable: false,
    },
  };

  /**
   * 性能监控
   * @member Config#alinode
   * @property {String} appid - 应用编号
   * @property {String} secret - 应用密钥
   */
  config.alinode = {
    appid: '',
    secret: '',
  };

```
### 启动项目
```bash
$ npm run dev
```

## 集成开发环境
建议使用[VSCode](https://code.visualstudio.com/)，并添加如下扩展
- [eggjs](https://marketplace.visualstudio.com/items?itemName=atian25.eggjs)，本地调试应用
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)，检测代码质量
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)，美化大纲排版