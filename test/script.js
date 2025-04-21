// Wait for the DOM to load
$(document).ready(function () {
    // Initialize jQuery UI tooltip
    $(document).tooltip();

    // Add tooltips dynamically to all buttons
    $('a.button').each(function () {
        if (!$(this).attr('title')) {
            const buttonText = $(this).text().trim();
            $(this).attr('title', `Go to the ${buttonText} page`);
        }
    });

    // Add event listener for the motivational quote button
    $("#getQuote").on("click", function () {
        $.ajax({
            url: "https://inspirobot.me/api?generate=true",
            method: "GET",
            success: function (response) {
                $("#motivationalQuote").html(
                    `<img src="${response}" alt="Inspirational Quote" style="width:50%">`
                );
            },
            error: function () {
                $("#motivationalQuote").text("Error: Could not fetch a quote.");
            }
        });
    });

    // Initialize jQuery UI datepicker if any input has #studyDate ID
    if ($("#studyDate").length) {
        $("#studyDate").datepicker({
            showAnim: "slideDown",
            dateFormat: "mm/dd/yy"
        });
    }
});
