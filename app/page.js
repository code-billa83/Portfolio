'use client';
import { useState, useEffect } from 'react';
import { Code2, Send, Moon, Sun, Phone } from 'lucide-react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // 1. Typewriter Logic
  const words = ["Software Developer", "Full Stack Developer", "Frontend Developer", "Backend Developer", "Web Developer", "Problem Solver"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 2. Hacker Terminal Box Logs Logic
  const [terminalLines, setTerminalLines] = useState([]);
  const logsList = [
    "Loading Next.js Frameworks...",
    "Initializing Web Development Modules...",
    "Backend: Node.js | Express | MongoDB",
    "Status: READY | Welcome, Shiva Mishra"
  ];

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    setActiveSection('home');
  }, []);

  // Dark Mode switching handler
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Typewriter running effect
  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIndex];
    if (!isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
      }, 100);
      if (currentText === fullWord) {
        timer = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
      }, 50);
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  // Terminal box log printing loader
  useEffect(() => {
    setTerminalLines(logsList);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false); 
    }
  };

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', width: '100%', overflowX: 'hidden' }}>

      {/* 1. TOP NAVBAR SECTION */}
      <header className="navbar">
        <div className="logo" onClick={() => scrollToSection('home')}>
          SHIVA<span>.</span>
        </div>

        {/* Added dynamic class for active mobile drawer */}
        <nav className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <button
            onClick={() => scrollToSection('home')}
            className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className={`nav-btn ${activeSection === 'skills' ? 'active' : ''}`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('Projects')}
            className={`nav-btn ${activeSection === 'Projects' ? 'active' : ''}`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`nav-btn ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
        </nav>

        {/* 3-Line Hamburger Button for Mobile */}
        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* 2. HERO AREA SPLIT GRID */}
      <section id="home" className="hero" style={{ minHeight: '100vh', width: '100%', position: 'relative' }}>
        <div className="hero-left">
          <h1> Hi, I'm <br /> <span>Shiva Mishra</span> </h1>

          <div className="terminal-text">
            &gt; <span className="typed-text">{currentText}</span><span className="cursor-blink">|</span>
          </div>

          <p className="description">
            Passionate about building real world applications with clean UI and modern tech stacks.
          </p>

          <div className="btn-group">
            <button className="btn-primary" onClick={() => scrollToSection('Projects')}>
              <Code2 size={18} /> View Projects
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
              <Send size={18} /> Contact Me
            </button>
          </div>

          {/* HACKER PORTFOLIO TERMINAL BOX */}
          <div className="terminal-box-wrapper">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="t-dot red"></span>
                <span className="t-dot yellow"></span>
                <span className="t-dot green"></span>
              </div>
              <div className="terminal-title">dev@Shiva:~# portfolio_terminal</div>
            </div>
            <div className="terminal-body">
              {terminalLines.map((line, idx) => (
                <div key={idx} className="terminal-line">
                  <span className="arrow-prefix">&gt;</span> {line}
                </div>
              ))}
              <div className="terminal-line">
                <span className="arrow-prefix">&gt;</span> <span className="term-cursor">_</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right side Profile Photo with Glowing ring */}
        <div className="hero-right">
          <div className="image-container">
            <div className="glow-ring">
              <div className="glow-ring-inner"></div>
            </div>
            <div className="profile-img-wrapper">
              <img
                src="shiva.jpeg"
                alt="Shiva Mishra"
                onError={(e) => { e.target.src = "https://unsplash.com" }}
              />
            </div>
            <div className="badge">
              <div className="dot"></div> Available for Hire
            </div>
          </div>
        </div>
      </section>

      {/* 4. RIGHT FLOATING NAVIGATION SIDEBAR */}
      <div className="sidebar-controls">
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="dot-navigation">
          <div className={`nav-dot ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}></div>
          <div className={`nav-dot ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}></div>
          <div className={`nav-dot ${activeSection === 'Projects' ? 'active' : ''}`} onClick={() => scrollToSection('Projects')}></div>
          <div className={`nav-dot ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}></div>
          <div className={`nav-dot ${activeSection === 'Contact' ? 'active' : ''}`} onClick={() => scrollToSection('Contact')}></div>
        </div>

        {/* WhatsApp Floating Link With Fixed SVG Path */}
        <a
          href="https://wa.me"
          target="_blank"
          rel="noreferrer"
          className="social-icon whatsapp"
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg xmlns="http://w3.org" viewBox="0 0 448 512" width="16" height="16" fill="currentColor">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 75.3 29.6 109L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54.1 81.2 54.1 130.4 0 101.7-82.8 184.5-184.6 184.5zm100.5-137c-5.5-2.8-32.6-16.1-37.7-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.6-13.4 37.2-26.3 4.6-13 4.6-24.1 3.2-26.3-1.4-2.2-5-4.2-10.5-7z" />
          </svg>
        </a>

        {/* Contact/Phone Floating Link With Your Number */}
        <a href="tel:+918318601244" className="social-icon phone" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <Phone size={16} />
        </a>
      </div>

      {/* 5. ABOUT ME & SKILLS SECTIONS WITH SMOOTH SCROLL IDS */}
      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="Projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
