var dictionary = {};
// using dictionary to store things
// structure of dictionary is key = name and value are skill level additional check
if (typeof(Storage) !== "undefined") {
    for (var key in localStorage) {
        try {
            var data = JSON.parse(localStorage.getItem(key));
            if (data.additonal_check === "ThisIsFormData") {
                document.getElementById('InsertHere').innerHTML += '<tr><td>' + key + '</td><td>' + data.skill +
                    '</td><td>' + data.level + '</td></tr>';
            }
        } catch (err) {;
        }
    }
}
function validateForm() {
    x = document.forms["Form-Skills"]["Name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    x = document.forms["Form-Skills"]["skill"].value;
    if (x == "") {
        alert("Skill must be filled out");
        return false;
    }
    addData();
    reset();
    alert("Your feedback has been recorded");
    return false;
}
function checkForm(){
    x = document.forms["Name-Form"]["Name"].value;
    if(x==""){
        alert("Name must be given to remove row");
        return false;
    }
    myDeleteFunction();
}
function addData() {
    var name = document.forms["Form-Skills"]["Name"].value;
    var skill = document.forms["Form-Skills"]["skill"].value;
    var l = document.getElementById("level_list");
    var level = l.options[l.selectedIndex].text;
    var additonal_check = "ThisIsFormData";
    dictionary[name] = {skill, level, additonal_check };
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(name, JSON.stringify(dictionary[name]));
    }
    document.getElementById('InsertHere').innerHTML += '<tr><td>' + name + '</td><td>' + skill + '</td><td>' + level + '</td></tr>';
}

function reset() {
    document.getElementById("Name").value = "";
    document.getElementById("skillName").value = "";
    document.getElementById("email").value = "";
}
function myDeleteFunction() {
    x = document.forms["Name-Form"]["Name"].value;
    if (typeof(Storage) !== "undefined") {
        localStorage.removeItem(x);
    }
    reset();
    alert("Your feedback has been recorded");
    location.reload();
    return false;
}