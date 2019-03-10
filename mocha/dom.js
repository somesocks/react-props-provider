/* eslint-env browser */

const { JSDOM } = require('jsdom');

const Enzyme = require('enzyme');


const { window } = new JSDOM('<!doctype html><html><body></body></html>');

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'mocha.js',
};

copyProps(window, global);

// Critical: This Enzyme adapter imports React, but the JSDOM above // must be created BEFORE React is imported.
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
//
// // Create a place for react to grab onto.
const app = document.createElement('div');
app.id = 'react-root';
document
  .getElementsByTagName('body')
  .item(0)
  .appendChild(app);
