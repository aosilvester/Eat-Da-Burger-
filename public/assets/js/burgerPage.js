// # for ID
// . for class

$(function(){

// add a new burger
$("#addBurgerButton").on("click", function(event){
    event.preventDefault();
    console.log("adding a burger");

    var newBurger = {
        name:$("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("created new burger");
            location.reload();
        }
    );
});

$("")
})