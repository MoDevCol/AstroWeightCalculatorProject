var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];

    // We are going to solve this by breaking the problem into three parts. 
    // Programmers like automating things, we'll populate the HTML drop down options using code, 
    // instead of having to type out all the values. 
    // Create a function that does the some math and gives us the new weight. 
    // Then create a function that responds when the user clicks on the button. 

    // 1. Populate the dropdown element with the data found in the planets array. 
    // The value of each option should be the planet's name. 
    // Use the following built-in methods: 
    // `.forEach` `document.createElement` `document.getElementById` `.appendChild` 
    // 1. Populate the dropdown element with the data found in the planets array.
    function populateDropDown() {
    const select = document.getElementById("planets");
    planets.forEach(function(planet) {
        const option = document.createElement("option");
        option.value = planet[0];
        option.textContent = planet[0];
        select.appendChild(option);
    });
}
document.addEventListener('DOMContentLoaded', populateDropDown);
document.getElementById("calculate-button").onclick = handleClickEvent;

// 2. Calculate weight for a given planet
function calculateWeight(weight, planetName) {
    const planet = planets.find(p => p[0] === planetName);
    if (!planet) {
        console.error("Planet not found in the planets array.");
        return null;
    }
    return weight * planet[1];
    }
// 3. Handle the button click event
function handleClickEvent(e) {
    const userWeight = parseFloat(document.getElementById('user-weight').value);
    if (isNaN(userWeight) || userWeight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    const planetName = document.getElementById('planets').value;
    const result = calculateWeight(userWeight, planetName);

    if (result === null) {
        alert("An error occurred while calculating the weight.");
        return;
    }

    const message = `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`;
    const outputElement = document.getElementById('output');
    outputElement.textContent = message; // Update the content of the output element
    outputElement.style.display = 'block'; // Ensure the message is visible

}



    // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.
    