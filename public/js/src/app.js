let gen;

function* app(i) {
  while(i >= 0) {
    yield i--;
  }
}

gen = app(5);

for (let val of gen) {
  console.log(val);
}

module.exports = app;
