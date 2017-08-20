// Return prefix or scale based on one input
// Only handles prefixes separated by 3 orders of magnitude
function siConvert(value) {
	// Requre value argument
	if (typeof value === 'undefined') {
		return console.log("siConvert() missing 1 positional argument: 'value'");
	}
	// Define prefix, scale relations
	var data = {
		'Y': 24,
		'Z': 21,
		'E': 18,
		'P': 15,
		'T': 12,
		'G': 9,
		'M': 6,
		'k': 3,
		'': 0,
		'm': -3,
		'µ': -6,
		'n': -9,
		'p': -12,
		'f': -15,
		'a': -18,
		'z': -21,
		'y': -24
	}
	// If prefix is set
	if (typeof value === 'string') {
		return data[value];
	// If scale is set
	}else if (typeof value === 'number') {
		for (var key in data) {
			if (data[key] === value) return key;
		}
	}
}

// Returns scaled value with SI prefix
function scale(value, combined) {
	// Set combined to true if anything other than false
	combined = combined === false ? false : true;
	// Set starting order
	if (typeof value === 'string') {
		// Expand number
		value = expand(value);
	}

	// Convert to number for scaling calculations
	value = Number(value);

	// Get number of non-decimal digits
	var order = Math.floor(Math.log10(Math.abs(value)));

	// Convert order to first lowest multiple of 3
	order = Math.floor(order / 3) * 3;
	
	// Adjust order by maximum range of prefixes in dictionary
	if (order > 24) {
		order = 24;
	}else if (order < -24) {
		order = -24;
	}

	// Scale number by order of magnitude determined
	value = value / 10 ** order;

	// Attempt to get prefix from order
	var prefix = siConvert(order);

	if (combined == true) {
		// Return scaled value and SI prefix as string
		return (String(value) + ' ' + prefix).trim();
	}else if (combined == false) {
		// Return scaled value and SI prefix as array
		return [value, prefix];
	}

}

// Returns expanded value in base scale
function expand(value) {
	// Set starting order
	var order = 0;
	if (typeof value === 'string') {
		// Determine order if prefix is included
		if (/[a-zA-Z]/.test(value.slice(-1))) {
			var prefix = value.slice(-1);
			order = siConvert(prefix);
			// Remove prefix from value string
			value = value.slice(0, -1).trim();
		}
	}

	// Convert to number for expansion calculation
	value = Number(value);

	// Scale value by order of magnitude determined
	value = value * 10 ** order;

	return value;
}
