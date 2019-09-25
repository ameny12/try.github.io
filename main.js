function acces(){
    var f = document.getElementById("form1");
    f.addEventListener("submit",function(event){
        var user = document.getElementById("username");
        var pass = document.getElementById("password");
        var useracces = "ameni";
        var passacces = "1234";
        if(user.value == useracces && pass.value == passacces){
            
            location.replace("index.html");
            event.preventDefault();
        }
        else{
            var error = document.getElementById("feedback");
            error.style.display = "block";
            event.preventDefault();
    
    
        }
    });
    }