// A $( document ).ready() block.
$( document ).ready(function() {
    $("#inputbar").on('input',function() {
        switch ($("#inputbar").val()){
            case "cazzo":
            $("#outputbar").html("Non dire parolacce.")
            break;
            case "Riccardo":
            $("#outputbar").html("<img src=\"https://i.imgur.com/8Ix2n1A.jpg\" width=\"50%\" height=\"50%\">")
            break;
            case "Federica":
            $("#outputbar").html("<img src=\"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png\" width=\"50%\" height=\"50%\">");
            break;
            case "Steven":
            $("#outputbar").html("<img src=\"http://pngimg.com/uploads/carrot/carrot_PNG4985.png\" width=\"50%\" height=\"50%\">")
            break;
            case "Dolphin":
            $("#outputbar").html("")
            break;




            
            default:
            $("#outputbar").html("")
            break;
        }
            
    });
});
