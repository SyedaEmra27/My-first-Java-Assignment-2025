

//-------------------------------------Chapter # 01   ^^^^^ ALERTS  ^^^^^^^^-----START-------------------------------------



// Question 01. Write a script to greet your website visitor using JS alert
// box.
 alert ("Welcome to our website.");


// Question 2. Write a script to display following message on your web
// page:

alert("Error! Please enter a valid password");

// Question  03. Write a script to display following message on your web
// page: (Hint : Use line break)

alert("Welcome to JS Land... \nHappy Coding!");

// Question 04. Write a script to display following messages in sequence:

alert("Welcome to JS Land...")

alert("Happy Coding! \n⬜ Prevent this page from creating additional dialogs.")

// Question 05. Generate the following message through browser’s
// developer console:

console.log ("Hello... I can run JS through my web browser's console.")

// Question 06. Make use of alerts in your new/existing HTML & CSS
// project.

// Ans :Checked.



// Question 07. Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head


// Ans: <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Java Assignment</title>
//     <script src="app.js"></script>
//     </head>
// <body>
// </body>
// </html>


// b. Body (before your page’s HTML)
//  <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Java Assignment</title>
//     </head>
// <body>
// <script src="app.js"></script>
// <h1>Hey..!</h1>
// <p>Here is answer of all questions.</p>
// </body>
// </html> 



// c. Body (inside your page’s HTML)

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Java Assignment</title>
//     </head>
// <body>
// <h1>Hey..!</h1>
// <p>Here is answer of all questions.</p>
// <script src="app.js"></script>
// </body>
// </html>


// d. Body (after your page’s HTML)
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Java Assignment</title>
//     </head>
// <body>
// <h1>Hey..!</h1>
// <p>Here is answer of all questions.</p>
// </body>
// <script src="app.js"></script>
// </html>

//-------------------------------------Chapter # 01   ^^^^^ ALERTS  ^^^^^^^^--END----------------------------------------

//-------------------------------------Chapter # 02   ^^^^^ VARIABLES FOR STRINGS  ^^^^^^^^--****START****--------------------------------------

// Question 01. Declare a variable called username.
var username;

// Question 02. Declare a variable called myName & assign to it a string
// that represents your Full Name.
var myName=("Syeda Emra");

// Question 03. Write script to
// a) Declare a JS variable, titled message.
Ans : var  message;

// b) Assign “Hello World” to variable message
Ans : message = "Hello World";


// c) Display the message in alert box.
 alert (message);



// Question 04. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

var Student_name ="Syeda Emra";
var Student_age = "26 Years";
var course = "Certified Mobile Application Development";
alert(Student_name);
alert(Student_age);
alert(course);


// Question 05. Write a script to display the following alert using one JS
// variable:

var MyPizza ="PIZZA \nPIZZ \nPIZ \nPI \nP";
alert(MyPizza);

// Question 06. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
var email;
email ="syedaemra92@gmail.com";
alert(email);

// Question 07. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:
var Book;
Book =" I am trying to learn from the Book \n***A smarter way to learn JavaScript***";
alert(Book);

// Question 08. Write a script to display this in browser through JS
document.write ("<p>Yah! I can write <strong> HTML </strong> content through java script.</p>");


// Question 09. Store following string in a variable and show in alert and
// browser through JS
var myTheme ="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(myTheme);




//-------------------------------------Chapter # 02   ^^^^^ VARIABLES FOR STRINGS  ^^^^^^^^--****END****--------------------------------------


//-------------------------------------Chapter # 03---START  ^^^^^  VARIABLES FOR NUMBERS ^^^^^^^^---------------------------------------

// Question 01. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
var age;
age = "28 Years Old.";
alert(age);


// Question02. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
//  Ans 2: 
var N ="14";
alert("You have visited this site" +" "+ N +" "+ "times.")


// Question 03. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
var birthYear = 1996;
document.write ("My birth year is" + birthYear + "." +"<br>Data type of my declared variable is number.");




// Question 04. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var  VisitorsName ="John Doe";
var ProductTitle ="T-shirt";
var QuantityOf_product = "5";

document.write ("<br>" + "<br>" +VisitorsName +" " + "ordered" + " "+ QuantityOf_product + ProductTitle  +" " + "(s) on XYZ clothing store");



//-------------------------------------Chapter # 03---END   ^^^^^  VARIABLES FOR NUMBERS ^^^^^^^^--********--------------------------------------





// ------------------------------chapter # 04 Start  ^^^^^^ VARIABLE NAMES: LEGAL & ILLEGAL ^^^^^^^^^^^^^^^ ------------------------------------------



// Question 01. Declare 3 variables in one statement.

// var my_bio_data = myname ,age ,course;


// Question 02. Declare 5 legal & 5 illegal variable names.
// Ans: 
// Legal Variable.
// var syedaEmra;
// var _syedaemra;
// var $syedaemra;
// var SyedaEmra;
// var syedaemra27;

// // Ill-Legal Variables.
// var 27syedaemra27;
// var @syedaemra27;
// var syeda emra;
// var syeda-emra;
// var syeda.emra;




// Question 03. Display this in your browser
// a) A heading stating “Rules for naming JS variables”

document.write ("<br><br><h1>Rules for naming JS variables</h1><br>")

// b) Variable names can only contain ______, ______, ______ and ______.

document.write ("<h4>Variable names can only contain:</h4> <br> <br> 1)Letters <br> 2) Numbers (use after letters) <br> 3) Underscore (_)  <br> 4) Dollar sign ($).")
 
 



// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
document.write("<br><br><h4>Variables must begin with a:</h4><br> 1) var $syedaemra; <br> 2) var  _syedaemra;  <br> 3) Syedaemra; <br>4) syedaemra27;")


// d) Variable names are case _________
document.write("<br><br> <strong> Variable names are case: </strong> <br> 01) Camel case. <br> 02) Sanke Case. <br> 03) Pascal Case.")


// e) Variable names should not be JS _________

document.write("<br><br> <strong> Variable names should not be JS __________: </strong> <br> Reserved Keywords.")

// ------------------------------chapter # 04  End  ^^^^^^ VARIABLE NAMES: LEGAL & ILLEGAL ^^^^^^^^^^^^^^^ ------------------------------------------






// --------------------------chapter 1-3  (OLD MS.WORD PDf) start ------------------------------------------------


// =============Chapter 1 (Alerts) start============================>
// QUESTION: 1 Alert these following (individually):
// I. First Name
// II. Last Name
// III. Email
// IV. Phone Number V. Password

 alert("Syeda ");
 alert("Emra");
 alert("syedaemra92@gmail.com");
 alert("+92-316-123456-7");
 alert("1234567890");
// // Corrected alert statement:

 alert("You're learning JavaScript");
// // Custom alert message:
 alert("Hello! Welcome to JavaScript learning.");




// ===============Chapter 2 (Variables for string)=======start==================>
// Question 01. ============Declare any variable in the camel Case format.

// Ans:  var sydeaEmra;

//  Question 02. ==============Declare a variable of your choice without defining it. Then, in a
// second statement, assign it a string of your choice.

//Ans : var yourwebsite;
// yourwebsite = "Java is a Programming Language.";



// Question 03.========== Declare the variable teamName and Alert your Team name.

// var teamName;
// teamName= "Pakistan";


// Question 04. This statement has already been coded.
// Assign the variable a new string.
// Ans:
// var bestMan ="charlie";
// bestMan ="Shahid Afridi";

// ===================Chapter 3 (Variables for numbers)=========start==================>
// Question 01. Declare a variable “caseQty”
// Ans:
// var caseQty= 27;



// Question 02. Assign to the variable caseQty, which has already been declared,
// the value 144.
// Ans :
// caseQty =144;


//Question 03. Rewrite this statement so the variable can be used in a math
// operation. var num = "9";
// Ans : 
// var num = "9";

// Question 04. In one statement declare a variable. In a second statement assign
// it the sum of 2 numbers.

// Ans: 
// var num1 =10
// var num2= 20
// console.log (num1+num2); 


//Question 05. What is the value of orderTotal?
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge; Try
// it yourself.
// Ans:
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
alert(orderTotal);

// 6. In the first statement declare a variable and assign it a number. In
// the second statement, change the value of the variable by adding
// it together with a number.
// Ans:
var yourWebsites = 10;
var myWebsites =  yourWebsites +15;
alert (myWebsites);