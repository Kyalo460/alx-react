import $ from 'jquery';
import _ from 'lodash';


let count = 0;
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
  count += 1;
  $('#count').html(`${count} clicks on the button`);
}

const debouncedCounter = _.debounce(updateCounter, 500);

document.getElementsByTagName('button')[0].addEventListener('click', debouncedCounter);