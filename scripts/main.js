let aText =  ["⠀⠀⠀Desde a primeira vez que eu te vi, fiquei completamente apaixonado, uma moça tão linda e ela tava ali perto de mim, meus olhos brilharam, eu só consegui pensar 'É ela que quero para minha vida'. Sou muito grato ao meu tio por casar kkkk, e por tentar juntar a gente, essa ação dele não pode ter sido coincidência, acredito que foi Deus pedindo-lhe para nos juntar. Tu não tens noção de como mudou minha vida, acredito que sem você, eu não seria a pessoa que sou hoje, entao obrigado meu amor, obrigado por sempre estar ao meu lado, por me apoiar e nunca desistir de mim.",
    "⠀⠀⠀Sei que não sou perfeito, mas você continuou comigo, você acredita em mim até quando eu mesmo não acredito, tudo que eu conquistar, vai ser nosso, vai ser nossa conquista. Você merece o mundo, mas infelizmente isso não posso te dar, mas vou te dar tudo ao meu alcance. Eu te amo muito meu amor, você não tem ideia do quanto te amo, porque se soubesse, não ficaria duvidando. Você é uma pessoa incrível, eu sei que tem problemas, mas todo mundo tem, sou cheio deles e você continua comigo. Quando casarmos, o que realmente vamos, nos iremos melhorar juntos.",
    "⠀⠀⠀Enfim, é isso que eu tinha que falar, sei que não é muito, mas é de coração."];
let iScrollAt = 20;
let iTextPos = 0;
let sContents = '';
let iRow;
let iSpeed = 5;
let iIndex = 0;
let iArrLength = aText[0].length;

let tentativas = 0;
let musica = new Audio();

let inicial = document.getElementById('inicial');
let titulo = document.getElementById('titulo');
let principal = document.getElementById('principal')
let pergunta = document.getElementById('pergunta')
let botoes = document.getElementById('botoes');
let sim = document.getElementById('butaoS');
let nao = document.getElementById('butaoN');
let popup = document.getElementById('popup')
let popupTexto = document.getElementById('popupTexto')
let disseSim = document.getElementById('disseSim')
let disseNao = document.getElementById('disseNao')
let teAmo = document.getElementById('teAmo')
let ingles = document.getElementById('ingles')
let traducao = document.getElementById('traducao')

function iniciar() {
    musica.src = 'music/Music1.mp3';
    musica.volume = 0.2;
    musica.loop = true;
    musica.play();
    inicial.classList.toggle('ativado')
    titulo.classList.toggle('ativado')
    setTimeout(function (){
        titulo.classList.toggle('ativado')
        principal.classList.toggle('ativado')
        setTimeout(function (){typewriter()},2000);
    }, 2000)
}

function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    let destination = document.getElementById("paragrafo");

    while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
    if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != aText.length ) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        iSpeed = (Math.random() * Math.random() * 200) + (Math.random() * 50)
        setTimeout("typewriter()", iSpeed);
    }

    if (iIndex === 3) {
        pergunta.classList.toggle('ativado')
        setTimeout(function () {
            botoes.classList.toggle('ativado')
        }, 1000)
    }
}

function porCima()
{
    tentativas++;

    sim.style.top = nao.style.top;
    sim.style.left = nao.style.left;

    if (tentativas === 1 ) {
        sim.style.position = "absolute";
        nao.style.position = "absolute";
    }

    let posicaoX = (Math.random() * 100);
    let posicaoY = (Math.random() * 100);

    while (posicaoX > 90 || posicaoX < 2) {
        posicaoX = (Math.random() * 100);
    }
    while (posicaoY > 90 || posicaoY < 2) {
        posicaoY = (Math.random() * 100);
    }

    nao.style.top = posicaoY + "%";
    nao.style.left = posicaoX + "%";

    if (tentativas === 2) {
        musica.pause();
        musica.loop = true;
        musica.src = 'music/funny.mp3';
        musica.play();
    }

    if (tentativas === 20) {
        popup.classList.toggle('ativado')
        principal.classList.toggle('bluur')
        setTimeout(function (){
            popup.classList.toggle('ativado')
            principal.classList.toggle('bluur')
        }, 10000)
    }

    if (tentativas === 50) {
        popupTexto.innerHTML = "Caralho man, isso já é demais, pra que? <br> Foram 50 tentativas! 50! <br> Não acha isso demais não? <br> Agora vai ficar mais tempo de castigo."
        popup.classList.toggle('ativado')
        principal.classList.toggle('bluur')
        setTimeout(function (){
            popup.classList.toggle('ativado')
            principal.classList.toggle('bluur')
        }, 15000)
    }
}

function DisseSim() {

    musica.pause();
    musica.src = 'music/disseSim.mp3';
    musica.play();

    principal.classList.toggle('fechar')
    disseSim.classList.toggle('ativado')

    if (tentativas > 1) {
        aText = ["⠀⠀⠀Estou um pouco magoado, você tentou apertar o botão NÃO " + tentativas + " vezes, pensei que me amava.",
            "⠀⠀⠀Mas enfim, saiba que eu também quero, mesmo você duvide do meu amor por ti. É com você que quero me casar, é contigo que quero morar junto, ter uma família, viajar e ter tudo que a vida tem para oferecer. Quero estar contigo na alegria e na tristeza, na saúde e na doença.",
            "⠀⠀⠀Sei que sou cheio de defeitos, mas sempre tento melhorar por você. Eu não estaria hoje terminando a faculdade se não fosse por seu apoio, por acreditar em mim por tanto tempo. Eu ainda devolverei tudo que fez por mim."];

    } else {
        aText = ["⠀⠀⠀Então saiba que eu também quero, mesmo você duvide do meu amor por ti. É com você que quero me casar, é contigo que quero morar junto, ter uma família, viajar e ter tudo que a vida tem para oferecer. Quero estar contigo na alegria e na tristeza, na saúde e na doença.",
            "⠀⠀⠀Sei que sou cheio de defeitos, mas sempre tento melhorar por você. Eu não estaria hoje terminando a faculdade se não fosse por seu apoio, por acreditar em mim por tanto tempo. Eu ainda devolverei tudo que fez por mim."];
    }

    iIndex = 0;
    iArrLength = aText[0].length;
    iScrollAt = 20;
    iTextPos = 0;
    sContents = '';
    iRow;
    typewriter2()
}

function typewriter2()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    let destination = document.getElementById("textoSIM");

    while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
    if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != aText.length ) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter2()", 500);
        }
    } else {
        iSpeed = (Math.random() * Math.random() * 200) + (Math.random() * 50)

        setTimeout("typewriter2()", iSpeed);
    }


    if (iIndex === 2 && tentativas < 2) {
        console.log("chegou")
        teAmo.classList.toggle('ativado')
    } else if (iIndex === 3 && tentativas > 1){
        teAmo.classList.toggle('ativado')
    }
}

function DisseNao(){
    principal.classList.toggle('fechar')
    disseNao.classList.toggle('ativado')
    legendas()
    ingles.innerHTML = "Parabéns, você ficou perseguindo o botão NÃO que nem idiota: "
    traducao.innerHTML = tentativas + " vezes."
    musica.pause();
    musica.src = 'music/sadmusic.mp3';
    musica.play();
    BrunoMars();
}

function BrunoMars(){
    setTimeout("legendas()", 10000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Same bed, but it feels just a little bit bigger now"
        traducao.innerHTML = "A mesma cama, mas ela parece um pouco maior agora"
        setTimeout("legendas()", 6000)}, 13000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Our song on the radio, but it don't sound the same"
        traducao.innerHTML = "Nossa canção no rádio, mas ela não soa como antes"
        setTimeout("legendas()", 5000)}, 20000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "When our friends talk about you, all it does is just tear me down"
        traducao.innerHTML = "Quando nossos amigos falam sobre você, tudo isso só faz me deixar mal"
        setTimeout("legendas()", 6000)}, 26000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "'Cause my heart breaks a little when I hear your name"
        traducao.innerHTML = "Porque meu coração se parte um pouco quando ouço seu nome"
        setTimeout("legendas()", 4500)}, 33000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "It all just sounds like, ooh"
        traducao.innerHTML = "E tudo soa como, ooh"
        setTimeout("legendas()", 6000)}, 38000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Too young, too dumb to realize"
        traducao.innerHTML = "Jovem demais, tolo demais para perceber"
        setTimeout("legendas()", 4000)}, 46000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "That I should've bought you flowers and held your hand"
        traducao.innerHTML = "Que eu deveria ter lhe comprado flores e segurado sua mão"
        setTimeout("legendas()", 6000)}, 50500);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Should've gave you all my hours when I had the chance"
        traducao.innerHTML = "Deveria ter lhe dado todas as minhas horas quando eu tive a chance"
        setTimeout("legendas()", 6000)}, 57000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Take you to every party, 'cause all you wanted to do was dance"
        traducao.innerHTML = "Ter levado você a todas as festas, porque tudo o que você queria fazer era dançar"
        setTimeout("legendas()", 5500)}, (1000 * 60) + 4000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Now my baby is dancing, but she's dancing with another man"
        traducao.innerHTML = "Agora minha garota está dançando, mas está dançando com um outro homem"
        setTimeout("legendas()", 6500)}, (1000 * 60) + 10000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "My pride, my ego, my needs and my selfish ways"
        traducao.innerHTML = "Meu orgulho, meu ego, minhas necessidades e meu jeito egoísta"
        setTimeout("legendas()", 5000)}, (1000 * 60) + 22000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Caused a good strong woman like you to walk out my life"
        traducao.innerHTML = "Fizeram com que uma mulher boa e forte como você saísse da minha vida"
        setTimeout("legendas()", 5000)}, (1000 * 60) + 29000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Now I'll never, never get to clean up the mess I made, oh"
        traducao.innerHTML = "Agora eu nunca, nunca conseguirei limpar a confusão que eu fiz, oh"
        setTimeout("legendas()", 6000)}, (1000 * 60) + 35000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "And it haunts me every time I close my eyes"
        traducao.innerHTML = "E isso me assombra toda vez que fecho os meus olhos"
        setTimeout("legendas()", 4500)}, (1000 * 60) + 42000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "It all just sounds like, ooh"
        traducao.innerHTML = "Tudo isso soa como, ooh"
        setTimeout("legendas()", 6000)}, (1000 * 60) + 47000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Too young, too dumb to realize"
        traducao.innerHTML = "Jovem demais, tolo demais para perceber"
        setTimeout("legendas()", 4500)}, (1000 * 60) + 55000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "That I should've bought you flowers and held your hand"
        traducao.innerHTML = "Que eu deveria ter lhe comprado flores e segurado sua mão"
        setTimeout("legendas()", 5500)}, 1000 * 60 * 2);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Should've gave you all my hours when I had the chance"
        traducao.innerHTML = "Deveria ter lhe dado todas as minhas horas quando eu tive a chance"
        setTimeout("legendas()", 6000)}, (1000 * 60 * 2) + 6000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Take you to every party, 'cause all you wanted to do was dance"
        traducao.innerHTML = "Ter levado você a todas as festas, porque tudo o que você queria fazer era dançar"
        setTimeout("legendas()", 6000)}, (1000 * 60 * 2) + 13000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Now my baby is dancing, but she's dancing with another man"
        traducao.innerHTML = "Agora minha garota está dançando, mas está dançando com um outro homem"
        setTimeout("legendas()", 6000)}, (1000 * 60 * 2) + 20000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Although it hurts"
        traducao.innerHTML = "Embora isso doa"
        setTimeout("legendas()", 2500)}, (1000 * 60 * 2) + 27000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "I'll be the first to say that I was wrong"
        traducao.innerHTML = "Eu serei o primeiro a dizer que eu estava errado"
        setTimeout("legendas()", 9000)}, (1000 * 60 * 2) + 30000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Oh, I know I'm probably much too late"
        traducao.innerHTML = "Oh, eu sei que provavelmente estou muito atrasado"
        setTimeout("legendas()", 2500)}, (1000 * 60 * 2) + 40000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "To try and apologize for my mistakes"
        traducao.innerHTML = "Para tentar me desculpar pelos meus erros"
        setTimeout("legendas()", 3500)}, (1000 * 60 * 2) + 43000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "But I just want you to know"
        traducao.innerHTML = "Mas eu só quero que você saiba"
        setTimeout("legendas()", 5000)}, (1000 * 60 * 2) + 47000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "I hope he buys you flowers, I hope he holds your hand"
        traducao.innerHTML = "Espero que ele lhe compre flores, espero que ele segure sua mão"
        setTimeout("legendas()", 6000)}, (1000 * 60 * 2) + 52500);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Give you all his hours when he has the chance"
        traducao.innerHTML = "Que lhe dê todas as suas horas quando tiver a chance"
        setTimeout("legendas()", 7000)}, (1000 * 60 * 2) + 59000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Take you to every party"
        traducao.innerHTML = "Que leve você a todas as festas"
        setTimeout("legendas()", 2000)}, (1000 * 60 * 3) + 6500);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "'Cause I remember how much you loved to dance"
        traducao.innerHTML = "Porque eu me lembro do quanto você amava dançar"
        setTimeout("legendas()", 3000)}, (1000 * 60 * 3) + 9000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Do all the things I should've done"
        traducao.innerHTML = "Que faça todas as coisas que eu deveria ter feito"
        setTimeout("legendas()", 3500)}, (1000 * 60 * 3) + 13000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "When I was your man"
        traducao.innerHTML = "Quando era o seu homem"
        setTimeout("legendas()", 2000)}, (1000 * 60 * 3) + 17000);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "Do all the things I should've done"
        traducao.innerHTML = "Que faça todas as coisas que eu deveria ter feito"
        setTimeout("legendas()", 4000)}, (1000 * 60 * 3) + 19500);
    setTimeout(function (){
        legendas()
        ingles.innerHTML = "When I was your man"
        traducao.innerHTML = "Quando era o seu homem"
        setTimeout("legendas()", 4000)}, (1000 * 60 * 3) + 24500);
}

function legendas(){
    ingles.classList.toggle('ativado')
    traducao.classList.toggle('ativado')
}