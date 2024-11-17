var film = new Array(100);
film[0] = 'Skazani na Shawshank'; 
film[1] = 'Nietykalni'; 
film[2] = 'Zielona mila'; 
film[3] = 'Ojciec chrzestny'; 
film[4] = 'Dwunastu gniewnych ludzi'; 
film[5] = 'Forrest Gump'; 
film[6] = 'Lot nad kukułczym gniazdem'; 
film[7] = 'Lista Schindlera'; 
film[8] = 'Władca Pierścieni: Powrót króla'; 
film[9] = 'Joker'; 
film[10] = 'Życie jest piękne'; 
film[11] = 'Siedem'; 
film[12] = 'Podziemny krąg'; 
film[13] = 'Chłopcy z ferajny'; 
film[14] = 'Pianista'; 
film[15] = 'Król Lew'; 
film[16] = 'Człowiek z blizną'; 
film[17] = 'Gran Torino'; 
film[18] = 'Wyspa tajemnic'; 
film[19] = 'Więzień nienawiści'; 
film[20] = 'Leon zawodowiec'; 
film[21] = 'Coco'; 
film[22] = 'Gladiator'; 
film[23] = 'Chłopiec w pasiastej piżamie'; 
film[24] = 'Szeregowiec Ryan'; 
film[25] = 'Przełęcz ocalonych'; 
film[26] = 'Buntownik z wyboru'; 
film[27] = 'Avengers: Wojna bez granic'; 
film[28] = 'W pogoni za szczęściem'; 
film[29] = 'Amadeusz'; 
film[30] = 'Mroczny Rycerz'; 
film[31] = 'Władca Pierścieni: Drużyna Pierścienia'; 
film[32] = 'Infiltracja'; 
film[33] = 'Bogowie'; 
film[34] = 'Bękarty wojny'; 
film[35] = 'Spirited Away: W krainie Bogów'; 
film[36] = 'Mój przyjaciel Hachiko'; 
film[37] = 'Przekręt'; 
film[38] = 'Monty Python i Święty Graal'; 
film[39] = 'Adwokat diabła'; 
film[40] = 'Wściekłe psy'; 
film[41] = 'Zwierzogród'; 
film[42] = 'Spider-Man Uniwersum'; 
film[43] = 'Złap mnie, jeśli potrafisz'; 
film[44] = 'Jak wytresować smoka'; 
film[45] = 'Siedmiu samurajów'; 
film[46] = 'Ruchomy zamek Hauru'; 
film[47] = 'Księżniczka Mononoke'; 
film[48] = 'Taksówkarz'; 
film[49] = 'Jak rozpętałem drugą wojnę światową'; 
film[50] = 'Chłopaki nie płaczą'; 

var numer =  Math.floor(Math.random()*50);

var haslo = film[numer];

haslo = haslo.toUpperCase();		//zapisywanie łańcucha liter wielkimi literami

var dlugosc = haslo.length;		//jak pobrać długość łańcucha
var ile_skuch = 0;

var haslo1 =  "";

for(i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else if(haslo.charAt(i)==",") haslo1 = haslo1 + ",";
	else if(haslo.charAt(i)==":") haslo1 = haslo1 + ":";
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