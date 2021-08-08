var form = document.getElementById("addform");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);
//delete event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener('keyup', filterItem);

//additem

function addItem(e) {
  e.preventDefault();

  //get input value

  var newItem = document.getElementById("addinput").value;

  //creat new li
  var li = document.createElement("li");
  //addclass
  li.className = "list";
  //add textnod ewith input value

  li.appendChild(document.createTextNode(newItem));

  //creat delete

  var deletebutton = document.createElement("button");
  //add clas todelete
  deletebutton.className = "delete-btn";

  //append text node
  deletebutton.appendChild(document.createTextNode("X"));

  //append button to li

  li.appendChild(deletebutton);

  itemList.appendChild(li);
}

//removeItem

function removeItem(e) {
  if (e.target.classList.contains("delete-btn")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//folter item

function filterItem(e){
    //convert to loweercase
    var text = e.target.value.toLowerCase();
    //get li
    var items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'flex';
            item.style.justifyContent = 'space-between';
        }

        else {
            item.style.display = 'none';
        }
    })
}