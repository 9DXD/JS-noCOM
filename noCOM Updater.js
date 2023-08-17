javascript:(function() {
    var scriptURL = "https://github.com/9DXD/JS-noCOM/blob/master/script.js"; // Replace with your script URL
    //var interval = 60000; // Check for updates every 60 seconds (1 minute)

    function loadScript() {
        var script = document.createElement('script');
        script.src = scriptURL + "?" + new Date().getTime(); // Append timestamp to avoid caching
        document.head.appendChild(script);
    }

    loadScript(); // Load the script initially

    //setInterval(function() {
    //    loadScript(); // Reload the script periodically
    //}, interval);
})();
