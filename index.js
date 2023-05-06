import { HeaderFotter } from "./headerFooter.js";

$(document).ready(
    function () {
        function funcaoExtraLocal() {
            var language = JSON.parse(localStorage.getItem('language'));
            document.getElementById("tProductLine").innerHTML = language.ProductLine.toUpperCase();
            document.getElementById("tAssemblyLine").innerHTML = language.AssemblyLine.toUpperCase();
            document.getElementById("tPlateMaking").innerHTML = language.PlateMaking.toUpperCase();
            document.getElementById("tFinishLine").innerHTML = language.FinishLine.toUpperCase();
            document.getElementById("tCompleteProject").innerHTML = language.CompleteProject.toUpperCase();
            document.getElementById("tUniqueEquipment").innerHTML = language.UniqueEquipment.toUpperCase();
            document.getElementById("tMaterialSupply").innerHTML = language.MaterialSupply.toUpperCase();
            document.getElementById("tWelcome").innerHTML = language.Welcome;
            document.getElementById("tWelcomeText").innerHTML = language.WelcomeText;
        }

        HeaderFotter(funcaoExtraLocal);
    });