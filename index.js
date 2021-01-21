let express = require('express');
let app = express();

// 현재위치/public route를 static폴더로 지정
app.use(express.static(__dirname + '/public')); // 1

let port = 3444;
app.listen(port, () => {
  console.log(`server on! http://localhost:${port}`);
});
