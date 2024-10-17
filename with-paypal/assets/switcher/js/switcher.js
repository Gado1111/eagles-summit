// Swticher Cookie Base
/**
 * Styleswitch stylesheet switcher built on jQuery
 * Under an Attribution, Share Alike License
 * By Kelvin Luck ( http://www.kelvinluck.com/ )
 * Thanks for permission! 
 **/
(function($){
    $(document).ready(function() {
        // Switch styles based on user selection
        $('.styleswitch').click(function(){
            switchStylestyle(this.getAttribute("data-switchcolor"));
            return false;
        });

        // Check if a style cookie exists and apply it
        var c = readCookie('style');
        if (c) {
            switchStylestyle(c);
        } else {
            // Loop through available stylesheets and set the default
            $('link[rel*=style][title]').each(function(i){
                var defaultColor = this.getAttribute('data-default-color');
                this.disabled = true;
                if (defaultColor) {
                    this.disabled = false;
                }
            });
        }
    });

    // Function to switch stylesheet based on the title attribute
    function switchStylestyle(styleName){
        $('link[rel*=style][title]').each(function(i){
            this.disabled = true;
            if (this.getAttribute('title') === styleName) {
                this.disabled = false;
            }
        });
        // Create a cookie that lasts for 365 days
        createCookie('style', styleName, 365);
    }
})(jQuery);

// Function to create a cookie with a specific expiration in days
function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Set a cookie to expire on November 16, 2024 directly
function setCookieToExpireOnSpecificDate(name, value, expirationDate) {
    var date = new Date(expirationDate);
    if (!isNaN(date.getTime())) {
        document.cookie = name + "=" + (value || "") + "; expires=" + date.toUTCString() + "; path=/";
    } else {
        console.error("Invalid expiration date format.");
    }
}

// Set cookie to expire on November 16, 2024
setCookieToExpireOnSpecificDate("exampleCookie", "cookieValue", "2024-11-16T00:00:00Z");

// Function to read a cookie by name
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();  // Trim spaces
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to erase a cookie
function eraseCookie(name) {
    createCookie(name, "", -1);
}

// DEMO Swticher Base
jQuery('.demo_changer .demo-icon').click(function() {
    if (jQuery('.demo_changer').hasClass("active")) {
        jQuery('.demo_changer').animate({"left":"-71px"}, function() {
            jQuery('.demo_changer').toggleClass("active");
        });
    } else {
        jQuery('.demo_changer').animate({"left":"0px"}, function() {
            jQuery('.demo_changer').toggleClass("active");
        });
    }
});
