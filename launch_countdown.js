/*
	HTML
	<div class="output"></div>
	
	CSS
	html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}

.output {
  height: 410px;
  overflow: auto;
}

*/


// uncomment i
// use for loop to iterate each number
// final expression should be prefix decrement
// NEST_if i is any number, print i
// NEST_else if i is 10, print 'Countdown 10'
// NEST_else if i is 0, print 'Blast off'

const output = document.querySelector(".output");
output.textContent = "";

let i = 10;

while (i >= 0) {
  if (i === 10) {
    const para = document.createElement('p');
    para.textContent = "Countdown 10";
    output.appendChild(para);
  } else if (i === 0) {
      const para = document.createElement('p');
      para.textContent = "Blast off";
      output.appendChild(para);
  }
  else {
      const para = document.createElement('p');
      para.textContent = i;
      output.appendChild(para);
  }
  --i;
}

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);

