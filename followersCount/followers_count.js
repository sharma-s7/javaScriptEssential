let count = 0; // Initialize count to 0

function increaseCount() {
    count ++; // Increment the count by 1
    displaycount(); //Display the count
    checkcountValue(); // check count vaLue and display messages
}

function displaycount() {
    document.getElementById('countDisplay').innerHTML=count; //Display the count in the HTML
}

function checkcountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! congratulations!")
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! keep it up!")
    }
}