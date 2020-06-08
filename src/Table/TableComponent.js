import React, { Component } from "react";
import TableRowHeadComponent from "./TableRowHeadComponent";
import Modal from "react-bootstrap/Modal";

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      clickedElement: [],
    };
  }
  render() {
    return (
      <div>
        <table className="table table-hover table-bordered">
          <thead>
            <TableRowHeadComponent columns={this.props.headLine} />
          </thead>
          <tbody>
            {this.props.splittedRows.map((element, i) => {
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
                        this.setState({ clickedElement: element, show: true });
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
          <button type="button" className="btn btn-success" onClick={this.props.editOnClick} >
            Edit
          </button>
        </Modal>
      </div>
    );
  }
}

export default TableComponent;
