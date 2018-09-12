const Koa = require("koa");
const Router = require("koa-router");
const path = require("path");
const app = new Koa();
const router = new Router();


app.use(require("koa-static")(path.join(__dirname, 'public')));
app.use(router.routes());

router.get('/', (ctx, next) => {
  ctx.body = "index.html";
});



app.listen(8000, () => {
  console.log("server work on port 8000");
});
