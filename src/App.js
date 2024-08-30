import "./styles.css";

const companiesIconData = [
  {
    name: "Volkswagen logo gray and white logo",
    photoName:
      "https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals",
  },
  {
    name: "Samsung logo gray and white logo",
    photoName:
      "https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals",
  },
  {
    name: "Cisco logo gray and white logo",
    photoName:
      "https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals",
  },
  {
    name: "Vimeo logo gray and white logo",
    photoName:
      "https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals",
  },
  {
    name: "Procter & Gamble logo gray and white logo",
    photoName:
      "https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals",
  },
  {
    name: "Hewlett Packard logo gray and white logo",
    photoName:
      "https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals",
  },
  {
    name: "Citi logo gray and white logo",
    photoName:
      "https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals",
  },
  {
    name: "Ericsson logo gray and white logo",
    photoName:
      "https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals",
  },
];

const goalsData = [
  {
    heading: "Hands-on training",
    description:
      "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
    photoName:
      "https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png",
    photoAlt: "Hands-on training",
  },
  {
    heading: "Certification prep",
    description:
      "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
    photoName:
      "https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png",
    photoAlt: "Certification prep",
  },
  {
    heading: "Courses",
    description: "Find courses that are best for your career",
    photoName:
      "https://cms-images.udemycdn.com/96883mtakkm8/6w8plrr7vY9rIY46UuX0q5/2f0a3f0c22e99bd2d430b998c81321f2/empty-state-1.png",
    photoAlt: "Courses",
  },
  {
    heading: "Apprenticeship",
    description:
      "Apprenticeship is a system for training a new generation of practitioners of a trade or profession with on-the-job training",
    photoName:
      "https://cms-images.udemycdn.com/96883mtakkm8/2tKGBrb1N60wox2Lh8j3tz/7f1528c9f88ea47bd6ebb46f345902c3/organizations-2.png",
    photoAlt: "Apprenticeship",
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );

  function Header() {
    return (
      <div className="navbar">
        <div className="logo">
          <h1>Skill Bridge</h1>
        </div>
        <div className="navElements">
          <div className="course element">Course</div>
          <div className="apprenticeship element">Apprenticeship</div>
          {/* <div className="about element">About</div> */}
          <div className="login element">Login/Signup</div>
        </div>
      </div>
    );
  }

  function Body() {
    const icons = companiesIconData;
    const numIcons = icons.length;

    const goals = goalsData;
    const numgoals = goals.length;

    return (
      <div className="body">
        <center>
          <img
            className="bodyImg"
            src="coverImg.png"
            // "https://www.iiteducation.in/course/vtp.jpg"
            alt="img"
          />
          <h1>Integrating Vocational Training into Education Curriculum</h1>
          <p>
            Unveiling the synergy of vocational training in modern education
            through an interactive platform.
          </p>
          <button className="mainbtn">Get's started</button>
        </center>

        <div className="emptyCon"></div>

        <div className="trustedCompanies">
          <h3>
            Trusted by over 16,000 companies and millions of learners around the
            world
          </h3>
          <div className="companiesLogo">
            <ul className="icons">
              {icons.map((icon) => (
                <Icon iconObj={icon} key={icon.photoName} />
              ))}
            </ul>
          </div>
        </div>

        <div className="emptyCon"></div>
        <div className="goalsSection">
          <div>
            <h1>Learning focused on your goals</h1>
            <ul className="goals">
              {goals.map((goal) => (
                <Goalcard goalObj={goal} key={goal.heading} />
              ))}
            </ul>
          </div>
          <img
            src="https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png"
            alt="goalsImg"
          />
        </div>
        <div className="emptyCon"></div>
      </div>
    );
  }

  function Icon({ iconObj }) {
    return (
      <li className="icon">
        <img src={iconObj.photoName} alt={iconObj.name} />
      </li>
    );
  }

  function Goalcard({ goalObj }) {
    return (
      <li className="goalCard">
        <img
          className="goalCardImg"
          src={goalObj.photoName}
          alt={goalObj.heading}
        />
        <div className="cardContent">
          <h3>{goalObj.heading}</h3>
          <p>{goalObj.description}</p>
        </div>
      </li>
    );
  }

  function Footer() {
    return (
      <div className="footer">
        <center>
          <p>This site is build by student of LNCT college.</p>
        </center>
      </div>
    );
  }
}
