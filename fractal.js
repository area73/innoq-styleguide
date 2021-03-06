'use strict'

/*
* Require the path module
*/
const path = require('path')

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create()
const complate = require('complate-fractal')

/*
 * Give your project a title.
 */
fractal.set('project.title', 'INNOQ Styleguide')

/*
 * Register complate adapter.
 */
const componentsDir = path.join(__dirname, 'components')

fractal.components.set('ext', '.html')
fractal.components.engine(complate({
  rootDir: __dirname,
  // TBD explain envPath
  // envPath: path.resolve(componentsDir, 'env.js'),
  //
  // If you're using some other file name for your preview layout, you
  // can configure it with `previewPath`
  // previewPath: path.resolve(componentsDir, '_preview.jsx'),
  generateURI: function (uri) { // Don't use () to avoid this binding
    return this.assetPath(uri)
  }
}))
fractal.components.set('path', componentsDir)
fractal.components.set('ext', '.html')

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'))

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'))

/*
 * Tell Fractal where to export the static site to.
 */
fractal.web.set('builder.dest', path.join(__dirname, 'dist', 'site'))
