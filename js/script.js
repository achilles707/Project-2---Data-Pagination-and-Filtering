/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {

   const itemsPerPage = 9;
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   const studentList =  document.getElementsByClassName('student-list')[0];
   studentList.innerHTML = "";
   
   //  creates the studentItem to be displayed
   for(let i=0; i < list.length; i++) {

      if (i >= startIndex && i < endIndex) {
         // build student element
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

         // adds each studentItem to the page 
         studentList.insertAdjacentHTML('beforeend', studentItem);
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   // vars for pagination
   const pages = list.length / 9;
   const linkList = document.querySelector('.link-list');   
   linkList.innerHTML = '';
   let active = '';

   // create button element
   for(let i=1; i<=pages; i++) {
      let buttonElement = `
         <li>
            <button type='button'>${i}</button>
         </li>
      `;
      
      // add buttons to the page
      linkList.insertAdjacentHTML('beforeend', buttonElement);
   }

   console.log(linkList);
   // set first button as active 
   active = document.querySelector('button');
   active.className = 'active';

   // adds the active class to the button that is clicked 
   //    and displays the correct page
   linkList.addEventListener('click', (event) => {
      // move active class to the correct button
      if(event.target.tagName == 'BUTTON') {
         let activeButton = document.querySelector('.active');
         activeButton.classList.remove('active');
         event.target.className = 'active';
         let page = event.target.textContent;

         // displays studentItems for each page
         showPage(list, page);
      }
   });

}

// Call functions
showPage(data, 1);
addPagination(data);
console.log(data);