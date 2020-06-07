import React, { Component } from "react";
import TableRowHeadComponent from "./TableRowHeadComponent";
import TableRowComponent from "./TableRowComponent";
import Modal from "react-bootstrap/Modal";

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show : false,
      clickedElement: []
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

                <tr className="grid-container">
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
                  <td className="Bildname">{element[15]}</td>
                  <td className="Edit">
                    <button onClick={()=>{this.setState({clickedElement:element, show:true})}}>+</button>
                  </td>
                </tr>

              );
            })}
          </tbody>
        </table>
        <Modal
          show={this.state.show}
          onHide={()=>this.setState({show:false}) }
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Element Edit
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              [{this.state.clickedElement[3]}]
            </p>
          </Modal.Body>

        </Modal>
      </div>
    );
  }
}

export default TableComponent;
