'use strict';
export async function HeaderFotter(funcaoExtra) {
    const responseHeader = await fetch('./header.html');
    const dadosHeader = await responseHeader.text();
    const divHeader = document.getElementById("header");
    divHeader.innerHTML = dadosHeader;

    const responseFooter = await fetch('./footer.html');
    const dadosFooter = await responseFooter.text();
    const divFooter = document.getElementById("footer");
    divFooter.innerHTML = dadosFooter;

    async function loadLanguage() {
        const responseLanguage = await fetch('language.json');
        const dados = await responseLanguage.json();
        let language;
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
        document.getElementById("mFinishingLine").innerHTML = language.FinishingLine;
        document.getElementById("mCompleteProjects").innerHTML = language.CompleteProjects;
        document.getElementById("mUniqueEquipment").innerHTML = language.UniqueEquipment;
        document.getElementById("mSpareParts").innerHTML = language.SpareParts;
        document.getElementById("mMaterialSupply").innerHTML = language.MaterialSupply;


        funcaoExtra();

    }

    loadLanguage();

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

        debugger;
        const script = document.createElement('script');
        document.body.appendChild(script);
        script.async = true;
        script.src = './plateMaking.js';

    }
    
    linksMenu.forEach(link => {
        link.addEventListener('click', handleClick);
    });

    window.addEventListener('popstate', () => {
        fetchPage(window.location.href);
    });
    
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