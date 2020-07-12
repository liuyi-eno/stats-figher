var P1 = -1; var P2 = -1; var selecting = 1; var listOfSelectAvatar = [];
var listOfNames = ["Cloud","KING","Saitama","Joe","Fubuki","Xiao Hong","Jane","  ? "];
var listOfLifePoints = [3000,3000,3000,3000,3000,3000,3000,3000];
var listOfPowers = [1,1.2,1.5,1,1,0.8,1,1];
var listOfTimeLimits = [20,20,20,20,20,20,20,20];

var listOfDescriptions = [
        "Cloud, a man like a cloud. He is so handsome and swift that attacks against him have a certain possibility to miss.",
        "KING, the strongest creature on the land. His power is great and sometimes can give critical hits.",
        "Saitama, a hero by his own interest. He is bald as a price of power. He can give the most powerful punch, but he has to rest more when he was wrong.",
        "Joe, a very good student on Ms Cynthia's Stats class. Joe is popular among girls. Joe inflicts more damage to girls and takes less damage from boys.",
        "Fubuki, a silent but keen fighter. Her power grows a little bit for every question she solved.",
        "Xiao Hong has been seeking the true meaning of Yin, Yang and Balance since long ago. This talent girl makes less damage, but gives back some damage she takes.",
        "Jane is always willing to try. When she does a question wrong, she can try again.",
        "No one knows her name. She can take less damage from her opponent, and when she is angry, she will destroy everything."
];

var Q = [
    {
        catagory:"Probability",
        question:"What's the probability of tolling a fair dice and getting a number no smaller than 2?",
        answers:"A:1/6 B:1/2 C:2/3 D:5/6",
        answer:"D",
        iryoku:100,
    },
    {
        catagory:"Probability",
        question:"After flip a fair coin 20 times and get 17 heads, what is the probability of getting a head in the next flip?",
        answers:"A:0.5 B:0.25 C:0.75 D:Unknown",
        answer:"A",
        iryoku:100,
    },
    {
        catagory:"Probability",
        question:"After flip a fair coin 20 times and get 17 heads, what is the probability of getting two heads in the next 2 flips?",
        answers:"A:0.4 B:0.5 C:0.15 D:0.25",
        answer:"D",
        iryoku:200,
    },
    {
        catagory:"Probability",
        question:"Toll 2 fair dices, what is the probability of getting a total number bigger than 10?",
        answers:"A:1/24 B:1/12 C:1/9 D:1/2",
        answer:"B",
        iryoku:200
    },
    {
        catagory:"Probability",
        question:"Suppose two independent event A and B have probabilities of 0.2 and 0.5 to happen. What is P(A U B)?",
        answers:"A:0.1 B:0.7 C:0.6 D:0.8",
        answer:"C",
        iryoku:300
    },
    {
        catagory:"Probability",
        question:"Suppose two independent event A and B each has a probability of 0.7 to happen. What is P(A U B)?",
        answers:"A:0.91 B:0.49 C:0.76 D:0.7",
        answer:"A",
        iryoku:400
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        catagory:"Probability",
        question:"There are 7 red balls, 3 blue balls and 10 green balls in a box. Take two balls from the box, what's the probability of getting 2 red balls?",
        answers:"A:0.122 B:0.105 C:0.110 D:0.144",
        answer:"C",
        iryoku:400
    },
    {
        catagory:"Probability",
        question:"What's the probability of getting three successive numbers (like 2,3,4, ignoring of orders) in three tolling of a fair dice?",
        answers:"A:1/216 B:1/9 C:1/36 D:1/108",
        answer:"B",
        iryoku:500
    },
    {
        catagory:"Catagorical Analysis",
        question:"Which of the following graphs is for catagorical analysis?",
        answers:"A:stem plot B:scatter plot C:pie chart D:box plot",
        answer:"C",
        iryoku:100
    },
    {
        catagory:"Test Analysis",
        question:"How many conditions there are for a binomial setting?",
        answers:"A:1 B:2 C:3 D:4",
        answer:"D",
        iryoku:100
    },
    {
        catagory:"Test Analysis",
        question:"A test uses a significant level of 0.05. What's the probability of Type I error of the test?",
        answers:"A:0.05 B:0.95 C:0.025 D:0.1",
        answer:"A",
        iryoku:100
    },
    {
        catagory:"Test Analysis",
        question:"A 80% confidence interval of a data set is created. What's the critical value of the interval?",
        answers:"A:0.84 B:1.28 C:1.75 D:1.88",
        answer:"B",
        iryoku:200
    },
    {
        catagory:"Test Analysis",
        question:"A research wants to find out the effect of a drug to a certain group of people. which test is best to ues?",
        answers:"A:2 sample t-test B:2 proportion z-test C:2 sample z-test D:match-paired test",
        answer:"D",
        iryoku:300
    },
    {
        catagory:"Test Analysis",
        question:"In a binomial setting of n = 300, there are 218 successes. What's the standard deviation of the binomial distribution?",
        answers:"A:0.011 B:0.026 C:7.719 D:3.440",
        answer:"C",
        iryoku:400
    },
    {
        catagory:"Experiment",
        question:"A school wants to know how students feel about the new cafeteria by choosing 20 students from every grade. What kind of sampling method it is?",
        answers:"A:systematic B:stratified C:cluster D:simple random ",
        answer:"B",
        iryoku:200
    },
    {
        catagory:"Experiment",
        question:"Which of the followin is not included in the principles of designing an experiment?",
        answers:"A:random assignment B:replication C:control D:block",
        answer:"D",
        iryoku:300
    },
    // {
    //     catagory:"Probability",
    //     question:"Suppose two independent event A and B have probabilities of 0.2 and 0.5 to happen. What is P(A U B)?",
    //     answers:"A:0.1 B:0.7 C:0.6 D:0.8",
    //     answer:"C",
    //     iryoku:400
    // },
    // {
    //     catagory:"Probability",
    //     question:"Suppose two independent event A and B have probabilities of 0.2 and 0.5 to happen. What is P(A U B)?",
    //     answers:"A:0.1 B:0.7 C:0.6 D:0.8",
    //     answer:"C",
    //     iryoku:400
    // },
    // {
    //     catagory:"Probability",
    //     question:"Suppose two independent event A and B have probabilities of 0.2 and 0.5 to happen. What is P(A U B)?",
    //     answers:"A:0.1 B:0.7 C:0.6 D:0.8",
    //     answer:"C",
    //     iryoku:400
    // },
    // {
    //     catagory:"Probability",
    //     question:"Suppose two independent event A and B have probabilities of 0.2 and 0.5 to happen. What is P(A U B)?",
    //     answers:"A:0.1 B:0.7 C:0.6 D:0.8",
    //     answer:"C",
    //     iryoku:400
    // },
    // {
    //     catagory:"Probability",
    //     question:"Suppose two independent event A and B have probabilities of 0.2 and 0.5 to happen. What is P(A U B)?",
    //     answers:"A:0.1 B:0.7 C:0.6 D:0.8",
    //     answer:"C",
    //     iryoku:400
    // },
    // {
    //     catagory:"Probability",
    //     question:"Suppose two independent event A and B have probabilities of 0.2 and 0.5 to happen. What is P(A U B)?",
    //     answers:"A:0.1 B:0.7 C:0.6 D:0.8",
    //     answer:"C",
    //     iryoku:400
    // }
]

var player1; var player2;

function Player(character,player) {
    document.getElementById("character" + player).src = "img/character_" + character + player + ".gif";
    document.getElementById("cannon" + player).src = "img/dougu" + character + player + ".gif";
    if (character == 6) this.skillUsed = false;
    this.name = listOfNames[character];
    this.player = player;
    this.character = character;
    this.lifePoint = listOfLifePoints[character];
    this.power = listOfPowers[character];
    this.timeLimit = listOfTimeLimits[character];
    this.answer = "";
    this.iryoku = 0;
    this.attack = function(aite) {
        document.getElementById("cannon" + this.player).style.display = "block";
        if (this.player == 1) {
            document.getElementById("cannon" + this.player).style.zIndex = 60;
            document.getElementById("cannon" + this.player).style.left = "70%";
            var that = this;
            setTimeout(function(){
                document.getElementById("cannon" + that.player).style.left = "22%";
                document.getElementById("cannon" + that.player).style.zIndex = 40;
            },500); 
        }
        else {
            document.getElementById("cannon" + this.player).style.zIndex = 60;
            document.getElementById("cannon" + this.player).style.left = "22%";
            var that = this;
            setTimeout(function(){
                document.getElementById("cannon" + that.player).style.left = "70%";
                document.getElementById("cannon" + that.player).style.zIndex = 40;
            },500);     
        }
        var igo = this;
        setTimeout(function(){aite.attacked(igo.getDamage(),igo);},300);
        if (this.character == 4) {
            this.power += 0.1;
            this.show("Power Up","green");
        }
    }
    this.getDamage = function() {
        if (this.character == 1) {
            var ran = Math.random();
            if (ran > 0.8) {
                this.show("Critical!","red");
                return 1.5 * this.power * this.iryoku;
            }
        }
        if (this.character == 7) {
            return this.power * this.iryoku * (1 + (1 - this.lifePoint / 3000) * 1.5);
            // var ran = Math.random();
            // if (ran > 0.97) {
            //     this.show("Critical!","red");
            //     return 10 * this.power * this.iryoku;
            // }
        }
        return this.power * this.iryoku;
    }   
    this.attacked = function(damage,aite) {
        if (this.character == 0) {
            var ran = Math.random();
            if (ran > 0.7) {
                this.show("Miss!","grey");
                return;
            }
        }
        if (aite.character == 3 && this.character > 3) {
            damage *= 1.3;
        }
        if (this.character == 3 && aite.character < 4) {
            damage *= 0.7;
        } 
        if (this.character == 5) {
            aite.lifePoint -= damage * 0.5;
            aite.show("-" + Math.round(damage * 0.5,"red"));
            document.getElementById("blood" + aite.player).style.width = aite.lifePoint / 3000 * 30 + "%";
        }
        if (this.character == 7) {
            damage *= 0.9;
        }
        this.lifePoint -= damage;
        this.show("-" + Math.round(damage),"red");
        document.getElementById("blood" + this.player).style.width = this.lifePoint / 3000 * 30 + "%";
        if (this.lifePoint < 0) {
            document.getElementById("blood" + this.player).style.width = "0%";
            setTimeout(function(){endGame(aite)},500);
        }
    }
    this.newQuestion = function() {
        var index = parseInt(Math.random() * Q.length);
        document.getElementById("question" + this.player).innerHTML = "<p>" + Q[index].catagory + " " + Q[index].iryoku + "</p>";
        document.getElementById("question" + this.player).innerHTML += 
            "<p style='text-align:left;position:absolute;width:80%;left:10%;top:15%;'>&nbsp&nbsp&nbsp&nbsp" + Q[index].question + "</p>";
        document.getElementById("question" + this.player).innerHTML +=
            "<p style='position:absolute;bottom:3%;left:0%;right:0%;'>" + Q[index].answers + "</p>";
        this.answer = Q[index].answer; 
        this.iryoku = Q[index].iryoku;
    }
    this.checkAnswer = function(answer) {
        if (this.answer != "processing") {
            if (this.answer == answer) {
                if (this.character == 6) this.skillUsed = false;
                document.getElementById("answer" + answer + this.player).style.backgroundColor="green";
                if (this.player == 1) {this.attack(player2);} else {this.attack(player1);}
                document.getElementById("question" + this.player).innerHTML = "<p style='text-align:center;font-size:25px;line-height:60px;'>Correct!</p>";
                timeOutCorrect(this);
            }
            else {
                if (this.character == 6 && this.skillUsed == false) {
                    this.show("Try again!","green");
                    document.getElementById("answer" + answer + this.player).style.backgroundColor="red";
                    this.skillUsed = true;
                    return;
                }
                document.getElementById("question" + this.player).innerHTML = "<p style='text-align:center;font-size:25px;line-height:40px;'>Wrong!<br>Wait for 5 seconds.</p>";
                if (this.character == 2) document.getElementById("question" + this.player).innerHTML = "<p style='text-align:center;font-size:25px;line-height:40px;'>Wrong!<br>Wait for 10 seconds.</p>";
                timeOutWrong(this);
                document.getElementById("answer" + answer + this.player).style.backgroundColor="red";
                this.skillUsed = false;
            }
            this.answer = "processing";
        }
    }
    this.show = function(str,color) {
        document.getElementById("showMSG" + this.player).style.color = color;
        document.getElementById("showMSG" + this.player).innerHTML = str;
        var that = this;
        setTimeout(function(){
            document.getElementById("showMSG" + that.player).innerHTML = "";
            document.getElementById("showMSG" + that.player).style.color = "red";
        },1000);
    }
}

function SelectAvatar(id) {
    this.number = id.substring(13);
    this.select = function() {
        if (document.getElementById("blocker" + this.number).innerHTML == "") {
            document.getElementById("blocker" + this.number).innerHTML += "<p>P" + selecting + "<p>";
            document.getElementById("avatar_view").innerHTML = "<img src = 'img/avatar_" + (this.number - 1) + ".png'>";
            document.getElementById("avatar_name").innerHTML = "<p style='font-size:25px;'>" + listOfNames[this.number - 1] +"</p>" 
            document.getElementById("avatar_desc").innerHTML = listOfDescriptions[this.number - 1];
            document.getElementById("select_OK").style.display = "block";
        }
        else document.getElementById("select_OK").style.display = "none";
        for (var i = 1; i < 9; i++) {
            if (i != P1 + 1 && i != P2 + 1) document.getElementById("blocker" + i).innerHTML = "";
        }
    }
}

function startSelection() {
    for (var i = 1; i < 9; i++) {
        listOfSelectAvatar.push(new SelectAvatar("select_avatar" + i));
        document.getElementById("select_avatar" + i).addEventListener("click",function(){
            if (selecting == 1) P1 = parseInt(this.id.substring(13)) - 1;
            if (selecting == 2) P2 = parseInt(this.id.substring(13)) - 1;
            listOfSelectAvatar[parseInt(this.id.substring(13)) - 1].select();
        },false);
    }
    document.getElementById("select_OK").addEventListener("click",function(){
        if (selecting == 1) {
            player1 = new Player(P1,1);
            selecting = 2;
            document.getElementById("select_OK").style.display = "none";
        }
        else if (selecting == 2) {
            player2 = new Player(P2,2);
            document.getElementById("selection").style.display = "none";
            document.getElementById("main").style.display = "block";
            document.getElementById("main").style.opacity = 1;
            startGame();
        }
    },false);
}

function timeOutCorrect(player) {
    setTimeout(function(){
        player.newQuestion();
        if (player.player == 1) {
            var list = document.getElementsByClassName("answer_left");
            for (var i = 0; i < list.length; i++) list[i].style.backgroundColor = "#ffffff";
        }
        else {
            var list = document.getElementsByClassName("answer_right");
            for (var i = 0; i < list.length; i++) list[i].style.backgroundColor = "#ffffff";    
        }
    },1000);
}

function timeOutWrong(player) {
    var time = 5000; if (player.character == 2) time = 10000;
    setTimeout(function(){
        player.newQuestion();
        if (player.player == 1) {
            var list = document.getElementsByClassName("answer_left");
            for (var i = 0; i < list.length; i++) list[i].style.backgroundColor = "#ffffff";
        }
        else {
            var list = document.getElementsByClassName("answer_right");
            for (var i = 0; i < list.length; i++) list[i].style.backgroundColor = "#ffffff";    
        }
    },time);
}
document.getElementById("menu").addEventListener("click",function() {
    document.getElementById("menu").style.display = "none"; document.getElementById("menu").style.zIndex = -1;
    document.getElementById("selection").style.display = "block";
    startSelection();
},false);

function startGame() {
    document.getElementById("BGM").play();
    document.getElementById("avatar1").innerHTML = "<img style='width:95%;height:95%;' src='img/avatar_" + player1.character + ".png'>";
    document.getElementById("avatar2").innerHTML = "<img style='width:95%;height:95%;left:5%;' src='img/avatar_" + player2.character + ".png'>";
    setTimeout(function(){document.getElementById("alert").innerHTML = "2"},1000);
    setTimeout(function(){document.getElementById("alert").innerHTML = "1"},2000);
    setTimeout(function(){document.getElementById("alert").innerHTML = "GO!!!"},3000);
    setTimeout(function(){
        document.getElementById("alert").style.display = "none";
        document.getElementById("answerA1").addEventListener('click',function(){player1.checkAnswer("A")},false);
        document.getElementById("answerA2").addEventListener('click',function(){player2.checkAnswer("A")},false);
        document.getElementById("answerB1").addEventListener('click',function(){player1.checkAnswer("B")},false);
        document.getElementById("answerB2").addEventListener('click',function(){player2.checkAnswer("B")},false);
        document.getElementById("answerC1").addEventListener('click',function(){player1.checkAnswer("C")},false);
        document.getElementById("answerC2").addEventListener('click',function(){player2.checkAnswer("C")},false);
        document.getElementById("answerD1").addEventListener('click',function(){player1.checkAnswer("D")},false);
        document.getElementById("answerD2").addEventListener('click',function(){player2.checkAnswer("D")},false);
        player1.newQuestion(); player2.newQuestion();
        setInterval(function(){
            document.getElementById("time").innerHTML = parseInt(document.getElementById("time").innerHTML) - 1;
            if (parseInt(document.getElementById("time").innerHTML) == 0) {
                if (player1.lifePoint > player2.lifePoint) endGame(player1);
                else endGame(player2);
            }
        },1000);
    },4000);
}

function endGame(winner) {
    alert(winner.name + " wins!\nCongradulation!");
    location.reload(true);
}