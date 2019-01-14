# Peakfijn Component Library

This project is intended for internal use.

## Install

```terminal
npm install git+https://gitlab.com/peakfijn/component-library --save
```
Some dependencies that should be implemented in the parent project: 
* [redux](https://github.com/reduxjs/redux)
* [redux-form](https://github.com/erikras/redux-form)
* [react-intl](https://github.com/yahoo/react-intl)
* [styled-components](https://github.com/styled-components/styled-components) (+ theme -> see `./example.theme.js`)

## Coding structure
Make sure you logically group code. Furthermore all styles should be done with `styled-components` and separated from the `JSX` in to its own file (e.g. `styles.js`).

When developing please keep in mind that all the input types should be usable with the Redux-form. 

```js
<Field
  focussed
  component={Text}
  name="name"
  type="text"
  placeholder="Focused"
  id={`name-of-field`}
  validate={[required]}
  autoFocus
/>
```

## Linking 

When making changes to this repository you might want to include this into an other project to have it actually render. This can be done by first making a global reference using the following command:

```terminal
npm link
```
This will give you a global reference for this project `peakfijn-component-library`. You can then attach it to an other React project:

```terminal
npm link peakfijn-component-library
```
This will create symbolic link to this project in the other project's `node_modules` folder (e.g. `node_modules/peakfijn-component-library`). Do keep in mind that if you run `npm i` in the other project this symbolic link will be removed and you have to run this last command again.

## Contributing

When you start developing you want to run the following command:

```terminal
npm i
npm run build:watch
```

Some Guidelines: 
* Do not add domain or project specific things in this repository!
* Only add the relevant components to this library.
* Make sure it builds.
* Do not use external packages if this is not necessary.
* If you want to contribute don't forget to add the JS assets to the `./src/index.js`.
