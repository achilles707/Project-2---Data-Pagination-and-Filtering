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
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src=${data[i].picture.large} alt="profile picture"></img>
                  <h3>${data[i].name.first + " " + data[i].name.last}</h3>
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
   const pages = Math.ceil(list.length / 9);
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
      
      // add button to the page
      linkList.insertAdjacentHTML('beforeend', buttonElement);
   }

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

/*
Create search bar and filtering
*/
function addSearchBar() {
   
   let searchBar = `
      <label for="search" class="student-search">
         <input id="search" onkeyup="searchAndFilter(data)" type="text" placeholder="Search by name...">
         <button type="button" id ="search-button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>
   `;
   
   let header = document.querySelector('.header');
   header.insertAdjacentHTML('beforeEnd', searchBar);

}

function searchAndFilter(list) {
   let newData = [];

   // 1. Get input from user search:
   const searchText = document.getElementById('search').value.toLowerCase();
   // 2. Loop through data:
   for(let i=0; i<list.length; i++) {
      // 2a. check if studentItems contain the search text:
      let name = list[i].name.first.toLowerCase() + ' ' + list[i].name.last.toLowerCase();
      if(name.includes(searchText)) {
         // 2aa. if so, add to the new data set:
         newData.push(i);
      }
   }

   // update the page content to only display new list:
   showPage(newData, 1);
   addPagination(newData);

   console.log(newData);
}

// add elements and add pages
showPage(data, 1);
addPagination(data);

// add search bar
//addSearchBar();