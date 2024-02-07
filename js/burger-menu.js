$(document).ready(function() {
    $(".fa-bars").click(function() {
        $(".burgermenu").slideToggle(function() {
            if ($(this).css('display') == 'none') {
                $(this).css('display', 'flex');
            }
        });
    });
});