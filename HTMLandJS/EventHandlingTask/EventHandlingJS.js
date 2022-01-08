document.querySelector("button#textColour").addEventListener("click", blueToRed);
document.querySelector("button#bgColour").addEventListener("click", greenToPink);
document.querySelector("button#fonts").addEventListener("click", tnrToArial);

const blueParagraph = document.querySelector("#blueText");

function blueToRed() {
    blueParagraph.style.color = "red";
    blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
}

const greenParagraphs = document.querySelectorAll(".greenBg");

function greenToPink() {
    for (let greenParagraph of greenParagraphs) {
        greenParagraph.className = "hotpinkBg";
        greenParagraph.textContent = greenParagraph.textContent.replace("green", "hotpink");
    }
}

const tnrParagraph = document.querySelector("#tnrParagraph");

function tnrToArial() {
    tnrParagraph.style.fontFamily = "arial";
    tnrParagraph.textContent = tnrParagraph.textContent.replace("Times New Roman", "Arial");
}

//Create multiple event listeners which: Changes the first paragraph's text colour from blue to red. Changes the second paragraph's green background to pink. Change the font style of the last paragraph from Times New Roman to Arial. Create a index.js file
//and write your JavaScript code to meet the above requirements.Create a timed event of your choice
//for the Web page.Create an event listener
//for a mouse / keyboard action.