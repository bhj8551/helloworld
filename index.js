let express = require('express');
let app = express();

// express의 view engine에 ejs를 set
app.set('view engine', 'ejs');
// 현재위치/public route를 static폴더로 지정
app.use(express.static(__dirname + '/public')); // 1

// query를 통해서 이름을 받는 코드, 모든 query들은 req.query에 저장
app.get('/hello', (req, res) => {
  res.render('hello', {name:req.query.nameQuery});
});

// route parameter를 통해 이름을 받는 코드 :으로 시작되는 route는 해당 부분에
// 입력되는 route의 텍스트가 req.params에 저장된다.
app.get('/hello/:nameParam', (req, res) => {
  res.render('hello', {name:req.params.nameParam});
});

// ejs파일을 사용하기 위해서는 res.render 함수를 사용해야 하며, 첫 번째 parameter로
// ejs 이름, 두 번째는 ejs에서 사용될 object.
// res.render함수는 ejs를 /views 폴더에서 자동으로 찾는다.

let port = 3444;
app.listen(port, () => {
  console.log(`server on! http://localhost:${port}`);
});
