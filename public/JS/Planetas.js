let topic = "";
let facts = ""
//const index = require('./index.js');

import OpenAI from 'https://cdn.skypack.dev/openai';

const openai = new OpenAI({
    apiKey: "sk-proj-FwUk5TLFnSk2Op5OKNqET3BlbkFJVhrr4ndJ7ZV7upZcjqGk", dangerouslyAllowBrowser: true
});
async function seeMore(topic, facts, addHere) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." },
             { role: "user", content: `Dá-me factos sobre ${topic} para além destes: ${facts}` }],
        model: "gpt-3.5-turbo",
    });
    let factos = document.createElement('p');
    factos.textContent = completion.choices[0].message.content;
    factos.style.color = "white";
    factos.style.fontSize = "24px";
    factos.style.textAlign = "justify";
    addHere.appendChild(factos);
}

// Get all the elements with the class 'moreButton'
var moreButtons = document.getElementsByClassName('moreButton');

// Loop through the buttons and attach the event listener to each one
for (var i = 0; i < moreButtons.length; i++) {
    moreButtons[i].addEventListener('click', function(event) {
    topic = event.target.closest('section').querySelector('h2').textContent;
    facts = event.target.closest('section').querySelector('p').textContent;
    let addHere = event.target.closest('section').querySelector('p');
    seeMore(topic, facts,addHere);
})}