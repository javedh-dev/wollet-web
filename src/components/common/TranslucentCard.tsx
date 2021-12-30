import React from "react";
import "./TranslucentCard.css";

export default class TranslucentCard extends React.Component<any, {}> {
  render() {
    const className = this.props.className + " translucent-card";
    return <div className={className}>{this.props.children}</div>;
  }
}
