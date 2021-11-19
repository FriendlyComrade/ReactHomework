import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import style from "./Form.module.css"

export default class Form extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      inputValue: "",
      focus: false,
      isChecked: false
    };
    this.textInput = React.createRef();
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  changeInputValue = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  focusTextInput = (e) => {
    this.textInput.current.focus();
    e.preventDefault();
  }

  toggleCheck(e) {
      this.setState({isChecked: e.target.checked})
  }

  render() {
    console.log("render");
    let btn; 
    this.state.inputValue === "реакт"
      ? (btn = <button className={style.btn_disabled} disabled>Send</button>)
      : (btn = <button className={style.btn_active}>Send</button>);

    return (
      <form className={style.formBlock}>
        <input
          type="text"
          value={this.inputValue}
          onChange={this.changeInputValue}
          ref={this.textInput}
          className={style.textInput}
        />
        {btn}
        <input  type="submit" value="Focus" onClick={this.focusTextInput} className={style.btn_active} />
        <Checkbox isChecked={this.state.isChecked} onChange={this.toggleCheck}/>
      </form>
    );
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch");
  }
}
