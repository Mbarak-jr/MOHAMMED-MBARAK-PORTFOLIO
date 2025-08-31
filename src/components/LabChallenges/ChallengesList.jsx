// src/components/LabChallenges/ChallengesList.jsx
import ChallengeCard from './ChallengeCard';

const ChallengesList = () => {
  const challenges = [
    {
      title: "Web Application SQL Injection",
      category: "Web Security",
      problem: "A vulnerable web application with a login form was susceptible to SQL injection. The task was to bypass authentication and retrieve sensitive data.",
      approach: "Tested manually with payloads, confirmed vulnerability, then automated extraction with SQLmap.",
      tools: ["Burp Suite", "SQLmap", "Browser DevTools"],
      lessons: [
        "Importance of parameterized queries in web applications",
        "Manual and automated SQL injection testing",
        "Secure coding practices to mitigate SQLi"
      ]
    },
    {
      title: "Network Traffic Analysis",
      category: "Network Security",
      problem: "Analyzed a suspicious PCAP file to detect malicious traffic and exfiltrated data.",
      approach: "Inspected packets in Wireshark, detected DNS tunneling, and extracted hidden payloads.",
      tools: ["Wireshark", "Tshark", "Python scripts"],
      lessons: [
        "Normal vs. abnormal network patterns",
        "DNS-based data exfiltration techniques",
        "Importance of continuous monitoring"
      ]
    },
    {
      title: "Reverse Engineering CrackMe",
      category: "Binary Exploitation",
      problem: "A binary executable required a secret password to unlock functionality.",
      approach: "Decompiled binary in Ghidra, traced validation logic, retrieved correct password.",
      tools: ["Ghidra", "GDB", "Radare2"],
      lessons: [
        "Fundamentals of reverse engineering",
        "Debugging binaries for logic flow",
        "Risks of hardcoding credentials"
      ]
    },
    {
      title: "Privilege Escalation (Linux)",
      category: "System Security",
      problem: "Gained low-privileged shell on a vulnerable machine but required root access.",
      approach: "Enumerated SUID binaries, leveraged misconfigured scripts to escalate privileges.",
      tools: ["LinPEAS", "GTFOBins", "Linux commands"],
      lessons: [
        "Privilege escalation vectors on Linux",
        "Importance of patching misconfigurations",
        "Realistic attacker post-exploitation tactics"
      ]
    },
    {
      title: "Malware Analysis Lab",
      category: "Malware & Threat Analysis",
      problem: "Analyzed a suspicious Windows executable suspected to be malware.",
      approach: "Performed static analysis with strings and PE tools, followed by sandbox execution to observe behavior.",
      tools: ["Strings", "PEStudio", "Any.Run Sandbox"],
      lessons: [
        "Extracting IOCs from malware samples",
        "Difference between static and dynamic analysis",
        "Importance of sandbox environments for safety"
      ]
    },
    {
      title: "Brute Force & Password Cracking",
      category: "Offensive Security",
      problem: "Faced a weakly protected login portal requiring password discovery.",
      approach: "Captured login requests, then used Hydra and JohnTheRipper to brute force weak credentials.",
      tools: ["Hydra", "JohnTheRipper", "Burp Suite"],
      lessons: [
        "Risks of weak password policies",
        "Rate limiting and lockout mechanisms",
        "Strong password management strategies"
      ]
    },
    {
      title: "Incident Response Simulation",
      category: "Blue Teaming",
      problem: "Investigated a simulated attack on a corporate network environment.",
      approach: "Reviewed Splunk SIEM alerts, traced malicious activity, contained affected endpoints.",
      tools: ["Splunk", "Sysinternals Suite", "Event Logs"],
      lessons: [
        "Incident detection and triage",
        "Log correlation for threat hunting",
        "Responding quickly to limit damage"
      ]
    },
    {
      title: "Threat Intelligence & Hunting",
      category: "Threat Intelligence",
      problem: "Tasked with investigating a targeted phishing campaign and mapping attacker TTPs.",
      approach: "Collected OSINT data, extracted IOCs from email headers, cross-referenced with VirusTotal and MITRE ATT&CK, and developed a threat profile.",
      tools: ["OSINT Framework", "VirusTotal", "MISP", "MITRE ATT&CK Navigator"],
      lessons: [
        "How to extract actionable intelligence from raw indicators",
        "Correlating attacker behaviors with MITRE ATT&CK techniques",
        "Importance of proactive threat hunting to reduce dwell time"
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
