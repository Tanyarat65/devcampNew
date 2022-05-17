function myYear(selector) {

    for (let i = 1980; i <= 2005; i++) {
        selector.options[i - 1980] = new Option(i);
    }
}

function myMonth(selector) {

    for (let i = 1; i <= 12; i++) {
        selector.options[i - 1] = new Option(i);
    }
}

function myDay(selector) {
    for (let i = 1; i <= 31; i++) {
        selector.options[i - 1] = new Option(i);
    }
}
myDay(document.getElementById("day"));
myMonth(document.getElementById("month"));
myYear(document.getElementById("year"));