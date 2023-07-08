'use strict';
import { HeaderFotter } from "./headerFooter.js";
//import { PlateMaking } from "./plateMaking.js";

$(document).ready(
    function () {
        async function funcaoExtraLocal() {
            const linksMenu = document.querySelectorAll('.mLink');
            
            function handleClick(event){
                event.preventDefault();
                fetchPage(event.target.href);
                window.history.pushState(null,null,event.target.href);
            };

            async function fetchPage(url){
                const pageResponse = await fetch(url);
                const pageText = await pageResponse.text();
                replaceContent(pageText);
            };

            function replaceContent(newText) {
                const newHtml = document.createElement('div');
                newHtml.innerHTML = newText;
            
                const oldContent = document.querySelector('main');
                const newContent = newHtml.querySelector('main');
            
                oldContent.innerHTML = newContent.innerHTML;

            }
            
            linksMenu.forEach(link => {
                link.addEventListener('click', handleClick);
            });

            window.addEventListener('popstate', () => {
                fetchPage(window.location.href);
            });
      
            debugger;
            const language = JSON.parse(localStorage.getItem('language'));
            document.getElementById("tProductLine").innerHTML = language.ProductLine.toUpperCase();
            document.getElementById("tAssemblyLine").innerHTML = language.AssemblyLine.toUpperCase();
            document.getElementById("tPlateMaking").innerHTML = language.PlateMaking.toUpperCase();
            document.getElementById("tFinishingLine").innerHTML = language.FinishingLine.toUpperCase();
            document.getElementById("tCompleteProjects").innerHTML = language.CompleteProjects.toUpperCase();
            document.getElementById("tUniqueEquipment").innerHTML = language.UniqueEquipment.toUpperCase();
            document.getElementById("tSpareParts").innerHTML = language.SpareParts.toUpperCase();
            document.getElementById("tMaterialSupply").innerHTML = language.MaterialSupply.toUpperCase();
            document.getElementById("tWelcome").innerHTML = language.Welcome;
            document.getElementById("tWelcomeText").innerHTML = language.WelcomeText;
            document.getElementById("tAbout").innerHTML = language.About.toUpperCase();
            document.getElementById("tAboutText").innerHTML = language.AboutText;

            document.getElementById("tServices").innerHTML = language.Services.toUpperCase();
            document.getElementById("tNetworking").innerHTML = language.Networking;
            document.getElementById("tNetworkingService").innerHTML = language.NetworkingService;
            document.getElementById("tConsultancy").innerHTML = language.Consultancy;
            document.getElementById("tConsultancyService").innerHTML = language.ConsultancyService;
            document.getElementById("tProducts").innerHTML = language.Products;
            document.getElementById("tProductsService").innerHTML = language.ProductsService;
            document.getElementById("tTechnicalSupport").innerHTML = language.TechnicalSupport;
            document.getElementById("tTechnicalSupportService").innerHTML = language.TechnicalSupportService;
           
           
        }
        
        HeaderFotter(funcaoExtraLocal);

    }
    
);