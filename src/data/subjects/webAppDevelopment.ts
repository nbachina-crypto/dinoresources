import type { AiTopic } from "../aiSyllabus";
// ── Uncomment each import as you create the .md file ──────────────────────
import u3t1q1Detailed   from "../wadAnswers/u3-t1-q1-detailed.md?raw";
import u3t1q1Simplified from "../wadAnswers/u3-t1-q1-simplified.md?raw";
import u3t1q2Detailed   from "../wadAnswers/u3-t1-q2-detailed.md?raw";
import u3t1q2Simplified from "../wadAnswers/u3-t1-q2-simplified.md?raw";
import u3t1q3Detailed   from "../wadAnswers/u3-t1-q3-detailed.md?raw";
import u3t1q3Simplified from "../wadAnswers/u3-t1-q3-simplified.md?raw";
import u3t1q4Detailed   from "../wadAnswers/u3-t1-q4-detailed.md?raw";
import u3t1q4Simplified from "../wadAnswers/u3-t1-q4-simplified.md?raw";
import u3t1q5Detailed   from "../wadAnswers/u3-t1-q5-detailed.md?raw";
import u3t1q5Simplified from "../wadAnswers/u3-t1-q5-simplified.md?raw";
import u3t1q6Detailed   from "../wadAnswers/u3-t1-q6-detailed.md?raw";
import u3t1q6Simplified from "../wadAnswers/u3-t1-q6-simplified.md?raw";
import u3t1q7Detailed   from "../wadAnswers/u3-t1-q7-detailed.md?raw";
import u3t1q7Simplified from "../wadAnswers/u3-t1-q7-simplified.md?raw";
import u4t1q1Detailed   from "../wadAnswers/u4-t1-q1-detailed.md?raw";
import u4t1q1Simplified from "../wadAnswers/u4-t1-q1-simplified.md?raw";
import u4t1q2Detailed   from "../wadAnswers/u4-t1-q2-detailed.md?raw";
import u4t1q2Simplified from "../wadAnswers/u4-t1-q2-simplified.md?raw";
import u4t1q3Detailed   from "../wadAnswers/u4-t1-q3-detailed.md?raw";
import u4t1q3Simplified from "../wadAnswers/u4-t1-q3-simplified.md?raw";
import u4t2q1Detailed   from "../wadAnswers/u4-t2-q1-detailed.md?raw";
import u4t2q1Simplified from "../wadAnswers/u4-t2-q1-simplified.md?raw";
import u4t2q2Detailed   from "../wadAnswers/u4-t2-q2-detailed.md?raw";
import u4t2q2Simplified from "../wadAnswers/u4-t2-q2-simplified.md?raw";
import u4t3q1Detailed   from "../wadAnswers/u4-t3-q1-detailed.md?raw";
import u4t3q1Simplified from "../wadAnswers/u4-t3-q1-simplified.md?raw";
import u5t1q1Detailed   from "../wadAnswers/u5-t1-q1-detailed.md?raw";
import u5t1q1Simplified from "../wadAnswers/u5-t1-q1-simplified.md?raw";
import u5t2q1Detailed   from "../wadAnswers/u5-t2-q1-detailed.md?raw";
import u5t2q1Simplified from "../wadAnswers/u5-t2-q1-simplified.md?raw";
import u5t2q2Detailed   from "../wadAnswers/u5-t2-q2-detailed.md?raw";
import u5t2q2Simplified from "../wadAnswers/u5-t2-q2-simplified.md?raw";
import u5t2q3Detailed   from "../wadAnswers/u5-t2-q3-detailed.md?raw";
import u5t2q3Simplified from "../wadAnswers/u5-t2-q3-simplified.md?raw";
import u5t3q1Detailed   from "../wadAnswers/u5-t3-q1-detailed.md?raw";
import u5t3q1Simplified from "../wadAnswers/u5-t3-q1-simplified.md?raw";

import u5t3q2Detailed   from "../wadAnswers/u5-t3-q2-detailed.md?raw";
import u5t3q2Simplified from "../wadAnswers/u5-t3-q2-simplified.md?raw";
import u5t3q3Detailed   from "../wadAnswers/u5-t3-q3-detailed.md?raw";
import u5t3q3Simplified from "../wadAnswers/u5-t3-q3-simplified.md?raw";


// ── Continue importing answers for each question as you create the .md files ──

export const webAppDevelopment: Record<string, AiTopic[]> = {
  // ════════════════════════════════════════════════════════════════════════════
  // UNIT 3 — XML and JSON
  // ════════════════════════════════════════════════════════════════════════════
  "3": [
    {
      id: "wad-u3-t1",
      title: "XML and JSON",
      progress: 0,
      status: "locked",
      content: `### Unit 3 Syllabus — XML and JSON

**XML:** Syntax of XML, document structure, and document type definition, namespaces, XML schemas, document object model, presenting XML using CSS, XSLT, XPath, XQuery, FLOWR.

**JSON:** Features, JSON vs. XML, JSON data types, JSON objects, JSON arrays, JSON HTML.

**Practice:** Designing XML schemas and creating JSON objects for data representation.`,
      questions: [
        {
          id: "wad-u3-t1-q1",
          question: "Explain the syntax and basic document structure of XML.",
          answers: {
            detailed:   u3t1q1Detailed,
            simplified: u3t1q1Simplified,
          },
          isFree: true,
        },
        {
          id: "wad-u3-t1-q2",
          question: "Explain the concept of Namespaces and the Document Object Model (DOM) in XML.",
          answers: {
            detailed:   u3t1q3Detailed,
            simplified: u3t1q3Simplified,
          },
          isFree: false,
        },
        {
          id: "wad-u3-t1-q3",
          question: "Explain the role of Document Type Definition (DTD) and XML Schemas in XML.",
          answers: {
            detailed:   u3t1q2Detailed,
            simplified: u3t1q2Simplified,
          },
          isFree: false,
        },
        {
          id: "wad-u3-t1-q4",
          question: "Explain how to present XML data using CSS and XSLT.",
          answers: {
            detailed:   u3t1q4Detailed,
            simplified: u3t1q4Simplified,
          },
          isFree: false,
        },
        {
          id: "wad-u3-t1-q5",
          question: "Explain the usage of XPath, XQuery, and the FLOWR expression.",
          answers: {
            detailed:   u3t1q5Detailed,
            simplified: u3t1q5Simplified,
          },
          isFree: false,
        },
        {
          id: "wad-u3-t1-q6",
          question: "Explain the features of JSON and provide a detailed comparison between JSON and XML.",
          answers: {
            detailed:   u3t1q6Detailed,
            simplified: u3t1q6Simplified,
          },
          isFree: false,
        },
        {
          id: "wad-u3-t1-q7",
          question: "Explain JSON data types, objects, and arrays with suitable examples.",
          answers: {
            detailed:   u3t1q7Detailed,
            simplified: u3t1q7Simplified,
          },
          isFree: false,
        },
      ],
    },
  ],

  // ════════════════════════════════════════════════════════════════════════════
  // UNIT 4 — Server-side Processing with Java
  // ════════════════════════════════════════════════════════════════════════════
  "4": [
    {
      id: "wad-u4-t1",
      title: "Servlets",
      progress: 0,
      status: "locked",
      content: `### Servlets\nCovers the fundamentals of Java Servlets — Introduction to Servlet, Life Cycle of Servlet, and Servlet Methods used in web application development.`,
      questions: [
        {
          id: "wad-u4-t1-q1",
          question: "Explain the introduction and architecture of Java Servlets.",
          answers: {
            detailed:   u4t1q1Detailed,
            simplified: u4t1q1Simplified,
          },
          isFree: true,
        },
        {
          id: "wad-u4-t1-q2",
          question: "Explain the various stages in the Life Cycle of a Servlet.",
          answers: {
            detailed:   u4t1q2Detailed,
            simplified: u4t1q2Simplified,
          },
          isFree: false,
        },
        {
          id: "wad-u4-t1-q3",
          question: "Explain the primary Servlet methods used in web application development.",
          answers: {
            detailed:   u4t1q3Detailed,
            simplified: u4t1q3Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "wad-u4-t2",
      title: "Java Server Pages",
      progress: 0,
      status: "locked",
      content: `### Java Server Pages\nCovers Java Server Pages (JSP) and working with the Tomcat web server — the key technologies for server-side rendering in Java web development.`,
      questions: [
        {
          id: "wad-u4-t2-q1",
          question: "Explain the features and advantages of Java Server Pages (JSP).",
          answers: {
            detailed:   u4t2q1Detailed,
            simplified: u4t2q1Simplified,
          },
          isFree: true,
        },
        {
          id: "wad-u4-t2-q2",
          question: "Explain the steps involved in working with and configuring the Tomcat web server.",
          answers: {
            detailed:   u4t2q2Detailed,
            simplified: u4t2q2Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "wad-u4-t3",
      title: "Database Connectivity",
      progress: 0,
      status: "locked",
      content: `### Database Connectivity\nCovers database connectivity in Java web applications — Servlets, JSP, JDBC, and the practice of SQL Queries for interacting with databases.`,
      questions: [
        {
          id: "wad-u4-t3-q1",
          question: "Explain how to establish database connectivity using JDBC with Servlets and JSP.",
          answers: {
            detailed:   u4t3q1Detailed,
            simplified: u4t3q1Simplified,
          },
          isFree: true,
        },
      ],
    },
  ],

  // ════════════════════════════════════════════════════════════════════════════
  // UNIT 5 — Web Application Frameworks
  // ════════════════════════════════════════════════════════════════════════════
  "5": [
    {
      id: "wad-u5-t1",
      title: "Web Application Frameworks",
      progress: 0,
      status: "locked",
      content: `### Web Application Frameworks\nCovers the introduction to Web Application Development Frameworks and the different Types of Frameworks available for modern web development.`,
      questions: [
        {
          id: "wad-u5-t1-q1",
          question: "Explain the different types of Web application development frameworks.",
          answers: {
            detailed:   u5t1q1Detailed,
            simplified: u5t1q1Simplified,
          },
          isFree: true,
        },
      ],
    },

    {
      id: "wad-u5-t2",
      title: "AngularJS",
      progress: 0,
      status: "locked",
      content: `### AngularJS\nCovers the key features of AngularJS — Introduction, Expressions, Modules, Data Binding, Controllers, DOM, Events, Forms, and Validations.`,
      questions: [
        {
          id: "wad-u5-t2-q1",
          question: "Explain the core features of AngularJS, including expressions and modules.",
          answers: {
            detailed:   u5t2q1Detailed,
            simplified: u5t2q1Simplified,
          },
          isFree: true,
        },
        {
          id: "wad-u5-t2-q2",
          question: "Explain the concepts of Data Binding and Controllers in AngularJS.",
          answers: {
            detailed:   u5t2q2Detailed,
            simplified: u5t2q2Simplified,
          },
          isFree: false,
        },
        {
          id: "wad-u5-t2-q3",
          question: "Explain the handling of DOM, Events, and Form Validations in AngularJS.",
          answers: {
            detailed:   u5t2q3Detailed,
            simplified: u5t2q3Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "wad-u5-t3",
      title: "ReactJS",
      progress: 0,
      status: "locked",
      content: `### ReactJS\nCovers the fundamentals of ReactJS — Introduction, Components, Styling, Form Programming, Building, and Deployment of React applications.`,
      questions: [
        {
          id: "wad-u5-t3-q1",
          question: "Explain the introduction to ReactJS and its component-based architecture.",
          answers: {
            detailed:   u5t3q1Detailed,
            simplified: u5t3q1Simplified,
          },
          isFree: true,
        },
        {
          id: "wad-u5-t3-q2",
          question: "Explain the process of styling and form programming in ReactJS.",
          answers: {
            detailed:   u5t3q2Detailed,
            simplified: u5t3q2Simplified,
          },
          isFree: false,
        },
        {
          id: "wad-u5-t3-q3",
          question: "Explain the building and deployment process for a ReactJS application.",
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