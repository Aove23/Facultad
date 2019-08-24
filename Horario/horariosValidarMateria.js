


class Materia {
  constructor(id,notas,color,linkTeoria,linkPractica,nombreDocente) {
    this.id=id;
    this.notas=notas;
    this.color=color;
    this.linkTeoria=linkTeoria;
    this.linkPractica=linkPractica;
    this.nombreDocente=nombreDocente;
    this.horarios=new Array();
  }
}



//**MAIN*/

var lm = [];

lm.push(new Materia("WinWin","","#1CC1BF","","","SanCristobal"));
lm[0].horarios["lunes"]="14:30,18:30";

lm.push(new Materia("Complemento","","orange","","","Arguirofo"));
lm[1].horarios["lunes"]="15:45,17:45";
lm[1].horarios["martes"]="07:00,09:00";
lm[1].horarios["miercoles"]="12:45,15:45";

lm.push(new Materia("Ingles","","green","","","Miskin"));
lm[2].horarios["martes"]="19:00,21:00";
lm[2].horarios["jueves"]="19:00,21:00";


lm.push(new Materia("Transformacion Digital","","#E91C1C","","","Yo"));
lm[3].horarios["viernes"]="08:00,21:00";


for(var i in lm){
  pintar_mat(lm[i]);
}
pintar_list_mat(lm);

var btnnm=document.getElementById("btnnm");
btnnm.addEventListener("click",function(){
  var mdlnm = document.getElementById("mdlnm");
  mdlnm.showModal();
});

var btnnmC=document.getElementById("mdlnmCancelar");
btnnmC.addEventListener("click",function(){
  var mdlnm = document.getElementById("mdlnm");
  var btnA=$("mdlnmAceptar");
  btnA.disabled=false;
  mdlnm.close();
});

var btnUpdate = document.getElementById("btnUpdate");
btnUpdate.addEventListener("click",function(){
  var mdlnm = document.getElementById("mdlnm");
  mdlnm.showModal();
});

function $(id){
  return document.getElementById(id);
}
function crearMateria(){
  var formu=$("config");
    var fnameMat = $("fnameMat").value;
    var fcolor = $("fcolor").value;
    var fnameDoc = $("fnameDoc").value;
    var ftext = $("ftext").value;
    var flinkt = $("flinkt").value;
    var flinkp = $("flinkp").value;

    var chxlun = $("checkboxLunes");
    var chxmar = $("checkboxMartes");
    var chxmie = $("checkboxMiercoles");
    var chxjue = $("checkboxJueves");
    var chxvier = $("checkboxViernes");

    if(fnameMat != "" && fnameDoc != "" ){

      var n=new Materia(fnameMat,ftext,fcolor,flinkt,flinkp,fnameDoc);

      if(formu.miCheckLunes.checked){
        var horari=formu.hilun.value+","+formu.hflun.value;
        n.horarios["lunes"]=horari;
      }
      if(formu.miCheckMartes.checked){
        var horari=formu.himar.value+","+formu.hfmar.value;
        n.horarios["martes"]=horari;
      }
      if(formu.miCheckMiercoles.checked){
        var horari=formu.himie.value+","+formu.hfmie.value;
        n.horarios["miercoles"]=horari;
      }
      if(formu.miCheckJueves.checked){
        var horari=formu.hijue.value+","+formu.hfjue.value;
        n.horarios["jueves"]=horari;
      }
      if(formu.miCheckViernes.checked){
        var horari=formu.hivie.value+","+formu.hfvie.value;
        n.horarios["viernes"]=horari;
      }

      if(existe_en_lm(n)){
        return null;
      }
      return n;
    }
    return null;

}

var btnnmA = document.getElementById("mdlnmAceptar");
btnnmA.addEventListener("click",function(){
  var materia = crearMateria();

  if(materia != null){
    lm.push(materia);
    pintar_mat(materia);
    pintar_list_mat(lm);
    console.log(lm);
    mdlnm.close();
  }
  else {
    alert("Revise los datos");
  }
  this.disabled=true;

});




//Confirmacion DEL FORMULARIO

function existe_en_lm(id){
  for(var i in lm ){
    var m=lm[i];
    if(m.id == id){
      return 1;
    }
  }
  return 0;
}
var nameM=$("fnameMat");
console.log(nameM);
nameM.addEventListener('input', updateValue);
function updateValue(e) {
  console.log(e.target.value);
  var btnA=$("mdlnmAceptar");
  if(e.target.value.length <=4 || existe_en_lm(e.target.value)){
    btnA.disabled=true;
  }else{
    btnA.disabled=false;
  }
}
