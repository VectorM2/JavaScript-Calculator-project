/*developed by Vector M
@VectorM(youtube)
@VectorM4(twitter)
@mathabelavector(Instagram)
*/

function v(val) {
  document.getElementById("display").value += val;
}

function c(val) {
  document.getElementById("display").value = val;
}

function d() {
  try {
    document.getElementById("display").value = eval(document.getElementById("display").value)

  }

  catch {
    c("error!");
  }


}