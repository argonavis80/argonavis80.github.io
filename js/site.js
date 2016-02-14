$(document).ready(function() {
    //$(".nav label").click(function () {
    //    $(this).parents("ul").children("label").siblings().slideUp();
    //    //$("#navlist").find("label").siblings().slideUp();
    //    $(this).siblings().slideDown();
    //});

    $("[data=tree-toggler]").click(function () {
        $(this).parent().parent().find("[data=tree-toggler]").siblings().slideUp();
        $(this).siblings().slideDown();
    });
});