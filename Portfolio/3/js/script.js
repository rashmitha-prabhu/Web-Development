$(function(){
    $("#navbarToggle").blur(function (event){
        var screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
            $("#Collapse").collapse('hide');
        }
    });
});
