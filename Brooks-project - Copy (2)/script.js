// Wait for the DOM to load
$(document).ready(function() {
    // Initialize jQuery UI tooltip
    $(document).tooltip();
    
    // Add tooltips dynamically to all buttons
    $('a.button').each(function() {
        // Set a custom title if not already set
        if (!$(this).attr('title')) {
            const buttonText = $(this).text().trim(); // Get button text
            $(this).attr('title', `Go to the ${buttonText} page`); // Set tooltip text
        }
    });
});
