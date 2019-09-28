//declaring production variables
var update_time = 1000
var money = 0

var potato = 0
var potato_price = 1

var potato_price_speed = 5000 //10.000 = 10 secs
var potato_price_anim_speed = 300

var potato_time = 0
var potato_time_seconds = potato_time/1000


//log variables
var i = 0;
var tempstring = ''
var txt = ``


//game progression
var potato_tot = 0;



// this function updates all variables every "update_time" milliseconds
function gameloop() {

    $("#money").html(money)
    $("#potato").html(potato)
    $("#potato_price").html(potato_price)
    $("#potato_time").html(potato_time_seconds)
    $("#potato_tot").html(potato_tot)

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
    txt = `You made 1 potato, keep on going.`
    
    potato_flash()
    salesWriter()
}

function sell() {

    type_speed = 30
    money += potato*potato_price

    if (potato == 0) {
        txt = `You sold no potatoes. You should make some.`

    }
    if (potato == 1) {
        txt = `You sold 1 potato for ${potato_price}$!`
        money_flash()
        log_flash_green()
    }
    if (potato > 1) {
        txt = `You sold ${potato} potatoes for ${potato_price}$ each, making ${potato*potato_price}$!`
        money_flash()
        log_flash_green()
    }
    
    
    salesWriter()
    
    potato = 0
    
}

$("#sell").click(sell)
$("#make").click(make)


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



// terminal log

function salesWriter() {

    var end = 0

    if (i < txt.length) {
        
        tempstring += txt.charAt(i)
        $("#log_active").html(tempstring)
        
        i++
    }
    
    if (i == txt.length) {

        i = 0
        end = 1
        if (end == 1) {

            tempstring = ``
            txt = ``
            
            return
        }
         
    }

    setTimeout(salesWriter, type_speed);
}


/////flashing functions

function money_flash() {

    function flashin() {  
        $('#money_bar').css({"color":"black","background-color":"yellow"});
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







////////////mathematical functions
function rand_int_range(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
  }