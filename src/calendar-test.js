module("Charge from customer selector", {
  setup: resetAll,
  tearDown: resetAll
});
test("div has lol", function() {
  assertNotEmpty("#calendar1");
});
test("creates calendar markup", function() {
  $("#calendar2").append("<h2>lol</h2>");
  ok(value("#calendar2"), "lol");
});
test("list dates of week for 18.4.2009", function() {
  var today = new Date("4/18/2009");
  var monday = today.getFirstDateOfWeek(1);
  equals(monday.getDate(),13);
  var sunday = monday.plusDays(6);
  equals(sunday.getDate(), 19);
  //same([1,2,3],[13,14,15,16,17,18,19]);
  //x.getDate() //18
  //getMonth() //3
  //getYear()+1900
  //getDay() la 6, su 0
  //new Date("4/18/2009,22:31")
});
function resetAll() {

}