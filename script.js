
// Shopping cart project by R.A.Smith

//Create an array of the names of items for sale
const carnames = ["Black-Ferrari","Drag-Racer","Bullit-Car","Dragster", "Estate-Mobile", "Firecat", "Green-Racer", "Hot Rod", "Ice Blue", "Off-Roader","Pickup-Truck", "Red-Torpedo", "Sedan-Racer", "Silver-Sport", "Fire-Truck"]
//Create an array of the corresponding prices for each item
const newvalue= document.getElementById("new");



//Allow the user to change the name and address info:
function changeaddress() {
    nm =window.prompt("Enter your full name")
    ad = window.prompt("Enter your address")
    console.log(nm);
    console.log(ad);
    if (nm ==null) {return false}
if ((nm.length >7) && (ad.length>20)) {
    document.getElementById("address").innerText = "Deliver to: "+nm+","+ad;
}
else {
    window.alert("Not a valid name or address");
    return false}
}

//initialise some variables:
var quantity=0;
var price="0";
var runningtotal=0;
var count=0;
var buycount=0;
var removecount=0;
var tlquantity=0;
var subtractamount=0;
var rt2dp=0;
var recordsadded=0;
contents=[]
var mycart=0;
//FUNCTION TO ADD A RECORD INSIDE THE CART DISPLAY
//DISPLAY NAME OF ITEM, REF., QTY AND PRICE

function additem(itemnumber) {
    tlquantity+=1;
  mycart+=1;
    updatemycart();
    buycount+=1;//count how many times a buy button is pressed

    if(buycount-removecount >12) {
        window.alert("Too many items.\nPlease remove some items from the cart")
    }
   
   
   count+=1; //count increases by 1 each time an add to cart
   //button is clicked.
//convert quantity to integer:
quantity=parseInt(quantity);
quantity=1;
    var q = "qtyholder";
    q+=itemnumber;
    var a="p";
    var b="c";
   //itemnumber is a numerical value
    a=a+itemnumber;//itemnumber gets interpreted as a string
    b=b+itemnumber;// "          ""       " "        "  
   
    //The string literal '${a}' equates to p1...p15 (15 items)
    //to extract the item price from the innerText of the div with ID
    //of p1 or p2 or p3...p15
    //Eg Item p1 is price of Black Ferrari (£19.95)
    price=document.getElementById(`${a}`).innerText;
price=price.slice(1);//This gets rid of £ in front of price
console.log("Price: ",price);//price is a string

 //The string literal ${b} equates to c1..c15 to extract the
    //car name from the innerText of the div with ID c1....c15
    //Eg Item c1 is the Black Ferrari
    cartitle=document.getElementById(`${b}`).innerText;
    
//Create a new paragraph Element containing the record to populate innercontainer div inside whitebar2:
var item = document.createElement('p');
 item.innerHTML=cartitle+'&nbsp&nbsp&nbsp'+'#'+String(itemnumber)+'&nbsp&nbsp&nbsp&nbsp&nbsp'+String(quantity)+'&nbsp&nbsp&nbsp&nbsp'+price+'&nbsp<button style="margin-left:5px" class="removeitem" onclick="removeitem()">Remove</button>';

//***********GIVE AN ID TO THE NEW RECORD*****************/
item.setAttribute('id',String(count));//give the record an id
item.setAttribute('class', 'spacep')
//***************IMPORTANT*********************************/
//Populate the cart with the record*******************
document.getElementById("innercontainer").appendChild(item);
//*********************************************************/
var itemnumberstring=String(count);
   id=document.getElementById(itemnumberstring);

    quantity=String(quantity);//convert quantity 
    //back into a string
    console.log("price is:"+price);
    runningtotal+=parseFloat(price);
grandtotal();

} //End of function additem()

function updatemycart() {
    //*************Update the 'My Cart' entry********** 
    //*************at the top left of the cart********/
   document.getElementById("mycart").innerText="My Cart ("+String(mycart)+")";
   
    //price=parseFloat(price); 
}


//Function to update the Grand Total at the bottom of the cart*******
function grandtotal() {
rt2dp=runningtotal.toFixed(2);

if(rt2dp<0) {
    rt2dp=0;
}


document.getElementById("tot").innerText="Total : £"+String(rt2dp);
console.log(rt2dp);
if (buycount==removecount) {
    document.getElementById("tot").innerText="Total : £0";
}
}//End of function grandtotal
 

function removeitem () {
   
    let deletebutton=document.querySelectorAll('.removeitem');
 for(let i=0; i<deletebutton.length; i++) {
 deletebutton[i].onclick=function() {
     this.parentNode.remove();
     mycart-=1;
     
     updatemycart();
     runningtotal-=parseFloat(price);
     grandtotal();
        }
    }
}


function updatemycart() {
    //update the 'My Cart' qty at top of cart
    document.getElementById("mycart").innerText="My Cart ("+String(mycart)+")";
}

//if checkout button pressed:
function checkout() {
    
        window.alert("You have chosen to check out.\n Your shopping cart has a total of £"+rt2dp);

}


