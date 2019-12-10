function showName(str){
    if (str.length == 0)
    {
        document.getElementById("txtName").innerHTML=""; 
        return;
    }
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else 
    {
     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() 
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            document.getElementById("txtName").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","frameworks.php?name="+str,true);
    xmlhttp.send();
}