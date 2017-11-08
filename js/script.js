var name = prompt('what is your name?');
  console.log(name);
var Prompt = require('what is your favorite color?', "blue - no yellooooow");
var prompt = new Prompt({
  name: 'colors',
  message: 'What are your favorite colors?',
  choices: [
    'red',
    'blue',
    'yellow',
    'chartruse',
    'raspberry',
    'gray',
    'aqua',
    'green',
    'black',
    'white',
  ]
});

// // promises
// prompt.run()
//   .then(function(answers) {
//     console.log(answers)
//   })
//   .catch(function(err) {
//     console.log(err)
//   })
//
