import React from 'react';
import ReactDOM from 'react-dom';
import InputForm from './InputForm';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(InputForm),
    document.getElementById('mount')
  );
});