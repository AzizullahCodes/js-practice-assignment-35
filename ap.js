/* -----------------------------------------
   JavaScript Q&A Practice assignment 35
   Author: Azizullah
   Date: 25-06-2025
   ----------------------------------------- */


/* ========== Question 1 ==========
Q:  Random Number Between 1 and 10
Generate a random whole number between 1 and 10.
*/
// let random = Math.floor((Math.random()*10)+1);
// console.log(random);

/* ========== Question 2 ==========
Q:  Random Quiz Question
Create 3 simple questions. Display 1 random question using Math.random().

*/
/*let random = Math.floor(Math.random()*3);
   random = random+1;
console.log(random);
if(random === 1){console.log('What is your name?')}
else if(random === 2){console.log('what is your job?')}
else{console.log('what is your favourite color?')}
*/

/* ========== Question 3 ==========
Q: converting string to number
*/
// function converting(){let get = document.getElementById('it').value;
//                        document.getElementById('ph').innerHTML = get;
//                        let type = typeof get;
//                        document.getElementById('ph1').innerHTML = type;
//                        let need = parseInt(get);
//                        document.getElementById('ph2').textContent = need;
//                        let type2 = typeof need;
//                        document.getElementById('ph3').textContent = type2;
// }


/* ========== Question 4 ==========
Q: converting string to number
*/
// function converting(){let get = document.getElementById('it').value;
//                        document.getElementById('ph').innerHTML = get;
//                        let type = typeof get;
//                        document.getElementById('ph1').innerHTML = type;
//                        let need = parseFloat(get);
//                        document.getElementById('ph2').textContent = need;
//                        let type2 = typeof need;
//                        document.getElementById('ph3').textContent = type2;
// }

/* ========== Question 5 ==========
Q: converting string to number.
*/
// function converting(){let get = document.getElementById('it').value;
//                        document.getElementById('ph').innerHTML = get;
//                        let type = typeof get;
//                        document.getElementById('ph1').innerHTML = type;
//                        let need = +(get);
//                        document.getElementById('ph2').textContent = need;
//                        let type2 = typeof need;
//                        document.getElementById('ph3').textContent = type2;
// }


/* ========== Question 6 ==========
Q: convert number to string
*/
// function converting(){let get = Number(document.getElementById('it').value);
//                        document.getElementById('ph').innerHTML = get;
//                        let type = typeof get;
//                        document.getElementById('ph1').innerHTML = type;
//                        let need = get + '';
//                        document.getElementById('ph2').textContent = need;
//                        let type2 = typeof need;
//                        document.getElementById('ph3').textContent = type2;
// }



/* ========== Question 7 ==========
Q: Take two numbers: num1 = 15.6789 and num2 = 4.321.

Divide num1 by num2.

Display the result in these formats:

2 decimal places using .toFixed(2)

3 decimal places using .toFixed(3)

3 significant digits using .toPrecision(3)

Full result without formatting

Show all results using console.log().

💡 Example Output:
Full result: 3.628771439286258
2 decimal places: 3.63
3 decimal places: 3.629
3 significant digits: 3.63
*/
// ans 
// function controller(){let num1 = document.getElementById('it1').value;
//     let num2 = document.getElementById('it2').value; 
//     let division = num1 / num2;
//     document.getElementById('ph').textContent = division; 
//     let result2 = division.toFixed(2);
//     document.getElementById('ph2').textContent = result2;

//     let result3 = division.toFixed(3);
//     document.getElementById('ph3').innerHTML = result3;
//     let result4 = division.toPrecision(2);
//     document.getElementById('ph4').innerHTML = result4;

// }

/* ========== Question 8 ==========
Q: Get Today’s Date
Create a Date object.
Show the full date in this format: DD/MM/YYYY.
*/
// -----ans--------

// function dat(){let current = new Date();
//             document.getElementById('ph').innerHTML = current;
//             let dt = current.toLocaleDateString();
//             document.getElementById('ph1').innerHTML = dt;
//             let time = current.toLocaleTimeString();
//             document.getElementById('ph2').innerHTML = time;
//             let currentDate = current.getDate();
//             document.getElementById('ph3').innerHTML = currentDate;
//             let currentHour = current.getHours();
//             document.getElementById('ph4').innerHTML = currentHour;
//             let currentMinutes = current.getMinutes();
//             document.getElementById('ph5').innerHTML = currentMinutes;
// }




/* ========== Question 9 ==========
Q: Countdown Timer
Create a countdown from now to New Year (January 1, 2026). Calculate how many:
Days
Hours
Minutes
Seconds
are left.
*/
// -------- ans ---------
// function practicing(){let current = new Date();
//    document.getElementById('p1').innerHTML = current;
//    let currentMilliSeconds = current.getTime();
//    let required = new Date('01 01 2026');
//    let requiredINMilliSeconds = required.getTime();
//    let difference = requiredINMilliSeconds - currentMilliSeconds;
//    document.getElementById('p2').innerHTML = difference;
//    let remainingDays = Math.floor(difference/(1000*60*60 *24));
//    document.getElementById('p3').innerHTML = remainingDays + ' days';
//    let remainingHours = Math.floor(difference/(1000*60*60));
//    document.getElementById('p4').textContent = remainingHours + ' Hours';
//    let remainingMinutes = Math.floor(difference/(1000*60));
//    document.getElementById('p5').textContent = remainingMinutes + ' minutes';
//    let remainingSeconds = Math.floor(difference/(1000));
//    document.getElementById('p6').textContent = remainingSeconds + ' seconds';
// }


/* ========== Question 10 ==========
Q: Day of the Week:
Ask the user to enter a number (1–7) and display the corresponding day name using a switch.
Example: 1 → Sunday, 2 → Monday, ...
*/
//  let get = prompt('enter number')
// function dd(){let get = document.getElementById('it').value;
//    let day;

//    switch (get){ 
//    case ('1'): day = 'sunday';
//    break;
//    case ('1'): day = 'sunday';
//    break;
//    case ('2'): day = 'monday';
//    break;
//    case ('3'): day = 'tuesday';
//    break;
//    case ('4'): day = 'wednesday';
//    break;
//    case ('5'): day = 'thursday';
//    break;
//    case ('6'): day = 'friday';
//    break;
//    case ('7'): day = 'saturday';
//    break;
//    default: day = 'Invalid entry'
// }
// document.getElementById('p2').innerHTML = day + ' days';

// }


/* ========== Question 12 ==========
Q: Electricity Bill Slab:
Input units consumed:

0–100: Rs. 5/unit

101–200: Rs. 8/unit

201–300: Rs. 10/unit

>300: Rs. 12/unit
Use switch(true) and conditions to apply the correct slab.

*/
// ============= ans =========
// function billing(){let get = document.getElementById('it').value;
//    let unit;
//    switch (true){case (get >= 0 && get <= 100):unit = '5 rupees per unit';
//       break;
//       case(get >=101 && get <=200):unit = '10 rupees per unit';
//       break;
//       case(get >= 201 && get <= 300) :unit = '12 rupees per unit';
//       break;
      
//       default: unit ='invalid entry'
//    }
//    document.getElementById('p').innerHTML = unit;
// }



/* ========== Question 12 ==========
Q: create element by js
*/
// _____ ans ____
// console.log(getDiv);
// let newElement = document.createElement('h2');
// let getDiv = document.getElementById('container');
// console.log(newElement);
// var newElementContent = document.createTextNode('I learnt js');
// console.log(newElementContent);
// newElement.appendChild(newElementContent);
// console.log(newElement);
// getDiv.appendChild(newElement);


/* ========== Question 13 ==========
Q: create element by js
*/
// ans 
// let getDiv = document.getElementById('dv');
// console.log(getDiv);
// let createHeading = document.createElement('h5');
// console.log(createHeading);
// let createContent = document.createTextNode('My College tenure');
// console.log(createContent);
// createHeading.appendChild(createContent);
// console.log(createHeading);
// getDiv.appendChild(createHeading);


/* ========== Question 14 ==========
Q:  Create a Paragraph

Create a paragraph (<p>) with the text “Hello JavaScript DOM” and 
 it inside a <div> with ID output.
*/
// ans 
// let get = document.getElementById('output');
// console.log(get);
// let newElement = document.createElement('p');
// console.log(newElement);
// let newElementContent = document.createTextNode('Hello js dom');
// console.log(newElementContent);
// newElement.appendChild(newElementContent);
// console.log(newElement);
// get.appendChild(newElement);


/* ========== Question 15 ==========
Q:Create a Button

Dynamically create a button that says "Click Me". When
clicked, it shows an alert "Button clicked!"..
*/
// ans 
// let get = document.getElementById('output');
// console.log(get)
// let createButton = document.createElement('button');
// console.log(createButton);
// let buttonContent = document.createTextNode('click me');
// console.log(buttonContent);
// createButton.appendChild(buttonContent);
// console.log(createButton);
// get.appendChild(createButton);



/* ========== Question 16 ==========
Q: Add List Items

Create an unordered list <ul> and append 3 list items (<li>) 
with the text: "One", "Two", "Three".
*/
// ans 
// let get = document.getElementById('output');
// console.log(get);
// let createUnList = document.createElement('ul');
// console.log(createUnList);
// let liOne = document.createElement('li');
// console.log(liOne);
// let liOneContent = document.createTextNode('one');
// liOne.appendChild(liOneContent);
// console.log(liOne);
// let li2 = document.createElement('li');
// let li2Content = document.createTextNode('two');
// li2.appendChild(li2Content);
// console.log(li2);
// let li3 = document.createElement('li');
// let li3Content = document.createTextNode('three'
// )
// li3.appendChild(li3Content);
// console.log(li3);
// createUnList.appendChild(liOne+li2+li3);
// console.log(createUnList);
// get.appendChild(createUnList)

// up code is not working 
// we need to write another code 

// let get = document.getElementById('container');
// let ul = document.createElement('ul');
// let items = ['one','two','three'];
// for(let i = 0; i < items.length; i++)
// {let li = document.createElement('li');
//    let text = document.createTextNode(items[i]);
//    li.appendChild(text);
//    ul.appendChild(li)
// }
// get.appendChild(ul)

/* ========== Question 17 ==========
Q: creat another ul and li by 
*/
// ans 

// let get = document.getElementById('container');

// let ul = document.createElement('ul');
// console.log(ul);
// let item = ['home','about','services','contact','help'];
// console.log(item)

// for(let i = 0; i < item.length; i++){
//    let li = document.createElement('li');
//    console.log(li);
//    let text = document.createTextNode(item[i]);
//    li.appendChild(text);
//    ul.appendChild(li)
// }

// get.appendChild(ul)

/* ========== Question 18 ==========
Q: long li by dom 
*/
// ans 
// let get = document.getElementById('container');
// let ul = document.createElement('ul');
// console.log(ul);
// let items = ['Home','About','Contact','Services','Help','Other Issues','Support','It Services'];
// console.log(items);

// for(let i = 0; i < items.length; i++){
//    let li = document.createElement('li');
   
//    let text = document.createTextNode(items[i]);
//    li.appendChild(text);
//    ul.appendChild(li)
// }
// get.appendChild(ul)


/* ========== Question 19 ==========
Q: Dynamic Form Generator
Create a form with:
Input (type="text")
Input (type="email")
Button (text: "Submit")
All created dynamically using JS.
*/
// ans 
// let get = document.getElementById('container');
// console.log(get)
// let firstInput = document.createElement('input');
// firstInput.setAttribute('type','text');
// console.log(firstInput);
// let secondInput = document.createElement('input');
// secondInput.setAttribute('type','email');
// console.log(secondInput);
// let btn = document.createElement('button');

// let btnText = document.createTextNode('submit');
//     btn.appendChild(btnText);
//     console.log(btn)
// get.appendChild(firstInput,secondInput)

/* ========== Question 20 ==========
Q: create heading, para,span ,by dom
*/
// ans 
// let get = document.getElementById('container');
// console.log(get);
// let heading = document.createElement('h1');
// let headingText = document.createTextNode('Islamabad');
// heading.appendChild(headingText);
// console.log(heading);
// let para = document.createElement('p');
// let paraText = document.createTextNode('I live in islamabad');
// para.appendChild(paraText);
// console.log(para);
// let span = document.createElement('span');
// let spanText = document.createTextNode('name');
// span.appendChild(spanText);
// console.log(span);

// get.appendChild(heading);
// get.appendChild(para);
// get.appendChild(span);

/* ========== Question 21 ==========
Q: create a footer and inside footer a p 
*/
// let get = document.getElementById('container');
// console.log(get)
// let foot = document.createElement('footer');
// console.log(foot);
// let para = document.createElement('p');
// console.log(para);
// let paraContent = document.createTextNode('it is a paragraph inside footer');
// console.log(paraContent);
// para.appendChild(paraContent);
// console.log(para)
// foot.appendChild(para);
// console.log(foot);
// get.appendChild(foot);
// console.log(get);


/* ========== Question 22 ==========
Q: create direct div by js and show on dom?
*/

// let myDiv = document.createElement('div');
// document.body.appendChild(myDiv);
// myDiv.style.width = '100px';
// myDiv.style.height = '100px';
// myDiv.style.background = 'blue'

/* ========== Question 23 ==========
Q: todo app
*/
// let myInput = document.createElement('input');
// document.body.appendChild(myInput);
// myInput.setAttribute('id','it');
// console.log(myInput)
// let btn = document.createElement('button');
// let btnText = document.createTextNode('enter');
// btn.appendChild(btnText);
// document.body.appendChild(btn);
// btn.setAttribute('onclick','entry()');
// console.log(btn)

// let div = document.createElement('p');
// div.setAttribute('id','myDiv');
// console.log(div);
// document.body.appendChild(div);
// div.style.width = '50px';
// div.style.height = '40px';
// div.style.border = '2px solid red';




// function entry(){let get = document.getElementById('it').value;
//    console.log(get);
//    let get2 = document.getElementById('myDiv').innerHTML;

//    let liEl = document.createElement('li');
//    var liContent = document.createTextNode()
   
   
// }
// var ulEl = document.getElementById('ul');

// var todoInputEl = document.getElementById('todo-input');

// function addItem(){

//    var liEl = document.createElement('li'); 
// var buttonEl = document.createElement('button');
// var btnText = document.createTextNode('delete item')
// buttonEl.appendChild(btnText);
//    var liContent = document.createTextNode(todoInputEl.value);

//    liEl.appendChild(liContent);
//    liEl.appendChild(buttonEl)

//    ulEl.appendChild(liEl);

//    todoInputEl.value = '';

//    todoInputEl.focus();

// }

// function deleteItem(){console.log('deleted')}

/* ========== Question 24 ==========
Q: date() practice
*/
// ans 
// function dateFunction(){let current = Date();
// document.getElementById('p1').innerHTML = typeof current;
//              current = new Date();
//              document.getElementById('p2').textContent = typeof current;

//          let dayName = ['sun','mon','tues','wed','thurs','fri','sat'];
//          let day = current.getDay();
//          console.log(day);
//          document.getElementById('p3').innerHTML = day;
//          let result = dayName[day];
//          document.getElementById('p4').innerHTML = result

// }



/* ========== Question 25 ==========
Q: 
Use a for loop to create 5 <div> elements
Each one should contain text: "Box 1", "Box 2", etc.
Append all inside a parent container <div class="boxes">
*/
// ----- ans -------
// let main = document.createElement('div');
// document.body.appendChild(main);
// main.style.width = '200px';
// main.style.height = '100px';
// main.style.background = 'blue';

// let items = ['box1','box2','box3','box4','box5'];
// for(let i = 0 ; i < items.length; i++){let div = document.createElement('div');
//    let text  = document.createTextNode(items[i]);
//    div.appendChild(text);
//    main.appendChild(div)
// }


/* ========== Question 26 ==========
Q: Math.round,ceil,floor etc
*/
// ans 
// function rounding(){let get = document.getElementById('it').value;
                  
//     let round =Math.round(get);
//    document.getElementById('p1').innerHTML = round;
// }

// function fixing(){let get2 = document.getElementById('it2').value;
//                     get2 = Number(get2)
//        let fix = get2.toFixed(3);
//        document.getElementById('ppp').textContent = fix;
// }


/* ========== Question 27 ==========
Q: Show Current Date in Custom Format
Goal: Display the current date as Day-Month-Year
Example Output: 28-06-2025
*/
// let current = new Date();
// let date = current.getDate();
// let month = current.getMonth()+1;
// let year = current.getFullYear();
// let result = date + '-' + '0' + month + '-' + year;
// console.log(result)



/* ========== Question 28 ==========
Q: Change Date to a Specific Date
Goal: Change the date to 1st January 2024 and log it.
*/
// ans 
// let current = new Date();
// current.setDate('01');
// current.setMonth('03');
// current.setFullYear('2020');
// console.log(current)



/* ========== Question 4 ==========
Q: Replace all occurrences of a character in a string.
*/



/* ========== Question 29 ==========
Q: todo app
*/
// let ulEl = document.getElementById('ul');
// let todoInputEl = document.getElementById('todo-input');

// function addItem(){var liEl = document.createElement('li');
//    var liContent = document.createTextNode(todoInputEl.value);
//    liEl.appendChild(liContent);
//    ulEl.appendChild(liEl);
//    todoInputEl.value = '';
//    todoInputEl.focus();
// }


/* ========== Question 30 ==========
Q: todo list practice 
*/
// let input = document.getElementById('todo-input');
// let ulList = document.getElementById('ul');

// function addItem(){let li = document.createElement('li');
//        let btn = document.createElement('button');
//        let btnContent = document.createTextNode('delete item');
//        btn.appendChild(btnContent);
      

//    let liContent = document.createTextNode(input.value);
//    li.appendChild(liContent);
//    ulList.appendChild(li);
//    li.appendChild(btn)
//    input.value = '';
//    input.focus();

// }


/* ========== Question 31 ==========
Q: todo list
*/
// let toDoInput = document.getElementById('todoinput');
// let toDoUl = document.getElementById('todoul');

// function addItem(){let li = document.createElement('li');
//    let liContent = document.createTextNode(toDoInput.value); 
//    li.appendChild(liContent);
//    toDoUl.appendChild(li);
//    toDoInput.value = '';
//    toDoInput.focus();
//    let btn = document.createElement('button');
//    let btnContent = document.createTextNode('Delete Item');
//    btn.appendChild(btnContent);
//    li.appendChild(btn);
// }
/* ========== Question 32 ==========
Q:  Simple Repeat
Question:
Ask the user to enter a word and a number. Show the word repeated that 
number of times.
Example Output:
If input is "Hello" and number is 3, output:
*/
// ans 
// function repeating(){let getWord = document.getElementById('word').value;
//    let getNumber = document.getElementById('number').value;
//    let result = getWord.repeat(getNumber);
//    document.getElementById('pp').innerHTML = result;
// }

/* ==========  question 33 ==========
Q:  Make a Star Pattern (One Line)
Question:
Use .repeat() to create a line of 20 stars: ********************
*/
// function repeating(){let patt = document.getElementById('pattern').value;
//    let repeatNumber = Number(document.getElementById('number').value);
//    let requirement = patt.repeat(repeatNumber);
//    document.getElementById('pp').innerHTML = requirement;
// }


/* ========== Question 34 ==========
Q:  Repeat With Space
Question:
Ask the user for a word and repeat it 5 times with a space in between:
Input: "Hi" → Output: "Hi Hi Hi Hi Hi "
*/
// function repeating(){let getWord = document.getElementById('word').value; 
//    let repeatNumber = document.getElementById('number').value; 
//    let requirement = (getWord + ' ').repeat(repeatNumber);
//    document.getElementById('pp').innerHTML = requirement;
// }

/* ========== Question 35 ==========
Q: Ask the user for a number n, then print a right‑angled triangle of 
stars with n rows:
*/
// function repeating(){let getSign = document.getElementById('string').value;
//    let time = Number(document.getElementById('number').value);
//    let result = '';
//    for(var i = 0; i <= time; i++){result = result +(getSign).repeat(i) + '\n';}
   
//    document.getElementById('result').textContent = result;
// }

// function drawTriangle() {
//       let n = document.getElementById("inputNumber").value;
//       let result = "";

//       for (let i = 1; i <= n; i++) {
//         result += "*".repeat(i) + "\n";
//       }

//       document.getElementById("result").innerText = result;
//     }

/* ========== Question 36 ==========
Q: create a shape by taking any symbol
*/
// function repeating(){let sign = document.getElementById('str').value; 
//       let time = parseFloat(document.getElementById('number').value);
//       let result = '';
//       for(let i = 0 ; i <= time; i ++){result = result + sign.repeat(i) + '\n';}
//       document.getElementById('result').innerHTML = result;
// }


/* ========== Question 37 ==========
Q: print a pattern by repeat( )
*/
//  function repeating(){let getSign = document.getElementById('str').value; 
//     let getTime = Number(document.getElementById('number').value);
//     let result = '';
    
//     for(let i = 0 ; i <= getTime ; i++){result = result+ getSign.repeat(i) + '\n';}
//     document.getElementById('result').innerHTML = result;
  

//   }


/* ========== Question 38 ==========
Q: mask data function 
3252-7688-787876-98
show like 3252-7688*******-98
*/
function mask(){let getData = document.getElementById('it').value;
   let first = getData.slice(0,16);
   let second = getData.slice(getData.length-3);
   document.getElementById('p1').innerHTML = first;
   document.getElementById('p2').innerHTML = second;
   document.getElementById('p3').innerHTML = getData

}


/* ========== Question 4 ==========
Q: Replace all occurrences of a character in a string.
*/



/* ========== Question 4 ==========
Q: Replace all occurrences of a character in a string.
*/



/* ========== Question 4 ==========
Q: Replace all occurrences of a character in a string.
*/




/* ========== Question 4 ==========
Q: Replace all occurrences of a character in a string.
*/


/* ========== Question 4 ==========
Q: Replace all occurrences of a character in a string.
*/




/* ========== Question 4 ==========
Q: Replace all occurrences of a character in a string.
*/



/* ========== Question 4 ==========
Q: Replace all occurrences of a character in a string.
*/



/* ========== Question 4 ==========
Q: Replace all occurrences of a character in a string.
*/



/* ========== Question 4 ==========
Q: Replace all occurrences of a character in a string.
*/


/* ========== Question 4 ==========
Q: Replace all occurrences of a character in a string.
*/
