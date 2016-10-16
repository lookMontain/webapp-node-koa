var Koa=require('koa');
var bodyParser=require('koa-bodyparser');
var controller=require('./controller');

var app=new Koa();
//login request url

app.use(async (ctx,next) => {
	console.log(`Process:${ctx.request.method},${ctx.request.url}...`);
	await next();
});
app.use(bodyParser());
app.use(controller());
app.listen(8001);
console.log('you can listen to 8001, start your work!!');