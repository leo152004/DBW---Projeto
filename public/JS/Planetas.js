let topic = "";
let facts = ""
//const index = require('./index.js');

import OpenAI from 'https://cdn.skypack.dev/openai';

const openai = new OpenAI({
    apiKey: "sk-proj-FwUk5TLFnSk2Op5OKNqET3BlbkFJVhrr4ndJ7ZV7upZcjqGk", dangerouslyAllowBrowser: true
});
async function seeMore(topic) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." },
             { role: "user", content: `Dá-me factos sobre ${topic}` }],
        model: "gpt-3.5-turbo",
    });
    document.getElementById("infoterra").insertAdjacentHTML("afterend", completion.choices[0].message.content);
}

document.getElementById('terra').addEventListener('click', function() {
    topic = "Planeta Terra";
    facts = document.getElementById('infoTerra').textContent
    seeMore(topic)
});