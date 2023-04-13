var fName=document.getElementById("f-name").value;
var lName=document.getElementById("l-name").value;
var pno=document.getElementById("p-no").value;
var email=document.getElementById("email").value;
function run(){
	alert(`first name:${fName} Last Name:${lName} Phone Number:${pno} Email ID:${email}`);
}
document.getElementById("btn").addEventListener("click",run);