import { useState } from "react";
import "./App.css"

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Tienda de Joyas",
      description: "Plataforma e-commerce responsive con catálogo de productos",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "https://tienda-de-joyas.pages.dev/",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      title: "Calculadora Huella de Carbono",
      description: "Herramienta web para calcular impacto ambiental",
      tech: ["Flask", "HTML5", "CSS3", "Bootstrap"],
      link: "https://calculadora-huella-de-carbono-seven.vercel.app/",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Tienda de Teléfonos",
      description: "Plataforma e-commerce responsive con diseño moderno",
      tech: ["HTML5", "CSS3", "Bootstrap"],
      link: "https://perejilinformatico.github.io/web-tienda-telefonos/",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "API Demon Slayer",
      description: "Aplicación web con integración a API",
      tech: ["React", "CSS"],
      link: "https://api-demon-slayer-pi.vercel.app/",
      color: "from-purple-500 to-indigo-500"
    },
        {
      id: 5,
      title: "DreamFlow Diseño",
      description: "Diseño web simple y moderno.",
      tech: ["HTML5", "CSS3", "Bootstrap"],
      link: "https://dise-o-web-dream-flow.pages.dev/",
      color: "from-purple-600 to-indigo-500"
    },
  ];

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "Daisy UI", "TypeScript"],
    backend: ["Python", "Flask", "FastAPI", "SQLite"],
    tools: ["Git", "GitHub", "Vercel"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Santiago Cussit
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#about" className="hover:text-blue-400 transition">Sobre mí</a>
              <a href="#projects" className="hover:text-blue-400 transition">Proyectos</a>
              <a href="#skills" className="hover:text-blue-400 transition">Habilidades</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contacto</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-4">
              <a href="#about" className="hover:text-blue-400 transition">Sobre mí</a>
              <a href="#projects" className="hover:text-blue-400 transition">Proyectos</a>
              <a href="#skills" className="hover:text-blue-400 transition">Habilidades</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contacto</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex justify-center items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-blue-400 text-lg font-semibold mb-2">Hola, soy</p>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Santiago Cussit
              </h1>
            </div>
            
            <p className="text-2xl font-bold text-slate-300">
              Full Stack Developer | UI/UX Designer
            </p>
            
            <p className="text-slate-400 text-lg leading-relaxed">
              Desarrollo soluciones web modernas con React, Python y más. 
              Especializado en crear experiencias de usuario excepcionales.
              Apasionado por el código limpio y el aprendizaje continuo.
            </p>

            <div className="flex gap-4 pt-4">
              <a 
                id="contact-button"
                href="#contact"
                className="btn btn-primary btn-md bg-gradient-to-r from-blue-500 to-cyan-500 border-none hover:shadow-lg hover:shadow-blue-500/50"
              >
                Contactame
              </a>
              <a 
                href="https://github.com/perejilinformatico"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-button-github"
                className="btn btn-outline btn-md hover:border-blue-400 bg-black text-white hover:text-blue-400"
              >
                 GitHub
              </a>
            </div>
          </div>
          <div className="div">
              <img src="image.png" alt="imagen" id="image-animation" className="m-0"/>
          </div>

          {/* Hero Image/Gradient */}
          <div className="hidden md:flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl flex items-stretch font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Sobre mí
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div   id="card" className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Aprendizaje</h3>
            <p className="text-slate-300">
              Formado en Kodland. Autodidacta comprometido con mejorar cada día mis habilidades en desarrollo web.
            </p>
          </div>

          <div  id="card" className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Experiencia</h3>
            <p className="text-slate-300">
              4 proyectos reales en vivo. Experiencia en frontend, backend y diseño UI/UX.
            </p>
          </div>

          <div id="card" className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Pasión</h3>
            <p className="text-slate-300">
              Me encanta crear soluciones web que resuelvan problemas reales y que sean bellas.
            </p>
          </div>

          
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Proyectos Destacados
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl border border-slate-700 hover:border-blue-500/50 transition duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition duration-300`}></div>
              
              {/* Content */}
              <div className="relative p-8 flex flex-col h-full bg-slate-800/40 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-sm text-slate-300 hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/50 rounded-lg hover:from-blue-500/40 hover:to-cyan-500/40 transition text-blue-300 font-medium"
                >
                  Ver Proyecto ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Habilidades Técnicas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg text-blue-300 text-sm font-medium hover:bg-blue-500/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-300 text-sm font-medium hover:bg-cyan-500/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Herramientas</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg text-purple-300 text-sm font-medium hover:bg-purple-500/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-12 backdrop-blur-sm text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            ¿Querés trabajar juntos?
          </h2>
          
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Disponible para proyectos freelance, colaboraciones y oportunidades nuevas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
                            id="contact-button"
              href="mailto:perejilinformatico@gmail.com"
              className="btn btn-primary btn-lg bg-gradient-to-r from-blue-500 to-cyan-500 border-none hover:shadow-lg hover:shadow-blue-500/50"
            >
              Envíame un email
            </a>
            <a 
              href="https://github.com/perejilinformatico"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-button-github"
              className="btn btn-outline btn-md hover:border-blue-400 bg-black text-white hover:text-blue-400"
            >
              GitHub
            </a>
            <a 
              href="/CV_Santiago_Cussit_Maximo.docx"  
              download
              id="contact-button-cv"
              className="btn btn-outline btn-md hover:border-blue-400 bg-black text-white hover:text-blue-400"
            >
              CV
            </a>
          </div>
        </div>
      </section>
      <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      </section>
      </div>
      {/* Footer */}
      <footer className="border-t border-slate-700 mt-20 py-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>© 2025 Santiago Cussit. Hecho con React, Daisy UI, Tailwind, TypeScript \(-w-)/</p>
        </div>
      </footer>
    </div>
  );
}