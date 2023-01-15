import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";
import "./Contact.scss";

export default class ContactUs extends Component {
  render() {
    let Data = this.props.Data;
    (function () {
      // Fetch all the forms we want to apply custom validation styles to
      const forms = document.querySelectorAll(".needs-validation");
      const result = document.getElementById("result");
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();

              form.querySelectorAll(":invalid")[0].focus();
            } else {
              /*
               * Form Submission using fetch()
               */

              const formData = new FormData(form);
              event.preventDefault();
              event.stopPropagation();
              const object = {};
              formData.forEach((value, key) => {
                object[key] = value;
              });
              const json = JSON.stringify(object);
              result.innerHTML = "Please wait...";

              fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: json,
              })
                .then(async (response) => {
                  let json = await response.json();
                  if (response.status === 200) {
                    result.innerHTML = json.message;
                    result.classList.remove("text-gray-500");
                    result.classList.add("text-green-500");
                  } else {
                    console.log(response);
                    result.innerHTML = json.message;
                    result.classList.remove("text-gray-500");
                    result.classList.add("text-red-500");
                  }
                })
                .catch((error) => {
                  console.log(error);
                  result.innerHTML = "Something went wrong!";
                })
                .then(function () {
                  form.reset();
                  form.classList.remove("was-validated");
                  setTimeout(() => {
                    result.style.display = "none";
                  }, 5000);
                });
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    })();

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row details">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>
                <i class="fas fa-sms"></i> :{" "}
                <a href="sms:415-960-5050">{Data.phoneNumber}</a>
              </h4>
              <br></br>
              {/*  */}
              <div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
                <div class="container mx-auto">
                  <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div class="text-center">
                      <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                        Contact Us
                      </h1>
                      <p class="text-gray-400 dark:text-gray-400">
                        Fill up the form below to send us a message.
                      </p>
                    </div>
                    <div class="m-7 text-center">
                      <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        id="form"
                      >
                        <input
                          type="hidden"
                          name="access_key"
                          value="a101056e-df4d-4605-b645-ee6cc3138a66"
                        />
                        <input
                          type="hidden"
                          name="subject"
                          value="New Submission from Bay City General Glass Website"
                        />
                        <input
                          type="hidden"
                          name="redirect"
                          value="https://web3forms.com/success"
                        />
                        {/* <input type="checkbox" name="botcheck" id="" style="display: none;" /> */}
                        <div class="mb-6">
                          <label
                            for="name"
                            class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="John Doe"
                            required
                            class="align-center w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                          />
                        </div>
                        <div class="mb-6">
                          <label
                            for="email"
                            class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="you@company.com"
                            required
                            class="align-center w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                          />
                        </div>
                        <div class="mb-6">
                          <label
                            for="phone"
                            class="text-sm text-gray-600 dark:text-gray-400"
                          >
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="+1 (555) 1234-567"
                            required
                            class=" align-center w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                          />
                        </div>
                        <div class="mb-6">
                          <label
                            for="message"
                            class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            Your Message
                          </label>

                          <textarea
                            rows="5"
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            class="align-center w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            required
                          ></textarea>
                        </div>
                        <div class="mb-6">
                          <button
                            type="submit"
                            class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                          >
                            Send Message
                          </button>
                        </div>
                        <p
                          class="text-base text-center text-gray-400"
                          id="result"
                        ></p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
