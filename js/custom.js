$(document).ready(function () {
    $('#accordion').click(function () {
        $("#panel").hide();
    });

    $("#accordion").click(function () {
        $("#panel").show();
    });
    $('#accordion1').click(function () {
        $("#panel1").hide();
    });

    $("#accordion1").click(function () {
        $("#panel1").show();
    });
    $('#accordion2').click(function () {
        $("#panel2").hide();
    });

    $("#accordion2").click(function () {
        $("#panel2").show();
    });
});
$(document).ready(function () {
    $('.tabs .tab-links a').on('click', function (e) {
        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
    $('#nav li a').click(function () {
        $('#nav li a').removeClass('active');
        $(this).addClass('active');
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('.back-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('.back-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('.back-to-top').click(function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    });
});