alert("hi")
function sendData(){
    let Name=document.getElementById("name").value ;
    let Email=document.getElementById("email").value;
    localStorage.setItem("name",Name);
    localStorage.setItem("email",Email);
}