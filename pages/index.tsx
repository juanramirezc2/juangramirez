import type { NextPage } from "next";
import Head from "next/head";
import ReactFullpage from "@fullpage/react-fullpage";
//import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconName, config } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faCode,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Particles from "react-tsparticles";
import "twin.macro";
import { motion } from "framer-motion";

library.add(fab, faCode, faEnvelope, faAngleDoubleDown);

// Disable the auto CSS insertion
config.autoAddCss = false;

interface Props {
  children: any;
  background: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const social = [
  {
    platform: `github`,
    icon: `github`,
    url: `https://github.com/JG-Ramirez`,
  },
  {
    platform: `twitter`,
    icon: `twitter`,
    url: `https://twitter.com/JG_Ramirez_`,
  },
  {
    platform: `codepen`,
    icon: `codepen`,
    url: `https://codepen.io/codegabo`,
  },
  {
    platform: `dev`,
    icon: `dev`,
    url: `https://dev.to/jgrc`,
  },
  {
    platform: `linkedin`,
    icon: `linkedin`,
    url: `https://www.linkedin.com/in/juanramirezcruz/`,
  },
  {
    platform: `stack overflow`,
    icon: `stack-overflow`,
    url: `https://es.stackoverflow.com/users/18928/juan-gabriel-ramirez`,
  },
  {
    platform: `npm`,
    icon: `npm`,
    url: `https://www.npmjs.com/~juangabriel`,
  },
  {
    platform: `youtube`,
    icon: `youtube`,
    url: `https://www.youtube.com/channel/UCi0J3yA3m5CuyR8E-0SE23w`,
  },
];

const SoftAppear = ({ children }: LayoutProps) => (
  <motion.div initial="hidden" animate="visible" variants={variants}>
    {children}
  </motion.div>
);

const CustomParticles = () => (
  <Particles
    id={`${Math.random().toString(16).slice(2)}`}
    options={{
      fpsLimit: 60,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }}
  />
);

const Layout = ({ children, background }: Props) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
          background: background,
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <CustomParticles />
        <div className="hero__iner">
          <div
            className="hero__iner__text"
            tw="flex flex-col items-center justify-center"
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

const Avatar = () => {
  return (
    <div
      style={{
        borderRadius: `100%`,
        overflow: `hidden`,
        width: `200px`,
        marginBottom: `1.45rem`,
      }}
    >
      <div className="profile">
        <img
          src="https://avatars.githubusercontent.com/u/4117152"
          alt="profile"
          tw="rounded-full w-full object-cover"
        />
      </div>
    </div>
  );
};
const fullpages = [
  {
    text: "About",
    Component: <About />,
    anchor: "about",
  },
  {
    text: "Skills",
    Component: <Skill />,
    anchor: "skills",
  },
  {
    text: "Blog",
    Component: <Blog />,
    anchor: "blog",
  },
];

function About() {
  return (
    <>
      <Layout background={"linear-gradient(to right, #4b15c1, #005AF5)"}>
        <h1 className="animate" style={{ color: `#5FB3B3`, fontSize: `21px` }}>
          Juan Gabriel Ramirez
          <br />
          <sub>Senior FrontEnd Developer</sub>
        </h1>
        <Avatar />
        <ul className="social-links" tw="m-0 list-none">
          {social.map((el, index) => (
            <li key={index}>
              <a href={el.url}>
                <FontAwesomeIcon icon={["fab", el.icon as IconName]} />
              </a>
            </li>
          ))}
        </ul>
        <SoftAppear>
          <div
            style={{
              padding: `3rem 1.0875rem`,
              color: `white`,
            }}
          >
            <p>
              With over 10+ years of experience in the web development world, my
              biggest goal is to help companies by bringing simple solutions to
              complex problems.
            </p>
            <p>Passionate about developing amazing user experiences!</p>
            <p>
              Every position I have held has transformed my skillset and goals
              towards forward-thinking technology. I am obsessed with expanding
              my craft, solving challenging problems and staying on the bleeding
              edge.
            </p>
            <p>
              In{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1SL49RLzpiHvgkFg-k9lFFDR381XfBMbc/view?usp=sharing"
              >
                my resume
              </a>{" "}
              you can find my experience and skills, if you think i can be the
              right resource for your project or position please hit the below
              button! 😃
            </p>
            <a
              tw="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded inline-flex items-center no-underline"
              href="mailto:contact@juangabriel.dev"
            >
              <FontAwesomeIcon tw="mr-2" icon="envelope" />
              Get in touch
            </a>
          </div>
        </SoftAppear>
        <div tw="text-center">
          <FontAwesomeIcon icon="angle-double-down" />
        </div>
      </Layout>
    </>
  );
}

function Blog() {
  return (
    <>
      <Layout background={"linear-gradient(to right, #009FFB, #00B8D8)"}>
        <h1 className="animate" style={{ color: `#5FB3B3`, fontSize: `21px` }}>
          Blog
        </h1>

        <div tw="text-center">
          <FontAwesomeIcon icon="angle-double-down" />
        </div>
      </Layout>
    </>
  );
}
function Skill() {
  return (
    <>
      <Layout background={"linear-gradient(to right, #005AF5, #0081FF)"}>
        <h1 className="animate" style={{ color: `#5FB3B3`, fontSize: `21px` }}>
          Skills
        </h1>

        <div tw="text-center">
          <FontAwesomeIcon icon="angle-double-down" />
        </div>
      </Layout>
    </>
  );
}
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ReactFullpage
          navigation
          anchors={fullpages.map((page) => page.anchor)}
          sectionSelector={SECTION_SEL}
          cards={true}
          cardsOptions={{
            perspective: 1,
            fadeContent: false,
            fadeBackground: false,
          }}
          render={(comp) => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text, Component }) => (
                <div key={text} className={SEL}>
                  {Component}
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </main>
    </div>
  );
};

export default Home;

