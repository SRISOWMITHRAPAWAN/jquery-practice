//to hide using single click using tag selector
$(document).ready(function () {
  $('p').click(function () {
    $('p').hide();
  });
});
///to hide using double click using tag selector
$(document).ready(function () {
  $('div').dblclick(function () {
    $('div').hide();
  });
});

////to hide using mouse action and select by using id
$(document).ready(function () {
  $('.container').mouseenter(function () {
    $('.container').hide();
  });
});

////to change the background color of the div on mouse hover

$(document).ready(function () {
  $('.hovdiv').hover(function () {
    $('.hovdiv').css('background-color', 'blue');
  });
});
////////////////multiple events using on
$(document).ready(function () {
  $('h1').on({
    mouseenter: function () {
      $(this).css('background-color', 'lightgray');
    },
    mouseleave: function () {
      $(this).css('background-color', 'lightblue');
    },
    click: function () {
      $(this).css('background-color', 'yellow');
    },
  });
});

////////////////effects/////////////////
/////hide and show////
$(document).ready(function () {
  $('#hide').click(function () {
    $('h2').hide();
  }),
    $('#show').click(function () {
      $('h2').show();
    });
});

//////hide and show smooth transition////

$(document).ready(function () {
  $('#hide').click(function () {
    $('h3').hide(1000);
  }),
    $('#show').click(function () {
      $('h3').show(1000);
    });
});

//////toogle///////////
$(document).ready(function () {
  $('#toogl').click(function () {
    $('.toog').toggle();
  });
});

//////toogle component smooth transitions///////////
// $(document).ready(function () {
//   $('#toogl').click(function () {
//     $('.toog').toggle(1000);
//   });
// });

//////fade effect/////////
// 1.fadein
// 2.fadeout
// 3.fadetoogle
// 4.fadeto

////fadein/////////////

$(document).ready(function () {
  $('.fadebutton').click(function () {
    $('#div1').fadeIn();
    $('#div2').fadeIn(5000);
    $('#div3').fadeIn(10000);
  });
});

//////fadeout//////

$(document).ready(function () {
  $('.fadeoutbutton').click(function () {
    $('#div11').fadeOut();
    $('#div12').fadeOut(2000);
    $('#div13').fadeOut(3000);
  });
});

////fagde toogle////
$(document).ready(function () {
  $('#fadetoggle').click(function () {
    $('#div21').fadeToggle();
    $('#div22').fadeToggle('slow');
    $('#div23').fadeToggle(5000);
  });
});

//fadeto////certain opacity//////
$(document).ready(function () {
  $('#fadeto').click(function () {
    $('#div31').fadeTo('slow', 0.15);
    $('#div32').fadeTo('slow', 0.4);
    $('#div33').fadeTo('slow', 0.7);
  });
});

///////////////slide down//////////////
$(document).ready(function () {
  $('#head').click(function () {
    $('#slide').slideDown();
  });
});

////////////slideup/////////
$(document).ready(function () {
  $('#head1').click(function () {
    $('#slide1').slideUp();
  });
});

//////slideToogle//////
$(document).ready(function () {
  $('#head2').click(function () {
    $('#slide2').slideToggle();
  });
});

///////animate with multiple properties/////
$(document).ready(function () {
  $('#anime').click(function () {
    $('#animee').animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px',
    });
  });
});

/////animate with predefined values////////
$(document).ready(function () {
  $('#anime1').click(function () {
    $('#animee1').animate({
      height: 'toggle',
    });
  });
});

////que animation/////////////////////
$(document).ready(function () {
  $('#animeque').click(function () {
    var div = $('#que');
    div.animate({ height: '300px', opacity: '0.4' }, 'slow');
    div.animate({ width: '300px', opacity: '0.8' }, 'slow');
    div.animate({ height: '100px', opacity: '0.4' }, 'slow');
    div.animate({ width: '100px', opacity: '0.8' }, 'slow');
  });
});
