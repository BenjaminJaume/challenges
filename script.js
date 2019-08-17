const fs = require('fs');

function question1() {
  fs.readFile('./santa.txt', (err, data) => {
    const directions = data.toString();
    const directionsArray = directions.split('');
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === `(`) {
        return (acc += 1);
      } else if (currentValue === `)`) {
        return (acc -= 1);
      }
    }, 0);
    console.log(answer);
  });
}

// question1();

// 2 - When does Santa enters first the basement?

function question2() {
  fs.readFile('./santa.txt', (err, data) => {
    const directions = data.toString();
    const directionsArray = directions.split('');
    let acc = 0;
    let counter = 0;
    const answer = directionsArray.some(currentValue => {
      if (currentValue === `(`) {
        acc += 1;
      } else if (currentValue === `)`) {
        acc -= 1;
      }
      counter++;
      return acc < 0;
    });
    console.log('reached', counter);
  });
}

question2();
