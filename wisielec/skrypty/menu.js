var kategoria = new Array(8);

kategoria[0] = '<a href="podstrony/przyslowia.html" class="link">Przesłowia</a>';
kategoria[1] = '<a href="podstrony/miasta.html" class="link">Miasto</a>';
kategoria[2] = '<a href="podstrony/zwierze.html" class="link">Zwierzę</a>';
kategoria[3] = '<a href="podstrony/roslina.html" class="link">Roślina</a>';
kategoria[4] = '<a href="podstrony/panstwo.html" class="link">Państwo</a>';
kategoria[5] = '<a href="podstrony/film.html" class="link">Tytuły filmów</a>';
kategoria[6] = '<a href="podstrony/ksiazka.html" class="link">Lektury szkolne</a>';
kategoria[7] = '<a href="podstrony/cytaty.html" class="link">Cytaty z filmów</a>';

var numer =  Math.floor(Math.random()*7);

var haslo = kategoria[numer];

function losuj()
{
document.getElementById("kat").innerHTML = haslo;
document.getElementById("kat").style.background = "#00183D";
}