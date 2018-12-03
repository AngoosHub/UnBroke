$("#file").on("change", function (event) {
  selectedFile = event.target.files[0];
});



function submitForm(form) {
  console.log("works");
  var title = form.promoTitle.value;
  var dis = form.discription.value;
  var startDate = form.startDate.value;
  var endDate = form.endDate.value;

  var fileName = selectedFile.name;
  var storageRef = firebase.storage().ref('/images/' + fileName);
  var uploadTask = storageRef.put(selectedFile);

  var data = {
    Name: title,
    Deal: dis,
    End_Date: endDate,
    Start_Date: startDate
  }

  uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
    data["url"] = downloadURL;
    console.log(downloadURL);
  });


  console.log(data);



  var ref = database.ref('businesses/Dos Tacos/Coupons');
  ref.push(data);

  //window.location.href = "../Business home/index.html";
}