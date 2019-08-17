// challenge

const message = ``;

// const message = `(())`; // floor 0.
// const message = `()()`; // floor 0.
// const message = `(((`; // floor 3.
// const message = `(()(()(`; // floor 3.
// const message = `))(((((`; // floor 3.
// const message = `())`; // floor -1
// const message = `))(`; // floor -1
// const message = `)))`; // floor -3
// const message = `)())())`; // floor -3
// const message = `((())()((()))))`;

var total = 0;

for (var i = 0; i < message.length; i++) {
  if (message[i] == `(`) {
    total += 1;
  } else if (message[i] == `)`) {
    total -= 1;
  }
  if (total == -1) {
    total = i + 1;
    break;
  }
}

console.log(total);
