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

let valName = '';
let valBirthdate = '';
let valGender = '';
let valGuests = '';
let valReg = '';


const randomForm = document.querySelector("#form");
randomForm.addEventListener("submit", event => {
  event.preventDefault(); // Stops the page from refreshing or being submitted
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
            // console.log(inputItem);
            switch (inputItem.name) {
               case 'customerName':
                  valName = inputItem.value;
                  break;
               case 'birthday':
                  valBirthdate = inputItem.value;
                  break;
               case 'res_code':
                  valReg = inputItem.value;
                  break;
            }
            if (inputItem.classList.contains("error")) {
               inputItem.classList.remove('error');
             }
         }
      }
      if (inputItem.tagName === 'SELECT') {
         if (inputItem.name === 'gender') {
            if (inputItem.value === 'GENDER') {
               // console.log(inputItem.name + ' is unselected');
               inputItem.classList.add('error');
               errorFlag = true;
              // } else {
            //    console.log(inputItem.name + ' is ' + inputItem.value);
            } else {
            // console.log(inputItem.name + ' is ' + inputItem.value);
            valGender = inputItem.value;
            if (inputItem.classList.contains("error")) {
               inputItem.classList.remove('error');
            }           
         }
         }
         if (inputItem.name === 'class') {
            if (inputItem.value === 'How many Guest') {
               // console.log(inputItem.name + ' is unselected');
               inputItem.classList.add('error');
               errorFlag = true;
            } else {
               valGuests = inputItem.value;
               // console.log(inputItem.name + ' is ' + inputItem.value);
               if (inputItem.classList.contains("error")) {
                  inputItem.classList.remove('error');
               } 
            }
         }
      }
   }
   if (errorFlag) {
      alert('Fix data entry errors');
      return;
   } else {
      randomForm.style.display = 'none';
      const box = document.querySelector('#box');
      // this loop is incomplete - she waas going too fast so i did it in a hardcoded way
      // elements.ForEach((element) => {
      //    const paragraph = document.createElement('p');
      //    paragraph.textContent = 'Name: ' + valName;
      //    box.appendChild
      //    // paragraph.textContent = `${element.getAttribute'()
      // });
      const paragraph1 = document.createElement('p');
      const paragraph2 = document.createElement('p');
      const paragraph3 = document.createElement('p');
      const paragraph4 = document.createElement('p');
      const paragraph5 = document.createElement('p');

      paragraph1.textContent = 'Name: ' + valName;
      box.appendChild(paragraph1);
      paragraph2.textContent = 'Birthday: ' + valBirthdate;
      box.appendChild(paragraph2);
      paragraph3.textContent = 'Gender: ' + valGender;
      box.appendChild(paragraph3);
      paragraph4.textContent = 'Guests: ' + valGuests;
      box.appendChild(paragraph4);
      paragraph5.textContent = 'Reg Code: ' + valReg;
      box.appendChild(paragraph5);

      // alert(valName);
      // alert(valBirthdate);
      // alert(valGender);
      // alert(valGuests);
      // alert(valReg);

      // dont want to submit
      // document.getElementById("form").submit();
   } 
});


   // valName = '';
   // valBirthdate = '';
   // valGender = '';
   // valGuests = '';
   // valReg = '';
