$(document).ready(function() {
  $("form#list").submit(function(event) {
    event.preventDefault();
    const ans = $("#input1").val();
    const words = ans.split(' ');
    
    words.forEach(element => {
      // put if else here
    });
    
  });
});