

  function summary_open() {
    var paragraph1 = document.getElementById("summary_content1");
    paragraph1.style.display = "block";
    
    var paragraph2 = document.getElementById("Detail_content2");
    paragraph2.style.display = "none";
  }
  
  function detail_report() {
    var paragraph1 = document.getElementById("summary_content1");
    paragraph1.style.display = "none";
    
    var paragraph2 = document.getElementById("Detail_content2");
    paragraph2.style.display = "block";
  }
  function MainPage_return(){
    window.open("index.html");
  }
  window