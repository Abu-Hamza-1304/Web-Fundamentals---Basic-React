/*
    NOTE: Like CSS, we can add JavaScript directly to the HTML file, but a recommended best practice is
    to save our JavaScript in a separate file, which makes it easier to reuse our JavaScript code
    across several web pages.
*/

"use strict";

const switcher = document.querySelector('.btn');
// document.querSelector() => to get the button reference

/*
In the preceding code, we use the toggle method to switch the <body> element to the dark-theme class.
This automatically applies the dark theme styles instead of light theme. However, the label for the
button also needs to be updated to show the correct theme, so you need to add an if statement to
determine the current theme, and update the button label.
*/

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
    
});