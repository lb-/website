Template.main.rendered = function() {
  smoothScroll.init();
}

Template.main.events({
  'click #menuToggle, click .menu-close' : function(event, template) {
    $('#menuToggle').toggleClass('active');
    $('body').toggleClass('body-push-toleft');
    $('#theMenu').toggleClass('menu-open');
  },
  'click .trackEvent' : function(event, template) {
    GAnalytics.event("click", event.currentTarget.href);
  }
});

Router.onRun( function() {
  GAnalytics.pageview(this.route.name);
});

Router.map(function() {
  this.route(
    'main', {
      path: '/'
      }
  );
});
