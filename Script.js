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