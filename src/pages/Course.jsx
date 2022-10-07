import React from "react";
import { Courses } from "../helpers/db";
import {AiFillCloseCircle, AiOutlineCloseCircle} from 'react-icons/ai'

const Course = () => {
  return (
    <div className=" p-4 md:w-3/4 mx-auto">
      {Courses?.map((course, index) => (
        <>
          <div class=" collapse my-4 px-4 collapse-arrow border border-base-300 bg-white shadow-md rounded-box">
            <input type="checkbox" class="peer" />
            <div class="collapse-title    font-medium text-lg ">
              <span className="badge badge-secondary mr-2">{index + 1}</span>{" "}
              {course.Name}
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
                    <div className="modal-box p-2  md:pt-0 max-w-[960px]">
                      <div className="  text-4xl modal-action text-red-500 py-2 flex right-6 top-1 mt-0">
                        <label className="cursor-pointer" htmlFor={`my-modal${video.url}`}><AiOutlineCloseCircle/> </label>
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
