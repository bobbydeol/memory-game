/*1/. create a variable that holds a button like with li
2/. when create list element, put the button next to the right of the list element
3/. name the button delete
4/. delete item
5/. event ->delete parent 

*/
//creates variable that refers to the enter button. 
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//create a list
 var list = document.getElementsByTagName("LI");

//This gives you the length of what is in the input box
function inputLength() {
	return input.value.length;
}

//creates a function that appends data to an <li> and then appends that
//li to a <ul>
function createListElement() {
	//create a variable li that holds tag li
	var li = document.createElement("li");
	//append child puts that tag as the child of the parent e.g. body.appendchild(h1) h1 is 
	li.appendChild(document.createTextNode(input.value));
	//

	ul.appendChild(li);

	var btn = document.createElement("BUTTON");
	var t = document.createTextNode("DELETE");
	btn.className = 'kill';
	btn.appendChild(t);
	li.appendChild(btn);


	input.value = "";
	
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
//gives the ability to create an event after enter is pressed
//the function is passed the event which is enter
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


//create an array to hold all LIs
var ul = document.querySelector("ul")
ul.addEventListener('click', function(e){
if(e.target.tagName === 'LI') {e.target.classList.toggle('done')}
})




 var rem = document.getElementsByClassName('kill')
    
 for (var i = 0; i < rem.length; i++) {
    rem[i].addEventListener('click',function (f) {      
       f.currentTarget.parentNode.remove();
    } , false);
 }




