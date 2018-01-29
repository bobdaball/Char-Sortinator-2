import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
  constructor(props, context) {
    super(props, context);
  }

  generateRows() {
    return
  }

  componentWillMount() {
  }

  render() {
    return (
      <Table>
      {
        this.props.stringPairs.length ?

          this.props.stringPairs.map(row => {
            return <TableRow row={row} />
          })
        :
          <div></div>
      }
      </Table>
    );
  }
}

export default Table;