var btnpress = document.getElementById("btn");

var goHome = document.getElementById("homeImage");
goHome.addEventListener("click", function () {
  window.location.href = "../Business Home/index.html";
})

var postNew = document.getElementById("menuImage");
postNew.addEventListener("click", function () {
  window.location.href = "../Create Post/index.html";
})

var ref = database.ref('businesses');


document.getElementById("promoTitle").value = 'testing';
document.getElementById("discription").value = 'testing';
document.getElementById("startDate").value = "2014-02-09";
document.getElementById("endDate").value = "2020-09-12";

ref.on('value', function (data) {
  var businesses = data.val();
  var id = businesses["current"]["id"];
  var currentAd = database.ref('businesses/Dos Tacos/Coupons/' + id);
  var thisData = businesses["Dos Tacos"]["Coupons"][id];
  var url = thisData["url"];
  console.log(id);

  document.getElementById("promoTitle").value = thisData["Name"];
  document.getElementById("discription").value = thisData["Deal"];
  document.getElementById("startDate").value = thisData["StartDate"];
  document.getElementById("endDate").value = thisData["EndDate"];

  btnpress.addEventListener("click", function () {
    var title = document.getElementById("promoTitle").value;
    var dis = document.getElementById("discription").value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;

    var data = {
      Name: title,
      Deal: dis,
      End_Date: endDate,
      Start_Date: startDate,
      url: url
    }
    currentAd.set(data);
    window.location.href = "../Business home/index.html";
  });


})