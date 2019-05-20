const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send(
    `<html>
        <div>
          <div id="id">
            <h1>开课吧</h1>
            <div class="demo">开课吧还不错</div>
          </div>
        </div>
      </html>
    `
  )
});

app.listen(3000,()=>{
  console.log('启动成功');
});
