function userSubmitExamPageAddBindEvent(){
  $$('.submitForm').on('click', function(){
    var formData = app.form.convertToData('#my-form');

    var alertMsg ="";
    if(formData.type == ""){
      alertMsg += appLangArr[defaultLang].alertMsg.type
    }
    if(formData.subject == ""){
        alertMsg += appLangArr[defaultLang].alertMsg.subject
    }
    if(formData.link == ""){
        alertMsg +=  appLangArr[defaultLang].alertMsg.link
    }

    if(alertMsg!=""){
      app.dialog.alert(alertMsg,appLangArr[defaultLang].alertMsg.missingdata);
    }else{
      ajaxSubmitQuestion(formData,function(response){
          app.dialog.alert(appLangArr[defaultLang].alertMsg.submitmsg,appLangArr[defaultLang].alertMsg.thank);
          app.view.current.router.navigate("/?refresh=1")
      })
    }


  });

  $$('.fill-form-from-data').on('click', function(){
    var formData = {
    }
    app.form.fillFromData('#my-form', formData);
  });

  $(".trumbowyg-editor").on("click", function() {
    this.focus();
  })
  
  $(".choiceNum").on('change', function(){

    var choiceAnsArr =[]
    var choiceResultArr =[]
    for(var i = 0; i < 10; i++) {

      var choiceAnsEle= $(".choiceAns" + digital2Alphabet(i));
  //    var choiceResultEle= $(".choiceResult" + digital2Alphabet(i));
      //  debugger;
      if(choiceAnsEle.val() != undefined && choiceAnsEle.val() != ""){
        choiceAnsArr[i] = choiceAnsEle.val()
      }
    //  if(choiceResultEle != undefined && choiceResultEle != ""){
    //    choiceResultArr[i] = choiceResultEle.val()
//    }
    }
    var html ="";
    for(var i = 0; i < $(".choiceNum").val(); i++) {
      html += renderChoice({
        "choiceAns":choiceAnsArr[i] == undefined ? "" : choiceAnsArr[i],
        "alphabet" : digital2Alphabet(i)
      });
    }
    //alert(html);
    $(".choiceList").html(html);


  });
}
