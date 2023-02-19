# sierpinski-triangle-cli
Print the [Sierpinski Triangle](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle) to the console!  

![What sierpinski-triangle-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-triangle-cli/main/img/sierpinski-triangle-banner.png)

[![npm version](https://img.shields.io/npm/v/sierpinski-triangle-cli)](https://www.npmjs.com/package/sierpinski-triangle-cli)
[![bundle size](https://img.shields.io/bundlephobia/min/sierpinski-triangle-cli)](https://bundlephobia.com/package/sierpinski-triangle-cli)
[![downloads](https://img.shields.io/npm/dy/sierpinski-triangle-cli)](https://www.npmjs.com/package/sierpinski-triangle-cli)
[![license](https://img.shields.io/npm/l/sierpinski-triangle-cli)](https://github.com/spirometaxas/sierpinski-triangle-cli/blob/main/LICENSE)

Why the console?  Because it's the *cool* way.  

[See All Fractals](https://spirometaxas.com/projects/fractals-cli) in the [fractals-cli](https://www.npmjs.com/package/fractals-cli) project.

## Usage
### Via `npx`:
```
$ npx sierpinski-triangle-cli <n>
$ npx sierpinski-triangle-cli <n> [size] [options]
```
where `n >= 0` and `size >= n` (if provided).

### Via Global Install
```
$ npm install --global sierpinski-triangle-cli
$ sierpinski-triangle-cli <n>
$ sierpinski-triangle-cli <n> [size] [options]
```
where `n >= 0` and `size >= n` (if provided).

### Via Import
```
$ npm install sierpinski-triangle-cli
```
then:
```
const sierpinski = require('sierpinski-triangle-cli');
console.log(sierpinski.create(<n>));
console.log(sierpinski.create(<n>, { 
    size: <number>, 
    inverse: <boolean>, 
    rotate: <flip|standard>, 
    character: <character> 
}));
```
The config params are optional.

## Options
### Recursive Step  
```
$ sierpinski-triangle-cli <n>
```
The first param `<n>` is the recursive step.  `<n>` should be an integer greater than or equal to 0.

#### Examples:
```
$ sierpinski-triangle-cli 4
```
![What sierpinski-triangle-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-triangle-cli/main/img/sierpinski-triangle-4.png)

```
$ sierpinski-triangle-cli 5
```
![What sierpinski-triangle-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-triangle-cli/main/img/sierpinski-triangle-5.png)

### Size
```
$ sierpinski-triangle-cli <n> [size]
```
The optional `[size]` param allows the Sierpinski Triangle to be drawn at larger sizes.  `[size]` should be an integer greater than or equal to `<n>`.  Including size will draw a Sierpinski Triangle of `<n>` recursive steps the size of a triangle with `[size]` recursive steps.  

#### Example:
```
$ sierpinski-triangle-cli 2 5
```
![What sierpinski-triangle-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-triangle-cli/main/img/sierpinski-triangle-2-5.png)

### Inverse
```
$ sierpinski-triangle-cli <n> --inverse
```
The optional `--inverse` param (or shorthand `-i`) will draw the inverse Sierpinski Triangle.  

#### Example:
```
$ sierpinski-triangle-cli 3 5 --inverse
```
![What sierpinski-triangle-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-triangle-cli/main/img/sierpinski-triangle-3-5-inverse.png)

### Rotation
```
$ sierpinski-triangle-cli <n> --rotate=<flip|standard>
```
The optional `--rotate` param rotates the Sierpinski Triangle.  Supported values:

- `flip`: Rotate 180 degrees
- `standard`: No rotation (default)

#### Example:
```
$ sierpinski-triangle-cli 5 --rotate=flip
```
![What sierpinski-triangle-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-triangle-cli/main/img/sierpinski-triangle-5-rotate_flip.png)

### Custom Characters
```
$ sierpinski-triangle-cli <n> --character=<character>
```
The optional `--character=<character>` param will draw triangles using the provided character.  (Please provide only 1 character)  

#### Example:
```
$ sierpinski-triangle-cli 4 5 --character=*
```
![What sierpinski-triangle-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-triangle-cli/main/img/sierpinski-triangle-4-5-character.png)

## Related

#### Main Project
- [fractals-cli](https://www.npmjs.com/package/fractals-cli) - Print 22 Fractals to the console

#### Fractal Shapes
- [sierpinski-carpet-cli](https://www.npmjs.com/package/sierpinski-carpet-cli) - Print the Sierpinski Carpet to the console
- [sierpinski-hexagon-cli](https://www.npmjs.com/package/sierpinski-hexagon-cli) - Print the Sierpinski Hexagon to the console
- [hexaflake-cli](https://www.npmjs.com/package/hexaflake-cli) - Print the Hexaflake Fractal to the console
- [koch-snowflake-cli](https://www.npmjs.com/package/koch-snowflake-cli) - Print the Koch Snowflake to the console
- [koch-antisnowflake-cli](https://www.npmjs.com/package/koch-antisnowflake-cli) - Print the Koch Anti-Snowflake to the console
- [triflake-cli](https://www.npmjs.com/package/triflake-cli) - Print the Triflake Fractal to the console

#### Fractal Patterns
- [cantor-set-cli](https://www.npmjs.com/package/cantor-set-cli) - Print the Cantor Set to the console
- [cantor-dust-cli](https://www.npmjs.com/package/cantor-dust-cli) - Print the Cantor Dust Fractal to the console
- [h-tree-cli](https://www.npmjs.com/package/h-tree-cli) - Print the H-Tree Fractal to the console
- [minkowski-sausage-cli](https://www.npmjs.com/package/minkowski-sausage-cli) - Print the Minkowski Sausage to the console
- [t-square-cli](https://www.npmjs.com/package/t-square-cli) - Print the T-Square Fractal to the console
- [vicsek-fractal-cli](https://www.npmjs.com/package/vicsek-fractal-cli) - Print the Vicsek Fractal to the console
- [v-tree-cli](https://www.npmjs.com/package/v-tree-cli) - Print the V-Tree Fractal to the console

#### Space Filling Curves
- [dragon-curve-cli](https://www.npmjs.com/package/dragon-curve-cli) - Print the Dragon Curve to the console
- [hilbert-curve-cli](https://www.npmjs.com/package/hilbert-curve-cli) - Print the Hilbert Curve to the console
- [moore-curve-cli](https://www.npmjs.com/package/moore-curve-cli) - Print the Moore Curve to the console
- [peano-curve-cli](https://www.npmjs.com/package/peano-curve-cli) - Print the Peano Curve to the console
- [greek-cross-cli](https://www.npmjs.com/package/greek-cross-cli) - Print the Greek Cross Fractal to the console
- [gosper-curve-cli](https://www.npmjs.com/package/gosper-curve-cli) - Print the Gosper Curve to the console
- [sierpinski-arrowhead-cli](https://www.npmjs.com/package/sierpinski-arrowhead-cli) - Print the Sierpinski Arrowhead Curve to the console
- [sierpinski-curve-cli](https://www.npmjs.com/package/sierpinski-curve-cli) - Print the Sierpinski "Square" Curve to the console

## License
- [MIT](https://github.com/spirometaxas/sierpinski-triangle-cli/blob/main/LICENSE) &copy; [Spiro Metaxas](https://spirometaxas.com)