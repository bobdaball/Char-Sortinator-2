import React, { Component } from 'react';

class TableRow extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <tr>
        <td key={this.props.row.string}>{this.props.row.string}</td>
        <td key={this.props.row.sortString}>{this.props.row.sortString}</td>
      </tr>
    );
  }
}

export default TableRow;