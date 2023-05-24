
  
        function openNewPage() {
            // Get username and password from the input fields
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            // Set the correct username and password
            var correctUsername = "admin";
            var correctPassword = "0123";
            var correctUsername2 = "ajith";
            var correctPassword2 = "kumar";

            // Check if the entered username and password match the correct credentials
            if ((username === correctUsername && password === correctPassword) || (username === correctUsername2 && password === correctPassword2)) {
                alert("hi Admin welcome welcome to ksv");
              window.open("HomePage.html");
               }
            else {
                confirm("Invalid username or password. Please try again.");
                window.open("index.html");
            }
       

            
        }
   





