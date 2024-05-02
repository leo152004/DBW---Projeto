let topic = "";
export { topic };
const { processData } = require('./server');

// Use the processData function
const response = processData();
console.log(response);
document.getElementById('terra').addEventListener('click', function() {
    topic = "Planeta Terra";
});