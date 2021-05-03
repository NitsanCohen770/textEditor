import { event } from 'jquery';
import React from 'react';

const TextArea = ({ rows, title, readOnly, value, onchange }) => {
  return (
    <div class="form-group">
      <label
        className="form-control collectes-ville text-center"
        for="exampleFormControlTextarea1"
      >
        {title}
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={rows}
        readOnly={readOnly}
        value={value}
        onChange={event => onchange(event.target.value)}
      ></textarea>
    </div>
  );
};

export default TextArea;
