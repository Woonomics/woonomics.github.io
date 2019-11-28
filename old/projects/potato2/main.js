//////////////////////////////////////////////////--UI Components
//Side menu toggle
const side_menu_button = document.getElementById("slider_button");

side_menu_button.addEventListener('click', _ => {
    document.getElementById('sidebar').classList.toggle('collapsed');
})



//pages variables
const make_potato_page = document.getElementById("make_page");
const potato_makers_page = document.getElementById("potato_makers_page");
const upgrades_page = document.getElementById("upgrades_page");
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


function show_potato_makers_page() {

    current_page.style.display = "none";
    current_page = potato_makers_page
    current_page.style.display = "block";

}


function show_upgrades_page() {

    current_page.style.display = "none";
    current_page = upgrades_page
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
var power = 1
var power_display = document.getElementById("power")

//game checks

potato_count_display[0].innerHTML = potato_count

potato_tot_display[0].innerHTML = potato_tot

potato_price_display.innerHTML = potato_price
money_display.innerHTML = money

power_display.innerHTML = power



//main loop of the game, checks and updates everything
function game_update() {

    potato_count_display[0].innerHTML = potato_count


    potato_tot_display[0].innerHTML = potato_tot


    money_display.innerHTML = money

    power_display.innerHTML = power

    price_change()
    potato_price_display.innerHTML = potato_price


}
setInterval(game_update, 100)


function make() {

    potato_count += 1 * power
    potato_tot += 1 * power
    flash_make()

}

function sell() {

    if (potato_count > 0){

        money += potato_count*potato_price
        potato_count = 0
        flash_sell()

        return



    }else{
        
        flash_sell_no()
        return

    }
    
}

var prices = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5]
function price_change() {

    var choice = prices[Math.floor(Math.random()*prices.length)];

    switch(choice){
        case 0:
                break;
        case 1:
            potato_price = 1;

            break;
        case 2:
            potato_price = 2;

            break;
        case 3:
            potato_price = 3;

            break;
        case 4:
            potato_price = 4;

            break;
        case 5:
            potato_price = 5;

            break;
    }
    
}

function increase_power() {

    power += 1

}


function decrease_power() {

        if (power > 1){
            power -= 1
            power_display.innerHTML = power
        }
        if (power > 10){
            power -= 5
            power_display.innerHTML = power
        }

}

setInterval(decrease_power, 500)





//////////////////////////////////////////////////--GAME FLASHES

function flash_make() {

    function flash_in() {

        document.getElementById("main_counter").style.color = "olive";
        document.getElementById("content").style.background = "black";

        document.getElementById("sell_potato").style.background = "black";
        document.getElementById("price_counter").style.background = "black";

        document.getElementById("power_counter").style.background = "black";
        document.getElementById("make_power").style.background = "black";



        potato_count_display[0].style.color = "yellow";
        money_display.style.color = "olive";
        

    }
    function flash_out() {

        potato_count_display[0].style.color = "white";
        potato_tot_display[0].style.color = "white";
        money_display.style.color = "white";
        

        document.getElementById("main_counter").style.color = "white";
        document.getElementById("content").style.background = "var(--bg-color)";

        document.getElementById("sell_potato").style.background = "linear-gradient(270deg, rgba(38,38,38,1) 0%, rgba(12,55,0,0.5) 50%, rgba(38,38,38,1) 100%)";
        document.getElementById("price_counter").style.background = "linear-gradient(270deg, rgba(38,38,38,1) 0%, rgba(5, 24, 0, 0.5) 50%, rgba(38,38,38,1) 100%)";

   
        document.getElementById("power_counter").style.background = "linear-gradient(270deg, rgba(38,38,38,0.5) 0%, rgba(54,0,0,0.5) 50%, rgba(38,38,38,0.5) 100%)";
        document.getElementById("make_power").style.background = "linear-gradient(270deg, rgba(38,38,38,0.5) 0%, rgba(74,0,0,0.5) 50%, rgba(38,38,38,0.5) 100%)";

    }

    flash_in()
    setTimeout(flash_out, 100)

}

function flash_sell() {

    function flash_in() {

        document.getElementById("main_counter").style.color = "DarkGreen";
        document.getElementById("content").style.background = "DarkGreen";

        document.getElementById("sell_potato").style.background = "DarkGreen";

        document.getElementById("sell_potato").style.color = "black";
        document.getElementById("price_counter").style.background = "DarkGreen";
        document.getElementById("make_potato").style.background = "DarkGreen";

        document.getElementById("power_counter").style.background = "DarkGreen";
        document.getElementById("make_power").style.background = "DarkGreen";



        potato_count_display[0].style.color = "red";
        money_display.style.color = "yellow";


    }
    function flash_out() {

        potato_count_display[0].style.color = "white";
        money_display.style.color = "white";

        document.getElementById("main_counter").style.color = "white";
        document.getElementById("content").style.background = "var(--bg-color)";

        document.getElementById("sell_potato").style.color = "white";
        document.getElementById("sell_potato").style.background = "linear-gradient(270deg, rgba(38,38,38,1) 0%, rgba(12,55,0,0.5) 50%, rgba(38,38,38,1) 100%)";
        document.getElementById("price_counter").style.background = "linear-gradient(270deg, rgba(38,38,38,1) 0%, rgba(5, 24, 0, 0.5) 50%, rgba(38,38,38,1) 100%)";


        document.getElementById("make_potato").style.background = "linear-gradient(270deg, rgba(38,38,38,1) 0%, rgba(55,53,0,0.5) 50%, rgba(38,38,38,1) 100%)";
        
        document.getElementById("power_counter").style.background = "linear-gradient(270deg, rgba(38,38,38,0.5) 0%, rgba(54,0,0,0.5) 50%, rgba(38,38,38,0.5) 100%)";
        document.getElementById("make_power").style.background = "linear-gradient(270deg, rgba(38,38,38,0.5) 0%, rgba(74,0,0,0.5) 50%, rgba(38,38,38,0.5) 100%)";

    }

    flash_in()
    setTimeout(flash_out, 100)

}

function flash_sell_no() {

    function flash_in() {

        document.getElementById("main_counter").style.color = "grey";
        document.getElementById("content").style.background = "grey";

        document.getElementById("make_potato").style.background = "grey";

        document.getElementById("sell_potato").style.background = "red";
        document.getElementById("price_counter").style.background = "grey";

        document.getElementById("power_counter").style.background = "grey";
        document.getElementById("make_power").style.background = "grey";

        potato_count_display[0].style.color = "grey";
        money_display.style.color = "grey"



    }
    function flash_out() {

        potato_count_display[0].style.color = "white";
        money_display.style.color = "white";

        document.getElementById("main_counter").style.color = "white";
        document.getElementById("content").style.background = "var(--bg-color)";

        document.getElementById("sell_potato").style.background = "linear-gradient(270deg, rgba(38,38,38,1) 0%, rgba(12,55,0,0.5) 50%, rgba(38,38,38,1) 100%)";
        document.getElementById("price_counter").style.background = "linear-gradient(270deg, rgba(38,38,38,1) 0%, rgba(5, 24, 0, 0.5) 50%, rgba(38,38,38,1) 100%)";

        document.getElementById("make_potato").style.background = "linear-gradient(270deg, rgba(38,38,38,1) 0%, rgba(55,53,0,0.5) 50%, rgba(38,38,38,1) 100%)";
        
        document.getElementById("power_counter").style.background = "linear-gradient(270deg, rgba(38,38,38,0.5) 0%, rgba(54,0,0,0.5) 50%, rgba(38,38,38,0.5) 100%)";
        document.getElementById("make_power").style.background = "linear-gradient(270deg, rgba(38,38,38,0.5) 0%, rgba(74,0,0,0.5) 50%, rgba(38,38,38,0.5) 100%)";

    }

    flash_in()
    setTimeout(flash_out, 100)

}