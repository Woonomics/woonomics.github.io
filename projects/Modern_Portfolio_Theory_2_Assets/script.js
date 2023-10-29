


let e_1 = 0.38;
let e_2 = 0.22;

let var_1 = 0.023;
let var_2 = 0.003;

let rho = 0.63;

let a = 0;
let b = 0;
let c = 0;




let mpv = compute_mpv_wealth(e_1, e_2, var_1, var_2, rho);
let mpv_variance = compute_parabola_parameters(var_1, var_2, rho)


function compute_mpv_wealth(_e_1, _e_2, _var_1, _var_2, _rho) {

    let num = _var_2 - (_rho * Math.sqrt(_var_2) * Math.sqrt(_var_1))
    let den = _var_1 - (2 * _rho * Math.sqrt(_var_2) * Math.sqrt(_var_1)) + _var_2

    let out = num / den
    //console.log(out)
    return out

};

function compute_parabola_parameters(_var_1, _var_2, _rho){
    a = _var_1 - (2 * _rho * Math.sqrt(_var_2) * Math.sqrt(_var_1)) + _var_2
    b = 2*(_rho * Math.sqrt(_var_2) * Math.sqrt(_var_1) - _var_2)
    c = _var_2
    out = a*mpv*mpv + b*mpv + c 

    return out

}

function generateParabolaDataset(_var_1, _var_2, _rho) {
    let dataset = [];
    for (let i = -2; i <= 2; i += 0.02) {
        a_ = _var_1 - (2 * _rho * Math.sqrt(_var_2) * Math.sqrt(_var_1)) + _var_2;
        b_ = 2 * (_rho * Math.sqrt(_var_2) * Math.sqrt(_var_1) - _var_2);
        c_ = _var_2;
        out_ = a_ * i * i + b_ * i + c_;
        dataset.push({ x: i, y: out_ });
    }
    return dataset;
}

let dataset_parabula = generateParabolaDataset(var_1, var_2, rho);



const data = {
    datasets: [{
        type: 'scatter',
        label: '',
        data: [{ x: mpv, y: 1 }],
        backgroundColor: 'blue', // Color of the point
    },
    {
        type: 'line',
        label: 'Parabola',
        data: dataset_parabula,
        borderColor: 'lightblue',
        borderWidth: 1,
        fill: false,
        pointRadius: 0,
    }]
};



// Configuration options for the scatter chart
const options = {
    responsive: true,
    legend: {
        display: false // Hide the legend
    },
    maintainAspectRatio: false,
    scales: {
        x: {
            beginAtZero: true,
            min: -2,  // Adjust the X-axis minimum and maximum as needed
            max: 2,
            grid: {
                display: true,
                drawBorder: false,
                color: (context) => context.tick.value === 0 ? 'red' : 'rgba(0, 0, 0, 0.1)', // Color for the gridline at x=0
                lineWidth: (context) => context.tick.value === 0 ? 2 : 1, // Line width for the gridline at x=0
            },
            title: {
                display: true, // Display the title
                text: 'Wealth invested in asset 1', // Label text for the x-axis
                font: {
                    size: 11, // Adjust font size as needed
                }
            }
        },
        y: {
            beginAtZero: true,
            min: 0,  // Adjust the Y-axis minimum and maximum as needed
            max: 0.005,
            title: {
                display: true, // Display the title
                text: 'Variance of Portfolio', // Label text for the x-axis
                font: {
                    size: 11, // Adjust font size as needed
                }
            }
        },

    },
    plugins: {
        legend: {
            display: false, // Set this to true if you want to display the overall legend
        },
    },
};

// Get the canvas element by id and create the scatter chart
const ctx = document.getElementById('chart').getContext('2d');
const scatterChart = new Chart(ctx, {

    data: data,
    options: options
});


// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the range input and the element to display the value
    const rangeInput = document.getElementById("formControlRange");
    const rangeValueElement = document.getElementById("rangeValue");
    const mpv_wealth = document.getElementById("mpv_wealth");
    const mpv_variance_ = document.getElementById("mpv_variance");
    
    // Initialize a variable to store the value
    let variableValue = 0;

    // Function to update the variable and display the value
    function updateVariableValue() {
        variableValue = rangeInput.value;
        rho = variableValue;
        rangeValueElement.textContent = variableValue;
        mpv = compute_mpv_wealth(e_1, e_2, var_1, var_2, rho);
        mpv_wealth.textContent = mpv;
        dataset_parabula = generateParabolaDataset(var_1, var_2, rho);
        mpv_variance = compute_parabola_parameters(var_1, var_2, rho)
        mpv_variance_.textContent = mpv_variance;

        scatterChart.data.datasets[0].data = [{ x: mpv, y: mpv_variance }];
        scatterChart.data.datasets[1].data = dataset_parabula;
        scatterChart.update();
    }

    // Add an input event listener to the range input
    rangeInput.addEventListener("input", updateVariableValue);


    // Call the updateVariableValue function to set the initial value
    updateVariableValue();
});

