import React, { useState, useRef, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SingleTopic = ({ topic }) => {
  const [showPopup, setShowPopup] = useState(false);

  const iframeVideo = useRef()

  


  useEffect(() => {
    if (!showPopup ) {
       
        var player;

        // this function gets called when API is ready to use
        function onYouTubePlayerAPIReady() {
            // create the global player from the specific iframe (#video)
            player = new YT.Player('video', {
                events: {
                    // call this function when player is ready to use
                    'onReady': onPlayerReady
                }
            });
        }
        
        function onPlayerReady(event) {
        
            player.stopVideo();
        }
       
    }
  }, [showPopup])
  
  return (
    
      <>
        <li className="step  step-primary">
          <label
            htmlFor={`my-modal${topic.url}`}
            className="block modal-button py-2 border px-8 m-4 cursor-pointer shadow rounded-md"
            onClick={() => setShowPopup(true)}
          >
            {topic.name}
          </label>
        </li>

        <input
          type="checkbox"
          id={`my-modal${topic.url}`}
          className="modal-toggle"
        />

        { (
          <div className="modal  w-screen ">
            <div className="modal-box p-2  md:pt-0 max-w-[960px]">
              <div className="  text-4xl modal-action text-red-500 py-2 flex right-6 top-1 mt-0">
                <label
                  className="cursor-pointer"
                  htmlFor={`my-modal${topic.url}`}
                  onClick={() => setShowPopup(true)}
                >
                  <AiOutlineCloseCircle />{" "}
                </label>
              </div>
              <div className="">
                <iframe
                  className="aspect-video w-full mx-auto"
                  src={showPopup ? topic.url:''}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  ref={iframeVideo}
                  allowscriptaccess="always"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </>
    
  );
};

export default SingleTopic;
