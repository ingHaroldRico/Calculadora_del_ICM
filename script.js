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
             desc.innerText="Estás en Desnutrición Severa"
             desc.style.color='red'
     
        }
        else if(resul>16.1 && resul<=18.4){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Desnutrición Moderada"
             desc.style.color='orangered'
        }
        else if(resul>18.5 && resul<=22){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Bajo de Peso"
             desc.style.color='orange'
        }
        else if(resul>22.1 && resul<=24.9){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Peso Normal"
             desc.style.color='green'
        }
        else if(resul>25 && resul<=29.9){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Sobrepeso"
             desc.style.color='orenge'
        }
         else if(resul>30 && resul<=34.9){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Obesidad tipo I "
             desc.style.color='orengered'
         }
         else if(resul>35 && resul<=39.9){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Obesidad tipo II "
             desc.style.color='darkred'
         }
          else if(resul>40){
             resultado.innerText="El ICM es "+resul
             desc.innerText="Estás en Obesidad tipo III "
             desc.style.color='red'
         }
    }
    
}

    
