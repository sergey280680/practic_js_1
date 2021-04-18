// let value = 0;

// value = ' ';
// console.log(value.length);
// console.log(value.trim());
// console.log(Number(value.trim()))

// value = true;
// console.log(Number(value));

// value = false;
// console.log(Number(value));

// value = null;
// console.log(Number(value));

// value = undefined;
// console.log(Number(value));

// value = undefined;
// console.log(Boolean(value));

// value = null;
// console.log(Boolean(value));

// value = '';
// console.log(Boolean(value));

// value = " ";
// console.log(Boolean(value));

// value = 0;
// console.log(Boolean(value));

// value = Infinity;
// console.log(Boolean(value));

// value = Infinity;
// console.log(typeof (value));

// value = !!value;
// let number = 1;
// console.log(number);

// number = !number;
// console.log(number);

// 	number = !!number;
// 	console.log(number);
	

// logical operators

//  && 

// console.log(1 && true && 'jawascript');

// console.log(0 && true && 'jawascript');

// console.log(true && 0 && 'jawascript');

//   ||

// console.log(true || 0 || "jawascript");

// console.log(false || 0 || null);


//   if

// let age = 15;
// if (age >= 12 && age <= 14) {
// 	console.log('ok');
// } else {
// 	console.log('no')
// }

//  age = 15;
// if (age >= 12 || age <= 14) {
// 	console.log("ok");
// } else {
// 	console.log("no");
// }

// let day = 'saturday';
// if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
// 	console.log('workday')
// } else {
// 	console.log('dayoff')
// }

// switch (day) {
// 	case 'monday':
// 		console.log(`${day} - workday`);
// 		break;
// 	case 'tuesday':
// 		console.log(`${day} - workday`);
// 		break;
// 	case 'wednesday':
// 		console.log(`${day} - workday`);
// 		break;
// 	case 'thursday':
// 		console.log(`${day} - workday`);
// 		break;
// 	case 'friday':
// 		console.log(`${day} - workday`);
// 		break;
// 	default : console.log(`${day} - dayoffff`);
// }

// switch (day) {
// 	case 'monday':
// 	case 'tuesday':
// 	case 'wednesday':
// 	case 'thursday':
// 	case 'friday':
// 		console.log(`${day} - workday`);
// 		break;
// 	default : console.log(`${day} - dayoffff`);
// }
// 

// ====================================
// проверить является ли год высокосным

// let year = 2020;
// let result = year % 4;
// console.log(result);

// if (result === 0) {
// 	console.log(`${year} - это высокосный год`);
// } else {
// 	console.log(`${year} - это не высокосный год`);
// }

// pattern guard clause============
// function checkYear() {
// 	if (result === 0) return console.log(`${year} - это высокосный год`);
// 	return console.log(`${year} - это не высокосный год`);
// }
// checkYear()



// =============================================
//  task 2
//  комп загадывает число  пользователь свое
// и результат угадал или нет


// let compNumber;
// let userNumber = 5;

// function getPlay() {
// 	compNumber = Math.round(Math.random() * (10 - 1) + 1);
// 	console.log(compNumber);
// 	if (userNumber === compNumber) {
// 		console.log('userName угадал');
// 	} else {
// 		console.log("ты не угадал");
// 	}
// }

// getPlay();


// ======================
// ===task 3
// написать прогу которая будет + -*/ которое пользов вводит через промт
// и выводит результат их /*-+


// function getTotal() {
// 	let num1 = Number(prompt('введите число 1'));
// 	let num2 = Number(prompt("введите число 2"));
// 	let symbol = prompt("введите оператор");
// 	if (symbol === "+") {
// 		console.log(num1 + num2);
// 	} else if (symbol === "-") {
// 		console.log(num1 - num2);
// 	} else if (symbol === "/") {
// 		console.log(num1 / num2);
// 	} else if (symbol === "*") {
// 		console.log(num1 * num2);
// 	} else {
// 		console.log(' у вас неопознаный символ')
// 	}
// }

// getTotal()

// ============================================
// узнать температуру  и перевести в фарингейты
// (0 °C × 9/5) + 32 = 32 °F


// function temperatureToF(celsius) {
// 	let result = (celsius * 9) / 5 + 32;
// 	return result;
// }

// let result = temperatureToF(5);
// console.log(result);


// function temperatureToC(Far) {
// 	let result = (Far - 32) * 5 / 9;
// 	return result;
// }

// let result = temperatureToC(5);
// console.log(result);

function temperatureToC(Far) {
	let result = Math.round((((Far - 32) * 5) / 9) * 100) / 100;
	return result;
}

let result = temperatureToC(21);
console.log(result);





