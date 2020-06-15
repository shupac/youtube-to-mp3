import React, { useState } from 'react';

function LinkInput ({ url, updateUrl, startDownload }) {
  const [hasError, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!url) {
      setError(true);
      return;
    }
    startDownload(url);
    setError(false);
  }

  const className = `link__input${hasError ? '--error' : ''}`;

  return (
    <form onSubmit="onSubmit">
      <input
        className={className}
        onChange={updateUrl}
        placeholder="https://www.youtube.com/watch?v=zmXUWKwxDg4"
      />
      <div className="center">
        <button className="link__button" onClick={onSubmit}>
          Convert to MP3
        </button>
      </div>
    </form>
  );
}

export default LinkInput;
