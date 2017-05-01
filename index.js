function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var array = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    // parseInt(num.innerHTML) += n
    num.innerHTML = parseInt(num.innerHTML) + n
  }
}

function deepestChild() {
  var array = document.querySelector('#grand-node').querySelectorAll("div")
  return array[array.length - 1];
}


// // get <li>2</li>
// const li2 = document.querySelector('ul.ranked-list li ul li')
//
// // get <div>4</div>
// const div4 = document.querySelector('ul.unranked-list li div')
//
// <body>
//
// <h2>My First Page</h2>
//
// <p id="demo"></p>
//
// <script>
// document.getElementById("demo").innerHTML = "Hello World!";
// </script>
//
// </body>
