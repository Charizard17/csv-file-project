import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { CSVLink } from "react-csv";
import AddElement from "./components/AddElement";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileReader: "",
      headLine: "",
      splittedRows: [],
      show: false,
      showAdd: false,
      clickedElement: [],
      newElement: [],
      value: "",
      exportArtikels: "",
    };
  }
  handleFileRead = (e) => {
    const content = this.fileReader.result;
    let sliceIndex = content.indexOf("\n");
    let headLine = content.slice(0, sliceIndex).split(";");
    this.setState({ headLine });
    // console.log(headLine);

    let otherLines = content.slice(sliceIndex, content.length);
    let rows = otherLines.split(".jpg");
    let splittedRows = [];
    for (let i = 0; i < 10; i++) {
      splittedRows.push(rows[i].split(";"));
    }
    this.setState({ splittedRows });

    console.log(splittedRows);
  };

  handleFileChosen = (file) => {
    this.fileReader = new FileReader();
    this.fileReader.onloadend = this.handleFileRead;
    this.fileReader.readAsText(file);
  };

  updateInputValue(newValue, index) {
    newValue.preventDefault();
    let tempArr = this.state.clickedElement;
    tempArr[index] = newValue.target.value;
    this.setState({
      clickedElement: tempArr,
    });
  }

  handleSubmit(newElement) {
    console.log("handle submit func worked");
    let tempArr = [];
    let splittedRowsTemp = this.state.splittedRows;

    tempArr.push(newElement.Hauptartikelnr);
    tempArr.push(newElement.Artikelname);
    tempArr.push(newElement.Hersteller);
    tempArr.push(newElement.Beschreibung);
    tempArr.push(newElement.Materialangaben);
    tempArr.push(newElement.Geschlecht);
    tempArr.push(newElement.Produktart);
    tempArr.push(newElement.Armel);
    tempArr.push(newElement.Bein);
    tempArr.push(newElement.Kragen);
    tempArr.push(newElement.Herstellung);
    tempArr.push(newElement.Taschenart);
    tempArr.push(newElement.Grammatur);
    tempArr.push(newElement.Material);
    tempArr.push(newElement.Ursprungsland);
    tempArr.push(newElement.Bildname.push);

    splittedRowsTemp.push(tempArr);

    this.setState({
      splittedRows: splittedRowsTemp,
      showAdd: false,
    });
  }

  combineAndExport() {
    let combinedSplittedRows = "";

    for (let i = 0; i < this.state.headLine.length; i++) {
      combinedSplittedRows = combinedSplittedRows +  this.state.headLine[i] + ";";
    }

    for (let i = 0; i < this.state.splittedRows.length; i++) {
      let j = 0;
      for(j= 0 ; j < this.state.splittedRows[i].length - 1; ++j)
      {
        combinedSplittedRows = combinedSplittedRows +  this.state.splittedRows[i][j] + ";";
      }
      combinedSplittedRows = combinedSplittedRows +  this.state.splittedRows[i][j] + ".jpg";
      if(i !==  this.state.splittedRows.length-1)
       combinedSplittedRows = combinedSplittedRows + "\n";

    }

    this.setState(
      {
        exportArtikels: combinedSplittedRows,
      },
      () => {
        console.log(this.state.exportArtikels);
      }
    );
  }

  render() {
    return (
      <div className="mt-3 ml-5">
        <input
          type="file"
          id="file"
          className="input-file"
          accept=".csv"
          onChange={(e) => this.handleFileChosen(e.target.files[0])}
        />
        <button
          type="button"
          className="btn btn-primary float-right"
          style={{ marginRight: "6%" }}
          onClick={() => {
            this.setState({
              showAdd: true,
            });
          }}
        >
          Neu Element Hinzufügen
        </button>
        <br />
        <CSVLink data={this.state.exportArtikels}>
          <button
            type="button"
            onClick={() => this.combineAndExport()}
            className="btn btn-warning text-primary mt-2"
          >
            CSV-Datei herunterladen
          </button>
        </CSVLink>
        <div style={{ width: "95%", height: "90vh", overflow: "scroll" }}>
          <h2 className="text-center">Tabelle</h2>
          <table
            className="table table-hover table-bordered"
            style={{ fontSize: "13px" }}
          >
            <thead>
              <tr>
                <th scope="col">{this.state.headLine[0]}</th>
                <th scope="col">{this.state.headLine[1]}</th>
                <th scope="col">{this.state.headLine[2]}</th>
                <th scope="col">{this.state.headLine[3]}</th>
                <th scope="col">{this.state.headLine[4]}</th>
                <th scope="col">{this.state.headLine[5]}</th>
                <th scope="col">{this.state.headLine[6]}</th>
                <th scope="col">{this.state.headLine[7]}</th>
                <th scope="col">{this.state.headLine[8]}</th>
                <th scope="col">{this.state.headLine[9]}</th>
                <th scope="col">{this.state.headLine[10]}</th>
                <th scope="col">{this.state.headLine[11]}</th>
                <th scope="col">{this.state.headLine[12]}</th>
                <th scope="col">{this.state.headLine[13]}</th>
                <th scope="col">{this.state.headLine[14]}</th>
                <th scope="col">{this.state.headLine[15]}</th>
                <th scope="col">Bearbeiten</th>
              </tr>
            </thead>
            <tbody>
              {this.state.splittedRows.map((element, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{element[0]}</th>
                    <td>{element[1]}</td>
                    <td>{element[2]}</td>
                    <td>{element[3]}</td>
                    <td>{element[4]}</td>
                    <td>{element[5]}</td>
                    <td>{element[6]}</td>
                    <td>{element[7]}</td>
                    <td>{element[8]}</td>
                    <td>{element[9]}</td>
                    <td>{element[10]}</td>
                    <td>{element[11]}</td>
                    <td>{element[12]}</td>
                    <td>{element[13]}</td>
                    <td>{element[14]}</td>
                    <td>{element[15]}.jpg</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                          this.setState({
                            clickedElement: element,
                            show: true,
                          });
                        }}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Modal
            show={this.state.show}
            onHide={() => this.setState({ show: false })}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Element Bearbeiten
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Hauptartikelnr
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[0]}`}
                  onChange={(evt) => this.updateInputValue(evt, 0)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Artikelname
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[1]}`}
                  onChange={(evt) => this.updateInputValue(evt, 1)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Hersteller
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[2]}`}
                  onChange={(evt) => this.updateInputValue(evt, 2)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Beschreibung
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[3]}`}
                  onChange={(evt) => this.updateInputValue(evt, 3)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Materialangaben
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[4]}`}
                  onChange={(evt) => this.updateInputValue(evt, 4)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Geschlecht
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[5]}`}
                  onChange={(evt) => this.updateInputValue(evt, 5)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Produktart
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[6]}`}
                  onChange={(evt) => this.updateInputValue(evt, 6)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Armel
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[7]}`}
                  onChange={(evt) => this.updateInputValue(evt, 7)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Bein
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[8]}`}
                  onChange={(evt) => this.updateInputValue(evt, 8)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Kragen
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[9]}`}
                  onChange={(evt) => this.updateInputValue(evt, 9)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Herstellung
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[10]}`}
                  onChange={(evt) => this.updateInputValue(evt, 10)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Taschenart
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[11]}`}
                  onChange={(evt) => this.updateInputValue(evt, 11)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Grammatur
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[12]}`}
                  onChange={(evt) => this.updateInputValue(evt, 12)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Material
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[13]}`}
                  onChange={(evt) => this.updateInputValue(evt, 13)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Ursprungsland
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[14]}`}
                  onChange={(evt) => this.updateInputValue(evt, 14)}
                ></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Bildname
                  </span>
                </div>
                <input
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[15]}`}
                  onChange={(evt) => this.updateInputValue(evt, 15)}
                ></input>
              </div>
            </Modal.Body>
          </Modal>
          <Modal
            show={this.state.showAdd}
            onHide={() => this.setState({ showAdd: false })}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Element Bearbeiten
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddElement
                value={this.state.value}
                handleSubmit={this.handleSubmit.bind(this)}
              />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
