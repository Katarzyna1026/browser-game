var cytaty = new Array(100);
cytaty[0] = '\"I\'m the king of the world!\"'; 
cytaty[1] = '\"Hasta la vista, baby\"'; 
cytaty[2] = '\"E.T. phone home\"'; 
cytaty[3] = '\"Kobieta mnie bije!\"'; 
cytaty[4] = '\"Dżizus... kurwa... ja pierdolę\"'; 
cytaty[5] = '\"Szczerze, moja droga, mam to gdzieś\"'; 
cytaty[6] = '\"Sąd sądem, ale sprawiedliwość musi być po naszej stronie\"'; 
cytaty[7] = '\"Ciemność, widzę ciemność, ciemność widzę\"'; 
cytaty[8] = '\"Sfiksowałyście, boście dawno chłopa nie miały!\"'; 
cytaty[9] = '\"Liga rządzi, Liga radzi, Liga nigdy was nie zdradzi\"'; 
cytaty[10] = '\"Parówkowym skrytożercom mówimy nie!\"'; 
cytaty[11] = '\"Ja jestem kobieta pracująca, żadnej pracy się nie boję\"'; 
cytaty[12] = '\"Sam jesteś popierdółka\"'; 
cytaty[13] = '\"Zrobię ci z dupy jesień średniowiecza!\"'; 
cytaty[14] = '\"Niech moc będzie z tobą\"'; 
cytaty[15] = '\"Jestem Bond. James Bond\"'; 
cytaty[16] = '\"Are you talking to me?\"'; 
cytaty[17] = '\"Here\'s Johnny\"'; 
cytaty[18] = '\"I see dead people\"'; 
cytaty[19] = '\"Moje życie seksualne jest żałosne. Ostatni raz byłem w kobiecie, zwiedzając Statuę Wolności\"'; 
cytaty[20] = '\"Achilles miał tylko piętę Achillesa. Ja mam całe ciało Achillesa\"'; 
cytaty[21] = '\"Dla ciebie jestem ateistą, dla Boga konstruktywną opozycją\"'; 
cytaty[22] = '\"Biseksualizm? Niewątpliwie podwaja twoje szanse na sobotnią randkę\"'; 
cytaty[23] = '\"Jedyne czego żałuję w życiu, to tego, że nie jestem kimś innym\"'; 
cytaty[24] = '\"Wyjątkowa z ciebie kanalia, Brunner\"'; 
cytaty[25] = '\"Nie ze mną te numery, Brunner\"'; 
cytaty[26] = '\"Oczko odpadło temu misiu\"'; 
cytaty[27] = '\"Co ty kurwa wiesz o zabijaniu\"'; 
cytaty[28] = '\"Bunkrów nie ma, ale też jest zajebiście...\"'; 
cytaty[29] = '\"Grzegorz Brzęczyszczykiewicz, Chrząszczyżewoszyce, powiat Łękołody\"'; 
cytaty[30] = '\"Wpuścić chamstwo na salony... \"'; 
cytaty[31] = '\"Jak kochać to księcia, jak kraść to miliony\"'; 
cytaty[32] = '\"Ja rozumiem, że wam jest zimno, ale jak jest zima, to musi być zimno!\"'; 
cytaty[33] = '\"To jest kura, panie Generale\"'; 
cytaty[34] = '\"To jest moja żona lafirynda, a to jest mój najlepszy przyjaciel\"'; 
cytaty[35] = '\"Będziesz jeździć, dupą po nieheblowanej desce! Ostatni raz za kierownik wsiadłeś, ostatni raz!\"'; 
cytaty[36] = '\"Wiktorio, nie kop pana, bo się spocisz\"'; 
cytaty[37] = '\"Żyrafy wchodzą do szafy. A pawiany wchodzą na ściany\"'; 
cytaty[38] = '\"A co mam powiedzieć Spiętemu? Żeby się rozpiął!\"'; 
cytaty[39] = '\"Dawno temu ja też zaufałem pewnej kobiecie, wtedy dałbym sobie za nią rękę uciąć. I wiesz, co... I bym teraz, kurwa, nie miał ręki\"'; 
cytaty[40] = '\"Nie chce mi się z Tobą gadać\"'; 
cytaty[41] = '\"A historii tego swetra i tak byś nie zrozumiał\"'; 
cytaty[42] = '\"Nie wiem, nie znam się, nie orientuję się, zarobiony jestem...\"'; 
cytaty[43] = '\"Jak mówię, to mówię, a jak mówię, to wiem\"'; 
cytaty[44] = '\"Wystarczy, że odpowiesz sobie na jedno zajebiście, ale to zajebiście ważne pytanie...\"'; 
cytaty[45] = '\"Moja jest tylko racja i to święta racja. Bo nawet jak jest twoja, to moja jest mojsza niż twojsza. Że właśnie moja racja jest racja najmojsza!\"'; 
cytaty[46] = '\"Klient w krawacie jest mniej awanturujący się\"'; 
cytaty[47] = '\"Marian, tu jest jakby luksusowo\"'; 
cytaty[48] = '\"Z twarzy podobny zupełnie do nikogo\"'; 
cytaty[49] = '\"Uwaga, grupa! Kierunek – wschód! Tam musi być jakaś cywilizacja\"'; 
cytaty[50] = '\"Objawy są jednoznaczne. Nie ma wątpliwości. Jest pan po prostu kompletnym kretynem\"'; 
cytaty[51] = '\",Melduję posłusznie, panie pułkowniku, ja tę wojnę zupełnie niechcący wywołałem\"'; 

var numer =  Math.floor(Math.random()*51);

var haslo = cytaty[numer];

haslo = haslo.toUpperCase();		//zapisywanie łańcucha liter wielkimi literami

var dlugosc = haslo.length;		//jak pobrać długość łańcucha
var ile_skuch = 0;

var haslo1 =  "";

for(i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else if(haslo.charAt(i)==",") haslo1 = haslo1 + ",";
	else if(haslo.charAt(i)==".") haslo1 = haslo1 + ".";
	else if(haslo.charAt(i)=="!") haslo1 = haslo1 + "!";
	else if(haslo.charAt(i)=="?") haslo1 = haslo1 + "?";
	else if(haslo.charAt(i)=="\'") haslo1 = haslo1 + "\'";
	else if(haslo.charAt(i)=="\"") haslo1 = haslo1 + "\"";
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