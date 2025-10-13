// Function declarations
function incrementCounter() {
	var spanElement = document.getElementById('counter');
	var count = spanElement.getAttribute('numberOfClicks');
    count++;    
    spanElement.innerText = count;
    spanElement.setAttribute('numberOfClicks', count);
}

function toggleVisibility() {
    var chartImage = document.getElementById('chart1');
    if (chartImage.style.display === "none") {
        chartImage.style.display = "block";
    } else {
        chartImage.style.display = "none";
    }
}

a = 1
b = 10
c = a + b
d = (a+b).toString()
e = b+a.toString()
f = parseInt(b+a.toString())

date = new Date()
date1 = date.toLocaleString("en-GB", {day: "numeric", month:"2-digit", year:"numeric", hour:"2-digit", hour12:true, minute: "2-digit", second: "2-digit"}).replace(/\//g, '-')
date2 = date.toLocaleString("en-CA", {year: "numeric", month: "2-digit", day: "2-digit", hour:"2-digit", hour12:false, minute: "2-digit", second: "2-digit"})
date3 = date.toLocaleString(undefined, {weekday: "long", month:"numeric", day: "numeric", hour:"2-digit", hour12:false, minute: "2-digit", second: "2-digit"})

// Script calls
document.getElementById('incrementButton').addEventListener('click', incrementCounter);
document.getElementById('chartToggle').addEventListener('click', toggleVisibility);