var local = 'http://localhost/radek.tech/';
var live = 'http://www.radek.tech/';

if(window.location.href == local || window.location.href == live){
  $('#profile-img').hide();
  $('#profile-title').hide();
}

$('.goals-div ul').hide();

$(function(){
  var $linksColor = $('a');
  $linksColor.addClass('exLinks');

  $('#profile-img').fadeIn(950);
  $('#profile-title').fadeIn(2400);

  if(window.location.href == local + 'skills-and-work' || window.location.href == live + 'skills-and-work'){
    var $goalsList    = $('.goals-list');
    var $goalsButton  = $('.goals-button');

    $goalsButton.on('click', function(){
      $(this).siblings().fadeToggle(350);
    });

    $('.work-list li a').attr('target', '_blank');
  }
});
