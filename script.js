const fs = require('fs');

fs.readFile('./santa.txt', (err, data) => {
  const directions = data.toString();
  console.log(directions);
});
