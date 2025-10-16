import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passion About properties , Dedicated to Your Vision.
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src={assets.brand_img} className="w-full sm:w-1/2 max-w-lg"></img>

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence </p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Years of Excellence </p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Project Complted </p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Mn. Sq. Ft. Delivered </p>
            </div>
          </div>
          <p className="text-gray-600 my-10 max-w-lg">
            At Nirman Awas, we are passionate about transforming dreams into
            reality. With a commitment to excellence and a focus on quality, we
            specialize in creating homes that reflect your unique vision. Our
            team of experienced professionals works closely with you to ensure
            every detail is perfect, from design to construction. We believe in
            building more than just houses; we build communities where families
            can thrive and create lasting memories. Trust Nirman Awas to bring
            your dream home to life with integrity, innovation, and unparalleled
            craftsmanship.
          </p>

          <button
            className="bg-blue-600 text-white px-8 py-2 rounded"
            command="show-modal"
            commandfor="drawer"
          >
            Lean more
          </button>

          {/* <!-- Include this script tag or install `@tailwindplus/elements` via npm: --> */}

          {/* <button
            command="show-modal"
            commandfor="drawer"
            class="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10"
          >
            Open drawer
          </button> */}
          <el-dialog>
            <dialog
              id="drawer"
              aria-labelledby="drawer-title"
              class="fixed inset-0 size-auto max-h-none max-w-none overflow-hidden bg-transparent not-open:hidden backdrop:bg-transparent"
            >
              <el-dialog-backdrop class="absolute inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"></el-dialog-backdrop>

              <div
                tabindex="0"
                class="absolute inset-0 pl-10 focus:outline-none sm:pl-16"
              >
                <el-dialog-panel class="group/dialog-panel relative ml-auto block size-full max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700">
                  <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out group-data-closed/dialog-panel:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      command="close"
                      commandfor="drawer"
                      class="relative rounded-md text-gray-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <span class="absolute -inset-2.5"></span>
                      <span class="sr-only">Close panel</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        data-slot="icon"
                        aria-hidden="true"
                        class="size-6"
                      >
                        <path
                          d="M6 18 18 6M6 6l12 12"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div class="relative flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                    <div class="px-4 sm:px-6">
                      <h2
                        id="drawer-title"
                        class="text-base font-semibold text-gray-900"
                      >
                        Our Services
                      </h2>
                    </div>
                    <div class="relative mt-6 flex-1 px-4 sm:px-6">
                      <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg dark:shadow-gray-700/25">
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                          className="h-56 w-full object-cover"
                        />

                        <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
                          <time
                            datetime="2022-10-10"
                            className="block text-xs text-gray-500 dark:text-gray-400"
                          >
                            10th Oct 2022
                          </time>

                          <a href="#">
                            <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                              How to position your furniture for positivity
                            </h3>
                          </a>

                          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Recusandae dolores, possimus pariatur animi
                            temporibus nesciunt praesentium dolore sed nulla
                            ipsum eveniet corporis quidem, mollitia itaque minus
                            soluta, voluptates neque explicabo tempora nisi
                            culpa eius atque dignissimos. Molestias explicabo
                            corporis voluptatem?
                          </p>
                        </div>
                      </article>

                      <article className="flex bg-white transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25 mt-3">
                        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                          <time
                            datetime="2022-10-10"
                            className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase dark:text-white"
                          >
                            <span>2022</span>
                            <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
                            <span>Oct 10</span>
                          </time>
                        </div>

                        <div className="hidden sm:block sm:basis-56">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                            className="aspect-square h-full w-full object-cover"
                          />
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                          <div className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10">
                            <a href="#">
                              <h3 className="font-bold text-gray-900 uppercase dark:text-white">
                                Finding the right guitar for your style - 5 tips
                              </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Recusandae dolores, possimus
                              pariatur animi temporibus nesciunt praesentium
                              dolore sed nulla ipsum eveniet corporis quidem,
                              mollitia itaque minus soluta, voluptates neque
                              explicabo tempora nisi culpa eius atque
                              dignissimos. Molestias explicabo corporis
                              voluptatem?
                            </p>
                          </div>

                          <div className="sm:flex sm:items-end sm:justify-end"></div>
                        </div>
                      </article>

                      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs mt-3">
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                          className="h-56 w-full object-cover"
                        />

                        <div className="p-4 sm:p-6">
                          <a href="#">
                            <h3 className="text-lg font-medium text-gray-900">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </h3>
                          </a>

                          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Recusandae dolores, possimus pariatur animi
                            temporibus nesciunt praesentium dolore sed nulla
                            ipsum eveniet corporis quidem, mollitia itaque minus
                            soluta, voluptates neque explicabo tempora nisi
                            culpa eius atque dignissimos. Molestias explicabo
                            corporis voluptatem?
                          </p>

                          
                        </div>
                      </article>
                    </div>
                  </div>
                </el-dialog-panel>
              </div>
            </dialog>
          </el-dialog>
        </div>
      </div>
    </div>
  );
};

export default About;
