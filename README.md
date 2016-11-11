# React sketchbook (ALPHA)

Early stage CLI tool for staging react components with a zero config webpack dev server (based on create-react-app).

- Based off of create-react-app with added support for css modules
- Currently the tool does nothing else than mount the default 

## Install with npm
```
npm install react-sketchbook 
```

## How it works
The React-Sketchbook CLI takes one argument (a filename). It injects the default export of given file into the staging environment and does nothing else (right now).

So given a module like this:

```js
// some-react-component.js
const SomeComponent = () => (
  <div>Hello World</div>
);

export default SomeComponent;
```

You can point the cli at the file above 
```
sketch ./some-react-component.js
```

React-Sketchbook will render the component in staging environment.

## Usage

### Basic usage
```sh
sketch some-react-component.js
```

### Add root paths

If you include other folders than `node_modules` in your paths you can add them with the `-p` option, separated by comma:

```sh
sketch some-react-component.js -p ../local_modules,../lib
```

That way if you have a module in `../local_modules/some-module.js` you can import it like this:

```js
import someModule  from 'some-module';
```



