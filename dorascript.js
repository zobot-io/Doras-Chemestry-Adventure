const body = document.body;
body.style.backgroundColor = "#648c6a";

const div = document.createElement('div');
body.append(div);
div.style.borderRadius = "50px";
div.style.backgroundColor = 'white';
div.style.borderColor = "black";
div.style.borderWidth = "4 px"
div.style.width = "700px";
div.style.height = "80px";
div.style.left = "400px";
div.style.top = "200px"
div.style.position = "absolute";
div.style.textAlign = "center";
div.style.fontSize = "";
div.style.paddingTop = "20px";

const dora = document.createElement('img');
dora.setAttribute('src','Dora_the_Explorer.webp');
dora.style.top = "-50px";
dora.style.left = "-50px";
dora.style.position = "absolute";
body.append(dora);

nextButton = document.createElement("button");
nextButton.style.width="100px";
nextButton.style.height="25px";
nextButton.style.position = "absolute";
nextButton.style.left="975px";
nextButton.style.top="550px";
nextButton.textContent = "Next Page"
body.append(nextButton);

let page = 1;
let text;

nextButton.addEventListener("click", instructions)

instructions();

div.textContent = "Welcome to Dora's Chemestry adventure!"

let button1 = document.createElement('button');
let button2 = document.createElement('button');
let button3 = document.createElement('button');
let button4 = document.createElement('button');

const troll = document.createElement("img");
const swiper = document.createElement("img");
const table = document.createElement ("img");
const dot = document.createElement ("img");
const element = document.createElement ("img");
const prefix = document.createElement("img");

function createSwiper(){
    swiper.setAttribute('src','Swiper.webp');
    swiper.style.left = "1000px";
    swiper.style.top ="100px"
    swiper.style.position = "absolute";
    swiper.style.visibility = "visible";
    swiper.style.height = "200px"
    body.append(swiper);
}

function resetswiper(){
    swiper.style.visibility = "hidden";
}

function createTroll(){
    troll.setAttribute('src','Grumpy_old_troll.webp');
    //troll.style.top = "-25px";
    troll.style.left = "1000px";
    troll.style.position = "absolute";
    troll.style.visibility = "visible";
    body.append(troll);
}

function resetTroll(){
    troll.style.visibility = "hidden";
}

function quiz(text1, text2, text3, text4, correctAnswer, question){
    div.style.borderRadius = "100px";
    div.style.height = "400px";
    div.style.paddingTop = "50px";

    correctAnswer = correctAnswer;

    div.textContent = question;

    button1.innerHTML = text1;
    button2.innerHTML = text2;
    button3.innerHTML = text3;
    button4.innerHTML = text4;

    button1.style.width="200px";
    button1.style.height="25px";
    button1.style.position = "absolute";
    button1.style.left="250px";
    button1.style.top="100px";

    button2.style.width="200px";
    button2.style.height="25px";
    button2.style.position = "absolute";
    button2.style.left="250px";
    button2.style.top="150px";

    button3.style.width="200px";
    button3.style.height="25px";
    button3.style.position = "absolute";
    button3.style.left="250px";
    button3.style.top="200px";

    button4.style.width="200px";
    button4.style.height="25px";
    button4.style.position = "absolute";
    button4.style.left="250px";
    button4.style.top="250px";

    button1.addEventListener('click', CheckButton1);
    button2.addEventListener('click', CheckButton2);
    button3.addEventListener('click', CheckButton3);
    button4.addEventListener('click', CheckButton4);

    function CheckButton1(){
        if(button1.innerHTML == correctAnswer){
            alert("Thats Right! I knew you could do it!");

        }else{
            alert("not quite, Try again! You got this!");

        }
    }

    function CheckButton2(){
        if(button2.innerHTML == correctAnswer){
            alert("Thats Right! I knew you could do it!");

        }else{
            alert("Not quite, Try again! You got this!");

        }
    
    }

    function CheckButton3(){
        if(button3.innerHTML == correctAnswer){
            alert("Thats Right! I knew you could do it!");

        }else{
            alert("Not quite, Try again! You got this!");

        }
    
    }

    function CheckButton4(){
        if(button4.innerHTML == correctAnswer){
            alert("Thats Right! I knew you could do it!");

        }else{
            alert("Not quite, Try again! You got this!");

        }
    
    }

    div.append(button1);
    div.append(button2);
    div.append(button3);
    div.append(button4);
}

function resetDiv(){
    div.style.borderRadius = "50px";
    div.style.height = "80px";
    div.style.paddingTop = "20px";

}

function instructions(){

    div.textContent = text;
    console.log(page);

    if(page == 1){
        text = "Hola, soy Dora! Today we are going to adventure and learn all about chemestry! If we get to the end there is said to be a specil prize";
    }

    if(page == 2){
        text = "Lets start off by taking an aventure through the mind and learning all about mesuments!"
    }

    if(page == 3){
        text="First lets adventure take an adventure to learn the difference between a chemical an physical change";
    }

    if (page == 4){
        text="A physical cahnge is a change made to an object sully to its physical properties";
    }

    if (page == 5){
        text = "An example of a physical change would be ripping a pice of paper in half ";

    }

    if (page == 6){
        text = "A chemical change is when a chemical reaction causes somthing to chage ";
    }

    if (page == 7){
        text = "An exaple of a chemical change would be burning a peice of paper into ash ";
    }

    if (page == 8){
        text = "A riddle! Do you know the answer?";
    }

    if(page == 9){
        text = "Are you ready to learn about significant figures?";
    }

    if (page == 10){
        quiz("cut","soaked in water", "burnt", "crumpled", "burnt", "Wich of the following is a Chemical change?  A pice of paper is");
        
    }

    if(page == 11){
        text="What is a significant figure?";
        resetDiv();
    }

    if (page == 12){
        text="Well, A significant figure is the amount of digets in a certen number!";
    }

    if (page == 13){
        text = "For example 200 has 3 significant figures";

    }

    if (page == 14){
        text = "What is considerd significant?";
    }

    if (page == 15){
        text = "Well, first find the decimal, then start counting the first number thst is not 0, then count all the nubers including 0!";
    }

    if (page == 16){
        text = "For example 200.10 and 200.010 both have 5 significant figures";
    }

    if (page == 17){
       text = "For the other side of the decimal you start couting (from left to right) at the first diget that is not 0";
        
    }

    if (page == 18){
        text = "For example 100 has 3 significant digets and 001.00 also has 3 significant digets";
         
    }

    if (page == 19){
        text = "OOOO look! another riddle! Me gustaria! (that means i really like that in spanish)";
         
    }

    if (page == 20){
        quiz ("4","5","6","7","5", "Can you answer the question how many significant figures does 010.300 have?");
         
    }

    if (page == 21){
        quiz ("4","5","6","7","4", "Can you answer the question how many significant figures does 00100.01 have?");
         
    }

    if (page == 22){
        text = "Great job! Next let learn about how to add significant figures"
        resetDiv();    
    }

    if(page == 23){
        text="First you want to count the number of significant figures behind the decimal place of each nuber you are adding or subtracting";
    }

    if(page == 24){
        text="Next you are going to want to add or subtract like normal";
    }

    if(page == 25){
        text="Then when you have your answer, round it so it has the same amount of significant figurs as the number you added with the leaxt about of significant figures";
    }

    if(page == 26){
        text="For exaple, 10.12 + 6.456 = 16.57";
    }

    if(page == 27){
        text = "Oh No the grumpy old trol!"
    }

    if(page == 28){
        text="Uggggg you got me, Good Job!";
    }

    if(page == 29){
        quiz("17", "17.8 ", "17.89 ", "17.897 ", "17", "Answer this question in order to move on. What is 13.897 + 4?")
        createTroll();
    }

    if(page == 30){
        text="Lets now learn about Multiplying and dividing Significant figures!";
        resetDiv();
    }

    if(page == 31){
        text="When multiplying or dividing two or more numbers, count the significant figures in each of the original numbers.";
        resetTroll();
    }

    if(page == 32){
        text="Then take the smallest of the numbers of significant figures. The product or quotient will have that minimum number of significant figures.";
    }

    if(page == 33){
        text="For example, 1.3 x 3.5 = 3.25 so the right amout of digets would be equal to 3.3";
    }

    if(page == 35){
        text="Great Job!";
    }

    if(page == 36){
        text="Oh no! Its swiper!";
    }

    if(page == 37){
        text="Swiper no swiping! ";
    }

    if(page == 38){
        quiz("6.7", "6.72", "6", "none Of the Above", "6.7","Answer this question so swiper can't swipe the map!what is 5.6 x 1.2 rounded to the corect significant figure?");
        createSwiper();
    }

    if(page == 39){
        text="Aw man you got me, Impressive riddle skills yong adventuerer";
        resetDiv();
    }

    if(page == 40){
        text = "whooh! that adventure with significant figures was fun!";
        resetswiper();
    }

    if(page == 41){
        text = "Lets start a new adventer and learn about precision and accuracy";
    }

    if(page == 42){
        text = "Acuracy is how close somthing is to the accepted value";
    }

    if(page == 43){
        text = "For example if you were to be messuring the density of aluminum (with is 2.7 grams per cubed cemeter) and got 2.8 that would be accurate";
    }

    if(page == 44){
        text = "Percision is when you meure somthing the ame a ton of times ";
    }

    if(page == 45){
        text = "For example if aluminum you messure an aluminum block to be 3.7, 3.8, 3.6 then your mesuments are percise ";
    }

    if(page == 46){
        text = " lets test your knolage with a riddle!"
    }

    if(page == 47){
        text = " Great job!"
    }

    if(page == 48){
        quiz("5.7", "6.3", "4.5", "3.4", "3.4", "Wich of the fallowing values aare percice if 5.6 is your accepted value and 3.5, 3.2, and 3.3 are your messured values");
    }

    if(page == 49){
        text = "Nice job adventurear! you just helped me complete the journy through mesurments ";
        resetDiv();
    }

    if(page == 50){
        text = "Lets now journy thorough an atom!";
    }

    if(page == 51){
        text = "There are 3 parts of an atom, the proton, nutron and electron";
    }

    if(page == 52){
        text = "A proton has a positive charge and is found in the nuclus (center) of an atom";
    }

    if(page == 53){
        text = "The number of protons in an atom determines the type of element the atom is, the number of protons in an atom is called the atomic number";
    }

    if(page == 54){
        text = "An electron has a negitve charge and is found orbiting the nucleus of an atom";
    }

    if(page == 55){
        text = "A nutran has no charge and is found in the nuclus of an atom, its job is to hold the nuulus togenter ";
    }

    if(page == 56){
        text = "The amount of electrons in an atom determine the charge of an atom the more electrons, the more negitive";

    }

    if(page == 57){
        text ="The weight of an atom is determined by the atomic nuber and anout of protons are in an atom (electrons are basicly massless) the mass is also called the mass number";
    }

    if(page == 58){
        text = "An isotope is an atom with a difrent amount of nutrans than electrons";
    }

    if(page == 59){
        text = "Oh noo! Veo the grumpy old troll!!!!";
    }

    if(page == 60){
        text = "wooowie, nice one explorer";
    }

    if (page == 61){
        createTroll();
        quiz("6", "7", "13", "4", "7", "Answer my riddle to move on! If the atomic weight of an atom is 13 and the atomic number is 6 how many nutrans are there?");
    }

    if (page == 62){
        resetDiv();
        resetTroll();
        text = "lets now lwern how to convert from atoms to moles to grams";
    }

    if(page == 63){
        text="A mole unit that is used to decribe how many moliqules are in one gram of a substence";
    }

    if(page == 64){
        text= "a mole is equal to 6.22 x 10^23 moliqules this is also refered to as avagodros number";
    }

    if(page == 65){
        text= "In order to convert between grams and number of atoms you must use moles";
    }

    if(page == 66){
        text= "Lets say you have 20 grams of gold and you want to know how many moliqules are in it";
    }

    if(page == 67){
        text= "You would want to take the moler mass of the element in this case gold, and multipy it by the number of moliqules, in this case 20";
    }


    if(page== 68){
        text = " so that would be 196.966 x 20 = 3939.32";
    }

    if(page== 69){
        text = "You would then multiply that by avagadros number so 3939.32 x (6.22 x 10^23) = 2.450257 x 27";
    }

    if(page== 70){
        text=" Lets test your Kowlage!"
    }

    if(page == 71){
        "Nice job adventurer, I knew it was a good idea inviting you to the crew! The map and boots also thank you!"
    }

    if(page== 72){
        quiz("5.78 x 10^25","1.49 x 10^25", "4.2 x 10^23", "1.6 x 10^23", "1.49 x 10^25", "how many atoms are in 2 grams of carbon");
    }

    if(page == 73){
        text="lets now adventure on over to the periodic table and learn about the electronic configuration of atoms";
        resetDiv();
    }

    if(page == 74){
        text="Each electron in an atom belongs in a certen leval or block, the p block, the s block, the d block and the f block";
    }

    if(page == 75){
        text="On the periodic table the blocks look somthing like this";
        table.setAttribute('src','table.jpg');
        table.style.left = "500px";
        table.style.top = "300px"
        table.style.position = "absolute";
        table.style.visibility = "visible";
        table.style.height = "300px"
        body.append(table);
    }

    if(page == 76){
        text = "When writing the electron configeration, you wright all the full sublevals out then the partal leval where you element is located";
    }

    if(page == 77){
        text = "If we were writing the electron configuration for carbon it would be 1s2s2p^2  and if it were argon it would be 1s2s2p3s2p^6";
    }

    if(page == 78){
        text = "You can also wright the short hand wich means ypu only wright the configeration form the last noble gass on";
    }

    if(page == 79){
        text = "For example clorine would be Ne3s3p^5";
    }

    if(page == 80){
        text = "Oh no! its swiper!";
        createSwiper();
    }

    if(page == 81){
        text = "Aw amn it you got me! your so smart!";
    }

    if(page == 82){
        quiz("1s2s2p^4", "1s2s^1", "1s2s2p3s3p^5", "1s2s2p^2", "1s2s2p^4", "Ha Ha Ha, answer my ridle and you may pass, What is the electro configeration for oxygin")
        table.style.visibility = "hidden";
    }

    if (page == 83){
        text="Congradualtions you have made your way though the adventure of the atom"
        resetswiper();
        resetDiv();
    }

    if(page == 84){
        text = "Lets learn about the periodic table! ";
    }

    if(page == 85){
        text = "First lets compair Non-metals, metals and metaliods!";
    }

    if(page == 86){
        text = "Metals are elemnts that can conduct electricity, are good conductors of heat, are malubal, ductile and have high density ";
    }

    if(page == 87){
        text = "Non-Metals are not shiney, dont conduct heat or electricity well, and they ar not malubal ";
    }

    if(page == 88){
        text = "Metaliods have triats of both metals and non metals";
    }


    if(page == 89){
        text = " Good Job!";
    }

    if(page == 90){
        quiz("metal", "non-metal", "or", "metaliod", "metal", "If a stubtence is shiny, can cunduct heat and elcticity well and is malubal, it is most likly a: ");
    }

    if(page == 91){
        text = "Lets now adventure into inonazation enegy, this is the amount of energy it waould take an ion to react";
    }

    if(page == 92){
        text = " An ion has more energy when there are a large abount of elctrons close to the nucleus";
    }

    if(page == 93){
        text = "Next lest adventure into atomic radius, the atomic radius is defines by the amount of protons and nutrons there are in a nuclus and how many elctrons are condening the nuclus ";
    }

    if(page == 94){
        text = "Finaly lets adventure into electroneitivity, this is defined by how easy it is to gain an elctron";
    }

    if(page == 95){
        text = "It is easer to gain an electron when there are less electropns in the atom and the atom has a bigger nuclius";
    }

    if(page == 96){
        text = "Lets now adventure into boding! Me gustaria bonding!";
    }

    if(page == 97){
        text = "Have you ever herad of a lewis dot structer? Well luckly im here to teach you ";
    }

    if(page == 98){
        text = "here is what one looks like! ";

    }

    if(page == 99){
        text = "The letters repersnt elemtc, the dots repersent electrons tand the lins reprsnt bonds!";
        dot.setAttribute('src','dot.png');
        dot.style.left = "500px";
        dot.style.top = "300px"
        dot.style.position = "absolute";
        dot.style.visibility = "visible";
        dot.style.height = "300px"
        body.append(dot);
    }

    if(page == 100){
        text = "What this structer is saying is that 4 clorins are bonded to one carbon and each of the carbons have 3 electron pairs(2 electrons) ";
    }

    if(page == 101){
        text = "If you wanted to draw a dot structer for a single molicule ypu would wright out the letters that repersent the element then draw dots for how many electrons it has ";
        dot.style.visibility="hidden";
    }

    if(page == 102){
        text = " Next lets adventure into difrent typs of bonding!";
    }

    if(page == 103){
        text = " There are three main types, Ionic Covalent and Metalic!";
    }

    if(page == 104){
        text = "An ionic bond is formed betweena a metal and a non metal, and in this type of bond electrons are stolen, then the atoms atract eachother"; 
    }

    if(page == 105){
        text = " Next up is covalent bonding, this is between two non metatls, in this case electrons are shared between atoms ";
    }

    if(page == 106){
        text = "Next is Metalic bonding, this is between two metals, in this istence there is a sea of elctrons between all the metals.";
    }


    if(page == 107){
        text = "Next lets adventure to writing the formula for ionic compounds"
    }

    if(page == 108){
        text = "FIst you name both the ions, next you state the charge for each ion, next you put the charge of the first ion as the subscricpt for the seccond ion and vice versa (without the +/- sign)"
    }

    if(page == 109){
        text = "Next lets adventure to writing the formula for covalent compounds"
    }
    
    if(page == 110){
        text = "For covalent compounds you take the names in the chart below, match them to the correct number and that is your subsccipt for the formula"
        prefix.setAttribute('src','prefix.png');
        prefix.style.left = "500px";
        prefix.style.top = "300px"
        prefix.style.position = "absolute";
        prefix.style.visibility = "visible";
        prefix.style.height = "300px"
        body.append(prefix);
    }

    if(page == 111){
        text = "For example, Carbon Di-oxide would turn into CO sub 2"
        prefix.style.visibility="hidden";
    }

    if(page == 112){
        text = "Next lets lean about verper theory, this is a way to pridict the chapes of ions and compounds"
    }

    if(page == 113){
        text = "To pridict this,You first draw the lewis dot structer of a compound, you then determine the shape by looking at the electrons, electrons wan to stay as far appart from eachother as they can, so you draw your sttucter to reflect this"
    }

    if(page == 114){
        text = "This drawing will then cooripond with a type of structer including: linnear, bent, tetrahedral, triagonal paner, and peramidal"
    }

    if(page == 115){
        text = "You can then predict the polarity of a moliqule by using the vesper structures "
    }

    if(page == 116){
        text = "Liner, tragonal planer and tetrahedral while bent and pyramidal are polar"
    }

    if(page == 117){
        text = "Now lets adventure to learn about difrent typs of chemical reactions!"
    }

    if(page == 118){
        text = "Up first we have the synthisis/ cobination reaction, this reaction occurs when you have two or more elemnts (reactents) that combine into one compound (prouduct) "
    }

    if(page == 119){
        text = "Next up we have the decompasition reaction wich occure when you have one compound (reactent) that turns into one or more elemnts (prouduct) ";
    }

    if(page == 120){
        text = "Next we have a bouble replacment reactions, this occure when you have two ionic bonds (reactents) and eaceh element trades to end up with the other element(product)";
    }

    if(page == 121){
        text = "Single replacment occurs when you have an ionic compound and an element (reactents), and the elemnt siwches paces with one of the elemnts in the compound (product)";
    }

    if(page == 122){
        text = "And finaly a combustion reaction occurs when you have some sort of compound with hydrogen and carbon and you light it on fire casing it to react with oxagyn, this then creats a product of water and carbon dioxide "
    }

    if(page == 123){
        text = "In oreder to prdict the product of a single replacment reaction, use this tool called the activity series"
    }

    if(page == 125){
        text = "This is basicly a list of all the elemnts that would show up in a single replacment reaction. "
    }

    if(page == 126){
        text = "This is important because a reaction will not occure if an elemnt is less reactive than the element that is alrady bondend "
    }

    if(page == 127){
        text = "SO in order to find if a reaction will occure check to make sure the single prouduct is more reactive thatn the matching elemnt that is alrady bonded. "
    }

    if(page == 128){
        text = "In order to predict the product for a dpuble replacment reaction we must use the salubility rules "
    }

    if(page == 129){
        text = "If both of the product compounds are soluble then the reaction will not occure "
    }

    if(page == 130){
        text = "So you have to check with your solubiity rules to make sure. These rules state wether certain typs of compounds are souluble"
    }

    if(page == 131){
        text = "If there are rulse for more thatn one element in your compount go with the rule that is higher up"
    }

    if(page == 132){
        text = "Lets now learn how to balence chemical formulas "
    }

    if(page == 134){
        text = "In the unvers there is a law that states mater canot be created or distroyed, so what this means is each side of your reaction must have the same amount of each element";
    }

    if(page == 135){
        text = "This is an example of a balenced chemical equation";
        element.setAttribute('src','elements.jpg');
        element.style.left = "400px";
        element.style.top = "300px"
        element.style.position = "absolute";
        element.style.visibility = "visible";
        element.style.height = "300px"
        body.append(element);
    }

    if(page == 136){
        text = "If it didnt have the coefficent of 2 on the seccond reactent and seccond product, it would not be baleced ";
    }

    if(page == 137){
        text = "So by placing oeficents you can balence a chemical equation.";
    }

    if(page == 138){
        text = "You wright chemical forumlas by stating verythig you start out with on one side of the arrow, then stating or predicting what should be on the other side (product side) ";
        element.style.visibility="hidden";
    }

    if(page == 139){
        text = " You then have to balence the equation like i just mentioned!";
    }

    if(page == 140){
        text = " ThAnk you for coming along on DOras Chemesty adventure!";
    }

    if(page == 141){
        text = "The tresure at the end is the gift of Knolage about chemstry!!!";
    }

    page++;

}