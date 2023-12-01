function popular(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    var info1Tabela = document.getElementById("info1-tabela");
    var info2Tabela = document.getElementById("info2-tabela");
    var info3Tabela = document.getElementById("info3-tabela");
    var info4Tabela = document.getElementById("info4-tabela");
    var info5Tabela = document.getElementById("info5-tabela");
    var info6Tabela = document.getElementById("info6-tabela");
    var oft1Tabela = document.getElementById("oft1-tabela");
    var oft2Tabela = document.getElementById("oft2-tabela");
    var oft3Tabela = document.getElementById("oft3-tabela");
    var oft4Tabela = document.getElementById("oft4-tabela");
    var oft5Tabela = document.getElementById("oft5-tabela");
    var oft6Tabela = document.getElementById("oft6-tabela");
    var rad1Tabela = document.getElementById("rad1-tabela");
    var rad2Tabela = document.getElementById("rad2-tabela");
    var rad3Tabela = document.getElementById("rad3-tabela");
    var rad4Tabela = document.getElementById("rad4-tabela");
    var rad5Tabela = document.getElementById("rad5-tabela");
    var rad6Tabela = document.getElementById("rad6-tabela");
    var oftm1Tabela = document.getElementById("oftm1-tabela");
    var oftm2Tabela = document.getElementById("oftm2-tabela");
    var oftm3Tabela = document.getElementById("oftm3-tabela");
    var oftm4Tabela = document.getElementById("oftm4-tabela");
    var oftm5Tabela = document.getElementById("oftm5-tabela");
    var oftm6Tabela = document.getElementById("oftm6-tabela");
    var oftm7Tabela = document.getElementById("oftm7-tabela");
    var oftm8Tabela = document.getElementById("oftm8-tabela");

    s2.innerHTML = "";
    if(s1.value=="info"){
        var opcoes = ['info1|1° termo','info2|2° termo','info3|3° termo','info4|4° termo','info5|5° termo','info6|6° termo'];
    
        for (var i = 0; i < opcoes.length; i++) {
                var partes = opcoes[i].split('|');
                var option = document.createElement("option");
                option.value = partes[0];
                option.text = partes[1];
                s2.appendChild(option);
            }
        if (s2.value == "info1") {
            info1Tabela.style.display = "block";  
        }
        else if (s2.value == "info2") {
            info2Tabela.style.display = "block";  
        }
        else if (s2.value == "info3") {
            info3Tabela.style.display = "block";  
        }
        else if (s2.value == "info4") {
            info4Tabela.style.display = "block";  
        }
        else if (s2.value == "info5") {
            info5Tabela.style.display = "block";  
        }
        else if (s2.value == "info6") {
            info6Tabela.style.display = "block";  
        }
    }

    else if(s1.value=="oft"){
        var opcoes = ['oft1|1° termo','oft2|2° termo','oft3|3° termo','oft4|4° termo','oft5|5° termo','oft6|6° termo'];
    
        for (var i = 0; i < opcoes.length; i++) {
                var partes = opcoes[i].split('|');
                var option = document.createElement("option");
                option.value = partes[0];
                option.text = partes[1];
                s2.appendChild(option);
            }
        if (s2.value == "oft1") {
            oft1Tabela.style.display = "block";  
        }
        else if (s2.value == "oft2") {
            oft2Tabela.style.display = "block";  
        }
        else if (s2.value == "oft3") {
            oft3Tabela.style.display = "block";  
        }
        else if (s2.value == "oft4") {
            oft4Tabela.style.display = "block";  
        }
        else if (s2.value == "oft5") {
            oft5Tabela.style.display = "block";  
        }
        else if (s2.value == "oft6") {
            oft6Tabela.style.display = "block";  
        }
    }

    else if(s1.value=="oftm"){
        var opcoes = ['oftm1|1° termo','oftm2|2° termo','oftm3|3° termo','oftm4|4° termo','oftm5|5° termo','oftm6|6° termo','oftm7|7° termo','oftm8|8° termo'];
    
        for (var i = 0; i < opcoes.length; i++) {
                var partes = opcoes[i].split('|');
                var option = document.createElement("option");
                option.value = partes[0];
                option.text = partes[1];
                s2.appendChild(option);
            }
        if (s2.value == "oft1") {
            oft1Tabela.style.display = "block";  
        }
        else if (s2.value == "oft2") {
            oft2Tabela.style.display = "block";  
        }
        else if (s2.value == "oft3") {
            oft3Tabela.style.display = "block";  
        }
        else if (s2.value == "oft4") {
            oft4Tabela.style.display = "block";  
        }
        else if (s2.value == "oft5") {
            oft5Tabela.style.display = "block";  
        }
        else if (s2.value == "oft6") {
            oft6Tabela.style.display = "block";  
        }
    }
    
    else if(s1.value=="rad"){
        var opcoes = ['rad1|1° termo','rad2|2° termo','rad3|3° termo','rad4|4° termo','rad5|5° termo','rad6|6° termo'];
    
        for (var i = 0; i < opcoes.length; i++) {
                var partes = opcoes[i].split('|');
                var option = document.createElement("option");
                option.value = partes[0];
                option.text = partes[1];
                s2.appendChild(option);
            }
        if (s2.value == "rad1") {
            rad1Tabela.style.display = "block";  
        }
        else if (s2.value == "rad2") {
            rad2Tabela.style.display = "block";  
        }
        else if (s2.value == "rad3") {
            rad3Tabela.style.display = "block";  
        }
        else if (s2.value == "rad4") {
            rad4Tabela.style.display = "block";  
        }
        else if (s2.value == "rad5") {
            rad5Tabela.style.display = "block";  
        }
        else if (s2.value == "rad6") {
            rad6Tabela.style.display = "block";  
        }
    }

}

function esconderTabela() {
    var selectedValue = document.getElementById("sel2").value;
    var info1Tabela = document.getElementById("info1-tabela");
    var info2Tabela = document.getElementById("info2-tabela");
    var info3Tabela = document.getElementById("info3-tabela");
    var info4Tabela = document.getElementById("info4-tabela");
    var info5Tabela = document.getElementById("info5-tabela");
    var info6Tabela = document.getElementById("info6-tabela");
    var oft1Tabela = document.getElementById("oft1-tabela");
    var oft2Tabela = document.getElementById("oft2-tabela");
    var oft3Tabela = document.getElementById("oft3-tabela");
    var oft4Tabela = document.getElementById("oft4-tabela");
    var oft5Tabela = document.getElementById("oft5-tabela");
    var oft6Tabela = document.getElementById("oft6-tabela");
    var rad1Tabela = document.getElementById("rad1-tabela");
    var rad2Tabela = document.getElementById("rad2-tabela");
    var rad3Tabela = document.getElementById("rad3-tabela");
    var rad4Tabela = document.getElementById("rad4-tabela");
    var rad5Tabela = document.getElementById("rad5-tabela");
    var rad6Tabela = document.getElementById("rad6-tabela");
    var oftm1Tabela = document.getElementById("oftm1-tabela");
    var oftm2Tabela = document.getElementById("oftm2-tabela");
    var oftm3Tabela = document.getElementById("oftm3-tabela");
    var oftm4Tabela = document.getElementById("oftm4-tabela");
    var oftm5Tabela = document.getElementById("oftm5-tabela");
    var oftm6Tabela = document.getElementById("oftm6-tabela");
    var oftm7Tabela = document.getElementById("oftm7-tabela");
    var oftm8Tabela = document.getElementById("oftm8-tabela");

    info1Tabela.style.display = "none";
    info2Tabela.style.display = "none";
    info3Tabela.style.display = "none";
    info4Tabela.style.display = "none";
    info5Tabela.style.display = "none";
    info6Tabela.style.display = "none";
    oft1Tabela.style.display = "none";
    oft2Tabela.style.display = "none";
    oft3Tabela.style.display = "none";
    oft4Tabela.style.display = "none";
    oft5Tabela.style.display = "none";
    oft6Tabela.style.display = "none";
    rad1Tabela.style.display = "none";
    rad2Tabela.style.display = "none";
    rad3Tabela.style.display = "none";
    rad4Tabela.style.display = "none";
    rad5Tabela.style.display = "none";
    rad6Tabela.style.display = "none";
    oftm1Tabela.style.display = "none";
    oftm2Tabela.style.display = "none";
    oftm3Tabela.style.display = "none";
    oftm4Tabela.style.display = "none";
    oftm5Tabela.style.display = "none";
    oftm6Tabela.style.display = "none";
    oftm7Tabela.style.display = "none";
    oftm8Tabela.style.display = "none";

    if (selectedValue === "info1") {
        info1Tabela.style.display = "block";
    } 
    else if (selectedValue === "info2") {
        info2Tabela.style.display = "block";
    }
    else if (selectedValue === "info3") {
        info3Tabela.style.display = "block";
    }
    else if (selectedValue === "info4") {
        info4Tabela.style.display = "block";
    }
    else if (selectedValue === "info5") {
        info5Tabela.style.display = "block";
    }
    else if (selectedValue === "info6") {
        info6Tabela.style.display = "block";
    }
    else if (selectedValue === "oft1") {
        oft1Tabela.style.display = "block";
    } 
    else if (selectedValue === "oft2") {
        oft2Tabela.style.display = "block";
    }
    else if (selectedValue === "oft3") {
        oft3Tabela.style.display = "block";
    }
    else if (selectedValue === "oft4") {
        oft4Tabela.style.display = "block";
    }
    else if (selectedValue === "oft5") {
        oft5Tabela.style.display = "block";
    }
    else if (selectedValue === "oft6") {
        oft6Tabela.style.display = "block";
    }
    else if (selectedValue === "rad1") {
        rad1Tabela.style.display = "block";
    } 
    else if (selectedValue === "rad2") {
        rad2Tabela.style.display = "block";
    }
    else if (selectedValue === "rad3") {
        rad3Tabela.style.display = "block";
    }
    else if (selectedValue === "rad4") {
        rad4Tabela.style.display = "block";
    }
    else if (selectedValue === "rad5") {
        rad5Tabela.style.display = "block";
    }
    else if (selectedValue === "rad6") {
        rad6Tabela.style.display = "block";
    }
    else if (selectedValue === "oftm1") {
        oftm1Tabela.style.display = "block";
    } 
    else if (selectedValue === "oftm2") {
        oftm2Tabela.style.display = "block";
    }
    else if (selectedValue === "oftm3") {
        oftm3Tabela.style.display = "block";
    }
    else if (selectedValue === "oftm4") {
        oftm4Tabela.style.display = "block";
    }
    else if (selectedValue === "oftm5") {
        oftm5Tabela.style.display = "block";
    }
    else if (selectedValue === "oftm6") {
        oftm6Tabela.style.display = "block";
    }
    else if (selectedValue === "oftm7") {
        oftm7Tabela.style.display = "block";
    }
    else if (selectedValue === "oftm8") {
        oftm8Tabela.style.display = "block";
    }
}

function calcularDia(){
    var x = document.getElementById("horasfalta").value;
    var y = document.getElementById("dia").value;
    var xn = parseFloat(x);
    var yn = parseFloat(y);

    if (!isNaN(xn)&&!isNaN(yn)){
        var resultado = xn / yn;
        if (resultado <= 1){
            document.getElementById("resultado").textContent = "Você pode faltar " + resultado + " dia";
        }
        else if (resultado > 1){
            document.getElementById("resultado").textContent = "Você pode faltar " + resultado + " dias";
        }
    } 
    else {
        document.getElementById("resultado").textContent = "Por favor, digite um número válido.";
    }
}