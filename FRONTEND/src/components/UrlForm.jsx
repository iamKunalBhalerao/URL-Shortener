import React, { useState } from "react";
import { CreateShortUrl } from "../api/ShortUrl.api";
import { useSelector } from "react-redux";
import { myQueryClient } from "../main";
import QRCode from "react-qr-code";
import BottomWarning from "./BottomWarning";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [showQr, setShowQr] = useState(false);
  const [showQrBtn, setShowQrBtn] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const shortUrl = await CreateShortUrl(url, customSlug);
      setShortUrl(shortUrl);
      setShowQrBtn(true);
      myQueryClient.invalidateQueries({
        queryKey: ["userUrls"],
      });
    } catch (error) {
      setError(error);
    }
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
      <div className="bg-white p-8 rounded-lg w-full lg:max-w-md border-1 border-zinc-200">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>

        <div className="space-y-4">
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

          {isAuthenticated && (
            <div>
              <label
                htmlFor="customSlug"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Custom URL (Optional)
              </label>
              <input
                type="text"
                id="customSlug"
                value={customSlug}
                onChange={(e) => setCustomSlug(e.target.value)}
                placeholder="my-custom-url"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-1 text-xs text-gray-500">
                Create a memorable URL (e.g., yourdomain.com/my-custom-url)
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            onClick={submitHandler}
          >
            Shorten Url
            {/* {loading ? "Shortening..." : "Shorten URL"} */}
          </button>
        </div>
        {isAuthenticated && showQrBtn && (
          <button
            className="w-full mt-2 bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            onClick={() => setShowQr(!showQr)}
          >
            Show QR Code
          </button>
        )}

        {showQr && (
          <div className="p-2 flex mt-2 flex-col gap-2 items-center justify-center">
            <QRCode
              className="p-4 border-1 border-zinc-400 rounded-lg"
              value={shortUrl && shortUrl}
              size={192}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
            />
            <p className="px-2 text-xl font-medium text-black text-center">
              San Me
            </p>
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error.message}
          </div>
        )}

        {shortUrl && (
          <div className="mt-2">
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
            {!isAuthenticated && <BottomWarning 
            title="To get QR Code?"
              buttontxt="Sign In"
              to={"/signin"} />}
          </div>
        )}
      </div>
    </>
  );
};

export default UrlForm;
