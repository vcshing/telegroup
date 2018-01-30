function bindQuestionInit(page){


}

function bindansConfirm(page){
  $(".joinGroup").bind("click",function(e){
    e.preventDefault();
    var target = "_system";
    var options = "location=yes";
    var url = $(".joinGroup").attr("data-href");
    window.open(url, target, options);
  })
}
