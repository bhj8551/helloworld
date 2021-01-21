let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

let port = 3444;
app.listen(port, () => {
  console.log(`server on! http://localhost:${port}`);
});
