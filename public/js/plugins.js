// --------------------------------------------- //
// Loader Start
// --------------------------------------------- //
$(window).on("load", function () {

  "use strict";

  // Logo Animate Out
  $('.loader-logo-container').removeClass('white-shadow');
  $(".loader-logo").removeClass('slideInDown').addClass('fadeOutUp');
  $(".loader-caption").removeClass('slideInUp').addClass('fadeOutDown');

  // Morphing Transition Animation
  setTimeout(function () {
    var loaderSlogan = $(".loader-slogan");
    // If there is Slogan - Morphing Transition Animation After Slogan
    var typedLoader = new Typed('#slogan', {
      stringsElement: '#slogan-strings',
      typeSpeed: 40,
      onComplete: function (self) {
        setTimeout(function () {
          var loading = anime({
            targets: '.loader',
            translateY: '-200vh',
            easing: 'linear',
            duration: 1300
          });
          var loadMorphing = anime({
            targets: '.loader-morphing-path',
            d: [
              { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' },
              { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' }
            ],
            easing: 'easeOutQuad',
            elasticity: 100,
            duration: 800,
            delay: 0
          });
        }, 1000);
      },
    });
    // Removing 'overflow: hidden' Property from <body>
    $('body').removeClass('overflow-hidden');
  }, 600);

});
// --------------------------------------------- //
// Loader End
// --------------------------------------------- //

// --------------------------------------------- //
// Punchy Template Plugins Custom Settings Start
// --------------------------------------------- //
$(function () {

  // --------------------------------------------- //
  // Fullpage.js Plugin Settings Start
  // --------------------------------------------- //
  var mainContent = $('main');

  mainContent.fullpage({
    anchors: ['main', 'what-we-do', 'perks', 'our-buildings', 'schools', 'waitlist'],
    menu: '#menu',
    responsiveWidth: 1183,
    navigation: false,
    autoScrolling: false,
    fitToSection: false,
    verticalCentered: false,
    loopBottom: false,
    sectionSelector: 'section',
  });
  // --------------------------------------------- //
  // Fullpage.js Plugin Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Typed.js Plugin Settings Start
  // --------------------------------------------- //
  $(window).on("load", function () {
    var animatedHeadline = $(".animated-headline");
    if (animatedHeadline.length) {
      var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        loop: true,
        typeSpeed: 80,
        backSpeed: 30,
        backDelay: 1600
      });
    }
  });
  // --------------------------------------------- //
  // Typed.js Plugin Settings End
  // --------------------------------------------- //
  //
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Write-a-Line Form Start
  // --------------------------------------------- //
  $("#waitlist-form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $('.waitlist').find('.form').addClass('is-hidden');
      $('.waitlist').find('.reply-group').addClass('is-visible');
      setTimeout(function () {
        // Done Functions
        $('.waitlist').find('.reply-group').removeClass('is-visible');
        $('.waitlist').find('.form').delay(300).removeClass('is-hidden');
        th.trigger("reset");
      }, 5000);
    });
    return false;
  });
  // --------------------------------------------- //
  // Write-a-Line Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Homescreen Morphing Objects Start
  // --------------------------------------------- //

  // Menu Button Morphing Object
  var menuDecoration = $(".menu-btn-morphing-object");
  if (menuDecoration.length) {
    var morphing = anime({
      targets: '.menu-btn-morphing-path',
      d: [
        { value: 'M49.8,20.5c0,13.3-7.8,29.2-21.1,29.2S0.4,35.1,0.4,21.8S10.7,0.9,23.9,0.9S49.8,7.3,49.8,20.5z' },
        { value: 'M49.7,25.9c0,13.3-4.1,23.8-17.4,23.8S0.4,39.5,0.4,26.3S15.1,0.6,28.4,0.6S49.7,12.7,49.7,25.9z' },
        { value: 'M49.5,22.4c0,13.3-9.2,27-22.5,27S0.3,35.4,0.3,22.2S11,0.6,24.2,0.6S49.5,9.1,49.5,22.4z' },
        { value: 'M49.8,29.3c0,13.3-14.9,20.5-28.2,20.5S0.8,38.6,0.8,25.4S15.9,0.2,29.2,0.2S49.8,16,49.8,29.3z' },
      ],
      easing: 'easeOutQuad',
      duration: 9000,
      loop: true,
      autoplay: true
    });
  }
  // --------------------------------------------- //
  // Homescreen Morphing Objects End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Content Sections Morphing Objects Settings Start
  // --------------------------------------------- //
  // Blockquote Morphing Object
  var quoteDecoration = $(".quote-morphing-object");
  if (quoteDecoration.length) {
    var morphing = anime({
      targets: '.quote-morphing-path',
      d: [
        { value: 'M585.1,320c0,148.3-64.7,263-213.1,263S30,532.3,30,384S232.7,13.6,381,13.6S585.1,171.7,585.1,320z' },
        { value: 'M595,320c0,148.3-203.7,280-352,280S13.6,364.3,13.6,216S132.7,51,281,51S595,171.7,595,320z' },
        { value: 'M585.1,307c0,148.3-185.7,293-334.1,293S28.9,395.3,28.9,247S224.7,28,373,28S585.1,158.7,585.1,307z' },
        { value: 'M585.1,354.1c0,148.3-151.7,234-300,234S13.6,448.3,13.6,300S178.8,13.6,327.1,13.6S585.1,205.8,585.1,354.1z' }
      ],

      easing: 'easeOutQuad',
      duration: 9000,
      loop: true,
      autoplay: true
    });
  }
  // --------------------------------------------- //
  // Content Sections Morphing Objects Settings End
  // --------------------------------------------- //

});
// --------------------------------------------- //
// Punchy Template Plugins Custom Settings End
// --------------------------------------------- //
