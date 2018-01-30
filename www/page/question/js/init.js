function userReadExamPageInit(page) {

    openedResultPop=false;
    bindQuestionInit(page)
    ajaxGetQuestionDetail({
        "id": page.detail.route.query.id
    }, function(response) {

        var html=""


        $(".question").html(response.result[0].intro);
        $(".questionTitle").html(response.result[0].title);
        $(".joinGroup").attr("data-href",response.result[0].link);


          $(".question").find("img").css("max-width","100%")
        bindansConfirm(page)

    })

}
