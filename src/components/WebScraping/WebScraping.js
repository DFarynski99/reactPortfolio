import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import LeftPanelBlog from "../LeftPanel/LeftPanelBlog";
import LeftPanelLiteBlog from '../LeftPanelLite/LeftPanelLiteBlog'
import Title from "../BlogPostComponents/Title";
import Video from "../BlogPostComponents/Video";
import TextArea from "../BlogPostComponents/TextArea";

export default function WebScraping() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // The empty array ensures this effect only runs once, when the component mounts
  const webScraping = `${process.env.PUBLIC_URL}/webScrapingV4.mp4`;

  return (
    <>
      <LeftPanelBlog />
      <LeftPanelLiteBlog />
      <div id={"webScrapingContainer"}>
        <Title title={"Exploring the Infinite Potential of Web Scraping"} />
        <div id={'textAndVideoContainer'}>
          <TextArea
            className={"blogPostTextAreaDiv"}
            message={
              "Exploring the realm of web scraping unveils vast possibilities. Utilising Python scripts and libraries like" +
              " Selenium, we can automate the collection of data from websites. \n\nMy experiences in web scraping reveal " +
              "its potential and functionality. I initially developed a SkyScanner scraper, incorporating an IFTTT webhook " +
              "to alert me via email when flight prices fall below a set threshold. This project illuminated the vast " +
              "opportunities in automated data scraping, and was an eye opening first step into the realm of possibilities that lay ahead.\n\n" +
              "To further my knowledge and create a tool with practical applications, I developed an all-in-one (AIO) " +
              "scraper for major Australian regional carriers: Qantas, Jetstar, Virgin, and Rex. This tool streamlines the " +
              "process of comparing flight prices directly from the airlines, avoiding the sometimes misleading or outdated" +
              " prices listed by third-party travel agents on SkyScanner. While the tool is powerful, it encounters " +
              "challenges such as sophisticated bot detection systems employed by websites.\n\n" +
              "I envisioned transforming this into a full-stack project hosted on AWS EC2, making it accessible to " +
              "non-code technical users. However, during the final testing phase, I discovered that running the " +
              "Chromedriver in headless mode triggered detection mechanisms on one of the airlines websites. Given that" +
              " AWS EC2 operates through a command-line interface (CLI), this issue prevented the project from being " +
              "viable on a cloud platform without further adjustments. As a result, I have decided to maintain the project" +
              " for local host (available on Github) use only until a solution is found.\n\n" +
              "Ultimately, web scraping offers a practical approach to automated data extraction, presenting endless " +
              "possibilities.\n\nHappy scraping!"
            }
          />
          <Video id={"blogPostVideoDiv"} src={webScraping} />
        </div>
      </div>
    </>
  );
}
