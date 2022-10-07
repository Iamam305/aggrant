import React from "react";
import { Courses } from "../helpers/db";

const Course = () => {
  return (
    <div className=" p-4 md:w-3/4 mx-auto">
      {Courses?.map((course, index) => (
        <>
          <div class=" collapse my-4 px-4 collapse-arrow border border-base-300 bg-white shadow-md rounded-box">
            <input type="checkbox" class="peer" />
            <div class="collapse-title    font-medium text-lg ">
              <span className="badge badge-secondary mr-2">
              {index + 1}
                </span> {course.Name}
            </div>
            <ul class="collapse-content steps steps-vertical">
              {course.content?.map((video, index) => (
                <>
                  <li className="step  step-primary">
                    <label
                      htmlFor={`my-modal${video.url}`}
                      className="block modal-button py-2 border px-8 m-4 cursor-pointer shadow rounded-md"
                    >
                      {video.name}
                    </label>
                  </li>

                  <input
                    type="checkbox"
                    id={`my-modal${video.url}`}
                    className="modal-toggle"
                  />
                  <div className="modal  ">
                    <div className="modal-box p-2 md:p-6  max-w-[960px]">
                      <div className="modal-action text-red-500 inline absolute right-6 top-1 mt-0">
                        <label htmlFor={`my-modal${video.url}`}>X</label>
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
            </ul>
          </div>
          <div class="divider"></div>
        </>
      ))}
    </div>
  );
};

export default Course;
