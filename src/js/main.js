  $('#profile-img').hide();
  $('#profile-title').hide();
  $('.goals-div ul').hide();
  $('.goals-meter').hide();

$(function(){

  /*
  * Loading data from percentage array
  * to the spans with a class of .gm + its id
  */
  var percentage = [
    { id: 1, per: 22 },     // React
    { id: 2, per: 100 },      // Gulp
    { id: 3, per: 100 },      // LESS
    { id: 4, per: 3 },      // native PHP
    { id: 5, per: 5 },      // Laravel
    { id: 6, per: 0 },      // Node
    { id: 7, per: 0 },     // PostgreSQL
    { id: 8, per: 0 },     // Express.js
    { id: 9, per: 0 },     // Android
    { id: 10, per: 5 },     // npm
    { id: 11, per: 0 },    // terminal
    { id: 12, per: 0 },    // Kali
    { id: 13, per: 0 }     // Raspberry Pi
  ]

  for(var i=0 ; i<percentage.length ; i++){

    if( percentage[i].per ){

      if( percentage[i].per < 100 )

        $('.gm' + percentage[i].id).html(percentage[i].per + '%');

      else

        $('.gm' + percentage[i].id).html('<div class="glyphicon glyphicon-ok"></div>');

    }

  }

  // Goals fadeIn / fadeOut
  var $linksColor = $('a');
  $linksColor.addClass('exLinks');

  $('#profile-img').fadeIn(950);
  $('#profile-title').fadeIn(2400);

  var $goalsList    = $('.goals-list');
  var $goalsButton  = $('.goals-button');

  $goalsButton.on('click', function(){
    $(this).siblings().fadeToggle(350);
    $('.goals-meter').show();
  });

  $('.work-list li a').attr('target', '_blank');

});
