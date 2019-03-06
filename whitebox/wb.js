// A $( document ).ready() block.
$( document ).ready(function() {
    $("#inputbar").on('input',function() {
        switch ($("#inputbar").val()){
            case "cazzo":
            $("#outputbar").html("Non dire parolacce.")
            break;
            case "riccardo":
            $("#outputbar").html("<img src=\"https://i.imgur.com/8Ix2n1A.jpg\">")
            break;
            case "Riccardo":
            $("#outputbar").html("<img src=\"https://i.imgur.com/8Ix2n1A.jpg\">")
            break;
            case "Federica":
            $("#outputbar").html("<img src=\"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png\" width=\"40%\" height=\"40%\">");
            break;
            default:
            $("#outputbar").html("")
            break;
        }
            
    });
});
