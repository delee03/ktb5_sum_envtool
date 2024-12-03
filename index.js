function calculate(operation) {
	const num1 = parseFloat(document.getElementById('num1').value);
	const num2 = parseFloat(document.getElementById('num2').value);
	let result = 0;

	if (isNaN(num1) || isNaN(num2)) {
		alert('Vui lòng nhập đầy đủ hai số hợp lệ!');
		return;
	}

	switch (operation) {
		case 'add':
			result = num1 + num2;
			break;
		case 'subtract':
			result = num1 - num2;
			break;
		case 'multiply':
			result = num1 * num2;
			break;
		case 'divide':
			if (num2 === 0) {
				alert('Không thể chia cho 0!');
				return;
			}
			result = num1 / num2;
			break;
		default:
			break;
	}

	document.getElementById('result').textContent = result;
}
