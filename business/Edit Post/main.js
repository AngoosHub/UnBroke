
var btnpress = document.getElementById("btn");

var ref = database.ref('businesses');
ref.on('value', function (data){
  var businesses = data.val();
  var id = businesses["current"]["id"];
  var currentAd = database.ref('businesses/Dos Tacos/Coupons/' + id);
  console.log(currentAd);
  console.log(id);

btnpress.addEventListener("click", function(){
  var title = document.getElementById("promoTitle").value;
  var dis = document.getElementById("discription").value;
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;

  var data = {
    Name: title,
    Deal: dis,
    End_Date: endDate,
    Start_Date: startDate
  }
  currentAd.set(data);
  window.location.href = "../Business home/index.html";
});

var goHome = document.getElementById("homeImage");
goHome.addEventListener("click", function() {
  window.location.href = "../Business home/index.html";
})

var postNew = document.getElementById("menuImage");
postNew.addEventListener("click", function() {
  window.location.href = "../Create Post/index.html";
})
})