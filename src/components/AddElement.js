import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

class AddElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Hauptartikelnr: "",
      Artikelname: "",
      Hersteller: "",
      Beschreibung: "",
      Materialangaben: "",
      Geschlecht: "",
      Produktart: "",
      Armel: "",
      Bein: "",
      Kragen: "",
      Herstellung: "",
      Taschenart: "",
      Grammatur: "",
      Material: "",
      Ursprungsland: "",
      Bildname: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
    console.log(this.state.Hauptartikelnr);
  }

  render() {
    return (
      <Form>
        <Form.Group as={Row} style={{ marginTop: "-10px" }}>
          <Form.Label column sm={2}>
            Hauptartikelnr
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Hauptartikelnr"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: "-10px" }}>
          <Form.Label column sm={2}>
            Artikelname
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Artikelname"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: "-10px" }}>
          <Form.Label column sm={2}>
            Hersteller
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Hersteller"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: "-10px" }}>
          <Form.Label column sm={2}>
            Beschreibung
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Beschreibung"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: "-10px" }}>
          <Form.Label column sm={2}>
            Materialangaben
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Materialangaben"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: "-10px" }}>
          <Form.Label column sm={2}>
            Geschlecht
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Geschlecht"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: "-10px" }}>
          <Form.Label column sm={2}>
            Produktart
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Produktart"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="formHorizontalPassword"
          style={{ marginTop: "-10px" }}
        >
          <Form.Label column sm={2}>
            Ärmel
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Armel"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="formHorizontalPassword"
          style={{ marginTop: "-10px" }}
        >
          <Form.Label column sm={2}>
            Bein
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Bein"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="formHorizontalPassword"
          style={{ marginTop: "-10px" }}
        >
          <Form.Label column sm={2}>
            Kragen
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Kragen"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="formHorizontalPassword"
          style={{ marginTop: "-10px" }}
        >
          <Form.Label column sm={2}>
            Herstellung
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Herstellung"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="formHorizontalPassword"
          style={{ marginTop: "-10px" }}
        >
          <Form.Label column sm={2}>
            Taschenart
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Taschenart"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="formHorizontalPassword"
          style={{ marginTop: "-10px" }}
        >
          <Form.Label column sm={2}>
            Grammatur
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Grammatur"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="formHorizontalPassword"
          style={{ marginTop: "-10px" }}
        >
          <Form.Label column sm={2}>
            Material
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Material"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="formHorizontalPassword"
          style={{ marginTop: "-10px" }}
        >
          <Form.Label column sm={2}>
            Ursprungsland
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Ursprungsland"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="formHorizontalPassword"
          style={{ marginTop: "-10px" }}
        >
          <Form.Label column sm={2}>
            Bildname
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              name="Bildname"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="formHorizontalPassword"
          style={{ marginTop: "-10px" }}
        >
          <Form.Label column sm={2}>
            Bearbeiten
          </Form.Label>
          <Col sm={9} style={{ marginLeft: "40px" }}>
            <Form.Control
              type="text"
              defaultValue={this.props.value}
              onChange={(evt) => this.handleChange(evt)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col>
            <Button
              style={{ width: "100%" }}
              onClick={() => this.props.handleSubmit(this.state)}
            >
              Element hinzufügen
            </Button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
}

export default AddElement;
