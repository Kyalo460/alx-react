import $ from 'jQuery'
import _ from 'lodash'


const count = 0

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
  count += 1;

  $('#count').html(`<p id="count">${count} clicks on the button</p>`);
}

$('button').click(_.debounce(updateCounter, 200));