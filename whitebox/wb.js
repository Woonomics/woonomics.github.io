// A $( document ).ready() block.
$( document ).ready(function() {
    $("#inputbar").on('input',function() {
        switch ($("#inputbar").val()){
            case "cazzo":
            $("#outputbar").html("cazzo")
            break;
            case "pene":
            $("#outputbar").html("pene")
            break;
            case "tuamamma":
            $("#outputbar").html("<img src=\"https://i.imgur.com/8Ix2n1A.jpg\">")
            break;

            default:
            $("#outputbar").html("");
        }  
            
    });
});
