import React from 'react';

function Spinner() {
    return (
        
        <div className="spinner">
        <center>
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>

            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>

            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </center>
        </div>
    );
}

export default Spinner;
