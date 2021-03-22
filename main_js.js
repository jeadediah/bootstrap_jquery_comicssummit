
$('a').on( "click", function(e){
        e.preventDefault();
        $(".goto").removeClass("active");
        $(this).parent().addClass("active");//kliknemo na link a parent mu je <li>
        
        var link = $(this).attr("href");
        $(".content").load("comic_caracters.html ."+link);
});


