var ref = database.ref("businesses");

ref.on("value", refData);

function refData(data) {

  $(".content").remove();
  var newBodyEl = $("<div/>").addClass("content");
  $("body").append(newBodyEl);

  var businesses = data.val();
  var dosTacos = businesses["Dos Tacos"]["Coupons"];
  var keys = Object.keys(dosTacos);

  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];

    var outer = $("<div/>").addClass("ad");

    var title = $("<div/>").addClass("title").html("<p>" + k + "</p>");
    outer.append(title);

    var dis = $("<div/>").addClass("discription").html("<p>" + dosTacos[k]["Deal"] + "</p>");
    outer.append(dis);

    var dates = $("<div/>").addClass("dates");

    var start = $("<div/>").addClass("startDate");
    var p1 = $("<p/>").addClass("dateTitle").html("Start Date:");
    var p2 = $("<p/>").addClass("contentDate").html(dosTacos[k]["Start date"]);
    start.append(p1).append(p2);
    dates.append(start);

    var start = $("<div/>").addClass("endDate");
    var p3 = $("<p/>").addClass("dateTitle").html("End Date:");
    var p4 = $("<p/>").addClass("contentDate").html(dosTacos[k]["End date"]);
    start.append(p3).append(p4);
    dates.append(start);

    outer.append(dates);

    $(".content").append(outer);
  }
}