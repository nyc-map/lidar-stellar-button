'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-005d256c.js');

/*
 Stencil Client Patch Esm v2.12.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["lidar-butt_2.cjs",[[1,"lidar-butt"],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
