//David Milton Lopez Esquivel
function go(){
  if(document.form.password.value=='1945' 
  && document.form.login.value=='david'){
      document.form.submit();
      location.href="index.html";
  }
  else if(document.form.password.value=='karlytec' 
  && document.form.login.value=='karly'){
      document.form.submit();
      location.href="index.html";

  }
  else{
      alert("Datos incorrecto, intentelo de nuvo.")
  }
}