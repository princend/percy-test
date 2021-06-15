const PercyScript = require('@percy/script');
const httpServer = require('http-server');

const PORT = process.env.PORT_NUMBER || 8000;
const TEST_URL = `http://localhost:${PORT}`;
// const TEST_URL = 'https://dev.walkflow.biz/';

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {

  // 起server
  let server = httpServer.createServer();
  server.listen(PORT);

  console.log(`Server started at ${TEST_URL}`);

  // 去該網址拍照
  await page.goto(TEST_URL);


  await percySnapshot('TodoMVC home page');



  // await page.type('.new-todo', 'A really important todo');

  //針對該測試網頁按下enter
  // await page.keyboard.press('Enter');
  // 針對 768, 992, 1200 的螢幕寬度 作snapshot


  // await percySnapshot('TodoMVC with a new todo', { widths: [768, 992, 1200] });



  server.close();
});
