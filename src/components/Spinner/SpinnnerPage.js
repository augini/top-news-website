import React from "react";
import './SpinnerPage.css'

const SpinnerPage = () => {
  return (
    <>
      <div className="container">
        <div className="spinner-grow text-danger" role="status" style = {{position: 'absolute', left: '50%', top: '50%'}}>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default SpinnerPage;