$(document).ready(function () {

    $('#flagUsa').on("click",
        function () {
            localStorage.setItem('lang', 'us');

            $('#tServices').text('Services');
            $('#tNetworking').text('Networking');
            $('#tNetworkingService').text('VGCJ has a network with the best storage battery machine manufacturers in Asia as well as consultancy teams in energy storage systems, dust collector equipment and dry ice blasting equipment technology.No matter your needs, VGCJ can put you in touch with the right people. ');
            $('#tConsultancy').text('Consultancy');
            $('#tConsultancyService').text('VGCJ’s vast experience is like no other when it comes to machinery, storage battery assembly equipment, raw materials, molds and processes.We consult with clients and affiliates around the world and advise on the best solutions for your specific needs.');
            $('#tProducts').text('Products');
            $('#tProductsService').text('VGCJ is the bridge to offering the right turnkey solutions for improving customer production quality and capacity.We cooperate with vastly experienced manufactures and suppliers giving our products and machines guaranteed excellence.');
            $('#tTechnicalSupport').text('Technical support');
            $('#tTechnicalSupportService').text('VGCJ has a professional senior consultancy team to assist our loyal customers. We are always right here for our customers whenever they may need any information or help.We save our customers search time and reduce the risk when trying new projects.');
        }
    );
    $('#flagBrazil').on("click",
        function () {
            localStorage.setItem('lang', 'br');

            $('#tServices').text('Serviços');
            $('#tNetworking').text('Rede');
            $('#tNetworkingService').text('A VGCJ possui uma rede com os melhores fabricantes de máquinas de bateria de armazenamento na Ásia, bem como equipes de consultoria em sistemas de armazenamento de energia, equipamentos coletores de pó e tecnologia de equipamentos de jateamento de gelo seco. Independentemente das suas necessidades, a VGCJ pode colocá-lo em contato com as pessoas certas.');
            $('#tConsultancy').text('Consultoria');
            $('#tConsultancyService').text('A vasta experiência da VGCJ é incomparável quando se trata de máquinas, equipamentos de montagem de baterias armazenadoras, matérias-primas, moldes e processos. Consultamos clientes e afiliados em todo o mundo e aconselhamos sobre as melhores soluções para suas necessidades específicas.');
            $('#tProducts').text('Produtos');
            $('#tProductsService').text('A VGCJ é a ponte para oferecer as soluções completas certas para melhorar a qualidade e a capacidade de produção do cliente. Cooperamos com fabricantes e fornecedores muito experientes, garantindo excelência aos nossos produtos e máquinas.');
            $('#tTechnicalSupport').text('Suporte técnico');
            $('#tTechnicalSupportService').text('A VGCJ possui uma equipe profissional de consultoria sênior para atender nossos clientes fiéis. Estamos sempre aqui para atender nossos clientes sempre que eles precisarem de qualquer informação ou ajuda. Economizamos o tempo de pesquisa de nossos clientes e reduzimos o risco ao experimentar novos projetos.');
        }
    );

    $('#flagTaiwan').on("click",
        function () {
            localStorage.setItem('lang', 'tw');

            $('#tServices').text('服務業');
            $('#tNetworking').text('聯網');
            $('#tNetworkingService').text('VGCJ擁有亞洲最好的蓄電池整機製造商網絡，以及儲能係統、除塵設備和乾冰清洗設備技術方面的諮詢團隊。 無論您有什麼需求，VGCJ 都能讓您與合適的人取得聯繫。');
            $('#tConsultancy').text('諮詢');
            $('#tConsultancyService').text('VGCJ在機械、蓄電池組裝設備、原材料、模具和工藝方面的豐富經驗是獨一無二的。 我們諮詢世界各地的客戶和分支機構，並針對您的特定需求提供最佳解決方案建議。');
            $('#tProducts').text('產品');
            $('#tProductsService').text('VGCJ 是提供正確的交鑰匙解決方案以提高客戶生產質量和產能的橋樑。 我們與經驗豐富的製造商和供應商合作，確保我們的產品和機器卓越。');
            $('#tTechnicalSupport').text('技術支援');
            $('#tTechnicalSupportService').text('VGCJ擁有一支專業的高級顧問團隊來協助我們忠實的客戶。 每當客戶需要任何信息或幫助時，我們始終在這里為他們服務。 我們節省了客戶搜索時間並降低了嘗試新項目時的風險。');
        }
    );

    if (!localStorage.getItem('lang') || localStorage.getItem('lang') == 'us') {
        $("#flagUsa").trigger('click');
    }
    else if (localStorage.getItem('lang') == 'br') {
        $("#flagBrazil").trigger('click');
    }
    else if (localStorage.getItem('lang') == 'tw') {
        $("#flagTaiwan").trigger('click');
    }



});