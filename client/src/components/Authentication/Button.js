/**
 * Created by juliomojica on 7/9/17.
 */
import React from 'react';

const Button = (props) => (
  <div>
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  </div>
);

export default Button;
