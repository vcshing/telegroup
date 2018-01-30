function renderTopicList(array){
  var html="";
  html += "    <li>";
  html += "      <a href=\"#\" class=\"item-link item-content\" onclick=\"redirectQuestionPage("+ array.master_id +")\">";
  html += "        <div class=\"item-inner\">";
  html += "          <div class=\"item-title\">";
  html += "             "+array.title+"";
  html += "            <div class=\"item-footer\">"+array.createtime+"<\/div>";
  html += "          <\/div>";
  html += "        <\/div>";
  html += "      <\/a>";
  html += "    <\/li>";

  return html;
}

function redirectQuestionPage(index){
    app.view.current.router.navigate("/question/?id="+ index)
}


function selectLang(){

    // Vertical Buttons
      app.dialog.create({
        title: 'Location',
        text: 'Please Select Your Language',
        buttons: [
          {
            cssClass:"text-align-center",
            text: '繁體中文',
            onClick: function(){
              $(".hkversion").trigger("click");
            }
          },
          {
            cssClass:"text-align-center",
            text: 'English',
            onClick: function(){
              $(".enversion").trigger("click");
            }
          },
          {
            cssClass:"text-align-center",
            text: checkLang(),
            onClick: function(){
              $(".interversion").trigger("click");
            }
          },
        ],
        verticalButtons: true,
        cssClass:"text-align-center",
        on: {
          open: function () {

          }
        }
      }).open();
  

}
