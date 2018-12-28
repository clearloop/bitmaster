/* webpack.js */
// requirements
var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server/lib/Server");

// env 
process.env.NODE_ENV = "production";

// configuration
var cwd = process.cwd();
var config = {
	devServer: {
		compress: true,
		contentBase: cwd + "/dist",
		hot: true,
		port: 9000
	},
	entry:  cwd + "/",
	mode: process.env.NODE_ENV,
	module: {
		rules: [{
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		}]
	},
	output: {
		filename: "bundle.js",
		path: cwd + "/dist",
		publicPath: "/assets/",
	},
	target: "webworker"
};

console.log(process.cwd());

// compiler
var compiler = webpack(config);
var devServerOptions = Object.assign({}, config.devServer );

// mode
function dev() {
	var server = new webpackDevServer(compiler, devServerOptions);
	server.listen(devServerOptions.port, "127.0.0.1", ()=>{});
}

function build() {
	compiler.run((err,stats)=>{});
}

// export
module.exports = {
  dev: dev,
  build: build
}
