var ref = database.ref("businesses");

ref.on("value", refData);

function refData(data) {
  var businesses = data.val();
  console.log(businesses["Kong's Korean"].Location);
}
