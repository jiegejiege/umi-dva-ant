> 2020/6/11

    - 通过umi初始化项目，并安装插件
    ```
    $ mkdir myapp && cd myapp
    $ yarn create @umijs/umi-app
    $ yarn
    ```
    - 执行以下命令，安装插件集（包括 antd、dva、国际化等常用插件）
    ```
    $ yarn add @umijs/preset-react -D
    ```

##### 笔记：
    - umi是一个可配置的框架，很多东西都是在.umirc.ts配置完成的，比如title，路由规则，插件等等
    - dva = React-Router + Redux + Redux-saga
    - 通过增加add熟悉，大致熟悉了umi+dva的全局状态管理


