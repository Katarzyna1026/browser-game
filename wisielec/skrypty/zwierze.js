var zwierze = new Array(100);
zwierze[0] = 'Panda ruda'; 
zwierze[1] = 'Lew zachodnioafrykański'; 
zwierze[2] = 'Jaguar'; 
zwierze[3] = 'gepadr'; 
zwierze[4] = 'słoń afrykański'; 
zwierze[5] = 'słoń indyjski'; 
zwierze[6] = 'duziec'; 
zwierze[7] = 'paw indyjski'; 
zwierze[8] = 'waran z komodo'; 
zwierze[9] = 'waran nilowy'; 
zwierze[10] = 'żmija sykliwa'; 
zwierze[11] = 'panda wielka'; 
zwierze[12] = 'bawół afrykański'; 
zwierze[13] = 'płetfal błękitny'; 
zwierze[14] = 'szympans karłowaty'; 
zwierze[15] = 'żół zielony'; 
zwierze[16] = 'żółw olbrzymi '; 
zwierze[17] = 'żółt słoniowy'; 
zwierze[18] = 'niala grzywiasta'; 
zwierze[19] = 'likaon pstry'; 
zwierze[20] = 'Ślimak ninja'; 
zwierze[21] = 'Niebieski smok'; 
zwierze[22] = 'Sfinks cat'; 
zwierze[23] = 'Nietoperz owocowy z nosem wieprzowym'; 
zwierze[24] = 'Galaretowata ryba'; 
zwierze[25] = 'Kot'; 
zwierze[26] = 'Gigantyczna ryba księżycowa'; 
zwierze[27] = 'Różowa ryba z rękami'; 
zwierze[28] = 'Fioletowa ośmiornica'; 
zwierze[29] = 'Pająk pawi'; 
zwierze[30] = 'Tchórz czarnołapy'; 
zwierze[31] = 'Nosorożec sumatrzański'; 
zwierze[32] = 'Tygrys sumatrzański'; 
zwierze[33] = 'Nosorożec czarny'; 
zwierze[34] = 'Morświn kalifornijski'; 
zwierze[35] = 'Orangutan sumatrzański'; 
zwierze[36] = 'Wschodni goryl nizinny'; 
zwierze[37] = 'Orangutan borneański'; 
zwierze[38] = 'Goryl nizinny'; 
zwierze[39] = 'Żółw szylkretowy'; 
zwierze[40] = 'Saola wietnamska'; 
zwierze[41] = 'Morświnek chiński'; 
zwierze[42] = 'Tygrys chiński'; 
zwierze[43] = 'Nosorożec jawajski'; 
zwierze[44] = 'Małpiatka lori'; 
zwierze[45] = 'Wiskacza'; 
zwierze[46] = 'Aksolotl'; 
zwierze[47] = 'Kot arabski'; 
zwierze[48] = 'Fenek'; 
zwierze[49] = 'Mysikrólik'; 
zwierze[50] = 'Pika'; 
zwierze[51] = 'Maskonur'; 
zwierze[52] = 'Kuoka'; 
zwierze[53] = 'Polatucha'; 

var numer =  Math.floor(Math.random()*53);

var haslo = zwierze[numer];

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