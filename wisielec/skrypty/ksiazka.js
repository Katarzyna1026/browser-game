var ksiazka = new Array(100);
ksiazka[0] = 'Biblia'; 
ksiazka[1] = 'Iliada'; 
ksiazka[2] = 'Odyseja'; 
ksiazka[3] = 'Antygona'; 
ksiazka[4] = 'Lament świętokrzyski'; 
ksiazka[5] = 'Legenda o św. Aleksym'; 
ksiazka[6] = 'Rozmowa Mistrza Polikarpa ze Śmiercią'; 
ksiazka[7] = 'Kwiatki świętego Franciszka z Asyżu'; 
ksiazka[8] = 'Pieśń o Rolandzie'; 
ksiazka[9] = 'Kronika polska'; 
ksiazka[10] = 'Boska komedia'; 
ksiazka[11] = 'Makbet'; 
ksiazka[12] = 'Romeo i Julia'; 
ksiazka[13] = 'Skąpiec'; 
ksiazka[14] = 'Hymn do miłości ojczyzny'; 
ksiazka[15] = 'Oda do młodości'; 
ksiazka[16] = 'Dziady '; 
ksiazka[17] = 'Grób Agamemnona'; 
ksiazka[18] = 'Król Edyp'; 
ksiazka[19] = 'Dzieje Tristana i Izoldy'; 
ksiazka[20] = 'Żywot człowieka poczciwego'; 
ksiazka[21] = 'O poprawie Rzeczypospolitej'; 
ksiazka[22] = 'Przemyślny szlachcic Don Kichote z Manczy'; 
ksiazka[23] = 'Transakcja wojny chocimskiej '; 
ksiazka[24] = 'Monachomachia'; 
ksiazka[25] = 'Opis obyczajów za czasów panowania Augusta III'; 
ksiazka[26] = 'Cierpienia młodego Wertera'; 
ksiazka[27] = 'Nad Niemnem'; 
ksiazka[28] = 'Echa leśne'; 
ksiazka[29] = 'Rozmowy z katem'; 
ksiazka[30] = 'Przy torze kolejowym'; 
ksiazka[31] = 'Na nieludzkiej ziemi'; 
ksiazka[32] = 'Czekając na Godota'; 
ksiazka[33] = 'Wizyta starszej pani'; 
ksiazka[34] = 'Summa teologiczna'; 
ksiazka[35] = 'Gargantua i Pantagruel '; 
ksiazka[36] = 'Fortepian Szopena'; 
ksiazka[37] = 'Czarne kwiaty'; 
ksiazka[38] = 'Noc listopadowa'; 
ksiazka[39] = 'Mistrz i Małgorzata'; 
ksiazka[40] = 'Mała apokalipsa'; 
ksiazka[41] = 'Antygona w Nowym Jorku'; 

var numer =  Math.floor(Math.random()*41);

var haslo = ksiazka[numer];

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