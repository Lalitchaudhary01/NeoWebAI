import React, { useState, useRef, useEffect } from "react";
import {
  Quote,
  Star,
  Send,
  PenLine,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const Testimonials = ({ darkMode }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialRef = useRef(null);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  // State for form inputs
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");
  const [rating, setRating] = useState(0);

  // Initial testimonials with local storage support
  const [testimonials, setTestimonials] = useState(() => {
    const savedTestimonials = localStorage.getItem("testimonials");
    return savedTestimonials
      ? JSON.parse(savedTestimonials)
      : [
          {
            name: "Vivek Sharma",
            role: "CEO, Ghummkar.in",
            quote:
              "Their AI-powered solutions transformed our digital strategy. The team's expertise is unparalleled.",
            avatar: "/path/to/avatar1.jpg",
            rating: 5,
          },
          {
            name: "Michael Rodriguez",
            role: "CTO, DataStream Enterprises",
            quote:
              "Incredible attention to detail and cutting-edge AI implementation. They truly understand modern digital challenges.",
            avatar: "/path/to/avatar2.jpg",
            rating: 4,
          },
          {
            name: "Emily Chen",
            role: "Founder, CreativeAI Studio",
            quote:
              "A strategic digital partner that goes beyond conventional web development. Their AI solutions are game-changing.",
            avatar: "/path/to/avatar3.jpg",
            rating: 5,
          },
        ];
  });

  // Save testimonials to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  // Testimonial rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Changed to 3 seconds

    return () => clearInterval(interval);
  }, [testimonials]);

  // Fade animation for testimonial changes
  useEffect(() => {
    if (testimonialRef.current) {
      testimonialRef.current.classList.remove("opacity-0", "translate-y-4");
      void testimonialRef.current.offsetWidth; // Trigger reflow
      testimonialRef.current.classList.add("opacity-100", "translate-y-0");
    }
  }, [currentTestimonial]);

  // Function to manually navigate testimonials
  const navigateTestimonial = (direction) => {
    if (direction === "next") {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentTestimonial((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  };

  // Function to submit new review
  const handleSubmitReview = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!name.trim() || !quote.trim() || rating === 0) {
      alert("Please fill in all fields and select a rating.");
      return;
    }

    const newTestimonial = {
      name,
      role: role || "Client",
      quote,
      rating,
      avatar: `/api/placeholder/100/100`, // Placeholder avatar
    };

    // Add new testimonial to the list
    setTestimonials((prev) => [...prev, newTestimonial]);

    // Reset form
    setName("");
    setRole("");
    setQuote("");
    setRating(0);

    // Close form after submission
    setIsReviewFormOpen(false);

    // Set current testimonial to the newly added review
    setCurrentTestimonial(testimonials.length);
  };

  // Star rating component
  const StarRating = ({ rating, onRatingChange, readOnly = false }) => {
    return (
      <div className="flex space-x-1 justify-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${readOnly ? "cursor-default" : "cursor-pointer"} ${
              star <= rating ? "text-yellow-500 fill-current" : "text-gray-300"
            }`}
            onClick={() => !readOnly && onRatingChange(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-950 to-black text-white ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Testimonial Display Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full space-y-8">
          {/* Existing Testimonial Display */}
          <div
            ref={testimonialRef}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 
            backdrop-blur-lg border border-white/10 rounded-2xl 
            p-12 relative overflow-hidden transition-all duration-700 
            opacity-0 translate-y-4"
          >
            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={() => navigateTestimonial("prev")}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full ml-4"
              >
                <ArrowLeft className="text-white" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={() => navigateTestimonial("next")}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full mr-4"
              >
                <ArrowRight className="text-white" />
              </button>
            </div>

            <Quote
              className="absolute -top-8 -left-8 text-purple-500/10 w-40 h-40"
              strokeWidth={1}
            />

            <div className="relative z-10 text-center">
              <StarRating
                rating={testimonials[currentTestimonial].rating || 5}
                readOnly={true}
              />
              <blockquote className="text-2xl md:text-3xl text-white/90 font-medium mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600/50 to-blue-600/50 rounded-full"></div>

                <div className="text-left">
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-white/70">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-purple-500 w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Write Review Button */}
          <div className="text-center">
            <button
              onClick={() => setIsReviewFormOpen(!isReviewFormOpen)}
              className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg flex items-center space-x-2 mx-auto"
            >
              <PenLine size={20} />
              <span>
                {isReviewFormOpen ? "Close Review Form" : "Write a Review"}
              </span>
            </button>
          </div>

          {/* Review Submission Form - Conditional Rendering */}
          {isReviewFormOpen && (
            <div
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 
              backdrop-blur-lg border border-white/10 rounded-2xl 
              p-12 relative overflow-hidden transition-all duration-500 
              transform"
            >
              <h3 className="text-2xl font-bold text-center mb-6">
                Submit Your Review
              </h3>

              <form onSubmit={handleSubmitReview} className="space-y-4">
                <StarRating rating={rating} onRatingChange={setRating} />

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/10 p-3 rounded-lg border border-white/20 focus:border-purple-500 transition"
                  />
                  <input
                    type="text"
                    placeholder="Your Role/Company (Optional)"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-white/10 p-3 rounded-lg border border-white/20 focus:border-purple-500 transition"
                  />
                </div>

                <textarea
                  placeholder="Your Review"
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  rows={4}
                  className="w-full bg-white/10 p-3 rounded-lg border border-white/20 focus:border-purple-500 transition"
                />

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Submit Review</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
