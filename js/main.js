setTimeout(function(){
	$("#redC").css("display","block");
	$("#redC1").css("display","block");
	$("#redC2").css("display","block");
 }, 2100);
setTimeout(function(){
	$("#container").css("display","block");
 }, 2300);

setTimeout(function(){
	$("#PopUp1").css("display","block");
	$("#PopUp2").css("display","block");
	$("#PopUp3").css("display","block");
	$("#PopUp4").css("display","block");
	$("#PopUp5").css("display","block");
	$("#PopUp6").css("display","block");
 }, 500);

setTimeout(function(){
	$("#PopUp7").css("display","block");
	$("#PopUp8").css("display","block");
	$("#PopUp9").css("display","block");
	$("#PopUp10").css("display","block");

 }, 1500);
setTimeout(function(){
	$("#PopUp11").css("display","block");
	$("#PopUp12").css("display","block");
	$("#PopUp13").css("display","block");

 }, 1000);

setTimeout(function(){
	$("#date21").css("display","block");
	$("#date22").css("display","block");
	$("#date23").css("display","block");
	$("#date24").css("display","block");
	$("#date25").css("display","block");
	$("#date26").css("display","block");
	$("#date27").css("display","block");
	$("#date28").css("display","block");

 }, 2000);


setTimeout(function(){
	$("#date1").css("display","block");
	$("#date2").css("display","block");
	$("#date3").css("display","block");
	$("#date4").css("display","block");
	$("#date5").css("display","block");
	$("#date6").css("display","block");
	$("#date7").css("display","block");
	$("#date8").css("display","block");
	$("#date9").css("display","block");
	$("#date10").css("display","block");
	$("#date11").css("display","block");
	$("#date12").css("display","block");
	$("#date13").css("display","block");
	$("#date14").css("display","block");
	$("#date15").css("display","block");
	$("#date16").css("display","block");
	$("#date17").css("display","block");
	$("#date18").css("display","block");
	$("#date19").css("display","block");
	$("#date20").css("display","block");

}, 2000);


setTimeout(function(){
	$("#blue path").css("display","block");
 }, 200);





 var controller = new YTV('frame', {
     user: 'YoutubeUsername'
 });









// var concentricModule = (function(){
//
// 	// Options
// 	var options = {
// 		num : 10, // Number of circles to draw
// 		width :  10, // Width of first, innermost, circle.
// 		height :  10, // Height of first, innermost, circle.
// 		widthAccumalator : 12, // Additional pixels to add on to each subsequent circle
// 		heightAccumalator : 12, // "    "
// 		delay : 0, // Initial delay before start of the first animation.
// 		delayIncrement :  0.08, // Increment in animation delay.
// 		animDuration : ' 0.9s', // Animation duration
// 		animBorder : 4,
// 	}
//
// 	// Vars
// 	var id = 0, // Used for creating ids for circles.
// 	containerDiv = document.getElementById('container'),
// 	textDiv = document.getElementById('text'),
// 		border = 1, // Should read this from style file...
// 		leftIncrement = (options['widthAccumalator']/2), // Should check this is a positive number
// 		left = 0,
// 		topY = 0,
//
// 		a2z = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ", // Used to create unique id for the concentric circles.
// 		alphabet = a2z.split(''); // Array of alphabets from a to J.
//
// 		// Get viewport dimensions
// 		vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// 		vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//
// 		// Create custom style to add dynamically created keyframes to
// 		style = document.getElementsByTagName('head')[0].appendChild(document.createElement('style'));
// 		style.id= "custom-css";
//
// 		function init(user_options){
// 			// Replace defaults with user supplied values
// 			for (key in user_options)
// 				options[key] = user_options[key];
//
// 			// Vars dependent on possible user supplied values
// 			var currentDelay = options['delay'],
// 			currentWidth = options['width'],
// 			currentHeight = options['height'];
//
// 			// Create divs and unique keyframes
// 			for(var i = 0; i< options['num']; i++){
// 				var animTopY = -topY-(options['animBorder']-1);
// 				var animLeft = -left-(options['animBorder']-1);
//
// 				// Create circle div
// 				var div = document.createElement('div');
//
// 				// Style
// 				div.className = 'ring';
// 				div.style.width = currentWidth + 'px';
// 				div.style.height = currentHeight + 'px';
// 				div.id = "ring-" + alphabet[i];
//
// 				// Create new keyframe with updated left and top offsets;
// 				_createKeyframe(div.id, animLeft, animTopY, left, topY);
// 				// console.log('animDuration: ' + options['a);
// 				var anim = div.id + options['animDuration'] + ' linear '+ currentDelay + 's infinite';
// 				div.style.animation = anim;
// 				div.style.oAnimation = anim;
// 				div.style.mozAnimation = anim;
// 				div.style.webkitAnimation = anim;
//
// 				// Set left and top offsets
// 				div.style.left = '-' + left + 'px';
// 				div.style.top = '-' + topY + 'px';
// 				containerDiv.appendChild(div);
//
// 				// Increment vars
// 				currentWidth += options['widthAccumalator'];
// 				currentHeight += options['heightAccumalator'];
// 				currentDelay += options['delayIncrement'];
// 				left += leftIncrement;
// 				topY += leftIncrement;
// 				id++;
// 			}
//
// 			// Keep container div in center of screen now we know its width and height
// 			var containerTopOffset = (((vh/2) - (currentHeight/2)) + topY);
// 			var containerLeftOffset = (((vw/2) - (currentWidth/2)) + left);
// 			containerDiv.style.top = containerTopOffset + 'px';
// 			containerDiv.style.left = containerLeftOffset + 'px';
//
// 			// Dynamically place text div above it
// 			textDiv.style.top = (containerTopOffset+(currentHeight/2)+40) + 'px';
// 		}
//
//
// 	// Create a keyframe, which is appended to the style element custom-css.
// 	function _createKeyframe(name, animLeftT, animTopYT, leftT, topYT) {
// 		var rule =  name + ' {\
// 			25%  { \
// 				border: ' + options['animBorder'] + 'px solid grey; \
// 				top: ' + animTopYT + 'px; \
// 				left: ' + animLeftT +'px; \
// 			} \
// 			50% { \
// 				border: ' + border + 'px solid grey; \
// 				top: -' + topYT + 'px; \
// 				left: -' + leftT +'px; \
// 			} \
// 			100% { \
// 				border: ' + border + 'px solid grey; \
// 				top: -' + topYT + 'px; \
// 				left: -' + leftT +'px; \
// 			} \
// 		}';
// 		var webkit = ' @-webkit-keyframes ' + rule;
// 		var moz = ' @-moz-keyframes ' + rule;
// 		var o = ' @-o-keyframes ' + rule;
// 		var keyframes = ' @keyframes ' + rule;
// 		style.innerHTML += webkit + moz + o + keyframes;
// 	}
// 	return {
// 		init : init
// 	}
// })();
//
// concentricModule.init({
// 	num:10,
// 	height: 10,
// 	width: 10,
// 	animBorder: 4,
// 	animDuration: ' 3s',
// 	delayIncrement: 0.07
// });
