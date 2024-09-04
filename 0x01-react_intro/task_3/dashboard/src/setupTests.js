import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { TextEncoder, TextDecoder } from 'util';  

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
