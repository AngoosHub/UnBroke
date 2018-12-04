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

  var current = $('<div/>').addClass('current').html('<p>Restaurants</p>');
  $(newBodyEl).append(current);

  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];

    var outer = $("<div/>").addClass("ad").attr('id', k);

    var title = $("<div/>").addClass("title").html("<p>" + dosTacos["Restaurant"] + "</p>");
    outer.append(title);

    var dis = $("<div/>").addClass("discription").html("<p>" + dosTacos["Location"] + "</p>");
    outer.append(dis);

    var dates = $("<div/>").addClass("dates");

    var image = $("<div/>").addClass("imageDiv").html('<img src="' + coupons[k]["url"] + '">');
    dis.append(image);

    var cuisine = $("<div/>").addClass("cuisine").html("<p>" + dosTacos["Cuisine"] + "</p>");
    dis.append(cuisine);

    var price = $("<div/>").addClass("price").html("<p>" + dosTacos["Price"] + "</p>");
    dis.append(price);

    var reviews = $("<div/>").addClass("reviews").html("<p>" + dosTacos["Reviews"] + "</p>");
    dis.append(reviews);

    var dlt = $('<button/>').addClass('delete').html('<p>View</p>');
    dis.append(dlt);

    var edit = $('<button/>').addClass('edit').html('<p>Like</p>');
    dis.append(edit); 

    $(".content").append(outer);
  }

  var deleteBtn = $("button.delete");
  for (var i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function() {
      window.location.href = "couponlist.html";
    }) 
    }
  }

  var editBtn = $("button.edit");
  for (var i = 0; i < editBtn.length; i++) {
    editBtn[i].addEventListener('click', pressEdit)
  }

var goHome = document.getElementById("menuImage");
goHome.addEventListener("click", function () {
  window.location.href = "../Create Post/index.html";
})

function pressDelete(x) {
  var coupons = database.ref("businesses/Dos Tacos/Coupons");
  var id = x.target.parentElement.parentElement.getAttribute('id');
  coupons.child(id).remove();
}

function pressEdit(x) {
  var coupons = database.ref("businesses/Dos Tacos/Coupons");
  var id = x.target.parentElement.parentElement.getAttribute('id');
  var current = {
    id: id
  };
  database.ref('businesses/current').update(current);
  window.location.href = "../Edit Post/index.html";
}