const config = {
  static: {
    manifest: false,
    bundles: [
      {
        source: 'lib/images',
        target: 'public/static'
      },
      {
        source: 'node_modules/document-register-element/build/document-register-element.js',
        target: 'public/js/document-register-element.js'
      }
    ]
  },
  sass: {
    manifest: false,
    bundles: [
      {
        entryPoint: 'lib/styles/index.scss',
        target: 'public/css/bundle.css'
      },
      {
        entryPoint: 'node_modules/normalize.css/normalize.css',
        target: 'public/css/normalize.css'
      }
    ]
  },
  js: {
    manifest: false,
    bundles: [
      {
        entryPoint: 'lib/scripts/index.js',
        target: 'public/js/bundle.js'
      }
    ]
  }
}

module.exports = config
