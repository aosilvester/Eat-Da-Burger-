// # for ID
// . for class

$(function(){



// add a new burger
$("#addBurgerButton").on("click", function(event){
    event.preventDefault();
    console.log("adding a burger");

    var newBurger = {
        name:$("#name").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("created new burger");
            location.reload();
        }
    );
});


$(".delete-sleep").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(function() {
        location.reload();
    });
}); 

$(".changeDevour").on("click", function(event) {
    var id = $(this).data("id");
    console.log("devouring a burger");
    var newState = {
        devoured: true
    };

    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newState
    }).then(function() {

        location.reload();  
    });
});

$(".makeMore").on("click", function(event) {
    var id = $(this).data("id");
    console.log("making a burger");
    var newState = {
        devoured: false,
    };

    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newState
    }).then(function() {

        location.reload();
    });
});


// end of jQuery function
})









