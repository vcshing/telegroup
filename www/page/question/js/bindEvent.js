function bindQuestionInit(page){


}

function bindansConfirm(page){
  $(".joinGroup").bind("click",function(e){
    e.preventDefault();
    if(page.detail.route.query.id != 0){
      var target = "_system";
      var options = "location=yes";
      var url = $(".joinGroup").attr("data-href");
      window.open(url, target, options);
    }else{
      app.view.current.router.navigate("/user-submit-exam/")
    }

  })
}
