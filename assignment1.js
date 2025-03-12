//C1-A1: Variable/Constants Declaration and String Concatenation Methods

// Student's Information

//My Information 
let my_name = 'Rina Gascon Llanes'; 
let my_birthdate = 'December 14, 2005';
let my_birthplace = 'Quezon City,Manila,Philippines';
let my_address = 'Lintic,Banayoyo,Ilocos Sur,Philippines 2708';
let my_course = 'Bachelor of Science in Computer Science';
let my_dreamJob = 'Software Engineer';

// Converts the my information to Upper Case and Lower Case
let my_name_uppercase = my_name.toUpperCase();
let my_name_lowercase = my_name.toLowerCase();
let my_birthplace_uppercase = my_birthplace.toUpperCase();
let my_address_uppercase = my_address.toUpperCase();
let my_course_lowercase = my_course.toLowerCase();

// My First Classmate Information
let my_cmate1Name = 'Jasmine Alviar Dizon';
let my_cmate1Birthdate = 'July 28,2006';
let my_cmate1Birthplace = 'Luna, Burgos,Ilocos Sur';
let my_cmate1Address = 'Bagani Campo,Candon City,Ilocos Sur';
let my_cmate1Course = 'Bachelor Of Science In Computer Science';
let my_cmate1DreamJob = 'Software Engineer';

// Converts my First Classmate information to Upper Case and Lower Case
let my_cmate1_uppercase = my_cmate1Name.toUpperCase();
let my_cmate1_lowercase = my_cmate1Name.toLowerCase();
let my_cmate1birthplace_uppercase = my_cmate1Birthplace.toUpperCase();
let my_cmate1address_uppercase =  my_cmate1Address.toUpperCase();
let my_cmate1course_lowercase = my_cmate1Course.toLowerCase();

// My Second Classmate Information
let my_cmate2Name = 'Rhealyn';
let my_cmate2Birthdate = 'August 16,2006';
let my_cmate2Birthplace = 'Conconig West';
let my_cmate2Address = 'Conconig West,Sta Lucia,Ilocos Sur';
let my_cmate2Course = 'Bachelor Of Science In Computer Science';
let my_cmate2DreamJob = 'Software Engineer';



// Converts my Second  Classmate information to Upper Case and Lower Case
let my_cmate2_uppercase = my_cmate2Name.toUpperCase();
let my_cmate2_lowercase = my_cmate2Name.toLowerCase();
let my_cmate2birthplace_uppercase = my_cmate2Birthplace.toUpperCase();
let my_cmate2address_uppercase =  my_cmate2Address.toUpperCase();
let my_cmate2course_lowercase = my_cmate2Course.toLowerCase();

//Console all information with form of sentence with the help of string concatenation and formatting methods for each of the declared persona.

console.log ( `${my_name_uppercase} was born ${my_birthdate} at ${my_birthplace_uppercase} and currently living at ${my_address_uppercase}. ${my_name_lowercase} is taking up ${my_course_lowercase} and dreams to be ${my_dreamJob} after graduation.`);
console.log(`____________________`); // for separator 
console.log ( `${my_cmate1_uppercase} was born ${my_cmate1Birthdate} at ${my_cmate1birthplace_uppercase} and currently living at ${my_cmate1address_uppercase}. ${my_cmate1_lowercase} is taking up ${my_cmate1course_lowercase} and dreams to be ${my_cmate1DreamJob} after graduation.`);
console.log(`____________________`); // for separator 
console.log( `${my_cmate2_uppercase} was born ${my_cmate2Birthdate} at ${my_cmate2birthplace_uppercase} and currently living at ${my_cmate2address_uppercase}. ${my_cmate2_lowercase} is taking up ${my_cmate2course_lowercase} and dreams to be ${my_cmate2DreamJob} after graduation.`);
