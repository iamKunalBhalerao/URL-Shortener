import React, { useState } from "react";
import { CreateShortUrl } from "../api/ShortUrl.api";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  // const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const shortUrl = await CreateShortUrl(url);
    setShortUrl(shortUrl);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>

      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Enter your long URL
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/very/long/url"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          // disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          Shorten Url
          {/* {loading ? "Shortening..." : "Shorten URL"} */}
        </button>
      </form>

      {/* {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )} */}

      {shortUrl && (
        <div className="mt-6">
          <h2 className="text-lg font-medium mb-2">Your shortened URL:</h2>
          <div className="flex items-center">
            <input
              type="text"
              value={shortUrl}
              readOnly
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className={`px-3 py-2 rounded-r-md cursor-pointer ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UrlForm;
