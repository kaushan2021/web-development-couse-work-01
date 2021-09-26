
var shirt1_count=0;
var shirt2_count=0;
var shirt3_count=0;
var shirt4_count=0;
var total=0;
document.getElementById("invoice").style.display="none";  //hide invoice sheet
document.getElementById("msg").style.display="none";

function count_shit1(){

    shirt1_count=parseInt(prompt("Enter the Quantity "));
    if(Number.isInteger(shirt1_count)){
        if(shirt1_count>0){
            alert("Add to the cart");
        }

    }else{
        alert("Invalid input");
        shirt1_count=0;
    }
}
function count_shit2(){

    shirt2_count=parseInt(prompt("Enter the Quantity "));
    if(Number.isInteger(shirt2_count)){
        if(shirt2_count>0){
            alert("Add to the cart");
        }

    }else{
        alert("Invalid input");
        shirt1_count=0;
    }
}
function count_shit3(){

    shirt3_count=parseInt(prompt("Enter the Quantity "));
    if(Number.isInteger(shirt3_count)){
        if(shirt3_count>0){
            alert("Add to the cart");
        }

    }else{
        alert("Invalid input");
        shirt1_count=0;
    }
}
function count_shit4(){

    shirt4_count=parseInt(prompt("Enter the Quantity "));
    if(Number.isInteger(shirt4_count)){
        if(shirt4_count>0){
            alert("Add to the cart");
        }


    }else{
        alert("Invalid input");
        shirt1_count=0;
    }
}


function check_out(){

  var fname=document.getElementById("fname").value;
  var lname=document.getElementById("lname").value;
  var  email=document.getElementById("email").value;

  document.getElementById("invoice_title").innerHTML="-----INVOICE-----";
  document.getElementById("cus_name").innerHTML="---Name---";
  document.getElementById("inv_name").innerHTML=fname+" "+lname;
  document.getElementById("cus_mail").innerHTML="---Email---";
  document.getElementById("inv_email").innerHTML=email;

  if (shirt1_count>0){
      document.getElementById("product1").innerHTML="Nike Shirt (Men)";
      document.getElementById("qty1").innerHTML="Quantity "+shirt1_count;
      document.getElementById("price1").innerHTML="£50";
  }
  if(shirt2_count>0){
      document.getElementById("product2").innerHTML="Nike Shirt (Women)";
      document.getElementById("qty2").innerHTML="Quantity "+shirt2_count;
      document.getElementById("price2").innerHTML="£60";
  }
    if(shirt3_count>0){
        document.getElementById("product3").innerHTML="Nike Bat";
        document.getElementById("qty3").innerHTML="Quantity "+shirt3_count;
        document.getElementById("price3").innerHTML="£150";
    }
    if(shirt4_count>0){
        document.getElementById("product4").innerHTML="Nike Shoes";
        document.getElementById("qty4").innerHTML="Quantity "+shirt4_count;
        document.getElementById("price4").innerHTML="£80";
    }

    total=(shirt1_count*50)+(shirt2_count*60)+(shirt3_count*150)+(shirt4_count*80);

    document.getElementById("total").innerHTML="Total bill : "+"£"+total;

    document.getElementById("invoice").style.backgroundColor="#E5E8E8";
    if(total>0){
        document.getElementById("invoice").style.display="block";
    }else{
        alert("Nothing in the cart !")
    }


}

function reset_method(){
    document.getElementById("detail_form").reset();
    document.getElementById("invoice").reset();

}

function close_invoice(){
    document.getElementById("invoice").style.display="none";
    document.getElementById("msg").style.display="none";
}

function pay(){

    if(total>0){
        document.getElementById("msg").style.display="block";
    }

}