var name;

exports.setName=function(helloname){
	name=helloname;
}

exports.sayHello=function(){
	console.log("Hello "+name+"!");
}