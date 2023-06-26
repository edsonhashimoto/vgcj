import { HeaderFotter } from "./headerFooter.js";

$(document).ready(
    function () {
        function funcaoExtraLocal() {
            var language = JSON.parse(localStorage.getItem('language'));

            document.getElementById("tMaterialSupply").innerHTML = language.MaterialSupply;

            document.getElementById("tSafetyvalveAndOring").innerHTML = language.ProductObject.SafetyvalveAndOring;
            document.getElementById("tFoilSealingMachine").innerHTML = language.ProductObject.FoilSealingMachine;
            document.getElementById("tFoilSealingMachineGF").innerHTML = language.ProductObject.FoilSealingMachineGF;
            document.getElementById("figFoilSealingMachine").innerHTML = language.ProductObject.FoilSealingMachine;
            document.getElementById("figFoilSealingMachine").setAttribute("alt", language.ProductObject.FoilSealingMachine);
            
            CONINUAR Tubos de gotejamento
        }

        HeaderFotter(funcaoExtraLocal);
    });