// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. SVG Fallback
//  2. Chrome Smooth Scroll
//  3. Ban on Dragging Images
//  4. Navigation, Notify-me & Write-a-Line Popup Transitions
//  5. PhotoSwipe Gallery Images Replace
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(function() {
  // --------------------------------------------- //
  // SVG Fallback Start
  // --------------------------------------------- //
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };
  // --------------------------------------------- //
  // SVG Fallback End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Chrome Smooth Scroll Start
  // --------------------------------------------- //
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };
  // --------------------------------------------- //
  // Chrome Smooth Scroll End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Ban on Dragging Images Start
  // --------------------------------------------- //
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });
  // --------------------------------------------- //
  // Ban on dragging images End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Navigation, Notify-me & Write-a-Line Popup Transition Start
  // --------------------------------------------- //
  var menuTrigger       = $('#menu-trigger'),
      menu              = $('.navigation'),
      menuClose         = $('#menu-close'),
      popupContent      = $('.popup-content');

  // Menu Open
  menuTrigger.on('click', function(event){
    event.preventDefault();
    var morphing = anime({
      targets: '.navigation',
      translateY: '200vh',
      easing: 'linear',
      duration: 1300
    });
    var morphing = anime({
      targets: '.menu-morphing-path',
      d: [
        { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' },
        { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' }
      ],
      easing: 'easeInQuad',
      elasticity: 100,
      duration: 500,
      delay: 300
    });
    setTimeout(function(){
      menu.addClass('is-visible');
      menuClose.addClass('is-scaled-up');
    },1300);
  });
  // Menu Close
  menuClose.on('click', function(event){
    event.preventDefault();
    var moving = anime({
      targets: '.navigation',
      translateY: '0',
      easing: 'linear',
      duration: 1300
    });
    var morphing = anime({
      targets: '.menu-morphing-path',
      d: [
        { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' },
        { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' }
      ],
      easing: 'easeOutQuad',
      elasticity: 100,
      duration: 800,
      delay: 0
    });
    setTimeout(function(){
      menu.removeClass('is-visible');
      menuClose.removeClass('is-scaled-up');
    },1300);
  });
  $('#menu a').on('click', function(event){
    setTimeout(function(){
      var moving = anime({
        targets: '.navigation',
        translateY: '0',
        easing: 'linear',
        duration: 1300
      });
      var morphing = anime({
        targets: '.menu-morphing-path',
        d: [
          { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' },
          { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' }
        ],
        easing: 'easeOutQuad',
        elasticity: 100,
        duration: 800,
        delay: 0
      });
      setTimeout(function(){
        menu.removeClass('is-visible');
        menuClose.removeClass('is-scaled-up');
      },1300);
    },500);

  });

  var waitlistTrigger = $('a[data-trigger="waitlist"]'),
      waitlistPopup   = $('.waitlist'),
      waitlistClose   = $('#waitlist-close'),
      popupContent      = $('.popup-wrapper');

      // Write-a-Line Popup Open
      waitlistTrigger.on('click', function(event){
        event.preventDefault();
        var morphing = anime({
          targets: '.waitlist',
          translateY: '200vh',
          easing: 'linear',
          duration: 1300
        });
        var morphing = anime({
          targets: '.waitlist .popup-morphing-path',
          d: [
            { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' },
            { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' }
          ],
          easing: 'easeInQuad',
          elasticity: 100,
          duration: 500,
          delay: 300
        });
        setTimeout(function(){
          waitlistPopup.find(popupContent).addClass('is-visible');
          waitlistClose.addClass('is-scaled-up');
        },1300);
      });
      // Write-a-Line Popup Close
      waitlistClose.on('click', function(event){
        event.preventDefault();
        var moving = anime({
          targets: '.waitlist',
          translateY: '0',
          easing: 'linear',
          duration: 1300
        });
        var morphing = anime({
          targets: '.waitlist .popup-morphing-path',
          d: [
            { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' },
            { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' }
          ],
          easing: 'easeOutQuad',
          elasticity: 100,
          duration: 800,
          delay: 0
        });
        setTimeout(function(){
          waitlistPopup.find(popupContent).removeClass('is-visible');
          waitlistClose.removeClass('is-scaled-up');
        },1300);
      });
  // --------------------------------------------- //
  // Navigation, Notify-me & Write-a-Line Popup Transition End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // PhotoSwipe Gallery Images Replace Start
  // --------------------------------------------- //

  // --------------------------------------------- //
  // PhotoSwipe Gallery Images Replace End
  // --------------------------------------------- //

});
