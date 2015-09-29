courseRoster.directive("hometext", function() {
  return {
    template: "Home"
  }
});

courseRoster.directive("changeClass", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      element.toggleClass(attrs.changeClass);
    });
  }
});

courseRoster.directive("debug", function($compile) {
  return {
    terminal:true,
    priority: 100000,
    link: function (scope, element) {
      var clone = element.clone();
      element.attr("style", "color:red");
      clone.removeAttr("debug");
      var clonedElement = $compile(clone)(scope);
      element.after(clonedElement);
    }
  }
})
