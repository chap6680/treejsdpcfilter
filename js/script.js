// LEFT OFF - 
let getAllStudents = document.getElementsByClassName("student-item");
const getAllStudentsNum = getAllStudents.length;
let getPaginationNum = Math.ceil(getAllStudentsNum / 10);

/* console.log("total:");
console.log(getAllStudents.length);
 */

/*this is the main function - 
- hides all students
- then displays the 10 selected   */
/* buttonElement.addEventListener('click', function (event) {
	alert('Element clicked through function!');
});
 */
function updateStudent10(getBlock, currentList) {
	let currentListNum = currentList.length;
	getPaginationNum = Math.ceil(currentListNum / 10);
	/* console.log('firspag');
	console.log(currentList / 10); */

	//Hide all students
	/* 	[].forEach.call(document.querySelectorAll('.student-item'), function (el) {
			el.style.display = 'none';
		}); */
	console.log('current list:');
	console.log(currentList);
	[].forEach.call(getAllStudents, function (el) {
		el.style.display = 'none';
	});

	//display the 10 - 
	for (let i = getBlock - 10; i <= Math.min(getBlock - 1, currentListNum - 1); i++) {

		//document.getElementsByClassName('student-item')[i].style.display = 'block';
		currentList[i].style.display = 'block';
	};

	//pagination buttons
	//clear all 
	[].forEach.call(document.querySelectorAll('.pagination li a'), function (el) {
		el.style.display = 'inline';
		el.className = '';
	});

	/* this gets the block of 10 that was just clicked and then formats that with className of active
	 */
	let getPaginationNav = ((getBlock / 10));

	paginationFormat(getPaginationNav, getPaginationNum);
	//document.querySelectorAll(".pagination li a")[getPaginationNav].className = 'active'
};


function paginationFormat(currentPagination, totalPagination) {
/* 	console.log('pag');
	console.log(currentPagination);
	console.log(totalPagination);
 */
	let createPaginationString = '';
	document.getElementsByClassName('pagination')[0].innerHTML = createPaginationString;

	createPaginationString = '<ul>';

	for (let i = 1; i <= totalPagination; i++) {
		createPaginationString = createPaginationString + '<li>';
		if (i === currentPagination) {
			createPaginationString += '<a class="active" value=1 href="#">'
		} else {
			createPaginationString += '<a class="" href="#" value=' + i + '>'
		};
		createPaginationString += i + '</a></li>'
	};

	createPaginationString += ' </ul> </div>';

	if (totalPagination === 0) { 
		createPaginationString = "No Results Found";
	}

	document.getElementsByClassName('pagination')[0].innerHTML = createPaginationString;

	let tempP = document.querySelectorAll('.pagination ul li');
	
	for (let q = 0; q < tempP.length; q++) {
		tempP[q].addEventListener('click', cluelesseventlistener, false);
	};
}

/* function createPagination() OLD WORKING { */

// end of pagination buttons

let createSearchString = '<input type="text" id="studentSearch" name="studentSearch" placeholder="Search for students..."> <button onclick="studentSearchII(10)">Search</button> <button onclick="clearstudentSearchII()">Clear</button>'
document.getElementsByClassName('student-search')[0].innerHTML = createSearchString;



updateStudent10(30, getAllStudents);


function cluelesseventlistener(evt) {
	let tempR = evt.target.innerText * 10;
	getstudentSearch = document.getElementById("studentSearch").value;
	if ((getstudentSearch == '' || getstudentSearch === undefined || getstudentSearch == null || getstudentSearch.length <= 0)) {
		currentList = document.getElementsByClassName("student-item");
		updateStudent10(tempR, currentList);
	} else { 
		console.log('IXXXMMMMMM HERE');
		studentSearchII(tempR);
	};
	/* 	alert(evt.target.innerText);
	 
	console.log('innertext');
	console.log(tempR);*/
};



/* tempP.addEventListener('click', e => {
	if (e.target === link) {
		showPage(i, studentList);
		document.querySelectorAll('.pagination a').forEach(element => element.classList.remove('active'));
		e.target.classList.add('active');
	}
}); */

/* playground to get email addresses 
let getStudentEMailArray = [];
let getstudentSearch = document.getElementById("studentSearch").value;
console.log(getstudentSearch);
let getStudentDetails = document.querySelectorAll('.student-details h3');
console.log(getStudentDetails);
[].forEach.call(document.querySelectorAll('.student-item h3'), function (el) {
	getStudentEMailArray.push (el.firstChild.data);	
});
console.log(getStudentEMailArray);
*/

function clearstudentSearchII() {
	document.getElementById("studentSearch").value = "";
	updateStudent10(10, getAllStudents);
};

function studentSearchII(blockNum) {
	// get the input name to search 
	let getstudentSearch = document.getElementById("studentSearch").value;
	let getstudentFilteredList = [];
	console.log('inputblank');
	console.log(getstudentSearch);
	if ((getstudentSearch == '' || getstudentSearch === undefined || getstudentSearch == null || getstudentSearch.length <= 0)) {
		console.log('im in');
		return updateStudent10(10, getAllStudents);
	};

	/*loop through each queryselector and see if the string exists in either the name or email.*/
	[].forEach.call(document.querySelectorAll('.student-item'), function (el) {
		let tempName = el.querySelector('.student-details h3').innerHTML;
		let tempEmail = el.querySelector('.student-details .email').innerHTML;
		if (tempName.includes(getstudentSearch) || tempEmail.includes(getstudentSearch)) {
			console.log('loopfilter:');
			console.log(el);
			getstudentFilteredList.push(el);
			/* 			el.style.display = 'block';
			 */
		} else {

			/* 			el.style.display = 'none';
			 */
		}
	});
/* 	if (getstudentFilteredList.length == 0) {
		console.log('filter');
		console.log(getstudentFilteredList);
	}

 */
	console.log('filtered list:');
	console.log(blockNum);
	updateStudent10(blockNum, getstudentFilteredList);
	
};

let tempX = (document.querySelectorAll('.student-item'));
console.log(tempX);
let tempXX = tempX[1].querySelector('.student-details .email').innerHTML;
console.log(tempXX);


console.log(getAllStudents[0]);


/*
	/* let getPaginationNavALL = document.querySelectorAll(".pagination .li a");	

	let currentSet10 = Math.trunc(getAllStudentsNum / getBlock);
	console.log(getPaginationNav);
 */

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
/*
[].forEach.call(document.querySelectorAll('.student-item'), function (el) {
	el.style.display = 'none';

});
document.getElementsByClassName('student-item')[0].style.display = 'block';

*/

/* function createPagination() OLD WORKING { 
	let createPaginationString = '<ul>';
	for (let i = 1; i <= getPaginationNum; i++) {  
		createPaginationString = createPaginationString + '<li>';
		if (i === 1) {
			createPaginationString += '<a class="active" value=1 href="#" onClick="updateStudent10('+10*i+')">'
		} else {
createPaginationString += '<a class="" href="#" id="updateStudent'+10*i+'" value='+i+'>'			
		};
		createPaginationString += i + '</a></li>'
	};	
createPaginationString += ' </ul> </div>';

document.getElementsByClassName('pagination')[0].innerHTML = createPaginationString;

// end of pagination buttons
*/