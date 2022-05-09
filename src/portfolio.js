/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Pat Wakeem",
  title: "Hey there, I'm Pat :)",
  subTitle: emoji(
    "Hey! I'm a Staff Software Engineer. I specialize in backend, infrastructure, and the AWS platform. Non-technically I lead high profile or high impact projects to completion; and drive org wide change via mentorship and extensive knowledge transfer."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1kOvKdpleZKAXYAm5apwuZx7smU70eUCW/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/patwakeem",
  linkedin: "https://www.linkedin.com/in/patwakeem/",
  gmail: "patwakeem@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Highly skilled developer looking for excellent people to work with.",
  skills: [
    emoji(
      "⚡ Create highly resilient backend systems and products that your customers will love."
    ),
    emoji("⚡ Integrate with AWS services, deploying fast and building microservices quickly."),
    emoji(
      "⚡ Lead projects to completion utilizing phased delivery for quick customer feedback."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "testing",
      fontAwesomeClassname: "fas fa-microscope"
    },
    {
      skillName: "gitops",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "architecture",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "nosql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
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

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University: Los Angeles",
      logo: require("./assets/images/csulaLogo.png"),
      subHeader: "Bachelors: Psychology",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Customer Focus", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend/Java/Spring", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Infrastructure",
      progressPercentage: "70%"
    },
    {
      Stack: "AWS",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Staff Software Engineer",
      company: "Tink, A Visa Solution",
      companylogo: require("./assets/images/tink.png"),
      date: "January 2022 – Present",
      desc: "Cutting tech debt and setting new standards.",
      descBullets: [
        "Setting standards on how code is written and deployed.",
        "Cutting tech debt and insisting on the best for packaging and deployment through gitops."
      ]
    },
    {
      role: "Lead Software Engineer",
      company: "Apica Systems",
      companylogo: require("./assets/images/apica.jpg"),
      date: "2020 – 2022",
      desc: "R&D and Product Exploration in one role",
      descBullets: [
        "Led a project exploration team, meeting with customers and delivering on deadlines.",
        "Created many powerful and exploratory products/features."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Apica Systems",
      companylogo: require("./assets/images/apica.jpg"),
      date: "2018 – 2020",
      desc: "Total backend refresh utilizing Kafka, Java, and MongoDb",
      descBullets: [
        "Led a backend refresh doing away with an expensive legacy monolith.",
        "Achieved a migration to microservices based design with events and streaming."
      ]
    },
    {
      role: "Lead DevOps Engineer",
      company: "Apica Systems",
      companylogo: require("./assets/images/apica.jpg"),
      date: "2016 – 2018",
      desc: "Migrating world wide infrastructure to AWS",
      descBullets: [
        "Migrated many on-premise datacenters to AWS.",
        "Utilized terraform, packer, and general AWS services."
      ]
    },
    {
      role: "More Experience",
      companylogo: require("./assets/images/exp.png"),
      date: "2013 – 2016",
      desc: "Experience back to 2013 available upon request"
    }
  ]
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements & Certifications",

  achievementsCards: [
    {
      title: "AWS Certified Developer",
      image: require("./assets/images/aws.jpg"),
      footerLink: []
    },
    {
      title: "Red Hat Certified Systems Administrator",
      image: require("./assets/images/rhel.jpg"),
      footerLink: []
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
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
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to drop in and say hi",
  email_address: "patwakeem@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  twitterDetails
};
