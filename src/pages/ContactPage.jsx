// src/pages/ContactPage.jsx
import ContactForm from '../components/Contact/ContactForm';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Me</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;