var list = document.getElementById('list');
	add = document.getElementById('addElem');

add.addEventListener('click', function() {
	list.innerHTML += '<li>item ' + document.getElementsByTagName('li').length + '</li>';
});

var list = document.getElementById('Lista');
var przycisk = document.getElementById('addElem');

przycisk.addEventListener('click', function(e) {
	var liczba = document.getElementsByTagName('li');
	list.innerHTML += '<li>item ' + liczba.length +'</li>';

});