import React, { useState } from "react";
import HeroText from "../components/HeroText";
import SubHeading from "../components/SubHeading";
import ShortUrlDialog from "../components/ShortUrlDialog";
import OverallButton from "../components/OverallButton";
import { MdArrowOutward } from "react-icons/md";
import { IoMdQrScanner } from "react-icons/io";
import { CreateShortUrl } from "../api/ShortUrl.api";
import { myQueryClient } from "../main";
import ErrorDiolog from "../components/ErrorDiolog";
import { useSelector } from "react-redux";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const { isAuthenticated } = useSelector((state) => state.auth);

  const submitHnadler = async () => {
    try {
      const shortUrl = await CreateShortUrl(url);
      if (shortUrl) {
        setShortUrl(shortUrl);
        myQueryClient.invalidateQueries({
          queryKey: ["userUrls"],
        });
        setIsDialogOpen(true);
      }
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
      <div className="w-full bg-slate-50 mt-16 flex flex-col items-center">
        <HeroText />
        {/* COPY Hoert URL Dialoge BOX */}
        <ShortUrlDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        >
          {shortUrl && (
            <>
              <h1 className="text-xl font-semibold text-black">
                Copy Your Short URL
              </h1>
              <div className="rounded-xl mt-6 shadow-sm w-full flex bg-white p-2 border-1 border-zinc-300">
                <input
                  type="text"
                  readOnly
                  value={shortUrl}
                  className="p-2 w-full outline-none focus:outline-none"
                />
                <button
                  onClick={handleCopy}
                  className={`px-3 py-2 rounded-md cursor-pointer ${
                    copied
                      ? "bg-green-500 text-white"
                      : "bg-zinc-900 hover:bg-black text-white"
                  }`}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="w-full mt-3 flex justify-around">
                <div onClick={() => window.open(shortUrl, "_blank")}>
                  <OverallButton
                    btnText={
                      <>
                        Jump on URL <MdArrowOutward />
                      </>
                    }
                  />
                </div>

                {isAuthenticated && (
                  <OverallButton
                    btnText={
                      <>
                        Get QR Code of URL{" "}
                        <IoMdQrScanner className="text-white font-bold" />
                      </>
                    }
                    to={"/signin"}
                  />
                )}
              </div>
            </>
          )}
        </ShortUrlDialog>

        {error && (
          <ErrorDiolog onClose={() => setError(false)}>
            <h2 className="text-xl font-medium text-red-600">
              {error.message}
            </h2>
          </ErrorDiolog>
        )}

        {/* <HeroSearchBar onClick={() => setIsDialogOpen(true)} /> */}
        <div className="rounded-xl mt-6 shadow-sm w-2xl flex bg-white p-2 border-1 border-zinc-100">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="p-2 w-full outline-none focus:outline-none"
            placeholder="Enter Your long URL here...."
          />
          <button
            onClick={submitHnadler}
            className="p-2 px-3 gap-2 cursor-pointer rounded-lg shadow-lg flex bg-zinc-900 hover:bg-black text-white font-medium"
          >
            <p>Short</p>
            <p>It</p>
          </button>
        </div>
        <SubHeading subHeading={"Instantly get your Realtime Short URL."} />
      </div>
    </>
  );
};

export default Hero;
