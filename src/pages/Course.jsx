import React from "react";
import { Courses } from "../helpers/db";

const Course = () => {
  return (
    <div className=" md:w-3/4 mx-auto">
      {Courses?.map((course) => (
        <div class="collapse my-4  collapse-plus border border-base-300 bg-white shadow-md rounded-box">
          <input type="checkbox" class="peer" />
          <div class="collapse-title font-bold text-2xl ">
          {course.Name}
          </div>
          <div class="collapse-content ">
            {course.content?.map((video) => (
              <>
                <label htmlFor="my-modal" className="block modal-button p-2 m-4 cursor-pointer shadow rounded-md">
                  {video.name}
                </label>

                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal  ">
                  <div className="modal-box p-2 md:p-6  max-w-[960px]">
                     <div className= "modal-action text-red-500 inline absolute right-6 top-1 mt-0">
                      <label htmlFor="my-modal" >
                        X
                      </label>
                    </div>
                    <div className="">

                    
                    <iframe
                     className="aspect-video w-full mx-auto"
                      src={video.url}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    </div>
                   
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
