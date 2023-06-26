import { HeaderFotter } from "./headerFooter.js";

$(document).ready(
    function () {
        function funcaoExtraLocal() {
            var language = JSON.parse(localStorage.getItem('language'));

            document.getElementById("tCompleteProjects").innerHTML = language.CompleteProjects;

            document.getElementById("tAssemblyLines").innerHTML = language.ProductObject.AssemblyLines;            
            document.getElementById("tGridConCastSystem").innerHTML = language.ProductObject.GridConCastSystem;            
            document.getElementById("tLeadStripProductionLine").innerHTML = language.ProductObject.LeadStripProductionLine;            
            document.getElementById("tExpandingProductionLine").innerHTML = language.ProductObject.ExpandingProductionLine;            
            document.getElementById("tConDoubleSidePastingLine").innerHTML = language.ProductObject.ConDoubleSidePastingLine;            
            document.getElementById("tPunchingLine").innerHTML = language.ProductObject.PunchingLine;            
            
        }

        HeaderFotter(funcaoExtraLocal);
    });