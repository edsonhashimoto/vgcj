import { HeaderFotter } from "./headerFooter.js";

$(document).ready(
    function () {
        function funcaoExtraLocal() {
            var language = JSON.parse(localStorage.getItem('language'));
            document.getElementById("tServices").innerHTML = language.Services;
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
    });