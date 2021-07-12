import React from "react";
import "./index.css";

class TestForm extends React.Component {
  state = {
    text: "",
    checkbox: false,
    select: "1",
    radio: "1",
  };

  result = "";

  handleChange = (e) => {
    const { name, type, value = 0, checked = false } = e.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.result = JSON.stringify(this.state);
    this.setState(this.state); //для принудительной перерисовки компонента
  };

  render() {
    return (
      <div className="TestForm">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Text
            <input type="text" name="text" value={this.state.text} onChange={(e) => this.handleChange(e)} />
          </label>
          <label>
            Checkbox
            <input type="checkbox" name="checkbox" checked={this.state.checkbox} onChange={(e) => this.handleChange(e)} />
          </label>
          <label>
            Select
            <select name="select" value={this.state.select} onChange={(e) => this.handleChange(e)}>
              <option value="1">Option1</option>
              <option value="2">Option2</option>
              <option value="3">Option3</option>
            </select>
          </label>
          <label>
            Radio
            <input type="radio" name="radio" value="1" checked={this.state.radio === "1"} onChange={(e) => this.handleChange(e)} />1
            <input type="radio" name="radio" value="2" checked={this.state.radio === "2"} onChange={(e) => this.handleChange(e)} />2
            <input type="radio" name="radio" value="3" checked={this.state.radio === "3"} onChange={(e) => this.handleChange(e)} />3
          </label>
          <input type="submit"></input>
        </form>
        <p>{this.result}</p>
      </div>
    );
  }
}

export default TestForm;
