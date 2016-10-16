var login=async (ctx,next) => {
		console.log(ctx.request.method+":"+ctx.request.url);
		ctx.response.body=`
							<h1>欢迎来到首页</h1>
							<form action='/singin' method='post'>
								<p>Name:<input type='text' value='koa' name='name'></p>
								<p>PassWord:<input type='text' name='password'></p>
								<p><input type="submit" value="Submit"></p>
							</form>
						  `;
};

var singin=async (ctx,next)=> {
	  console.log(ctx.request.method+":"+ctx.request.url);
	  var url=ctx.request.url;
	  var name=ctx.request.body.name||'';
	  var password=ctx.request.body.password||'';
	  if(name=='hehong'&&password=='12345'){
	  	ctx.response.body=`<h1>恭喜 ${name}您登陆成功!!</h1>`
	  }else{
	  	ctx.response.body=` <h1>登陆失败！！</h1>
	  						<a  href='/' >重新登陆</a>`;
	  }
}

module.exports={
	'GET /':login,
	'POST /singin':singin
};