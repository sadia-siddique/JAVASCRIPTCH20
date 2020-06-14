
// CHAPTER#01
alert("Error!please enter a valid password");
alert("welcome to js land..\nHappy coding!!");
alert("welcome to js land..");
alert("hello..I can JS through my web browser's console");

  // CHAPTER#02

  alert("hellow world");
var a=5;
var b=5;
var c=a+b;
alert(c);


 var a=20;
var b="10";
var c=a+b;
alert(c);

 var a=20;
var b="2";
var c=a/b;
alert(c);

 var a=3;
var b=5;
var c=5;
var d=b-a*c;
alert(d);

var a=5;
var b=a++;
alert(b);
alert(a);

var x=10;
var y=x++ + ++x - x +x++ - ++x + x;
     10 + 12 - 12 + 12- 14 + 14
20
var z=alert(y);


var a=5;
var b=5;
var c=a+b;
console.log(c);

var x="sadia";
var y="siddique";
var z=x+y;
alert(z);



var x=15;
var y="years old";
var z=x+y;
alert(z);


var x="Certified Mobile Application Development";
alert(x);



alert("Hello World. \n My name is sadia. \n What is your name?");
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

var x="My email address is";
var y="example@example.com";
var z=x+y;
alert(z);

// CHAPTER#03

// TASK1

  var age;
age = "15";
age= "i am 15 years old";
alert(age);

// TASK2

    function getCookieVal (offset) {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
    endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
    }
    function GetCookie (name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
    return getCookieVal (j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) 
    break; 
    }
    return null;
    }
    function SetCookie (name, value) {
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (2 < argc) ? argv[2] : null;
    var path = (3 < argc) ? argv[3] : null;
    var domain = (4 < argc) ? argv[4] : null;
    var secure = (5 < argc) ? argv[5] : false;
    document.cookie = name + "=" + escape (value) +
    ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
    ((path == null) ? "" : ("; path=" + path)) +
    ((domain == null) ? "" : ("; domain=" + domain)) +
    ((secure == true) ? "; secure" : "");
    }
    function DisplayInfo() {
    var expdate = new Date();
    var visit;
    expdate.setTime(expdate.getTime() +  (24 * 60 * 60 * 1000 * 365)); 
    if(!(visit = GetCookie("visit"))) 
    visit = 0;
    visit++;
    SetCookie("visit", visit, expdate, "/", null, false);
    var message;
    if(visit == 1) 
    message="         Welcome to my page!";
    if(visit== 2) 
    message="           I see you came back !";
    if(visit == 3) 
    message="               Oh, it's you again!";
    if(visit == 4)
    message="            You must be curious!"; 
    if(visit == 5) 
    message="      You're practically a regular!";
    if(visit == 6) 
    message="              You need a hobby!";
    if(visit == 7)
    message="             Nothing better to do?"; 
    if(visit == 8) 
    message="            Don't you ever sleep?";
    if(visit == 9)
    message="                      Get a life!!!"; 
    if(visit >= 10) 
    message="  Rent is due on the 1st of the month!";
      alert("\n"+"Your browser has visited this page               \n"
                +"                              "+visit+"\n"
                +"                          time(s)."+"\n"+"\n"
                +message);
    }
    function ResetCounts() {
    var expdate = new Date();
    expdate.setTime(expdate.getTime() +  (24 * 60 * 60 * 1000 * 365)); 
    visit = 0;
    SetCookie("visit", visit, expdate , "/", null, false);
    history.go(0);
    }
    
    window.onload=DisplayInfo

    // TASK3

     var birthYear;
birthYear  = "1997";
var birth = "My Birth Year Is "+birthYear+" .\n<br> Data Type Of My Declared Variable Is Number...<br><br><br>";
document.write(birth);

// TASK4
var name = prompt("ENTER UR NAME");
var title = prompt("ENTER THE PRODUCT TITLE..");
var quantity = prompt("ENTER THE PRODUCT QUANTITY");

document.write(name +" ORDERED "+quantity+" "+title+" on XYZ Clothing store");

// CHAPTER#04

// TASK1
 document.write("<br><br><br><b>Rules for naming JS variables.</b>");
document.write("<br> a) Variable names can only contain letters, numbers, dollar signs, and underscores..");
document.write("<br> b) Variables must begin with a letters, underscores or dollar signs,.");
document.write("<br> c) Variable names are case sensitive.");
document.write("<br> d) Variable names should not be JS keywords.");


// CHAPTER#05


// TASK1
        document.write("<br><br><b>ADDiTION</b>");
var num1 = prompt(" ADDITION...\n\nENTER FIRST NUMBER");
var num2 = prompt("ENTER SECOND NUMBER");

var sum = ((+num1)+(+num2));
document.write("<br><br><br>sum of "+num1+" & "+num2+" is "+sum);

// TASK2
        // SUBTRACTION
document.write("<br><br><b>SUBTRACTION<b>");
var num1 = prompt("SUBTRACTION...\n\nENTER FIRST NUMBER");
var num2 = prompt("ENTER SECOND NUMBER");

var sub = (num1-num2);
document.write("<br><br><br>subtraction of "+num1+" & "+num2+" is "+sub);



//  DIVISION
document.write("<br><br><b>DIVISION<b>");
var num1 = prompt("DIVISION...\n\nENTER FIRST NUMBER");
var num2 = prompt("ENTER SECOND NUMBER");

var div = (num1/num2);
document.write("<br><br><br>division of "+num1+" & "+num2+" is "+div);



//  MODULUS
document.write("<br><br><b>MODULUS<b>");
var num1 = prompt("MODULUS...\n\nENTER FIRST NUMBER");
var num2 = prompt("ENTER SECOND NUMBER");

var mod = (num1%num2);
document.write("<br><br><br>modulus of "+num1+" & "+num2+" is "+mod);




// TASK3

 document.write("<br><br>================================<br><br>using JS Mathematic Expressions")
var variable;
document.write("<br><br>"+variable);
variable = 5;
document.write("<br><br> initial value :" + variable);
++variable;
document.write("<br><br> Value after increament is :"+variable);
variable = variable+7;
document.write("<br><br> Value after addition is "+ variable);
--variable;
document.write("<br><br> Value after decrement is "+variable);
variable = variable%3;
document.write("<br><br> remainder is "+ variable);


// TASK4

 var ticket = prompt("ENTER THE COST OF ONE MOVIE TICKET..");
ticket = ticket*5;
document.write("<br><br> THE COST OF 5 MOVIE TICKETS IS "+ticket);

// TASK5

      for(x=1;x<=10;x++){
    document.write("<br>");
    document.write("4 * "+x+" = "+x*4);
    document.write("<br>");}

    // TASK6

     // CELSIUS TO FAHRENHEIT...
var centi = prompt("ENTER THE Celsius temperature TO CONVERT INTO Fahrenheit..");
var Fahrenheit = (centi* 9/5)+32;
document.write("<br><br><br>"+centi+("C = ")+Fahrenheit+"F<br><br>");

// FAHRENHEIT TO CELSIUS....
var faren = prompt("ENTER THE Fahrenheit temperature TO CONVERT INTO Celsius..");
var Celsius = (faren-32)*5/9;
document.write(faren+ "F = "+Celsius+"C<br><br>");

 // TASK7

 document.write("SHOPPING CART...<br>===========================<br>");
var item1 = 650;
document.write("THE PRICE OF ITEM ONE IS "+item1);
var quant1 = prompt("ENTER THE QUANTITY OF ITEM 1 TO PURCHASE..");
document.write("<br> QUANTITY OF ITEM1 ORDERED IS "+quant1);
var price1 = quant1*item1;

var item2 = 100;
document.write("<br>THE PRICE OF ITEM TWO IS "+item2);
var quant2 = prompt("ENTER THE QUANTITY OF ITEM 2 TO PURCHASE..");
var price2 = quant2*item2;
document.write("<br>QUANTITY OF ITEM2 ORDERED IS "+quant2);

var shipping = "100";
document.write("<br>SHIPPING CHARGES : "+shipping);

document.write("<br>TOTAL COST OF YOUR ORDER IS "+((+price1)+(+price2)+(+shipping)));

// TASK8

   var total = prompt("ENTER THE TOTAL MARKS...");

var obtained = prompt("ENTER THE OBTAINED MARKS..");


var percentage = (obtained * 100 /total);
document.write(" <br><br>"+percentage);

// TASK9

 var dollars = 10;
var riyals = 25;

var pkr = (dollars*104.80+25*28);
document.write("<br><br> TOTAL CURRENCY IN PKR : "+pkr);
document.write("<br><br><br> ");

// TASK10

 var some = 10;
some = ([some+5]*10)/2;
document.write("AFTER PERFORMING THE REQUIRED ARITHEMATIC : "+some);
document.write("<br><br><br> ");


// TASK11
        
var current = 2020;
var birth = 1997;

var age = current-birth;

document.write("You are "+age+ " years old");

//TASK12

 var radius = 20;
document.write("<br><br><br>Radius of circle : "+radius);
var pi = 3.142;
var circumference = 2*pi*radius;
document.write("<br>Circumference of circle is : "+circumference);

var area = pi*(radius*radius);

document.write("<br>Area of circle is : "+area);


//TASK13
        
        document.write("<br/>","Favourite Snack: Chocolate Chip");
        document.write("<br/>","Current Age: 15")
        document.write("<br/>","Estimated Maximum age:65")
        document.write("<br/>","Amount of snack per Day: 3")
        document.write("<br/>","You  will need 150 chocolate chip to last you until the rip old age of 65")


//CHAPTER#06---9


//TASK1

 var a = 10;

document.write("<br><br>The value of a is : "+a);
document.write("<br>============================================")
++a;
document.write("<br>The value of ++a is "+a);

document.write("<br> Now the value of a is : "+a);

document.write("<br><br><br>The value of a++ is : "+(a++));
document.write("<br>Now the value of a is : "+a);

--a;
document.write("<br><br><br>The value of --a is : "+a);

document.write("<br>Now the value of a is : "+a);

document.write("<br><br><br>The value of a-- is : "+(a--));
document.write("<br>The value of a is : "+a);


//TASK2

 result = --a - --b + ++b + b--;

var a = 2, b = 1;
result = --a - --b + ++b + b--;
document.write("<br><br><br>Result is : "+result);


//TASK3

 var nam = prompt("ENTER UR NAME...");

document.write("<br><br><br> Well Come Dear...!"+nam);


//TASK4


var table = prompt("ENTER THE NUMBER TO PRINT MULTIPLICATION TABLE...");
table=5;
var length = prompt("ENTER THE LENGTH OF TABLE U WANT TO PRINT...");

for (i=1;i<=length;i++){
    document.write(table +" * "+i+ " = "+table*i+" <br>");
}

//TASK5

  document.write("<br>Subject  Total Marks  Obtained Marks Percentage ");

var sub1 = prompt("ENTER FIRST SUBJECT...");

var sub2 = prompt("ENTER SECOND SUBJECT...");

var sub3 = prompt("ENTER THIRD SUBJECT...");

var total = 100;

var mark1 = prompt("ENTER "+sub1+ "'s MARKS..");
var mark2 = prompt("ENTER "+sub2+ "'s MARKS..");
var mark3 = prompt("ENTER "+sub3+ "'s MARKS..");


document.write("<br>")
document.write(sub1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+total+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+mark1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+(mark1*100)/total+"%.");
document.write("<br>")
document.write(sub2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+total+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+mark2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+(mark2*100)/total+"%.");
document.write("<br>")
document.write(sub3+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+total+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+mark3+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+(mark3*100)/total+"%.");


//CHAPTER9---11

//TASK1

var city = prompt("ENTER THE CITY NAME...");
if (city = "karachi"){
    document.write("WELLCOME TO CITY OF LIGHTS...");
}else 
{
    document.write("Welcome to City...");
}

//TASK2

 var gender = prompt ("ENTER UR GENDER...");

if (gender == "male"){
    document.write("GOOD MORNING SIR...");
}else if(gender== "female"){
    document.write("GOOD MORNING MA'AM");
}

//TASK3

   var color = prompt("ENTER THE COLOUR OF ROAD TRAFFIC SIGNAL...");

if(color == "red"){
    document.write("MUST STOP...");
}else if (color = "yellow"){
    document.write("READY TO MOVE...");
}
else if(color = "green"){
    document.write("MOVE NOW...");
}

//TASK4


        var fuel = prompt("ENTER THE AMOUNT OF REMAINING FUEL IN YOUR CAR IN (litres)");

if (fuel < 0.25){
    document.write("PLEASE FILL THE FUEL IN YOUR CAR...");
}
else {
    document.write("THE AMOUNT OF FUEL IN YOUR CAR IS "+fuel+ " litres.");
}

//TASK5

var sub1 = prompt("ENTER FIRST SUBJECT MARKS...");

var sub2 = prompt("ENTER SECOND SUBJECT MARKS...");

var sub3 = prompt("ENTER THIRD SUBJECT MARKS...");

var total = prompt("ENTER THE TOTAL MARKS...");

document.write("TOTAL MARKS : "+ total);
var obtained = sub1+sub2+sub3;
document.write("TOTAL OBTAINED MARKS : "+obtained);
var percentage = obtained*100/total;
document.write("PERCENTAGE : "+percentage+ " %");

if (percentage>=80){
    document.write("GRADE : A1  <br>  REMARKS : EXCELLENT " 
    )
}
else if (percentage>=70){
    document.write("GRADE : A  <br>  REMARKS : GOOD " 
    )
}
if (percentage>=60){
    document.write("GRADE : B  <br>  REMARKS : YOU NEED TO IMPROVE " 
    )
}
if (percentage < 60){
    document.write("GRADE : FAIL  <br>  REMARKS : SORRY " 
    )
}


//TASK6

       var secret = 2;
var guess = prompt("GUESS THE SECRET NUMBER...(range = 1-10)");
if (guess == secret){
    document.write("Bingo! Correct answer");
}
else if(guess+1 == secret || guess == secret+1 ){
    document.write("Close enough to the correct answer");
}
else{
    document.write("YOUR GUESSED NUMBER DOES NOT MATCHED WITH THE SECRET NUMBER...<br> TRY AGAIN... ");
}


//TASK7


 var divisible = prompt("ENTER THE NUMBER TO CHECK WHETHER IT IS DIVISIBLE BY 3 OR NOT...");

if(divisible % 3 == 0){
    document.write("NUMBER IS DIVISBLE BY 3...");
}
else{
document.write("NUMBER IS NOT DIVISIBLE BY 3...");

}

//TASK8


 var evenOdd = prompt("ENTER THE NUMBER TO CHECK WHETHER THE NUMBER IS EVEN OR ODD...");

if(evenOdd % 2 == 0){
    document.write("THER GIVEN NUMBER IS EVEN...");
}
else{
    document.write("THE GIVEN NUMBER IS ODD...");
}

//TASK9


  var temperature = prompt("ENTER THE TEMPERATURE TO CHECK THE WEATHER CRITERIA...");

if(temperature > 40){
    document.write("It is too hot outside.");
}
else if(temperature > 30){
    document.write("The Weather today is Normal.");
}else if (temperature > 20){
    document.write("“Today’s Weather is cool.");
}
else if(temperature > 10){
    document.write("“OMG! Today’s weather is so Cool.");
}



//TASK10


        var num1 = prompt("Enter First Number?");
num1 = Number(num1);
var num2 = prompt("Enter Second Number?");
num2 = Number(num2);
var operator = prompt("Enter operator?");
var result;
switch(operator) {
    case "+" :
        result = num1 + num2;
        alert(result);
        break;
    case "-" :
        result = num1 - num2;
        alert(result);
        break;
    case "*" :
        result = num1 * num2;
        alert(result);
        break;
    case "/" :
        result = num1 / num2;
        alert(result);
        break;
    default :
        alert("Invalid");
}


  //CHAPTER#012---13

  //TASK1

   function check_number() {
    var num_value= document.getElementById("num_value").value;
    
    
        if (num_value>=65 && num_value<=90)
            result=num_value+"Character is a capital letter";
    
    
        else if (num_value>=97 && num_value<=122)
            result=num_value+"Character is a small letter";
        else if (num_value>=48 && num_value<=57)
      result=num_value+"Character is a digit";
        else if ((num_value>0 && num_value<=47)||(num_value>=58 && num_value<=64)||
                   (num_value>=91 && num_value<=96)||(num_value>=123 && num_value<=127))
                   result=num_value+"Character is a special symbol";
                   document.getElementById("sadia").innerHTML = result;
       }



//TASK2



 var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  document.write("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
    document.write("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
    document.write("The values "+ num1+ " and "+num2+ " are equal.");
  }



  //TASK3

   function check_number() {
    var num_value= document.getElementById("num_value").value;
    if (num_value ==0 ) {
        result = num_value + " Number. is Zero";
         }
       else if (num_value >=0 ){
        result = num_value + " is a Positive Number.";
       }
         else if (num_value <=0 ){
        result = num_value +" is a Negative Number.";
         }
    document.getElementById("sadia").innerHTML = result;
     }


     //TASK4


      function check_number() {
var num_value= document.getElementById("num_value").value;
if (num_value =='a' || num_value== 'A' || num_value =='e' || num_value== 'E'||
 num_value== 'i'||num_value=='I' ||num_value=='o'||num_value=='O'||num_value=='u'||
 num_value=='U')
  {
	result = num_value +   "  Vowels alphabet";
	 }
  
	 else  {
	result = num_value +" your input alphabet not vowels.";
	 }
document.getElementById("sadia").innerHTML = result;
 }



//TASK5


  function checkPassword(str)
        {
          var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
          return re.test(str);
        }
      
        function checkForm(form)
        {
          if(form.username.value == "") {
            alert("Error: Username cannot be blank!");
            form.username.focus();
            return false;
          }
      
          if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
            if(!checkPassword(form.pwd1.value)) {
              alert("The password you have entered is Congrats!");
              form.pwd1.focus();
              return false;
            }
          } else {
            alert("Error: Please check that you've entered and confirmed your password!");
            form.pwd1.focus();
            return false;
          }
          return true;
        }


        //TASK6


        function myFunction() {
   var time = new Date().getHours();
   var greeting;
   if (time < 13) {
     greeting = "Good day";
   } else {
     greeting = "Good evening";
   }
   document.getElementById("demo").innerHTML = greeting;
 }

 //TASK7


  var time = prompt("ENTER THE TIME in 24 hours clock format like: '1900' = 7pm");
        
        if (time >= 0000 && time < 1200 ){
            document.write("GOOD MORNING...!");
        }
        else if (time >= 1200 && time < 1700){
            document.write("GOOD AFTER NOON...!");
        }
        else if (time >= 1700 && time < 2100 ){
            document.write("GOOD EVENING...!");
        }
        else if( time >= 2100 && time < 2359){
            document.write("GOOD NIGHT...!");
        }



    //CHAPTER#014---16

    //TASK1

      document.write("QUALIFICATIONS...<BR><BR>");
var education = ["SSC","HSC","BSC","BS","BCOM","MS","M.PHIL","PHD"];

for (i=0;i<education.length;i++){
    document.write(i+")"+education[i]+"<BR><BR>");
}


//TASK2


  var names = ["sadia", "amna","waliya"];

var scores = [450, 230, 350];

var total = 500;

var sadiaNam = names[0];
var amnaNam = names[1];
var waliyaNam = names[2];

var sadiaMrks = names[0];
var amnaMrks = names[1];
var waliyaMrks = names[2];




var sadiaPer = sadiaMrks*100/total;
var amnaPer = amnaMrks*100/total;
var waliyaPer = waliyaMrks*100/total;



 document.write("SCORE OF "+sadiaNam+"  IS : "+sadiaMrks+" . PERCENTAGE : "+sadiaPer+" %");
 document.write("<br>");
 document.write("SCORE OF "+amnaNam+"  IS : "+amnaMrks+" . PERCENTAGE : "+amnaPer+" %");
 document.write("<br>");
 document.write("SCORE OF "+waliyaNam+"  IS : "+waliyaMrks+" . PERCENTAGE : "+waliyaPer+" %");


 //TASK3


        var Color = ["White", "Black", "Sky"];
    
    alert( Color[0] ); // 
    alert( Color[1] ); // 
    alert( Color[2] ); // 
    
    var begning = prompt("Enter a Color Name To Begning Add?");
    
    Color.unshift(begning);
    // document.write("Update list at he begning of list Color ");
    alert("Update list at he begning of list Color     "  + Color );
    
        // document.write("Update list at he end of list Color ");
    var ending = prompt("Enter a Color Name to Add The End of List?");
    Color.push(ending);
    alert("Update list at he End of list Color     "  + Color );
    
    
    //two or more color added
    var ask = prompt("Enter a Two or more color to Begning of the Array");
    Color.unshift(ask);
    var ask = prompt("Enter a Two or more color to Begning of the Array");
    Color.unshift(ask);
    alert("Two or More Color Added at he begning  The New List :   "  + Color );
    
    
    //delete the first Color
    
    
    alert("This Color Delete : "+ Color.shift() ); // remove first Color
    
    alert( "The New list: "+Color ); 
    
    //delete the laste color
    alert("This Color Delete "+Color.pop());
    alert("After delete First Color New List :"+ Color );
    
    
    

    //TASK4


    var points = [320, 230, 480, 120];
 document.write(" Score of sudent :" +points);
   points.sort(function(a, b){return a - b});
   document.write(" <br>");
  document.write(" Order Score of student: " +points);


//TASK5

       
 var array = ["Karachi", "Lahore", "Islamabad", "Quetta", "peshawar"]
 var i = 0;
 document.write("City List","<br>");
 while(i < array.length){
     document.write( " ",array[i] );
     i++;
 }
       

 document.write("<br>","Selected City List");

     document.write("<br> ","Isamabad, Quetta " );



     //TASK6


     function Use_array_join_method(n)
 {
 	var arr = ["This ", " is ", " my ", " cat"]; 
 	return arr.join(" ,");
 }
 document.write("</br>" ," Array :" , "</br>");
 document.write(Use_array_join_method("This is my cat"));


 function Use_string_join_method(n)
 {
 	var arr = ["This ", " is ", " my ", " cat"]; 
 	return arr.join(" ");
 }
 document.write("</br>" ," String :" , "</br>");
 document.write(Use_string_join_method("This is my cat"));



 //TASK7


 function display() {
     var obj = document.getElementById("selectNow");
     document.write(obj.options[obj.selectedIndex].text);
 }



 //CHAPTER#17---20


 //TASK1

  var Arr=[[1,2],[3,4],[5,6]];
document.write(Arr);

//TASK2

 function sadia(array)
{
    return [array[0], array[1], array[2],array[3]];
}
console.log(sadia([0, 1, 2, 3]));  
console.log(sadia([1, 0 , 1, 2 ]));  
console.log(sadia([2, 1, 0, 1]));


//TASK3


 for (var input = 1; input <= 10; input++) {
            console.log(input);
           }


  //TASK4
  
     var tableNum = prompt("Enter Table Number?");
         tableNum = Number(tableNum);
         var tabLeS = prompt("Enter Table Length?");
         tabLeS = Number(tabLeS);
         var i = 1;
         do {
             document.write("<h3>" + tableNum + " X " + i + " = " + tableNum*i + "<br /></h3>");
             i++;
         }while(i <= tabLeS);    



  //TASK5
  
  var array = ["Apple", "Banana", "Mango", "Orange", "Huawei"]
 var i = 0;
 while(i < array.length){
     document.write(array[i] + "<br />");
     i++;
 }
       
 var fruit = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
 var i = 0;

 while(i < fruit.length) {
    
     document.write("Element at Index " + i + " is " + fruit[i] + "<br />");
     i++;
    
 }


 //TASK6


 var i = 1;
 document.write("</br>" ," Counting" , "</br>");

 while(i <= 15) {
 document.write(i + " ");
 i++;
 }

 document.write("</br>" ," Reverse counting" , "</br>");
    
 function reverse_a_number(n)
 {
 	n = n + "";
 	return n.split("").reverse().join(" ");
 }
 document.write(reverse_a_number(12345678901));



 document.write("</br>" ," Even number" , "</br>");
 for(var i = 0; i <= 20; i++) {
     if((i % 2) == 0) {
        
         document.write(" " + i )
     }
 }
 document.write("</br>" ," Odd number" , "</br>");

 for(var i = 0; i <= 20; i++) {
     if((i % 2) != 0)  {
         document.write(" " + i )
     }
 }

 document.write("</br>" ," Series" , "</br>");
 for(var i = 0; i <= 20; i++) {
     if((i % 2) == 0) {
        
         document.write(" " + i+"k" )
     }
 }


 //TASK7


  var items = ["cake", "apple", "cookie", "chips", "patties"];
 var ask = prompt("Welcome to bakery... what do you want from the Below List sir/ma'am?  1=>cake   2=>apple   2=>cookie   2=>chips   2=>patties");
 ask = ask.toLowerCase();
 var b = items.indexOf(ask);
 for (var i = 0; i < items.length; i++) {
     if(items[i] === ask) {
         alert(ask + " is available at index No. " + b);
         break; 
     }
 } 
 if(items[i] !== ask) {
     alert("Sorry Sir/Ma'am " + ask + " is not available in our bakery");
 } 



 //TASK8

 var arr = [24, 53, 78, 91, 12];
 var largest = arr[0];

 for (var i = 0; i < arr.length; i++) {
     if (largest < arr[i] ) {
         largest = arr[i];
     }
 }
 document.write("Array items is :  " + arr)
   document.write(" <br>");

 document.write("The largest Number is  : " + largest);


 //TASK9


  var arr = [24, 53, 78, 91, 12];
 var smallest = arr[0];

 for (var i = 0; i < arr.length; i++) {
     if (smallest > arr[i] ) {
         smallest = arr[i];
     }
 }
 document.write("Array items is : " + arr)
   document.write(" <br>");

 document.write("The smallest Number is : " + smallest);



 //TASK10


   var n = 5;  
          
 for (var i = 1; i <= 20; ++i) { 
     document.writeln("," + n * i); 
 }            


////////COMPLETE ASSIGNMENT OF JAVASCRIPT////////////////////////






    




 