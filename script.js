
  
        function openNewPage() {
            // Get username and password from the input fields
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            // Set the correct username and password
            var correctUsername = "kishore";
            var correctPassword = "4567";
            var correctUsername2 = "ajith";
            var correctPassword2 = "kumar";

            // Check if the entered username and password match the correct credentials
            if ((username === correctUsername && password === correctPassword) || (username === correctUsername2 && password === correctPassword2)) {
               if(username === correctUsername && password === correctPassword){
                alert("Hi Kishore welcome  to ksv");
               }
               else{
                alert("Hi Ajith welcome to ksv");
               }
              window.open("HomePage.html");
               }
            else {
                errorMessage.textContent = 'Invalid username or password.';
                window.open("index.html");
            }
       

            
        }
   





