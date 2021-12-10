const filterInput = document.getElementById('filter-input');
// console.log(filterInput);

//adding the event listners to the search bar to know what the user is typing
filterInput.addEventListener('keyup',filterName);

//creating the function
function filterName(){
    let filterValue = document.getElementById('filter-input').value.toUpperCase();
    console.log(filterValue);

    //get names ul
    let ul = document.getElementById('names');

    // get the list from the ul
    let li = ul.querySelectorAll('li.collection-item');

    for(let i =0;i<li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
            // console.log("");
            li[i].style.display ='';
        }else{           
            // console.log("none");
            li[i].style.display ='none';
        }


    }


}