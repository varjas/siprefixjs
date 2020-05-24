# SIPrefixJS
## Introduction
SIPrefixJS converts numbers between varied orders of magnitude and SI prefix based magnitudes.

Large or small numbers can be scaled to between 10⁰ and 10³ with a corresponding SI prefix. Scaled numbers with an SI prefix can be converted back to the full magnitude representation.

These functions allow for improved visualization of large or small numbers, and enable easy use of numbers with SI prefixes in calculations.

To use SIPrefixJS, clone the repository and import the module:
```javascript
from siprefix import siprefix
```

## Usage
SIPrefixJS only uses SI prefixes that are separated by 3 orders of magnitude, including:

Y, Z, E, P, T, G, M, k, (base), c, m, µ, n, p, f, a, z, y

Hecto- (h), deca- (da), deci- (d), centi- (c), and any non-SI prefixes are not used in SIPrefixJS.

### Value Scaling
Scales input value to within 10⁰ and 10³ with a corresponding SI prefix. (Scaling can exceed 10³ if input is beyond range of SI prefix magnitudes)

```javascript
siprefix.scale(value, combined)
```

#### Base Order Input
The `value` parameter can be a `number`, or `string` type.

The function will output a `string` with the scaled number and prefix separated by a space.

If the `combined` argument is set to `false`, the function will output an array containing a `number` of the scaled number and a `string` of the prefix.

```javascript
// number
siprefix.scale(0.5)
// '500 m'

siprefix.scale(9000)
// '9 k'

siprefix.scale(42)
// '42'

// string
siprefix.scale('0.0000000000004')
// '400 f'

// Array output
siprefix.scale(0.5, false)
// [ 500, 'm' ]
```

#### Non-Base Order Input
Use of non-base order input requires the value and prefix to be combined into a single `string` type. The value and prefix are not required to be separated by a space.

```javascript
// Prefix space
siprefix.scale('0.00005 P')
// '50 G'

// No prefix space
siprefix.scale('0.00005P')
// '50 G'

// Array output
siprefix.scale('0.00005 P', false)
// [ 50, 'G' ]
```

### Value Expansion
Expands input value with SI prefix to full scale representation.

```javascript
siprefix.expand(value)
```

The `value` parameter should be a `string` type to include an associated SI prefix. The prefix can directly follow the number without a space. The function will not expand any values if the parameter is a `number` type.

The function will output a `number` of the expanded number.

```javascript
siprefix.expand('500 m')
// 0.5

siprefix.expand('9 k')
// 9000

siprefix.expand('400 f')
// 4e-13
```

### Considerations
Sorting of values should be done prior to scaling as magnitude differences will not be handled correctly in the output `str` type.

The array output option is included to allow for easier formatting of the output values.

SIPrefix does not handle units at all. There are other packages capable of this functionality (see Resources section below).

Inclusion of units in some cases will lead to errors due to overlap with SI prefixes. For instance, including the 'meter' abbreviation 'm' as input will cause incorrect scaling/expansion due to treating the unit as the 'milli' prefix.

If units are required, they can be removed from the input value and appended after scaling/expansion.

## Resources
- [SIPrefixJS GitLab](https://gitlab.com/varjas/siprefixjs)
- [SIPrefixJS GitHub](https://github.com/varjas/siprefixjs)
- [SIPrefix Python GitLab](https://gitlab.com/varjas/siprefix)
- [SIPrefix Python GitHub](https://github.com/varjas/siprefix)
- [Magnitude Library](https://github.com/juanre/magnitude)
- [Metric prefix - Wikipedia](https://wikipedia.org/wiki/Metric_prefix)

## License
Code released under the [MIT License](LICENSE.md).

