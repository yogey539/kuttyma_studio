import { gettotal,addEvent, getAllProduct} from "./utils.js";

gettotal("#gettotal")
getAllProduct("#all-product", -1)

document.getElementById('btn-apply-filter').onclick = function() {  
    var markedCheckbox = document.getElementsByName('frame_category');  
    var store_checked_values = []
    for (var checkbox of markedCheckbox) {  
      if (checkbox.checked)  
      store_checked_values.push(checkbox.value)
     
    }  
    getAllProduct("#all-product", -1,store_checked_values);
  }  