var body = querySelector('body');

var h1 = console.log('give me a title!');
var title = Document.creatElement('h1');
title.textContent = h1;
body.appendChild(title);
title.setAttribute('align', 'center');

var para = console.log('write a few sentences about what you did today! :)');
var text = Document.creatElement('p');
text.textContent = para;
title.appendChild(text);

var color = console.log('whats your favorite color?', 'blue, no yellooooooow');
var bkgrnd = document.body.style.backgroundColor = color;
body.appendChild = bkgrnd;

// edgecasing
switch (color) {
  case '* red', 'burgandy', 'ruby', 'cherry red', 'cherry', 'garnet':
    document.body.style.backgroundColor = 'danger';
    break;
  case 'orange':
    document.body.backgroundColor = 'orange';
    break;
  case '* blue', 'cerulean', 'aqua', 'navy':
    document.body.style.backgroundColor = 'blue';
    break;
  case '* green', 'chartreuse', 'emerald':
    document.body.style.backgroundColor = 'green';
    break;
  case 'brown':

    break;
  case '* pink', 'raspberry', 'magenta', 'rose' :

    break;
  case '* yellow', 'lemon', 'citrine':
    document.body.
    break;

  default: console.log('pick another color, please');

}
//
