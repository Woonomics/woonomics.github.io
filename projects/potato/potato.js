
//declaring production variables
var update_time = 1000
var money = 0

var potato = 0
var potato_price = 1

var potato_price_speed = 5000 //10.000 = 10 secs
var potato_price_anim_speed = 300

var potato_time = 0
var potato_time_seconds = potato_time/1000


//upgrades
var potato_maker_count = 0;
var potato_maker_price = 100;



//log variables for SALES
var iS = 0;
var tempstringSales = ''
var txtSales = ``
//log variables for PROGRESS
var iP = 0;
var tempstringProg = ''
var txtProg = ``


//game progression
var potato_tot = 0;
var money_tot = 0;
//progress checks
var prog0 = 0;
var prog1 = 0;
var prog2 = 0;
//game hides
$("#progress0").css({"display":"none"});
$("#progress1").css({"display":"none"});
$("#progress2").css({"display":"none"});
$("#potato_maker_div").css({"display":"none"});

//first game checks
$("#money").html(money)
$("#potato").html(potato)
$("#potato_tot").html(potato_tot)
$("#potato_price").html(potato_price)
$("#potato_time").html(potato_time_seconds)

$("#potato_maker_count").html(potato_maker_count)
$("#potato_maker_price").html(potato_maker_price)
//first progress check call
progressCheck()
// this function updates all variables every "update_time" milliseconds
function gameloop() {

    $("#money").html(money)
    $("#potato").html(potato)
    $("#potato_tot").html(potato_tot)
    $("#potato_price").html(potato_price)
    $("#potato_time").html(potato_time_seconds)

    progressCheck()
}
setInterval(gameloop, update_time)



// production functions
function potatoloop() {
    potato ++
    potato_tot ++
    potato_flash()
}
if (potato_time != 0) {
    setInterval(potatoloop, potato_time)
}

function make() {
    potato ++
    potato_tot ++
    $("#potato").html(potato)

    type_speed = 30
    txtSales = `You made 1 potato, keep on going.`
    
    game_started = 1
    potato_flash()
    salesWriter()

}

function sell() {

    type_speed = 30
    money += potato*potato_price
    money_tot += money

    if (potato == 0) {
        txtSales = `You sold no potatoes. You should make some.`

    }
    if (potato == 1) {
        txtSales = `You sold 1 potato for ${potato_price}$!`
        money_flash()
        log_flash_green()
    }
    if (potato > 1) {
        txtSales = `You sold ${potato} potatoes for ${potato_price}$ each, making ${potato*potato_price}$!`
        money_flash()
        log_flash_green()
    }
    
    
    salesWriter()
    
    potato = 0
    
}


function potato_maker() {

    $("#potato_maker_div").toggle()
}

function buy_potato_maker() {

    if (money <= potato_maker_price) {

        flash_potato_maker_RED()
        return

    }
    
    if (money >= potato_maker_price){

        money -= potato_maker_price
        potato_maker_count++

        potato_maker_price += potato_maker_count*potato_maker_price/10

        $("#potato_maker_count").html(potato_maker_count)
        $("#potato_maker_price").html(potato_maker_price)

        setInterval(potato_maker_production, 5000)
        $("#potato").html(potato)
        flash_potato_maker_GREEN()
        return
    }    
}

potato_maker_production()
function potato_maker_production() {
    
    if (potato_maker_count != 0){

        potato += 1
        flash_potato_maker_plus_one()
    }
}


$("#sell").click(sell)
$("#make").click(make)

$("#potato_maker").click(potato_maker)
$("#buy_potato_maker").click(buy_potato_maker)

//potato_price changes
price_change()
function price_change(){

    function pricetime(){
        
        if (potato_price === 1){
            var change = rand_int_range(0, 2)
            potato_price += change

            if (change === 0){return}

            $("#potato_price").html(potato_price)
            potato_price_flash_UP()
            
            return
        }
        else
        {
            var change = rand_int_range(0, 2)
            potato_price -= change

            if (change === 0){return}

            if (potato_price < 1){
                
                potato_price = 1
                potato_price_flash_ONE()
                $("#potato_price").html(potato_price)
                return
            }

            $("#potato_price").html(potato_price)
            potato_price_flash_DOWN()
            
            return
        }
    
        return    
    }
    setInterval(pricetime, potato_price_speed)

}



////// terminal logs

function salesWriter() {

    var end = 0

    if (iS < txtSales.length) {
        
        tempstringSales += txtSales.charAt(iS)
        $("#log_active").html(tempstringSales)
        
        iS++
    }
    
    if (iS == txtSales.length) {

        iS = 0
        end = 1
        if (end == 1) {

            tempstringSales = ``
            txtSales = ``
            
            return
        }
         
    }

    setTimeout(salesWriter, type_speed);
}

function ProgWriter() {

    var endP = 0

    if (iP < txtProg.length) {
        
        tempstringProg += txtProg.charAt(iP)
        $("#log_progress").html(tempstringProg)
        
        iP++
    }
    
    if (iP == txtProg.length) {

        iP = 0
        endP = 1
        if (endP == 1) {

            tempstringProg = ``
            txtProg = ``
            
            return
        }
         
    }

    setTimeout(ProgWriter, type_speed);
}

/////flashing functions

function money_flash() {

    function flashin() {  
        $('#money_bar').css({"color":"green","background-color":"yellow"});
    }
    function flashout() {  
        $('#money_bar').css({"color":"white","background-color":"#262626"});
    }
    flashin()
    setTimeout(flashout, 100)

}

function potato_flash() {

    function flashin() {  
        $('#potato_bar').css({"color":"black","background-color":"darkgoldenrod"});
    }
    function flashout() {  
        $('#potato_bar').css({"color":"white","background-color":"#262626"});
    }
    flashin()
    setTimeout(flashout, 100)

}

function log_flash_green() {

    function flashin() {  
        $('#log_bar').css({"color":"white","background-color":"darkgreen"});
    }
    function flashout() {  
        $('#log_bar').css({"color":"white","background-color":"#262626"});
    }
    flashin()
    setTimeout(flashout, 1780)
    
    function flashin2() {
        $('#log_bar').css({"color":"green","background-color":"#262626"});
    }
    setTimeout(flashin2, 1800)
    setTimeout(flashout, 2000)

}

function potato_price_flash_UP() {

    function flashin() {  
        $('#potato_price_bar').css({"color":"white","background-color":"green"});
    }
    function flashout() {  
        $('#potato_price_bar').css({"color":"white","background-color":"#262626"});
    }
    flashin()
    setTimeout(flashout, potato_price_anim_speed)

}

function potato_price_flash_DOWN() {

    function flashin() {  
        $('#potato_price_bar').css({"color":"white","background-color":"brown"});
    }
    function flashout() {  
        $('#potato_price_bar').css({"color":"white","background-color":"#262626"});
    }
    flashin()
    setTimeout(flashout, potato_price_anim_speed)

}

function potato_price_flash_ONE() {

    function flashin() {  
        $('#potato_price_bar').css({"color":"red","background-color":"black"});
    }
    function flashout() {  
        $('#potato_price_bar').css({"color":"white","background-color":"#262626"});
    }
    flashin()
    setTimeout(flashout, potato_price_anim_speed)

}

function flash_potato_maker_RED() {
    
    function flashin() {  
        $('#potato_maker_bar').css({"color":"white","background-color":"red"});
    }
    function flashout() {  
        $('#potato_maker_bar').css({"color":"black","background-color":"darkgoldenrod"});
    }
    flashin()
    setTimeout(flashout, potato_price_anim_speed)
}

function flash_potato_maker_GREEN() {
    
    function flashin() {  
        $('#potato_maker_bar').css({"color":"white","background-color":"green"});
        $('#potato_maker_count_bar').css({"color":"white","background-color":"green"});
    }
    function flashout() {  
        $('#potato_maker_bar').css({"color":"black","background-color":"darkgoldenrod"});
        $('#potato_maker_count_bar').css({"color":"black","background-color":"darkgoldenrod"});
    }
    flashin()
    setTimeout(flashout, potato_price_anim_speed)
}

function flash_potato_maker_plus_one() {
    
    function flashin() {  
        $('#potato_maker').css({"color":"white","background-color":"purple"});
        $('#potato_bar').css({"color":"white","background-color":"purple"});
    }
    function flashout() {  
        $('#potato_maker').css({"color":"white","background-color":"#262626"});
        $('#potato_bar').css({"color":"white","background-color":"#262626"});
    }
    flashin()
    setTimeout(flashout, potato_price_anim_speed)
}


//////progress function
function progressCheck(){

    
    if (potato_tot === 0){

        $("#progress0").css({"display":"none"});
        txtProg = `Come on, click "Make potatoes"!`
        
        if (prog0 === 0){

            type_speed = 60
            ProgWriter()
            prog0 = 1
        }
        

    }

    if (potato_tot >= 5){
        
        $("#progress0").css({"display":"inline-block"});
        txtProg = `Now you can sell potatoes, and earn money!`
        
        if (prog1 === 0){

            type_speed = 60
            ProgWriter()
            prog1 = 1
        }
    }

    if (money_tot >= 25){
    
        $("#progress2").css({"display":"inline-block"});
        txtProg = `What do you need money for? Making more potatoes of course!`
        
        if (prog2 === 0){

            type_speed = 60
            ProgWriter()
            prog2 = 1
        }

    }


}








////////////mathematical functions
function rand_int_range(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
}