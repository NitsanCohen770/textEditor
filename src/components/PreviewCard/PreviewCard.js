import React from 'react';

const PreviewCard = ({ textValue }) => {
  return (
    <div className="card bg-light mb-3">
      <div className="card-header text-center">Preview</div>
      <div className="card-body">
        <h5 className="card-title text-center">
          This is the Preview of your entered text
        </h5>
        <p className="card-text">{textValue}</p>
      </div>
    </div>
  );
};

export default PreviewCard;
