// Wait for the DOM to load
$(document).ready(function () {
    // Initialize jQuery UI tooltip
    $(document).tooltip();

    // Add tooltips dynamically to all buttons
    $('a.button').each(function () {
        // Set a custom title if not already set
        if (!$(this).attr('title')) {
            const buttonText = $(this).text().trim(); // Get button text
            $(this).attr('title', `Go to the ${buttonText} page`); // Set tooltip text
        }
    });

    // Add event listener for the motivational quote button
    document.getElementById("getQuote").addEventListener("click", function () {
        var xhr = new XMLHttpRequest();

        // Link to motivational quote API that has motivational images
        xhr.open("GET", "https://inspirobot.me/api?generate=true", true);

        xhr.onload = function () {
            // If GET request is successful, create an image element to display
            if (xhr.status === 200) {
                var img = document.createElement("img");
                img.src = xhr.responseText;
                img.alt = "Inspirational Quote";
                img.style.width = "50%";
                document.getElementById("motivationalQuote").innerHTML = "";
                document.getElementById("motivationalQuote").appendChild(img);
            } else {
                document.getElementById("motivationalQuote").innerHTML = "Error: Could not fetch a quote.";
            }
        };

        xhr.onerror = function () {
            document.getElementById("motivationalQuote").innerHTML = "Error: Could not fetch a quote.";
        };

        xhr.send();
    });

    // Initialize jQuery UI datepicker
    $("#studyDate").datepicker({
        showAnim: "slideDown", // Adds a smooth animation
        dateFormat: "mm/dd/yy" // Sets the format of the date
    });
});
