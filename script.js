//variables
let button = document.querySelector("button");
let numberOfYears = document.querySelector(".number-of-years");
let submit = document.querySelector("submit");


button.onclick = function() {
    //age
    let age = document.querySelector(".age").value;
    let color = document.querySelector(".color").value;

    //messages
    if (age >= 10 && color === "blue") {
        numberOfYears.innerHTML = "numberOfYears = 10 A<br><em>Your color is Light blue!</em>";
    }
    if (age >= 20 && color === "orange") {
        numberOfYears.innerHTML = "numberOfYears = 20 B<br><em>Your color is Hot orange!</em>";
    }
    if (age >= 35 && color === "") {
        numberOfYears.innerHTML = "numberOfYears = 35 C<br><em> Your color isDeep Saffron!</em>";
    }
    if (age > 50 || age > 200) {
        numberOfYears.innerHTML = "numberOfYears = 50 D<br><em>Your color is Light sky blue!</em>";
    }

    document.querySelector("button").onclick = function() {
        let input = document.querySelector("input").value;
        document.querySelector("body").innerHTML = "<h1>" + input + "</h1>";
    };

};