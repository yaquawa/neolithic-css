A fully configurable CSS utility framework written in Sass.

![version](https://img.shields.io/npm/v/@neolithic-css/framework) ![license](https://img.shields.io/npm/l/@neolithic-css/toolkit) ![Sass](https://img.shields.io/badge/</>-Sass-red.svg)


## Installation
You can install it via npm 📦
 
```shell script
npm i @neolithic-css/framework
```


## Basic Usage
If you use Webpack's [sass loader](https://webpack.js.org/loaders/sass-loader/), just reference it using the `~` syntax 🤟🏼

Here is a simple example.
```scss
@use "~@neolithic-css/framework" as nc with
(
    $breakpoints: (
        xs: 320px,
        sm: 550px,
        md: 768px,
    ),
    $modules: [
        'grid',
        'spacing',
        'typography',

        // to config a module use this syntax 
        [ 'background/background-color', ( property-name-alias: bg ) ],
    ],
    $colors: [ 'black', 'white', 'gray', 'red' ],
    $extra-colors: (
        primary: #0667B7,
        blue: (
            50: #f7fafd,
            100: #eaf2f9,
        )
    ),
    $mobile-first: true,
);

@include nc.build;
```

## Default Naming Convention
By default, the framework use the CSS property name as the class name.

For example:
```css
.border-top\:5 {
  border-top: 5px solid !important;
}

.border-radius\:20 {
  border-radius: 20px !important;
}
```

Only for some frequently used utilities use shortened class name.
* `background-color` → `bg`
* `text-align`, `text-transform`, `text-decoration`, `vertical-align`  → `t`
* `font-size`, `font-style`, `font-wight` → `fz`, `fs`, `fw`
* `margin-top`, `margin-bottom`, `margin-left`, `margin-right`  → `mt`, `mb`, `ml`, `mr`
* `padding-top`, `padding-bottom`, `padding-left`, `padding-right`  → `pt`, `pb`, `pl`, `pr`

You can change the class name by set the `property-name-alias` option for each module.

See [here](https://github.com/yaquawa/neolithic-css/tree/master/packages/toolkit#naming-convention) to understand the core concept of neolithic-css's naming convention.

### Fluid utility
***Fluid utility*** utilizes the `calc()` function to automatically change a CSS property from one value to another according to the viewport width.

For example:

```html
<div class="fz:50~23 mb:90~20">Text</div>
```

The above example indicates:
* change `font-size` from `50px` to `23px` automatically
* change `margin-bottom` from `90px` to `20px` automatically

By default, the value changes from breakpoint `lg` to `xs`.  
You can set the range via the `start-shrinking-width` and `stop-shrinking-width` in `$fluid` option.

### Breakpoint utility
By using breakpoint utilities, you can apply a utility conditionally at different breakpoints. 

For example:
```html
<div class="mb:20@md">Text</div>
```

where `mb:20@md` means:

```css
@media (min-width: 768px) {
    .mb\:20\@md {
        margin-bottom: 20px !important;
    }
}
```

### Grid System
By using the `grid-cols` and `col-span` utility, you can create almost any responsive grid layout.

Just some examples:
```html
<div class="d:grid grid-cols:3@md gap:40~10">
    <div>column 1</div>
    <div>column 2</div>
    <div>column 3</div>
</div>

<div class="d:grid grid-cols:4@md">
    <div class="col-span:1@md">column 1</div>
    <div class="col-span:3@md">column 2</div>
</div>

<div class="d:grid grid-cols:12@md grid-cols:9@sm">
    <div class="col-span:5@md col-span:3@sm">column 1</div>
    <div class="col-span:7@md col-span:6@sm">column 2</div>
</div>
```


## Options

### `$breakpoints`
The breakpoints for each utility.

#### Default Value
```scss
$breakpoints: (
    xs: 320px,
    sm: 550px,
    md: 768px,
    lg: 1024px,
    xl: 1256px,
    xxl: 1600px,
) !default;
```

### `$property-name-delimiter` `$query-delimiter`

#### Default Value
[See more details](https://github.com/yaquawa/neolithic-css.git/packages/toolkit/README.md) about the concept of these two options.
```scss
$property-name-delimiter: ':' !default;
$query-delimiter: '@' !default;
```

### `$mobile-first`

#### Default Value
Determine if use mobile-first mode for media query.
 
```scss
$mobile-first: true !default;
```

### `$important`
Determine if appends the `!important` to each utility.

#### Default Value
```scss
$important: true !default;
```

### `$modules`
The modules to be included. You can find all the modules in the [src/**](https://github.com/yaquawa/neolithic-css.git/packages/framework/src) directory.

#### Default Value
```scss
$modules: [ 'grid', 'spacing', 'typography', ] !default;
```

To config a module use this syntax : 
```scss
$modules: [
  [ 'background/background-color', ( property-name-alias: bg ) ]
],
```

### `$colors`
The colors variations for the utilities.

For example, if you have included the module `background/background-color`, and have the `green` included in the `$colors`.

Classes like `bg:green.300` will be generated, the `300` is the level of the color. 

The default colors are picked up from [Material Design color palettes](https://material.io/design/color/the-color-system.html#tools-for-picking-colors).
#### Default Value
```scss
$colors: [ 'white', 'black', 'gray', 'red', 'green', 'blue', ] !default;
```

### `$extra-colors`
In addition to `$colors`, you can define your own colors with this option.

For example:
```scss
$extra-colors: (
    primary: #0667B7,
    blue: (
        50: #f7fafd,
        100: #eaf2f9,
    )
)
```

### `$fluid`
Options for fluid utility.
#### Default Value
```scss
$fluid: (
    start-shrinking-width: default(map.get($breakpoints, lg), 1024px),
    stop-shrinking-width: default(map.get($breakpoints, xs), 320px),
    strip-unit: true,
    step: 10px,
    min: 0px,
) !default;
```

