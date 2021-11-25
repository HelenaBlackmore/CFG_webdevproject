const filterContainer = document.querySelector(".gallery-filter"),
 galleryItems = document.querySelectorAll(".gallery-item");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("filter-item")){
     // deactivate existing active 'filter-item'
     filterContainer.querySelector(".active").classList.remove("active");
     // activate new 'filter-item'
     event.target.classList.add("active");
     const filterValue = event.target.getAttribute("data-filter");
     galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove("hide");
         item.classList.add("show");
       }
       else{
        item.classList.remove("show");
        item.classList.add("hide");
       }
     });
   }
 });

const filterBox = document.querySelectorAll(".box");
document.querySelector(".gallery-item-inner").addEventListener("click",
    (event) => {
        if (event.target.tagName !== "filter-item") return
        false;
        let filterClass = event.target.dataset["filter"];
        filterBox.forEach((elem) => {
            elem.classList.remove("hide");
            if (!elem.classList.contains(filterClass) && filterClass
                !==
                "all") { elem.classList.add("hide"); }
        });
    });