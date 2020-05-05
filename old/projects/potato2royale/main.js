
var app = new Vue({

    el: '#app',
    data: {

        dev: 0,

        max_number: 10,
        number: 0,
        power: 1,

        bet: 1,

        result: 'none',

        coin: 'none',
        coin_bet_m: 0.6,

        dice: 0,
        dice_bet_m: 0.0,

        blackjack_bet_m: 0.0,
        blackjack_player: [],
        blackjack_player_show: [],
        blackjack_dealer: [],
        blackjack_dealer_show: [],
        bj_result: 'none',
        
        tab : 'potatoes',

    },
    
    mounted() {

        if (localStorage.number) {
        this.number = parseInt(localStorage.number);
        }

        if (localStorage.max_number) {
            this.max_number = parseInt(localStorage.max_number);
        }

        if (localStorage.power) {
            this.power = parseInt(localStorage.power);
        }

        if (localStorage.coin_bet_m) {
            this.coin_bet_m = parseFloat(localStorage.coin_bet_m);
        }

        if (localStorage.dice_bet_m) {
            this.dice_bet_m = parseFloat(localStorage.dice_bet_m);
        }

        
        if (localStorage.blackjack_bet_m) {
            this.blackjack_bet_m = parseFloat(localStorage.blackjack_bet_m);
        }



    },


    methods: {

        trim: function(s){ 
            return ( s || '' ).replace( /^\s+|\s+$/g, '' ); 
        },

        save: function() {
            localStorage.number = this.number;
        },

        reset: function() {

            this.max_number = 10,
            localStorage.max_number = this.max_number,

            this.number = 0,
            localStorage.number = this.number,

            this.power= 1,
            localStorage.power = this.power,
    
            this.coin_bet_m = 0.6,
            localStorage.coin_bet_m = this.coin_bet_m,

            this.dice_bet_m = 0.0,
            localStorage.dice_bet_m = this.dice_bet_m,

            this.blackjack_bet_m = 0.0,
            localStorage.blackjack_bet_m = this.blackjack_bet_m,


            this.tab = 'potatoes'

        },


        add1: function() {
            if (this.number < this.max_number){
                this.number += 1 * this.power
                localStorage.number = this.number;
            }

        },

        upgrade_max: function (x, cost) {  
            if (this.number >= cost){
                this.number -= cost
                this.max_number = x

                localStorage.number = this.number;
                localStorage.max_number = this.max_number;
            }


        },

        upgrade: function (x, cost, type) {

            if (this.number >= cost) {

                if (type === 'storage'){
                    this.number -= cost
                    this.max_number = x
    
                    localStorage.number = this.number;
                    localStorage.max_number = this.max_number;

                }

                if (type === 'coin'){
                    this.number -= cost
                    this.coin_bet_m = x

                    localStorage.number = this.number;
                    localStorage.coin_bet_m = this.coin_bet_m;

                }

                if (type === 'dice'){


                    this.number -= cost
                    this.dice_bet_m = x

                    localStorage.number = this.number;
                    localStorage.dice_bet_m = this.dice_bet_m;

                }

                if (type === 'blackjack'){
                    this.number -= cost
                    this.blackjack_bet_m = x

                    localStorage.number = this.number;
                    localStorage.blackjack_bet_m = this.blackjack_bet_m;

                }

                if (type === 'power'){
                    this.number -= cost
                    this.power = x

                    localStorage.number = this.number;
                    localStorage.power = this.power;

                }

                if (type === 'win'){
                    
                    this.number -= cost
                    this.dev = 1
                    this.tab = "info"

                    localStorage.number = this.number;
                    localStorage.dev = this.dev;

                }



            }

        },

        increase_bet: function(){
            if (this.bet < this.number){
                this.bet += 1
            }
        },

        decrease_bet: function(){
            if (this.bet > 0){
                this.bet -= 1
            }
            
        },

        bet_00: function(x){

            this.bet = Math.round(this.number * x / 100);


        },

        coinflip: function(x) {

            round = Math.round(this.bet * this.coin_bet_m);


            if (x === 0){

                console.log("You bet that it's heads");
                win = Math.floor(Math.random() * 2);
                console.log(win);
                if (win === 1){

                    this.coin = 'heads';
                    this.number += round;
                    this.result = 'win';
                    console.log("You won", round);


                } else {

                    this.coin = 'tails';
                    this.number -= this.bet;
                    this.result = 'lost';
                    console.log("You lost", this.bet);
                }

            } else {

                console.log("You bet that it's tails");
                win = Math.floor(Math.random() * 2);
                console.log(win);

                if (win === 1){

                    this.result = 'win';
                    this.coin = 'tails';
                    this.number += round;
                    console.log("You won", round);

                } else {
                    
                    this.result = 'lost';
                    this.coin = 'heads';
                    this.number -= this.bet;
                    console.log("You lost", this.bet);

                }

            }

            localStorage.number = this.number;
            this.tab = 'coinflip_play';
        },

        dice_play: function(){

            
            console.log("play_dice");

            this.dice = Math.floor(Math.random() * 6) + 1;

            console.log("the dice is", this.dice);

            if (this.dice == 6){

                round = Math.round(this.bet * this.dice_bet_m);

                this.result = 'win';
                this.number += round;
                console.log("You won", round);

            } else {
                
                console.log("dice -> lost")

                this.result = 'lost';
                this.number -= this.bet;

                console.log("You lost", this.bet);
            }
            
            localStorage.number = this.number;
            this.tab = 'dice_play';

        },

        blackjack: function(){

            this.number -= this.bet
            localStorage.number = this.number

            this.blackjack_player = [], 
            this.blackjack_player_show = [], 
            this.blackjack_dealer = [], 
            this.blackjack_dealer_show = [], 
            this.bj_result = 'none',

            console.log("Now playing blackjack..")

            console.log("Player:", this.blackjack_player)
            console.log("Dealer:", this.blackjack_dealer)
            
            draw_count = 0

            function player_draw(hand, show) {

                draw_count += 1

                player_card = Math.floor(Math.random() * 13) + 1;
                console.log("Player draws card number", draw_count, "and it's a:", player_card)
                hand[hand.length] = player_card

                if (player_card > 10 ) {

                    switch (player_card) {
                        case 11:
                            show[show.length] = "J";
                        break;
                        case 12:
                            show[show.length] = "Q";
                        break;
                        case 13:
                            show[show.length] = "K";
                        break;

                    }

                } else {

                    show[show.length] = player_card

                }
                    

                if (draw_count === 2){

                    //sum of array

                    var hand_for_sum = []

                    for (var i = 0; i < hand.length; i++) {
                        
                        if (hand[i] > 10) {

                            hand_for_sum[hand_for_sum.length] = 10

                        } else {

                            hand_for_sum[hand_for_sum.length] = hand[i]

                        }
                        
                    }

                    console.log("Player hand is:", hand)
                    
                    sum = hand_for_sum.reduce((a, b) => a + b, 0);
                    console.log("The sum of player hand is",sum)

                    if (hand == [1, 11] || hand == [11, 1]){

                        console.log("Player won with a BLACKJACK!")

                        return 1

                    } else {

                        return 0

                    }

                }

                player_draw(hand, show)


            }

            function dealer_draw(hand, show) {

                dealer_card = Math.floor(Math.random() * 13) + 1;
                console.log("Dealer draws card number 1 and it's a:", dealer_card)
                hand[hand.length] = dealer_card

                if (dealer_card > 10 ) {

                    switch (dealer_card) {
                        case 11:
                            show[show.length] = "J";
                        break;
                        case 12:
                            show[show.length] = "Q";
                        break;
                        case 13:
                            show[show.length] = "K";
                        break;

                    }

                } else {

                    show[show.length] = dealer_card

                }

    
            }


            var player_first_draw = player_draw(this.blackjack_player, this.blackjack_player_show)

            dealer_draw(this.blackjack_dealer, this.blackjack_dealer_show)

            console.log("Player hand first turn:", this.blackjack_player)
            console.log("Player hand shown is:", this.blackjack_player_show)
            console.log("Dealer hand first turn:", this.blackjack_dealer)
            console.log("Dealer hand shown is:", this.blackjack_dealer_show)

            if (player_first_draw == 1){

                this.number += bet
                this.number += Math.round(this.bet * this.blackjack_bet_m * 1.5)
                this.bj_result = "bj"
                this.tab = "blackjack_play"
                localStorage.number = this.number

                return

            }

            this.tab = "blackjack_play"

        },

        bj_player_card: function(card){
            //card 1 -> player asks for a card, 0 is for stopping

            function play( card, bet, chips, hand, show, d_hand, d_show, m){

                if (card >= 1){

                    if (card == 2){

                        console.log("Player wants to duplicate his bet.")
                        console.log("Player's bet is", bet, "and player has", chips, "chips..")

                        if (bet <= chips){

                            bet = bet * 2
                            console.log("[X2] Player can and will double is bet to:", bet)

                            
                            

                        } else {

                            console.log("[X2] Player cannot double his bet, action is cancelled.")

                            return [bet, 0, 'none']
                            

                        }


                    }

                    console.log("[HIT] Player asks for a card.")

                    player_card = Math.floor(Math.random() * 13) + 1;
                    console.log("Player draws card number", draw_count, "and it's a:", player_card)
                    hand[hand.length] = player_card

                    if (player_card > 10 ) {

                        switch (player_card) {
                            case 11:
                                show[show.length] = "J";
                            break;
                            case 12:
                                show[show.length] = "Q";
                            break;
                            case 13:
                                show[show.length] = "K";
                            break;

                        }

                    } else {

                        show[show.length] = player_card

                    }

                    console.log("Player hand is:", hand)
                    console.log("Player hand shown is:", show)

                    var hand_for_sum = []

                    for (var i = 0; i < hand.length; i++) {
                        
                        if (hand[i] > 10) {

                            hand_for_sum[hand_for_sum.length] = 10

                        } else {

                            hand_for_sum[hand_for_sum.length] = hand[i]

                        }
                        
                    }
                    
                    sum = hand_for_sum.reduce((a, b) => a + b, 0);
                    console.log("The sum of player hand is",sum)

                    //finishing player turn
                    if (sum > 21) {

                        console.log("Player busted!")

                        //output: [new_bet, new_number, game_status(bj/win/p_busted/d_busted/lose/tie)]
                        
                        return [bet, 0,"p_busted"]

                    }

                    console.log("Player did not bust.")
                    return [bet, 0, 'none']

                } else {

                    console.log("[STOP] Player stops here.")

                    
                    console.log("Player did not BUST and stopped here, processing dealer turn..")

                    dealer_card = Math.floor(Math.random() * 13) + 1;
                    console.log("Dealer draws card number 2 and it's a:", dealer_card)
                    d_hand[d_hand.length] = dealer_card

                    if (dealer_card > 10 ) {

                        switch (dealer_card) {
                            case 11:
                                d_show[d_show.length] = "J";
                            break;
                            case 12:
                                d_show[d_show.length] = "Q";
                            break;
                            case 13:
                                d_show[d_show.length] = "K";
                            break;

                        }

                    } else {

                        d_show[d_show.length] = dealer_card

                    }

                    console.log("Dealer hand is:", d_hand)
                    console.log("Dealer hand shown is:", d_show)

                    var d_hand_for_sum = []

                    for (var i = 0; i < d_hand.length; i++) {
                        
                        if (d_hand[i] > 10) {

                            d_hand_for_sum[d_hand_for_sum.length] = 10

                        } else {

                            d_hand_for_sum[d_hand_for_sum.length] = d_hand[i]

                        }
                        
                    }

                        
                    d_sum = d_hand_for_sum.reduce((a, b) => a + b, 0);
                    console.log("The sum of dealer hand is", d_sum)

                    if (d_sum == 21){
                        
                        console.log("Dealer won! Player lost!!")
                        
                        return [bet, 0, "lost"]

                    } else if (d_sum > 21){

                        console.log("Dealer busted! Player won!!")
                        win = Math.round(bet * m)*2
                        return [bet, win, "d_busted"]

                    } else if (d_sum < 16){

                        console.log("Dealer has two cards and his hand sum is less than 16.")
                        console.log("Dealer will draw his last card.")

                        dealer_card = Math.floor(Math.random() * 13) + 1;
                        console.log("Dealer draws card number 3 and it's a:", dealer_card)
                        d_hand[d_hand.length] = dealer_card

                        if (dealer_card > 10 ) {

                            switch (dealer_card) {
                                case 11:
                                    d_show[d_show.length] = "J";
                                break;
                                case 12:
                                    d_show[d_show.length] = "Q";
                                break;
                                case 13:
                                    d_show[d_show.length] = "K";
                                break;

                            }

                        } else {

                            d_show[d_show.length] = dealer_card

                        }

                        console.log("Dealer hand is:", d_hand)
                        console.log("Dealer hand shown is:", d_show)

                        var d_hand_for_sum = []

                        for (var i = 0; i < d_hand.length; i++) {
                            
                            if (d_hand[i] > 10) {

                                d_hand_for_sum[d_hand_for_sum.length] = 10

                            } else {

                                d_hand_for_sum[d_hand_for_sum.length] = d_hand[i]

                            }
                            
                        }

                            
                        d_sum = d_hand_for_sum.reduce((a, b) => a + b, 0);
                        console.log("The sum of dealer hand is", d_sum)

                        if (d_sum == 21){
                        
                            console.log("Dealer got 21 and won! Player lost!!")
                            
                            return [bet, 0, "lost"]
    
                        } else if (d_sum > 21){
    
                            console.log("Dealer busted! Player won!!")
                            win = Math.round(bet * m)*2
                            return [bet, win, "d_busted"]

                        } else if (d_sum > sum){

                            console.log("Dealer won over player!!")
                           
                            return [bet, 0, "lost"]

                        } else if (d_sum < sum){

                            console.log("Player won over the third draw of dealer!!")
                            win = Math.round(bet * m)*2
                            return [bet, win, "win"]

                        } else if (d_sum == sum){

                            console.log("It's a tie!!")
                            return [bet, 0, "tie"]

                        }

                        

                    } else {

                        console.log("Dealer got a number between 17 and 20 (extremes included), and stops here.")
                        console.log("Let's see if dealer won over player..")

                        if (d_sum > sum){

                            console.log("Dealer won over player!!", d_sum, ">", sum)
                            
                            return [bet, 0, "lost"]
                        
                        } else if (d_sum < sum){

                            console.log("Dealer lost over player!!", d_sum, "<", sum)
                            win = Math.round(bet * m)*2
                            return [bet, win, "win"]

                        } else if(d_sum == sum){

                            console.log("It's a tie, no-one wins!!", d_sum, "=", sum)
                            win = bet
                            return [bet, win, "tie"]


                        } else {

                            return console.log("FATAL DEALER ERROR", d_sum, "<-dealer and player->", sum)

                        }

                    }

                }

            }

            var output = play(card, this.bet, this.number, this.blackjack_player, this.blackjack_player_show, this.blackjack_dealer, this.blackjack_dealer_show, this.blackjack_bet_m)

            //output: [new_bet, new_number, game_status(bj/win/p_busted/d_busted/lose/tie)]

            this.bet = output[0]
            this.number += output[1]
            this.bj_result = output[2]


            this.$forceUpdate(this.blackjack_player_show)
            this.$forceUpdate(this.blackjack_dealer_show)
            this.$forceUpdate(this.bet)
            this.$forceUpdate(this.number)
            this.$forceUpdate(this.bj_result)

            localStorage.number = this.number



        }
    
    },
})

