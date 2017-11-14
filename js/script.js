var name = prompt('what is your name?');
  console.log(name);

var color = prompt('what is your favorite color?', 'chartruese');
console.log(color);
switch (color) {
  case 'red':
    alert(', what excellent taste you have!');
    break;
  case 'blue':
    alert(name + ', that is a good color indeed');
    break;
  case 'chartruese':
    alert(name + ', that is indeed the best of all colors');
    break;
  case 'grey':
    alert(name + ', that elegant and simple!');
    break;
  case 'orange':
    alert(name + ', orange is a good food');
    break;
  case 'raspberry':
    alert(name + ', that is an excellent choice i approve');
    break;
  case 'yellow':
    alert('sunshine daisies butter mellow/turn this stupid fat rat yellow!');
    break;
  case 'black':
    alert(name + ', that is v goffick');
    break;
  case 'white':
    alert('yes good');
    break;
  case 'mustard':
    alert(name + ', do not ever talk to me again');
    break;
  default:
    alert(name + ', your favorite color is incorrect');
}
