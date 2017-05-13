/**
 * Inheritance using the 5 methodso of Object Creation in JavaScript
 */

var myApp = {}

//1. Using SIMPLE OBJECT LITERAL METHOD
myApp.chatClient1 = {}; // Creates a new chatClient object
myApp.chatClient1.font = 'Tahoma'; // 
myApp.chatClient1.shareChat = true;
myApp.chatClient1.setFont = function(font) {
	this.font = font;
}

myApp.panel = {};
myApp.panel.defaultWidth = 300;
myApp.panel.toggleDisplay = function() {
	this.displayed = (this.displayed == "none") ? "" : "none";
}

// There is no inheritance between the chatClient1 and panel object. 
// So below is the best that we can do
//myApp.panel.toggleDisplay.call(myApp.chatClient1);
myApp.chatClient1.defaultWidth = myApp.panel.defaultWidth;

console.log(myApp.chatClient1);
console.log(myApp.panel);