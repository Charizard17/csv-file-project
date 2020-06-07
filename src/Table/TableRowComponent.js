import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
// import "./TableColumnGrid.css";

class TableRowComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     show : false
  //   };
  // }
  render() {
    return (
        <tr className="grid-container">
          <th className="Hauptartikelnr" scope="row">
            {this.props.data[0]}
          </th>
          <td className="Artikelname">{this.props.data[1]}</td>
          <td className="Hersteller">{this.props.data[2]}</td>
          <td className="Beschreibung">{this.props.data[3]}</td>
          <td className="Materialangaben">{this.props.data[4]}</td>
          <td className="Geschlecht">{this.props.data[5]}</td>
          <td className="Produktart">{this.props.data[6]}</td>
          <td className="Armel">{this.props.data[7]}</td>
          <td className="Bein">{this.props.data[8]}</td>
          <td className="Kragen">{this.props.data[9]}</td>
          <td className="Herstellung">{this.props.data[10]}</td>
          <td className="Taschenart">{this.props.data[11]}</td>
          <td className="Grammatur">{this.props.data[12]}</td>
          <td className="Material">{this.props.data[13]}</td>
          <td className="Ursprungsland">{this.props.data[14]}</td>
          <td className="Bildname">{this.props.data[15]}</td>
          <td className="Edit">
            <button onClick={()=>{this.setState({show:true})}}>+</button>
          </td>
        </tr>
    );
  }
}

export default TableRowComponent;
