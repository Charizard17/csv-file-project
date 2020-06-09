import React, { Component } from "react";
import "./App.css";
import Modal from "react-bootstrap/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileReader: "",
      headLine: "",
      splittedRows: [],
      show: false,
      clickedElement: [],
    };
  }
  handleFileRead = (e) => {
    const content = this.fileReader.result;
    let sliceIndex = content.indexOf("\n");
    let headLine = content.slice(0, sliceIndex).split(";");
    this.setState({ headLine });
    console.log(headLine);

    let otherLines = content.slice(sliceIndex, content.length);
    // Split and get the rows in an array
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

  editOnClick = (newElement) => {
    console.log(newElement);
    console.log(this.state.clickedElement);
  };

  render() {
    return (
      <div>
        <input
          type="file"
          id="file"
          className="input-file"
          accept=".csv"
          onChange={(e) => this.handleFileChosen(e.target.files[0])}
        />
        <div>
          <h2 className="text-center">Table</h2>
          <table className="table table-hover table-bordered">
            <thead>
              <tr className="grid-container">
                <th className="Hauptartikelnr" scope="col">
                  {this.state.headLine[0]}
                </th>
                <th className="Artikelname" scope="col">
                  {this.state.headLine[1]}
                </th>
                <th className="Hersteller" scope="col">
                  {this.state.headLine[2]}
                </th>
                <th className="Beschreibung" scope="col">
                  {this.state.headLine[3]}
                </th>
                <th className="Materialangaben" scope="col">
                  {this.state.headLine[4]}
                </th>
                <th className="Geschlecht" scope="col">
                  {this.state.headLine[5]}
                </th>
                <th className="Produktart" scope="col">
                  {this.state.headLine[6]}
                </th>
                <th className="Armel" scope="col">
                  {this.state.headLine[7]}
                </th>
                <th className="Bein" scope="col">
                  {this.state.headLine[8]}
                </th>
                <th className="Kragen" scope="col">
                  {this.state.headLine[9]}
                </th>
                <th className="Herstellung" scope="col">
                  {this.state.headLine[10]}
                </th>
                <th className="Taschenart" scope="col">
                  {this.state.headLine[11]}
                </th>
                <th className="Grammatur" scope="col">
                  {this.state.headLine[12]}
                </th>
                <th className="Material" scope="col">
                  {this.state.headLine[13]}
                </th>
                <th className="Ursprungsland" scope="col">
                  {this.state.headLine[14]}
                </th>
                <th className="Bildname" scope="col">
                  {this.state.headLine[15]}
                </th>
                <th className="Edit" scope="col">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.splittedRows.map((element, i) => {
                return (
                  <tr key={i} className="grid-container">
                    <th className="Hauptartikelnr" scope="row">
                      {element[0]}
                    </th>
                    <td className="Artikelname">{element[1]}</td>
                    <td className="Hersteller">{element[2]}</td>
                    <td className="Beschreibung">{element[3]}</td>
                    <td className="Materialangaben">{element[4]}</td>
                    <td className="Geschlecht">{element[5]}</td>
                    <td className="Produktart">{element[6]}</td>
                    <td className="Armel">{element[7]}</td>
                    <td className="Bein">{element[8]}</td>
                    <td className="Kragen">{element[9]}</td>
                    <td className="Herstellung">{element[10]}</td>
                    <td className="Taschenart">{element[11]}</td>
                    <td className="Grammatur">{element[12]}</td>
                    <td className="Material">{element[13]}</td>
                    <td className="Ursprungsland">{element[14]}</td>
                    <td className="Bildname">{element[15]}.jpg</td>
                    <td className="Edit">
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
                Element Edit
              </Modal.Title>
              clickedElement
            </Modal.Header>
            <Modal.Body>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Hauptartikelnr
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[0]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Artikelname
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[1]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Hersteller
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[2]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Beschreibung
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[3]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Materialangaben
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[4]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Geschlecht
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[5]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Produktart
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[6]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Armel
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[7]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Bein
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[8]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Kragen
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[9]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Herstellung
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[10]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Taschenart
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[11]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Grammatur
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[12]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Material
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[13]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Ursprungsland
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[14]}`}
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ width: "150px" }}>
                    Bildname
                  </span>
                </div>
                <textarea
                  className="form-control"
                  defaultValue={`${this.state.clickedElement[15]}`}
                ></textarea>
              </div>
            </Modal.Body>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.editOnClick}
            >
              Edit
            </button>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
