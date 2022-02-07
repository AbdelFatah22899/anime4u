function validate()
{

    var text=document.getElementById("t").value;
    var pass=document.getElementById("p").value;
    
    if(text=="")
    {
        alert("put your name");
        document.getElementById("t").focus();
    }
    else if(pass=="")
    {
        alert("put your password more than 8 in length");
    }
    else if(text!="abc" && pass=="123")
    {
        alert("wrong name");
    }
    else if(text=="abc" && pass!="123")
    {
        alert("wrong password");
    }
    else if(text!="abc" && pass!="123")
    {
        alert("email not found");
    }
    
    
    
}