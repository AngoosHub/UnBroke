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

    var outer = $("<div/>").addClass("ad").attr('id', k);

    var title = $("<div/>").addClass("title").html("<p>" + dosTacos[k]["Name"] + "</p>");
    outer.append(title);

    var dis = $("<div/>").addClass("discription").html("<p>" + dosTacos[k]["Deal"] + "</p>");
    outer.append(dis);

    var dates = $("<div/>").addClass("dates");

    var start = $("<div/>").addClass("startDate");
    var p1 = $("<p/>").addClass("dateTitle").html("Start Date:");
    var p2 = $("<p/>").addClass("contentDate").html(dosTacos[k]["Start_Date"]);
    start.append(p1).append(p2);
    dates.append(start);

    var start = $("<div/>").addClass("endDate");
    var p3 = $("<p/>").addClass("dateTitle").html("End Date:");
    var p4 = $("<p/>").addClass("contentDate").html(dosTacos[k]["End_Date"]);
    start.append(p3).append(p4);
    dates.append(start);
    outer.append(dates);

    var dlt = $('<button/>').addClass('delete').html('<p>Delete</p>');
    outer.append(dlt);

    
   

    $(".content").append(outer);
  }
}

var goHome = document.getElementById("menuImage");
goHome.addEventListener("click", function() {
  window.location.href = "../Create Post/index.html";
})


var testvar = document.getElementsByClassName("delete");
console.log(testvar);
console.log(testvar[0]);
console.log(testvar[1]);
