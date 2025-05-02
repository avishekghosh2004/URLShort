import React, { useState } from "react";
import axios from "axios";

function UrlShortenerForm() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    setShortUrl("");

    try {
      const response = await axios.post("http://localhost:8080/api/shorten", {
        longUrl,
      });
      setShortUrl(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to shorten URL");
    }
  };

  return (
    <div
      className="w-[400px] bg-neutral-950 border border-neutral-800 rounded-lg p-6 
      shadow-[0_0_15px_rgba(59,130,246,0.5)] 
      hover:shadow-[0_0_30px_rgba(59,130,246,0.5),0_0_60px_rgba(74,222,128,0.3)] 
      transition-all duration-500"
    >
      <h1 className="text-center mb-6 text-3xl font-extrabold tracking-tight">
        <span
          className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-green-400
          [text-shadow:0_0_20px_rgba(59,130,246,0.5)]"
        >
          URLShort
        </span>
      </h1>

      <div className="flex flex-col gap-4">
        <input
          type="url"
          placeholder="Enter your URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
          className="w-full bg-black border border-neutral-800 rounded-md px-3 py-2 text-sm text-white 
            placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-blue-500
            focus:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md 
            text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200
            shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        >
          Generate Shorten URL
        </button>

        {shortUrl && (
          <div className="bg-black/50 border border-neutral-800 rounded-md p-3">
            <span className="text-neutral-400 text-sm">URL:</span>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-sm ml-2 hover:text-blue-300 transition-colors"
            >
              {shortUrl}
            </a>
          </div>
        )}

        {error && (
          <div className="bg-red-950/50 border border-red-900/50 text-red-400 text-sm p-3 rounded-md">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default UrlShortenerForm;
