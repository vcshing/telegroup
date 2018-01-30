function edit_userSubmitExamPageAddBindEvent(page){
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
        formData.id = page.detail.route.query.id;
        edit_ajaxSubmitQuestion(formData,function(response){
            app.dialog.alert(appLangArr[defaultLang].alertMsg.submitmsg,appLangArr[defaultLang].alertMsg.thank);
            app.view.current.router.navigate("/?refresh=1")
        })
      }
  });

  $$('.deleteBtn').on('click', function(){
    app.dialog.confirm(appLangArr[defaultLang].alertMsg.del,"", function () {
      edit_ajaxSubmitQuestion({
        "id" : page.detail.route.query.id,
        "markeddel" : 1
      },function(response){
          app.dialog.alert(appLangArr[defaultLang].alertMsg.delsuccess,appLangArr[defaultLang].alertMsg.thank);
          app.view.current.router.navigate("/?refresh=1")
      })
    });
  });

  $$('.fill-form-from-data').on('click', function(){
    var formData = {
    }
    app.form.fillFromData('#my-form', formData);
  });


}
