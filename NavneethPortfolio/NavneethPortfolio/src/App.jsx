import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'RITA (Local AI Assistant)', desc: 'Offline, privacy-first AI assistant for local tasks and automation.', repo: 'https://github.com/navneeth2006/rita-ai-assistant' },
  { id: 2, title: 'Content-Aware File Organizer', desc: 'Smart file manager that auto-sorts and organizes using AI classification.', repo: 'https://github.com/navneeth2006/ai-file-organizer' },
  { id: 3, title: 'SecureVault Password Manager', desc: 'Encrypted password and secret manager built in Python.', repo: 'https://github.com/navneeth2006/securevault' },
  { id: 4, title: 'AI Productivity Tracker', desc: 'An intelligent to-do and focus tracker powered by AI.', repo: 'https://github.com/navneeth2006/ai-productivity-tracker' },
  { id: 5, title: 'Smart Weather & Pollution Tracker', desc: 'Web app to track weather and pollution using live APIs.', repo: 'https://github.com/navneeth2006/ecoair-tracker' },
  { id: 6, title: 'Procedural Python Arcade Game', desc: 'A 2D arcade game showcasing Python’s gaming capabilities.', repo: 'https://github.com/navneeth2006/arcadia' },
  { id: 7, title: 'Explainable Tic-Tac-Toe', desc: 'GUI Tic-Tac-Toe game with explainable AI moves.', repo: 'https://github.com/navneeth2006/ai-tictactoe' },
  { id: 8, title: 'Gesture Rock-Paper-Scissors', desc: 'Computer vision-based RPS game using webcam input.', repo: 'https://github.com/navneeth2006/gesture-rps' },
  { id: 9, title: 'Ethical Pentest Orchestrator (EPO)', desc: 'An automated orchestrator for ethical hacking tasks.', repo: 'https://github.com/navneeth2006/ethical-pentest-orchestrator' },
  { id: 10, title: 'AI Vulnerability Triage Engine', desc: 'AI tool that analyzes and prioritizes vulnerabilities.', repo: 'https://github.com/navneeth2006/vuln-ai-triage' },
  { id: 11, title: 'Steganography Forensic Suite', desc: 'Toolset for hiding and extracting data from images securely.', repo: 'https://github.com/navneeth2006/stegoforge' }
]

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#03040a] to-[#071220] text-gray-100">
      <header className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/src/assets/profile.jpg" alt="Navneeth" className="w-20 h-20 rounded-full ring-2 ring-teal-400 object-cover" />
          <div>
            <h1 className="text-2xl font-bold">Navneeth Dev J</h1>
            <p className="text-sm text-gray-300">Digital Sleuth · Cyber Defense · Building Secure Systems</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-gray-300">
          <a href="#projects" className="hover:text-teal-300">Projects</a>
          <a href="#about" className="hover:text-teal-300">About</a>
          <a href="#contact" className="hover:text-teal-300">Contact</a>
          <a href="https://github.com/navneeth2006" target="_blank" rel="noreferrer" className="px-3 py-2 bg-gray-800 rounded-md">GitHub</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
          <div>
            <h2 className="text-4xl font-extrabold">I build tools that make systems safer.</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">I’m a B.Tech student at College of Engineering Chananoor, focused on cybersecurity, digital forensics, and AI-assisted defensive tooling. I aspire to serve in the Indian Army while building secure, ethical software.</p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-block px-5 py-3 bg-teal-500 rounded shadow hover:bg-teal-400">View Projects</a>
              <a href="mailto:navneethdevj1@gmail.com" className="inline-block px-5 py-3 border border-gray-700 rounded hover:bg-gray-800">Contact</a>
            </div>

            <ul className="mt-6 text-gray-400 space-y-1 text-sm">
              <li><strong>Education:</strong> Kendriya Vidyalaya MISA Cantt (X); Kendriya Vidyalaya No.3, JRC Cantt, Jalandhar (XII)</li>
              <li><strong>Currently:</strong> 1st year B.Tech, College of Engineering Chananoor</li>
              <li><strong>Location:</strong> India</li>
            </ul>
          </div>

          <aside className="p-6 bg-[#071018] border border-gray-800 rounded-lg">
            <div className="w-full h-64 rounded-lg overflow-hidden bg-gradient-to-br from-[#071018] to-[#0b1220] flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-300">Profile Photo</p>
                <p className="text-xs text-gray-500 mt-2">Replace /src/assets/profile.jpg with your photo.</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="p-3 bg-[#061016] rounded">
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm">navneethdevj1@gmail.com</p>
              </div>
              <div className="p-3 bg-[#061016] rounded">
                <p className="text-xs text-gray-400">Phone</p>
                <p className="text-sm">+91 8453173443</p>
              </div>
            </div>

            <a href="https://github.com/navneeth2006" target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm underline text-gray-300">View my GitHub</a>
          </aside>
        </section>

        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-semibold text-teal-400">Projects</h3>
          <p className="text-gray-400 mt-1">Interactive demos, repositories, and safe sandboxed showcases.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <motion.article key={p.id} whileHover={{ y: -6 }} className="p-5 bg-gray-800 border border-gray-700 rounded-lg">
                <header className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-lg text-teal-300">{p.title}</h4>
                  </div>
                  <div className="text-xs text-gray-500">#{p.id}</div>
                </header>

                <p className="mt-3 text-gray-300 text-sm">{p.desc}</p>

                <div className="mt-4 flex items-center gap-3">
                  <a href="#" onClick={e => e.preventDefault()} className="px-3 py-2 text-sm bg-teal-500 rounded hover:bg-teal-400">Live Demo</a>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="px-3 py-2 text-sm border border-gray-700 rounded hover:bg-gray-800">Source</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h4 className="text-teal-400 font-semibold">Make Your Projects Discoverable</h4>
          <p className="text-gray-300 mt-2">These suggestions make your projects more visible to recruiters and technical reviewers.</p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-gray-300">
              <thead>
                <tr className="text-teal-300"><th className="p-2">Type</th><th className="p-2">Hosting Option</th><th className="p-2">Example Use</th></tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700"><td className="p-2">🌐 Web UI (Flask/Streamlit)</td><td className="p-2">Render.com / Railway.app</td><td className="p-2">Host web dashboards or assistants</td></tr>
                <tr className="border-t border-gray-700"><td className="p-2">📊 Dashboards</td><td className="p-2">Streamlit Cloud</td><td className="p-2">Host data visualization tools</td></tr>
                <tr className="border-t border-gray-700"><td className="p-2">🧠 Docs</td><td className="p-2">GitHub Pages</td><td className="p-2">Turn READMEs into a site</td></tr>
                <tr className="border-t border-gray-700"><td className="p-2">☁️ API Backends</td><td className="p-2">Railway.app</td><td className="p-2">For your scanner or AI triage tool</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="about" className="mt-12">
          <h3 className="text-2xl font-semibold">About</h3>
          <p className="text-gray-300 mt-2">I build defensive tools and forensic workflows for education and ethical research. All demos shown are sandboxed and for learning / defensive use only.</p>
        </section>

        <section id="contact" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 rounded border border-gray-700">
            <h4 className="text-teal-300 font-semibold">Contact</h4>
            <p className="text-gray-300 mt-2">Email: navneethdevj1@gmail.com</p>
            <p className="text-gray-300 mt-1">Phone: +91 8453173443</p>
            <a href="mailto:navneethdevj1@gmail.com" className="mt-4 inline-block px-4 py-2 bg-teal-500 rounded">Send Email</a>
          </div>

          <div className="p-6 bg-gray-800 rounded border border-gray-700">
            <h4 className="text-teal-300 font-semibold">GitHub</h4>
            <p className="text-gray-300 mt-2">https://github.com/navneeth2006</p>
            <a href="https://github.com/navneeth2006" target="_blank" rel="noreferrer" className="mt-4 inline-block px-4 py-2 border border-gray-700 rounded">Open GitHub</a>
          </div>
        </section>

        <footer className="mt-16 text-center text-gray-500 text-sm">© {new Date().getFullYear()} Navneeth Dev J — For educational & defensive research only.</footer>
      </main>
    </div>
  )
}
