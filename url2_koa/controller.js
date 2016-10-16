var fs=require('fs');

function addController(router,dir){
	//项目目录
   var dirname=__dirname;
   var files=fs.readdirSync(dirname+'/'+dir);
   var js_files=files.filter(function(f){
   				return f.endsWith('.js');
   },files);
   js_files.map(function(x){
   		var mapping=require(dirname+'/'+dir+'/'+x);
   		addMapping(router,mapping);
   });
   
}
 function addMapping(router,mapping){
 	for(var url in mapping){
 		if(url.startsWith('GET ')){
 			var path=url.substring(4);
 			router.get(path,mapping[url]);
 		}else if(url.startsWith('POST ')){
 			var path=url.substring(5);
 			router.post(path,mapping[url]);
 		}
 	}
 }

 module.exports=function(dir){
 	var controllers_dir=dir||'controller';
 	var router=require('koa-router')();
 	addController(router, controllers_dir);
 	return router.routes();
 }