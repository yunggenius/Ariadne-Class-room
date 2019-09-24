$(function(){
    $("#add").on("click", function(){
        var val = $("input").val();
        if(val!==){
  var elem = $("<li></li>").text(val);
  var btn = $("<button class='rem'>X</button>");
  btn.on("click",
  function(){$(this).parent().remove()});
  $(elem).append(btn);
  $("#list").append(elem);
  $("input").val("");
        }
    });
    });