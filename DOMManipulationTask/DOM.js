"use strict";

//querySelector()
let firstDiv = document.querySelector('div');
firstDiv.style.color = 'red'; //the first <div> gets selected with the querySelector() method and its colour is changed to red

//querySelectorAll()
let paras = document.querySelectorAll('p');
for (let p of paras) {
    p.style.colour = 'blue'; //uses the same HTML as the previous one. However, in this example, all paragraphs are selected with querySelectorAll() and are all coloured blue
}

//addEventListener()
let btn = document.querySelector('button');
btn.onclick = foo;
//or
let btn = document.querySelector('button');
btn.addEventListener('click', foo); //Events refer to what happens to HTML elements (e.g. clicking, focusing, loading)
//There is another technique (which is HTML) on QA Community.

//CreateElement()
let pEle = document.createElement('p'); //we can create a new paragraph element

//appendChild()
let div = document.querySelector('div');
let strong = document.createElement('strong');
strong.textContent = "Hello friends";
div.appendChild(strong); //inserts a <strong> element as the child of a <div> element using appendChild() and createElement()

//removeChild()
div.removeChild(strong); //we can remove the <strong> element we added as a child to the <div> tag from the previous appendChild() method

//replaceChild()
let em = document.createElement('em');
let strong = document.querySelector('strong');
let div = document.querySelector('div');
em.textContent = "Replaced!";
div.replaceChild(em, strong); //the child element <strong> belonging to <div> is replaced with the newly created <em> tag.

//setAttribute()
let div = document.querySelector('div');
div.setAttribute('contenteditable', ''); //we add the contenteditable' attribute to a <div> by making use of the setAttribute() method, which will turn its content editable

//getAttribute()
let div = document.querySelector('div');
alert(div.getAttribute('contenteditable')); //we alert the value of the contenteditable attribute belonging to the <div> element with the help of the getAttribute() method

//removeAttribute()
let div = document.querySelector('div');
div.removeAttribute('contenteditable'); //we remove the contenteditable attribute belonging to the <div> element. As a result, the <div> becomes uneditable