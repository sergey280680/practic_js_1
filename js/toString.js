// способы приведения различных данных к строке

//  === number to string ===
let value = 0
console.log(value)
console.log(typeof value)


// 1 способ конструктор String
let toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2 способ конкотенации
toString = value + '';
console.log(`${value}, через конкотенацию: `, toString);
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString);


// ===========================
value = 1;
console.log(value);
console.log(typeof value);

// 1 способ конструктор String
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(
	`тип данных ${value}, через конструктор String(): `,
	typeof toString
);

// 2 способ конкотенации
toString = value + "";
console.log(`${value}, через конкотенацию: `, toString);
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString);


// ===========================
// значение бесконечности
value = Infinity;
console.log(value);
console.log(typeof value);

// 1 способ конструктор String
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(
	`тип данных ${value}, через конструктор String(): `,
	typeof toString
);

// 2 способ конкотенации
toString = value + "";
console.log(`${value}, через конкотенацию: `, toString);
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString);


// ===========================
// значение не число(NaN) к строке
value = NaN;
console.log(value);
console.log(typeof value);

// 1 способ конструктор String
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(
	`тип данных ${value}, через конструктор String(): `,
	typeof toString
);

// 2 способ конкотенации
toString = value + "";
console.log(`${value}, через конкотенацию: `, toString);
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString);


// ===============================
// булевое (логическое) true to string
value = true;
console.log(value);
console.log(typeof value);

// 1 способ конструктор String
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(
	`тип данных ${value}, через конструктор String(): `,
	typeof toString
);

// 2 способ конкотенации
toString = value + "";
console.log(`${value}, через конкотенацию: `, toString);
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString);

// ===============================
// булевое (логическое) false to string
value = false;
console.log(value);
console.log(typeof value);

// 1 способ конструктор String
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(
	`тип данных ${value}, через конструктор String(): `,
	typeof toString
);

// 2 способ конкотенации
toString = value + "";
console.log(`${value}, через конкотенацию: `, toString);
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString);



// ===============================
// undefined to string
value = undefined;
console.log(value);
console.log(typeof value);

// 1 способ конструктор String
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(
	`тип данных ${value}, через конструктор String(): `,
	typeof toString
);

// 2 способ конкотенации
toString = value + "";
console.log(`${value}, через конкотенацию: `, toString);
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString);


// ===============================
// null to string
value = null;
console.log(value);
console.log(typeof value);

// 1 способ конструктор String
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(
	`тип данных ${value}, через конструктор String(): `,
	typeof toString
);

// 2 способ конкотенации
toString = value + "";
console.log(`${value}, через конкотенацию: `, toString);
console.log(`тип данных ${value}, через конкотенацию: `, typeof toString);