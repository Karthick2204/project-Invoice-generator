        var item = 1,
		itemNumber = 0,
		button = document.getElementById("add-item");
		button.disabled = true;
	var productPriceList = [];
	
	function addItem() 
	{	 	
		button.disabled = true;
	    itemNumber = item + 1;
		
		var html = "<tr>";
			html += "<td name='SNo'>" + itemNumber + "</td>";
			html += "<td><input type='text' name='itemName' ></td>";
			html += "<td><input type='number' name='itemQuantity' oninput='handleButton(this)' ></td>";
			html += "<td><input type='number' name='itemprice' oninput='handleButton(this)' ></td>";
			html += "<td><input type='number' name='actualprice' readonly ></td>";
			html += "<td><button type='button' id='removebutton' onclick='removeItem(this)'>RemoveItem</button></td>";
			html += "</tr>";
	   
		var row = document.getElementById("tbody").insertRow();
		row.innerHTML = html;
		
		item++;
	}
	
	function handleButton (r) {
		var quan = document.getElementsByName('itemQuantity');
		var price = document.getElementsByName('itemprice');
		var actualprice = document.getElementsByName('actualprice');
		var productPrice = 0;
		var index = r.parentNode.parentNode.rowIndex;
		
		productPrice =  parseInt(quan[index-1].value) *  parseInt(price[index-1].value);
		actualprice[index-1].value = productPrice;
		productPriceList[index-1] = productPrice;
		
		if (quan[index-1].value > 0) {
			if (price[index-1].value > 0) {
				add();
				button.disabled = false;
			}
		} else {
			button.disabled = true;
		}
	}
	
    function removeItem(r) { 
	   var index = r.parentNode.parentNode.rowIndex;
       document.getElementById("customers").deleteRow(index);
	   productPriceList.splice(index-1, 1);
	   updateItemNumber();
	   add();
	   item--;
	   if (index == 1) {
			button.disabled = false;         			
	   }	  
     }	

	function add() {
		var count=0,total=0;		 
		while (count < productPriceList.length) {
			total += productPriceList[count];
			count++;
		}
		document.input.total.value = total;		 
	}
	
	function updateItemNumber() {
		var serialNumber = document.getElementsByName('SNo');
		for (var count = 0; count < serialNumber.length; count++) {
			serialNumber[count].textContent = count + 1;
		}
	}