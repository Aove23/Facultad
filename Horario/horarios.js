

function descomponer_hora(hh){
  return [hh[0]+hh[1],hh[3]+hh[4],hh[6]+hh[7],hh[9]+hh[10]];
}
function calcularMargin(hh){
  var h=descomponer_hora(hh)[0];
  var m=descomponer_hora(hh)[1];

  var v = (h*40 - 7*40)+(m/60)*40;
  // console.log(v);
  return v;
}
function calcularLargo(hh){
  var h=descomponer_hora(hh)[0];
  var m=descomponer_hora(hh)[1];

  var v = (h*40 - 7*40)+(m/60)*40;

  var h2=descomponer_hora(hh)[2];
  var m2=descomponer_hora(hh)[3];

  var v2 = (h2*40 - 7*40)+(m2/60)*40;

  var v3 = v2 - v  ;
  // console.log(v3);
  return v3;
}

function pintar_mat(materia){

  for (var dia in materia.horarios){
    var divDia=document.getElementById(dia);

    var mat=document.createElement("div");
    mat.classList.add('materia');
    mat.id=materia.id;
    mat.style.marginTop=calcularMargin(materia.horarios[dia])+"px";
    mat.style.height=calcularLargo(materia.horarios[dia])+"px";
    mat.style.background=materia.color;
    divDia.appendChild(mat);
  }

}

var hora=document.getElementById("hora");
for(var i=7;i<22;i++){
  if(i>12){
    var t=i;
    t-=12;
  	hora.innerHTML+="<li>"+t+"pm</li>";
  }
  else{
  	hora.innerHTML+="<li>"+i+"am</li>";
  }
}

function pintar_list_mat(lm){
  var ul = $("listmat");
  for(var i in lm){
    var m=lm[i];
    ul.innerHTML+="<li><div class='cuadro' style='background:"+m.color+"'></div>"+m.id+"</li>";
  }

}
