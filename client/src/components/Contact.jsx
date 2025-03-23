import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    // For example, sending data to an API
    console.log("Form submitted:", formData);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // You could also add success message handling here
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12">
      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Let's Build Something Amazing Together!
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Project Inquiry"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Tell us about your project..."
              required
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
