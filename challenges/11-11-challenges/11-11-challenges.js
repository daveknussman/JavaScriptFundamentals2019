/**
 * You have three challenges to solve below with Vanilla JavaScript.
 * You are allowed to make changes to the HTML and CSS.
 */

/**
 * Challenge 1: Show comments for the news story.
 *
 * When the user clicks on the "View Comments" button, the comment section should appear.
 * Right now, the comments are hidden because they have the class ".hidden".
 *
 * BONUS: Clicking on the button should toggle instead of just show the comments.
 * If the comments are open, change the button text from "View Comments" to "Hide Comments".
 */

/**
 * Challenge 2: Display the results of the world's most pointless search engine.
 *
 * When the user types in the textbox  and clicks
 * "Search", display the message "No results for ___ found" inside of this <p></p> below.
 * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
 * (Since there are no oceans near Albany, NY, the search engine should
 * display the "No results for ___ found" message every time.)
 *
 * The exercise must be completed with a form handler
 * and you must prevent the page from refreshing when the form is submitted.
 */

/**
 * Challenge 3: Adding pagination to the student table.
 *
 * First, when the page initially loads, only the first 10 students should be visible.
 * (That is, every student row that has data-group="1"). You can just use CSS / HTML to do this.
 *
 * Second, clicking on the pagination below should show and hide different students in the table:
 * - Clicking on the "«" and "1" buttons should show everything in data-group="1" and hide everything in data-group="2".
 * - Clicking on the "2" and "»" buttons should show everything in data-group="2" and hide everything in data-group="1".
 */

 // could have put ids on the button and comment div instead of using the class of the css
const buttonComments = document.querySelector(".btn-secondary");
buttonComments.addEventListener("click", () => {
    console.log('comment button');
    const comments = document.querySelector(".card");
    comments.classList.remove('hidden');
    // could use .add to put a new class in the classList 
});

const formSearch = document.querySelector(".form-group");
formSearch.addEventListener("submit", event => {
    event.preventDefault();
    document.querySelector("#searchResultParagraph").textContent ="No results for " + document.querySelector("#search").value + "found";
});

// added ids to all the paging buttons to identify them
const pageButtonPrevious = document.querySelector("#buttonPrevious");
const pageButtonNext = document.querySelector("#buttonNext");
const pageButton1 = document.querySelector("#button1");
const pageButton2 = document.querySelector("#button2");

// const buttonPaging = document.querySelectorAll(".page-link");
// buttonPaging.addEventListener("click", event => {
//     console.log('paging');
// });