import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { StyledButton, StyledInput } from "./css/style";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      initial: true
    }
  }

  updateDisplay = (e) => {
    if (this.state.initial) {
      this.setState({
        number: e.target.innerHTML,
        initial: false
      })
    } else {
      this.setState({
        number: this.state.number + e.target.innerHTML
      })
    }
  }

  operate = () => {

  }

  reset = () => {
    this.setState({
      number: 0,
      initial: true
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col><StyledInput readOnly value={this.state.number} /></Col>
        </Row>
        <Row>
          <Col xs={{ size: 3, offset: 9 }}><StyledButton onClick={this.reset}>C</StyledButton></Col>
        </Row>
        <Row>
          <Col><StyledButton onClick={this.updateDisplay}>7</StyledButton></Col>
          <Col><StyledButton onClick={this.updateDisplay}>8</StyledButton></Col>
          <Col><StyledButton onClick={this.updateDisplay}>9</StyledButton></Col>
          <Col><StyledButton onClick={this.updateDisplay}> / </StyledButton></Col>
        </Row>
        <Row>
          <Col><StyledButton onClick={this.updateDisplay}>4</StyledButton></Col>
          <Col><StyledButton onClick={this.updateDisplay}>5</StyledButton></Col>
          <Col><StyledButton onClick={this.updateDisplay}>6</StyledButton></Col>
          <Col><StyledButton onClick={this.updateDisplay}> X </StyledButton></Col>
        </Row>
        <Row>
          <Col><StyledButton onClick={this.updateDisplay}>1</StyledButton></Col>
          <Col><StyledButton onClick={this.updateDisplay}>2</StyledButton></Col>
          <Col><StyledButton onClick={this.updateDisplay}>3</StyledButton></Col>
          <Col><StyledButton onClick={this.updateDisplay}> - </StyledButton></Col>
        </Row>
        <Row>
          <Col xs={{ size: 9 }}><StyledButton onClick={this.operate}>=</StyledButton></Col>
          <Col><StyledButton onClick={this.updateDisplay}> + </StyledButton></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
