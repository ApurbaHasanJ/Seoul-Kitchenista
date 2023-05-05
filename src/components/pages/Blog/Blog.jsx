import React from "react";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { MdOutlineSimCardDownload } from "react-icons/md";
import html2pdf from "html2pdf.js";

const handleDownloadPDF = () => {
  const element = document.getElementById("full-page");
  html2pdf().from(element).save("full-page.pdf");
};

const Blogs = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <div id="full-page">
      {/* header section */}
      <section className=" drop-shadow-xl pb-6">
        <h3 className=" text-4xl text-black text-center font-bold border-b pb-5 mb-5">
          Blog
        </h3>
        <button
          onClick={handleDownloadPDF}
          className="btn ml-2 lg:ml-16 flex gap-3"
        >
          <span>Download pdf</span> <MdOutlineSimCardDownload />
        </button>
      </section>

      {/* Blog page body */}
      <div className="mt-1 my-container drop-shadow-xl">
        <h1 className="text-5xl font-bold text-white p-5 rounded-lg mb-8 border-2 text-center bg-orange-400 duration-700 ">
          Some Questions
        </h1>

        {/* differences between uncontrolled and controlled components */}
        <div className="mb-20">
          <h1 className="text-3xl font-bold text-gray-900">
            1. What is the differences between uncontrolled and controlled
            components.
          </h1>
          <div>
            <h5 className="text-xl font-semibold mt-6 text-gray-500">
              <span className="font-bold text-gray-800 ">
                #Here are some differences between uncontrolled and controlled
                components:
              </span>
              <p className="mt-4">
                1. State Management: Uncontrolled components manage their state
                internally, while controlled components manage their state
                through props.
              </p>

              <p className="mt-4">
                2. Handling User Input: Uncontrolled components handle user
                input by themselves, while controlled components require you to
                pass an onChange handler to handle user input.
              </p>
              <p className="mt-4">
                3. Validation: Uncontrolled components do not offer a built-in
                validation mechanism, while controlled components allow you to
                easily validate input.
              </p>
              <p className="mt-4">
                4. Flexibility: Controlled components offer more flexibility
                than uncontrolled components, as you can easily manipulate their
                state and add additional functionality.
              </p>
              <p className="mt-4">
                5. Complexity: Uncontrolled components are simpler to use and
                require less code, while controlled components are more complex
                and require more code to set up.
              </p>
            </h5>
          </div>
        </div>

        {/* validate React props using PropTypes */}
        <div className="mb-20">
          <h1 className="text-3xl font-bold text-gray-900">
            2. How to validate React props using PropTypes?
          </h1>
          <div>
            <h5 className="text-xl font-semibold mt-6 text-gray-500">
              <span className="font-bold text-gray-800">
                #Validate React props using PropTypes:{" "}
              </span>
              <p className="mt-4">
                1. First, import PropTypes into your component.
              </p>
              <p className="mt-4">
                2. Define the propTypes property on your component and define
                the expected props and their data types using the PropTypes
                object.
              </p>
              <p className="mt-4">
                3. If any of the passed props do not match the expected data
                types, React will issue a warning in the console. If a required
                prop is not passed, React will also issue a warning.
              </p>
            </h5>
          </div>
        </div>

        {/* Difference between nodejs and express js. */}
        <div className="mb-20">
          <h1 className="text-3xl font-bold text-gray-900">
            3.What is the difference between nodejs and express js.
          </h1>
          <div>
            <h5 className="text-xl font-semibold mt-6 text-gray-500">
              <span className="font-bold text-gray-800">#NodeJs: </span>
              Node.js is a JavaScript runtime built on top of the Chrome V8
              JavaScript engine. It allows developers to run JavaScript on the
              server-side, outside of the browser. Node.js provides a platform
              for building server-side applications with JavaScript, including
              APIs, web servers, and other types of network applications.
            </h5>
            <h5 className="text-xl font-semibold mt-6 text-gray-500">
              <span className="font-bold text-gray-800">#ExpressJs: </span>
              Express.js is a popular Node.js web application framework. It
              provides a set of features and tools for building web applications
              and APIs, including routing, middleware support, and template
              rendering. Express.js is built on top of Node.js, and it
              simplifies the process of building web applications and APIs with
              Node.js by providing a set of abstractions and helpers.
            </h5>
          </div>
        </div>

        {/* What is a custom hook, and why will you create a custom hook */}
        <div className="mb-20">
          <h1 className="text-3xl font-bold text-gray-900">
            4. What is a custom hook, and why will you create a custom hook?
          </h1>
          <div>
            <h5 className="text-xl font-semibold mt-6 text-gray-500">
              <span className="font-bold text-gray-800">#Custom Hook: </span>A
              custom Hook is a JavaScript function whose name starts with ”use”
              and that may call other Hooks. If you have code in a component
              that you feel would make sense to extract, either for reuse
              elsewhere or to keep the component simpler, you can pull that out
              into a function. Custom React JS hooks offer reusability as when a
              custom hook is created, it can be reused easily, which makes the
              code cleaner and reduces the time to write the code. It also
              enhances the rendering speed of the code as a custom hook does not
              need to be rendered again and again while rendering the whole
              code.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
