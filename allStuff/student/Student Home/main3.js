var ref = database.ref("businesses");

ref.on("value", refData);



function refData(data) {

  $(".content").remove();
  var newBodyEl = $("<div/>").addClass("content");
  $("body").append(newBodyEl);

  var businesses = data.val();
  var dosTacos = businesses["Dos Tacos"];
  var coupons = businesses["Dos Tacos"]["Coupons"];

  var keys = Object.keys(coupons);

  var current = $('<div/>').addClass('current').html('<p>My Coupons</p>');
  $(newBodyEl).append(current);

  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];

    var outer = $("<div/>").addClass("ad").attr('id', k);

    var title = $("<div/>").addClass("title").html("<p>" + coupons[k]["Name"] + "</p>");
    outer.append(title);

    var dis = $("<div/>").addClass("discription").html("<p>" + coupons[k]["Deal"] + "</p>");
    outer.append(dis);

    var image = $("<div/>").addClass("imageDiv").html('<img src="' + coupons[k]["url"] + '">');
    dis.append(image);

    var QR = $("<div/>").addClass("QR").html('<img src="' + dosTacos["QR"] + '">');
    dis.append(QR);

    var dates = $("<div/>").addClass("dates");

    var start = $("<div/>").addClass("startDate");
    var p1 = $("<p/>").addClass("dateTitle").html("Start Date:");
    var p2 = $("<p/>").addClass("contentDate").html(coupons[k]["Start_Date"]);
    start.append(p1).append(p2);
    dates.append(start);

    var start = $("<div/>").addClass("endDate");
    var p3 = $("<p/>").addClass("dateTitle").html("End Date:");
    var p4 = $("<p/>").addClass("contentDate").html(coupons[k]["End_Date"]);
    start.append(p3).append(p4);
    dates.append(start);
    outer.append(dates);

    var dlt = $('<button/>').addClass('delete').html('<p>Print</p>');
    dis.append(dlt);

    var edit = $('<button/>').addClass('edit').html('<p>Edit</p>');
    dis.append(edit);

    $(".content").append(outer);
  }

  var deleteBtn = $("button.delete");
  for (var i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function() {
        window.print();
    })
  }

  var editBtn = $("button.edit");
  for (var i = 0; i < editBtn.length; i++) {
    editBtn[i].addEventListener('click', pressEdit)
  }
}

var goHome = document.getElementById("menuImage");
goHome.addEventListener("click", function () {
  window.location.href = "../Create Post/index.html";
})

var goHome = document.getElementById("menuImage");
goHome.addEventListener("click", function () {
  window.location.href = "../Create Post/index.html";
})

var signOut = document.getElementById("signOut");
signOut.addEventListener("click", function () {
  window.location.href = "../../student/Launch_Login_Signup/new-login/login.html";
})

function pressDelete(x) {
  var dosTacos = database.ref("businesses/Dos Tacos/Coupons");
  var id = x.target.parentElement.parentElement.getAttribute('id');
  dosTacos.child(id).remove();
}

function pressEdit(x) {
  var dosTacos = database.ref("businesses/Dos Tacos/Coupons");
  var id = x.target.parentElement.parentElement.getAttribute('id');
  var current = {
    id: id
  };
  database.ref('businesses/current').update(current);
  window.location.href = "../Edit Post/index.html";
}