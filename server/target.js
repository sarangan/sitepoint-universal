import http from "http";

// a really basic target server for our proxy
// it always returns the same html page

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Proxied Page</title>
  </head>
  <body>
    <header>This is my header.</header>
    <p>Some awesome content.</p>
    <my-example name="Jack"></my-example>
    <my-example name="Jill"></my-example>
    <post-list></post-list>
    <post-list type="Cats"></post-list>
    <footer>It all ends here in the footer</footer>
    <client-initial-state></client-initial-state>
    <script src="/webpack/bundle.js"></script>
  </body>
</html>
  `);
  res.end();
}).listen(3001);
