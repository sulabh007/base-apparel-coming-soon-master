function getEmail(){
    const email= document.getElementById("forms").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)){
        document.getElementById("forms").value="";
        document.querySelector('.invalid').style.display = 'none';
        document.querySelector('#error').style.display = 'none';
    }
    else{
        document.querySelector('.invalid').style.display='block';
        document.querySelector('#error').style.display = 'block';
    }
    console.log("ok",email);
}