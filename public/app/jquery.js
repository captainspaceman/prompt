console.log('jquery.js is loading')

$("#submitButton").click(function(){
      console.log('Idea button was clicked');
      // location.reload();
  });

$('#r').click(function(){
  $('#r').click(function(event){
    event.preventDefault();
  })
  console.log('change view button clicked');
  $('body').toggleClass('black');
  $('p').toggleClass('white');
  $('h1').toggleClass('white');
})



  //social share buttons

  $("#facebook-share").click(function(){
    console.log("Facebook share button clicked");
  })

  $("#twitter-share").click(function(){
    console.log("Twitter share button clicked");
  })

  $("#email-share").click(function(){
    console.log("Email share button clicked");
  })