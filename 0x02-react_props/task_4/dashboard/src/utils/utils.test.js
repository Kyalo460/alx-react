import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";


const currentYear = new Date().getFullYear();

if (currentYear === getFullYear()) {
  console.log('test passed')
} else {
  console.log('Current year test failed');
}

const footerTrue = 'Holberton School';
const footerFalse = 'Holberton School main dashboard';

footerTrue == getFooterCopy(true) ? console.log('test passed') : console.log('footerTrue failed');
footerFalse == getFooterCopy(false) ? console.log('test passed') : console.log('footerFalse failed');

'<strong>Urgent requirement</strong> - complete by EOD' == getLatestNotification() ? console.log('test passed') : console.log('Latest notification test failed');
