/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
//console.log(data);


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {

   // displays 9 students per page
   let itemsPerPage = 9;

   // create two variables which will represent the index for the first and last student on the page
   let startIndex = (page * itemsPerPage) - itemsPerPage;  // items per page doesn't exist yet
   let endIndex = page * itemsPerPage;
  // select the element with a class of `student-list` and assign it to a variable
   let studentList =  document.getElementsByClassName('student-list');
  // set the innerHTML property of the variable you just created to an empty string
   studentList.innerHTML = "";
  // loop over the length of the `list` parameter
   for(let i=0; i < list.length; i++) {
      // inside the loop create a conditional to display the proper students
      if (i >= startIndex && i < endIndex) {
      // inside the conditional:
         // create the elements needed to display the student information
         let studentItem = `
            <li class="student cf">
               <div class="student-details">
                  <img class="avatar" src=${data[i].picture.large} alt="profile picture"></img>
                  <h3>${data[i].name.first + " " + data[i].name.last}</h3>S
                  <span class="email">${data[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${data[i].registered.date}</span>
               </div>
            </li>
         `;   
         console.log(studentItem); 
      
      }
   }
   console.log(studentList);
   studentList.insertAdjacentHTML(beforeend, studentItem);
}
// test call
console.log(showPage(data, 1));

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions