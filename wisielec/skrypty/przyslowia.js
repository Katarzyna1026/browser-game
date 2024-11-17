var przyslowia = new Array(100);
przyslowia[0] = 'Bez pracy nie ma kołaczy'; 
przyslowia[1] = 'Darowanemu koniowi w zęby się nie zagląda'; 
przyslowia[2] = 'Fortuna kołem się toczy'; 
przyslowia[3] = 'Nie chwal dnia przed zachodem słońca'; 
przyslowia[4] = 'Lepszy wróbel w garści niż gołąb na dachu'; 
przyslowia[5] = 'Apetyt rośnie w miarę jedzenia'; 
przyslowia[6] = 'Co ma wisieć nie utonie'; 
przyslowia[7] = 'Dzieci i ryby głosu nie mają'; 
przyslowia[8] = 'Grosz do grosza, a będzie kokosza'; 
przyslowia[9] = 'Łaska pańska na pstrym koniu jeździ'; 
przyslowia[10] = 'Atak jest najlepszą obroną'; 
przyslowia[11] = 'Baba z wozu koniom lżej'; 
przyslowia[12] = 'Biednemu zawsze wiatr w oczy'; 
przyslowia[13] = 'Bogatemu to i byk się ocieli'; 
przyslowia[14] = 'Cel uświęca środki'; 
przyslowia[15] = 'Co cię nie zabije to cię wzmocni'; 
przyslowia[16] = 'Co dwie głowy to nie jedna'; 
przyslowia[17] = 'Co kraj to obyczaj co rodzina to zwyczaj'; 
przyslowia[18] = 'Co ma wisieć, nie utonie'; 
przyslowia[19] = 'Co z oczu, to z serca'; 
przyslowia[20] = 'A co po czyjej wielkości, jak nie ma w głowie mądrości'; 
przyslowia[21] = 'A kto z nami nie wypije, tego we dwa kije'; 
przyslowia[22] = 'Aby do wiosny'; 
przyslowia[23] = 'Albo rybki, albo akwarium'; 
przyslowia[24] = 'Ani Antoni na morzu wiatru nie dogoni'; 
przyslowia[25] = 'Bez matki nie ma chatki'; 
przyslowia[26] = 'Będą takie mrozy, że przymarznie cap do kozy'; 
przyslowia[27] = 'Bierz nogi za pas, póki jeszcze czas'; 
przyslowia[28] = 'Błędy lekarza przykrywa ziemia'; 
przyslowia[29] = 'Bujać to my, ale nie nas'; 
przyslowia[30] = 'Byłoby dłuższe lato, gdyby nie zima'; 
przyslowia[31] = 'Chcesz się dowiedzieć prawdy o sobie, pokłóć się z przyjacielem'; 
przyslowia[32] = 'Chłop robotny i baba pyskata zawojują pół świata'; 
przyslowia[33] = 'Choćbyś miał złota skrzynie, śmierci się nie wywiniesz.'; 

var numer =  Math.floor(Math.random()*33);

var haslo = przyslowia[numer];

haslo = haslo.toUpperCase();		//zapisywanie łańcucha liter wielkimi literami

var dlugosc = haslo.length;		//jak pobrać długość łańcucha
var ile_skuch = 0;

var haslo1 =  "";

for(i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else if(haslo.charAt(i)==",") haslo1 = haslo1 + ",";
	else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;		//uruchamianie funkcji przy załadowywaniu strony

var litery = new Array(35);

litery[0] = "A"; litery[1] = "Ą"; litery[2] = "B"; litery[3] = "C"; litery[4] = "Ć"; litery[5] = "D"; litery[6] = "E"; litery[7] = "Ę"; litery[8] = "F"; litery[9] = "G"; litery[10] = "H"; litery[11] = "I"; litery[12] = "J"; litery[13] = "K"; litery[14] = "L"; litery[15] = "Ł"; litery[16] = "M"; litery[17] = "N"; litery[18] = "Ń"; litery[19] = "O"; litery[20] = "Ó"; litery[21] = "P"; litery[22] = "Q"; litery[23] = "R"; litery[24] = "S"; litery[25] = "Ś"; litery[26] = "T"; litery[27] = "U"; litery[28] = "V"; litery[29] = "W"; litery[30] = "X"; litery[31] = "Y"; litery[32] = "Z"; litery[33] = "Ź"; litery[34] = "Ż";

function start()
{
	var tresc_diva = "";		//w tej zmiennej będzie wewnętrzny html div'a alfabet
	
	for(i=0; i<35; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';  	//KONKATENACJA - sklejanie łańcuchów
		if ( (i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	wypisz_haslo();		//wywoływanie funkcji
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
	
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if(haslo.charAt(i) == litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	
	if(trafiona == true)
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00c000";
		document.getElementById(element).style.border = "3px solid #00c000";
		document.getElementById(element).style.cursor = "default";
		
		wypisz_haslo();
	}
	else
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#c00000";
		document.getElementById(element).style.border = "3px solid #c00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
		
		//skucha
		ile_skuch++;
		var obraz = "../img/s"+ ile_skuch +".jpg";
		document.getElementById('szubienica').innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
//wygrana
	if(haslo == haslo1)
	{
		document.getElementById("alfabet").innerHTML = '<span class="reset">Koniec Gry</span><br>Tak jest! Zgadłeś hasło<br><br><span class="reset" onclick="location.reload()"> JESZCZE RAZ?</span>';
		document.getElementById("plansza").style.color = "green";
	}
	
	//przegrana
	if(ile_skuch>=11)
	{
	document.getElementById("alfabet").innerHTML = '<span id="end"> Game Over</span><br><br>Niestety nie udało się.<br><br><span class="end" onclick="location.reload()"> Chcesz spróbować ponownie?</span>';
	document.getElementById("plansza").style.color = "red";
	document.getElementById("plansza").innerHTML = haslo;
	}
}



