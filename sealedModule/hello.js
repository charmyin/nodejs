function hello(){
	var name;

	this.setName=function(helloname){
		name=helloname;
	}

	this.sayHello=function(){
		console.log("Hello "+name+"!");
	}
}

//exports.hello=hello;
module.exports=hello;