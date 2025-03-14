let myHero = null;

const journeyRef = 
    document.querySelector 
        ("#journey")

function startJourney() {
    journeyRef.innerHTML =
        "<p>Get ready and prepare for a long trip. This journey will have many obsticles and you will travel far and wide. This journey alone will take hours on end and may feel like you may never make it. First you'll choose your brave hero you'll be.</p>"
            
    const starterHero = [
        {name: "Lebron",img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254", },  
        {name: "DJ Khaled", img: "https://www.billboard.com/wp-content/uploads/media/DJ-Khaled-press-photo-2016-billboard-1548.jpg?w=942&h=623&crop=1", },
        { name: "Tom Brady", img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2330.png", },
        {name: "Doug", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjk_lT5tEwEMgdHtcIE3z017oN3g1-Z4YLQ&s", },
    ];
     
     for (let i = 0; i < starterHero.length; i++) {
         const hero = starterHero[i];
         
         const newSection = document.createElement("section");

         newSection.innerHTML += "<img height='100' src='" + hero.img +  "'alt='" + hero.name + "'/>";

         newSection.innerHTML += "<h4>" + hero.name + "</h4>"; 


         newSection.dataset.heroName = hero.name;
         newSection.dataset.heroImage = hero.img;
         newSection.onclick = chooseHero;

         journeyRef.appendChild(newSection);

         console.log(hero);

     }
}

function chooseHero(e) {
    console.log(e.currentTarget);
    const heroName = e.currentTarget.dataset.heroName;
    const heroImg = e.currentTarget.dataset.heroImage;

    const confirmChoice = confirm("You chose " + heroName);

    if (confirmChoice) {
        journeyRef.innerHTML +=
            "You chose " + heroName + " as your hero.";
        myHero = { name: heroName, img: heroImg }
        
        
    }


    
    

    const story = {
    
    start: {
        text: ("Now that you've chosen " + heroName + " you need to go to the store.") ,
        choices: [
            { text: "To Walmart", next: "walmartPath" },
            { text: "To Target", next: "targetPath" }
        ]
    },
    walmartPath: {
        text: "You get to Walmart for your groceries but a kid stops you and begs for money. Do you give the kid money? (You have $20)",
        choices: [
            { text: "Give money", next: "donationPath" },
            { text: "Decline", next: "declinePath" }
        ]
    },

    targetPath: {
        text: "You get to Target for your groceries but a homeless guy stops you and begs for money. Do you give the homeless guy money? (You have $20)",
        choices: [
            { text: "Give money", next: "donationPath" },
            { text: "Decline", next: "declinePath" }
        ]
    },

    declinePath: {
        text: "Wow, you seriously declined, jerk move but we can move on from it. You continue your shopping and you have the options of buying milk, eggs, sausage, and juice. (There's a lot of weight to these options)",
        choices: [
            { text: "Get the milk", next: "milkPath" },
            { text: "Get the eggs", next: "eggPath" },
            { text: "Get the sausage", next: "sausagePath" },
            { text: "Get the juice", next: "juicePath" }
        ]
        },
    
    juicePath: {
            text: "Awesome the juice was only $2, which is a lot but at least you have them. Do you wish to continue shopping?",
            choices: [
                { text: "Keep Shopping", next: "juicierPath" },
                { text: "No go home", next: "leavePath" }
            ]
        },
    
    juicierPath: {
            text: "Oh, I forgot to mention that this decision leads to an apocalypse. Yes, choosing to continue to shop was a bad idea. That's just great. Well I need to get going, you should too and maybe next time don't end the world?",
        },
    
    
    sausagePath: {
            text: "Awesome the sausage were only $7, which is a lot but at least you have them. Do you wish to continue shopping?",
            choices: [
                { text: "Keep Shopping", next: "shoppingsausagePath" },
                { text: "No go home", next: "leavePath" }
            ]
        },
    
    leavePath: {
            text: "Then I guess we'll call it a day " + heroName + ", until next time.",  
        },
    
    shoppingsausagePath: {
            text: "Oh no, your bullies are walking towards you " + heroName + " what are you gonna do?",
            choices: [
                { text: "Book it", next: "runfrombulliesPath" },
                { text: "Show them you're not messing around", next: "fightPath" }
            ]
        },
    
    runfrombulliesPath: {
            text: "You successfully got away " + heroName + ", unfortunetly your shopping trip is over now. Until next time",
            
        },
    
    fightPath: {
            text: "Okay then " + heroName + ", there's five of them and they're about to jump you. Since you've been watching Rocky recently, these chumps should be nothing, are you still ready to fight?",
            choices: [
                { text: "Beg for mercy", next: "nomercyPath" },
                { text: "Beat them up", next: "beatupPath" }
            ]
        },
    
    beatupPath: {
            text: "Okay I need to tell you that these are twelve year olds " + heroName + ", do you still want to fight them?",
            choices: [
                { text: "No I'm okay", next: "nofightingPath" },
                { text: "Beat them up", next: "beatupkidsPath" }
            ]
        },
    
    beatupkidsPath: {
            text: "You are a pyscho  " + heroName + ", you beat up kids and called it a day. Such a shame, thought you were different.",

        },
    
    nofightingPath: {
            text: "You fell for it, they are your bullies for a reason " + heroName + ", so the kids beat you up and stole your money. So go home and think about your actions. Until next time.",
    
        },
    
    nomercyPath: {
            text: "I hate to break it to you " + heroName + ", since you were originally down to fight them, you don't exactly have a choice. Choose your first move.",
            choices: [
                { text: "Run away", next: "failedrunPath" },
                { text: "Punch the first one who makes a move", next: "punchoutPath" },
                { text: "Flying Kick", next: "flyingkickPath" }
            ]
        },
    
    failedrunPath: {
            text: "Since you let them get too close to you " + heroName + ", your twelve year old bullies beat you up and stole the money you had and the sausages you were going to buy. Since you have no money left, your experience is over. Until next time.",
            
        },
    
    punchoutPath: {
            text: "I love the effort " + heroName + ", but your bullies accounted for you swinging like a wuss and beat you up. They left you broke and took your sausage you wanted to buy. Since you have no money left, your experience is over. Until next time.",
            
        },
    
    flyingkickPath: {
            text: "Wow you have guts " + heroName + ", your bullies didn't account for the fact you could do a flying kick. You kicked them all in the face like Bruce Lee and successfully beat up twelve year olds. Good job. Do you want juice after that amazing stunt, you have just enough for it?",
            choices: [
                { text: "Yes", next: "yesjuicePath" },
                { text: "No", next: "nojuicePath" }
            ]
        },
    
    yesjuicePath: {
            text: "You bought the sausage and juice. You are left with no money " + heroName + ", so you head home and enjoy your victory of the day.",

        },
    
    nojuicePath: {
            text: "You bought the sausage and you are left with no money " + heroName + ", so you head home and enjoy your victory of the day.",

        },
    
    
        eggPath: {
            text: "Awesome the eggs were only $10, which is a lot but at least you have them. Do you wish to continue shopping?",
            choices: [
                { text: "Keep Shopping", next: "shoppingPath" },
                { text: "No go home", next: "leavePath" }
            ]
        },
        
        shoppingPath: {
            text: "So you want this full experience huh, well I've had enough " + heroName + " so I'll let you redeem yourself with your donation and choose wisely.",
            choices: [
                { text: "Donate this time?", next: "redemptionPath" },
                { text: "No go home", next: "nodonoPath" }
            ]
        },

        redemptionPath: {
            text: "Great job " + heroName + " you actually win $1,000,000 because you redeemed yourself. Good job.",
            
        },

        nodonoPath: {
            text: "Yikes " + heroName + " you actually didn't redeem yourself but that was your choice I suppose. Well now you go home and call it a day.",
            
        },


    donationPath: {
        text: "Well it was super nice of you to donate but now your story is over " + heroName + ", because you actually gave up all $20. Until next time " + heroName + ".",
    },

    milkPath: {
        text: "I hate to break it to you but the milk costed you your whole $20 so the shopping trip is donezo. Since all you can get was milk you might as well go home. Yes or no?",
        choices: [
            { text: "Yes", next: "yesPath" },
            { text: "No", next: "noPath" }
        ]
    },

    yesPath: {
        text: "I'm glad you agreed because you didn't have a choice. Now enjoy your milk and have sweet dreams king.",
    },

    noPath: {
        text: "That's too damn bad unfortunetly king. Head on home, enjoy your milk and call it a day.",
    },
        
    
}

        const storyTextElement = document.getElementById("story-text");
    const choicesElement = document.getElementById("choices");
    let currentScene = "start";

    function displayScene(sceneName) {
        const scene = story[sceneName];
        storyTextElement.textContent = scene.text;
        choicesElement.innerHTML = "";

        scene.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.addEventListener("click", () => {
                currentScene = choice.next;
                displayScene(currentScene);
            });
            choicesElement.appendChild(button);
        });
    }
    displayScene(currentScene)


}
     




 