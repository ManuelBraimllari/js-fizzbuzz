const eleSquares = document.querySelector('.quadrati');

for (let num = 1; num <= 100; num++) {
	let numString = num;

	const eleSq = document.createElement('div');
	eleSq.classList.add('sq');
	if (num % 15 == 0) {
		numString = num + ' - fizzbuzz';
		eleSq.classList.add('fizzbuzz');
	} else if (num % 5 == 0) {
		numString = num + ' - buzz';
		eleSq.classList.add('buzz');
	} else if (num % 3 == 0) {
		numString = num + ' - fizz';
		eleSq.classList.add('fizz');
	} else {
	}

	eleSq.innerHTML = numString;
	eleSquares.append(eleSq);
	console.log(numString);
}