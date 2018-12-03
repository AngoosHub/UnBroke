
var btnpress = document.getElementById("btn");

var dosTacos = database.ref("businesses/Dos Tacos/Coupons");
var editId = database.ref('businesses/current');
var idnew = editId["id"];
console.log(dosTacos);
console.log(editId);
console.log(idnew);

btnpress.addEventListener("click", function(){
  var title = document.getElementById("promoTitle").value;
  document.getElementById("promoTitle").value = "";
  var dis = document.getElementById("discription").value;
  document.getElementById("discription").value = "";
  var startDate = document.getElementById("startDate").value;
  document.getElementById("startDate").value = "";
  var endDate = document.getElementById("endDate").value;
  document.getElementById("endDate").value = "";


  var data = {
    Name: title,
    Deal: dis,
    End_Date: endDate,
    Start_Date: startDate
  }

  ref.update(data);
});

var goHome = document.getElementById("homeImage");
goHome.addEventListener("click", function() {
  window.location.href = "../Business home/index.html";
})

var postNew = document.getElementById("menuImage");
postNew.addEventListener("click", function() {
  window.location.href = "../Create Post/index.html";
})
