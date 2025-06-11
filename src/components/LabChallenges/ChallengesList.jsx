// src/components/LabChallenges/ChallengesList.jsx
import ChallengeCard from './ChallengeCard';

const ChallengesList = () => {
  const challenges = [
    {
      title: "Web Application SQL Injection",
      category: "Web Security",
      problem: "A vulnerable web application was provided with a login form susceptible to SQL injection. The challenge was to bypass authentication and extract sensitive data from the database.",
      approach: "Used manual SQL injection techniques to bypass login, then employed SQLmap to automate the data extraction process.",
      tools: ["Burp Suite", "SQLmap", "Browser DevTools"],
      screenshot: "/path-to-screenshot.jpg",
      lessons: [
        "Importance of parameterized queries in web applications",
        "How to test for SQL injection vulnerabilities",
        "Using automated tools responsibly for security testing"
      ]
    },
    {
      title: "Network Traffic Analysis",
      category: "Network Security",
      problem: "Given a PCAP file with suspicious network traffic, identify the malicious activity and extract hidden data.",
      approach: "Analyzed the traffic using Wireshark, identified unusual patterns, and extracted hidden data in DNS queries.",
      tools: ["Wireshark", "Tshark", "Python scripts"],
      lessons: [
        "Understanding normal vs. abnormal network patterns",
        "Data exfiltration techniques using DNS",
        "Importance of monitoring all network protocols"
      ]
    },
    {
      title: "Reverse Engineering Crackme",
      category: "Binary Exploitation",
      problem: "A binary executable was provided that required a specific password to unlock. The task was to reverse engineer the binary to find the correct password.",
      approach: "Used Ghidra to decompile the binary, analyzed the password validation logic, and extracted the correct password.",
      tools: ["Ghidra", "GDB", "Radare2"],
      lessons: [
        "Basic reverse engineering techniques",
        "Understanding compiled code behavior",
        "Importance of secure password handling in applications"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {challenges.map((challenge, index) => (
        <ChallengeCard key={index} challenge={challenge} />
      ))}
    </div>
  );
};

export default ChallengesList;