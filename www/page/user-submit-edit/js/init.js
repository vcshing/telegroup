function userSubmitExamEditPageInit(page){
  edit_ajaxGetExamType(function(response){

      var html = "<option value=\""+""+"\">"+"請選擇"+"<\/option>";
      $(response.result).each(function(index,result){
          html += "<option value=\""+result.type_id+"\">"+result.type+"<\/option>";
      })

      $(".submit-picker-type").find("select").html(html)
    //  $("item-after")
      $(".submit-picker-type").find(".item-after").html("請選擇")


  })

  edit_ajaxGetQuestionDetail({
      "page": "",
      "type": "",
      "id": page.detail.route.query.id
  },function(response){

    var formData = {
      intro: response.result[0].intro,
      subject: response.result[0].title,
      type: response.result[0].type,
      link: response.result[0].link
    }
    app.form.fillFromData('#my-form', formData);

      $("[name='intro']").trumbowyg({
        btns: [
            ['viewHTML'],
            ['undo', 'redo'], // Only supported in Blink browsers
            ['formatting'],
            ['strong', 'em', 'del'],
            ['foreColor', 'backColor'],
            ['link'],
            ['insertImage'],
            ['removeformat']
        ]
      });

      edit_userSubmitExamPageAddBindEvent(page)

  })

}
