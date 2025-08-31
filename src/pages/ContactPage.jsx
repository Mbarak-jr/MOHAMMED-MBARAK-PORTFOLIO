// src/pages/ContactPage.jsx
import ContactForm from '../components/Contact/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Get in touch to discuss security consulting, collaboration opportunities, or any questions you might have.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;