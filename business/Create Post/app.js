
var btnpress = document.getElementById("btn");
btnpress.addEventListener("click", function(){
  var title = document.getElementById("promoTitle").value;
  document.getElementById("promoTitle").value = "";
  var dis = document.getElementById("discription").value;
  document.getElementById("discription").value = "";
  var startDate = document.getElementById("startDate").value;
  document.getElementById("startDate").value = "";
  var endDate = document.getElementById("endDate").value;
  document.getElementById("endDate").value = "";

  var ref = database.ref('businesses/Dos Tacos/Coupons');

  var data = {
    Name: title,
    Deal: dis,
    End_Date: endDate,
    Start_Date: startDate
  }

  ref.push(data);
});

var goHome = document.getElementById("homeImage");
goHome.addEventListener("click", function() {
  window.location.href = "../Business home/index.html";
})
