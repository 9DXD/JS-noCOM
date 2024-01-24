javascript:(function(){
    var popup = window.open("", "_blank", "width=300,height=300vh");
    popup.document.write(`
    <html>
    <head>
    <title>about:blank</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .custom-input {
            width: 100%;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
    </style>
    </head>
    <body>
    <h2>Bookmarklet Menu</h2>
    <form id='formOfNothing'>
        <input type='text' class='custom-input' id='userInput' placeholder='Test'>
        <button type='submit'>Submit</button>
    </form>
    <p id='result'></p>
    <script>
        document.getElementById('formOfNothing').addEventListener('submit', function(event) {
            event.preventDefault();
            var userInput = document.getElementById('userInput').value;
            document.getElementById('result').textContent = 'You entered: ' + userInput;
        });
    </script>
    <hr>
    <ol>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
        <li>e</li>
        <li>f</li>
        <li>g</li>
        <li>h</li>
    </ol>
    <br>
    <hr>
    <footer>
        <p>Footer</p>
    </footer>
    </body>
    </html>`);
    /*popup.document.close();
    window.onblur = function() {
        popup.close();
    };*/
})();
