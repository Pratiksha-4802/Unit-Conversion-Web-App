function convert() {
	// Get input values
	let value = document.getElementById("value").value;
	let inputUnit = document.getElementById("inputUnit").value;
	let outputUnit = document.getElementById("outputUnit").value;

	// Perform conversion
	let result = 0;
	switch (inputUnit) {
		case "m":
			switch (outputUnit) {
				case "m":
					result = value;
					break;
				case "km":
					result = value / 1000;
					break;
				case "cm":
					result = value * 100;
					break;
				case "mm":
					result = value * 1000;
					break;
			}
			break;
		case "km":
			switch (outputUnit) {
				case "m":
					result = value * 1000;
					break;
				case "km":
					result = value;
					break;
				case "cm":
					result = value * 100000;
					break;
				case "mm":
					result = value * 1000000;
					break;
			}
			break;
		case "cm":
			switch (outputUnit) {
				case "m":
					result = value / 100;
					break;
				case "km":
					result = value / 100000;
					break;
				case "cm":
					result = value;
					break;
				case "mm":
					result = value * 10;
					break;
			}
			break;
		case "mm":
			switch (outputUnit) {
				case "m":
					result = value / 1000;
					break;
				case "km":
					result = value / 1000000;
					break;
				case "cm":
					result = value / 10;
					break;
				case "mm":
					result = value;
					break;
			}
			break;
	}

	// Display result
	document.getElementById("result").innerHTML = value + " " + inputUnit + " = " + result + " " + outputUnit;
}