const button = document.getElementById("button");

button.addEventListener("click", function() {
    $("p").addClass("hidden");
    $("#button").text("Wander On");
    millie.interaction = millie.interaction+1;
    $("#poem-2").removeClass("hidden");
})

var millie = {
    interaction: 0
};