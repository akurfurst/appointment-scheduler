
document.getElementById("appointment-form").onsubmit = () => {

    clearErrors();

    let isValid = true;
    //validate first name
    let fname = document.getElementById("fname").value.trim();
    if(!fname) {
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }

    //validate last name
    let lname = document.getElementById("lname").value.trim();
    if(!lname) {
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    }

    return isValid;

}

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for(let i = 0; i < errors.length ; i++){
        errors[i].style.display = "none";
    }
}

