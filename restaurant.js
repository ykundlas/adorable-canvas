function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["info"].elements.length; 
        loopCounter++) {
        if (document.forms["info"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["info"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}

function validateItems() {
	clearErrors();
	
	var name = document.forms["info"]["name"].value;
	var email = document.forms["info"]["email"].value;
	var phone = document.forms["info"]["phone"].value;
	
	
	phone = parseInt(document.forms["info"]["phone"].value);
	
	if(name == null || name == ""){
		alert("Please fill your name.");
	document.forms["info"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["info"]["name"].focus();
        return false;
    }
	if (isNaN(phone)){  
	alert("Enter your phone number.");
	document.forms["info"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["info"]["phone"].focus();
        return false;
    }
	
	var atposition= email.indexOf("@");  
    var dotposition= email.lastIndexOf(".");  
	
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
	alert("Please enter a valid email.")
	document.forms["info"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["info"]["email"].focus();
        return false;
    }
}