
let cars = [
    ["Black Ferrari", "bf",78,"19.95"],
    ["Blue Dragster", "bd", 65, "15.95"],
    ["Red Dragster", "rd", 70, "17.95"],
    ["Bullit Engine", "be", 55, "25.95"]
];

const price= [19.95, 15.95, 17.95, 25.95];
var item=document.createElement('div');

item.style.backgroundColor="yellow";
document.getElementById("cart").appendChild(item);
var qtybf=1;
var qtybd=1;
var qtyrd=1;
var qtybe=1;
var inlist=[];//inlist will keep track of what records exist in the cart
var total=0;
var total2dp=0;//total to 2 decimal places

function updatetotal() {
    total2dp=total.toFixed(2);
    if (String(total2dp)=="-0.00") {
        (total2dp)=0.00;
    }
    console.log(total2dp);
    document.getElementById("tot").innerText="GRAND TOTAL £"+String(total2dp);
  
}//End of function updatetotal()

function add(name) {
    switch(name) {
        case bf:
            if (inlist.includes("bf")) {//only execute the contents
                // of this 'if' statement if a record already exists
                qtybf+=1; //increase qty by 1
                record=document.getElementById("0");//access the existing record
                //keep the record in place, but update its contents
                //get the item name and the price from 
                //the cars array
                record.innerHTML=qtybf+'..........'+cars[0][0]+'......£'+cars[0][3]+'.....'+'<button style="margin-left:5px" class="removeitem" id=0 onclick="removeitem(0)">Remove</button>'
                record.style.fontSize="16px";
                //with an updated qty
               
                //we only want the qty to change, not add another record
                //so that is why we delete the existing record then
                //add the record back in, with qty updated
                total+=Number(cars[0][3]);
                updatetotal();
                return;
            }
            var item=document.createElement('p');
    item.setAttribute('id',0)
    item.innerHTML=qtybf+'..........'+cars[0][0]+'......£'+cars[0][3]+'.....'+'<button style="margin-left:5px" class="removeitem" id=0 onclick="removeitem(0)">Remove</button>'
    item.style.fontSize="16px";
    document.getElementById("incart").appendChild(item);
    if (!inlist.includes("bf")){//only execute the push if there is no
        //existing record 
    inlist.push("bf");
        }
    total+=Number(cars[0][3]);//get the price from the array
    updatetotal();
    break;

        case bd:
            if (inlist.includes("bd")) {
                qtybd+=1;
                record=document.getElementById("1");
                record.innerHTML=qtybd+'..........'+cars[1][0]+'.....£'+cars[1][3]+'.....'+'<button style="margin-left:5px" class="removeitem" id=1 onclick="removeitem(1)">Remove</button>'
                record.style.fontSize="16px";
                total+=Number(cars[1][3]);
                updatetotal();
                return;
            }

            var item=document.createElement('p');
item.setAttribute('id',1)
item.innerHTML=qtybd+'..........'+cars[1][0]+'.....£'+cars[1][3]+'.....'+'<button style="margin-left:5px" class="removeitem" id=1 onclick="removeitem(1)">Remove</button>'
item.style.fontSize="16px";
document.getElementById("incart").appendChild(item);
if (!inlist.includes("bd")) {//if there is no existing record
    //then push
        inlist.push("bd");
    }
        total+=Number(cars[1][3]);
        updatetotal();
        break;

        case rd:
            if (inlist.includes("rd")) {
                qtyrd+=1;
                record=document.getElementById("2");
                record.innerHTML=qtyrd+'..........'+cars[2][0]+'......£'+cars[2][3]+'.....'+'<button style="margin-left:5px" class="removeitem" id=2 onclick="removeitem(2)">Remove</button>'
                record.style.fontSize="16px";
                total+=Number(cars[2][3]);
                updatetotal();
                return;
            }

            var item=document.createElement('p');
item.setAttribute('id',2)
item.innerHTML=qtyrd+'..........'+cars[2][0]+'......£'+cars[2][3]+'.....'+'<button style="margin-left:5px" class="removeitem" id=2 onclick="removeitem(2)">Remove</button>'
item.style.fontSize="16px";
document.getElementById("incart").appendChild(item);
if (!inlist.includes("rd")) {
        inlist.push("rd");
    }
        total+=Number(cars[2][3]);
        updatetotal();
        break;

        case be:
            if (inlist.includes("be")) {
                qtybe+=1;
                record=document.getElementById("3");
                record.innerHTML=qtybe+'..........'+cars[3][0]+'......£'+cars[3][3]+'.....'+'<button style="margin-left:5px" class="removeitem" id=3 onclick="removeitem(3)">Remove</button>'
                record.style.fontSize="16px";
                total+=Number(cars[3][3]);
                updatetotal();
                return;
            }
           
            var item=document.createElement('p');
item.setAttribute('id',3)
item.innerHTML=qtybe+'..........'+cars[3][0]+'......£'+cars[3][3]+'.....'+'<button style="margin-left:5px" class="removeitem" id=3 onclick="removeitem(3)">Remove</button>'
item.style.fontSize="16px";
document.getElementById("incart").appendChild(item);
if(!inlist.includes("be")) {
        inlist.push("be");
    }
        total+=Number(cars[3][3]);
        updatetotal();
        break;


    }
       console.log(inlist);
}

function removeitem(itemnumber) {
    record=document.getElementById(itemnumber);//select the record
    //according to its Id
    //find out what the record contains before it is deleted
    text=record.innerText;//store the contents of the record in text variable
    console.log(text);
    console.log(inlist);
    console.log(qtybf);
    //Below is a useful loop to cycle through the list to find 
    //the index of where a name value is located. Once we have the
    //index value, we can delete that value from the list using splice method.
    if (text.includes("Ferrari")) {
        
        for( var i = 0; i < inlist.length; i++){ 
    
            if ( inlist[i] == "bf") { 
        
                inlist.splice(i, 1); //deletes the record from inlist
                console.log("splice done");
                console.log(inlist);
                total-=19.95*qtybf;//remove the correct amount
                //according to qty
                updatetotal();//the price*qty is subtracted from the total
                qtybf=1;//must be reset back to 1 or it will hold a previous
                //value which should have disappeared when record is deleted
            }
        }
    }
    if (text.includes("Blue")) {
        for( var i = 0; i < inlist.length; i++){ 
    
            if ( inlist[i] == "bd") { 
        
                inlist.splice(i, 1); //deletes the record from inlist
                console.log("bd should have been deleted ",inlist);
                total-=15.95*qtybd;
                updatetotal();
                qtybd=1;
            }
        }
    }
    if (text.includes("Red")) {
        for( var i = 0; i < inlist.length; i++){ 
    
            if ( inlist[i] == "rd") { 
        
                inlist.splice(i, 1); //deletes the record from inlist
                console.log(inlist);
                total-=17.95*qtyrd;
                updatetotal();
                qtyrd=1;
            }
        }
    }

    if (text.includes("Bullit")) {
        for( var i = 0; i < inlist.length; i++){ 
    
            if ( inlist[i] == "be") { 
        
                inlist.splice(i, 1); //deletes the record from inlist
                console.log(inlist);
                total-=25.95*qtybe;
                updatetotal();
                qtybe=1;
            }
        }
    }

record.remove()
console.log("inlist now contains ",inlist);
//the record will be removed according to its itemnumber
//this was defined at the beginning of the function
}//End of function removeitem()

function checkout() {
    window.alert("You have chosen to checkout.\nThe total to be paid is: £"+String(total2dp));
}
