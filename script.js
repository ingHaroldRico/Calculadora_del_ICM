const peso=document.getElementById("peso")
const altura=document.getElementById("altura")
const resultado=document.getElementById("resultado")
const desc= document.getElementById("descripcion")
function icm(){
    if(peso.value=="" || altura.value==""){
        alert("Debes Ingresar todos los valores")
        return
    }
    else{
        let resul=0
        let peso1=parseFloat(peso.value)
        let altura1=parseFloat(altura.value)
        resul=(peso1)/(altura1*altura1)

        if(resul <=16){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estas en Desnitrución Severa"
        }
        else if(resul>16.1 && resul<=18.4){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estas en Desnitrución Moderada"
        }
        else if(resul>18.5 && resul<=22){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estas en Bajo de Peso"
        }
        else if(resul>22.1 && resul<=24.9){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estas en Peso Normal"
        }
        else if(resul>25 && resul<=29.9){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estas en Sobrepeso"
        }
         else if(resul>30 && resul<=34.9){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estas en Obesidad tipo I "
         }
         else if(resul>35 && resul<=39.9){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estas en Obesidad tipo II "
         }
          else if(resul>40){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estas en Obesidad tipo III "
         }
    }
    
}

    
