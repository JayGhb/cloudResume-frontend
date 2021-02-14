function incrementViews(){
  $.ajax({
    url: "https://yc882gp2zi.execute-api.us-east-1.amazonaws.com/Prod/hello",
    method: "GET",
    success : function(data){
      var viewsLabel = $(".views");
      viewsLabel.html(data);
    }
  });
}