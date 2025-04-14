import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

  // Initialize Three.js scene
  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 100,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, 100);
    renderer.setClearColor(0x000000, 0);

    if (canvasRef.current) {
      canvasRef.current.innerHTML = "";
      canvasRef.current.appendChild(renderer.domElement);
    }

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;

    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    // Materials
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: darkMode ? 0xffffff : 0x0088ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // Create the particle system
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    camera.position.z = 2;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0008;

      // Respond to scroll
      if (isScrolled) {
        particlesMesh.rotation.x += 0.001;
        particlesMesh.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / 100;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 100);
    };

    window.addEventListener("resize", handleResize);
    animate();

    // Store scene reference for cleanup
    sceneRef.current = { scene, camera, renderer, particlesMesh };

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      if (sceneRef.current) {
        sceneRef.current.particlesMesh.geometry.dispose();
        sceneRef.current.particlesMesh.material.dispose();
        if (canvasRef.current && canvasRef.current.children[0]) {
          canvasRef.current.removeChild(canvasRef.current.children[0]);
        }
      }
    };
  }, [darkMode, isScrolled]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/70 dark:bg-black/80 backdrop-blur-md py-3"
            : "bg-transparent py-6"
        }`}
      >
        {/* Three.js canvas container */}
        <div
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-70"
        />

        <div className="container mx-auto px-6 flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <div className="flex items-center">
                <img
                  src="/log.png"
                  alt="NeoWeb.AI Logo"
                  className="w-15 h-15"
                />
                <span className="text-xl font-bold tracking-tight text-white dark:text-white ml-2">
                  NewWeb.AI
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link
              to="/services"
              className="text-white/90 hover:text-white transition-transform duration-200 hover:scale-105"
            >
              Services
            </Link>
            <Link
              to="/case-studies"
              className="text-white/90 hover:text-white transition-transform duration-200 hover:scale-105"
            >
              Case Studies
            </Link>
            <Link
              to="/about"
              className="text-white/90 hover:text-white transition-transform duration-200 hover:scale-105"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-white/90 hover:text-white transition-transform duration-200 hover:scale-105"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="text-white/90 hover:text-white transition-transform duration-200 hover:scale-105"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 hover:rotate-12 focus:outline-none"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              )}
            </button>
            <Link to="/contact">
              <button className="px-5 py-2 bg-transparent border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/40">
                Let's Talk
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              )}
            </button>
            <button className="text-white" onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/80 dark:bg-black/90 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <Link to="/" onClick={toggleMobileMenu}>
              <div className="flex items-center">
                <img src="/log.png" alt="NeoWeb.AI Logo" className="w-8 h-8" />
                <span className="text-lg font-bold text-white dark:text-white ml-2">
                  NewWeb.AI
                </span>
              </div>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-white/70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col py-6 px-6 space-y-6">
            <Link
              to="/services"
              className="text-white/90 hover:text-white transition-transform duration-200 hover:translate-x-1"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/case-studies"
              className="text-white/90 hover:text-white transition-transform duration-200 hover:translate-x-1"
              onClick={toggleMobileMenu}
            >
              Case Studies
            </Link>
            <Link
              to="/about"
              className="text-white/90 hover:text-white transition-transform duration-200 hover:translate-x-1"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-white/90 hover:text-white transition-transform duration-200 hover:translate-x-1"
              onClick={toggleMobileMenu}
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="text-white/90 hover:text-white transition-transform duration-200 hover:translate-x-1"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
          <div className="mt-auto p-6 border-t border-white/10">
            <Link to="/contact" onClick={toggleMobileMenu}>
              <button className="w-full px-5 py-2 bg-transparent border border-white/20 rounded-full hover:bg-white/10 transition-all duration-200 hover:scale-105 text-white">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
