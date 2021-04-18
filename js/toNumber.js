// способы приведения различных данных к числу

// ==========================
//  === number to string ===
let value = "billi bob";
console.log(value);
console.log(typeof value);

// 1 способ конструктор Number
let toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
	`тип данных ${value}, через конструктор Number(): `,
	typeof toNumber
);

// 2 способ унарный +
toNumber = +value;
console.log(`${value}, через унарный + : `, toNumber);
console.log(`тип данных ${value}, через унарный + : `, typeof toNumber);


// ==========================
//  === строчное число к числу ===
value = "123";
console.log(value);
console.log(typeof value);

// 1 способ конструктор Number
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
	`тип данных ${value}, через конструктор Number(): `,
	typeof toNumber
);

// 2 способ унарный +
toNumber = +value;
console.log(`${value}, через унарный + : `, toNumber);
console.log(`тип данных ${value}, через унарный + : `, typeof toNumber);


// ==========================
//  === пустая строка к числу ===
value = "";
console.log(value);
console.log(typeof value);

// 1 способ конструктор Number
toNumber = Number(value);
console.log(`пустая строка${value}, через конструктор Number(): `, toNumber);
console.log(
	`тип данных пустой строки ${value}, через конструктор Number(): `,
	typeof toNumber
);

// 2 способ унарный +
toNumber = +value;
console.log(`пустая строка${value}, через унарный + : `, toNumber);
console.log(`тип данных пустой строки ${value}, через унарный + : `, typeof toNumber);


// ==========================
//  === пустая строка с пробелом к числу ===
value = " ";
console.log(value);
console.log(typeof value);

// 1 способ конструктор Number
toNumber = Number(value);
console.log(`пустая строка с пробелом ${value}, через конструктор Number(): `, toNumber);
console.log(
	`тип данных пустой строки с пробелом ${value}, через конструктор Number(): `,
	typeof toNumber
);

// 2 способ унарный +
toNumber = +value;
console.log(`пустая строка с пробелом ${value}, через унарный + : `, toNumber);
console.log(`тип данных пустой строки с пробелом ${value}, через унарный + : `, typeof toNumber);


// ==========================
//  === булевое true к числу ===
value = true;
console.log(value);
console.log(typeof value);

// 1 способ конструктор Number
toNumber = Number(value);
console.log(`булевое  ${value}, через конструктор Number(): `, toNumber);
console.log(
	`тип данных булевого  ${value}, через конструктор Number(): `,
	typeof toNumber
);

// 2 способ унарный +
toNumber = +value;
console.log(`булевое  ${value}, через унарный + : `, toNumber);
console.log(
	`тип данных булевого  ${value}, через унарный + : `,
	typeof toNumber
);

// ==========================
//  === булевое false к числу ===
value = false;
console.log(value);
console.log(typeof value);

// 1 способ конструктор Number
toNumber = Number(value);
console.log(`булевое  ${value}, через конструктор Number(): `, toNumber);
console.log(
	`тип данных булевого  ${value}, через конструктор Number(): `,
	typeof toNumber
);

// 2 способ унарный +
toNumber = +value;
console.log(`булевое  ${value}, через унарный + : `, toNumber);
console.log(
	`тип данных булевого  ${value}, через унарный + : `,
	typeof toNumber
);


// ==========================
//  === undefined  к числу ===
value = undefined;
console.log(value);
console.log(typeof value);

// 1 способ конструктор Number
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
	`${value}, через конструктор Number(): `,
	typeof toNumber
);

// 2 способ унарный +
toNumber = +value;
console.log(`${value}, через унарный + : `, toNumber);
console.log(
	`тип данных  ${value}, через унарный + : `,
	typeof toNumber
);

// ==========================
//  === null  к числу ===
value = null;
console.log(value);
console.log(typeof value);

// 1 способ конструктор Number
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(
	`${value}, через конструктор Number(): `,
	typeof toNumber
);

// 2 способ унарный +
toNumber = +value;
console.log(`${value}, через унарный + : `, toNumber);
console.log(
	`тип данных  ${value}, через унарный + : `,
	typeof toNumber
);



