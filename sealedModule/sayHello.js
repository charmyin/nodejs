//var hello=require('./hello').hello;  //exports.hello=hello;
var hello=require('./hello');
var helloObj = new hello();
helloObj.setName('Charmyin');
var helloObj2 = new hello();
helloObj2.setName('Yincm');
helloObj.sayHello();
helloObj2.sayHello();