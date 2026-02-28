const content = {
  about:
    "I am a Physics major (GPA 3.88) and Astronomy minor at Truman State University. My work spans EMRI and SMBH merger science for LISA, simulation-driven astrophysics, and engineering projects where physics meets code and hardware.",
  stats: [
    { value: "3.88", label: "GPA" },
    { value: "4+", label: "Research Roles" },
    { value: "3", label: "AAS/APS Presentations" },
    { value: "2026", label: "Expected Graduation" }
  ],
  research: [
    {
      title: "Analyzing EMRIs for LISA",
      place: "NASA JPL, Pasadena, CA",
      date: "Jun 2025 - Present",
      text: "Generated EMRI waveforms with FEW and performed MCMC parameter estimation to test sensitivity to deviations from General Relativity."
    },
    {
      title: "SMBH Merger Populations with LISA",
      place: "NASA GSFC, Greenbelt, MD",
      date: "Jun 2024 - Jun 2025",
      text: "Built SMBH population waveform pipelines with LISA analysis tools and BBHX, then evaluated detectability and pre-merger observation windows."
    },
    {
      title: "SMBH Predictions in Cosmological Simulations",
      place: "Truman State University",
      date: "May 2023 - May 2024",
      text: "Analyzed TNG-300 SMBH populations across redshift and mass properties to estimate LISA merger rates and signal-to-noise trends."
    },
    {
      title: "Time Reversibility of Physical Laws",
      place: "Truman State University",
      date: "Oct 2024 - Present",
      text: "Simulated particle evolution under custom laws and produced Manim visualizations to analyze reversibility behavior."
    }
  ],
  projects: [
    {
      title: "Black Hole Ray-Tracing Simulator",
      text: "Built a C++/OpenGL backend to integrate null geodesics and render real-time black hole visuals, with Python bindings via pybind11.",
      tags: ["C++", "OpenGL", "Python", "pybind11"]
    },
    {
      title: "Automated Greenhouse System",
      text: "Designed and 3D-printed a greenhouse model with sensors and Arduino control logic for automated watering and lighting.",
      tags: ["Arduino", "C/C++", "OnShape", "Hardware"]
    },
    {
      title: "Hexapod Walking Robot",
      text: "Designed a six-legged robot and implemented synchronized gait control with Raspberry Pi, servos, and custom movement logic.",
      tags: ["Raspberry Pi", "Robotics", "Python/C++", "CAD"]
    }
  ],
  experience: [
    {
      type: "work",
      title: "Academic Coach",
      place: "Truman Upward Bound Program",
      date: "Jan 2025 - Present",
      text: "Mentored high school students with structured academic support and personalized learning guidance."
    },
    {
      type: "work",
      title: "Embedded Physics Tutor",
      place: "Center for Academic Excellence",
      date: "Jan 2024 - Present",
      text: "Supported introductory physics classes through in-class reinforcement, tutoring sessions, and CRLA-informed methods."
    },
    {
      type: "outreach",
      title: "Astronomy / Dark Sky Outreach",
      place: "Truman State",
      date: "Spring 2024 - Present",
      text: "Led stargazing programs and gathered city light data to support local dark-sky improvements."
    },
    {
      type: "outreach",
      title: "Science Olympiad Volunteer",
      place: "Truman State",
      date: "2023 - Present",
      text: "Contributed to astronomy event exam support and competition proctoring."
    }
  ],
  leadership: [
    {
      title: "Founder & President",
      place: "TruBots",
      date: "Jan 2025 - Present",
      text: "Started a robotics club to promote hands-on engineering and competitive builds."
    },
    {
      title: "Vice President",
      place: "Society of Physics Students",
      date: "Jan 2023 - Present",
      text: "Organized events and activities that increased student engagement in physics."
    },
    {
      title: "President",
      place: "Truman Cricket Club",
      date: "Jan 2023 - Present",
      text: "Coordinated team operations, matches, and club events."
    },
    {
      title: "Treasurer",
      place: "South Asian Student Union",
      date: "Jan 2024 - Present",
      text: "Managed budgeting and event finance for cultural programming."
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
    { label: "Email", href: "mailto:thirthakarmakar@gmail.com" },
    { label: "GitHub", href: "https://github.com/thirtha17" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thirtha17" },
    { label: "Location", href: "#", text: "Kirksville, MO" }
  ],
  typeWords: [
    "gravitational-wave astronomy",
    "black hole simulations",
    "cosmological modeling",
    "scientific computing"
  ]
};

const aboutText = document.getElementById("about-text");
const statsWrap = document.getElementById("stats");
const researchGrid = document.getElementById("research-grid");
const projectGrid = document.getElementById("project-grid");
const experienceGrid = document.getElementById("experience-grid");
const leadershipGrid = document.getElementById("leadership-grid");
const skillWrap = document.getElementById("skill-orbits");
const highlightsWrap = document.getElementById("highlights");
const contactWrap = document.getElementById("contact-links");
const filterWrap = document.getElementById("experience-filters");
const typewriter = document.getElementById("typewriter");

aboutText.textContent = content.about;

function makeCard(item) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = item.title;
  card.appendChild(title);

  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = `${item.place} | ${item.date}`;
  card.appendChild(meta);

  const text = document.createElement("p");
  text.textContent = item.text;
  card.appendChild(text);

  if (item.tags) {
    const chipWrap = document.createElement("div");
    chipWrap.className = "chip-wrap";
    item.tags.forEach((tag) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = tag;
      chipWrap.appendChild(chip);
    });
    card.appendChild(chipWrap);
  }

  return card;
}

function addCards(target, items) {
  target.innerHTML = "";
  items.forEach((item) => target.appendChild(makeCard(item)));
}

addCards(researchGrid, content.research);
addCards(projectGrid, content.projects);
addCards(leadershipGrid, content.leadership);

content.stats.forEach((s) => {
  const el = document.createElement("div");
  el.className = "stat";
  el.innerHTML = `<strong data-target="${s.value.replace("+", "")}">0</strong><span>${s.label}</span>`;
  statsWrap.appendChild(el);
});

content.skills.forEach((skill, i) => {
  const pill = document.createElement("span");
  pill.className = "skill-pill";
  pill.style.animationDelay = `${(i % 7) * 0.2}s`;
  pill.textContent = skill;
  skillWrap.appendChild(pill);
});

content.highlights.forEach((h) => {
  const li = document.createElement("li");
  li.textContent = h;
  highlightsWrap.appendChild(li);
});

content.contacts.forEach((c) => {
  const a = document.createElement("a");
  a.textContent = c.label;
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

let currentFilter = "all";
const filters = ["all", "work", "outreach"];

function renderExperience() {
  const filtered =
    currentFilter === "all"
      ? content.experience
      : content.experience.filter((item) => item.type === currentFilter);
  addCards(experienceGrid, filtered);
}

filters.forEach((f) => {
  const button = document.createElement("button");
  button.className = `filter-btn ${f === "all" ? "active" : ""}`;
  button.textContent = f[0].toUpperCase() + f.slice(1);
  button.addEventListener("click", () => {
    currentFilter = f;
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    renderExperience();
  });
  filterWrap.appendChild(button);
});

renderExperience();

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

runTypewriter(content.typeWords);

function animateCounters() {
  const counters = document.querySelectorAll(".stat strong");
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

const navLinks = Array.from(document.querySelectorAll(".nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

window.addEventListener("scroll", () => {
  const y = window.scrollY + 160;
  let activeId = "";
  sections.forEach((section) => {
    if (section.offsetTop <= y) activeId = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });
});

const blackholeCanvas = document.getElementById("blackhole-art");
const bhCtx = blackholeCanvas.getContext("2d");
let bhRendering = false;
let mergerTick = 0;
const wavePulses = [];

function resizeBlackholeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const rect = blackholeCanvas.getBoundingClientRect();
  blackholeCanvas.width = Math.max(1, Math.floor(rect.width * dpr));
  blackholeCanvas.height = Math.max(1, Math.floor(rect.height * dpr));
  bhCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function drawBinaryMergerFrame() {
  if (!bhRendering) return;

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

  const halo = bhCtx.createRadialGradient(cx, cy, base * 0.03, cx, cy, base * 0.48);
  halo.addColorStop(0, "rgba(255,150,84,0.38)");
  halo.addColorStop(0.35, "rgba(255,120,72,0.14)");
  halo.addColorStop(1, "rgba(0,0,0,0)");
  bhCtx.fillStyle = halo;
  bhCtx.beginPath();
  bhCtx.arc(cx, cy, base * 0.48, 0, Math.PI * 2);
  bhCtx.fill();

  wavePulses.forEach((pulse) => {
    pulse.radius += pulse.speed;
    pulse.alpha *= 0.988;
    pulse.width *= 1.002;
  });

  while (wavePulses.length > 0 && (wavePulses[0].radius > base * 0.88 || wavePulses[0].alpha < 0.01)) {
    wavePulses.shift();
  }

  wavePulses.forEach((pulse) => {
    bhCtx.strokeStyle = `rgba(143, 205, 255, ${pulse.alpha})`;
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

  function drawHole(x, y, r, glowAlpha) {
    const glow = bhCtx.createRadialGradient(x, y, r * 0.5, x, y, r * 2.4);
    glow.addColorStop(0, `rgba(255, 176, 102, ${glowAlpha})`);
    glow.addColorStop(0.55, "rgba(255, 116, 76, 0.14)");
    glow.addColorStop(1, "rgba(0,0,0,0)");
    bhCtx.fillStyle = glow;
    bhCtx.beginPath();
    bhCtx.arc(x, y, r * 2.4, 0, Math.PI * 2);
    bhCtx.fill();

    bhCtx.fillStyle = "#020205";
    bhCtx.beginPath();
    bhCtx.arc(x, y, r, 0, Math.PI * 2);
    bhCtx.fill();

    bhCtx.strokeStyle = "rgba(255,145,84,0.55)";
    bhCtx.lineWidth = 1.4;
    bhCtx.beginPath();
    bhCtx.arc(x, y, r * 1.06, 0, Math.PI * 2);
    bhCtx.stroke();
  }

  if (!isMerged) {
    drawHole(x1, y1, r1, 0.26);
    drawHole(x2, y2, r2, 0.22);
  } else {
    const mergedR = base * 0.092;
    drawHole(cx, cy, mergedR, 0.35);

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
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
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

resizeCanvas();
drawStars();
resizeBlackholeCanvas();
startBlackholeRender();

window.addEventListener("resize", () => {
  resizeCanvas();
  resizeBlackholeCanvas();
});
