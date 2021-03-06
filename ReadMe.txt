REQUIREMENTS
-Have some kind of rockstar background.
-Have 9 keys
-Have the keys make a different drum sound when the user presses the specified key
-Have the keys animate, and get bigger, as well as getting a temporary border

USEFUL CODE TO EXPLORE
-data-attribute: This allows you to make up your own attribute, that you can use as long as you include the data-.
-dynamically adding classes to an element.
-Transform scale
-<kbd> tag. This is used for user keyboard input. It sounds like it could be a really cool tag to explore.

RESOURCES
keycode.info - For figuring out the key codes.


USEFUL THINGS I'VE LEARNED
-I had forgotten how to prevent my background image from shrinking when using image size cover. And I was once again reminded to use fixed at the end of background.
-For each works on querySelectorAll but for some reason it doesn't work on getElementsByClassName.
-I had completely forgotten that addEventListener() or rather that event listeners existed. I had also forgotten that in order for me to take in key inputs, you need to use keyCodes combined with the event listener.
-I also managed to to use the switch case, instead of if else statements. It took me a while to figure out how to do it, but I found out that in the switch parameter section, you use the target piece of data, and the case is the part that you compare it to. Basically the case tells it, when switch equals this case, then do this (The do this, is the part that happens after the case takes place.)
-I learned that the this keyword only targets es5 functions when when they're being called. For some reason it doesn't target es6 functions if those are the ones being called. I had heard something about this, but I'm not too sure how it works. Need to learn this deeper.
-VERY IMPORTANT!: This will avoid a ton of confusion in the future. When you pass in a parameter, in a function; besides doing everything we know it does. It also represents the function calling it, and it takes all the function's default attributes. This typically doesn't matter much when the function is created by us. But when the function is pre-made default Javascript function, it's important to know that all those attributes are stored in the parameter.
  So when you see people put in an e or event parameter in some kind of event function, that parameter represents that event function, and has all it's attributes. Check this example below.
    EXAMPLE:
      myVar.addEventListener('keydown', (e) => {
      let classSelect = (select) => {
        keyElement[select].classList.add("playing");
      }


      switch(e.keyCode){
        case 65:
        classSelect(0);
        mySound(drumBass);
        break;

        case 83:
        classSelect(1);
        return mySound(drumCymbal);
        break;
      }
    }

    NOTE: Look at the e.keycode. You're basically saying addEventListener.keycode. The e represents the addEventListener function along with all its attributes. So we're basically saying, when the addEventListener function's keycode equals 65, then make the parameter for classSelect 0. When addEventListener function's keyCode equals 83. Then make the parameter for classSelect 1 instead of 0.

THINGS TO RESEARCH
- element.addClass = "class-name";
- element.classList.add("class-name");
- element.classList.remove("class-name");
- element.toggle.toggle("class-name");
- Transition end event
- .forEach

THINGS TO PRACTICE
- setTimout() Get really good with this.
- addEventListener() Need to master this. Get good with all the different events, and how to use them.

- data-key (The -key is most likely any name you desire to give it.) html

LOGIC BRAINSTORMING
-First find out how kbd works - It's purely semantic. Doesn't have any functionality whatsoever - DONE

-Then find out how to target the keys and tie them to an event - DONE

-Then find out how to extract the sounds from the website resource you got on this project - It turns out, this website didn't give me the sounds so now, I have to find a website that does, and learn how to extract them.

-Then find out how to create a css class on the fly.

-Then use transitions and css animations to make the buttons do what you want.

-Finally test out your project to make sure it's bug free.
