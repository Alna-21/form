function formvalidation(){
    if(document.myform.name.value==""){
        alert("Please provide Name!")
        return false;
    }
    if(document.myform.class.value==""){
        alert("Please provide  details of Class !")
        return false;
    }
    if(document.myform.division.value==""){
        alert("Please provide Division of class")
        return false;
    }
    if(document.myform.gender.value==""){
        alert("Please provide Gender")
        return false;
    }
    if(document.myform.date.value==""){
        alert("Please provide Date of Birth")
        return false;
    }

}
function submitForm(){
    let inputName=document.getElementById('txtname').value;
    let inputClass=document.getElementById('txtclass').value;
    let inputDivision=document.getElementById('txtdiv').value;
    let inputDate=document.getElementById('txtdate').value;
    let inputGender=document.getElementById('txtgender').value;
     

    
    let total="Name:"+inputName+'\n'+
    "Class:"+inputClass+'\n'+
    "Division:"+inputDivision+'\n'+
    "Gender:"+inputGender+'\n'+
    "Date of Birth:"+inputDate;
    alert(total);
}
