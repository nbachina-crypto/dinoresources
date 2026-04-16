import type { AiTopic } from "../aiSyllabus";
import u3t1q1Detailed   from "../aiAnswers/u-3-t1-q1-detailed.md?raw";
import u3t1q1Simplified from "../aiAnswers/u-3-t1-q1-simplified.md?raw";
import u3t1q2Detailed   from "../aiAnswers/u-3-t1-q2-detailed.md?raw";
import u3t1q2Simplified from "../aiAnswers/u-3-t1-q2-simplified.md?raw";
import u3t1q3Detailed   from "../aiAnswers/u-3-t1-q3-detailed.md?raw";
import u3t1q3Simplified from "../aiAnswers/u-3-t1-q3-simplified.md?raw";
import u3t1q4Detailed   from "../aiAnswers/u-3-t1-q4-detailed.md?raw";
import u3t1q4Simplified from "../aiAnswers/u-3-t1-q4-simplified.md?raw";
import u3t1q5Detailed   from "../aiAnswers/u-3-t1-q5-detailed.md?raw";
import u3t1q5Simplified from "../aiAnswers/u-3-t1-q5-simplified.md?raw";
import u3t2q1Detailed   from "../aiAnswers/u-3-t2-q1-detailed.md?raw";
import u3t2q1Simplified from "../aiAnswers/u-3-t2-q1-simplified.md?raw";
import u3t2q2Detailed   from "../aiAnswers/u-3-t2-q2-detailed.md?raw";
import u3t2q2Simplified from "../aiAnswers/u-3-t2-q2-simplified.md?raw";
import u3t3q1Detailed   from "../aiAnswers/u-3-t3-q1-detailed.md?raw";
import u3t3q1Simplified from "../aiAnswers/u-3-t3-q1-simplified.md?raw";
import u3t3q2Detailed   from "../aiAnswers/u-3-t3-q2-detailed.md?raw";
import u3t3q2Simplified from "../aiAnswers/u-3-t3-q2-simplified.md?raw";
import u4t1q1Detailed   from "../aiAnswers/u-4-t1-q1-detailed.md?raw";
import u4t1q1Simplified from "../aiAnswers/u-4-t1-q1-simplified.md?raw";
import u4t1q2Detailed   from "../aiAnswers/u-4-t1-q2-detailed.md?raw";
import u4t1q2Simplified from "../aiAnswers/u-4-t1-q2-simplified.md?raw";
import u4t2q1Detailed   from "../aiAnswers/u-4-t2-q1-detailed.md?raw";
import u4t2q1Simplified from "../aiAnswers/u-4-t2-q1-simplified.md?raw";
import u4t2q2Detailed   from "../aiAnswers/u-4-t2-q2-detailed.md?raw";
import u4t2q2Simplified from "../aiAnswers/u-4-t2-q2-simplified.md?raw";
import u4t3q1Detailed   from "../aiAnswers/u-4-t3-q1-detailed.md?raw";
import u4t3q1Simplified from "../aiAnswers/u-4-t3-q1-simplified.md?raw";
import u4t3q2Detailed   from "../aiAnswers/u-4-t3-q2-detailed.md?raw";
import u4t3q2Simplified from "../aiAnswers/u-4-t3-q2-simplified.md?raw";
import u4t3q3Detailed   from "../aiAnswers/u-4-t3-q3-detailed.md?raw";
import u4t3q3Simplified from "../aiAnswers/u-4-t3-q3-simplified.md?raw";
import u4t3q4Detailed   from "../aiAnswers/u-4-t3-q4-detailed.md?raw";
import u4t3q4Simplified from "../aiAnswers/u-4-t3-q4-simplified.md?raw";
import u5t1q1Detailed   from "../aiAnswers/u-5-t1-q1-detailed.md?raw";
import u5t1q1Simplified from "../aiAnswers/u-5-t1-q1-simplified.md?raw";
import u5t1q2Detailed   from "../aiAnswers/u-5-t1-q2-detailed.md?raw";
import u5t1q2Simplified from "../aiAnswers/u-5-t1-q2-simplified.md?raw";
import u5t1q3Detailed   from "../aiAnswers/u-5-t1-q3-detailed.md?raw";
import u5t1q3Simplified from "../aiAnswers/u-5-t1-q3-simplified.md?raw";
import u5t1q4Detailed   from "../aiAnswers/u-5-t1-q4-detailed.md?raw";
import u5t1q4Simplified from "../aiAnswers/u-5-t1-q4-simplified.md?raw";
import u5t2q1Detailed   from "../aiAnswers/u-5-t2-q1-detailed.md?raw";
import u5t2q1Simplified from "../aiAnswers/u-5-t2-q1-simplified.md?raw";
import u5t2q2Detailed   from "../aiAnswers/u-5-t2-q2-detailed.md?raw";
import u5t2q2Simplified from "../aiAnswers/u-5-t2-q2-simplified.md?raw";
import u5t2q3Detailed   from "../aiAnswers/u-5-t2-q3-detailed.md?raw";
import u5t2q3Simplified from "../aiAnswers/u-5-t2-q3-simplified.md?raw";


export const artificialIntelligence: Record<string, AiTopic[]> = {

  // ════════════════════════════════════════════════════════════════════════════
  // UNIT 3 — Adversarial Search and Logical Agents
  // ════════════════════════════════════════════════════════════════════════════
  "3": [
    {
      id: "ai-u3-t1",
      title: "Adversarial Search",
      progress: 0,
      status: "locked",
      content: `### Adversarial Search\nCovers the core concepts of Adversarial Search — 2-Player Games, Optimal Decisions in Games, AND-OR Graphs, Minimax Algorithm, Alpha-Beta Pruning, and Chance-Based Games.`,
      questions: [
        {
          id: "ai-u3-t1-q1",
          question: "Explain the concept of Adversarial Search and its role in 2-player games.",
          answers: {
            detailed:   u3t1q1Detailed,
            simplified: u3t1q1Simplified,
          },
          isFree: true,
        },
        {
          id: "ai-u3-t1-q2",
          question: "Explain the Minimax algorithm with a neat block diagram or flowchart.",
          answers: {
            detailed:   u3t1q2Detailed,
            simplified: u3t1q2Simplified,
          },
          isFree: false,
        },
        {
          id: "ai-u3-t1-q3",
          question: "Explain Alpha-Beta Pruning and how it optimizes the search space.",
          answers: {
            detailed:   u3t1q3Detailed,
            simplified: u3t1q3Simplified,
          },
          isFree: false,
        },
        {
          id: "ai-u3-t1-q4",
          question: "Explain the concept of AND-OR graphs in the context of optimal game decisions.",
          answers: {
            detailed:   u3t1q4Detailed,
            simplified: u3t1q4Simplified,
          },
          isFree: false,
        },
        {
          id: "ai-u3-t1-q5",
          question: "Describe the handling of chance-based games in artificial intelligence.",
          answers: {
            detailed:   u3t1q5Detailed,
            simplified: u3t1q5Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "ai-u3-t2",
      title: "CSP & Constraint Networks",
      progress: 0,
      status: "locked",
      content: `### CSP & Constraint Networks\nCovers Constraint Satisfaction Problems (CSP), the structure of Constraint Networks, and techniques for Solving CSPs using search methods.`,
      questions: [
        {
          id: "ai-u3-t2-q1",
          question: "Explain Constraint Satisfaction Problems (CSP) and the structure of Constraint Networks.",
          answers: {
            detailed:   u3t2q1Detailed,
            simplified: u3t2q1Simplified,
          },
          isFree: true,
        },
        {
          id: "ai-u3-t2-q2",
          question: "Explain the process of solving CSPs using search techniques.",
          answers: {
            detailed:   u3t2q2Detailed,
            simplified: u3t2q2Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "ai-u3-t3",
      title: "Logical Agents",
      progress: 0,
      status: "locked",
      content: `### Logical Agents\nCovers Knowledge-based Agents, Propositional Logic, and Propositional Theorem Proving via Inference — the foundational building blocks of logical reasoning in AI.`,
      questions: [
        {
          id: "ai-u3-t3-q1",
          question: "Explain the architecture and components of Knowledge-based Agents.",
          answers: {
            detailed:   u3t3q1Detailed,
            simplified: u3t3q1Simplified,
          },
          isFree: true,
        },
        {
          id: "ai-u3-t3-q2",
          question: "Explain Propositional Logic and the process of Propositional Theorem Proving via Inference.",
          answers: {
            detailed:   u3t3q2Detailed,
            simplified: u3t3q2Simplified,
          },
          isFree: false,
        },
      ],
    },
  ],

  // ════════════════════════════════════════════════════════════════════════════
  // UNIT 4 — First-Order Logic
  // ════════════════════════════════════════════════════════════════════════════
  "4": [
    {
      id: "ai-u4-t1",
      title: "Propositional Logic",
      progress: 0,
      status: "locked",
      content: `### Propositional Logic\nCovers advanced inference techniques in Propositional Logic — Proof by Resolution, Forward Chaining, and Backward Chaining.`,
      questions: [
        {
          id: "ai-u4-t1-q1",
          question: "Explain Proof by Resolution in Propositional Logic with an example.",
          answers: {
            detailed:   u4t1q1Detailed,
            simplified: u4t1q1Simplified,
          },
          isFree: true,
        },
        {
          id: "ai-u4-t1-q2",
          question: "Compare and contrast Forward Chaining and Backward Chaining in inference.",
          answers: {
            detailed:   u4t1q2Detailed,
            simplified: u4t1q2Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "ai-u4-t2",
      title: "First-Order Logic",
      progress: 0,
      status: "locked",
      content: `### First-Order Logic\nCovers the foundations of First-Order Logic (FOL) — Syntax and Semantics, Models for First-Order Logic, and Quantifiers.`,
      questions: [
        {
          id: "ai-u4-t2-q1",
          question: "Explain the Syntax and Semantics of First-Order Logic (FOL).",
          answers: {
            detailed:   u4t2q1Detailed,
            simplified: u4t2q1Simplified,
          },
          isFree: true,
        },
        {
          id: "ai-u4-t2-q2",
          question: "Explain the concept of Models and Quantifiers in First-Order Logic.",
          answers: {
            detailed:   u4t2q2Detailed,
            simplified: u4t2q2Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "ai-u4-t3",
      title: "Inference in First-Order Logic",
      progress: 0,
      status: "locked",
      content: `### Inference in First-Order Logic\nCovers inference techniques within FOL — Propositional vs. First-Order Inference, Unification and Lifting, Forward Chaining, Backward Chaining, and Resolution in First-Order Logic.`,
      questions: [
        {
          id: "ai-u4-t3-q1",
          question: "Explain the differences between Propositional Inference and First-Order Inference.",
          answers: {
            detailed:   u4t3q1Detailed,
            simplified: u4t3q1Simplified,
          },
          isFree: true,
        },
        {
          id: "ai-u4-t3-q2",
          question: "Explain the concept of Unification and Lifting in FOL.",
          answers: {
            detailed:   u4t3q2Detailed,
            simplified: u4t3q2Simplified,
          },
          isFree: false,
        },
        {
          id: "ai-u4-t3-q3",
          question: "Explain how Forward and Backward Chaining work within First-Order Logic.",
          answers: {
            detailed:   u4t3q3Detailed,
            simplified: u4t3q3Simplified,
          },
          isFree: false,
        },
        {
          id: "ai-u4-t3-q4",
          question: "Explain Resolution in First-Order Logic with a suitable example.",
          answers: {
            detailed:   u4t3q4Detailed,
            simplified: u4t3q4Simplified,
          },
          isFree: false,
        },
      ],
    },
  ],

  // ════════════════════════════════════════════════════════════════════════════
  // UNIT 5 — Uncertainty and Learning
  // ════════════════════════════════════════════════════════════════════════════
  "5": [
    {
      id: "ai-u5-t1",
      title: "Uncertainty",
      progress: 0,
      status: "locked",
      content: `### Uncertainty\nCovers the concepts of reasoning under uncertainty — Acting under Uncertainty, Conditional Probabilities, Full Joint Distributions, Bayes Rule and its Applications, and Bayesian Networks.`,
      questions: [
        {
          id: "ai-u5-t1-q1",
          question: "Explain the necessity and challenges of acting under uncertainty.",
          answers: {
            detailed:   u5t1q1Detailed,
            simplified: u5t1q1Simplified,
          },
          isFree: true,
        },
        {
          id: "ai-u5-t1-q2",
          question: "Explain Conditional Probabilities and the concept of Full Joint Distributions.",
          answers: {
            detailed:   u5t1q2Detailed,
            simplified: u5t1q2Simplified,
          },
          isFree: false,
        },
        {
          id: "ai-u5-t1-q3",
          question: "Explain Bayes Rule and its various applications in AI systems.",
          answers: {
            detailed:   u5t1q3Detailed,
            simplified: u5t1q3Simplified,
          },
          isFree: false,
        },
        {
          id: "ai-u5-t1-q4",
          question: "Explain the construction and significance of Bayesian Networks.",
          answers: {
            detailed:   u5t1q4Detailed,
            simplified: u5t1q4Simplified,
          },
          isFree: false,
        },
      ],
    },

    {
      id: "ai-u5-t2",
      title: "Basics of Learning",
      progress: 0,
      status: "locked",
      content: `### Basics of Learning\nCovers the foundational concepts of machine learning — Supervised Learning, Learning Decision Trees, Evaluating and Choosing the Best Hypothesis, and Unsupervised Learning.`,
      questions: [
        {
          id: "ai-u5-t2-q1",
          question: "Explain the fundamental concepts of Supervised Learning and Unsupervised Learning.",
          answers: {
            detailed:   u5t2q1Detailed,
            simplified: u5t2q1Simplified,
          },
          isFree: true,
        },
        {
          id: "ai-u5-t2-q2",
          question: "Explain the process of Learning Decision Trees from a dataset.",
          answers: {
            detailed:   u5t2q2Detailed,
            simplified: u5t2q2Simplified,
          },
          isFree: false,
        },
        {
          id: "ai-u5-t2-q3",
          question: "Describe the methods for evaluating and choosing the best hypothesis in learning models.",
          answers: {
            detailed:   u5t2q3Detailed,
            simplified: u5t2q3Simplified,
          },
          isFree: false,
        },
      ],
    },
  ],
};