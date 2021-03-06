const path = require("path");
const util = require("util");
const {
    CleanPlugin,
    DefinePlugin,
} = require("webpack");
const { merge } = require('webpack-merge');

const CopyWebpackPlugin = require("copy-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const basicConfig = {
    devtool: "source-map",
    mode: 'development',
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true
                    }
                },

                exclude: /node_modules/,
            },
        ],
    },
    plugins : [
        new ForkTsCheckerWebpackPlugin(),
        //new BundleAnalyzerPlugin()
    ],
    output: {
        path: path.resolve(__dirname, "../dist/apollo/ng1-to-ng2"),
    },

    // Doesn't work with federation (Micro frontend).
    /*optimization: {
        minimize: false,
        minimizer: [
            '...',
            new HtmlMinimizerPlugin(),
        ],
        chunkIds: 'named',
        mergeDuplicateChunks: true,
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            chunks: 'all',
            //name : false
        },
    },*/
}

const shellAppConfig = {
    name: "app-shell",
    entry: {
        'app-shell-main': "./app-shell/main.ts"
    },
    output: {
        filename: "app-shell/[name].bundle.js",
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./ng1-to-ng2/app-shell/*']
        }),
        new DefinePlugin({
            PRODUCTION: JSON.stringify(false),
        })
    ],
};
const usersAppConfig = {
    name: "users",
    entry: {
        'app-users-main': "./app-users/main.ts"
    },
    output: {
        filename: "app-users/[name].bundle.js",
    },
    plugins: [
        /*new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: ['./ng1-to-ng2/app-users/!*']
        }),*/
        new ModuleFederationPlugin({
            name: "appUsers",
            library: {type: "var", name: "appUsers"},
            filename: 'remoteEntry-users-module.js',
            exposes: {
                "./usersModule": "./app-users/users/users.module",
            },
            shared: ['angular']
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            scriptLoading: 'blocking',
            template: "./app-users/index.html",
            filename: "./app-users/index.html",
            chunks : [
                'app-users-main'
            ]
        })
    ],
};
const todoAppConfig = {
    name: "todo",
    entry: {
        'app-todo-main': "./app-todo/main.ts"
    },
    output: {
        filename: "app-todo/[name].bundle.js",
    },
    plugins: [
        /*new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: ['./ng1-to-ng2/app-todo/!*']
        }),*/
        new ModuleFederationPlugin({
            name: "appTodo",
            library: {type: "var", name: "appTodo"},
            filename: 'remoteEntry-todo-module.js',
            exposes: {
                "./todoModule": "./app-todo/todo/todo.module",
            },
            shared: ['angular']
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            scriptLoading: 'blocking',
            template: "./app-todo/index.html",
            filename: "./app-todo/index.html",
            chunks : [
                'app-todo-main'
            ]
        })
    ],
};

const devServerConfig = {
    name: 'root-dev-server',
    mode: 'development',
    devServer: {
        publicPath: '/apollo/',
        port: 8080,
        open: true,
        openPage: 'apollo/#!/users',
        contentBase: path.join(__dirname, './dist/apollo/ng1-to-ng2'),
        contentBasePublicPath: '/apollo/ng1-to-ng2',
    },
    entry: {},
    output: {
        path: path.resolve(__dirname, "../dist/apollo"),
        publicPath: 'http://localhost:8080/apollo/',
    },
    plugins : []
}

function createDefinePlugins(isUiVisualizer, uiRouterTrace, buildVersion){
    return new DefinePlugin({
        IS_UI_VISUALIZER : isUiVisualizer || 0,
        UI_TRACE_LEVEL   : JSON.stringify(uiRouterTrace),
        FOLDER_VERSION   : JSON.stringify(buildVersion)
    })
}
function mergeAppConfig( appConfig, isUiVisualizer, uiRouterTrace, buildVersion){
    return merge(
        basicConfig ,
        { plugins : [createDefinePlugins(isUiVisualizer, uiRouterTrace, buildVersion)] },
        appConfig
    )
}

function buildAppConfig( configName , isUiVisualizer, uiRouterTrace, buildVersion){
    let config;
    const baseProjectsPath =  path.resolve(__dirname, `../dist/apollo/${buildVersion}`);

    switch (configName){
        case 'shell':
            config = mergeAppConfig(shellAppConfig,isUiVisualizer, uiRouterTrace, buildVersion);
            config.output.path = baseProjectsPath;
            config.plugins.push(
                new ModuleFederationPlugin({
                    name: "shell",
                    remotes: {
                        appTodo : `appTodo@http://localhost:8080/apollo/${buildVersion}/remoteEntry-todo-module.js`,
                        appUsers: `appUsers@http://localhost:8080/apollo/${buildVersion}/remoteEntry-users-module.js`,
                    },
                    exposes: {},
                    //shared : { angular : {singleton : true} }
                }),
                new HtmlWebpackPlugin({
                    template: "./app-shell/index.ejs",
                    templateParameters : {
                        FOLDER_VERSION : buildVersion
                    },
                    filename: "../index.html",
                    inject: 'body',
                    scriptLoading: 'blocking'
                })
            )
            break;
        case 'todo':
            config = mergeAppConfig(todoAppConfig,isUiVisualizer, uiRouterTrace, buildVersion);
            config.output.path = baseProjectsPath;
            break;
        case 'users':
            config = mergeAppConfig(usersAppConfig,isUiVisualizer, uiRouterTrace, buildVersion);
            config.output.path = baseProjectsPath;
            break;
    }

    return config;
}
function buildServerAppConfig(contentBase,buildVersion){
    devServerConfig.devServer.contentBase = contentBase;
    devServerConfig.devServer.contentBasePublicPath = `/apollo/${buildVersion}`;
    devServerConfig.plugins.push(
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
                    to: `./${buildVersion}/css`
                }
            ]
        })
    )
    return devServerConfig;
}

module.exports = {
    buildAppConfig,
    buildServerAppConfig
};
