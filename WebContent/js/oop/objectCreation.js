/**
 * 5 ways to create objects in JavaScript
 */

// 1. SIMPLE OBJECT LITERAL
var chatClient1 = {}; // Creates a new chatClient object
chatClient1.font = 'Tahoma'; // 
chatClient1.shareChat = true;

chatClient1.setFont = function (font) {
	this.font = font;
}

console.log(chatClient1,' : ', chatClient1.font,' : ', chatClient1.shareChat);
// client1 = new chatClient1();


// NESTED OBJECT LITERAL
var chatClient2 = {
		font : 'helvetica',
		shareChat : true,
		setFont : function(font) {
			this.font = font;
		}
}
console.log(chatClient2,' : ', chatClient2.font,' : ', chatClient2.shareChat);


// CONSTRUCTOR USING OBJECT LITERAL
var chatClient3 = function(defaultFont) {
	var that = {};
	that.shareChat = false;
	that.font = defaultFont;
	that.setFont = function(font) {
		that.font = font;
	}
	return that;
}

client3 = new chatClient3('Times New Roman');
console.log(client3,' : ', client3.font,' : ', client3.shareChat);
client3_1 = new chatClient3('Times New Roman 2');
console.log(client3_1,' : ', client3_1.font,' : ', client3_1.shareChat);


// SIMPLE CONSTRUCTOR FOR NEW
var chatClient4 = function(defaultFont) {
	this.shareChat = false;
	this.font = defaultFont;
	this.setFont = function(font) {
		this.font = font;
	}
}
client4 = new chatClient4('Courier New');
console.log(client4,' : ', client4.font,' : ', client4.shareChat);


// PROTOTYPE WITH CONSTRUCTOR FOR NEW
var chatClient5 = function(defaultFont) {
	this.font = defaultFont;
}
chatClient5.prototype.shareChat = false;
chatClient5.prototype.setFont = function(font) {
	this.font = font;
}
client5 = new chatClient5('Truebuchet');
console.log(chatClient5,' : ', chatClient5.font,' : ', chatClient5.shareChat);
console.log(client5,' : ', client5.font,' : ', client5.shareChat);
