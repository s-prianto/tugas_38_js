function jalankan(){
	var a = document.getElementsByTagName('input')[0];
	a.attributes.removeNamedItem('value');
	//
	var b = document.getElementsByTagName('i')[0];
	var b1 = document.createAttribute('class');
	b1.value = 'contohcss';
	b.attributes.setNamedItem(b1);
	console.log(b);
	//
	var c = document.getElementsByTagName('button')[0];
	var c1 = c.attributes[0].value;
	document.getElementById('p-contoh').innerHTML=c1;
}
