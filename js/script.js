// LEFT OFF - 
let getAllStudents = document.getElementsByClassName("student-item");
const getAllStudentsNum = getAllStudents.length;
let getPaginationNum = Math.ceil(getAllStudentsNum / 10);

/*this is the main function - 
- hides all students
- then displays the 10 selected   */

function updateStudent10(getBlock, currentList) {
	let currentListNum = currentList.length;
	getPaginationNum = Math.ceil(currentListNum / 10);
	
	//clear all students
	[].forEach.call(getAllStudents, function (el) {
		el.style.display = 'none';
	});

	//display the 10 - 
	for (let i = getBlock - 10; i <= Math.min(getBlock - 1, currentListNum - 1); i++) {
		currentList[i].style.display = 'block';
	};

	//get current block of 10 and send request to paginationFormatting
	let getPaginationNav = ((getBlock / 10));
	paginationFormat(getPaginationNav, getPaginationNum);

};


function paginationFormat(currentPagination, totalPagination) {
	//clear current pagination
	let createPaginationString = '';
	document.getElementsByClassName('pagination')[0].innerHTML = createPaginationString;

	createPaginationString = '<ul>';

	//create string indicating which one is active	
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
// end of pagination foramt - buttons


//event listener for pagination buttons
function cluelesseventlistener(evt) {
	let tempR = evt.target.innerText * 10;
	getstudentSearch = document.getElementById("studentSearch").value;
	if ((getstudentSearch == '' || getstudentSearch === undefined || getstudentSearch == null || getstudentSearch.length <= 0)) {
		currentList = document.getElementsByClassName("student-item");
		updateStudent10(tempR, currentList);
	} else { 
		studentSearchII(tempR);
	};
};

//added clear search button - this wipes clean
function clearstudentSearchII() {
	document.getElementById("studentSearch").value = "";
	updateStudent10(10, getAllStudents);
};


function studentSearchII(blockNum) {
	// get the input name to search 
	let getstudentSearch = document.getElementById("studentSearch").value;
	let getstudentFilteredList = [];
	if ((getstudentSearch == '' || getstudentSearch === undefined || getstudentSearch == null || getstudentSearch.length <= 0)) {
		return updateStudent10(10, getAllStudents);
	};

	/*loop through each queryselector and see if the string exists in either the name or email.
	If found - creates a new list
	*/
	[].forEach.call(document.querySelectorAll('.student-item'), function (el) {
		let tempName = el.querySelector('.student-details h3').innerHTML;
		let tempEmail = el.querySelector('.student-details .email').innerHTML;
		if (tempName.includes(getstudentSearch) || tempEmail.includes(getstudentSearch)) {
			getstudentFilteredList.push(el);
		}
	});

	updateStudent10(blockNum, getstudentFilteredList);	
};

//create search string and insert into DOM
let createSearchString = '<input type="text" id="studentSearch" name="studentSearch" placeholder="Search for students..."> <button onclick="studentSearchII(10)">Search</button> <button onclick="clearstudentSearchII()">Clear</button>'
document.getElementsByClassName('student-search')[0].innerHTML = createSearchString;


// run first query
updateStudent10(10, getAllStudents);
