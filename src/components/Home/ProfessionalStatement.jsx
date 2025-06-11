const ProfessionalStatement = () => {
    return (
      <section className="py-16 bg-gradient-to-b from-blue-50 to-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Cybersecurity Engineer & Secure Software Developer
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg border border-gray-100">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-blue-600">Offensive Security Specialist</strong> with proven experience in penetration testing, vulnerability assessment, and red team operations. I've successfully identified and mitigated critical security flaws in enterprise systems, reducing attack surfaces by 60-80% for clients across finance, healthcare, and e-commerce sectors.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-blue-600">Secure Software Architect</strong> who builds security into the SDLC from day one. I engineer applications with OWASP Top 10 protections, implement zero-trust architectures, and harden systems against modern threats. My full-stack development expertise ensures security doesn't compromise functionality.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-gray-800 font-medium">
                  "I don't just find vulnerabilities - I engineer solutions that stay secure. My dual expertise in breaking and building systems gives me unique insight into creating truly resilient applications."
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Certified in <span className="font-semibold text-blue-600">OSCP</span> and <span className="font-semibold text-blue-600">AWS Security</span>, I combine hands-on technical skills with strategic risk management. Whether leading security audits, developing secure APIs, or training engineering teams in security best practices, I deliver measurable security improvements.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Focus Areas:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Penetration Testing</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Cloud Security</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Secure Coding</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Threat Modeling</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">DevSecOps</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Incident Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProfessionalStatement;