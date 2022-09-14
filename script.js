
const botchoiceview =document.getElementById("bot_choice");
const playerchoiceview =document.getElementById("player_choice");
const resultview =document.getElementById("result");

const possiblechoice=document.querySelectorAll('button')

possiblechoice.forEach(possiblechoice=>possiblechoice.addEventListener
    ('click',(e)=>{
        userchoice=e.target.id;
        playerchoiceview.innerHTML=userchoice;
        botchoicegenerator();
        result="Loading..."
        results();

    }))

function botchoicegenerator(){
    const RandomNumber=Math.floor(Math.random()*3)+1;
    if(RandomNumber===1)
    {
        botchoosen="Rock";
    }
    if(RandomNumber===2)
    {
        botchoosen="Paper";
    }
    if(RandomNumber===3)
    {
        botchoosen="Scissor";
    }
    botchoiceview.innerHTML=botchoosen;
    console.log(RandomNumber);

    }





    function results(){
        if(botchoosen===userchoice)
            {
                result="Hey it's a draw.Please try again";
            }
        if(botchoosen==="Rock"&& userchoice==="Paper")
           {
            result="User Wins";
           }
        if(botchoosen==="Paper"&& userchoice==="Scissor")
           {
            result="User Wins";
           }
        if(botchoosen==="Scissor"&& userchoice==="Rock")
           {
            result="User Wins";
           }



        if(botchoosen==="Paper"&& userchoice==="Rock")
           {
            result="Bot Wins";
           }
        if(botchoosen==="Scissor"&& userchoice==="Paper")
           {
            result="Bot Wins";
           }
        if(botchoosen==="Rock"&& userchoice==="Scissor")
           {
            result="Bot Wins";
           }

        resultview.innerHTML=result;
    }
    