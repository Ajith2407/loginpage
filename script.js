
  
        function openNewPage() {
          // Get username and password from the input fields
          var email = document.getElementById("email").value;
          var password = document.getElementById("password").value;

          // Set the correct username and password
          var correctUsername = "kishore@gmail.com";
          var correctPassword = "4567";
         

          // Check if the entered username and password match the correct credentials
          if (email === correctUsername && password === correctPassword)  {
            
              window.open("HomePage.html")
             }
             else{
              document.getElementById("demo") ;
          
             }  
      }
 




