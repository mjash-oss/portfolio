/* Change this file to get your personal Portfolio */
//change the favicon to something more like myself, and change the safari-pinned-tab as well

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation (figure out what this does)

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Maya Ashley-Martin",
  title: "Hi all, I'm Maya",
  subTitle: emoji(
    "Want a simple yet effective website on a budget? I can create a website that is up and running in no time. I am a passionate Full Stack Software Developer with experience in building web applications using JavaScript / Python / React / Typescript and more. Let me know what you want, and I will make it happen!"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1QZgcZKAAPLY0IKLCmcYnZTI9cRuO-63UV3BR6yZoGkk/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mjash-oss", //add instagram
  linkedin: "https://www.linkedin.com/in/maya-ashley-martin-a701aa302/",
  gmail: "mj.ashleymartin@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  //Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      " Integration of third party services such as Firebase / AWS / Digital Ocean"
    )
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const workExperiences = {
  //this is actually faq, just can't change the name or i get errors
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "How long does it take to develop this website / landing page / homepage?",
      answer:
        "The timeline varies based on project complexity, as a small fix or creation of just a homepage would take under a week. A larger project, such as the creation of a site with user authentication would take between a week and two weeks.",
      //companylogo: require("./assets/images/hunterLogo.png"), //change this, this is messed up
      //date: "Winter 2023",
      desc: "The timeline varies based on project complexity, as a small fix or creation of just a homepage would take under a week. A larger project, such as the creation of a site with user authentication would take between a week and two weeks."
      //descBullets: [
      //  "Firsthand exposure to full-stack workflows, such as backend device login and frontend UIs"
      //]
    },
    {
      role: "What do you need to create my site?",
      //company: "I will need the content you would like to post on your site, such as text and images. If you do not have content ready, I can easily add placeholder images and texts.",
      //companylogo: require("./assets/images/kumonLogo.png"),
      //date: "Summer 2023",
      desc: "I will need the content you would like to post on your site, such as text and images. If you do not have content ready, I can easily add placeholder images and texts.."
    },
    {
      role: "How many revisions do you offer?",
      //company: "I will provide revisions until you are satisfied with my work, and I can provide free support for up to 10 days after closing the order",
      //companylogo: require("./assets/images/veteransLogo.png"),
      //date: "Summer 2025",
      desc: "I will provide revisions until you are satisfied with my work, and I can provide free support for up to 10 days after closing the order"
    }
  ]
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Queen's University",
      logo: require("./assets/images/queensLogo.png"), //change this to Queen's logo
      subHeader: "Bachelor of Science in Computer and Cognitive Science",
      duration: "September 2024 - April 2028"
      //desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    }
    //    {
    //      schoolName: "Stanford University",
    //      logo: require("./assets/images/stanfordLogo.png"),
    //      subHeader: "Bachelor of Science in Computer Science",
    //      duration: "September 2013 - April 2017",
    //      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    //    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "MY CURRENT AND PAST FREELANCE PROJECTS",
  projects: [
    {
      image: require("./assets/images/cogTutor.png"),
      projectName: "CognitiveTutor",
      projectDesc:
        "Created a daily puzzle website that gives the user a new puzzle each time the game is played, it will eventually increase in difficulty and return motivational rewards for streaks of a certain number of days",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://backendbymyself-1.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/omTitle.png"),
      projectName: "Photography Website",
      projectDesc:
        "Created a personal photography website for a client Omkaar A to display his photography skills / best work",
      footerLink: [
        {
          name: "Visit Website",
          url: "mashleymartin.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), //create a logo here
      projectName: "Lecture Summarizer",
      projectDesc:
        "Working on this project with Kay Yan, will create an app that records a lecture then produces a written format",
      footerLink: [
        //{
        //  name: "Visit Website",
        //  url: "http://nextu.se/"
        //}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters!",

  achievementsCards: [
    {
      title:
        "7th Place HOSA Future Health Professionals International Competition - Creative Problem Solving (CPS)",
      subtitle:
        "I co-led a team outlining the shortage of healthcare professionals.",
      image: require("./assets/images/hosaLogo.png"),
      imageAlt: "HOSA Logo",
      footerLink: [
        {
          name: "Award",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" //make this a picture of us with the medal
        }
        //{
        //  name: "Award Letter",
        //  url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        //},
        //{
        //  name: "Google Code-in Blog",
        //  url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        //}
      ]
    },
    {
      title:
        "1st Place HOSA Future Health Professionals Missouri State Competition - Creative Problem Solving (CPS)",
      subtitle:
        "Created a group presentation outlining the effects of mental llness in teens and a possible solution to this problem.",
      image: require("./assets/images/hosaLogo.png"), //hosa logo instead
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    }

    //{
    //  title: "PWA Web App Developer",
    //  subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //  image: require("./assets/images/pwaLogo.webp"),
    //  imageAlt: "PWA Logo",
    //  footerLink: [
    //    {name: "Certification", url: ""},
    //    {
    //      name: "Final Project",
    //      url: "https://pakistan-olx-1.firebaseapp.com/"
    //    }
    //  ]
    //}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "FAQ Section",
  subtitle:
    "Below is info on what you can expect from my services, and what I need from you.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      question:
        "How long does it take to develop this website / landing page / homepage?",
      title: "",
      answer:
        "The timeline varies based on project complexity, as a small fix or creation of just a homepage would take under a week. A larger project, such as the creation of a site with user authentication would take between a week and two weeks."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "FAQ Section",
  subtitle: emoji(
    "Below is info on what you can expect from my services, and what I need from you"
  ),

  talks: [
    {
      title:
        "How long does it take to develop this website / landing page / homepage?",
      subtitle:
        "The timeline varies based on project complexity, as a small fix or creation of just a homepage would take under a week. A larger project, such as the creation of a site with user authentication would take between a week and two weeks."
      //slides_url: "https://bit.ly/saadpasta-slides",
      //event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "314-203-0159",
  email_address: "mj.ashleymartin@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
