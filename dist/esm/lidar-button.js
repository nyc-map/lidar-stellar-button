import { p as promiseResolve, b as bootstrapLazy } from './index-629fa577.js';

/*
 Stencil Client Patch Browser v2.12.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["lidar-butt_2",[[1,"lidar-butt"],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
