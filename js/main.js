(function() {

  var panel = document.getElementsByClassName('panel')[0],
      menu  = document.getElementsByClassName('menu')[0];

  var slideout = new Slideout({
    'panel': panel,
    'menu': menu,
    'side': 'right',
    'padding': 340,
    'tolerance': 70,
    'fx': 'ease-in'
  });

  // Toggle button
  document.querySelector('.toggle-button').addEventListener('click', function() {
    menu.style.visibility = 'visible';
    slideout.toggle();
  });



})();
