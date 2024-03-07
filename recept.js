function hozzavalok(){
	let fo = document.getElementById('fo').value;
	
	let csulok, olaj, sor;
		csulok = fo*20;
		olaj = fo*1;
		sor = fo*0.5;
	
	document.getElementById('csulok').innerHTML = csulok;
	document.getElementById('olaj').innerHTML = olaj;
	document.getElementById('sor').innerHTML = sor;
}