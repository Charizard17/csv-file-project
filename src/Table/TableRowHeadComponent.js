import React, { Component } from "react";
// import "./TableColumnGrid.css";

class TableRowHeadComponent extends Component {
  render() {
    return (
      <tr className="grid-container">
        <th className="Hauptartikelnr" scope="col">{this.props.columns[0]}</th>
        <th className="Artikelname" scope="col">{this.props.columns[1]}</th>
        <th className="Hersteller" scope="col">{this.props.columns[2]}</th>
        <th className="Beschreibung" scope="col">{this.props.columns[3]}</th>
        <th className="Materialangaben" scope="col">{this.props.columns[4]}</th>
        <th className="Geschlecht" scope="col">{this.props.columns[5]}</th>
        <th className="Produktart" scope="col">{this.props.columns[6]}</th>
        <th className="Armel" scope="col">{this.props.columns[7]}</th>
        <th className="Bein" scope="col">{this.props.columns[8]}</th>
        <th className="Kragen" scope="col">{this.props.columns[9]}</th>
        <th className="Herstellung" scope="col">{this.props.columns[10]}</th>
        <th className="Taschenart" scope="col">{this.props.columns[11]}</th>
        <th className="Grammatur" scope="col">{this.props.columns[12]}</th>
        <th className="Material" scope="col">{this.props.columns[13]}</th>
        <th className="Ursprungsland" scope="col">{this.props.columns[14]}</th>
        <th className="Bildname" scope="col">{this.props.columns[15]}</th>
        <th className="Edit" scope="col">Edit</th>
      </tr>
    );
  }
}

export default TableRowHeadComponent;
