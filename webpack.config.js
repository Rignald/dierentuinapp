module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + "/dist", // or path: path.join(__dirname, "dist/js"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};  
