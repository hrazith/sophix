$(function() {
  $('.sortable-items').sortable({
    placeholder: "test-placeholder",
    over: function() {
      $('.test-placeholder').stop().animate({
        height: 0
      }, 400);
    },
    change: function() {
      $('.test-placeholder').stop().animate({
        height: 50
      }, 400);
    }
  });
});