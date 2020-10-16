var express+require("express");
var app=express();
app.get("/",function(req,res){ 
	res.send("hello world");
});
app.listen(3000,function(){
	console.log("伺服器已經啟動在 http://localhost:3000/");
});