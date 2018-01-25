import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
  constructor(props, context) {
    super(props, context);
  }

 componentDidMount() {
  console.log('this props in table', this.props);
 }
  render() {
    return (
      <Table>
      {
        this.props.stringPairs.map(row => {
          return <TableRow row={row} />
        })
      }
      </Table>
    );
  }
}

export default Table;