/**
 * Created by juliomojica on 7/9/17.
 */
import React from 'react';

const Inputs = (props) => (
  <div>
    <input
      type={props.type} className={props.className}
      onChange={props.onChange}
    />
  </div>
);
export default Inputs;
