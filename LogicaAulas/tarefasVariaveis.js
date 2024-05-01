function calcularIMC(){

    var peso = parseFloat(document.getElementById(`peso`).value);
    var altura = parseFloat(document.getElementById(`altura`).value);

    var altura = alturaCm / 100;

    var imc = peso /(altura * altura);


    var classificacao = "";
    var obesidadeGrau = "";

    if(imc < 18.5){
        classificacao = "MAGREZA";
        obesidadeGrau = "0";
    }else if(imc >= 18.5 && imc <= 24.9){
      classificacao = "NORMAL" ; 
      obesidadeGrau = "0";
    }else if(imc >= 25.0 && imc <= 29.9){
        classificacao = "SOBREPESO";
        obesidadeGrau = "I";
    }else if(imc >= 30.0 && imc <= 39.9){
        classificacao = "OBESIDADE";
        obesidadeGrau = "II";
    }else{
        classificacao = "OBESIDADE GRAVE";
        obesidadeGrau = "III";
    }
    var resultado = "Seu IMC é "+ imc.toFixed(2) + "<br";
    resultado = "Classicação" + classificacao + "<br";
    resultado += "Obesidade (Grau):" + obesidadeGrau;

    document.getElementById("resultado").innerHTML = resultado;
}