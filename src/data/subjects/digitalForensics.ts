import type { AiTopic } from "../aiSyllabus";
import u3t1q1Detailed   from "../dfAnswers/u-3-t1-q1-detailed.md?raw";
import u3t1q1Simplified from "../dfAnswers/u-3-t1-q1-simplified.md?raw";
import u3t2q1Detailed   from "../dfAnswers/u-3-t2-q1-detailed.md?raw";
import u3t2q1Simplified from "../dfAnswers/u-3-t2-q1-simplified.md?raw";
import u3t2q2Detailed   from "../dfAnswers/u-3-t2-q2-detailed.md?raw";
import u3t2q2Simplified from "../dfAnswers/u-3-t2-q2-simplified.md?raw";
import u3t2q3Detailed   from "../dfAnswers/u-3-t2-q3-detailed.md?raw";
import u3t2q3Simplified from "../dfAnswers/u-3-t2-q3-simplified.md?raw";
import u3t2q4Detailed   from "../dfAnswers/u-3-t2-q4-detailed.md?raw";
import u3t2q4Simplified from "../dfAnswers/u-3-t2-q4-simplified.md?raw";
import u3t2q5Detailed   from "../dfAnswers/u-3-t2-q5-detailed.md?raw";
import u3t2q5Simplified from "../dfAnswers/u-3-t2-q5-simplified.md?raw";
import u3t3q1Detailed   from "../dfAnswers/u-3-t3-q1-detailed.md?raw";
import u3t3q1Simplified from "../dfAnswers/u-3-t3-q1-simplified.md?raw";
import u4t1q1Detailed   from "../dfAnswers/u-4-t1-q1-detailed.md?raw";
import u4t1q1Simplified from "../dfAnswers/u-4-t1-q1-simplified.md?raw";
import u4t2q1Detailed   from "../dfAnswers/u-4-t2-q1-detailed.md?raw";
import u4t2q1Simplified from "../dfAnswers/u-4-t2-q1-simplified.md?raw";
import u4t2q2Detailed   from "../dfAnswers/u-4-t2-q2-detailed.md?raw";
import u4t2q2Simplified from "../dfAnswers/u-4-t2-q2-simplified.md?raw";
import u4t3q1Detailed   from "../dfAnswers/u-4-t3-q1-detailed.md?raw";
import u4t3q1Simplified from "../dfAnswers/u-4-t3-q1-simplified.md?raw";
import u4t3q2Detailed   from "../dfAnswers/u-4-t3-q2-detailed.md?raw";
import u4t3q2Simplified from "../dfAnswers/u-4-t3-q2-simplified.md?raw";
import u4t3q3Detailed   from "../dfAnswers/u-4-t3-q3-detailed.md?raw";
import u4t3q3Simplified from "../dfAnswers/u-4-t3-q3-simplified.md?raw";
import u5t1q1Detailed   from "../dfAnswers/u-5-t1-q1-detailed.md?raw";
import u5t1q1Simplified from "../dfAnswers/u-5-t1-q1-simplified.md?raw";
import u5t1q2Detailed   from "../dfAnswers/u-5-t1-q2-detailed.md?raw";
import u5t1q2Simplified from "../dfAnswers/u-5-t1-q2-simplified.md?raw";
import u5t2q1Detailed   from "../dfAnswers/u-5-t2-q1-detailed.md?raw";
import u5t2q1Simplified from "../dfAnswers/u-5-t2-q1-simplified.md?raw";
import u5t3q1Detailed   from "../dfAnswers/u-5-t3-q1-detailed.md?raw";
import u5t3q1Simplified from "../dfAnswers/u-5-t3-q1-simplified.md?raw";
import u5t3q2Detailed   from "../dfAnswers/u-5-t3-q2-detailed.md?raw";
import u5t3q2Simplified from "../dfAnswers/u-5-t3-q2-simplified.md?raw";
import u5t4q1Detailed   from "../dfAnswers/u-5-t4-q1-detailed.md?raw";
import u5t4q1Simplified from "../dfAnswers/u-5-t4-q1-simplified.md?raw";


export const digitalForensics: Record<string, AiTopic[]> = {

  // ════════════════════════════════════════════════════════════════════════════
  // UNIT 3 — Evidence Collection and Memory Analysis
  // ════════════════════════════════════════════════════════════════════════════
  "3": [
    {
      id: "df-u3-t1",
      title: "Evidence Collection",
      progress: 0,
      status: "locked",
      content: `### Evidence Collection\nCovers the foundational methods of gathering digital evidence — Data Acquisition and Forensic Copy techniques used at the start of any investigation.`,
      questions: [
        {
          id: "df-u3-t1-q1",
          question: "Explain data acquisition and forensic copy in digital forensics.",
          answers: {
            detailed:  u3t1q1Detailed,
            simplified: u3t1q1Simplified,
          },
          isFree: true,
        },
      ],
    },

    {
      id: "df-u3-t2",
      title: "Examination",
      progress: 0,
      status: "locked",
      content: `### Examination\nCovers the core examination techniques — Disk Structures, File Systems Analysis, Analysis Tools, Timeline Analysis, File Hashing, Filtering, and Data Carving.`,
      questions: [
        {
          id: "df-u3-t2-q1",
          question: "Explain disk structures and file system analysis in forensic investigations.",
          answers: {
            detailed:   u3t2q1Detailed,
            simplified: u3t2q1Simplified,
          },
          isFree: true,
        },
        {
          id: "df-u3-t2-q2",
          question: "Explain analysis tools and their role in digital forensics.",
          answers: {
            detailed:   u3t2q2Detailed,
            simplified: u3t2q2Simplified,
          },
          isFree: false,
        },
        {
          id: "df-u3-t2-q3",
          question: "Explain timeline analysis and its importance.",
          answers: {
            detailed:   u3t2q3Detailed,
            simplified: u3t2q3Simplified,
          },
          isFree: false,
        },
        {
          id: "df-u3-t2-q4",
          question: "Explain file hashing and filtering techniques.",
          answers: {
            detailed:   u3t2q4Detailed,
            simplified: u3t2q4Simplified,
          },
          isFree: false,
        },
        {
          id: "df-u3-t2-q5",
          question: "Explain data carving and its applications.",
          answers: {
            detailed:   u3t2q5Detailed,
            simplified: u3t2q5Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "df-u3-t3",
      title: "Memory Analysis",
      progress: 0,
      status: "locked",
      content: `### Memory Analysis\nCovers the two key phases of memory forensics — Collection Phase and Examination Phase — used to extract and analyse volatile data from a system.`,
      questions: [
        {
          id: "df-u3-t3-q1",
          question: "Explain memory analysis and its phases: collection and examination.",
          answers: {
            detailed:   u3t3q1Detailed,
            simplified: u3t3q1Simplified,
          },
          isFree: true,
        },
      ],
    },
  ],

  // ════════════════════════════════════════════════════════════════════════════
  // UNIT 4 — Mobile and Embedded Forensics
  // ════════════════════════════════════════════════════════════════════════════
  "4": [
    {
      id: "df-u4-t1",
      title: "Mobile and Embedded Forensics",
      progress: 0,
      status: "locked",
      content: `### Mobile and Embedded Forensics\nCovers Embedded Systems and Consumer Electronics, Mobile Phones, and Telecommunication Networks as they relate to digital forensic investigations.`,
      questions: [
        {
          id: "df-u4-t1-q1",
          question: "Explain embedded systems, mobile phones, and telecommunication networks in digital forensics.",
          answers: {
            detailed:   u4t1q1Detailed,
            simplified: u4t1q1Simplified,
          },
          isFree: true,
        },
      ],
    },

    {
      id: "df-u4-t2",
      title: "Evidence Handling",
      progress: 0,
      status: "locked",
      content: `### Evidence Handling\nCovers how Mobile Devices and Embedded Systems are treated as digital evidence, along with Malware and Security Considerations during forensic handling.`,
      questions: [
        {
          id: "df-u4-t2-q1",
          question: "Explain how mobile devices and embedded systems are treated as digital evidence.",
          answers: {
            detailed:   u4t2q1Detailed,
            simplified: u4t2q1Simplified,
          },
          isFree: true,
        },
        {
          id: "df-u4-t2-q2",
          question: "Discuss malware and security considerations in mobile forensics.",
          answers: {
            detailed:   u4t2q2Detailed,
            simplified: u4t2q2Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "df-u4-t3",
      title: "Forensic Process",
      progress: 0,
      status: "locked",
      content: `### Forensic Process\nCovers Ontologies for Mobile and Embedded Forensics, the Collection Phase, and the Examination Phase of the mobile forensic investigation process.`,
      questions: [
        {
          id: "df-u4-t3-q1",
          question: "Explain ontologies for mobile and embedded forensics.",
          answers: {
            detailed:   u4t3q1Detailed,
            simplified: u4t3q1Simplified,
          },
          isFree: true,
        },
        {
          id: "df-u4-t3-q2",
          question: "Explain the collection phase in mobile forensics.",
          answers: {
            detailed:   u4t3q2Detailed,
            simplified: u4t3q2Simplified,
          },
          isFree: false,
        },
        {
          id: "df-u4-t3-q3",
          question: "Explain the examination phase in mobile forensics.",
          answers: {
            detailed:   u4t3q3Detailed,
            simplified: u4t3q3Simplified,
          },
          isFree: false,
        },
      ],
    },
  ],

  // ════════════════════════════════════════════════════════════════════════════
  // UNIT 5 — Network Forensics and Internet Analysis
  // ════════════════════════════════════════════════════════════════════════════
  "5": [
    {
      id: "df-u5-t1",
      title: "Networking Fundamentals",
      progress: 0,
      status: "locked",
      content: `### Networking Fundamentals\nCovers Computer Networking, Layers of Network Abstraction, and The Internet — the foundational concepts required to understand network forensics.`,
      questions: [
        {
          id: "df-u5-t1-q1",
          question: "Explain computer networking concepts and layers of network abstraction.",
          answers: {
            detailed:   u5t1q1Detailed,
            simplified: u5t1q1Simplified,
          },
          isFree: true,
        },
        {
          id: "df-u5-t1-q2",
          question: "Explain the structure and working of the Internet.",
          answers: {
            detailed:   u5t1q2Detailed,
            simplified: u5t1q2Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "df-u5-t2",
      title: "Internet Forensics",
      progress: 0,
      status: "locked",
      content: `### Internet Forensics\nCovers techniques for Tracing Information on the Internet — identifying digital footprints, IP addresses, and domain trails left during online activity.`,
      questions: [
        {
          id: "df-u5-t2-q1",
          question: "Explain techniques for tracing information on the Internet.",
          answers: {
            detailed:   u5t2q1Detailed,
            simplified: u5t2q1Simplified,
          },
          isFree: true,
        },
      ],
    },

    {
      id: "df-u5-t3",
      title: "Collection Phase",
      progress: 0,
      status: "locked",
      content: `### Collection Phase\nCovers both Local Acquisition and Network Acquisition — the methods used to collect data from local systems and across networks for forensic analysis.`,
      questions: [
        {
          id: "df-u5-t3-q1",
          question: "Explain local acquisition in the collection phase of digital forensics.",
          answers: {
            detailed:   u5t3q1Detailed,
            simplified: u5t3q1Simplified,
          },
          isFree: true,
        },
        {
          id: "df-u5-t3-q2",
          question: "Explain network acquisition and its challenges.",
          answers: {
            detailed:   u5t3q2Detailed,
            simplified: u5t3q2Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "df-u5-t4",
      title: "Forensic Analysis",
      progress: 0,
      status: "locked",
      content: `### Forensic Analysis\nCovers the Examination and Analysis Phases of network forensics — interpreting captured network data to identify evidence and reconstruct events.`,
      questions: [
        {
          id: "df-u5-t4-q1",
          question: "Explain the examination and analysis phases in network forensics.",
          answers: {
            detailed:   u5t4q1Detailed,
            simplified: u5t4q1Simplified,
          },
          isFree: true,
        },
      ],
    },
  ],
};