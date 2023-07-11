

function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var name = document.Form.name.value;
   var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var upload = document.Form.upload.value
    var selectslot = document.Form.selectslot.value
    

    var nameerr = emailerr = mobileerr = uploaderr = sloterr = true;
    
/*name*/

    if(name == "") {
        printError("nameerr", "Please enter your name");
       
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameerr", "Please enter a valid name");
        } else {
            printError("nameerr", "");
            nameerr = false;  
        }
    }

    /*email*/

    if(email == "") {
        printError("emailerr", "Please enter your Email");
       
    } else {
        var regex = /^\S+@\S+\.\S+$/;                
        if(regex.test(email) === false) {
            printError("emailerr", "Please enter a valid Email");
        } else {
            printError("emailerr", "");
            emailerr = false;  
        }
    }
/*phone number*/

    if(mobile == "") {
        printError("mobileerr", "Please enter your mobile number");
        
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileerr", "Please enter a valid 10 digit mobile number");
           
        } else{
            printError("mobileerr", "");
            mobileerr = false;
           
        }
    }
    /*upload file*/

    if(upload == "") {
        printError("uploaderr", "Please upload your file");
        
    } else{
        printError("uploaderr", "");
        uploaderr = false;
       
    }

   
    /*slot*/

    if(selectslot == "select") {
        printError("sloterr", "Please select a slot");
        
    } else{
        printError("sloterr", "");
        sloterr = false;
       
    }


    if((nameerr || emailerr || mobileerr || uploaderr || sloterr) == true) {
        return false;
     } 
    
};
 /*select any 2*/
 function validate(){
    var a= document.getElementsByName("select");
 var i,count=0;
 for(i=0;i<a.length;i++){
     if(a[i].checked===true){
         count++;
     }
   
 }
 if(count == "") {
    document.getElementById("selecterr").innerHTML="Please Select Range";
    
}else{
 if(count>2){
    document.getElementById("selecterr").innerHTML="Please Select Only 2";
 }else{
    document.getElementById("selecterr").innerHTML="";
 }
}
 }

 