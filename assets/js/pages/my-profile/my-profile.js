$(document).ready(function(){
  $.getJSON("./my-profile-data.json", function(data){
    var userInfo=data[0].userInfo;
    $(".profile-header").html("<img class='user-img' src= '"+userInfo.userImg+"' alt='user image'/>");
    $(".profile-header").append("<h3 class='mb-1 text-capitalize'>" + userInfo.name + "</h3>");
    $(".profile-header").append("<p class='user-slogan'>" + userInfo.slogan + "</p>");
    var introList=data[0].introList;
    $(".intro-list").html("<li><i class='fa fa-graduation-cap'></i> Studied at " + introList.education + "</li>");
      $(".intro-list").append("<li><i class='fa fa-home'></i> Lives in " + introList.livesIn + "</li>");
      $(".intro-list").append("<li><i class='fa fa-map-marker'></i> From " + introList.from + "</li>");
      $(".intro-list").append("<li><i class='fa fa-birthday-cake'></i> Date of Birth is " + introList.dateOfBirth + "</li>");
  });
});
