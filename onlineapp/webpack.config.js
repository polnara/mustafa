const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	
	mode: "development", // enabled useful tools for development
	//entry: ["./src/js/app.js","./src/js/Calculator.js"],
	entry:["./src/ts/app.ts"],
	
	module: {
		rules: [
		  {
			use: 'ts-loader',
			exclude: /node_modules/,
		  },
		],
	  },
	  
	  resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	  },
	output: {
		filename: 'output.js',
	},
	plugins: [new HtmlWebpackPlugin()],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	}

}