//////////////////////////////////////////////////--UI Components
//Side menu toggle
const side_menu_button = document.getElementById("slider_button");

side_menu_button.addEventListener('click', _ => {
    document.getElementById('sidebar').classList.toggle('collapsed');
})



//pages variables
const make_potato_page = document.getElementById("make_page");
const potato_market_page = document.getElementById("potato_market_page");
const potato_makers_page = document.getElementById("potato_makers_page");
const statistics_page = document.getElementById("statistics_page");
const settings_page = document.getElementById("settings_page");
const howtoplay_page = document.getElementById("howtoplay_page");
const about_page = document.getElementById("about_page");

var current_page = document.getElementById("make_page")
current_page.style.display = "block";


function show_make_page() {

    current_page.style.display = "none";
    current_page = make_page
    current_page.style.display = "block";

}


function show_potato_market_page() {

    current_page.style.display = "none";
    current_page = potato_market_page
    current_page.style.display = "block";

}

function show_potato_makers_page() {

    current_page.style.display = "none";
    current_page = potato_makers_page
    current_page.style.display = "block";

}

function show_statistics_page() {

    current_page.style.display = "none";
    current_page = statistics_page
    current_page.style.display = "block";

}

function show_settings_page() {

    current_page.style.display = "none";
    current_page = settings_page
    current_page.style.display = "block";

}

function show_howtoplay_page() {

    current_page.style.display = "none";
    current_page = howtoplay_page
    current_page.style.display = "block";

}


function show_about_page() {

    current_page.style.display = "none";
    current_page = about_page
    current_page.style.display = "block";

}

//////////////////////////////////////////////////--Infobar

var info = document.getElementById("info");

function infobar(input) {

    info.innerHTML = input

};

//////////////////////////////////////////////////--DEBUG TESTING

function debug_call() {

    infobar("You made one potato!");

}

//////////////////////////////////////////////////--GAME MECHANICS

//main variables for counting potatoes
var potato_count = 0
var potato_count_display = document.getElementsByClassName("potato_count");

//total potatoes
var potato_tot = 0
var potato_tot_display = document.getElementsByClassName("potato_tot");

var potato_price = 1
var potato_price_display = document.getElementById("potato_price")

var money = 0
var money_display = document.getElementById("money_count")


//this variable defines the power of one click
var potato_power = 1

//game checks
potato_count_display[0].innerHTML = potato_count
potato_count_display[1].innerHTML = potato_count

potato_tot_display[0].innerHTML = potato_tot
potato_tot_display[1].innerHTML = potato_tot

potato_price_display.innerHTML = potato_price
money_display.innerHTML = money


//main loop of the game, checks and updates everything
function game_update() {

    potato_count_display[0].innerHTML = potato_count
    potato_count_display[1].innerHTML = potato_count

    potato_tot_display[0].innerHTML = potato_tot
    potato_tot_display[1].innerHTML = potato_tot

    potato_price_display.innerHTML = potato_price
    money_display.innerHTML = money


}
setInterval(game_update, 100)


function make() {

    potato_count += 1 * potato_power
    potato_tot += 1 * potato_power
    flash_make()

}

//////////////////////////////////////////////////--GAME FLASHES

function flash_make() {

    function flash_in() {

        document.getElementById("main_counter").style.color = "olive";
        document.getElementById("content").style.background = "black";

        potato_count_display[0].style.color = "yellow";

    }
    function flash_out() {
        potato_count_display[0].style.color = "white";
        document.getElementById("main_counter").style.color = "white";
        document.getElementById("content").style.background = "var(--bg-color)";




    }

    flash_in()
    setTimeout(flash_out, 100)

}