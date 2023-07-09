'use strict';
export async function IndexLanguage() {
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
};