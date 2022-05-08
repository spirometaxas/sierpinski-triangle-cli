# sierpinski-triangle-cli
Print the Sierpinski Triangle to the console!

![What sierpinski-triangle-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-triangle-cli/main/img/sierpinski-triangle-6.png)

## Usage
### Via `npx`:
```
$ npx sierpinski-triangle-cli <n>
$ npx sierpinski-triangle-cli <n> <size>
```

### Via Global Install
```
$ npm install --global sierpinski-triangle-cli
$ sierpinski-triangle-cli <n>
$ sierpinski-triangle-cli <n> <size>
```

### Via Import
```
$ npm install sierpinski-triangle-cli
```
then:
```
const sierpinski = require('sierpinski-triangle-cli');
console.log(sierpinski.create(<n>, <size>));
```

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
$ sierpinski-triangle-cli <n> <size>
```
The optional `<size>` param allows the triangle to be drawn at larger sizes.  `<size>` should be an integer greater than or equal to `<n>`.  Including size will draw a triangle of `<n>` recursive steps the size of a triangle with `<size>` recursive steps.  

#### Example:
```
$ sierpinski-triangle-cli 2 5
```
![What sierpinski-triangle-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-triangle-cli/main/img/sierpinski-triangle-2-5.png)

