function edit_ajaxGetQuestionDetail(array,callback) {
  if (typeof(callback) != "function") {
      callback = function(response) {};
  }

  $.ajax({
      type: "post",
      url: "http://gogogo.synology.me/api/telegroup/getdata.php",
      data: {
          "page": array.page,
          "type": array.type,
          "id": array.id
      },
      dataType: "json",
      success: function(response) {
        callback(response);
      },
      error: function(response) {
        callback(response);
      }
  });
}

function edit_ajaxSubmitQuestion(array,callback) {
    if (typeof(callback) != "function") {
        callback = function(response) {};
    }

    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/telegroup/addrecord.php",
        data: {
          "deviceid": getDeviceID(),
          "id": array.id,
          "type": array.type,
          "subject": array.subject,
          "intro": array.intro,
          "link": array.link,
          "lang": lang,
          "markeddel": array.markeddel
        },
        dataType: "json",
        success: function(response) {
          callback(response);
          //callback(response);
        },
        error: function(response) {
          callback(response);
        }
    });
}


function edit_ajaxGetExamType(callback) {
    if (typeof(callback) != "function") {
        callback = function(response) {
        //  debugger;
        };
    }

    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/telegroup/gettype.php",
        data: {
            "lang": lang
        },
        dataType: "json",
        success: function(response) {
          callback(response);
          //callback(response);
        },
        error: function(response) {
          callback(response);
        }
    });
}
