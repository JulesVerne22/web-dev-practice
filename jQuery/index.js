// querySelector
$("h1");

// querySelectorAll
$("button");

// edit style
$("h1").css("color","red");

// edit text
$("button").text("Press Me");

// edit innerHtml
$("h1").html("<em>Hello</em>");

// Add/Remove Class
$("h1").addClass("big-title");
$("h1").hasClass("big-title"); // Test for class on object
$("h1").removeClass("big-title");

// edit attributes
$("a").attr("href"); // returns attribute value
$("a").attr("href", "https://apple.com"); // Sets attribute value

// event listeners
$("h1").click(function() {
    $("h1").css("color","purple");
});

$("button").click(function() {
    $("h1").slideToggle(); // Toggles h1 visibility
});

// keydown event
$(document).keydown(function(event) {
    $("h1").text(event.key);
});

// on keyword
$("h1").on("mouseover", function() {
    $("h1").css("color","blue");
});

// Adding Elements to page
// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

// Remove Elements
// $("button").remove();

// Animate site
// $("button").click(function() {
//     $("h1").animate({opacity: 0.5});
//     // Can chain together like .slideUp().slideDown().animate();
// });
