Template.main.rendered = function() {
  // Menu settings
  $('#menuToggle, .menu-close').on('click', function(){
    $('#menuToggle').toggleClass('active');
    $('body').toggleClass('body-push-toleft');
    $('#theMenu').toggleClass('menu-open');
  });
};

//Google Analytics
Router.onRun( function() {
  GAnalytics.pageview(this.route.name);
  //console.log('reached a page', this.route.name);
});

//Only page
Router.map(function() {
  this.route(
    'main', {
      path: '/'
      }
  );
});
