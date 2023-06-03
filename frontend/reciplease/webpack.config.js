// Dot Env files are not automatically accepted in REACT
// So this is exists to let us pass in the data from our backend, which we do in other parts of our app.
//https://www.npmjs.com/package/dotenv-webpack link to the package I used
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  plugins: [
    new DotenvWebpackPlugin(),
  ],
};