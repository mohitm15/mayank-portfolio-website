import React, { useEffect } from "react";
import Header from "./components/Header";
import Image from "next/image";
import imgurl from "../public/dog.jpg";
import { motion } from "framer-motion";

const data = [
  {
    sno: 1,
    author: "Mayank Maroliya",
    history: "Nov 21, 2022",
    likes: 20,
    title: "Starting with React-Redux",
    tags: ["react", "redux", "webdev", "beginners"],
    content: `Hello everyone, this is my first post on Dev.to. In this post, I am trying to explain the use of Redux in ReactJS with an example. Here, I have taken some references from YouTube and Google for information. I will first explain to you the need for Redux and explain it with the code. For reference, you can check out Github to view the code ...`,
    link: "https://dev.to/mohitm15/starting-with-react-redux-1dno",
  },
  {
    sno: 2,
    author: "Mayank Maroliya",
    history: "Dec 07, 2021",
    likes: 41,
    title: "Creating Super Buttons for Like, Share and Subscribe",
    tags: ["beginners", "html", "css", "javascript"],
    content: `Whenever you watches any YouTube video, I'm sure you have come across the terms Like, Share and Subscribe.
      I wanted to create a cool html-css button that represents the feeling of Like-Share-Subscribe.
      For this we require a html file index.html, css file style.css and javaScript file index.js.
      The end result for Like button is like this:`,
    link: "https://dev.to/mohitm15/creating-super-buttons-for-like-share-and-subscribe-gef",
  },
  {
    sno: 3,
    author: "Mayank Maroliya",
    history: "Dec 31, 2021",
    likes: 30,
    title: "Creating Super Radio Buttons",
    tags: ["beginners", "html", "css", "webdev"],
    content: `In the last post , I had shared to create SuperLike, SuperShare and SuperSubscribe buttons.
      In this post, I will show how to create a cool html-css radio button that represents the feeling of animated radio-button. For this we require a html file index.htmland a css file style.css only. ...`,
    link: "https://dev.to/mohitm15/creating-super-radio-buttons-ip8",
  },
  {
    sno: 4,
    author: "Mayank Maroliya",
    history: "Jan 12, 2022",
    likes: 13,
    title: "my-notebook using MongoDB",
    tags: ["atlashackathon", "mongodb", "react", "webdev"],
    content: `Today, writing notes is very important in order to stay organised. Especially in Corperate sector, When you write all your tasks in form of notes, they seem more manageable. When you've got a clear outline of the tasks you've got to do and those you've completed, it helps you stay focused. Also it works as a reminder for you ...`,
    link: "https://dev.to/mohitm15/my-notebook-using-mongodb-2ej6",
  },
];

const Blogs = () => {
  useEffect(() => {
    document.title = "Mayank | Blogs";
  }, []);

  return (
    <>
      <div className="min-h-full">
        <Header />
        <div className=" mx-auto  shadow">
          <div className="px-4 py-6 sm:px-0 ">
            <div className="mx-auto py-20 px-4 sm:px-6 lg:px-8 ">
              <h2 className="text-4xl md:text-6xl xl:text-7xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 p-2 text-center">
                Welcome To My Blogs
              </h2>
            </div>
            <div className="container mx-auto">
              <motion.div
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-2 sm:space-y-7 lg:space-y-10 justify-center items-center "
              >
                {data.map((element) => {
                  return (
                    <div
                      key={element.sno}
                      className="border-2 border-white py-4 lg:py-6 xl:py-10 px-4 lg:px-6 xl:px-10 w-full lg:w-4/5 xl:w-9/12  bg-[url('../public/stars.jpg')]"
                    >
                      <div className="flex flex-row space-x-4 items-center">
                        <Image
                          src={imgurl}
                          width="35"
                          height="35"
                          className="rounded-2xl border-2 border-white"
                        />
                        <h3 className="font-medium text-lg">
                          {element.author} &nbsp;|
                        </h3>
                        <h3 className="font-extralight text-lg">
                          {element.history}
                        </h3>
                      </div>
                      <div className="py-4 flex flex-col space-y-5">
                        <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold">
                          {element.title}
                        </h2>
                        <h5 className="text-white opacity-60 text-sm xl:text-lg ">
                          {element.tags.map((item) => {
                            return (
                              <span key={item} className="text-lime-500 mx-1 drop-shadow-2xl">
                                #{item}{" "}
                              </span>
                            );
                          })}
                        </h5>
                        <p className="leading-relaxed lg:text-base xl:text-lg">
                          {element.content}
                        </p>
                      </div>
                      <div className="m-auto mt-3 xl:mt-10 text-center">
                        <button className="border-2 border-white p-2 xl:px-4 xl:py-3 uppercase text-sm xl:text-base lg:text-sm hover:bg-slate-700 drop-shadow-3xl">
                          <a href={element.link} target="_blank">
                            Read full post
                          </a>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
