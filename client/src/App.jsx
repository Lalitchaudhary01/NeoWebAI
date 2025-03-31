import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import * as THREE from "three";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Insights from "./components/Insights";
import About from "./components/About";
import Footer from "./components/Footer";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import WebDevelopment from "./service/WebDevelopment";
import Marketing from "./service/Marketing";
import BrandingGraphics from "./service/BrandingGraphics";
import Pricing from "./service/Pricing";
import ProcessPage from "./service/ProcessPage";
import BlogDetails from "./Blogs/BlogDetails";
import { motion } from "framer-motion";
import PrivacyPolicy from "./components/Policies/PrivacyPolicy";
import TermsOfService from "./components/Policies/TermsOfService";
import CookiesPolicy from "./components/Policies/CookiesPolicy";
import AllRightsReserved from "./components/Policies/AllRightsReserved";
import Testimonials from "./components/Testinomial";

// Import Analytics component from @vercel/analytics/react
import { Analytics } from "@vercel/analytics/react";

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Page Transition Wrapper Component
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{
      type: "tween",
      duration: 0.3,
    }}
    className="min-h-screen"
  >
    {children}|
  </motion.div>
);

// Create a component that combines all sections for the homepage
const HomePage = () => {
  return (
    <PageWrapper>
      <Home />
      <Services />
      <Insights />
      <CaseStudies />
      <About />
      <Testimonials />
    </PageWrapper>
  );
};

// ThreeJS Background Component
const ThreeJSBackground = () => {
  const canvasRef = useRef(null);

  // Three.js scene setup
  useEffect(() => {
    if (!canvasRef.current) return;

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;

    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      // Create a sphere of particles
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    // Materials
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      transparent: true,
      color: 0x8a2be2, // Purple color
      blending: THREE.AdditiveBlending,
    });

    // Mesh
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Add floating cubes for visual effect
    const cubes = [];
    for (let i = 0; i < 10; i++) {
      const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(`hsl(${260 + i * 10}, 70%, 50%)`),
        transparent: true,
        opacity: 0.5,
        wireframe: true,
      });

      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5
      );

      scene.add(cube);
      cubes.push({
        mesh: cube,
        rotationSpeed: {
          x: Math.random() * 0.01 - 0.005,
          y: Math.random() * 0.01 - 0.005,
        },
        floatSpeed: Math.random() * 0.002 + 0.001,
        floatOffset: Math.random() * Math.PI * 2,
      });
    }

    // Position camera
    camera.position.z = 3;

    // Mouse movement for interactive effect
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      frame += 0.01;

      // Rotate particle system
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0005;

      // Move particles based on mouse position
      particlesMesh.rotation.x += mouseY * 0.001;
      particlesMesh.rotation.y += mouseX * 0.001;

      // Animate cubes
      cubes.forEach((cube) => {
        cube.mesh.rotation.x += cube.rotationSpeed.x;
        cube.mesh.rotation.y += cube.rotationSpeed.y;

        // Floating movement
        cube.mesh.position.y +=
          Math.sin(frame + cube.floatOffset) * cube.floatSpeed;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <canvas ref={canvasRef} className="w-full h-full" />

      {/* Background gradient elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-64 -left-64 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-64 h-64 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-64 -right-32 w-96 h-96 bg-indigo-600 opacity-10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

const App = () => {
  const location = useLocation();

  return (
    <Layout>
      {/* Global Tailwind Scroll Styles */}
      <style jsx global>{`
        html {
          @apply scroll-smooth;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          @apply w-2 bg-gray-100;
        }

        ::-webkit-scrollbar-thumb {
          @apply bg-gradient-to-b from-purple-600 to-blue-600 rounded-full;
        }

        ::-webkit-scrollbar-thumb:hover {
          @apply from-purple-700 to-blue-700;
        }

        body {
          @apply bg-gradient-to-b from-gray-950 to-black text-white;
        }
      `}</style>

      {/* Global Three.js Background */}
      <ThreeJSBackground />

      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/services"
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            }
          />
          <Route
            path="/insights"
            element={
              <PageWrapper>
                <Insights />
              </PageWrapper>
            }
          />
          <Route
            path="/case-studies"
            element={
              <PageWrapper>
                <CaseStudies />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/services/web-development"
            element={
              <PageWrapper>
                <WebDevelopment />
              </PageWrapper>
            }
          />
          <Route
            path="/services/marketing"
            element={
              <PageWrapper>
                <Marketing />
              </PageWrapper>
            }
          />
          <Route
            path="/services/branding"
            element={
              <PageWrapper>
                <BrandingGraphics />
              </PageWrapper>
            }
          />
          <Route
            path="/services/pricing"
            element={
              <PageWrapper>
                <Pricing />
              </PageWrapper>
            }
          />
          <Route
            path="/process"
            element={
              <PageWrapper>
                <ProcessPage />
              </PageWrapper>
            }
          />
          <Route
            path="/blog-details/:id"
            element={
              <PageWrapper>
                <BlogDetails />
              </PageWrapper>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <PageWrapper>
                <PrivacyPolicy />
              </PageWrapper>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <PageWrapper>
                <TermsOfService />
              </PageWrapper>
            }
          />
          <Route
            path="/cookies-policy"
            element={
              <PageWrapper>
                <CookiesPolicy />
              </PageWrapper>
            }
          />
          <Route
            path="/copyright"
            element={
              <PageWrapper>
                <AllRightsReserved />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton phoneNumber="8445646300" />

      {/* Place the Analytics component here */}
      <Analytics />
    </Layout>
  );
};

export default App;
