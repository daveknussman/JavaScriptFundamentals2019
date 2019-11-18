/**
 * As a engineer, I would like to have my form validated so the information is safe and correct.
*  
*  All the fields should be required!!

*  If a field is left empty on form submission, 
*  the form will display a red box indicating to the user that there has been an error.
*  
*  If the form is valid, the form should submit(vanish or disappear), and the user should see a confirmation of information they filled out. (Developers Discretion on how the information is presented to the user)


* Bonus Points
*  1) In addition to adding a class when a field is not valid display a message requesting the user to enter their information. 
      (Example Please Under Name)
*  2) Create a button that resets the form. 


* Developer notes
*  1) An error class named .error you can use this class to apply the proper css to an invalid element.
*  2) You can edit this form however you see fit as the engineer to achieve your goals. (i.e add ids or additional classes if needed)
*/
// const formValidation = () => {
//    alert();

// };

const randomForm = document.querySelector("#form");
randomForm.addEventListener("submit", event => {
  event.preventDefault(); // Stops the page from refreshing
  let errorFlag = false;
   let inputs = Object.values(event.target.elements);
   // console.log(inputs);
   for (const inputItem of inputs) {
      if (inputItem.tagName === 'INPUT') {
         if (!inputItem.value) {
            // console.log(inputItem.name + ' is undefined');
            // console.log(inputItem);
            inputItem.classList.add('error');
            errorFlag = true;
         } else {
            // console.log(inputItem.name + ' is ' + inputItem.value);
            if (inputItem.classList.contains("error")) {
               inputItem.classList.remove('error');
             }
         }
      }
      if (inputItem.tagName === 'SELECT') {
         if (inputItem.name === 'gender') {
            if (inputItem.value === 'GENDER') {
               console.log(inputItem.name + ' is unselected');
               errorFlag = true;
            // } else {
            //    console.log(inputItem.name + ' is ' + inputItem.value);           
            }
         }
         if (inputItem.name === 'class') {
            if (inputItem.value === 'How many Guest') {
               console.log(inputItem.name + ' is unselected');
               errorFlag = true;
            // } else {
            //    console.log(inputItem.name + ' is ' + inputItem.value);           
            }
         }
      }
   }
   if (!errorFlag) {
      // alert('submitting');
      document.getElementById("form").submit();
   }
});
