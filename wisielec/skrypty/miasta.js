var miasta = new Array(100);
miasta[0] = 'Kraków';
miasta[1] = 'Warszawa';
miasta[2] = 'Łódź';
miasta[3] = 'Toruń';
miasta[4] = 'Zakopane';
miasta[5] = 'Żywiec';
miasta[6] = 'Gdańsk';
miasta[7] = 'Mikołajki';
miasta[8] = 'Ryn';
miasta[9] = 'Wrocław';
miasta[10] = 'Opole';
miasta[11] = 'Katowice';
miasta[12] = 'Szczecin';
miasta[13] = 'Łomrza';
miasta[14] = 'Środa Wielkopolska';
miasta[15] = 'PEwel wielka';
miasta[16] = 'Rzeszów';
miasta[17] = 'Katowice';
miasta[18] = 'Gdynia';
miasta[19] = 'Tokio';
miasta[20] = 'Nowy Jork';
miasta[21] = 'Miasto Meksyk';
miasta[22] = 'Sao Paolo';
miasta[23] = 'Los Angeles';
miasta[24] = 'Szanghaj';
miasta[25] = 'Mumbai';
miasta[26] = 'Seul';
miasta[27] = 'Osaka';
miasta[28] = 'Londyn';
miasta[29] = 'Lagos';
miasta[30] = 'Kalkuta';
miasta[31] = 'Buenos Aire';
miasta[32] = 'Paryż';
miasta[33] = 'Rio de Janeiro ';
miasta[34] = 'Karaczi';
miasta[35] = 'Delhi';
miasta[36] = 'Manila';
miasta[37] = 'Stambuł';
miasta[38] = 'Pekin';

 

var numer =  Math.floor(Math.random()*38);

var haslo = miasta[numer];

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


