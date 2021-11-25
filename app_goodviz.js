var defaultText = "Search..."; 
var searchBox = document.getElementById("search"); 

//default text after load 
searchBox.value = defaultText; 
//on focus behaviour 
searchBox.onfocus = function() { 
    if (this.value == defaultText) {
        //clear text field
         this.value = ''; } } //on blur behaviour 
         searchBox.onblur = function() { 
             if (this.value == "") {
                 //restore default text 
                 this.value = defaultText; } }


