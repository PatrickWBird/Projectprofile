$(function () {
    $('.tabs-panels .tabs li').on('click', function () {
        var $panel = $(this.closest('.tabs-panels'))
        $panel.find('tabs li.active').removeClass('active')
        $(this).addClass('active')

        var panelToShow = $(this).attr('rel');

        $panel.find('.panel.active').slideUp(900, showNextPanel);

        function showNextPanel() {
            $(this).removeClass('active')
            $('#' + panelToShow).slideDown(900, function () {
                $(this).addClass('active')
            })
        }
    
    })
})


$("p").click(function(){
  $("p").css("color", "darkblue");
});

$(".sit").click(function(){
    $(".sit").animate({left: "300px"});
})

$(function(){
  $("h3").click(function(){
    $(".sit").animate({
      left: '250px',
    });
  });
});