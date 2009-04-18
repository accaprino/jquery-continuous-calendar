/*function sut() {
  return jQuery("#systemUnderTest").get(0).contentWindow;
}
function $() {
  return sut().jQuery.apply(null, arguments);
}*/
function click(selector) {
  $(selector).click();
}
function setText(selector, value) {
  $(selector).val(value).keyup();
}
function value(selector) {
  var elem = $(selector);
  if(elem.is("input")) {
    return elem.val();
  } else {
  return elem.text();
  }
}
function assertEmpty(selector) {
  ok($(selector).length == 0, selector + " should be empty");
}
function assertNotEmpty(selector) {
  ok($(selector).length > 0, selector + " should not be empty");
}
function resetTextInputs() {
  setText("input:text", "");
}