import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiReact, SiRedux } from "react-icons/si";

export const Step = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="text-4xl font-semibold text-indigo-700">LEARNING PATH-</h2>
      <div className="grid max-w-2xl mx-auto">
        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 opacity-0 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                1
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="flex flex-col py-8 sm:items-center sm:flex-row sm:pb-0">
            <div className="sm:mr-5">
              <div className="flex items-center justify-center  my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                <AiFillHtml5 className="text-5xl text-indigo-700" />
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold sm:text-base">HTML</p>

              <p className="text-sm text-gray-700 mb-4">
              The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
              </p>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 bg-gray-300 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                2
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="flex flex-col py-8 sm:items-center sm:flex-row sm:pb-0">
            <div className="sm:mr-5">
              <div className="flex items-center justify-center  my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                <DiCss3 className="text-5xl text-indigo-700" />
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold sm:text-base">CSS</p>
              <p className="text-base text-gray-700 ">
              Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 bg-gray-300 sm:h-full" />

            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                3
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="flex flex-col py-8 sm:items-center sm:flex-row sm:pb-0">
            <div className="sm:mr-5">
              <div className="flex items-center justify-center  my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                <SiJavascript className="text-5xl text-indigo-700" />
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold sm:text-base">JAVASCRIPT</p>
              <p className="text-base text-gray-700 ">
              JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 bg-gray-300 sm:h-full" />

            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                4
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="flex flex-col py-8 sm:items-center sm:flex-row sm:pb-0">
            <div className="sm:mr-5">
              <div className="flex items-center justify-center  my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                <SiReact className="text-5xl text-indigo-700" />
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold sm:text-base">REACT</p>
              <p className="text-base text-gray-700 ">
              React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 bg-gray-300 sm:h-full" />

            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                5
              </div>
            </div>
            <div className="w-px h-full opacity-0 bg-gray-300" />
          </div>
          <div className="flex flex-col py-8 sm:items-center sm:flex-row sm:pb-0">
            <div className="sm:mr-5">
              <div className="flex items-center justify-center  my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                <SiRedux className="text-5xl text-indigo-700" />
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold sm:text-base">REDUX</p>
              <p className="text-base text-gray-700 ">
              Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
