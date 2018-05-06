// LEFT OFF - 
let getAllStudents = document.getElementsByClassName("student-item");
console.log("total:");
console.log(getAllStudents.length);
const getAllStudentsNum = getAllStudents.length;
const getPaginationNum = Math.floor(getAllStudentsNum/10)+1;


[].forEach.call(document.querySelectorAll('.student-item'), function (el) {
	el.style.display = 'none';
});
  
document.getElementsByClassName('student-item')[0].style.display = 'block';

function updateStudent10(getBlock) {
	[].forEach.call(document.querySelectorAll('.student-item'), function (el) {
		el.style.display = 'none';
	});
	for (let i = getBlock-10; i <= Math.min(getBlock -1,getAllStudentsNum-1); i++) {
		/* console.log(i); */
		document.getElementsByClassName('student-item')[i].style.display = 'block';
	};
	let getPaginationNav = ((getBlock/10) - 1);
	let currentSet10 = Math.trunc(getAllStudentsNum / getBlock);
	let getPaginationNavALL = document.querySelectorAll(".pagination .li a");
	
	console.log(getPaginationNav);
	[].forEach.call(document.querySelectorAll('.pagination li a'), function (el) {
		el.className = '';
	});
/* 	document.querySelectorAll(".pagination li a")[(getBlock/10)-1].className = 'active'
 */	document.querySelectorAll(".pagination li a")[getPaginationNav].className = 'active'

};	

/*	[].forEach.call(document.querySelectorAll('.pagination li'), function (el) {
		el.className = '';
	});
	 	for (let j = 1; j <= getPaginationNum; j++) { 
		if (j === currentSet10) {
			getPaginationNav.className = "active";
		}
		else { 
			getPaginationNav.className = "";
		}
		getPaginationNav = document.querySelector(".pagination li").nextSibling.firstChild;

	} */ 



/* function createPagination() { */
let createPaginationString = '<ul>';
	for (let i = 1; i <= getPaginationNum; i++) {  
		createPaginationString = createPaginationString + '<li>';
		if (i === 1) {
			createPaginationString += '<a class="active" href="#" onClick="updateStudent10('+10*i+')">'
		} else {
			createPaginationString += '<a class="" href="#" onClick="updateStudent10('+10*i+')">'
		};
		createPaginationString += i + '</a></li>'
	};	
/* createPaginationString += '<li><a href="#" onClick="updateStudent10(30)">X</a></li>'; */
createPaginationString += ' </ul> </div>';

document.getElementsByClassName('pagination')[0].innerHTML = createPaginationString;

// end of pagination buttons

/* let y = document.getElementsByClassName(".pagination");
console.log(y);
let yy = y.firstChild;
console.log(yy); */
/* 
let x = document.querySelector(".pagination li").firstChild;
x.className = "";
console.log('x');
console.log(x);
x = document.querySelector(".pagination li").nextSibling.firstChild;
console.log('nextsib');
console.log(x);
x.className = "active";

 */
updateStudent10(30);
