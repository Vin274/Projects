let counter = 0;


function increaseCount() {
    document.getElementById('increaseBtn');
    counter += 1;
    document.getElementById('count').textContent = counter;  
}

function decreaseCount() {
    document.getElementById('decreaseBtn');
    counter -= 1;
    document.getElementById('count').textContent = counter;
}
function resetCount() {
    document.getElementById('resetBtn');
    counter = 0;
    document.getElementById('count').textContent = counter;
    
}