import { Configuration } from 'webpack';
import { browserConfig } from './webpack/webpack.config.browser';
import merge from 'webpack-merge';

const baseConfig: Configuration = {
  mode: 'production',
};

export default [
  ...browserConfig.map(config => merge(baseConfig, config)),
];