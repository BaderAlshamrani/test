/* Main App component with all sections */
import React, { useEffect } from 'react';
import { FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import profilePic from './assets/profile-placeholder.jpg';
import kaustLogo from './assets/kaust-logo.png';
import sdaiaLogo from './assets/sdaia-logo.png';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('show'); });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const experience = [
  { org:'KAUST Academy', role:'Teaching Assistant', dates:'Sep 2024 – Present', logo:kaustLogo,
    bullets:['Mentored 500+ students via lectures & workshops.',
             'Guided Bioinformatics cohorts in data‑driven methods.'] },
  { org:'KAUST Academy', role:'Ambassador', dates:'Jul 2024 – Present', logo:kaustLogo,
    bullets:['Represented at national events; led alumni initiatives.'] },
  { org:'Synapse (SDAIA‑supervised)', role:'AI Project Coordinator', dates:'Feb 2025 – Present', logo:sdaiaLogo,
    bullets:['Directed multi‑stakeholder AI projects, managed resources.'] },
  { org:'Misk Launchpad (AgriHealth)', role:'Innovation Consultant', dates:'Sep – Nov 2024', logo:sdaiaLogo,
    bullets:['Designed AI/IoT precision‑agriculture solution.'] }
];

const projects = [
  { name:'BrAIn', tags:['Computer Vision','Healthcare'],
    summary:'AI‑driven diagnostic platform that supports healthcare decision‑making with high accuracy and adherence to industry standards.',
    img:'https://placehold.co/600x400/png', details:'BrAIn combines deep convolutional neural networks with explainable AI overlays to provide clinicians rapid insights…' },
  { name:'FCIT AI System', tags:['LLM','Education Tech'],
    summary:'Tool for managing and assessing student capstone projects at FCIT, leveraging LLM‑powered feedback.',
    img:'https://placehold.co/600x400/png', details:'The system streamlines rubric‑based evaluation, integrates sentiment analysis, and offers AI‑generated suggestions…' }
];

const skills = {
  programming:[{name:'Python',level:95},{name:'Java',level:80},{name:'Dart',level:70},{name:'C++',level:65}],
  frameworks:[{name:'TensorFlow',level:90},{name:'PyTorch',level:85},{name:'OpenCV',level:80},{name:'Scikit‑Learn',level:85}],
  languages:[{name:'Arabic (Native)'},{name:'English (Fluent)'}]
};

const Nav = () => (
  <header className="fixed w-full bg-brandWhite/90 backdrop-blur z-50 shadow-sm">
    <nav className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
      <a href="#home" className="text-lg font-semibold text-brandGreen">Bader Alshamrani</a>
      <div className="space-x-6 hidden md:block">
        {['About','Experience','Projects','Skills','Contact'].map(s=>(
          <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-brandBrown transition-colors">{s}</a>))}
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center bg-brandGray reveal">
    <h1 className="text-4xl sm:text-6xl font-semibold mb-4">AI Specialist & Educator</h1>
    <p className="max-w-xl mb-8">Teaching Assistant at KAUST Academy and AI Project Coordinator championing data‑driven innovation.</p>
    <div className="flex gap-6">
      <a href="/Bader-Alshamrani-CV.pdf" className="px-6 py-3 rounded-md text-white hover:bg-brandBrown transition" style={{backgroundColor:'#116E37'}}>Download CV</a>
      <a href="#projects" className="px-6 py-3 rounded-md border border-brandGreen text-brandGreen hover:bg-brandBrown hover:text-white transition">View Projects</a>
    </div>
    <span className="absolute bottom-10 animate-bounce text-brandGreen">▼</span>
  </section>
);

const About = () => (
  <section id="about" className="max-w-6xl mx-auto py-24 px-4 reveal">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <img src={profilePic} alt="Bader profile" className="w-72 h-72 object-cover rounded-full shadow-card mx-auto md:mx-0" loading="lazy" />
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-brandBrown">About Me</h2>
        <p className="mb-6">AI Specialist | Computer Science | KAUST Academy AI Alumni | Project Coordinator @ Synapse.</p>
        <h3 className="font-semibold mb-2">Education</h3>
        <ul className="list-disc list-inside mb-6"><li>BSc Computer Science, King Abdulaziz University — graduating May 2025</li></ul>
        <h3 className="font-semibold mb-2">Soft / Social Skills</h3><p className="mb-2">Communication · Leadership · Emotional Intelligence · Teamwork · Adaptability</p>
        <h3 className="font-semibold mb-2">Business Skills</h3><p>AI Strategy · Data‑Driven Decisions · MECE · SCQA · SWOT · Risk Analysis</p>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="bg-brandGray py-24 reveal">
    <div className="max-w-6xl mx-auto px-4"><h2 className="text-3xl font-semibold mb-12 text-brandBrown text-center">Experience</h2>
      <div className="space-y-8">{experience.map((e,i)=>(
        <div key={i} className="bg-white shadow-card rounded-card p-6 flex flex-col md:flex-row gap-6">
          <img src={e.logo} alt={e.org} className="w-16 h-16 object-contain" loading="lazy" />
          <div>
            <h3 className="font-semibold text-brandGreen">{e.role} <span className="text-gray-500 font-normal">@ {e.org}</span></h3>
            <p className="text-sm text-gray-500 mb-2">{e.dates}</p>
            <ul className="list-disc list-inside space-y-1">{e.bullets.map((b,bi)=><li key={bi}>{b}</li>)}</ul>
          </div>
        </div>))}</div>
    </div>
  </section>
);

const ProjectsSection = () => {
  const [open,setOpen]=React.useState(null);
  return(<section id="projects" className="max-w-6xl mx-auto py-24 px-4 reveal">
    <h2 className="text-3xl font-semibold mb-12 text-brandBrown text-center">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">{projects.map((p,i)=>(
      <div key={i} className="bg-white rounded-card shadow-card hover:shadow-lg transition transform hover:-translate-y-1">
        <img src={p.img} alt={p.name} className="rounded-t-card w-full h-48 object-cover" loading="lazy" />
        <div className="p-6">
          <h3 className="font-semibold text-brandGreen mb-2">{p.name}</h3>
          <div className="mb-2 space-x-2">{p.tags.map(t=><span key={t} className="text-xs bg-brandGray px-2 py-0.5 rounded">{t}</span>)}</div>
          <p className="text-sm mb-4 line-clamp-3">{p.summary}</p>
          <button onClick={()=>setOpen(i)} className="text-brandGreen hover:text-brandBrown font-medium">Read case study →</button>
        </div>
      </div>))}</div>
    {open!==null&&(<div className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center p-4 z-50" onClick={()=>setOpen(null)}>
      <article className="bg-white max-w-2xl rounded-card p-8 relative" onClick={e=>e.stopPropagation()}>                <button className="absolute top-3 right-3 text-xl" onClick={()=>setOpen(null)}>×</button>                <h3 className="text-2xl font-semibold mb-4 text-brandGreen">{projects[open].name}</h3>                <p>{projects[open].details}</p>              </article></div>)}
  </section>);}

const Skills = () => (
  <section id="skills" className="bg-brandGray py-24 reveal">
    <div className="max-w-6xl mx-auto px-4"><h2 className="text-3xl font-semibold mb-12 text-brandBrown text-center">Skills</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div><h3 className="font-semibold mb-4 text-brandGreen">Programming Languages</h3>
          {skills.programming.map(s=>(
            <div key={s.name} className="mb-4"><div className="flex justify-between text-sm mb-1"><span>{s.name}</span><span>{s.level}%</span></div>                    <div className="w-full h-2 bg-gray-200 rounded"><div className="h-full rounded" style={{width:`${s.level}%`,backgroundColor:'#116E37'}}></div></div></div>))}
        </div>
        <div><h3 className="font-semibold mb-4 text-brandGreen">Frameworks & Tools</h3>
          {skills.frameworks.map(s=>(
            <div key={s.name} className="mb-4"><div className="flex justify-between text-sm mb-1"><span>{s.name}</span><span>{s.level}%</span></div>                    <div className="w-full h-2 bg-gray-200 rounded"><div className="h-full rounded" style={{width:`${s.level}%`,backgroundColor:'#8B5A2B'}}></div></div></div>))}
          <h4 className="font-semibold mt-6 mb-2 text-brandGreen">Languages</h4>
          <div className="flex gap-4 flex-wrap">{skills.languages.map(l=> <span key={l.name} className="px-3 py-1 bg-brandGreen/10 text-brandGreen rounded-full text-xs">{l.name}</span>)}</div>
        </div>
      </div></div>
  </section>
);

const Contact = () => {
  const [sent,setSent]=React.useState(false);
  const onSubmit=e=>{e.preventDefault();setSent(true);setTimeout(()=>setSent(false),4000);e.target.reset();};
  return(<section id="contact" className="max-w-6xl mx-auto py-24 px-4 reveal">
    <h2 className="text-3xl font-semibold mb-12 text-brandBrown text-center">Get in Touch</h2>
    <div className="grid md:grid-cols-2 gap-12">
      <form onSubmit={onSubmit} className="space-y-4">
        <input required placeholder="Name" className="w-full border rounded p-3" />
        <input required type="email" placeholder="Email" className="w-full border rounded p-3" />
        <textarea required placeholder="Message" rows="5" className="w-full border rounded p-3" />
        <button className="px-6 py-3 rounded-md text-white hover:bg-brandBrown transition" style={{backgroundColor:'#116E37'}}>Send Message</button>
        {sent&&<p className="text-sm text-brandGreen">✓ Thanks! I will reply shortly.</p>}
      </form>
      <div className="space-y-4 text-sm">
        <p className="flex items-center gap-3"><FaEnvelope className="text-brandGreen" /> bader@example.com</p>
        <p className="flex items-center gap-3"><FaLinkedin className="text-brandGreen" /> linkedin.com/in/bader‑alshamrani</p>
        <p className="flex items-center gap-3"><FaPhoneAlt className="text-brandGreen" /> +966 5 XXXX XXXX</p>
      </div>
    </div>
  </section>);
};

const BlogPlaceholder = () => (<section id="blog" className="hidden-section reveal"><div className="max-w-6xl mx-auto py-24 px-4 text-center"><h2 className="text-3xl font-semibold mb-4 text-brandBrown">Insights & Articles (Coming Soon)</h2><p className="text-gray-500">Stay tuned for AI tutorials and thought pieces.</p></div></section>);

const Footer = () => (<footer className="bg-brandGreen text-brandWhite py-6 text-center text-sm">© {new Date().getFullYear()} Bader Alshamrani. All rights reserved.</footer>);

const App = () => { useReveal(); return(<><Nav/><Hero/><About/><Experience/><ProjectsSection/><Skills/><Contact/><BlogPlaceholder/><Footer/></>); };
export default App;
