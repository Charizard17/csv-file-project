function processFile() {
  let file = document.querySelector("#myFile").files[0];
  let reader = new FileReader();
  reader.readAsText(file);

  // When the file finish load
  reader.onload = function (event) {
    // Get the file.
    let csv = event.target.result;
    let headLine = csv.indexOf("\n");
    let rest = csv.slice(0, headLine).split(";");
    console.log(rest);

    let otherLines = csv.slice(headLine, csv.length);
    // Split and get the rows in an array
    let rows = otherLines.split(".jpg");

    let splittedRows = [];
    for (let i = 0; i < rows.length; i++) {
      splittedRows.push(rows[i].split(";"));
    }
    console.log(splittedRows);

    buildTable(splittedRows);

    function buildTable(data) {
      let table = document.getElementById("myTable");

      for (let i = 0; i < splittedRows.length / 50; i++) {
        let rowss = `<tr>
                              <td>${data[i][0]}</td>
                              <td>${data[i][1]}</td>
                              <td>${data[i][2]}</td>
                              <td>${data[i][3]}</td>
                              <td>${data[i][4]}</td>
                              <td>${data[i][5]}</td>
                              <td>${data[i][6]}</td>
                              <td>${data[i][7]}</td>
                              <td>${data[i][8]}</td>
                              <td>${data[i][9]}</td>
                              <td>${data[i][10]}</td>
                              <td>${data[i][11]}</td>
                              <td>${data[i][12]}</td>
                              <td>${data[i][13]}</td>
                              <td>${data[i][14]}</td>
                              <td>${data[i][15]}.jpg</td>
                           </tr>`;
        table.innerHTML += rowss;
      }
    }
  };
}

// function buildTable(data) {
//     let table = document.getElementById("myTable");

//     for (let i = 0; i < 10; i++) {
//       let rowss = `<tr>
//                           <td>${data[i][0]}</td>
//                           <td>${data[i][1]}</td>
//                           <td>${data[i][2]}</td>
//                           <td>${data[i][3]}</td>
//                           <td>${data[i][4]}</td>
//                           <td>${data[i][5]}</td>
//                           <td>${data[i][6]}</td>
//                           <td>${data[i][7]}</td>
//                           <td>${data[i][8]}</td>
//                           <td>${data[i][9]}</td>
//                           <td>${data[i][10]}</td>
//                           <td>${data[i][11]}</td>
//                           <td>${data[i][12]}</td>
//                           <td>${data[i][13]}</td>
//                           <td>${data[i][14]}</td>
//                           <td>${data[i][15]}</td>
//                        </tr>`;
//       table.innerHTML += rowss;
//     }
//   }
