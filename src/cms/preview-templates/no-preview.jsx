import React from 'react';

const NoPreview = ({ entry, getAsset }) => {
  return (
    <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "sans-serif"}}>
      <h2>Sorry No Preview is Available</h2>
    </div>
  );
};

NoPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default NoPreview