/*! 
 
 =========================================================
 
 *Vid Board Javascript
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
 */


$(document).ready(function () {
    //testimonialslider
    $('.content_testimonial').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //header-menutoggle js
    $('.mobile_menu a').on('click', function () {
        $('.select_toggle').toggle("medium");
    });

    // contact tab
    $(".tab_content").hide();
    $(".tab_content:first").show();
    /* if in tab mode */
    $("ul.tabs li").click(function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });
    $('ul.tabs li').last().addClass("tab_last");

    // FAQ Accordion
    $('.accordion').find('.accordion-title').on('click', function () {
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');
    });

    // Home tab
    $(".tab_content2").hide();
    $(".tab_content2:first").show();

    /* if in tab mode */
    $("ul.tabs2 li").click(function () {

        $(".tab_content2").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs2 li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading2").removeClass("d_active");
        $(".tab_drawer_heading2[rel^='" + activeTab + "']").addClass("d_active");

        /*$(".tabs").css("margin-top", function(){ 
         return ($(".tab_container").outerHeight() - $(".tabs").outerHeight() ) / 2;
         });*/
    });
    $(".tab_container2").css("min-height", function () {
        return $(".tabs2").outerHeight() + 50;
    });
    /* if in drawer mode */
    $(".tab_drawer_heading2").click(function () {

        $(".tab_content2").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading2").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });

    // template tab
    $(".tab_content3").hide();
    $(".tab_content3:first").show();
    /* if in tab mode */
    $("ul.tabs3 li").click(function () {
        $(".tab_content3").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs3 li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading3").removeClass("d_active");
        $(".tab_drawer_heading3[rel^='" + activeTab + "']").addClass("d_active");
    });
    /* if in drawer mode */
    $(".tab_drawer_heading3").click(function () {
        $(".tab_content3").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading3").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs3 li").removeClass("active");
        $("ul.tabs3 li[rel^='" + d_activeTab + "']").addClass("active");
    });
    $('ul.tabs3 li').last().addClass("tab_last");



});