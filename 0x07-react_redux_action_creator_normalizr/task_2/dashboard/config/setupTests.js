// const Enzyme = require('enzyme');
// const Adapter = require('@cfaester/enzyme-adapter-react-18');
// const { TextEncoder, TextDecoder } = require('util');

import Adapter from '@cfaester/enzyme-adapter-react-18';
import Enzyme from 'enzyme';

global.TextEncoder = global.TextEncoder || class TextEncoder {
  encode(str) {
    return new Uint8Array(str.split('').map(char => char.charCodeAt(0)));
  }
};

global.TextDecoder = global.TextDecoder || class TextDecoder {
  decode(buffer) {
    return String.fromCharCode.apply(null, buffer);
  }
};

Enzyme.configure({ adapter: new Adapter() });

// Fixing ReadableStream is not defined error
