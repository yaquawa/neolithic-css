Toolkit for generate fully customizable CSS utility classes written in Sass.

![version](https://img.shields.io/npm/v/@neolithic-css/toolkit) ![license](https://img.shields.io/npm/l/@neolithic-css/toolkit) ![Sass](https://img.shields.io/badge/</>-Sass-red.svg)

## Why?
There are tons of CSS frameworks we could choose, while lots of them are just too complex.
What I want is just a minimum yet flexible API that could generate all kinds of CSS utilities that match MY requirements easily.
Tailwind CSS is cool, but I don't like the name convention of it.

Another thing is that I've never seen a framework that has what I called **"Fluid Utility"** support.
It's really annoying to writing lots of "responsive utility" classes 😣

I wasn't able to find any tools meet my requirements, so I made one.


## Installation
You can install it via npm 📦
 
```shell script
npm i @neolithic-css/toolkit
```


## Basic Usage
If you use webpack's [sass loader](https://webpack.js.org/loaders/sass-loader/), just reference it using the `~` syntax 🤟🏼

Here is a simple example for generating a series of "fluid utilities" for the `font-size`.

```scss
@use "~@neolithic-css/toolkit" as *;

@include add-fluid-utility(
    $property-name: font-size,
    $property-value: 14px 16px 18px 20px,
    $property-name-alias: fz,
    $step: 2px,
);

// Don't forget to call the `build` mixin,
// this mixin outputs all the utilities you added.
@include build;
```

<details>
  <summary>With the above code, the following CSS will be generated.</summary>
  
  ```css
  .fz\:14 {
      font-size: 14px !important
  }
  
  .fz\:16 {
      font-size: 16px !important
  }
  
  .fz\:18 {
      font-size: 18px !important
  }
  
  .fz\:20 {
      font-size: 20px !important
  }
  
  @media (min-width: 320px) {
      .fz\:14\~12 {
          font-size: calc(11.09091px + .28409vw) !important
      }
  
      .fz\:14\~10 {
          font-size: calc(8.18182px + .56818vw) !important
      }
  
      .fz\:14\~8 {
          font-size: calc(5.27273px + .85227vw) !important
      }
  
      .fz\:14\~6 {
          font-size: calc(2.36364px + 1.13636vw) !important
      }
  
      .fz\:14\~4 {
          font-size: calc(-.54545px + 1.42045vw) !important
      }
  
      .fz\:14\~2 {
          font-size: calc(-3.45455px + 1.70455vw) !important
      }
  
      .fz\:14\~0 {
          font-size: calc(1.98864vw - 6.36364px) !important
      }
  
      .fz\:16\~14 {
          font-size: calc(13.09091px + .28409vw) !important
      }
  
      .fz\:16\~12 {
          font-size: calc(10.18182px + .56818vw) !important
      }
  
      .fz\:16\~10 {
          font-size: calc(7.27273px + .85227vw) !important
      }
  
      .fz\:16\~8 {
          font-size: calc(4.36364px + 1.13636vw) !important
      }
  
      .fz\:16\~6 {
          font-size: calc(1.45455px + 1.42045vw) !important
      }
  
      .fz\:16\~4 {
          font-size: calc(-1.45455px + 1.70455vw) !important
      }
  
      .fz\:16\~2 {
          font-size: calc(-4.36364px + 1.98864vw) !important
      }
  
      .fz\:16\~0 {
          font-size: calc(2.27273vw - 7.27273px) !important
      }
  
      .fz\:18\~16 {
          font-size: calc(15.09091px + .28409vw) !important
      }
  
      .fz\:18\~14 {
          font-size: calc(12.18182px + .56818vw) !important
      }
  
      .fz\:18\~12 {
          font-size: calc(9.27273px + .85227vw) !important
      }
  
      .fz\:18\~10 {
          font-size: calc(6.36364px + 1.13636vw) !important
      }
  
      .fz\:18\~8 {
          font-size: calc(3.45455px + 1.42045vw) !important
      }
  
      .fz\:18\~6 {
          font-size: calc(.54545px + 1.70455vw) !important
      }
  
      .fz\:18\~4 {
          font-size: calc(-2.36364px + 1.98864vw) !important
      }
  
      .fz\:18\~2 {
          font-size: calc(-5.27273px + 2.27273vw) !important
      }
  
      .fz\:18\~0 {
          font-size: calc(2.55682vw - 8.18182px) !important
      }
  
      .fz\:20\~18 {
          font-size: calc(17.09091px + .28409vw) !important
      }
  
      .fz\:20\~16 {
          font-size: calc(14.18182px + .56818vw) !important
      }
  
      .fz\:20\~14 {
          font-size: calc(11.27273px + .85227vw) !important
      }
  
      .fz\:20\~12 {
          font-size: calc(8.36364px + 1.13636vw) !important
      }
  
      .fz\:20\~10 {
          font-size: calc(5.45455px + 1.42045vw) !important
      }
  
      .fz\:20\~8 {
          font-size: calc(2.54545px + 1.70455vw) !important
      }
  
      .fz\:20\~6 {
          font-size: calc(-.36364px + 1.98864vw) !important
      }
  
      .fz\:20\~4 {
          font-size: calc(-3.27273px + 2.27273vw) !important
      }
  
      .fz\:20\~2 {
          font-size: calc(-6.18182px + 2.55682vw) !important
      }
  
      .fz\:20\~0 {
          font-size: calc(2.84091vw - 9.09091px) !important
      }
  }
  
  @media (min-width: 1024px) {
      .fz\:14\~0, .fz\:14\~2, .fz\:14\~4, .fz\:14\~6, .fz\:14\~8, .fz\:14\~10, .fz\:14\~12 {
          font-size: 14px !important
      }
  
      .fz\:16\~0, .fz\:16\~2, .fz\:16\~4, .fz\:16\~6, .fz\:16\~8, .fz\:16\~10, .fz\:16\~12, .fz\:16\~14 {
          font-size: 16px !important
      }
  
      .fz\:18\~0, .fz\:18\~2, .fz\:18\~4, .fz\:18\~6, .fz\:18\~8, .fz\:18\~10, .fz\:18\~12, .fz\:18\~14, .fz\:18\~16 {
          font-size: 18px !important
      }
  
      .fz\:20\~0, .fz\:20\~2, .fz\:20\~4, .fz\:20\~6, .fz\:20\~8, .fz\:20\~10, .fz\:20\~12, .fz\:20\~14, .fz\:20\~16, .fz\:20\~18 {
          font-size: 20px !important
      }
  }
  
  @media (max-width: 320px) {
      .fz\:14\~12 {
          font-size: 12px !important
      }
  
      .fz\:14\~10 {
          font-size: 10px !important
      }
  
      .fz\:14\~8 {
          font-size: 8px !important
      }
  
      .fz\:14\~6 {
          font-size: 6px !important
      }
  
      .fz\:14\~4 {
          font-size: 4px !important
      }
  
      .fz\:14\~2 {
          font-size: 2px !important
      }
  
      .fz\:14\~0 {
          font-size: 0 !important
      }
  
      .fz\:16\~14 {
          font-size: 14px !important
      }
  
      .fz\:16\~12 {
          font-size: 12px !important
      }
  
      .fz\:16\~10 {
          font-size: 10px !important
      }
  
      .fz\:16\~8 {
          font-size: 8px !important
      }
  
      .fz\:16\~6 {
          font-size: 6px !important
      }
  
      .fz\:16\~4 {
          font-size: 4px !important
      }
  
      .fz\:16\~2 {
          font-size: 2px !important
      }
  
      .fz\:16\~0 {
          font-size: 0 !important
      }
  
      .fz\:18\~16 {
          font-size: 16px !important
      }
  
      .fz\:18\~14 {
          font-size: 14px !important
      }
  
      .fz\:18\~12 {
          font-size: 12px !important
      }
  
      .fz\:18\~10 {
          font-size: 10px !important
      }
  
      .fz\:18\~8 {
          font-size: 8px !important
      }
  
      .fz\:18\~6 {
          font-size: 6px !important
      }
  
      .fz\:18\~4 {
          font-size: 4px !important
      }
  
      .fz\:18\~2 {
          font-size: 2px !important
      }
  
      .fz\:18\~0 {
          font-size: 0 !important
      }
  
      .fz\:20\~18 {
          font-size: 18px !important
      }
  
      .fz\:20\~16 {
          font-size: 16px !important
      }
  
      .fz\:20\~14 {
          font-size: 14px !important
      }
  
      .fz\:20\~12 {
          font-size: 12px !important
      }
  
      .fz\:20\~10 {
          font-size: 10px !important
      }
  
      .fz\:20\~8 {
          font-size: 8px !important
      }
  
      .fz\:20\~6 {
          font-size: 6px !important
      }
  
      .fz\:20\~4 {
          font-size: 4px !important
      }
  
      .fz\:20\~2 {
          font-size: 2px !important
      }
  
      .fz\:20\~0 {
          font-size: 0 !important
      }
  }
  ```
</details>

The above example generates a bunch of "fluid utilities".
For example the class `.fz:20~14` indicates `font-size` gradually changes from `20px` to `14px` when viewport get resized from `1024px` to `320px`(by default).

Sure you could generate the good old "responsive utilities" as well by utilizing the `add-simple-utility` or `add-compound-utility` mixin (I'll explain the difference between them later on). 

For instance

```scss
@include add-simple-utility(
    $property-name: font-size,
    $property-value: 14px 16px 18px 20px,
    $property-name-alias: fz,
);
```

<details>
  <summary>That will give you this generated CSS</summary>
  
  ```css
  .fz\:14px {
      font-size: 14px !important
  }
  
  .fz\:16px {
      font-size: 16px !important
  }
  
  .fz\:18px {
      font-size: 18px !important
  }
  
  .fz\:20px {
      font-size: 20px !important
  }
  
  @media (max-width: 1600px) {
      .fz\:14px\@xxl {
          font-size: 14px !important
      }
  
      .fz\:16px\@xxl {
          font-size: 16px !important
      }
  
      .fz\:18px\@xxl {
          font-size: 18px !important
      }
  
      .fz\:20px\@xxl {
          font-size: 20px !important
      }
  }
  
  @media (max-width: 1256px) {
      .fz\:14px\@xl {
          font-size: 14px !important
      }
  
      .fz\:16px\@xl {
          font-size: 16px !important
      }
  
      .fz\:18px\@xl {
          font-size: 18px !important
      }
  
      .fz\:20px\@xl {
          font-size: 20px !important
      }
  }
  
  @media (max-width: 1024px) {
      .fz\:14px\@lg {
          font-size: 14px !important
      }
  
      .fz\:16px\@lg {
          font-size: 16px !important
      }
  
      .fz\:18px\@lg {
          font-size: 18px !important
      }
  
      .fz\:20px\@lg {
          font-size: 20px !important
      }
  }
  
  @media (max-width: 768px) {
      .fz\:14px\@md {
          font-size: 14px !important
      }
  
      .fz\:16px\@md {
          font-size: 16px !important
      }
  
      .fz\:18px\@md {
          font-size: 18px !important
      }
  
      .fz\:20px\@md {
          font-size: 20px !important
      }
  }
  
  @media (max-width: 550px) {
      .fz\:14px\@sm {
          font-size: 14px !important
      }
  
      .fz\:16px\@sm {
          font-size: 16px !important
      }
  
      .fz\:18px\@sm {
          font-size: 18px !important
      }
  
      .fz\:20px\@sm {
          font-size: 20px !important
      }
  }
  
  @media (max-width: 320px) {
      .fz\:14px\@xs {
          font-size: 14px !important
      }
  
      .fz\:16px\@xs {
          font-size: 16px !important
      }
  
      .fz\:18px\@xs {
          font-size: 18px !important
      }
  
      .fz\:20px\@xs {
          font-size: 20px !important
      }
  }
  ```
</details>

For example the class `.fz:20px@xl` indicates `font-size: 20px` applied at viewport size `xl`(1256px).
Well **the naming convention is totally up to you**.
You could config the settings by initializing the [global configurations](#global-configurations) values or specify the settings via the mixin directly.

## Global Configurations
Below are the default values of global configurations.

```scss
$breakpoints: (
    xs: 320px,
    sm: 550px,
    md: 768px,
    lg: 1024px,
    xl: 1256px,
    xxl: 1600px,
) !default;

// default settings for generating fluid utilities
$fluid: (
    start-shrinking-width: default(map.get($breakpoints, lg), 1024px),
    stop-shrinking-width: default(map.get($breakpoints, xs), 320px),
    strip-unit: true,
    step: 10px,
    min: 0px,
) !default;

$property-name-delimiter: ':' !default;
$query-delimiter: '@' !default;
$important: true;
```

For example, if you'd like to giving your own breakpoints, you overwrite the default one by utilizing the [`with` keyword](https://sass-lang.com/documentation/at-rules/use#loading-members).
```scss
@use "~@neolithic-css/toolkit" as * with
(
    $breakpoints: (
        sm: 500px,
        md: 900px,
        lg: 1300px,
        xs: 300px,
    ),
    $important: false, // do not append `!important` at the end of css rules.
);
```

Or you may overwrite it via mixin directly like this.
```scss
@include add-simple-utility(
    $property-name: font-size,
    $property-value: 14px 16px 18px 20px,
    $property-name-alias: fz,
    
    // notice that only `$breakpoints` can't be overwrite in mixin,
    // here you are saying only output utility classes for size `sm` and `md`. 
    $breakpoints: (sm, md), 
    $important: false,
);
```


## Naming Convention
By default, the CSS classname is consists of several parts.

* $property-name-alias
* $property-value-alias
* $property-name-delimiter
* $query-delimiter
* $breakpoint-name

For example, this is the simplest form you can generate a utility.

```scss
@include add-simple-utility(
    $property-name: display,
    $property-value: block,
);
```

This piece of code gives you :

```css
.display\:block {
    display: block !important;
}

/* utilities with media query */
@media (max-width: 320px) {
    .display\:block\@xs {
        display: block !important;
    }
}
```

in the classname `.display:block@xs`, where

* `display` → `$property-name-alias`
* `:` → `$property-name-delimiter`
* `block` → `$property-value-alias`
* `@` → `$query-delimiter`
* `xs` → `$breakpoint-name`

You can change these parts to whatever you want via [global configurations](#global-configurations) or mixin arguments, or totally ignore them by specifying a `$class` argument to the mixin.

I'm not trying to impose my opinion to anyone, but I thought it would be clearer to explicitly separate each part by their functions instead of just joining them all together with the `-`.

As I said, you can pass a `$class` argument to the mixin if you are not cool with this 🙏🏼

## Simple-Utility vs. Compound-Utility

* **Simple-Utility** : utilities which have only one CSS rule.
* **Compound-Utility** : utilities which have multiple CSS rules.

For example:

```css
.simple-utility {
    margin-top: 10px;
}

.compound-utility {
    margin-top: 10px;
    font-size: 20px;
}
```

I grouped utilities into these two types because of the [naming convention](#naming-convention).
That is, a compound utility can't have a `$property-value-alias` and `$property-name-alias`.

There are three main mixins you can use to generate utilities:

* `add-simple-utility`
* `add-fluid-utility`
* `add-compound-utility`

As the names of the mixins implied, you use different mixin to generate different type of utilities.
The "fluid utility" is simple-utility too.

## Tips
There are several helper functions provided within this package. 
Before you can use them, make sure you have imported them via the `@use` keyword.

```scss
@use "~@neolithic-css/toolkit/src/functions" as *;
```

### The `range` helper function
Say if you want to generate a series of utilities like this:

```css
.grid-cols\:12 {
  grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
}

.grid-cols\:11 {
  grid-template-columns: repeat(11, minmax(0, 1fr)) !important;
}

.grid-cols\:10 {
  grid-template-columns: repeat(10, minmax(0, 1fr)) !important;
}

.grid-cols\:9 {
  grid-template-columns: repeat(9, minmax(0, 1fr)) !important;
}

.grid-cols\:8 {
  grid-template-columns: repeat(8, minmax(0, 1fr)) !important;
}

.grid-cols\:7 {
  grid-template-columns: repeat(7, minmax(0, 1fr)) !important;
}

.grid-cols\:6 {
  grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
}

.grid-cols\:5 {
  grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
}

.grid-cols\:4 {
  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
}

.grid-cols\:3 {
  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
}

.grid-cols\:2 {
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
}

.grid-cols\:1 {
  grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
}
```

In such of cases you can utilize the `range` helper function like this:

```scss
@include add-simple-utility(
    $property-name: grid-template-columns,
    $property-value: range($from: 1, $to: 12, $step: 1, $template: 'repeat(_$i_, minmax(0, 1fr))'),
    $property-name-alias: 'grid-cols',
    $property-value-alias: range($from: 1, $to: 12, $step: 1),
);
```

which is equivalent to:

```scss
@include add-simple-utility(
    $property-name: grid-template-columns,
    $property-value: (
        'repeat(12, minmax(0, 1fr))',
        'repeat(11, minmax(0, 1fr))',
        'repeat(10, minmax(0, 1fr))',
        'repeat(9, minmax(0, 1fr))',
        'repeat(8, minmax(0, 1fr))',
        'repeat(7, minmax(0, 1fr))',
        'repeat(6, minmax(0, 1fr))',
        'repeat(5, minmax(0, 1fr))',
        'repeat(4, minmax(0, 1fr))',
        'repeat(3, minmax(0, 1fr))',
        'repeat(2, minmax(0, 1fr))',
        'repeat(1, minmax(0, 1fr))',
    ),
    $property-name-alias: 'grid-cols',
    $property-value-alias: (12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1),
);
```

### `add-**-utilities` helper mixin
Each of those `add-**-utility` mixins has a corresponded `add-**-utilities` helper that can accept a list, so you can register multiple utilities at once.
 
* `add-simple-utilities`
* `add-fluid-utilities`
* `add-compound-utilities`

For example:

```scss
$simple-utilities: (
    (
        property-name: background-color,
        property-value: (#68D391, #F6E05E, #dc3545),
        property-name-alias: 'bg',
        property-value-alias: (green, yellow, red)
    ),
    (
        property-name: display,
        property-value: (grid, block, inline-block),
        property-name-alias: 'd',
    ),
    (
        property-name: grid-template-columns,
        property-value: range(1, 12, 1, 'repeat(_$i_, minmax(0, 1fr))'),
        property-name-alias: 'grid-cols',
        property-value-alias: range(1, 12, 1)
    ),
    (
        property-name: gap,
        property-value: range(0, 2.5rem, 0.25rem),
        property-value-alias: range(0, 10, 1),
        property-name-delimiter: '-',
        query-delimiter: '|',
    ),
);


@include add-simple-utilities($simple-utilities...);
```

## Contribution
I really tried to keep this package be simple and lightweight.
If you are missing something, feel free to open a pull request 👋
