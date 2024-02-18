import React, { useState } from 'react';

function FileUploadPanel() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleUpload = () => {
    console.log("Uploading files:", selectedFiles)  };

  return (
    <div>
      <h2>Multiple File Upload Panel</h2>
      <input type="file" onChange={handleFileChange} multiple />
      <button onClick={handleUpload} disabled={selectedFiles.length === 0}>Upload</button>
      <div>
        <h3>Selected Files:</h3>
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FileUploadPanel;
