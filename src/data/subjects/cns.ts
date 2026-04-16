import type { AiTopic } from "../aiSyllabus";
import u3t1q1Detailed   from "../cnsAnswers/u3-t1-q1-detailed.md?raw";
import u3t1q1Simplified from "../cnsAnswers/u3-t1-q1-simplified.md?raw";
import u3t1q2Detailed   from "../cnsAnswers/u3-t1-q2-detailed.md?raw";
import u3t1q2Simplified from "../cnsAnswers/u3-t1-q2-simplified.md?raw";
import u3t1q3Detailed   from "../cnsAnswers/u3-t1-q3-detailed.md?raw";
import u3t1q3Simplified from "../cnsAnswers/u3-t1-q3-simplified.md?raw";
import u3t1q4Detailed   from "../cnsAnswers/u3-t1-q4-detailed.md?raw";
import u3t1q4Simplified from "../cnsAnswers/u3-t1-q4-simplified.md?raw";
import u3t1q5Detailed   from "../cnsAnswers/u3-t1-q5-detailed.md?raw";
import u3t1q5Simplified from "../cnsAnswers/u3-t1-q5-simplified.md?raw";
import u3t1q6Detailed   from "../cnsAnswers/u3-t1-q6-detailed.md?raw";
import u3t1q6Simplified from "../cnsAnswers/u3-t1-q6-simplified.md?raw";
import u3t2q1Detailed   from "../cnsAnswers/u3-t2-q1-detailed.md?raw";
import u3t2q1Simplified from "../cnsAnswers/u3-t2-q1-simplified.md?raw";
import u3t2q2Detailed   from "../cnsAnswers/u3-t2-q2-detailed.md?raw";
import u3t2q2Simplified from "../cnsAnswers/u3-t2-q2-simplified.md?raw";
import u3t2q3Detailed   from "../cnsAnswers/u3-t2-q3-detailed.md?raw";
import u3t2q3Simplified from "../cnsAnswers/u3-t2-q3-simplified.md?raw";
import u3t2q4Detailed   from "../cnsAnswers/u3-t2-q4-detailed.md?raw";
import u3t2q4Simplified from "../cnsAnswers/u3-t2-q4-simplified.md?raw";
import u4t1q1Detailed   from "../cnsAnswers/u4-t1-q1-detailed.md?raw";
import u4t1q1Simplified from "../cnsAnswers/u4-t1-q1-simplified.md?raw";
import u4t1q2Detailed   from "../cnsAnswers/u4-t1-q2-detailed.md?raw";
import u4t1q2Simplified from "../cnsAnswers/u4-t1-q2-simplified.md?raw";
import u4t2q1Detailed   from "../cnsAnswers/u4-t2-q1-detailed.md?raw";
import u4t2q1Simplified from "../cnsAnswers/u4-t2-q1-simplified.md?raw";
import u4t2q2Detailed   from "../cnsAnswers/u4-t2-q2-detailed.md?raw";
import u4t2q2Simplified from "../cnsAnswers/u4-t2-q2-simplified.md?raw";
import u4t2q3Detailed   from "../cnsAnswers/u4-t2-q3-detailed.md?raw";
import u4t2q3Simplified from "../cnsAnswers/u4-t2-q3-simplified.md?raw";
import u4t2q4Detailed   from "../cnsAnswers/u4-t2-q4-detailed.md?raw";
import u4t2q4Simplified from "../cnsAnswers/u4-t2-q4-simplified.md?raw";
import u4t2q5Detailed   from "../cnsAnswers/u4-t2-q5-detailed.md?raw";
import u4t2q5Simplified from "../cnsAnswers/u4-t2-q5-simplified.md?raw";
import u4t3q1Detailed   from "../cnsAnswers/u4-t3-q1-detailed.md?raw";
import u4t3q1Simplified from "../cnsAnswers/u4-t3-q1-simplified.md?raw";
import u4t3q2Detailed   from "../cnsAnswers/u4-t3-q2-detailed.md?raw";
import u4t3q2Simplified from "../cnsAnswers/u4-t3-q2-simplified.md?raw";
import u4t3q3Detailed   from "../cnsAnswers/u4-t3-q3-detailed.md?raw";
import u4t3q3Simplified from "../cnsAnswers/u4-t3-q3-simplified.md?raw";
import u5t1q1Detailed   from "../cnsAnswers/u5-t1-q1-detailed.md?raw";
import u5t1q1Simplified from "../cnsAnswers/u5-t1-q1-simplified.md?raw";
import u5t1q2Detailed   from "../cnsAnswers/u5-t1-q2-detailed.md?raw";
import u5t1q2Simplified from "../cnsAnswers/u5-t1-q2-simplified.md?raw";
import u5t2q1Detailed   from "../cnsAnswers/u5-t2-q1-detailed.md?raw";
import u5t2q1Simplified from "../cnsAnswers/u5-t2-q1-simplified.md?raw";
import u5t3q1Detailed   from "../cnsAnswers/u5-t3-q1-detailed.md?raw";
import u5t3q1Simplified from "../cnsAnswers/u5-t3-q1-simplified.md?raw";
import u5t3q2Detailed   from "../cnsAnswers/u5-t3-q2-detailed.md?raw";
import u5t3q2Simplified from "../cnsAnswers/u5-t3-q2-simplified.md?raw";
import u5t3q3Detailed   from "../cnsAnswers/u5-t3-q3-detailed.md?raw";
import u5t3q3Simplified from "../cnsAnswers/u5-t3-q3-simplified.md?raw";



export const cns: Record<string, AiTopic[]> = {

  // ════════════════════════════════════════════════════════════════════════════
  // UNIT 3 — Number Theory & Cryptography
  // ════════════════════════════════════════════════════════════════════════════
  "3": [
    {
      id: "cns-u3-t1",
      title: "Number Theory",
      progress: 0,
      status: "locked",
      content: `### Number Theory\nCovers the mathematical foundations of cryptography — Divisibility and The Division Algorithm, The Euclidean Algorithm, Modular Arithmetic, Prime Numbers, Fermat's and Euler's Theorems, Testing for Primality, The Chinese Remainder Theorem, and Public Key concepts.`,
      questions: [
        {
          id: "cns-u3-t1-q1",
          question: "Explain the Division Algorithm with suitable examples.",
          answers: {
            detailed:   u3t1q1Detailed,
            simplified: u3t1q1Simplified,
          },
          isFree: true,
        },
        {
          id: "cns-u3-t1-q2",
          question: "Explain the Euclidean Algorithm and its application in finding GCD.",
          answers: {
            detailed:   u3t1q2Detailed,
            simplified: u3t1q2Simplified,
          },
          isFree: false,
        },
        {
          id: "cns-u3-t1-q3",
          question: "Explain modular arithmetic and its properties.",
          answers: {
            detailed:   u3t1q3Detailed,
            simplified: u3t1q3Simplified,
          },
          isFree: false,
        },
        {
          id: "cns-u3-t1-q4",
          question: "Explain prime numbers and methods for testing primality.",
          answers: {
            detailed:   u3t1q4Detailed,
            simplified: u3t1q4Simplified,
          },
          isFree: false,
        },
        {
          id: "cns-u3-t1-q5",
          question: "Explain Fermat's Theorem and Euler's Theorem with examples.",
          answers: {
            detailed:   u3t1q5Detailed,
            simplified: u3t1q5Simplified,
          },
          isFree: false,
        },
        {
          id: "cns-u3-t1-q6",
          question: "Explain the Chinese Remainder Theorem with suitable examples.",
          answers: {
            detailed:   u3t1q6Detailed,
            simplified: u3t1q6Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "cns-u3-t2",
      title: "Cryptography",
      progress: 0,
      status: "locked",
      content: `### Cryptography\nCovers the principles and algorithms of public key cryptography — Principles of Public Key Cryptosystem, RSA Algorithm, Security of RSA, and Diffie-Hellman Key Exchange.`,
      questions: [
        {
          id: "cns-u3-t2-q1",
          question: "Explain the concept of public key cryptosystem.",
          answers: {
            detailed:   u3t2q1Detailed,
            simplified: u3t2q1Simplified,
          },
          isFree: true,
        },
        {
          id: "cns-u3-t2-q2",
          question: "Explain RSA algorithm with a detailed example.",
          answers: {
            detailed:   u3t2q2Detailed,
            simplified: u3t2q2Simplified,
          },
          isFree: false,
        },
        {
          id: "cns-u3-t2-q3",
          question: "Discuss the security aspects of RSA.",
          answers: {
            detailed:   u3t2q3Detailed,
            simplified: u3t2q3Simplified,
          },
          isFree: false,
        },
        {
          id: "cns-u3-t2-q4",
          question: "Explain Diffie-Hellman key exchange with example.",
          answers: {
            detailed:   u3t2q4Detailed,
            simplified: u3t2q4Simplified,
          },
          isFree: false,
        },
      ],
    },
  ],

  // ════════════════════════════════════════════════════════════════════════════
  // UNIT 4 — Cryptographic Hash Functions
  // ════════════════════════════════════════════════════════════════════════════
  "4": [
    {
      id: "cns-u4-t1",
      title: "Cryptographic Hash Functions",
      progress: 0,
      status: "locked",
      content: `### Cryptographic Hash Functions\nCovers the Applications of Hash Functions and the Secure Hash Algorithm (SHA) — the core building blocks of data integrity in cryptography.`,
      questions: [
        {
          id: "cns-u4-t1-q1",
          question: "Explain the applications of cryptographic hash functions.",
          answers: {
            detailed:   u4t1q1Detailed,
            simplified: u4t1q1Simplified,
          },
          isFree: true,
        },
        {
          id: "cns-u4-t1-q2",
          question: "Explain the working of Secure Hash Algorithm (SHA).",
          answers: {
            detailed:   u4t1q2Detailed,
            simplified: u4t1q2Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "cns-u4-t2",
      title: "MAC and Digital Signatures",
      progress: 0,
      status: "locked",
      content: `### MAC and Digital Signatures\nCovers Message Authentication Requirements, Message Authentication Functions, Requirements for Message Authentication Codes, HMAC, DAA, CMAC, Digital Signatures, and the Digital Signature Standard (DSS).`,
      questions: [
        {
          id: "cns-u4-t2-q1",
          question: "Discuss message authentication requirements and functions.",
          answers: {
            detailed:   u4t2q1Detailed,
            simplified: u4t2q1Simplified,
          },
          isFree: true,
        },
        {
          id: "cns-u4-t2-q2",
          question: "Explain Message Authentication Codes (MAC) and their requirements.",
          answers: {
            detailed:   u4t2q2Detailed,
            simplified: u4t2q2Simplified,
          },
          isFree: false,
        },
        {
          id: "cns-u4-t2-q3",
          question: "Explain HMAC, DAA, and CMAC with suitable examples.",
          answers: {
            detailed:   u4t2q3Detailed,
            simplified: u4t2q3Simplified,
          },
          isFree: false,
        },
        {
          id: "cns-u4-t2-q4",
          question: "Explain digital signatures and their properties.",
          answers: {
            detailed:   u4t2q4Detailed,
            simplified: u4t2q4Simplified,
          },
          isFree: false,
        },
        {
          id: "cns-u4-t2-q5",
          question: "Explain Digital Signature Standard (DSS).",
          answers: {
            detailed:   u4t2q5Detailed,
            simplified: u4t2q5Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "cns-u4-t3",
      title: "Key Management and Distribution",
      progress: 0,
      status: "locked",
      content: `### Key Management and Distribution\nCovers the mechanisms for managing and distributing cryptographic keys — Distribution of Public Keys and X.509 Certificates.`,
      questions: [
        {
          id: "cns-u4-t3-q1",
          question: "Explain key management and distribution mechanisms.",
          answers: {
            detailed:   u4t3q1Detailed,
            simplified: u4t3q1Simplified,
          },
          isFree: true,
        },
        {
          id: "cns-u4-t3-q2",
          question: "Explain distribution of public keys with examples.",
          answers: {
            detailed:   u4t3q2Detailed,
            simplified: u4t3q2Simplified,
          },
          isFree: false,
        },
        {
          id: "cns-u4-t3-q3",
          question: "Explain X.509 certificates and their role in security.",
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
  // UNIT 5 — Internet Security
  // ════════════════════════════════════════════════════════════════════════════
  "5": [
    {
      id: "cns-u5-t1",
      title: "Internet Security",
      progress: 0,
      status: "locked",
      content: `### Internet Security\nCovers the foundational protocols for securing internet communication — Introduction to SSL and TLS, their architecture, and a comparison of both protocols.`,
      questions: [
        {
          id: "cns-u5-t1-q1",
          question: "Explain SSL and TLS protocols with their architecture.",
          answers: {
            detailed:   u5t1q1Detailed,
            simplified: u5t1q1Simplified,
          },
          isFree: true,
        },
        {
          id: "cns-u5-t1-q2",
          question: "Compare SSL and TLS.",
          answers: {
            detailed:   u5t1q2Detailed,
            simplified: u5t1q2Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "cns-u5-t2",
      title: "Email Security",
      progress: 0,
      status: "locked",
      content: `### Email Security\nCovers S/MIME — the standard for securing email communication through encryption and digital signatures.`,
      questions: [
        {
          id: "cns-u5-t2-q1",
          question: "Explain S/MIME and its role in email security.",
          answers: {
            detailed:   u5t2q1Detailed,
            simplified: u5t2q1Simplified,
          },
          isFree: true,
        },
      ],
    },

    {
      id: "cns-u5-t3",
      title: "Firewalls and Network Security",
      progress: 0,
      status: "locked",
      content: `### Firewalls and Network Security\nCovers the types and configuration of firewalls, along with Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) used to protect network infrastructure.`,
      questions: [
        {
          id: "cns-u5-t3-q1",
          question: "Explain different types of firewalls with examples.",
          answers: {
            detailed:   u5t3q1Detailed,
            simplified: u5t3q1Simplified,
          },
          isFree: true,
        },
        {
          id: "cns-u5-t3-q2",
          question: "Explain the configuration of firewalls in a network.",
          answers: {
            detailed:   u5t3q2Detailed,
            simplified: u5t3q2Simplified,
          },
          isFree: false,
        },
        {
          id: "cns-u5-t3-q3",
          question: "Explain Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) and compare them.",
          answers: {
            detailed:   u5t3q3Detailed,
            simplified: u5t3q3Simplified,
          },
          isFree: false,
        },
      ],
    },
  ],
};