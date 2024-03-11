import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import ReactFullpage from '@fullpage/react-fullpage'
//import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, IconName, config } from '@fortawesome/fontawesome-svg-core'
import {
  faEnvelope,
  faCode,
  faAngleDoubleDown,
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Particles from 'react-tsparticles'
import 'twin.macro'
import { motion } from 'framer-motion'

library.add(fab, faCode, faEnvelope, faAngleDoubleDown)

// Disable the auto CSS insertion
config.autoAddCss = false

interface Props {
  children: any
  background: string
}

export interface LayoutProps {
  children: React.ReactNode
}

const SEL = 'custom-section'
const SECTION_SEL = `.${SEL}`
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const social = [
  {
    platform: `github`,
    icon: `github`,
    url: `https://github.com/juanramirezc2`,
  },
  {
    platform: `twitter`,
    icon: `twitter`,
    url: `https://twitter.com/juanramirezc2`,
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
    url: `https://stackoverflow.com/users/2525259/juan-gabriel-ramirez?tab=profile`,
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
]

const SoftAppear = ({ children }: LayoutProps) => (
  <motion.div initial="hidden" animate="visible" variants={variants}>
    {children}
  </motion.div>
)

const CustomParticles = () => (
  <Particles
    id="particles"
    style={{ zIndex: '1' }}
    options={{
      fullScreen: true,
      fpsLimit: 24,
      detectRetina: true,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
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
          type: 'circle',
        },
        size: {
          random: true,
          value: 5,
        },
      },
    }}
  />
)

const Layout = ({ children, background }: Props) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
          background: background,
          width: '100%',
          height: '100vh',
          position: 'relative',
        }}
      >
        {' '}
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
  )
}

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
          src="https://github.com/juanramirezc2.png"
          alt="profile"
          tw="rounded-full w-full object-cover"
        />
      </div>
    </div>
  )
}
const fullpages = [
  {
    text: 'About',
    Component: <About />,
    anchor: 'about',
  },
  {
    text: 'Skills',
    Component: <Skill />,
    anchor: 'skills',
  },
  {
    text: 'Blog',
    Component: <Blog />,
    anchor: 'blog',
  },
]
const Header = ({
  fullpages,
}: {
  fullpages: Array<{ text: string; Component: JSX.Element; anchor: string }>
}) => {
  return (
    <header className="header">
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          justifyContent: `space-between`,
          display: `flex`,
          alignItems: `center`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link href="/">
            <FontAwesomeIcon
              style={{ width: '40px', color: 'white' }}
              icon="code"
            />
          </Link>
        </h1>
        <ul
          style={{
            display: `flex`,
            margin: 0,
            listStyle: `none`,
          }}
          tw="flex list-none"
          className="main-menu"
        >
          {fullpages.map(({ text }, sectionIndex) => {
            return (
              <li key={text}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    ;(window as any).fullpage_api.moveTo(sectionIndex + 1)
                  }}
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
const skills = [
  {
    name: 'English Level',
    expertise: 'English level B2',
    score: 90,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="7" r="5" stroke="black" stroke-width="2" />
        <path
          d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    name: 'Javascript',
    expertise: '10 Years',
    score: 90,
    icon: (
      <svg version="1.1" viewBox="0 0 256 256">
        <g>
          <path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E"></path>
          <path
            d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
            fill="#000000"
          ></path>
          <path
            d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
            fill="#000000"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: 'CSS3',
    expertise: '10 Years',
    score: 90,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="CSS3"
        role="img"
        viewBox="0 0 512 512"
      >
        <path fill="#264de4" d="M72 460L30 0h451l-41 460-184 52" />
        <path fill="#2965f1" d="M256 37V472l149-41 35-394" />
        <path
          fill="#ebebeb"
          d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"
        />
        <path
          fill="#fff"
          d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"
        />
      </svg>
    ),
  },
  {
    name: 'HTML5',
    expertise: '10 Years',
    score: 90,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="HTML5"
        role="img"
        viewBox="0 0 512 512"
      >
        <path fill="#e34f26" d="M71 460L30 0h451l-41 460-185 52" />
        <path fill="#ef652a" d="M256 472l149-41 35-394H256" />
        <path
          fill="#ebebeb"
          d="M256 208h-75l-5-58h80V94H114l15 171h127zm-1 147l-63-17-4-45h-56l7 89 116 32z"
        />
        <path
          fill="#fff"
          d="M255 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z"
        />
      </svg>
    ),
  },
  {
    name: 'Reactjs',
    expertise: '5 Years',
    score: 60,
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g fill="#00D8FF" fill-rule="evenodd">
          <circle cx="11.996" cy="11.653" r="2.142" />
          <path
            fill-rule="nonzero"
            d="M11.9957722,7.80914159 C14.763782,7.80914159 17.3932297,8.19939152 19.3922491,8.88758063 C21.6123871,9.6518808 22.9666335,10.7818833 22.9666335,11.652558 C22.9666335,12.5799965 21.5040812,13.7840336 19.1293161,14.5708627 C17.2387355,15.1972602 14.7092455,15.538679 11.9957722,15.538679 C9.14520032,15.538679 6.58717845,15.203913 4.71853163,14.565185 C3.54866968,14.1653247 2.58256656,13.6456709 1.92037292,13.0785821 C1.32532838,12.5689984 1.02491103,12.0630628 1.02491103,11.652558 C1.02491103,10.7789546 2.32734001,9.66464781 4.49959681,8.90729393 C6.49945246,8.21010004 9.19325759,7.80914159 11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 M11.9957722,6.78423056 C9.08437994,6.78423056 6.2777499,7.20198239 4.1621939,7.93951199 C1.62214541,8.82509585 0,10.2129394 0,11.652558 C0,13.1394248 1.74140227,14.6307252 4.38703934,15.5350074 C6.37567236,16.2147483 9.04125041,16.56359 11.9957722,16.56359 C14.8115523,16.56359 17.4474553,16.2078081 19.4516644,15.5437626 C22.2020573,14.632477 23.9915445,13.1592927 23.9915445,11.652558 C23.9915445,10.2077356 22.3170688,8.81052922 19.7258695,7.91848823 C17.6128656,7.19105846 14.871718,6.78423056 11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 M8.64782576,9.74318674 C10.0306294,7.34537922 11.6822995,5.26251432 13.2771145,3.87459857 C15.0483324,2.33318986 16.7037652,1.72455661 17.4580053,2.15950561 C18.2614273,2.62281187 18.5738182,4.49132292 18.0690455,6.94154209 C17.6671734,8.89223963 16.6992742,11.2540339 15.3437168,13.6046372 C13.9196524,16.0740185 12.3517605,18.1226845 10.8648902,19.4223695 C9.93407029,20.2360369 9.00127666,20.8133347 8.17921011,21.1036655 C7.44050831,21.3645543 6.85214323,21.3720417 6.49651234,21.1669615 C5.73974814,20.7305244 5.42512511,19.045619 5.85426462,16.7855049 C6.24932455,14.7048419 7.24772098,12.1710157 8.64782671,9.74318508 L8.64782576,9.74318674 L8.64782576,9.74318674 L8.64782576,9.74318674 L8.64782576,9.74318674 M7.759974,9.23116928 C6.30547459,11.7533204 5.26525979,14.3932772 4.84734364,16.5943171 C4.34554839,19.2370813 4.73740525,21.3355983 5.98449631,22.0548141 C7.2725788,22.7976074 9.43439148,22.0341158 11.5394159,20.1940284 C13.121755,18.8108935 14.7555742,16.6760844 16.2315707,14.1166508 C17.6382359,11.6774242 18.6468519,9.21627599 19.0728759,7.1483441 C19.6574939,4.31054745 19.2752706,2.02434609 17.9700071,1.27164481 C16.7184046,0.549880923 14.6715337,1.30242953 12.6042836,3.1014613 C10.9185312,4.56851694 9.19669947,6.73986025 7.75997496,9.23116762 L7.759974,9.23116928 L7.759974,9.23116928 L7.759974,9.23116928 L7.759974,9.23116928 M8.65102932,13.6102163 C7.26423584,11.2147037 6.28457878,8.74353725 5.87862056,6.66870559 C5.42774955,4.36439699 5.72720706,2.6262057 6.48072727,2.18999639 C7.28337846,1.72531755 9.05821175,2.38783711 10.9288592,4.04883669 C12.4181905,5.37119379 13.9809502,7.38921897 15.3404734,9.7376059 C16.7686644,12.2045881 17.7605533,14.5861039 18.1440168,16.5233658 C18.384086,17.7361541 18.4183857,18.8326057 18.2593637,19.6898062 C18.1164684,20.4600771 17.8291151,20.9735449 17.473831,21.1792215 C16.7177635,21.6169189 15.1008664,21.0480332 13.3571194,19.5474962 C11.7518336,18.1661133 10.0552117,16.0356933 8.65102599,13.6102105 L8.65102932,13.6102163 L8.65102932,13.6102163 L8.65102932,13.6102163 L8.65102932,13.6102163 M7.76403451,14.1237168 C9.2227685,16.6434222 10.9904487,18.863069 12.6886037,20.3243677 C14.727583,22.0789594 16.7414064,22.7874988 17.9873239,22.0662207 C19.2741476,21.3212689 19.6923336,19.0670565 19.1494202,16.3243517 C18.741335,14.2627011 17.7077401,11.7810493 16.2274688,9.22410641 C14.8166895,6.78718171 13.1881856,4.68425955 11.6093526,3.2824351 C9.4428116,1.3587035 7.27122101,0.548080175 5.96723274,1.30299809 C4.71682218,2.02685487 4.34655386,4.17606524 4.87278214,6.8655093 C5.30188762,9.05864543 6.32316039,11.6347867 7.76403118,14.1237111 L7.76403451,14.1237168 L7.76403451,14.1237168 L7.76403451,14.1237168 L7.76403451,14.1237168"
          />
        </g>
      </svg>
    ),
  },
  {
    name: 'Nodejs',
    expertise: '5 Years',
    score: 60,
    icon: (
      <svg viewBox="-16.5 0 289 289" version="1.1">
        <g>
          <path
            d="M127.999999,288.463771 C124.024844,288.463771 120.314699,287.403728 116.869564,285.548656 L81.6231884,264.612838 C76.32298,261.697724 78.9730854,260.637682 80.5631458,260.107661 C87.7184259,257.72257 89.0434775,257.192547 96.4637688,252.952381 C97.2587979,252.422361 98.3188405,252.687372 99.1138718,253.217392 L126.144927,269.383024 C127.20497,269.913045 128.530021,269.913045 129.325053,269.383024 L235.064182,208.165634 C236.124225,207.635611 236.654245,206.575571 236.654245,205.250519 L236.654245,83.0807467 C236.654245,81.7556929 236.124225,80.6956526 235.064182,80.1656324 L129.325053,19.2132506 C128.26501,18.6832305 126.939959,18.6832305 126.144927,19.2132506 L20.4057954,80.1656324 C19.3457551,80.6956526 18.8157349,82.0207041 18.8157349,83.0807467 L18.8157349,205.250519 C18.8157349,206.31056 19.3457551,207.635611 20.4057954,208.165634 L49.2919247,224.861286 C64.9275364,232.811595 74.7329196,223.536234 74.7329196,214.260871 L74.7329196,93.681159 C74.7329196,92.0910985 76.0579711,90.5010358 77.9130428,90.5010358 L91.4285716,90.5010358 C93.0186343,90.5010358 94.6086948,91.8260873 94.6086948,93.681159 L94.6086948,214.260871 C94.6086948,235.196689 83.2132512,247.387164 63.3374737,247.387164 C57.2422362,247.387164 52.4720502,247.387164 38.9565214,240.761906 L11.1304347,224.861286 C4.24016581,220.886129 5.68434189e-14,213.46584 5.68434189e-14,205.515528 L5.68434189e-14,83.3457557 C5.68434189e-14,75.3954465 4.24016581,67.9751552 11.1304347,64.0000006 L116.869564,2.78260752 C123.494824,-0.927535841 132.505176,-0.927535841 139.130436,2.78260752 L244.869565,64.0000006 C251.759834,67.9751552 256,75.3954465 256,83.3457557 L256,205.515528 C256,213.46584 251.759834,220.886129 244.869565,224.861286 L139.130436,286.078676 C135.685299,287.668739 131.710145,288.463771 127.999999,288.463771 L127.999999,288.463771 Z M160.596274,204.455488 C114.219461,204.455488 104.679089,183.254659 104.679089,165.233955 C104.679089,163.643893 106.004141,162.053832 107.859212,162.053832 L121.639752,162.053832 C123.229813,162.053832 124.554864,163.113872 124.554864,164.703935 C126.674947,178.749484 132.770187,185.639753 160.861283,185.639753 C183.122154,185.639753 192.662526,180.604556 192.662526,168.67909 C192.662526,161.788821 190.012423,156.753624 155.296065,153.308489 C126.409938,150.393375 108.389235,144.033126 108.389235,120.977226 C108.389235,99.5113875 126.409938,86.7908901 156.621119,86.7908901 C190.542443,86.7908901 207.238095,98.4513472 209.358178,123.89234 C209.358178,124.687371 209.093167,125.482403 208.563147,126.277434 C208.033127,126.807454 207.238095,127.337474 206.443064,127.337474 L192.662526,127.337474 C191.337475,127.337474 190.012423,126.277434 189.747412,124.952382 C186.567289,110.376813 178.351966,105.606625 156.621119,105.606625 C132.240165,105.606625 129.325053,114.086957 129.325053,120.447205 C129.325053,128.132506 132.770187,130.5176 165.631471,134.757766 C198.227744,138.997931 213.598344,145.093169 213.598344,167.884058 C213.333333,191.20497 194.252589,204.455488 160.596274,204.455488 L160.596274,204.455488 Z"
            fill="#539E43"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    expertise: '2 Years',
    score: 50,
    icon: (
      <svg
        viewBox="0 0 400 400"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path style={{ fill: '#007acc' }} d="M0 200V0h400v400H0" />
        <path
          style={{ fill: '#fff' }}
          d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
        />
      </svg>
    ),
  },
  {
    name: 'Jest',
    expertise: '2 Years',
    score: 50,
    icon: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.089,15.786a2.606,2.606,0,0,0-2.606-2.606c-.093,0-.184.005-.274.014l3.58-10.557H12.577l3.574,10.548c-.052,0-.105-.005-.158-.005a2.607,2.607,0,0,0-.792,5.09,11.375,11.375,0,0,1-2.049,2.579A10.443,10.443,0,0,1,9.5,23.116a3.324,3.324,0,0,1-1.665-4.23c.077-.18.155-.362.23-.544a2.608,2.608,0,1,0-2.09-.4,20.08,20.08,0,0,0-1.889,4.788c-.354,2.135,0,4.4,1.845,5.681,4.3,2.981,8.969-1.848,13.891-3.061,1.784-.44,3.742-.369,5.313-1.28a4.443,4.443,0,0,0,2.179-3.088,4.639,4.639,0,0,0-.831-3.521,2.6,2.6,0,0,0,.606-1.671ZM18.6,15.8v-.009a2.605,2.605,0,0,0-1.256-2.23L20.188,7.8l2.85,5.814a2.6,2.6,0,0,0-1.161,2.169c0,.019,0,.038,0,.057L18.6,15.8Z"
          style={{ fill: '#99425b' }}
        />
        <path
          d="M27.726,15.786A3.248,3.248,0,0,0,25.083,12.6L28.677,2H11.689l3.6,10.621a3.242,3.242,0,0,0-1.005,5.919,10.852,10.852,0,0,1-1.568,1.846,9.836,9.836,0,0,1-3.16,2.03,2.657,2.657,0,0,1-1.134-3.281l.04-.093.074-.175a3.244,3.244,0,1,0-3.34-.754c-.108.231-.222.465-.339.706a14.022,14.022,0,0,0-1.4,3.8c-.465,2.8.285,5.043,2.111,6.308A5.751,5.751,0,0,0,8.934,30c2.132,0,4.289-1.071,6.4-2.119a23.638,23.638,0,0,1,4.642-1.917,18.262,18.262,0,0,1,1.8-.319,9.969,9.969,0,0,0,3.679-1.028,5.088,5.088,0,0,0,2.487-3.53,5.255,5.255,0,0,0-.69-3.613,3.225,3.225,0,0,0,.475-1.688Zm-1.273,0a1.97,1.97,0,1,1-1.97-1.97,1.973,1.973,0,0,1,1.97,1.97ZM26.9,3.273l-3.174,9.36a3.283,3.283,0,0,0-.4.125l-3.135-6.4L17.046,12.72a3.276,3.276,0,0,0-.419-.114L13.464,3.273ZM15.993,13.816a1.97,1.97,0,1,1-1.97,1.97,1.972,1.972,0,0,1,1.97-1.97Zm-8.523.019A1.97,1.97,0,1,1,5.5,15.805a1.972,1.972,0,0,1,1.969-1.97Zm19.217,7.034a3.818,3.818,0,0,1-1.871,2.646,8.88,8.88,0,0,1-3.223.87c-.632.091-1.285.185-1.924.343a24.609,24.609,0,0,0-4.9,2.013c-3.164,1.571-5.9,2.928-8.472,1.143-1.887-1.308-1.8-3.728-1.58-5.054A12.775,12.775,0,0,1,6,19.376c.092-.19.182-.375.27-.559a3.25,3.25,0,0,0,.838.21,3.963,3.963,0,0,0,2.1,4.655l.245.126.259-.093a11.022,11.022,0,0,0,3.876-2.4,12.11,12.11,0,0,0,1.918-2.32,3.241,3.241,0,0,0,2.64-5.627l2.038-4.121,2.059,4.2a3.24,3.24,0,0,0,4.088,5,3.952,3.952,0,0,1,.355,2.421Z"
          style={{ fill: '#fff' }}
        />
      </svg>
    ),
  },
]
function Skill() {
  return (
    <div>
      <Layout background={'linear-gradient(to right, #005AF5, #0081FF)'}>
        <h2 style={{ fontWeight: 'bold', fontSize: '30px' }}>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index}>
              <div
                style={{
                  textAlign: 'left',
                  fontWeight: 600,
                  fontSize: '16px',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '8px',
                  marginBottom: '10px',
                }}
              >
                <div
                  tw="hidden md:inline-block"
                  style={{
                    width: '48px',
                    height: '48px',
                    margin: 'auto 0',
                  }}
                >
                  {skill.icon}
                </div>
                <div>
                  <div>{skill.name}</div>
                  <div>{skill.expertise}</div>
                </div>
              </div>
              <ProgressBar progress={skill.score} />
            </div>
          ))}
        </div>
      </Layout>
      <div className="down-arrow">
        <FontAwesomeIcon width={25} icon="angle-double-down" bounce />
      </div>
    </div>
  )
}
function ProgressBar(props: { progress: number }) {
  const { progress } = props
  return (
    <>
      <div style={{ fontSize: '29px' }} className="percentages">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: progress + '%' }}
          transition={{ ease: 'linear', duration: 2 }}
          style={{
            textAlign: 'left',
            lineHeight: '50px',
            padding: '0 1rem',
            background: '#33BAB3B3',
          }}
        >
          {Math.floor(progress) + '%'}
        </motion.div>
      </div>
    </>
  )
}

function About() {
  return (
    <div>
      <Layout background={'linear-gradient(to right, #4b15c1, #005AF5)'}>
        <h1 className="animate" style={{ color: `#5FB3B3`, fontSize: `30px` }}>
          Juan Gabriel Ramirez
        </h1>
        <sub
          style={{ color: `#5FB3B3`, fontWeight: 500, fontSize: '13px' }}
          tw="block mb-5"
        >
          Senior FrontEnd Developer
        </sub>
        <Avatar />
        <ul className="social-links" tw="m-2 list-none">
          {social.map((el, index) => (
            <li key={index}>
              <a href={el.url} target="_blank">
                <FontAwesomeIcon
                  fontSize={23}
                  icon={['fab', el.icon as IconName]}
                />
              </a>
            </li>
          ))}
        </ul>
        <SoftAppear>
          <div
            style={{
              color: `white`,
            }}
          >
            <p>
              With over 13+ years of experience in the web development world, my
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
              In{' '}
              <a
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
                target="noopener noreferrer"
                rel="noreferrer"
                href="/Resume-Juan-Ramirez.pdf"
              >
                my resume
              </a>{' '}
              you can find my experience and skills, if you think i can be the
              right resource for your project or position please hit the below
              button! 😃
            </p>
            <a
              tw="mt-5 bg-bottom hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded inline-flex items-center no-underline"
              href="mailto:me@juangabriel.dev"
            >
              <FontAwesomeIcon tw="mr-2" icon="envelope" />
              Get in touch
            </a>
          </div>
        </SoftAppear>
      </Layout>
      <div className="down-arrow">
        <FontAwesomeIcon width={25} icon="angle-double-down" bounce />
      </div>
    </div>
  )
}

function Blog() {
  return (
    <div>
      <Layout background={'linear-gradient(to right, #009FFB, #00B8D8)'}>
        <h1 className="animate" style={{ color: `#5FB3B3`, fontSize: `21px` }}>
          Blog
        </h1>
      </Layout>
      <div className="down-arrow">
        <FontAwesomeIcon width={25} icon="angle-double-down" bounce />
      </div>
    </div>
  )
}
const Home: NextPage = () => {
  return (
    <div>
      <CustomParticles />
      <Head>
        <title>Juan G ramirez Senior Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header fullpages={fullpages} />
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
  )
}

export default Home
