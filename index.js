const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/", function (req, res) {
  let id = req.query.id;
  let rpp = req.query.rpp || 0;
  let page = req.query.page || 1;
  let response = `
    <html>
        <head>
            <script src='https://article.omgcheckitout.com/articles/${id}.js'></script>
        </head>
        <body>
            <div id='container'></div>
            <script type='text/javascript'>
                window.shinez.id = window.shinez.id || '${id}';
                window.shinez.rpp = window.shinez.rpp || ${rpp};
                window.shinez.page = window.shinez.page || ${page};
            </script>
            <script src='/script.js'></script>
        </body>
    </html>
    `;
  res.send(response);
});

app.listen(3000);
