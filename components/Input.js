import React, { Component } from "react";
import "./Input.css";

// react-native
import { View } from "native-base";

const classNames = require("classnames");

export class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.defaultValue
    };
  }

  onchangeText(e) {
    if (
      this.props.maxlength &&
      (e.target.value || "").length > this.props.maxlength
    ) {
      if (this.props.onMaxLengthExceed instanceof Function)
        this.props.onMaxLengthExceed();
      return;
    }

    this.setState({
      value: e.target.value
    });
    if (this.props.onchangeText instanceof Function) this.props.onchangeText(e);

    if (this.props.multiline === true) {
      if (this.props.autoHeight === true) {
        e.target.style.height = this.props.minHeight + "px";

        if (e.target.scrollHeight <= this.props.maxHeight)
          e.target.style.height = e.target.scrollHeight + "px";
        else e.target.style.height = this.props.maxHeight + "px";
      }
    }
  }

  clear() {
    var event = {
      FAKE_EVENT: true,
      target: this.input
    };
    this.input.value = "";
    this.onchangeText(event);
  }

  componentDidMount() {
    if (this.props.autofocus === true) this.input.focus();
  }

  render() {
    return (
      <View className={classNames("rce-container-input", this.props.className)}>
        {this.props.leftButtons && (
          <View className="rce-input-buttons">{this.props.leftButtons}</View>
        )}
        {this.props.multiline === false ? (
          <input
            ref={ref => {
              if (this.props.inputRef instanceof Function)
                this.props.inputRef(ref);
              this.input = ref;
            }}
            type={this.props.type}
            className={classNames("rce-input")}
            placeholder={this.props.placeholder}
            value={this.state.value}
            style={this.props.inputStyle}
            onchangeText={this.onchangeText.bind(this)}
            onCopy={this.props.onCopy}
            onCut={this.props.onCut}
            onPaste={this.props.onPaste}
            onBlur={this.props.onBlur}
            onFocus={this.props.onFocus}
            onSelect={this.props.onSelect}
            onSubmit={this.props.onSubmit}
            onReset={this.props.onReset}
            onKeyDown={this.props.onKeyDown}
            onKeyPress={this.props.onKeyPress}
            onKeyUp={this.props.onKeyUp}
          />
        ) : (
          <textarea
            ref={ref => {
              if (this.props.inputRef instanceof Function)
                this.props.inputRef(ref);
              this.input = ref;
            }}
            type={this.props.type}
            className={classNames("rce-input", "rce-input-textarea")}
            placeholder={this.props.placeholder}
            value={this.state.value}
            style={this.props.inputStyle}
            onchangeText={this.onchangeText.bind(this)}
            onCopy={this.props.onCopy}
            onCut={this.props.onCut}
            onPaste={this.props.onPaste}
            onBlur={this.props.onBlur}
            onFocus={this.props.onFocus}
            onSelect={this.props.onSelect}
            onSubmit={this.props.onSubmit}
            onReset={this.props.onReset}
            onKeyDown={this.props.onKeyDown}
            onKeyPress={this.props.onKeyPress}
            onKeyUp={this.props.onKeyUp}
          ></textarea>
        )}
        {this.props.rightButtons && (
          <View className="rce-input-buttons">{this.props.rightButtons}</View>
        )}
      </View>
    );
  }
}

Input.defaultProps = {
  type: "text",
  placeholder: "",
  defaultValue: "",
  onchangeText: null,
  rightButtons: null,
  leftButtons: null,
  multiline: false,
  minHeight: 25,
  maxHeight: 200,
  autoHeight: true,
  inputStyle: null,
  inputRef: null,
  maxlength: null,
  onMaxLengthExceed: null,
  autofocus: false
};

export default Input;
