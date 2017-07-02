export default {
  devtool: 'inline-source-map',
  context: __dirname,
  module: {
    loaders: [
      {
          test: /\.js$/,
          enforce: 'post',
          use: {
            loader: 'istanbul-instrumenter-loader',
            options: { esModules: true }
          },
          exclude: /node_modules|\.spec\.js$/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: [
         'isomorphic-style-loader',
         'css-loader',
         'sass-loader',
        ]
      },
      {
        test: /\.css$/,
        loader: 'isomorphic-style-loader!css-loader'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        exclude: /node_modules/
      },
    ]
  }
};
