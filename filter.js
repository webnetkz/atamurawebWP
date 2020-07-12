let b = document.getElementById('search-filter-results-9197');

b.setAttribute('style', 'display: flex; flex-direction: row;flex-wrap: wrap;');

b.removeChild(b.firstChild);
b.removeChild(b.firstChild);
b.removeChild(b.firstChild);
b.removeChild(b.firstChild);

b.removeChild(b.lastChild);
b.removeChild(b.lastChild);
b.removeChild(b.lastChild);
b.removeChild(b.lastChild);
b.removeChild(b.lastChild);



let cc = document.querySelectorAll('div h2');
let ccx = document.querySelectorAll('div h2 a');



for(let i = 0; i < cc.length; i++) {
	if(window.innerWidth < 1000) {
   		cc[i].parentNode.setAttribute('style', 'width: 48%; padding: 10px;');
	} else {
		cc[i].parentNode.setAttribute('style', 'width: 19.5%; padding: 10px;');
	}

	cc[i].style.minHeight = '4em';	
	cc[i].parentNode.setAttribute('onclick', 'location.href = "'+ccx[i].href+'"');
	cc[i].parentNode.children[2].style.display = 'none';
	cc[i].parentNode.children[1].style.display = 'none';

}

document.getElementById('search-filter-form-8896').style.marginRight = '10px';
document.getElementById('search-filter-form-9081').style.marginLeft = '-5px';
document.getElementById('search-filter-form-9084').style.marginRight = '10px';
document.getElementById('search-filter-form-9195').style.marginRight = '10px';