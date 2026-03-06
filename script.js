document.documentElement.classList.add("js-ready");

const content = {
  about:
    "I am a Physics major and Astronomy minor at Truman State University. My work spans EMRI and SMBH merger science for LISA, simulation-driven astrophysics, and engineering projects where physics meets code and hardware.",
  stats: [
    { value: "4+", label: "Research Roles" },
    { value: "3", label: "Presentations" },
    { value: "2026", label: "Expected Graduation" }
  ],
  beyondWork: {
    text:
      "Outside research and mentoring, I recharge through sports, skywatching, and exploring new places. These activities keep me creative and help me bring fresh energy back to research, teaching, and problem-solving.",
    hobbies: [
      { icon: "🔭", label: "Stargazing nights" },
      { icon: "🏏", label: "Cricket" },
      { icon: "🤖", label: "Robotics builds" },
      { icon: "📷", label: "Astrophotography" },
      { icon: "🥾", label: "Hiking trails" },
      { icon: "🎮", label: "VideoGames" }
    ],
    travel: {
      mapLabel: "Interactive U.S. map showing visited states",
      visitedStates: ["CA", "NY", "NJ", "OH", "IL", "TX", "LA", "OK", "PA", "MD", "DC", "VA", "WV", "AZ", "CO", "NM", "NV", "DE", "IA", "KS", "MO"],
      visitedCountries: ["US", "CA", "IN", "BD"],
      stateNotes: {
        CA: "Pasadena - NASA JPL work",
        MD: "Greenbelt - NASA GSFC research",
        MO: "Kirksville / Columbia / Kansas City - university and events",
        IL: "Chicago - conference travel"
      }
    }
  },
  research: [
    {
      title: "Analyzing EMRIs for LISA",
      place: "NASA JPL, Pasadena, CA",
      date: "Jun 2025 - Present",
      text: "Generated EMRI waveforms with FEW and performed MCMC parameter estimation to test sensitivity to deviations from General Relativity.",
      fullText:
        "This project focuses on modeling gravitational waves produced when a small compact object (like a stellar-mass black hole) spirals into a much larger massive black hole. I generate EMRI waveforms using the Fast EMRI Waveforms (FEW) package and analyze how these signals would appear in the future LISA gravitational-wave detector.\n\nI also perform MCMC parameter estimation to understand how well we can measure properties of these systems and explore how EMRI signals could reveal possible deviations from General Relativity. This work also helps investigate how intermediate-mass black hole mergers might appear in gravitational-wave observations.",
      image: "assets/animation3.gif",
      imageAlt: "EMRI black hole animation GIF used for waveform analysis.",
      imageCaption: "Animated EMRI visual used for LISA-focused analysis.",
      imageUseNaturalAspect: true,
      links: [{ label: "GitHub", href: "https://github.com/thirtha17" }]
    },
    {
      title: "SMBH Merger Populations with LISA",
      place: "NASA GSFC, Greenbelt, MD",
      date: "Jun 2024 - Jun 2025",
      text: "Built SMBH population waveform pipelines with LISA analysis tools and BBHX, then evaluated detectability and pre-merger observation windows.",
      fullText:
        "In this project I studied how many supermassive black hole mergers LISA could detect across the universe. Using gravitational-wave modeling tools such as LISA Data Analysis Tools and BBHX, I generated waveforms for large populations of merging black holes and calculated their signal-to-noise ratios.\n\nOne key goal of this work was to determine whether these mergers could be detected before the final collision, which would allow astronomers to point telescopes at the right part of the sky and observe the event as it happens.",
      image: "assets/8k_Merger_first.gif",
      imageAlt: "Supermassive black hole merger animation.",
      imageCaption: "Population-scale detectability forecasts for massive mergers. Credit: NASA GSFC/Bernard J. Kelly and others",
      imageUseNaturalAspect: true,
      links: [{ label: "GitHub", href: "https://github.com/thirtha17" }]
    },
    {
      title: "SMBH Predictions in Cosmological Simulations",
      place: "Truman State University",
      date: "May 2023 - May 2024",
      text: "Gas column density across the full large-volume TNG300-1 simulation at redshift zero.",
      fullText:
        "This project connected cosmological galaxy simulations with gravitational-wave astronomy. Using the TNG300 simulation, I analyzed populations of supermassive black holes across cosmic time.\n\nBy studying their masses, mass ratios, and merger rates, I predicted how many of these mergers would be detectable by LISA and estimated the strength of their gravitational-wave signals.",
      image: "assets/boxImage_TNG300-1_gas-coldens_thinSlice_2000.png",
      imageAlt: "Gas column density map from the TNG300-1 simulation at redshift zero.",
      imageCaption: "Gas column density across the full large-volume TNG300-1 simulation at redshift zero. Credit: IllustrisTNG.",
      imageUseNaturalAspect: true,
      links: [{ label: "GitHub", href: "https://github.com/thirtha17" }]
    },
    {
      title: "Time Reversibility of Physical Laws",
      place: "Truman State University",
      date: "Oct 2024 - Present",
      text: "Simulated particle evolution under custom laws and produced Manim visualizations to analyze reversibility behavior.",
      fullText:
        "This project explores a fundamental question in physics: if the laws of physics are time-reversible, why does time seem to move only forward?\n\nI built computational simulations where particles move between multiple boxes following simple physical rules. By evolving the system forward and backward in time, I examined how the system behaves under time-reversible laws. I also created visual animations of these simulations using Manim to better illustrate how the system evolves.",
      image: "assets/gravity_evolution_notebook.gif",
      imageAlt: "Gravity evolution notebook animation for time reversibility simulations.",
      imageCaption: "Gravity evolution visualization for time-reversibility simulations.",
      imageUseNaturalAspect: true,
      links: [{ label: "GitHub", href: "https://github.com/thirtha17" }]
    }
  ],
  projects: [
    {
      title: "Black Hole Ray-Tracing Simulator",
      text: "Built a C++/OpenGL backend to integrate null geodesics and render real-time black hole visuals, with Python bindings via pybind11.",
      fullText:
        "I built a simulation that visualizes how light bends around a black hole due to strong gravity. The simulator numerically integrates photon trajectories in curved spacetime to produce realistic images of gravitational lensing and accretion disks.\n\nThe core simulation is written in C++ with OpenGL for rendering, while Python bindings using pybind11 allow users to run simulations and change parameters more easily.",
      tags: ["C++", "OpenGL", "Python", "pybind11"],
      image: "assets/blackhole_animation.gif",
      imageAlt: "Black hole animation GIF from the ray-tracer.",
      imageCaption: "Black hole animation render from the ray-tracing simulator.",
      imageUseNaturalAspect: true,
      links: [{ label: "GitHub", href: "https://github.com/Thirtha17/Blackhole-Simulator.git" }]
    },
    {
      title: "Automated Greenhouse System",
      text: "Designed and 3D-printed a greenhouse model with sensors and Arduino control logic for automated watering and lighting.",
      fullText:
        "This project involved building a small automated greenhouse that monitors environmental conditions and automatically controls watering and lighting.\n\nThe system uses temperature and light sensors connected to an Arduino Uno, along with a motor-controlled irrigation pump and a small display to monitor conditions. I also designed and 3D printed the greenhouse structure and programmed the control logic to respond to sensor data.",
      tags: ["Arduino", "C/C++", "OnShape", "Hardware"],
      image: "assets/project-greenhouse.svg",
      imageAlt: "Stylized greenhouse with sensors and watering lines.",
      imageCaption: "Sensor-integrated control loops for autonomous plant care.",
      imageUseNaturalAspect: true,
      links: [{ label: "GitHub", href: "https://github.com/krishna684/IoT-GreenHouse-Controller.git" }]
    },
    {
      title: "Hexapod Walking Robot",
      text: "Designed a six-legged robot and implemented synchronized gait control with Raspberry Pi, servos, and custom movement logic.",
      fullText:
        "I designed and built a six-legged walking robot that focuses on mechanical design and coordinated movement.\n\nThe robot uses a Raspberry Pi to control servo motors that drive each leg. I developed basic walking patterns (gaits) and control code that synchronizes the movement of all six legs to maintain stability while walking.",
      tags: ["Raspberry Pi", "Robotics", "Python/C++", "CAD"],
      image: "assets/project-hexapod.svg",
      imageAlt: "Stylized six-legged robot on a test platform.",
      imageCaption: "Gait synchronization and motion planning on embedded hardware.",
      imageUseNaturalAspect: true,
      links: [{ label: "GitHub", href: "https://github.com/thirtha17" }]
    }
  ],
  experience: [
    {
      type: "work",
      title: "Embedded Physics Tutor",
      place: "Center for Academic Excellence",
      date: "Jan 2024 - Present",
      text: "Supported introductory physics classes through in-class reinforcement, tutoring sessions, and CRLA-informed methods.",
      fullText:
        "Delivered in-class and small-group tutoring for introductory physics, with emphasis on conceptual fluency, problem decomposition, and exam readiness.\n\nApplied CRLA-informed tutoring strategies and active-recall workflows to improve student confidence and persistence in quantitative coursework.",
      image: "assets/work-physics-tutor.png",
      // imageAlt: "Physics tutor explaining equations on a whiteboard.",
      // imageCaption: "Classroom support with concept-focused physics coaching.",
      imageUseNaturalAspect: true,
    },
    {
      type: "work",
      title: "Academic Coach",
      place: "Truman Upward Bound Program",
      date: "Jan 2025 - Present",
      text: "Mentored high school students with structured academic support and personalized learning guidance.",
      fullText:
        "Provided structured weekly coaching focused on study systems, assignment planning, and concept retention for high school students in college-prep tracks.\n\nDesigned individualized support plans with measurable short-term goals and tracked progress through regular check-ins with students and program staff.",
      image: "assets/work-academic-coach.svg",
      // imageAlt: "Mentor guiding students with study notes in a classroom.",
      imageUseNaturalAspect: true,
      // imageCaption: "One-on-one mentoring and structured academic planning.",
    },
    {
      type: "outreach",
      title: "Astronomy / Dark Sky Outreach",
      place: "Truman State",
      date: "Spring 2024 - Present",
      text: "Led stargazing programs and gathered city light data to support local dark-sky improvements.",
      fullText:
        "Organized community observing nights, telescope demonstrations, and introductory sky-navigation sessions for students and local participants.\n\nCollected and communicated light-pollution observations to support dark-sky awareness and practical local outreach initiatives.",
      image: "assets/outreach-stargazing.png",
      imageUseNaturalAspect: true,
      // imageAlt: "Students stargazing with telescopes under a night sky.",
      // imageCaption: "Community stargazing nights and dark-sky awareness work.",
      images: [
        {
          src: "assets/stargazing.png",
          alt: "Students stargazing with telescopes under a night sky.",
          caption: "Stargazing event at Thousand Hills State Park in March 2023. More than 50 people showed up for this particular event. Students set up and operate the eVScope which is capable of providing views"
        },
        {
          src: "assets/eVscope-20230928-015141.png",
          alt: "Globular cluster captured with the eVscope during outreach.",
          caption: "Globular cluster target captured during a late-night eVscope session.",
          imageUseNaturalAspect: true
        },
        {
          src: "assets/eVscope-20231102-003744.png",
          alt: "Ring Nebula (M57) captured with the eVscope.",
          caption: "Ring Nebula (M57): a planetary nebula in Lyra, imaged during outreach.",
          imageUseNaturalAspect: true
        },
        {
          src: "assets/eVscope-20231102-010105.png",
          alt: "Globular cluster captured with the eVscope during outreach.",
          caption: "Second globular-cluster view from the same eVscope observing night.",
          imageUseNaturalAspect: true
        },
        {
          src: "assets/eVscope-20231102-011056.png",
          alt: "Dumbbell Nebula (M27) captured with the eVscope.",
          caption: "Dumbbell Nebula (M27): bright bipolar planetary nebula in Vulpecula.",
          imageUseNaturalAspect: true
        },
        {
          src: "assets/eVscope-20231116-021205.png",
          alt: "Andromeda Galaxy (M31) captured with the eVscope.",
          caption: "Andromeda Galaxy (M31): wide core and dust-lane structure from outreach imaging.",
          imageUseNaturalAspect: true
        },
        {
          src: "assets/eVscope-20231116-021755.png",
          alt: "Triangulum Galaxy (M33) captured with the eVscope.",
          caption: "Triangulum Galaxy (M33): faint spiral detail visible in a stacked outreach capture.",
          imageUseNaturalAspect: true
        },
        {
          src: "assets/eVscope2-20240322-014717.png",
          alt: "Orion Nebula (M42) captured with the eVscope.",
          caption: "Orion Nebula (M42): bright core and surrounding emission clouds.",
          imageUseNaturalAspect: true
        }
      ]
    },
    {
      type: "outreach",
      title: "Science Olympiad Volunteer",
      place: "Truman State",
      date: "2023 - Present",
      text: "Contributed to astronomy event exam support and competition proctoring.",
      fullText:
        "Supported astronomy event logistics, exam-prep content, and competition-day facilitation for student participants.\n\nHelped students connect core astronomy concepts to timed problem-solving formats used in Olympiad-style assessments.",
      image: "assets/outreach-olympiad.png",
      imageUseNaturalAspect: true,
      // imageAlt: "Science Olympiad astronomy event setup with students and materials.",
      // imageCaption: "Event support and astronomy problem-solving mentorship."
    }
  ],
  leadership: [
    {
      title: "Founder & President",
      place: "TruBots",
      date: "Jan 2025 - Present",
      text: "Started a robotics club to promote hands-on engineering and competitive builds.",
      fullText:
        "Founded TruBots to create a sustained, hands-on robotics community focused on design, prototyping, and competition readiness.\n\nEstablished team structure, build workflows, and recruiting activities to help students move from interest to active project participation.\n\nLed planning across technical training sessions, project milestones, and collaboration norms for cross-discipline teams.",
      image: "assets/leadership-trubots.png",
      // imageAlt: "Student robotics team working around a prototype robot.",
      // imageCaption: "Built a student robotics community from the ground up."
    },
    {
      title: "Vice President",
      place: "Society of Physics Students",
      date: "Jan 2023 - Present",
      text: "Organized events and activities that increased student engagement in physics.",
      fullText:
        "Coordinated SPS programming that connected coursework with research, outreach, and professional development opportunities.\n\nPlanned events, speaker sessions, and student activities designed to increase participation and strengthen department community.\n\nSupported logistics, communication, and execution to keep programming consistent and high-impact across semesters.",
      image: "assets/leadership-sps.png",
      // imageAlt: "Physics club event with students gathered around posters.",
      // imageCaption: "Led programming and events to grow physics participation."
    },
    {
      title: "President",
      place: "Truman Cricket Club",
      date: "Jan 2023 - Present",
      text: "Coordinated team operations, matches, and club events.",
      fullText:
        "Managed club operations including scheduling, match coordination, and member onboarding for regular team activities.\n\nOversaw practice organization, communication, and event planning to keep participation strong and operations predictable.\n\nBalanced competitive goals with community-building through consistent leadership and logistical planning.",
      image: "assets/leadership-cricket.png",
      // imageAlt: "Cricket team captain organizing players on the field.",
      // imageCaption: "Managed team logistics, matches, and club operations."
    },
    {
      title: "Treasurer",
      place: "South Asian Student Union",
      date: "Jan 2024 - Present",
      text: "Managed budgeting and event finance for cultural programming.",
      fullText:
        "Directed budgeting and financial tracking for South Asian Student Union events and semester programming.\n\nHandled allocation planning, expense documentation, and reimbursement coordination to keep events financially sustainable.\n\nWorked with leadership to align programming goals with available resources and transparent financial processes.",
      image: "assets/leadership-sasu.png",
      // imageAlt: "Student cultural event planning table with budget sheets.",
      // imageCaption: "Handled budgeting and finance for cultural initiatives."
    }
  ],
  conferences: [
    {
      title: "American Astronomical Society (AAS)",
      place: "Conference Participation",
      date: "2024 - 2025",
      text: "Participated in astronomy-focused conference programming connected to gravitational-wave and black-hole science.",
      fullText:
        "Participated in AAS conference sessions focused on gravitational-wave astrophysics, black-hole populations, and multi-messenger science.\n\nEngaged with current methods, datasets, and open science questions relevant to LISA-era source modeling and inference.\n\nUsed conference discussions to refine analysis directions and presentation framing for ongoing research projects.",
      image: "assets/research-smbh.svg",
      imageAlt: "Conference-themed black hole research illustration.",
      imageCaption: "Conference engagement in gravitational-wave astronomy."
    },
    {
      title: "American Physical Society (APS)",
      place: "Conference Participation",
      date: "2024 - 2025",
      text: "Attended physics research sessions and connected with broader computational and theoretical communities.",
      fullText:
        "Participated in APS conference programming spanning computational physics, astrophysics, and data analysis workflows.\n\nFollowed talks and poster sessions relevant to compact-object dynamics, numerical methods, and uncertainty-aware inference.\n\nIntegrated technical takeaways into ongoing modeling and communication of research results.",
      image: "assets/research-time.svg",
      imageAlt: "Physics presentation-themed illustration.",
      imageCaption: "Physics conference participation across computation and theory."
    }
  ],
  presentations: [
    {
      title: "EMRI Waveform Inference for LISA",
      place: "AAS/APS Presentation",
      date: "2025",
      text: "Presented EMRI waveform generation and MCMC-based parameter recovery results.",
      fullText:
        "Presented methodology and results for EMRI waveform generation, likelihood construction, and Bayesian parameter estimation under LISA-like assumptions.\n\nDiscussed model sensitivity to beyond-GR perturbations and highlighted where posterior degeneracies affect interpretation.\n\nFocused on communicating both technical rigor and science impact to mixed-audience conference attendees.",
      image: "assets/animation3.gif",
      imageAlt: "EMRI black hole animation used in presentation materials.",
      imageCaption: "Presentation visual for EMRI inference results.",
      imageUseNaturalAspect: true
    },
    {
      title: "SMBH Population Detectability with LISA",
      place: "AAS/APS Presentation",
      date: "2025",
      text: "Presented population-scale detectability forecasts and pre-merger observation windows.",
      fullText:
        "Presented a population-level analysis linking SMBH merger assumptions to LISA detectability and warning-time forecasts.\n\nCompared representative source classes and summarized how model choices influence expected science yield.\n\nEmphasized reproducible pipelines and interpretation of population trends for mission-era planning.",
      image: "assets/8k_Merger_first.gif",
      imageAlt: "Supermassive black hole merger animation used in presentation slides.",
      imageCaption: "Presentation visual for SMBH population forecasts.",
      imageUseNaturalAspect: true
    },
    {
      title: "Cosmological Simulation Insights for GW Sources",
      place: "AAS/APS Presentation",
      date: "2024",
      text: "Presented TNG300-1 derived trends relevant to black-hole merger demographics.",
      fullText:
        "Presented simulation-informed trends from TNG300-1 connecting host environment, mass distributions, and redshift evolution to merger expectations.\n\nHighlighted how cosmological population structure can inform source priors and interpretation in gravitational-wave studies.\n\nFramed results for interdisciplinary audiences spanning astronomy, computation, and data analysis.",
      image: "assets/boxImage_TNG300-1_gas-coldens_thinSlice_2000.png",
      imageAlt: "TNG300-1 gas column density image used in presentation.",
      imageCaption: "Presentation visual from TNG300-1 simulation analyses."
    }
  ],
  skills: [
    "Python",
    "C++",
    "LaTeX",
    "PyTorch",
    "OpenCV",
    "NumPy",
    "SciPy",
    "Matplotlib",
    "LISA Data Analysis Tools",
    "Eryn",
    "MCMC",
    "BBHX",
    "Manim",
    "OpenGL",
    "Arduino",
    "OnShape"
  ],
  highlights: [
    "CRESST-II Summer Research Internship Program (Summer 2024)",
    "Mizzou TigerHacks 2024 Hardware Track Winner (Nov 2024)",
    "Grants-In-Aid of Scholarship and Research Award Recipient (Spring 2025)",
    "TEAM-UP Together Scholarship Program (2025)",
    "President's and Vice-President's List recognitions at Truman State"
  ],
  contacts: [
    { label: "Email", href: "mailto:thirthakarmakar@gmail.com", icon: "email" },
    { label: "GitHub", href: "https://github.com/thirtha17", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thirtha17", icon: "linkedin" },
    { label: "Location", href: "#", text: "Kirksville, MO" }
  ],
  typeWords: [
    "Gravitational Wave Astronomy",
    "Blackhole Physics",
    "Cosmological Simulations",
    "Scientific Computing"
  ]
};
const randomAboutCards = [
  { value: "Night Owl", label: "Best Focus Hours", type: "text", flash: true },
  { value: "50+", label: "Stargazing Nights", type: "text", flash: true },
  { value: "Builder Mindset", label: "Work Style", type: "text", flash: true },
  { value: "Coffee + Code", label: "Lab Fuel", type: "text", flash: true },
  { value: "Hands-On", label: "Learning Mode", type: "text", flash: true }
];
const randomCard = randomAboutCards[Math.floor(Math.random() * randomAboutCards.length)];
content.stats = [...content.stats, randomCard];

const aboutText = document.getElementById("about-text");
const statsWrap = document.getElementById("stats");
const beyondWorkText = document.getElementById("beyond-work-text");
const hobbyList = document.getElementById("hobby-list");
const travelMap = document.getElementById("travel-map");
const travelGlobe = document.getElementById("travel-globe");
const travelViewMapBtn = document.getElementById("travel-view-map");
const travelViewGlobeBtn = document.getElementById("travel-view-globe");
const researchGrid = document.getElementById("research-grid");
const projectGrid = document.getElementById("project-grid");
const workGrid = document.getElementById("work-grid");
const outreachGrid = document.getElementById("outreach-grid");
const leadershipGrid = document.getElementById("leadership-grid");
const conferenceGrid = document.getElementById("conference-grid");
const presentationGrid = document.getElementById("presentation-grid");
const skillWrap = document.getElementById("skill-orbits");
const highlightsWrap = document.getElementById("highlights");
const contactWrap = document.getElementById("contact-links");
const typewriter = document.getElementById("typewriter");

if (aboutText) aboutText.textContent = content.about;
if (beyondWorkText) beyondWorkText.textContent = content.beyondWork.text;
const detailModal = createDetailModal();
const skillLogos = {
  Python: "https://cdn.simpleicons.org/python",
  "C++": "https://cdn.simpleicons.org/cplusplus",
  LaTeX: "https://cdn.simpleicons.org/latex",
  PyTorch: "https://cdn.simpleicons.org/pytorch",
  OpenCV: "https://cdn.simpleicons.org/opencv",
  NumPy: "https://cdn.simpleicons.org/numpy",
  SciPy: "https://cdn.simpleicons.org/scipy",
  Matplotlib: "https://cdn.simpleicons.org/matplotlib",
  OpenGL: "https://cdn.simpleicons.org/opengl",
  Arduino: "https://cdn.simpleicons.org/arduino",
  OnShape: "https://cdn.simpleicons.org/onshape"
};
const US_TILE_MAP = [
  ["AK", "", "", "", "", "", "", "", "", "", "", "", "ME"],
  ["", "", "", "", "", "", "", "", "", "", "", "VT", "NH"],
  ["", "WA", "ID", "MT", "ND", "MN", "WI", "MI", "", "NY", "CT", "RI", "MA"],
  ["", "OR", "NV", "WY", "SD", "IA", "IL", "IN", "OH", "PA", "NJ", "DE", ""],
  ["", "CA", "UT", "CO", "NE", "MO", "KY", "WV", "VA", "DC", "MD", "", ""],
  ["", "", "AZ", "NM", "KS", "AR", "MS", "TN", "NC", "", "", "", ""],
  ["", "", "", "", "OK", "LA", "AL", "GA", "SC", "", "", "", ""],
  ["HI", "", "", "", "TX", "", "", "", "FL", "", "", "", ""]
];
const US_STATE_NAMES = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  DC: "District of Columbia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri",
  MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey",
  NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio",
  OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming"
};

function renderIcon(type) {
  const icons = {
    email:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7L4 7.5V18h16V7.5L12 12z" fill="currentColor"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.21.68-.48v-1.68c-2.78.61-3.37-1.18-3.37-1.18-.46-1.15-1.1-1.45-1.1-1.45-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.34 1.08 2.91.82.09-.66.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.63 0 0 .85-.27 2.79 1.02a9.6 9.6 0 0 1 5.08 0c1.94-1.29 2.79-1.02 2.79-1.02.55 1.37.2 2.38.1 2.63.64.7 1.03 1.59 1.03 2.68 0 3.83-2.33 4.67-4.56 4.92.36.31.68.91.68 1.83v2.71c0 .27.18.58.69.48A10 10 0 0 0 12 2z" fill="currentColor"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5a1.56 1.56 0 1 1 .01-3.12 1.56 1.56 0 0 1-.01 3.12zM5.5 10h2.9v8.5H5.5V10zm4.6 0h2.78v1.21h.04c.39-.73 1.34-1.5 2.77-1.5 2.97 0 3.52 1.95 3.52 4.49v4.3h-2.9v-3.81c0-.91-.02-2.09-1.27-2.09-1.28 0-1.48 1-1.48 2.02v3.88h-2.9V10z" fill="currentColor"/></svg>'
  };
  return icons[type] || "";
}

function createDetailModal() {
  const overlay = document.createElement("div");
  overlay.className = "detail-modal";
  overlay.setAttribute("aria-hidden", "true");

  const panel = document.createElement("div");
  panel.className = "detail-modal-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "true");

  const close = document.createElement("button");
  close.type = "button";
  close.className = "detail-modal-close";
  close.setAttribute("aria-label", "Close details");
  close.textContent = "×";

  const body = document.createElement("div");
  body.className = "detail-modal-body";

  panel.appendChild(close);
  panel.appendChild(body);
  overlay.appendChild(panel);
  document.body.appendChild(overlay);

  const closeModal = () => {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  const openModal = (item) => {
    body.innerHTML = "";
    const modalImages = Array.isArray(item.images) && item.images.length > 0
      ? item.images
      : (item.image
        ? [{
            src: item.image,
            alt: item.imageAlt || item.title,
            caption: item.imageCaption,
            imageAspectRatio: item.imageAspectRatio,
            imageUseNaturalAspect: item.imageUseNaturalAspect
          }]
        : []);

    const title = document.createElement("h3");
    title.textContent = item.title;
    body.appendChild(title);

    if (item.place || item.date) {
      const meta = document.createElement("p");
      meta.className = "meta";
      meta.textContent = item.place && item.date ? `${item.place} | ${item.date}` : (item.place || item.date);
      body.appendChild(meta);
    }

    const fullText = item.fullText || item.text;
    const paragraphs = fullText
      .split("\n\n")
      .map((p) => p.trim())
      .filter(Boolean);

    const mediaCount = modalImages.length;
    const flowCount = Math.max(paragraphs.length, mediaCount);

    for (let i = 0; i < flowCount; i += 1) {
      if (paragraphs[i]) {
        const text = document.createElement("p");
        text.className = "detail-full-text";
        text.textContent = paragraphs[i];
        body.appendChild(text);
      }

      if (modalImages[i]) {
        const media = modalImages[i];
        const figure = document.createElement("figure");
        figure.className = "detail-media detail-inline-media";

        const img = document.createElement("img");
        img.src = media.src;
        img.alt = media.alt || item.title;
        img.loading = "lazy";

        if (media.imageAspectRatio || item.imageAspectRatio) {
          img.style.aspectRatio = media.imageAspectRatio || item.imageAspectRatio;
          img.style.height = "auto";
          img.style.maxHeight = "none";
        }
        if (media.imageUseNaturalAspect || item.imageUseNaturalAspect) {
          img.style.height = "auto";
          img.style.maxHeight = "none";
          img.style.objectFit = "contain";
        }

        figure.appendChild(img);

        if (media.caption) {
          const cap = document.createElement("figcaption");
          cap.textContent = media.caption;
          figure.appendChild(cap);
        }

        body.appendChild(figure);
      }
    }

    if (item.tags?.length) {
      const chipWrap = document.createElement("div");
      chipWrap.className = "chip-wrap";
      item.tags.forEach((tag) => {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = tag;
        chipWrap.appendChild(chip);
      });
      body.appendChild(chipWrap);
    }

    if (item.links?.length) {
      const linkWrap = document.createElement("div");
      linkWrap.className = "card-links";
      item.links.forEach((link) => {
        const a = document.createElement("a");
        a.href = link.href;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = link.label;
        linkWrap.appendChild(a);
      });
      body.appendChild(linkWrap);
    }

    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  close.addEventListener("click", closeModal);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("open")) closeModal();
  });

  return { openModal, closeModal };
}

function makeSkillFallback(label) {
  const fallback = document.createElement("span");
  fallback.className = "skill-fallback";
  const initials = label
    .split(/[\s/-]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  fallback.textContent = initials || "•";
  return fallback;
}

function makeCard(item) {
  const card = document.createElement("article");
  card.className = "card";
  if (item.image) card.classList.add("with-image");
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open details for ${item.title}`);
  const body = document.createElement("div");
  body.className = "card-body";

  if (item.image) {
    const figure = document.createElement("figure");
    figure.className = "card-media";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.imageAlt || item.title;
    img.loading = "lazy";
    if (item.imageAspectRatio) {
      img.style.aspectRatio = item.imageAspectRatio;
      img.style.height = "auto";
      img.style.minHeight = "0";
    }
    if (item.imageUseNaturalAspect) {
      img.style.height = "auto";
      img.style.minHeight = "0";
      img.style.objectFit = "contain";
    }
    figure.appendChild(img);

    if (item.imageCaption) {
      const caption = document.createElement("figcaption");
      caption.textContent = item.imageCaption;
      figure.appendChild(caption);
    }

    card.appendChild(figure);
  }

  const title = document.createElement("h3");
  title.textContent = item.title;
  body.appendChild(title);

  if (item.place || item.date) {
    const meta = document.createElement("p");
    meta.className = "meta";
    if (item.place && item.date) {
      meta.textContent = `${item.place} | ${item.date}`;
    } else {
      meta.textContent = item.place || item.date;
    }
    body.appendChild(meta);
  }

  const text = document.createElement("p");
  text.textContent = item.text;
  body.appendChild(text);

  if (item.tags) {
    const chipWrap = document.createElement("div");
    chipWrap.className = "chip-wrap";
    item.tags.forEach((tag) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = tag;
      chipWrap.appendChild(chip);
    });
    body.appendChild(chipWrap);
  }

  if (item.links?.length) {
    const linkWrap = document.createElement("div");
    linkWrap.className = "card-links";
    item.links.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = link.label;
      linkWrap.appendChild(a);
    });
    body.appendChild(linkWrap);
  }

  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    detailModal.openModal(item);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    detailModal.openModal(item);
  });

  card.appendChild(body);
  return card;
}

function addCards(target, items) {
  if (!target) return;
  target.innerHTML = "";
  items.forEach((item) => target.appendChild(makeCard(item)));
}

addCards(researchGrid, content.research);
addCards(projectGrid, content.projects);
addCards(leadershipGrid, content.leadership);
addCards(conferenceGrid, content.conferences);
addCards(presentationGrid, content.presentations);
addCards(
  workGrid,
  content.experience.filter((item) => item.type === "work")
);
addCards(
  outreachGrid,
  content.experience.filter((item) => item.type === "outreach")
);

content.stats.forEach((s) => {
  if (!statsWrap) return;
  const el = document.createElement("div");
  el.className = "stat";
  if (s.flash) el.classList.add("flash-stat");
  const isNumeric = s.type !== "text" && Number.isFinite(Number(String(s.value).replace("+", "")));

  if (s.logo) {
    const logo = document.createElement("img");
    logo.className = "stat-logo";
    logo.src = s.logo;
    logo.alt = `${s.value} logo`;
    logo.loading = "lazy";
    el.appendChild(logo);
  }

  const strong = document.createElement("strong");
  if (isNumeric) {
    strong.dataset.target = String(s.value).replace("+", "");
    strong.textContent = "0";
  } else {
    strong.textContent = s.value;
  }
  el.appendChild(strong);

  const label = document.createElement("span");
  label.textContent = s.label;
  el.appendChild(label);

  if (s.flash) {
    const badge = document.createElement("em");
    badge.className = "flash-badge";
    badge.textContent = "random";
    el.appendChild(badge);
  }
  statsWrap.appendChild(el);
});

content.beyondWork.hobbies.forEach((hobby) => {
  if (!hobbyList) return;
  const chip = document.createElement("span");
  chip.className = "hobby-pill";
  if (typeof hobby === "string") {
    chip.textContent = hobby;
  } else {
    chip.textContent = `${hobby.icon ? `${hobby.icon} ` : ""}${hobby.label}`;
  }
  hobbyList.appendChild(chip);
});

if (travelMap) {
  const { mapLabel, visitedStates, stateNotes } = content.beyondWork.travel;
  const visitedSet = new Set(visitedStates);
  const maxCols = Math.max(...US_TILE_MAP.map((row) => row.length));
  let resizeTravelGlobe = null;

  travelMap.setAttribute("aria-label", mapLabel);
  travelMap.innerHTML = "";

  const mapGrid = document.createElement("div");
  mapGrid.className = "travel-map-grid";
  mapGrid.style.setProperty("--map-cols", String(maxCols));

  const caption = document.createElement("p");
  caption.className = "travel-map-caption";
  caption.textContent = `Visited ${visitedStates.length} states. Hover or click a state tile.`;

  const setCaption = (code = "") => {
    if (!code) {
      caption.textContent = `Visited ${visitedStates.length} states. Hover or click a state tile.`;
      return;
    }
    const name = US_STATE_NAMES[code] || code;
    if (visitedSet.has(code)) {
      caption.textContent = `${name} (${code}) - ${stateNotes[code] || "Visited"}`;
    } else {
      caption.textContent = `${name} (${code}) - Not marked as visited yet`;
    }
  };

  US_TILE_MAP.forEach((row) => {
    for (let i = 0; i < maxCols; i += 1) {
      const code = row[i] || "";
      if (!code) {
        const gap = document.createElement("span");
        gap.className = "travel-map-gap";
        gap.setAttribute("aria-hidden", "true");
        mapGrid.appendChild(gap);
        continue;
      }

      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "state-tile";
      tile.textContent = code;
      if (visitedSet.has(code)) tile.classList.add("visited");

      const stateName = US_STATE_NAMES[code] || code;
      tile.setAttribute(
        "aria-label",
        visitedSet.has(code)
          ? `${stateName}, visited. ${stateNotes[code] || "Visited"}`
          : `${stateName}, not marked visited`
      );

      tile.addEventListener("mouseenter", () => setCaption(code));
      tile.addEventListener("focus", () => setCaption(code));
      tile.addEventListener("mouseleave", () => setCaption());
      tile.addEventListener("blur", () => setCaption());
      tile.addEventListener("click", () => {
        mapGrid.querySelectorAll(".state-tile.active").forEach((el) => el.classList.remove("active"));
        tile.classList.add("active");
        setCaption(code);
      });

      mapGrid.appendChild(tile);
    }
  });

  travelMap.appendChild(mapGrid);
  travelMap.appendChild(caption);

  let initGioGlobe = null;
  const setTravelView = (view) => {
    const showMap = view === "map";
    travelMap.classList.toggle("is-hidden", !showMap);
    if (travelGlobe) travelGlobe.classList.toggle("is-hidden", showMap ? true : false);
    if (!showMap && resizeTravelGlobe) resizeTravelGlobe();
    if (!showMap && initGioGlobe) initGioGlobe();
    if (travelViewMapBtn) {
      travelViewMapBtn.classList.toggle("active", showMap);
      travelViewMapBtn.setAttribute("aria-selected", showMap ? "true" : "false");
    }
    if (travelViewGlobeBtn) {
      travelViewGlobeBtn.classList.toggle("active", !showMap);
      travelViewGlobeBtn.setAttribute("aria-selected", !showMap ? "true" : "false");
    }
  };

  if (travelGlobe) {
    let gioInitialized = false;
    const { visitedCountries = [] } = content.beyondWork.travel;

    resizeTravelGlobe = () => {
      if (!travelGlobe.classList.contains("is-hidden")) travelGlobe.style.visibility = "visible";
    };

    initGioGlobe = () => {
      if (gioInitialized) return;
      if (!window.GIO) {
        travelGlobe.innerHTML = "<p class='travel-map-caption'>Globe library failed to load. Using map view.</p>";
        return;
      }

      const routes = visitedCountries
        .filter((country) => country !== "US")
        .map((country, i) => ({
          e: "US",
          i: country,
          v: 1200000 - (i * 65000)
        }));

      try {
        const controller = new window.GIO.Controller(travelGlobe);
        if (typeof controller.setInitCountry === "function") controller.setInitCountry("US");
        if (typeof controller.setAutoRotation === "function") controller.setAutoRotation(true);
        if (typeof controller.setScale === "function") controller.setScale(0.96);
        if (typeof controller.setProjection === "function") controller.setProjection("globe");

        // Dark navy globe aligned with site theme, with strong visited-country contrast
        if (typeof controller.setOceanColor === "function") controller.setOceanColor("#060c10");
        if (typeof controller.setColor === "function") controller.setColor("#1e2e1e");
        if (typeof controller.setSurfaceColor === "function") controller.setSurfaceColor("#182818");
        if (typeof controller.setSelectedColor === "function") controller.setSelectedColor("#ffaa5e");
        if (typeof controller.setHaloColor === "function") controller.setHaloColor("#d08159");
        if (typeof controller.setTextColor === "function") controller.setTextColor("#ffd4a3");
        if (typeof controller.setLightColor === "function") controller.setLightColor("#ffcb8a");
        if (typeof controller.setLightIntensity === "function") controller.setLightIntensity(0.6);
        if (typeof controller.setShowingGraticule === "function") controller.setShowingGraticule(false);

        // Hide route lines while preserving visited-country highlighting logic
        if (typeof controller.setExportColor === "function") controller.setExportColor("rgba(0,0,0,0)");
        if (typeof controller.setImportColor === "function") controller.setImportColor("rgba(0,0,0,0)");

        // Keep non-visited countries visible, but make visited countries stand out
        if (typeof controller.lightenMentioned === "function") controller.lightenMentioned(true);
        if (typeof controller.adjustOceanBrightness === "function") controller.adjustOceanBrightness(0.36);
        if (typeof controller.adjustMentionedBrightness === "function") controller.adjustMentionedBrightness(1.12);
        if (typeof controller.adjustRelatedBrightness === "function") controller.adjustRelatedBrightness(0.88);
        if (typeof controller.disableUnmentioned === "function") controller.disableUnmentioned(false);

        if (typeof controller.addData === "function") controller.addData(routes);
        if (typeof controller.init === "function") controller.init();
        gioInitialized = true;
      } catch (error) {
        travelGlobe.innerHTML = "<p class='travel-map-caption'>Gio.js setup failed. Using map view.</p>";
      }
    };
  }

  if (travelViewMapBtn) {
    travelViewMapBtn.addEventListener("click", () => setTravelView("map"));
  }
  if (travelViewGlobeBtn) {
    travelViewGlobeBtn.addEventListener("click", () => setTravelView("globe"));
  }
  setTravelView("globe");
}

content.skills.forEach((skill, i) => {
  if (!skillWrap) return;
  const pill = document.createElement("span");
  pill.className = "skill-pill";
  pill.style.animationDelay = `${(i % 7) * 0.2}s`;

  const logoSrc = skillLogos[skill];
  if (logoSrc) {
    const logo = document.createElement("img");
    logo.className = "skill-logo";
    logo.src = logoSrc;
    logo.alt = `${skill} logo`;
    logo.loading = "lazy";
    logo.addEventListener("error", () => {
      logo.replaceWith(makeSkillFallback(skill));
    });
    pill.appendChild(logo);
  } else {
    pill.appendChild(makeSkillFallback(skill));
  }

  const label = document.createElement("span");
  label.textContent = skill;
  pill.appendChild(label);
  skillWrap.appendChild(pill);
});

content.highlights.forEach((h) => {
  if (!highlightsWrap) return;
  const card = document.createElement("article");
  card.className = "card";
  const body = document.createElement("div");
  body.className = "card-body";
  const title = document.createElement("h3");
  title.textContent = h;
  body.appendChild(title);
  card.appendChild(body);
  highlightsWrap.appendChild(card);
});

content.contacts.forEach((c) => {
  if (!contactWrap) return;
  const a = document.createElement("a");
  if (c.icon) {
    a.innerHTML = `${renderIcon(c.icon)}<span>${c.label}</span>`;
  } else {
    a.textContent = c.label;
  }
  if (c.href === "#") {
    a.href = "#";
    a.addEventListener("click", (event) => event.preventDefault());
    a.title = c.text;
  } else {
    a.href = c.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  contactWrap.appendChild(a);
});

function runTypewriter(words) {
  let w = 0;
  let c = 0;
  let deleting = false;

  const tick = () => {
    const word = words[w];
    if (!deleting) {
      c += 1;
      typewriter.textContent = word.slice(0, c);
      if (c === word.length) {
        deleting = true;
        setTimeout(tick, 1200);
        return;
      }
    } else {
      c -= 1;
      typewriter.textContent = word.slice(0, c);
      if (c === 0) {
        deleting = false;
        w = (w + 1) % words.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 70);
  };
  tick();
}

if (typewriter) runTypewriter(content.typeWords);

function animateCounters() {
  const counters = document.querySelectorAll(".stat strong[data-target]");
  counters.forEach((counter) => {
    const target = Number(counter.dataset.target);
    const isDecimal = String(target).includes(".");
    let value = 0;
    const step = target / 40;

    const update = () => {
      value += step;
      if (value >= target) {
        const original = content.stats.find((s) => String(target).startsWith(s.value.replace("+", "")));
        counter.textContent = original ? original.value : String(target);
        return;
      }
      counter.textContent = isDecimal ? value.toFixed(2) : Math.floor(value);
      requestAnimationFrame(update);
    };
    update();
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          if (entry.target.id === "about") {
            animateCounters();
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("show"));
  animateCounters();
}

const navLinks = Array.from(document.querySelectorAll(".nav a"));
const currentPath = window.location.pathname;
const sections = navLinks
  .map((link) => {
    const href = link.getAttribute("href") || "";
    if (href.startsWith("#")) return document.querySelector(href);
    const [path, hash] = href.split("#");
    const onPath = path
      ? (currentPath.endsWith(path) || (path === "index.html" && (currentPath.endsWith("/") || currentPath.endsWith("/index.html"))))
      : true;
    if (hash && onPath) return document.getElementById(hash);
    return null;
  })
  .filter(Boolean);

window.addEventListener("scroll", () => {
  const y = window.scrollY + 160;
  let activeId = "";
  sections.forEach((section) => {
    if (section.offsetTop <= y) activeId = section.id;
  });
  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href.startsWith("#")) {
      link.classList.toggle("active", href === `#${activeId}`);
      return;
    }
    const [path, hash] = href.split("#");
    const onPath = path
      ? (currentPath.endsWith(path) || (path === "index.html" && (currentPath.endsWith("/") || currentPath.endsWith("/index.html"))))
      : true;
    if (hash && onPath) {
      link.classList.toggle("active", hash === activeId);
      return;
    }
    link.classList.toggle("active", Boolean(onPath && !hash));
  });
});

const blackholeCanvas = document.getElementById("blackhole-art");
const bhCtx = blackholeCanvas ? blackholeCanvas.getContext("2d") : null;
let bhRendering = false;
let mergerTick = 0;
const wavePulses = [];

function resizeBlackholeCanvas() {
  if (!blackholeCanvas || !bhCtx) return;
  const dpr = window.devicePixelRatio || 1;
  const rect = blackholeCanvas.getBoundingClientRect();
  blackholeCanvas.width = Math.max(1, Math.floor(rect.width * dpr));
  blackholeCanvas.height = Math.max(1, Math.floor(rect.height * dpr));
  bhCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function drawBinaryMergerFrame() {
  if (!bhRendering || !blackholeCanvas || !bhCtx) return;

  const w = blackholeCanvas.clientWidth;
  const h = blackholeCanvas.clientHeight;
  const cx = w * 0.5;
  const cy = h * 0.54;
  const base = Math.min(w, h);
  const cycle = 880;
  const phase = (mergerTick % cycle) / cycle;
  const mergeStart = 0.7;
  const mergeEnd = 0.86;
  const isMerged = phase > mergeEnd;
  const maxSep = base * 0.19;
  let sep = maxSep;

  if (phase < mergeStart) {
    sep = maxSep * (1 - phase / mergeStart * 0.68);
  } else if (phase < mergeEnd) {
    const p = (phase - mergeStart) / (mergeEnd - mergeStart);
    sep = maxSep * 0.32 * (1 - p);
  } else {
    sep = 0;
  }

  const angularSpeed = 0.045 + phase * 0.11;
  const theta = mergerTick * angularSpeed;
  const x1 = cx + Math.cos(theta) * sep;
  const y1 = cy + Math.sin(theta) * sep * 0.45;
  const x2 = cx - Math.cos(theta) * sep;
  const y2 = cy - Math.sin(theta) * sep * 0.45;
  const r1 = base * 0.07;
  const r2 = base * 0.055;

  bhCtx.clearRect(0, 0, w, h);

  wavePulses.forEach((pulse) => {
    pulse.radius += pulse.speed;
    pulse.alpha *= 0.988;
    pulse.width *= 1.002;
  });

  while (wavePulses.length > 0 && (wavePulses[0].radius > base * 0.88 || wavePulses[0].alpha < 0.01)) {
    wavePulses.shift();
  }

  wavePulses.forEach((pulse) => {
    bhCtx.strokeStyle = `rgba(255, 160, 80, ${pulse.alpha})`;
    bhCtx.lineWidth = pulse.width;
    bhCtx.beginPath();
    bhCtx.ellipse(cx, cy, pulse.radius, pulse.radius * 0.58, 0, 0, Math.PI * 2);
    bhCtx.stroke();
  });

  if (phase < mergeEnd && mergerTick % 22 === 0) {
    wavePulses.push({
      radius: base * 0.06,
      alpha: 0.22 + phase * 0.25,
      speed: 1.8 + phase * 2.3,
      width: 1.2 + phase * 1.8
    });
  }

  if (phase > mergeStart && phase < mergeEnd && mergerTick % 9 === 0) {
    wavePulses.push({
      radius: base * 0.07,
      alpha: 0.48,
      speed: 3.2,
      width: 2.2
    });
  }

  if (isMerged && mergerTick % 8 === 0) {
    wavePulses.push({
      radius: base * 0.085,
      alpha: 0.42,
      speed: 3.5,
      width: 2.6
    });
  }

  function drawHole(x, y, r) {
    const subtleGlow = bhCtx.createRadialGradient(x, y, r * 0.7, x, y, r * 1.9);
    subtleGlow.addColorStop(0, "rgba(255, 106, 0, 0.2)");
    subtleGlow.addColorStop(0.65, "rgba(255, 145, 0, 0.1)");
    subtleGlow.addColorStop(1, "rgba(0,0,0,0)");
    bhCtx.fillStyle = subtleGlow;
    bhCtx.beginPath();
    bhCtx.arc(x, y, r * 1.9, 0, Math.PI * 2);
    bhCtx.fill();

    bhCtx.fillStyle = "#020205";
    bhCtx.beginPath();
    bhCtx.arc(x, y, r, 0, Math.PI * 2);
    bhCtx.fill();

    bhCtx.strokeStyle = "rgba(255,106,0,0.38)";
    bhCtx.lineWidth = 1.1;
    bhCtx.beginPath();
    bhCtx.arc(x, y, r * 1.06, 0, Math.PI * 2);
    bhCtx.stroke();
  }

  if (!isMerged) {
    drawHole(x1, y1, r1);
    drawHole(x2, y2, r2);
  } else {
    const mergedR = base * 0.092;
    drawHole(cx, cy, mergedR);

    if (phase > 0.985) {
      wavePulses.length = 0;
    }
  }

  mergerTick += 1;
  requestAnimationFrame(drawBinaryMergerFrame);
}

function startBlackholeRender() {
  if (bhRendering) return;
  bhRendering = true;
  drawBinaryMergerFrame();
}

const canvas = document.getElementById("starfield");
const ctx = canvas ? canvas.getContext("2d") : null;
let stars = [];

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array.from({ length: Math.floor(canvas.width * 0.09) }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * 1 + 0.2,
    r: Math.random() * 1.5 + 0.25
  }));
}

function drawStars() {
  if (!canvas || !ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star) => {
    star.y += star.z * 0.25;
    if (star.y > canvas.height) {
      star.y = -2;
      star.x = Math.random() * canvas.width;
    }
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(208, 226, 255, 0.8)";
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}

if (canvas && ctx) {
  resizeCanvas();
  drawStars();
}
if (blackholeCanvas && bhCtx) {
  resizeBlackholeCanvas();
  startBlackholeRender();
}

window.addEventListener("resize", () => {
  resizeCanvas();
  resizeBlackholeCanvas();
});
