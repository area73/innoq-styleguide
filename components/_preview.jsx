import { createElement } from 'complate-stream'

export default function PreviewLayout ({ context }, ...children) {
  const stylesheetPath = context.app.uri('css/bundle.css')

  return <html>
    <head>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='stylesheet' type='text/css' href='/css/normalize.css' />
      <link media='all' rel='stylesheet' href={stylesheetPath} />
      <title>Preview Layout</title>
    </head>
    <body class='application'>
      {children}
    </body>
    <script src='/js/bundle.js' />
  </html>
}
