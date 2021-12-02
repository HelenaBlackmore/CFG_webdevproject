
// JavaScript code
function search_tutorials() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.querySelectorAll('ul > li');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}


