//selecting all required elements
const filterItem = document.querySelector(".filter-item");
const filterImg = document.querySelectorAll(".row .gallery-item");
function Filter(){
    if(selectedItem.target.classList.contains(".filter-item")){ //if user selected item has .filter-item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-filter"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = gallery-item.getAttribute("data-filter"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          filter-item.classList.remove("hide"); //first remove the hide class from the image
          filter-item.classList.add("show"); //add show class in image
        }else{
          filter-item.classList.add("hide"); //add hide class in image
          filter-item.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }

