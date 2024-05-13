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
        let topic = event.target.closest('section').querySelector('h2').textContent;
        let facts = event.target.closest('section').querySelector('p').textContent;
        let addHere = event.target.closest('section').querySelector('p');
        let button = event.target.closest('section').querySelector('button');
        seeMore(topic, facts,addHere);
        button.remove();
        let timerInterval;
        Swal.fire({
            title: "Gerando Informação...",
            html: "Esta janela vai-se fechar em <b></b> milisegundos.",
            timer: 6300,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    })}