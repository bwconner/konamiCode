//Activate with the space key as the last key
function konamiCode () {
	var validKeys = {
		32: 'space',
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down',
		65: 'a',
		66: 'b'
	};

	var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'space'];
	var konamiCodePosition = 0;

	document.addEventListener('keydown', function(e) {
		var keyPressed = validKeys[e.keyCode];
		var requiredKey = konamiCode[konamiCodePosition];

		if (keyPressed == requiredKey) {
			konamiCodePosition++;

			if (konamiCodePosition == konamiCode.length) {
				//Konami Code activated, do code stuff here
			}
		} else {
			konamiCodePosition = 0;
		}
	});
};

//Activate with the enter key as the last key
function konamiCode () {
	var validKeys = {
		13: 'enter',
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down',
		65: 'a',
		66: 'b'
	};

	var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];
	var konamiCodePosition = 0;

	document.addEventListener('keydown', function(e) {
		var keyPressed = validKeys[e.keyCode];
		var requiredKey = konamiCode[konamiCodePosition];

		if (keyPressed == requiredKey) {
			konamiCodePosition++;

			if (konamiCodePosition == konamiCode.length) {
				//Konami Code activated, do code stuff here
			}
		} else {
			konamiCodePosition = 0;
		}
	});
};

//Activate with the a key as the last key
function konamiCode () {
	var validKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down',
		65: 'a',
		66: 'b'
	};

	var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
	var konamiCodePosition = 0;

	document.addEventListener('keydown', function(e) {
		var keyPressed = validKeys[e.keyCode];
		var requiredKey = konamiCode[konamiCodePosition];

		if (keyPressed == requiredKey) {
			konamiCodePosition++;

			if (konamiCodePosition == konamiCode.length) {
				//Konami Code activated, do code stuff here
			}
		} else {
			konamiCodePosition = 0;
		}
	});
};
