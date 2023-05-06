$(document).ready(
    async function () {

        var response = await fetch('./header.html');
        var dados = await response.text();
        var div = document.getElementById("header");
        div.innerHTML = dados;

        var response = await fetch('./footer.html');
        var dados = await response.text();
        var div = document.getElementById("footer");
        div.innerHTML = dados;

        async function loadLanguage() {

            var response = await fetch('/vgcj/language.json');
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

            document.getElementById("mHome").innerHTML = language.mHome;
            document.getElementById("mAbout").innerHTML = language.mAbout;
            document.getElementById("mProducts").innerHTML = language.mProducts;
            document.getElementById("mServices").innerHTML = language.mServices;
            document.getElementById("mContact").innerHTML = language.mContact;

            //document.getElementById("mProductLine").innerHTML = language.mProductLine;
            document.getElementById("mAssemblyLine").innerHTML = language.mAssemblyLine;
            document.getElementById("mPlateMaking").innerHTML = language.mPlateMaking;
            document.getElementById("mFinishLine").innerHTML = language.mFinishLine;
            document.getElementById("mCompleteProject").innerHTML = language.mCompleteProject;
            document.getElementById("mUniqueEquipment").innerHTML = language.mUniqueEquipment;
            document.getElementById("mMaterialSupply").innerHTML = language.mMaterialSupply;

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


);
