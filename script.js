function processFile() {
  var file = document.querySelector("#myFile").files[0];
  var reader = new FileReader();
  reader.readAsText(file);

  //When the file finish load
  reader.onload = function (event) {
    //get the file.
    var csv = event.target.result;

    //split and get the rows in an array
    var rows = csv.split(".jpg");

    for (var x = 1; x <= 16; x++) {
      rowsX = rows[x].split(";");
      console.log(rowsX);

      document.getElementById(`id${x-1}`).innerHTML = rowsX[x-1];
    }
  };
}
