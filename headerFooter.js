export async function HeaderFotter(funcaoExtra) {
    var response = await fetch('./header.html');
    var dados = await response.text();
    var div = document.getElementById("header");
    div.innerHTML = dados;

    var response = await fetch('./footer.html');
    var dados = await response.text();
    var div = document.getElementById("footer");
    div.innerHTML = dados;

    async function loadLanguage() {
        var response = await fetch('language.json');
        var dados = await response.json();
        var language;
        if (!localStorage.getItem('lang') || localStorage.getItem('lang') == 'us') {
            language = dados.us;
        }
        else if (localStorage.getItem('lang') == 'br') {
            language = dados.br;
        }
        else if (localStorage.getItem('lang') == 'tw') {
            language = dados.tw;
        }
        localStorage.setItem('language', JSON.stringify(language));

        document.getElementById("mHome").innerHTML = language.Home.toUpperCase();;
        document.getElementById("mAbout").innerHTML = language.About.toUpperCase();;
        document.getElementById("mProducts").innerHTML = language.Products.toUpperCase();;
        document.getElementById("mServices").innerHTML = language.Services.toUpperCase();;
        document.getElementById("mContact").innerHTML = language.Contact.toUpperCase();;

        document.getElementById("mAssemblyLine").innerHTML = language.AssemblyLine;
        document.getElementById("mPlateMaking").innerHTML = language.PlateMaking;
        document.getElementById("mFinishLine").innerHTML = language.FinishLine;
        document.getElementById("mCompleteProject").innerHTML = language.CompleteProject;
        document.getElementById("mUniqueEquipment").innerHTML = language.UniqueEquipment;
        document.getElementById("mMaterialSupply").innerHTML = language.MaterialSupply;

        funcaoExtra();

    }

    loadLanguage();

    $('#flagUsa').on("click",
        function () {
            localStorage.setItem('lang', 'us');
            loadLanguage();
        }
    );
    $('#flagBrazil').on("click",
        function () {
            localStorage.setItem('lang', 'br');
            loadLanguage();
        }
    );

    $('#flagTaiwan').on("click",
        function () {
            localStorage.setItem('lang', 'tw');
            loadLanguage();
        }
    );
}