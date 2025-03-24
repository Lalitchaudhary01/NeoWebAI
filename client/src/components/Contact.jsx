import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
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

    // Your WhatsApp number (91 is India country code)
    const yourWhatsappNumber = "918445646300";

    // Format the message with proper line breaks
    const whatsappMessage =
      `*New Message From Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*Subject:* ${formData.subject}%0A%0A` +
      `*Message:*%0A${formData.message}`;

    // Open WhatsApp with the pre-filled message
    window.open(
      `https://wa.me/${yourWhatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    // Reset form after submission
    setFormData({
      name: "",
      mobile: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12">
      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Contact Me on WhatsApp
        </h2>
        <p className="text-center text-white/70 mb-8">
          Fill the form and your message will open in WhatsApp. Just press send
          to connect with me!
        </p>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Your Name
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
              htmlFor="mobile"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Your Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="9876543210"
              required
              pattern="[0-9]{10}"
              title="Please enter 10 digit mobile number"
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
              placeholder="Regarding..."
              required
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-green-500/20 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.588c.545 1.422 1.666 2.594 2.983 2.907.405.096.773.119 1.114.077.405-.048.79-.17 1.114-.352.297-.164.661-.396.925-.396.231 0 .462.115.627.396.165.281.661 1.096.925 1.518.256.413.563.396.844.347.256-.043 1.108-.432 1.268-1.422.165-.991.165-1.839-.115-2.022-.272-.174-.66-.124-1.38-.075-.71.05-1.25.074-1.737-.223-.495-.297-.991-1.032-1.408-1.38-.413-.347-1.004-.719-1.478-.553-.462.165-.66.892-.793 1.518zM12 2.016c-5.516 0-9.984 4.468-9.984 9.984 0 2.2.715 4.237 1.918 5.896L2.06 21.876l4.067-1.064a9.92 9.92 0 0 0 4.873 1.272c5.516 0 9.984-4.468 9.984-9.984 0-5.516-4.468-9.984-9.984-9.984z" />
              </svg>
              Send WhatsApp Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
