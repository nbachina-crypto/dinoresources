// ============================================================
//  aiSyllabus.ts  –  Single source of truth for Study-with-AI
// ============================================================
//
//  SCHEMA CHANGES (what was done and why)
//  ──────────────────────────────────────
//  1. REMOVED "2mark" / "5mark" / "8mark" grouping.
//     Every topic now has a plain  PracticeQuestion[]  array.
//     The mark-based grouping was a leftover design idea that
//     never fit the actual exam format; removing it also lets
//     GeneratePanel.getFlattenedQuestions() become a no-op.
//
//  2. UNIFIED question shape.  Every question now has:
//       id          – unique string used as React key & DB ref
//       question    – the question text (unchanged)
//       answers     – { detailed, simplified }
//                     "detailed" = thorough exam-ready answer
//                     "simplified" = plain-English quick answer
//       isFree      – controls the paywall gate in the UI.
//                     The FIRST question of every topic is free
//                     so visitors get a real preview before paying.
//
//  3. AiTopic.questions is now ALWAYS PracticeQuestion[].
//     The old union  (PracticeQuestion[] | Record<string, ...>)
//     that caused the flatten hacks in TopicDetail and
//     GeneratePanel is gone.
//
//  4. "1" and "2" unit keys are kept as empty arrays because
//     SubjectDrawerAi only renders UNITS [3,4,5]; keeping the
//     keys means the Record shape stays consistent and a future
//     unit expansion won't require a schema change.
//
//  NOTE: answer text below is intentionally concise dummy data.
//  Replace with your full exam-quality content before launch.
// ============================================================

export type TopicStatus = "completed" | "in-progress" | "locked";

export interface PracticeQuestion {
  id: string;
  question: string;
  answers: {
    detailed: string;    // In-depth, exam-ready explanation
    simplified: string;  // Plain-English, quick-read version
  };
  isFree: boolean; // true → visible without subscription (preview)
}

export interface AiTopic {
  id: string;
  title: string;
  progress: number;
  status: TopicStatus;
  content: string;          // Markdown shown in TopicDetail typewriter
  questions: PracticeQuestion[]; // Always a flat array — no grouping
}

export const aiSyllabus: Record<string, Record<string, AiTopic[]>> = {

  // ─────────────────────────────────────────────────────────────
  // ARTIFICIAL INTELLIGENCE
  // ─────────────────────────────────────────────────────────────
  "Artificial intelligence": {
    "1": [], "2": [],
    "3": [
      {
        id: "ai-u3-t1",
        title: "Knowledge Representation & Reasoning",
        progress: 0, status: "locked",
        content: `### Knowledge Representation
Knowledge representation is how AI agents store and manipulate information. It relies on logic to deduce new facts.

**Propositional Logic** deals with simple True/False statements. Each symbol represents a complete fact (e.g., "It is raining").

**First-Order Logic (FOL)** is more expressive — it introduces *variables*, *predicates*, and *quantifiers* (∀ For All, ∃ There Exists) to describe relationships between objects (e.g., ∀x: Human(x) → Mortal(x)).`,
        questions: [
          {
            id: "ai-u3-t1-q1",
            question: "What is the difference between Propositional Logic and First-Order Logic?",
            answers: {
              detailed: "Propositional Logic works with atomic, indivisible statements that are either true or false (e.g., P = 'It is raining'). It uses connectives like AND, OR, NOT, and IMPLIES. It cannot express relationships between objects or generalise over collections. First-Order Logic (FOL) extends this by introducing *predicates* (e.g., Loves(John, Mary)), *variables* that range over objects, and *quantifiers* — Universal (∀) meaning 'for all' and Existential (∃) meaning 'there exists'. This makes FOL far more expressive and suitable for real-world AI knowledge bases.",
              simplified: "Propositional Logic uses simple True/False facts with no variables. First-Order Logic adds variables, objects, and quantifiers (for all, there exists) so you can express complex real-world relationships."
            },
            isFree: true   // ← preview question; visible without subscription
          },
          {
            id: "ai-u3-t1-q2",
            question: "What is Forward Chaining and how does it differ from Backward Chaining?",
            answers: {
              detailed: "Forward Chaining is a data-driven inference strategy. The inference engine starts from known facts and applies production rules to derive new facts until the goal is reached or no more rules can be applied. It is breadth-first in nature and suitable when all data is available upfront (e.g., medical diagnosis systems). Backward Chaining is goal-driven: the engine starts from the goal and works backward, trying to find facts that satisfy the conditions needed to prove the goal. It is depth-first and more efficient when the goal is clearly defined. Prolog uses backward chaining.",
              simplified: "Forward chaining starts from facts and works towards a goal (data-driven). Backward chaining starts from a goal and works back to find supporting facts (goal-driven)."
            },
            isFree: false
          },
          {
            id: "ai-u3-t1-q3",
            question: "Define Semantic Networks and Frames as knowledge representation techniques.",
            answers: {
              detailed: "A Semantic Network represents knowledge as a directed graph where nodes represent concepts/objects and edges represent relationships (e.g., 'is-a', 'has-a'). They make inheritance natural — a 'Canary is-a Bird' node automatically inherits Bird properties. Frames are a structured representation borrowed from Minsky's frame theory. Each frame is a data structure (like a class) with slots (attributes) and fillers (values). Frames support default values and procedural attachment (triggers). They are the conceptual predecessor of modern Object-Oriented Programming.",
              simplified: "Semantic Networks use graph nodes and edges to show how concepts relate. Frames are like record structures with slots for properties — similar to classes in OOP."
            },
            isFree: false
          }
        ]
      },
      {
        id: "ai-u3-t2",
        title: "Search Strategies & Problem Solving",
        progress: 0, status: "locked",
        content: `### Problem Solving as Search
AI agents solve problems by searching through a *state space* — the set of all possible configurations.

**Uninformed Search** (Blind Search) has no knowledge of the goal's location:
- **BFS** — explores level by level; guarantees shortest path.
- **DFS** — goes deep first; memory-efficient but may miss optimal path.

**Informed Search** uses a *heuristic* h(n) to estimate cost to goal:
- **A\* Search** — evaluates f(n) = g(n) + h(n); optimal if h is admissible.`,
        questions: [
          {
            id: "ai-u3-t2-q1",
            question: "What is an admissible heuristic in A* search?",
            answers: {
              detailed: "A heuristic h(n) is admissible if it *never overestimates* the true cost to reach the goal from node n. Formally: h(n) ≤ h*(n) where h*(n) is the actual cost. Admissibility guarantees that A* will always find the optimal solution. A classic example is using straight-line (Euclidean) distance as a heuristic for road-map navigation — the actual road distance can only be equal to or greater than the straight-line distance, so the heuristic never overestimates.",
              simplified: "An admissible heuristic never overestimates the real cost to the goal. This property guarantees A* finds the shortest path."
            },
            isFree: true
          },
          {
            id: "ai-u3-t2-q2",
            question: "Compare BFS and DFS in terms of completeness, optimality, time, and space complexity.",
            answers: {
              detailed: "BFS: **Complete** (always finds a solution if one exists), **Optimal** (finds shortest path for uniform costs), Time O(b^d), Space O(b^d) — stores all frontier nodes at current depth. DFS: **Complete** only for finite state spaces, **Not Optimal** (may find a longer solution first), Time O(b^m) where m is max depth, Space O(bm) — stores only the current path. DFS is dramatically better on memory; BFS is preferred when optimality matters.",
              simplified: "BFS is complete and optimal but uses a lot of memory. DFS is memory-efficient but not guaranteed to find the shortest path."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "ai-u4-t1",
        title: "Planning & Machine Learning Basics",
        progress: 0, status: "locked",
        content: `### AI Planning
Planning involves finding a sequence of actions to reach a goal from an initial state. The **STRIPS** representation defines states as sets of facts, and actions have *preconditions* and *effects*.

### Machine Learning Overview
ML allows agents to improve through experience without explicit programming:
- **Supervised Learning** — learns from labelled data (input→output pairs).
- **Unsupervised Learning** — finds hidden patterns in unlabelled data.
- **Reinforcement Learning** — learns by receiving rewards or penalties from an environment.`,
        questions: [
          {
            id: "ai-u4-t1-q1",
            question: "What is Supervised Learning? Give two examples.",
            answers: {
              detailed: "Supervised Learning is a type of machine learning where the model is trained on a *labelled dataset* — one where each input example is paired with the correct output. The model learns a mapping function f(x) → y by minimising prediction error. After training, it generalises to unseen inputs. Examples: (1) **Email Spam Detection** — emails are labelled 'spam' or 'not spam' and the model learns features that distinguish them. (2) **House Price Prediction** — historical data with features (size, location) and known prices trains a regression model.",
              simplified: "Supervised learning trains on data where the correct answers are already known. Example: teaching a model to classify emails as spam or not spam."
            },
            isFree: true
          },
          {
            id: "ai-u4-t1-q2",
            question: "Explain Reinforcement Learning with the concept of reward and policy.",
            answers: {
              detailed: "In Reinforcement Learning (RL), an *agent* interacts with an *environment* by taking *actions*. After each action the environment returns a *reward* (positive for good actions, negative/zero for bad). The agent's objective is to learn a *policy* π — a mapping from states to actions — that maximises the cumulative reward over time (the return). The agent explores by trial-and-error, gradually exploiting actions that yield higher rewards. Classic example: AlphaGo learned to play Go purely from reward signals (winning/losing), with no human-labelled moves.",
              simplified: "An RL agent learns by trial and error. It gets rewards for good actions and penalties for bad ones, and over time learns the best strategy (policy) to maximise total reward."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "ai-u5-t1",
        title: "Expert Systems & Advanced AI",
        progress: 0, status: "locked",
        content: `### Expert Systems
Expert systems are rule-based programs that emulate a human specialist's decision-making. They consist of:
- **Knowledge Base** — stores domain facts and IF-THEN rules.
- **Inference Engine** — applies rules to the knowledge base to derive conclusions.
- **User Interface** — allows non-experts to query the system.

Modern AI blends expert systems with Deep Learning in domains like medical diagnosis, legal research, and financial advisory.`,
        questions: [
          {
            id: "ai-u5-t1-q1",
            question: "What are the two main components of an Expert System and what does each do?",
            answers: {
              detailed: "1. **Knowledge Base**: Stores all domain-specific knowledge as *facts* (assertions about the world) and *rules* (IF-THEN production rules, e.g., IF fever AND cough THEN suspect_flu). It is built by interviewing human experts. 2. **Inference Engine**: The reasoning mechanism that applies the rules in the knowledge base to the current set of facts to derive new conclusions. It uses either *forward chaining* (data-driven, derive all possible conclusions) or *backward chaining* (goal-driven, prove a specific hypothesis). Together they separate knowledge from reasoning logic, making the system maintainable.",
              simplified: "The Knowledge Base stores facts and rules from human experts. The Inference Engine applies those rules to reach conclusions — like the 'brain' that uses the 'memory'."
            },
            isFree: true
          },
          {
            id: "ai-u5-t1-q2",
            question: "What are the limitations of Expert Systems?",
            answers: {
              detailed: "1. **Knowledge Acquisition Bottleneck** — Extracting knowledge from human experts is time-consuming and difficult; experts often struggle to articulate tacit knowledge. 2. **Brittleness** — They fail unpredictably outside their narrow domain since they have no common sense. 3. **No Learning** — Classical expert systems cannot learn or update from new data; rules must be manually edited. 4. **Scalability** — As the rule base grows, conflicts and redundancies emerge. 5. **Maintenance** — Keeping the knowledge base current requires continuous expert involvement.",
              simplified: "Expert systems are hard to build (knowledge extraction is slow), don't learn on their own, and perform poorly outside their specific domain."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // COMPILER DESIGN
  // ─────────────────────────────────────────────────────────────
  "Compiler Design": {
    "1": [], "2": [],
    "3": [
      {
        id: "cd-u3-t1",
        title: "Syntax-Directed Translation & Intermediate Code",
        progress: 0, status: "locked",
        content: `### Syntax-Directed Translation (SDT)
SDT attaches semantic rules (actions) to grammar productions. When the parser reduces or expands a production, the associated action fires, computing *attributes* for parse-tree nodes.

### Intermediate Code Generation
The compiler converts the source AST into a machine-independent intermediate form — commonly **Three-Address Code (TAC)**, where each instruction has at most three operands:
\`\`\`
t1 = a + b
t2 = t1 * c
\`\`\`
This layer decouples the front-end (parsing) from the back-end (machine code), enabling target-independent optimisation.`,
        questions: [
          {
            id: "cd-u3-t1-q1",
            question: "Why do compilers generate Intermediate Code instead of directly generating target machine code?",
            answers: {
              detailed: "Intermediate Code (IC) provides a clean separation between the language-specific front-end (lexer, parser, semantic analyser) and the machine-specific back-end (code generator). This has three key benefits: (1) **Portability** — the same front-end can target multiple architectures by swapping only the back-end. (2) **Optimisation** — machine-independent optimisations (constant folding, dead code elimination) are easier to apply on IC than on raw assembly. (3) **Retargetability** — a new target CPU requires only a new back-end, not a rewrite of the entire compiler.",
              simplified: "Intermediate code separates source-language logic from machine details, making it easy to optimise code and support multiple target architectures without rewriting the whole compiler."
            },
            isFree: true
          },
          {
            id: "cd-u3-t1-q2",
            question: "What is a Synthesised Attribute vs an Inherited Attribute in SDT?",
            answers: {
              detailed: "In Attribute Grammars, each grammar symbol can carry attributes. A **Synthesised Attribute** of a node N is computed from the attributes of N's *children*. It flows bottom-up in the parse tree. Example: the type of an expression is synthesised from its operands. An **Inherited Attribute** of a node N is computed from the attributes of N's *parent* and *siblings*. It flows top-down. Example: the symbol table environment passed down to a block statement. S-attributed grammars use only synthesised attributes and are easiest to evaluate with a bottom-up parser.",
              simplified: "Synthesised attributes bubble up from children to parent (bottom-up). Inherited attributes are passed down from parent to children (top-down)."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "cd-u4-t1",
        title: "Code Optimization",
        progress: 0, status: "locked",
        content: `### Code Optimization
The goal is to transform intermediate code so the resulting machine code is faster or uses less memory, *without changing the program's output*.

Key techniques:
- **Constant Folding** — evaluates constant expressions at compile time: \`x = 2 * 3\` → \`x = 6\`.
- **Dead Code Elimination** — removes unreachable or result-unused code.
- **Common Subexpression Elimination (CSE)** — avoids recomputing the same expression.
- **Loop Invariant Code Motion** — moves computations that don't change inside a loop to outside it.`,
        questions: [
          {
            id: "cd-u4-t1-q1",
            question: "What is Dead Code Elimination and why is it important?",
            answers: {
              detailed: "Dead Code is any code whose removal does not affect the observable behaviour of a program. Two kinds: (1) *Unreachable code* — code that can never be executed (e.g., statements after an unconditional return or in an if(false) block). (2) *Useless code* — code whose computed result is never used. Dead Code Elimination (DCE) removes both kinds. Importance: it reduces binary size, improves cache utilisation, and speeds up subsequent optimisation passes (fewer instructions to analyse).",
              simplified: "Dead code is code that never runs or whose result is never used. Eliminating it reduces file size and speeds up the program."
            },
            isFree: true
          },
          {
            id: "cd-u4-t1-q2",
            question: "Explain Loop Invariant Code Motion with an example.",
            answers: {
              detailed: "A *loop invariant* computation is one whose operands do not change across loop iterations — so its result is the same every time. Loop Invariant Code Motion (LICM) moves such computations *before* the loop, computing them once instead of on every iteration. Example:\n```\n// Before LICM\nfor (i = 0; i < n; i++) {\n  x = y * z;   // y, z unchanged in loop — invariant!\n  a[i] = x + i;\n}\n// After LICM\nx = y * z;     // hoisted out\nfor (i = 0; i < n; i++) {\n  a[i] = x + i;\n}\n```\nThis saves n−1 multiplications.",
              simplified: "If a calculation inside a loop gives the same result every iteration, move it outside the loop. This saves repeating the same work n times."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "cd-u5-t1",
        title: "Target Code Generation",
        progress: 0, status: "locked",
        content: `### Code Generation
The final compiler phase maps optimised intermediate code to the target machine's instruction set.

Three core sub-problems:
1. **Instruction Selection** — choosing the right assembly instruction(s) for each IR operation.
2. **Register Allocation** — assigning frequently-used variables to the limited set of CPU registers (spilling to memory when registers run out).
3. **Instruction Scheduling** — reordering instructions to minimise pipeline stalls while preserving program semantics.`,
        questions: [
          {
            id: "cd-u5-t1-q1",
            question: "What is Register Allocation and why is it challenging?",
            answers: {
              detailed: "Register Allocation is the compiler phase that decides which program variables reside in fast CPU registers versus slower main memory. A program may use hundreds of variables, but a typical CPU has only 8–32 general-purpose registers. The allocator builds an *interference graph* where each variable is a node and two nodes share an edge if their live ranges overlap (they're both needed simultaneously). Allocation then becomes a *graph colouring* problem with k colours (registers). Graph colouring is NP-complete in general, so compilers use heuristics (e.g., Chaitin's algorithm). Variables that cannot be coloured are *spilled* to the stack, incurring memory-access overhead.",
              simplified: "Register allocation decides which variables live in fast CPU registers. Since registers are limited, it's like a graph-colouring puzzle. Variables that don't fit are stored in slower memory (spilled)."
            },
            isFree: true
          },
          {
            id: "cd-u5-t1-q2",
            question: "What is Instruction Scheduling and what problem does it solve?",
            answers: {
              detailed: "Modern CPUs are *pipelined* — they begin executing the next instruction before the current one finishes. If a later instruction depends on the result of the current one, the pipeline must stall (insert 'bubble' cycles) waiting for the result. Instruction Scheduling reorders independent instructions to fill these bubbles, improving throughput without changing the program's result. For example, if a load from memory (high latency) is followed immediately by an arithmetic operation on the loaded value, the scheduler inserts an unrelated instruction between them to hide the memory latency.",
              simplified: "CPUs execute instructions in parallel stages (pipeline). Instruction scheduling reorders code to avoid stalls caused by one instruction waiting on the result of another."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // CRYPTOGRAPHY AND NETWORK SECURITY
  // ─────────────────────────────────────────────────────────────
  "Cryptography and Network Security": {
    "1": [], "2": [],
    "3": [
      {
        id: "cns-u3-t1",
        title: "Public Key Cryptography & RSA Algorithm",
        progress: 0, status: "locked",
        content: `### Public Key (Asymmetric) Cryptography
Unlike symmetric cryptography (one shared key), asymmetric cryptography uses a **key pair**:
- **Public Key (PU):** Published openly — used to *encrypt* or *verify*.
- **Private Key (PR):** Kept secret — used to *decrypt* or *sign*.

\`\`\`text
Alice → encrypt with Bob's PU → [Ciphertext] → Bob decrypts with his PR → Plaintext
\`\`\`

### The RSA Algorithm
Security relies on the computational difficulty of factoring the product of two large primes.

**Key Generation:**
1. Pick two large primes p and q.
2. n = p × q  (public modulus)
3. φ(n) = (p−1)(q−1)
4. Choose e: 1 < e < φ(n), gcd(e, φ(n)) = 1  → public exponent
5. d = e⁻¹ mod φ(n)  → private exponent

**Keys:** Public = {e, n} · Private = {d, n}

**Encryption:** C = Mᵉ mod n  
**Decryption:** M = Cᵈ mod n`,
        questions: [
          {
            id: "cns-u3-t1-q1",
            question: "Define Asymmetric Cryptography and state its main advantage over Symmetric Cryptography.",
            answers: {
              detailed: "Asymmetric (Public-Key) Cryptography uses mathematically linked key pairs: a public key freely distributed and a private key kept secret by its owner. A message encrypted with the public key can only be decrypted by the corresponding private key, and vice versa. Main advantage over symmetric cryptography: it solves the **key distribution problem**. In symmetric systems, both parties must securely share a secret key beforehand — a chicken-and-egg problem. Asymmetric systems eliminate this: anyone can send you a message encrypted with your public key, and only your private key can decrypt it. No prior secret channel is needed. Drawback: asymmetric operations are computationally expensive, so in practice (e.g., TLS) they're used only to exchange a symmetric session key.",
              simplified: "Asymmetric cryptography uses a public key (shared openly) and a private key (kept secret). Its main advantage is solving the key-sharing problem — you never need to secretly exchange a key with someone first."
            },
            isFree: true
          },
          {
            id: "cns-u3-t1-q2",
            question: "What is the mathematical foundation of RSA's security?",
            answers: {
              detailed: "RSA's security rests on the **Integer Factorisation Problem**: given a large composite number n = p × q (where p and q are large primes, each hundreds of digits long), it is computationally infeasible to recover p and q in any reasonable timeframe using known classical algorithms. Breaking RSA requires factoring n to find φ(n) = (p−1)(q−1), which would allow computing the private exponent d from the public exponent e. While small primes can be factored in milliseconds, a 2048-bit RSA modulus would take longer than the age of the universe with current hardware and best-known algorithms. Shor's algorithm on a quantum computer could break this — which is why post-quantum cryptography is an active research area.",
              simplified: "RSA is secure because factoring a very large number (n = p × q) into its two prime factors is computationally impossible with today's computers when the primes are large enough."
            },
            isFree: true
          },
          {
            id: "cns-u3-t1-q3",
            question: "Perform RSA key generation, encryption, and decryption with p=3, q=11, e=7, M=2.",
            answers: {
              detailed: "**Step 1 — Key Generation:**\n- n = p × q = 3 × 11 = **33**\n- φ(n) = (p−1)(q−1) = 2 × 10 = **20**\n- e = 7 (given; check: gcd(7, 20) = 1 ✓)\n- Find d: d × 7 ≡ 1 (mod 20) → 7 × 3 = 21 ≡ 1 (mod 20) → **d = 3**\n- **Public Key = {e=7, n=33}, Private Key = {d=3, n=33}**\n\n**Step 2 — Encryption (M=2):**\n- C = Mᵉ mod n = 2⁷ mod 33 = 128 mod 33 = **29**\n\n**Step 3 — Decryption (C=29):**\n- M = Cᵈ mod n = 29³ mod 33 = 24389 mod 33 = **2** ✓\n\nThe original plaintext M=2 is correctly recovered.",
              simplified: "With p=3, q=11: n=33, φ(n)=20, e=7, d=3. Encrypt: C = 2⁷ mod 33 = 29. Decrypt: M = 29³ mod 33 = 2. Original message recovered."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "cns-u4-t1",
        title: "Message Authentication, MAC & Hash Functions",
        progress: 0, status: "locked",
        content: `### Cryptographic Hash Functions
A hash function H maps an arbitrary-length message M to a fixed-length digest h = H(M).
Primary use: **data integrity** — even a single changed bit produces a completely different hash (Avalanche Effect).

**Required Properties:**
1. **Pre-image Resistance** — given h, cannot find M.
2. **Second Pre-image Resistance** — given M1, cannot find M2 ≠ M1 with H(M1) = H(M2).
3. **Collision Resistance** — cannot find *any* M1 ≠ M2 such that H(M1) = H(M2).

### Message Authentication Code (MAC)
MAC = C(K, M) — uses a shared secret key K. Provides integrity and authenticity, but **not non-repudiation**.

### Digital Signatures
Uses asymmetric keys. Sender signs with private key; receiver verifies with sender's public key. Provides integrity, authenticity, **and non-repudiation**.`,
        questions: [
          {
            id: "cns-u4-t1-q1",
            question: "What is a Hash Function and what properties must a cryptographic hash function satisfy?",
            answers: {
              detailed: "A cryptographic hash function H takes an arbitrarily long input M and produces a fixed-length output h (the digest). It must satisfy: (1) **Pre-image Resistance** — given h, it is computationally infeasible to find any M such that H(M) = h (one-way property). (2) **Second Pre-image Resistance** — given a specific M1, it is infeasible to find M2 ≠ M1 with the same hash (prevents substitution attacks). (3) **Collision Resistance** — it is infeasible to find *any* pair (M1, M2) where M1 ≠ M2 and H(M1) = H(M2). (4) **Avalanche Effect** — a tiny change in input causes a drastically different output. Common algorithms: MD5 (broken), SHA-1 (deprecated), SHA-256, SHA-3.",
              simplified: "A hash function converts any data into a fixed-length fingerprint. A cryptographic hash must be one-way (can't reverse it), collision-resistant (can't find two inputs with the same hash), and sensitive to any input change."
            },
            isFree: true
          },
          {
            id: "cns-u4-t1-q2",
            question: "Differentiate between a MAC and a Digital Signature.",
            answers: {
              detailed: "| Property | MAC | Digital Signature |\n|---|---|---|\n| Key type | Symmetric (shared secret) | Asymmetric (private key signs, public key verifies) |\n| Integrity | ✓ | ✓ |\n| Authentication | ✓ | ✓ |\n| Non-repudiation | ✗ (both parties know the key — either could have created it) | ✓ (only private key holder could sign) |\n| Speed | Fast | Slow (expensive modular exponentiation) |\n| Use case | Secure channel between known parties (e.g., TLS record layer) | Public verification, contracts, certificates |",
              simplified: "Both provide integrity and authentication. MAC uses a shared secret (fast, but no non-repudiation — either party could have made it). Digital Signature uses asymmetric keys (slower, but only the private key owner could sign — proving identity)."
            },
            isFree: false
          },
          {
            id: "cns-u4-t1-q3",
            question: "Explain the process of creating and verifying a Digital Signature.",
            answers: {
              detailed: "**Signing (Sender — Alice):**\n1. Alice computes the hash of her message: h = H(M).\n2. Alice encrypts h with her *private key*: Sig = E(PR_A, h). This is the signature.\n3. Alice sends (M, Sig) to Bob.\n\n**Verification (Receiver — Bob):**\n1. Bob decrypts the signature with Alice's *public key*: h' = D(PU_A, Sig).\n2. Bob independently hashes the received message: h = H(M).\n3. If h' == h, the signature is valid — the message was not altered (integrity) and only Alice could have signed it (authentication + non-repudiation).\n\nNote: the message M itself is usually sent in plaintext alongside the signature. For confidentiality, M would additionally be encrypted.",
              simplified: "Sender hashes the message, then encrypts the hash with their private key to create the signature. Receiver decrypts the signature with the sender's public key, hashes the received message, and compares — if they match, the message is authentic and unaltered."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "cns-u5-t1",
        title: "IPsec & Firewalls",
        progress: 0, status: "locked",
        content: `### IP Security (IPsec)
IPsec secures communications at the **Network Layer (OSI Layer 3)**, protecting all traffic between endpoints regardless of application.

**Core Protocols:**
- **AH (Authentication Header)** — integrity + authentication, *no encryption*.
- **ESP (Encapsulating Security Payload)** — encryption + integrity + authentication.

**Modes:**
- **Transport Mode** — only the payload is protected; original IP header intact. (Host-to-Host)
- **Tunnel Mode** — entire packet is wrapped; new IP header added. (VPN/Gateway-to-Gateway)

### Firewalls
Network security systems controlling traffic based on security rules.

| Type | Layer | Key Feature |
|---|---|---|
| Packet Filtering | Network (L3) | Stateless; fast; checks IP/port |
| Stateful Inspection | Transport (L4) | Tracks connection state |
| Application Gateway | Application (L7) | Deep content inspection |`,
        questions: [
          {
            id: "cns-u5-t1-q1",
            question: "What is the difference between IPsec's Transport Mode and Tunnel Mode?",
            answers: {
              detailed: "**Transport Mode:** IPsec protects only the *payload* (data) of the original IP packet. The original IP header is left in plaintext. This mode is typically used for *host-to-host* secure communication where both endpoints run IPsec and routing needs the original addresses. Drawback: eavesdroppers can still see source and destination IPs.\n\n**Tunnel Mode:** The *entire* original IP packet (header + payload) is encapsulated and protected. A new outer IP header is prepended with the addresses of the IPsec gateways. This hides internal network topology and is standard for **VPNs** (gateway-to-gateway). The inner packet's addresses are revealed only after decryption by the receiving gateway.",
              simplified: "Transport mode encrypts only the data, leaving the IP header visible (used between two hosts). Tunnel mode encrypts the entire original packet and adds a new header (used in VPNs between two gateways)."
            },
            isFree: true
          },
          {
            id: "cns-u5-t1-q2",
            question: "Explain the three types of firewalls and compare their security vs performance trade-off.",
            answers: {
              detailed: "1. **Packet Filtering Firewall (Stateless):** Operates at Layer 3/4. Each packet is examined in isolation against ACL rules (source IP, dest IP, port, protocol). Very fast and low overhead, but vulnerable to IP spoofing and cannot detect attacks spread across multiple packets. Provides no context.\n\n2. **Stateful Inspection Firewall:** Maintains a state table of all active TCP/UDP connections. A packet is only allowed if it belongs to a known established session. More secure than packet filtering — blocks unsolicited inbound packets. Moderate overhead.\n\n3. **Application-Level Gateway (Proxy Firewall):** Operates at Layer 7. Acts as a full intermediary — the client connects to the proxy, the proxy connects to the server. Understands application protocols (HTTP, FTP), inspects payload content, and can block specific commands. Highest security, but significantly slower due to double connection overhead and protocol parsing.",
              simplified: "Packet filtering is fastest but dumbest (checks IPs/ports only). Stateful inspection tracks connections (more secure). Application proxy deeply inspects content (most secure but slowest)."
            },
            isFree: false
          },
          {
            id: "cns-u5-t1-q3",
            question: "What is a Security Association (SA) in IPsec?",
            answers: {
              detailed: "A Security Association (SA) is a one-directional logical connection between two IPsec endpoints that defines all the parameters for a secure communication channel. It specifies: (1) the security protocol to use (AH or ESP), (2) the encryption and authentication algorithms and keys, (3) the key lifetimes and sequence number counters. An SA is uniquely identified by a triplet: {Security Parameter Index (SPI), Destination IP Address, Protocol (AH or ESP)}. Since SAs are unidirectional, a bidirectional secure channel requires *two* SAs — one in each direction. All active SAs are stored in the Security Association Database (SAD).",
              simplified: "An SA is a one-way agreement between two IPsec peers defining what algorithm, keys, and protocol to use. You need two SAs (one each way) for a full two-way secure channel."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // WEB APPLICATION DEVELOPMENT (WAD)
  // ─────────────────────────────────────────────────────────────
  "Web Application Development and Software Frameworks(WAD)": {
    "1": [], "2": [],
    "3": [
      {
        id: "wad-u3-t1",
        title: "Frontend Frameworks — React",
        progress: 0, status: "locked",
        content: `### Component-Based Architecture
React breaks the UI into independent, reusable **components** — each encapsulates its own markup, logic, and style.

### Virtual DOM
React maintains a lightweight in-memory copy of the DOM. On state change it: (1) re-renders the virtual DOM, (2) diffs it against the previous snapshot, (3) applies only the minimal real DOM changes (reconciliation). This avoids expensive full repaints.

### State & Props
- **Props** — read-only data passed from parent to child.
- **State** — mutable data owned by a component, managed with \`useState\`.`,
        questions: [
          {
            id: "wad-u3-t1-q1",
            question: "What is the Virtual DOM and why does React use it?",
            answers: {
              detailed: "The Virtual DOM (VDOM) is a lightweight JavaScript object tree that mirrors the structure of the real browser DOM. React uses it because direct DOM manipulation is slow — browsers must recalculate styles, layout, and paint for every change. React's reconciliation algorithm works as follows: (1) On state change, a new VDOM tree is rendered. (2) React *diffs* the new tree against the previous one using an O(n) heuristic algorithm. (3) Only the minimal set of real DOM operations needed to reconcile the difference is applied (batched). This batching and diffing is far more efficient than updating the DOM on every tiny state change, especially in dynamic UIs with many components.",
              simplified: "The Virtual DOM is a fast in-memory copy of the real DOM. React updates it first, figures out the minimum changes needed, then updates only those parts of the real DOM — making UI updates much faster."
            },
            isFree: true
          },
          {
            id: "wad-u3-t1-q2",
            question: "What is the difference between Props and State in React?",
            answers: {
              detailed: "**Props (Properties):** Read-only data passed *from a parent component to a child*. The child cannot modify its props — they represent the component's external interface/API. Changes in the parent's data that is passed as props will re-render the child. **State:** Mutable data *owned and managed by the component itself*, declared with the `useState` hook. When state changes, React automatically re-renders the component and its children. Key difference: props flow downward (parent → child, immutable); state is local and can be changed via its setter function, triggering a re-render.",
              simplified: "Props are read-only values passed from parent to child — the child can't change them. State is the component's own internal data that it can change, causing the component to re-render."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "wad-u4-t1",
        title: "Backend Development & RESTful APIs",
        progress: 0, status: "locked",
        content: `### Node.js & Express
Node.js runs JavaScript on the server using an event-driven, non-blocking I/O model — ideal for handling many concurrent requests. Express.js is a minimal framework on top of Node for routing and middleware.

### REST APIs
REST (Representational State Transfer) is an architectural style for APIs using standard HTTP verbs:

| HTTP Method | CRUD Operation | Example |
|---|---|---|
| GET | Read | GET /users/1 |
| POST | Create | POST /users |
| PUT/PATCH | Update | PUT /users/1 |
| DELETE | Delete | DELETE /users/1 |`,
        questions: [
          {
            id: "wad-u4-t1-q1",
            question: "What HTTP methods are used in a RESTful API and what does each represent?",
            answers: {
              detailed: "REST uses standard HTTP methods to define operations on resources: **GET** — retrieves a resource without side effects (idempotent, safe). **POST** — creates a new resource; the server assigns the ID; not idempotent. **PUT** — fully replaces an existing resource at a given URL; idempotent (repeating gives same result). **PATCH** — partially updates a resource (only the fields provided); not necessarily idempotent. **DELETE** — removes a resource; idempotent. A well-designed REST API maps these to standard CRUD operations and uses appropriate HTTP status codes (200 OK, 201 Created, 204 No Content, 404 Not Found, 400 Bad Request) to communicate outcomes.",
              simplified: "GET reads, POST creates, PUT replaces, PATCH partially updates, DELETE removes. Each maps to a standard database operation (CRUD)."
            },
            isFree: true
          },
          {
            id: "wad-u4-t1-q2",
            question: "What is middleware in Express.js?",
            answers: {
              detailed: "Middleware in Express is a function with the signature (req, res, next) that sits in the request-response pipeline. It can: inspect or modify the req/res objects, end the request cycle (send a response), or call next() to pass control to the next middleware. Middleware executes in the order it is registered with app.use(). Common uses: logging (Morgan), body parsing (express.json()), authentication (verifying JWT tokens), CORS headers, and error handling. A single request may pass through many middleware functions before the final route handler sends a response.",
              simplified: "Middleware is a function that runs between receiving a request and sending a response. It can modify the request, check authentication, log data, etc. Each middleware either handles the request or passes it to the next function."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "wad-u5-t1",
        title: "Databases & Authentication (JWT)",
        progress: 0, status: "locked",
        content: `### MongoDB (NoSQL)
Unlike relational databases, MongoDB stores data as flexible **BSON documents** inside collections. No fixed schema — documents in the same collection can have different fields. Scales horizontally. Best for hierarchical, variable-structure data.

### JWT Authentication
JSON Web Tokens enable **stateless** authentication:
1. User logs in → server validates credentials → server issues a signed JWT.
2. Client stores the JWT (typically in memory or an HttpOnly cookie).
3. Client attaches JWT to every request header: \`Authorization: Bearer <token>\`.
4. Server verifies the signature — no session lookup needed.

JWT structure: \`Header.Payload.Signature\``,
        questions: [
          {
            id: "wad-u5-t1-q1",
            question: "Why is JWT authentication considered stateless?",
            answers: {
              detailed: "Traditional session-based authentication is *stateful*: the server stores session data (user ID, permissions) in memory or a database, and the client only holds a session ID cookie. Every request requires a server-side lookup. JWT flips this: all the user data (claims) is encoded inside the token itself and *signed* with the server's secret key. When the client sends the JWT, the server only needs to *verify the signature* using the secret — no database lookup required. This makes JWTs ideal for distributed/microservice architectures where multiple servers need to authenticate requests without sharing session state.",
              simplified: "With JWT, the server stores nothing. All user info is inside the token. The server just checks the token's signature to verify it's genuine — no database session lookup needed."
            },
            isFree: true
          },
          {
            id: "wad-u5-t1-q2",
            question: "When would you choose MongoDB over a relational database like PostgreSQL?",
            answers: {
              detailed: "Choose MongoDB when: (1) **Schema flexibility is needed** — data structure varies per document or evolves rapidly (e.g., product catalogues with different attributes per product). (2) **Hierarchical/nested data** — data naturally embeds as nested objects (e.g., a blog post with an array of comments) fits MongoDB's document model better than foreign-key joins. (3) **Horizontal scaling** — MongoDB's sharding is built-in; scaling a relational DB horizontally is complex. (4) **High write throughput** — MongoDB can sacrifice strict ACID compliance for speed. Choose PostgreSQL/MySQL when: strict ACID transactions are required, data is highly relational, complex multi-table joins are frequent, or regulatory compliance demands strong consistency.",
              simplified: "Use MongoDB when your data structure is flexible, nested, or changes frequently. Use a relational database when your data has clear relationships, needs strict consistency, and complex joins."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // OOSE BASED APPLICATION DEVELOPMENT
  // ─────────────────────────────────────────────────────────────
  "OOSE Based Application Development": {
    "1": [], "2": [],
    "3": [
      {
        id: "oose-u3-t1",
        title: "Object-Oriented Analysis & UML",
        progress: 0, status: "locked",
        content: `### UML Diagrams
UML (Unified Modeling Language) provides a standard visual language for software design.
- **Use Case Diagram** — shows system functionality from the user's perspective (actors + use cases).
- **Class Diagram** — shows the static structure: classes, attributes, methods, and relationships (association, inheritance, aggregation, composition).
- **Sequence Diagram** — shows how objects interact over time (message flow).`,
        questions: [
          {
            id: "oose-u3-t1-q1",
            question: "What does a Class Diagram illustrate? What are the key relationships it shows?",
            answers: {
              detailed: "A Class Diagram shows the **static structure** of a system. Each class is a box divided into three sections: class name, attributes (with types and visibility), and methods (with parameters and return types). Key relationships: **Association** — a general 'uses-a' link between classes (shown as a line). **Inheritance (Generalization)** — 'is-a' relationship; subclass inherits from superclass (hollow arrowhead). **Aggregation** — 'has-a' relationship where the part can exist independently (hollow diamond). **Composition** — stronger 'has-a' where the part cannot exist without the whole (filled diamond). **Dependency** — one class temporarily uses another (dashed arrow). Multiplicity (1, *, 0..1) annotates how many instances participate in each relationship.",
              simplified: "A Class Diagram shows classes (with their attributes and methods) and how they relate — inheritance (is-a), association (uses), aggregation (has-a, can exist independently), and composition (has-a, cannot exist independently)."
            },
            isFree: true
          },
          {
            id: "oose-u3-t1-q2",
            question: "What is the difference between Aggregation and Composition in UML?",
            answers: {
              detailed: "Both model 'whole-part' relationships but differ in lifecycle dependency. **Aggregation (weak 'has-a'):** The part can exist independently of the whole. Example: A University *has* Students — if the University closes, the Students still exist as entities. Represented by a hollow diamond at the whole end. **Composition (strong 'has-a'):** The part *cannot* exist without the whole. Example: A House *has* Rooms — if the House is destroyed, its Rooms cease to exist. Represented by a filled diamond. Choosing between them impacts how you handle object deletion and memory management in code.",
              simplified: "Aggregation: the part can exist without the whole (e.g., Student exists without University). Composition: the part is destroyed with the whole (e.g., Room doesn't exist without a House)."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "oose-u4-t1",
        title: "Software Design Patterns",
        progress: 0, status: "locked",
        content: `### Design Patterns
Reusable solutions to recurring design problems. Categorised by GoF (Gang of Four):

- **Creational** — object creation: Singleton, Factory, Abstract Factory, Builder, Prototype.
- **Structural** — class composition: Adapter, Bridge, Composite, Decorator, Facade.
- **Behavioral** — object interaction: Observer, Strategy, Command, Iterator, Template Method.`,
        questions: [
          {
            id: "oose-u4-t1-q1",
            question: "What is the Singleton pattern and when should it be used?",
            answers: {
              detailed: "The Singleton pattern ensures that a class has **exactly one instance** throughout the application's lifetime and provides a global access point to that instance. Implementation: the constructor is made private; a static method (e.g., getInstance()) creates the instance on first call and returns the same instance on all subsequent calls. Use when: (1) Exactly one object is needed to coordinate across the system — e.g., a logging service, configuration manager, database connection pool, or thread pool. Caution: Singletons introduce global state and can make unit testing difficult (hard to mock). They should be used sparingly.",
              simplified: "Singleton ensures only one instance of a class ever exists. Used for shared resources like a logger or database connection. The constructor is private; a static method gives access to the single instance."
            },
            isFree: true
          },
          {
            id: "oose-u4-t1-q2",
            question: "Explain the Observer pattern with a real-world example.",
            answers: {
              detailed: "The Observer pattern defines a **one-to-many dependency** between objects: when one object (the *Subject/Publisher*) changes state, all registered dependents (the *Observers/Subscribers*) are notified and updated automatically. Structure: Subject maintains a list of Observer references. Observers register via subscribe() and unregister via unsubscribe(). When Subject changes, it calls notifyAll(), which calls update() on each Observer. Real-world example: A news agency (Subject) broadcasts articles; multiple news channels (Observers) are subscribed. When the agency publishes a new article, all channels are automatically notified. In software: React's state change → re-renders (observers), or an event emitter in Node.js.",
              simplified: "Observer = publisher-subscriber. One object (Subject) maintains a list of listeners (Observers). When the Subject changes, it automatically notifies all observers. E.g., YouTube subscribers being notified when a channel posts a new video."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "oose-u5-t1",
        title: "Software Testing & Deployment",
        progress: 0, status: "locked",
        content: `### Software Testing Levels
- **Unit Testing** — tests individual functions/methods in isolation; fast; uses mocks.
- **Integration Testing** — tests how modules interact; catches interface bugs.
- **System Testing** — tests the entire system end-to-end against requirements.
- **Acceptance Testing (UAT)** — validates the system meets business requirements with real users.

### Deployment Strategies
- **Blue-Green Deployment** — two identical environments; switch traffic instantly; zero downtime.
- **Canary Release** — roll out to a small % of users first; monitor; then full release.`,
        questions: [
          {
            id: "oose-u5-t1-q1",
            question: "What is Unit Testing and what makes a good unit test?",
            answers: {
              detailed: "Unit Testing verifies the correctness of the smallest testable parts of an application (functions, methods, classes) *in isolation*. Dependencies (database, APIs) are replaced with *mocks* or *stubs* so the test focuses purely on the unit's logic. A good unit test follows the **FIRST** principles: **F**ast (runs in milliseconds), **I**solated (no shared state between tests), **R**epeatable (same result every run), **S**elf-validating (pass/fail, no manual inspection), **T**imely (written close to the code, ideally before in TDD). A test should cover the happy path, edge cases, and failure/exception cases.",
              simplified: "Unit tests check individual functions in isolation (dependencies are mocked). A good unit test is fast, isolated, deterministic, and covers normal cases, edge cases, and errors."
            },
            isFree: true
          },
          {
            id: "oose-u5-t1-q2",
            question: "What is Test-Driven Development (TDD) and what are its benefits?",
            answers: {
              detailed: "TDD is a development practice where tests are written *before* the implementation code. The cycle is: (1) **Red** — write a failing test for the desired behaviour. (2) **Green** — write the minimal code to make the test pass. (3) **Refactor** — clean up the code without breaking the test. Benefits: (a) Forces clear specification of requirements before coding. (b) Results in high test coverage naturally. (c) Produces simpler, more modular code because testable code tends to be loosely coupled. (d) Regression protection — refactors don't silently break existing behaviour. (e) Acts as living documentation of intent. Drawback: Slower initial development; hard to apply to UI or exploratory code.",
              simplified: "TDD: write the test first (it fails), then write code to pass it, then refactor. Benefits: forces you to think before coding, results in high test coverage, and makes refactoring safe."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // DIGITAL FORENSICS
  // ─────────────────────────────────────────────────────────────
  "Digital Forensics": {
    "1": [], "2": [],
    "3": [
      {
        id: "df-u3-t1",
        title: "Network Forensics & Packet Analysis",
        progress: 0, status: "locked",
        content: `### Network Forensics
Capturing and analysing network traffic to investigate security incidents and reconstruct attack timelines.

**Key tool: Wireshark** — analyses PCAP (Packet Capture) files. Inspects headers (IPs, ports, protocols) and payloads. Supports display filters (e.g., \`http.request\`, \`ip.src == 192.168.1.1\`).

**Typical workflow:**
1. Capture traffic (live or from PCAP).
2. Filter by protocol or IP.
3. Follow TCP streams to reconstruct sessions.
4. Export artefacts (files, credentials).`,
        questions: [
          {
            id: "df-u3-t1-q1",
            question: "What is a PCAP file and how is it used in network forensics?",
            answers: {
              detailed: "PCAP (Packet Capture) is a standard file format that stores raw network packets captured from a network interface, including their headers and payloads with precise timestamps. In network forensics, analysts use PCAP files to: (1) **Reconstruct events** — replay the exact sequence of packets to understand what happened during an incident. (2) **Identify malicious traffic** — filter for known attack patterns (port scans, C2 beaconing, data exfiltration volumes). (3) **Extract artefacts** — carved files (images, documents) transmitted over HTTP, credentials sent in plaintext, DNS queries resolving to threat-actor domains. Tools like Wireshark, tcpdump, and NetworkMiner analyse PCAP files. They are critical evidence that must be preserved with a proper chain of custody.",
              simplified: "A PCAP file is a recording of all network traffic (every packet). Forensic analysts open it in tools like Wireshark to see exactly what was sent/received during an incident — reconstructing attacks or finding stolen data."
            },
            isFree: true
          },
          {
            id: "df-u3-t1-q2",
            question: "What is the difference between deep packet inspection and shallow packet inspection?",
            answers: {
              detailed: "**Shallow Packet Inspection (SPI)** examines only the packet *header* — source/destination IP, port numbers, protocol type, flags. It is fast and used by basic packet-filtering firewalls and routers to make routing and simple access control decisions. **Deep Packet Inspection (DPI)** examines both the header *and the full payload*. It can identify the actual application-layer content — detecting specific HTTP requests, malware signatures hidden in data, VPN tunnelling over allowed ports, or data exfiltration. DPI is computationally expensive but essential for next-generation firewalls (NGFWs), intrusion detection systems (IDS), and forensic analysis. Privacy concern: DPI can expose encrypted or sensitive user content to the inspecting entity.",
              simplified: "Shallow inspection reads only packet headers (IPs, ports). Deep packet inspection reads the full content including payload — useful for detecting malware or exfiltration but computationally expensive."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "df-u4-t1",
        title: "Mobile Device Forensics",
        progress: 0, status: "locked",
        content: `### Mobile Device Forensics
Recovering digital evidence from smartphones and tablets while maintaining forensic integrity.

**Process:**
1. **Seizure** — document the scene, note device state (on/off).
2. **Isolation** — place in a Faraday bag to block all wireless signals.
3. **Acquisition** — extract data:
   - *Logical*: file-system level data via ADB/iTunes backups.
   - *Physical*: bit-for-bit image of flash storage (requires exploits or chip-off).
4. **Analysis** — recover deleted files, call logs, messages, app data.
5. **Reporting** — document chain of custody and findings.`,
        questions: [
          {
            id: "df-u4-t1-q1",
            question: "Why must a seized mobile device be placed in a Faraday bag immediately?",
            answers: {
              detailed: "A Faraday bag/cage blocks all electromagnetic signals — cellular (4G/5G), Wi-Fi, Bluetooth, and GPS. This is critical because: (1) **Remote wipe prevention** — the device owner (or a criminal accomplice) could send a remote wipe command (via Find My iPhone, Android Device Manager) that would irreversibly destroy all evidence. (2) **Data integrity** — incoming messages, notifications, or over-the-air updates could alter the device's data and invalidate the forensic image. (3) **Location isolation** — prevents the device from connecting to cell towers, which could trigger automatic cloud syncs that modify timestamps or data. Without immediate isolation, evidence may be inadmissible in court.",
              simplified: "Faraday bags block all wireless signals so the owner can't remotely wipe the device, new messages can't arrive and alter data, and cloud sync can't change timestamps — preserving the evidence exactly as it was."
            },
            isFree: true
          },
          {
            id: "df-u4-t1-q2",
            question: "Differentiate between Logical and Physical acquisition of mobile data.",
            answers: {
              detailed: "**Logical Acquisition** accesses data through the device's operating system APIs and file system — essentially the same view as a backup (iTunes backup, ADB backup). It is non-invasive, fast, and preserves app-level data (contacts, messages, photos, app databases). Limitation: it cannot recover data that the OS marks as deleted, and access may be blocked by encryption or passcode lock. **Physical Acquisition** creates a *bit-for-bit image* of the raw flash storage, similar to forensic disk imaging. It can recover deleted files, unallocated space content, and hidden partitions. Requires: bypassing the lock screen (via exploit, bootloader unlock, or chip-off soldering), and is time-consuming and risks damaging the device. Physical is preferred for high-stakes investigations; logical is used when speed or device fragility matters.",
              simplified: "Logical acquisition gets the data the OS exposes (like a backup) — fast but misses deleted data. Physical acquisition images the entire raw storage — slower and riskier but can recover deleted files and more hidden data."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "df-u5-t1",
        title: "Forensic Reporting & Ethics",
        progress: 0, status: "locked",
        content: `### Chain of Custody
A chronological, documented record of every person who handled evidence — from seizure to court presentation. Any gap can render evidence inadmissible.

### Forensic Report Structure
1. Executive Summary (non-technical)
2. Scope & Methodology
3. Findings (with supporting hash values and screenshots)
4. Conclusion

### Ethical & Legal Principles
- Evidence must be collected with proper **legal authority** (warrant).
- Analysis must be **repeatable** — another examiner using the same tools must reach the same conclusions.
- Examiner must remain **objective** — report what the evidence shows, not what the client wants.`,
        questions: [
          {
            id: "df-u5-t1-q1",
            question: "What is the Chain of Custody and why is it critical in digital forensics?",
            answers: {
              detailed: "The Chain of Custody (CoC) is a chronological, unbroken paper trail documenting: who collected the evidence, when and where it was collected, how it was stored and transferred, and who accessed it at every point. For digital forensics, this includes: hashing the original media immediately upon seizure (e.g., SHA-256) to prove it was not altered, creating verified forensic copies (working copies) for analysis, and logging every tool and procedure used. Criticality: courts require that evidence be authentic and unaltered. If the CoC has gaps (e.g., an unlogged overnight in a car), opposing counsel can argue the evidence was tampered with, making it inadmissible. The integrity of the entire investigation rests on CoC documentation.",
              simplified: "Chain of custody is a documented record of who touched the evidence and when. Without it, a court can reject the evidence as potentially tampered. Every transfer and access must be logged and the data's hash must remain consistent."
            },
            isFree: true
          },
          {
            id: "df-u5-t1-q2",
            question: "What ethical obligations does a digital forensic examiner have?",
            answers: {
              detailed: "1. **Objectivity** — the examiner must report all findings factually, even if exculpatory (helps the accused). Working for the prosecution does not mean hiding evidence that favours the defence. 2. **Competence** — only use tools and techniques the examiner is trained and certified in; testify only within area of expertise. 3. **Legal Authority** — never collect evidence without proper legal authorisation (search warrant, court order). Illegally obtained digital evidence is inadmissible and exposes the examiner to liability. 4. **Confidentiality** — case details and findings must not be disclosed outside legal proceedings. 5. **Reproducibility** — methodology must be documented such that another qualified examiner could repeat the analysis and reach the same conclusions.",
              simplified: "A forensic examiner must be objective (report everything, even if it helps the suspect), act within legal authority, maintain confidentiality, and document methods so results can be independently verified."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ARTIFICIAL NEURAL NETWORKS
  // ─────────────────────────────────────────────────────────────
  "Artificial Neural Networks": {
    "1": [], "2": [],
    "3": [
      {
        id: "ann-u3-t1",
        title: "Multilayer Perceptrons & Backpropagation",
        progress: 0, status: "locked",
        content: `### Multilayer Perceptron (MLP)
An MLP has three layer types: *Input Layer* (receives features), one or more *Hidden Layers* (learn representations), and an *Output Layer* (prediction).

### Backpropagation
The standard training algorithm for MLPs:
1. **Forward Pass** — compute output and loss.
2. **Backward Pass** — compute gradient of loss w.r.t. each weight using the chain rule.
3. **Weight Update** — W = W − α × ∂L/∂W (Gradient Descent).

Activation functions (ReLU, Sigmoid, tanh) introduce non-linearity, allowing the network to learn complex patterns.`,
        questions: [
          {
            id: "ann-u3-t1-q1",
            question: "What is the role of the loss function in training an ANN?",
            answers: {
              detailed: "The loss function (also called cost function or objective function) quantifies how far the network's current predictions are from the correct targets. Common examples: **Mean Squared Error (MSE)** for regression — L = (1/n) Σ(yᵢ − ŷᵢ)². **Cross-Entropy Loss** for classification — L = −Σ yᵢ log(ŷᵢ). During training, backpropagation computes the gradient ∂L/∂W for every weight W — indicating the direction and magnitude by which W should change to reduce L. Without a differentiable loss function, gradient descent cannot operate. The choice of loss function must match the task: a poor choice (e.g., MSE for classification) leads to slow or poor convergence.",
              simplified: "The loss function measures how wrong the network's predictions are. Backpropagation computes how to adjust each weight to reduce this error. The network improves by repeatedly minimising the loss."
            },
            isFree: true
          },
          {
            id: "ann-u3-t1-q2",
            question: "Why is the vanishing gradient problem a concern in deep networks?",
            answers: {
              detailed: "During backpropagation, gradients are propagated from the output layer backward through each layer by multiplying local gradients (chain rule). If activation functions like Sigmoid or tanh are used, they squash inputs into small output ranges (0–1 or −1 to 1), producing derivatives much less than 1 (max ~0.25 for Sigmoid). When these small gradients are multiplied through many layers, the product approaches zero exponentially — gradients in early layers become negligibly small. These layers then update extremely slowly or not at all, making the network fail to learn deep representations. Solutions: use ReLU activations (gradient = 1 for positive inputs), normalisation (Batch Norm), residual connections (ResNets), or gradient clipping.",
              simplified: "In deep networks, gradients shrink as they travel backward through many layers. Early layers receive near-zero gradients and barely learn. Fixed by using ReLU instead of Sigmoid, or by using batch normalisation and residual connections."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "ann-u4-t1",
        title: "Recurrent & Associative Networks — Hopfield",
        progress: 0, status: "locked",
        content: `### Hopfield Networks
A recurrent network where all neurons are both input and output, with symmetric connections (wᵢⱼ = wⱼᵢ). Functions as **content-addressable (associative) memory** — given a partial or noisy pattern, the network converges to the nearest stored complete pattern.

**Energy Function:** E = −½ Σᵢⱼ wᵢⱼ sᵢ sⱼ
The network always moves toward lower energy states, guaranteed to converge to a local minimum (a stored memory).`,
        questions: [
          {
            id: "ann-u4-t1-q1",
            question: "What is a Hopfield Network and what is its primary application?",
            answers: {
              detailed: "A Hopfield Network is a fully connected recurrent neural network where every neuron is connected to every other neuron (except itself) with *symmetric*, real-valued weights. Each neuron has a binary state (+1 or −1). During recall, neurons update their states asynchronously until the network settles at a stable state (attractor). The energy function E = −½ Σᵢⱼ wᵢⱼ sᵢ sⱼ always decreases monotonically, guaranteeing convergence. **Primary application: Associative (content-addressable) memory.** Patterns are stored by setting weights using Hebbian learning. Given a noisy or incomplete input pattern, the network converges to the closest stored pattern. Analogy: remembering a full song from just the first few notes. Also used for combinatorial optimisation (Travelling Salesman Problem).",
              simplified: "A Hopfield Network is a recurrent network that stores patterns as energy minima. Given a partial or noisy input, it automatically completes/corrects it to the nearest stored pattern — like recovering a corrupted image."
            },
            isFree: true
          },
          {
            id: "ann-u4-t1-q2",
            question: "What are the limitations of Hopfield Networks?",
            answers: {
              detailed: "1. **Limited Storage Capacity** — a Hopfield network with N neurons can reliably store only ~0.14N patterns. Beyond this, patterns begin to interfere with each other, causing *spurious states* (fake attractors that don't correspond to any stored pattern). 2. **Spurious States** — the network may converge to a local energy minimum that is not a stored pattern (e.g., the bitwise inverse of a stored pattern — called a 'spin-glass state'). 3. **Slow Convergence** — asynchronous updates can be slow for large networks. 4. **Binary states only** — the classic Hopfield model uses +1/−1 states; extending to continuous values (Continuous Hopfield Network) requires more complex analysis. 5. **Local minima** — not guaranteed to find the globally stored pattern if the initial state is far from it.",
              simplified: "Hopfield networks can only store about 14% of N patterns before interference causes errors. Beyond capacity, they may converge to wrong (spurious) patterns that were never stored."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "ann-u5-t1",
        title: "Self-Organizing Maps (SOM)",
        progress: 0, status: "locked",
        content: `### Self-Organizing Maps
An unsupervised learning technique that maps high-dimensional data onto a low-dimensional (usually 2D) grid while preserving **topological structure** — similar inputs map to nearby neurons.

**Training (Competitive Learning):**
1. Present an input vector x.
2. Find the **Best Matching Unit (BMU)** — the neuron whose weight vector is closest to x.
3. Update BMU and its neighbours to move closer to x.
4. Reduce the neighbourhood radius and learning rate over time.

Result: a 2D map where related data clusters together — useful for visualising high-dimensional data.`,
        questions: [
          {
            id: "ann-u5-t1-q1",
            question: "How does a Self-Organizing Map differ from a standard feedforward neural network?",
            answers: {
              detailed: "**Feedforward ANN:** Supervised; trained with backpropagation using labelled data (input→output pairs); learns to minimise a loss function; produces a specific output (classification/regression); layers are connected in one direction. **SOM:** Unsupervised; no labels or target outputs needed; uses competitive learning (winner-takes-all); learns the topological structure of the input space; produces a 2D map showing data clusters; connections are lateral (within the map layer). Key difference in purpose: feedforward networks learn to make predictions; SOMs learn to discover and visualise the structure of data.",
              simplified: "Standard ANNs are supervised — they learn to predict outputs from labelled data. SOMs are unsupervised — they organise unlabelled data into a 2D map where similar inputs land near each other, revealing natural clusters."
            },
            isFree: true
          },
          {
            id: "ann-u5-t1-q2",
            question: "What is the Best Matching Unit (BMU) in a SOM and how is it determined?",
            answers: {
              detailed: "The Best Matching Unit (BMU) is the neuron in the SOM grid whose **weight vector w is most similar to the current input vector x**. Similarity is measured using Euclidean distance: d(x, wᵢ) = √(Σ(xₖ − wᵢₖ)²). The neuron with the minimum distance is declared the BMU. After BMU selection, both the BMU and neurons within a neighbourhood radius h around it have their weights updated toward x: Δwᵢ = η(t) × h(i, BMU, t) × (x − wᵢ). The neighbourhood function h (often Gaussian) and learning rate η both decrease over training time, causing the map to gradually stabilise.",
              simplified: "The BMU is the neuron whose weights are closest (minimum Euclidean distance) to the current input. It 'wins' the competition and along with nearby neurons gets its weights nudged toward the input."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // DEEP LEARNING
  // ─────────────────────────────────────────────────────────────
  "Deep Learning": {
    "1": [], "2": [],
    "3": [
      {
        id: "dl-u3-t1",
        title: "Convolutional Neural Networks (CNNs)",
        progress: 0, status: "locked",
        content: `### CNN Architecture
Designed for spatial data (images, audio spectrograms).

**Key Layers:**
- **Convolutional Layer** — slides a learnable filter over the input to produce a feature map. Each filter detects a specific pattern (edge, texture).
- **Activation (ReLU)** — introduces non-linearity.
- **Pooling Layer** — reduces spatial dimensions (Max Pooling takes the maximum value in a window). Makes features translation-invariant.
- **Fully Connected Layer** — flattens the feature maps and performs final classification.`,
        questions: [
          {
            id: "dl-u3-t1-q1",
            question: "What is the primary function of a Pooling layer in a CNN and why is it needed?",
            answers: {
              detailed: "A Pooling layer performs **spatial downsampling** of the feature maps. Max Pooling divides the feature map into non-overlapping windows (e.g., 2×2) and takes the maximum value from each. Purposes: (1) **Dimensionality Reduction** — reduces the number of parameters and computation in subsequent layers, controlling overfitting. (2) **Translation Invariance** — if a feature (e.g., an edge) shifts slightly, max pooling still activates as long as the feature is anywhere in the window, making the representation robust to small translations. (3) **Hierarchical Feature Extraction** — successive pooling layers allow later convolutional layers to have larger effective receptive fields, detecting higher-level features (shapes → objects).",
              simplified: "Pooling shrinks feature maps by taking the max in each small region. This reduces computation, prevents overfitting, and makes the network slightly tolerant to the exact position of features (translation invariance)."
            },
            isFree: true
          },
          {
            id: "dl-u3-t1-q2",
            question: "What is the receptive field in a CNN and why does it matter?",
            answers: {
              detailed: "The receptive field of a neuron in layer L is the region of the *original input image* that influences that neuron's activation. A small filter (e.g., 3×3) in early layers has a small receptive field — it detects local features like edges. As you stack more convolutional and pooling layers, the effective receptive field grows exponentially — deeper neurons 'see' larger regions of the image, allowing detection of complex patterns (shapes, objects, scenes). This is why deeper networks (e.g., ResNet-152) can recognise complex objects: early layers detect edges, middle layers detect textures and parts, final layers detect whole objects. Designing networks with appropriate receptive fields for the target scale is a key architectural consideration.",
              simplified: "The receptive field is how much of the original image a neuron can 'see'. Early layers have small receptive fields (detect edges); deeper layers have larger ones (detect objects). Stacking layers increases the receptive field."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "dl-u4-t1",
        title: "RNNs and LSTM Networks",
        progress: 0, status: "locked",
        content: `### Recurrent Neural Networks (RNNs)
Process sequential data by maintaining a **hidden state** hₜ that carries information from previous time steps:

hₜ = tanh(Wₕhₜ₋₁ + Wₓxₜ + b)

Problem: gradients vanish or explode over long sequences, making long-range dependencies impossible to learn.

### Long Short-Term Memory (LSTM)
Solves the vanishing gradient with a **cell state** Cₜ (the long-term memory) controlled by three gates:
- **Forget Gate** — decides what to discard from Cₜ.
- **Input Gate** — decides what new information to add.
- **Output Gate** — decides what to output from Cₜ.`,
        questions: [
          {
            id: "dl-u4-t1-q1",
            question: "How does an LSTM address the vanishing gradient problem of standard RNNs?",
            answers: {
              detailed: "Standard RNNs use the same weight matrix Wₕ at every time step. When backpropagating through time (BPTT), gradients are multiplied by Wₕ at each step — if the eigenvalues of Wₕ are < 1, gradients shrink to zero; if > 1, they explode. LSTMs introduce a **cell state** Cₜ with an additive (not multiplicative) update: Cₜ = fₜ ⊙ Cₜ₋₁ + iₜ ⊙ C̃ₜ. The addition operation (⊙ = element-wise multiply) allows gradients to flow back through time without being repeatedly multiplied by Wₕ. The forget gate fₜ ∈ [0,1] can be ≈1 (keep all), allowing the cell state to carry information intact over many steps. This *constant error carousel* is the core LSTM insight — gradients bypass the recurrent weight matrix for the cell state pathway.",
              simplified: "LSTMs replace the single hidden state with a cell state that updates additively (not multiplicatively). This lets gradients flow backward through many time steps without shrinking, allowing the network to remember long-range dependencies."
            },
            isFree: true
          },
          {
            id: "dl-u4-t1-q2",
            question: "Describe the three gates of an LSTM and the role of each.",
            answers: {
              detailed: "Each gate uses a sigmoid activation (output ∈ [0,1]) combined with element-wise multiplication (⊙) to control information flow.\n\n**Forget Gate** fₜ = σ(Wf·[hₜ₋₁, xₜ] + bf): Decides how much of the *previous cell state* Cₜ₋₁ to retain. fₜ ≈ 0 → forget; fₜ ≈ 1 → remember. Example: when reading a new sentence, forgetting the subject of the previous sentence.\n\n**Input Gate** iₜ = σ(Wᵢ·[hₜ₋₁, xₜ] + bᵢ): Decides how much of the new candidate cell state C̃ₜ = tanh(Wc·[hₜ₋₁, xₜ] + bc) to write into the cell state. Controls what new information to store.\n\n**Output Gate** oₜ = σ(Wo·[hₜ₋₁, xₜ] + bo): Decides what portion of the cell state Cₜ to expose as the hidden state hₜ = oₜ ⊙ tanh(Cₜ). The hidden state is what gets passed to the next layer or used as output.",
              simplified: "Forget Gate decides what old memory to throw away. Input Gate decides what new information to remember. Output Gate decides what to output from memory. All three use sigmoid (0=block, 1=pass) to regulate flow."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "dl-u5-t1",
        title: "Advanced Architectures: GANs",
        progress: 0, status: "locked",
        content: `### Generative Adversarial Networks (GANs)
Introduced by Ian Goodfellow (2014). Two networks compete in a minimax game:

- **Generator (G):** Takes random noise z as input, outputs fake data G(z) trying to fool D.
- **Discriminator (D):** Classifies input as real (from data distribution) or fake (from G).

**Training Objective:**  
min_G max_D V(D,G) = E[log D(x)] + E[log(1 − D(G(z)))]

The Generator improves until D cannot distinguish real from fake. Applications: image synthesis, deepfakes, data augmentation, drug discovery.`,
        questions: [
          {
            id: "dl-u5-t1-q1",
            question: "Explain the role of the Generator and Discriminator in a GAN.",
            answers: {
              detailed: "**Generator (G):** Takes a random noise vector z sampled from a simple distribution (usually Gaussian) as input. Its goal is to transform z into a sample G(z) that is statistically indistinguishable from real training data. G never sees real data directly — it only receives gradient signals from D telling it whether its fakes were detected. **Discriminator (D):** A binary classifier that takes an input (either a real sample x from the dataset or a fake G(z)) and outputs a probability of it being real. D is trained to maximise its accuracy. G is trained to minimise D's accuracy. The two networks are trained alternately. Equilibrium: when G produces perfect fakes and D outputs 0.5 (random guessing) — G has fully captured the data distribution.",
              simplified: "The Generator creates fake data from random noise trying to fool the Discriminator. The Discriminator tries to spot the fakes. They train against each other until the Generator produces data indistinguishable from real data."
            },
            isFree: true
          },
          {
            id: "dl-u5-t1-q2",
            question: "What is mode collapse in GANs and how can it be mitigated?",
            answers: {
              detailed: "Mode collapse occurs when the Generator learns to produce only a very small variety of outputs (a single 'mode' of the real distribution) because that subset consistently fools the Discriminator. For example, a GAN trained on handwritten digits might only generate '7's, ignoring all other digits. Cause: the Generator finds that outputting one type of sample reliably gets a high score from D, so gradient descent keeps it in that region. Mitigations: (1) **Mini-batch Discrimination** — D looks at a batch of samples at once, penalising lack of diversity. (2) **Wasserstein GAN (WGAN)** — replaces the discriminator with a 'critic' and uses Wasserstein distance as the loss, providing smoother gradients and better coverage. (3) **Unrolled GAN** — G is trained against an anticipated future D, discouraging exploitation. (4) **Experience Replay** — show D old G outputs to prevent forgetting.",
              simplified: "Mode collapse is when the Generator gets 'lazy' and produces only one type of output (e.g., only generating one digit). Fixed by techniques like Wasserstein GAN or mini-batch discrimination that penalise lack of variety."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // REMAINING SUBJECTS — Remaining topics follow the same schema.
  // Expanded content can be authored using the same pattern.
  // ─────────────────────────────────────────────────────────────

  "Introduction to Competitive Programming(ICP)": {
    "1": [], "2": [],
    "3": [
      {
        id: "icp-u3-t1", title: "Advanced Graph Algorithms", progress: 0, status: "locked",
        content: `### Shortest Path Algorithms
- **Dijkstra's** — single-source, non-negative weights, O((V+E) log V) with a min-heap.
- **Bellman-Ford** — single-source, handles negative weights, detects negative cycles, O(VE).
- **Floyd-Warshall** — all-pairs shortest path, O(V³), DP-based.`,
        questions: [
          {
            id: "icp-u3-t1-q1",
            question: "When would you choose Bellman-Ford over Dijkstra's algorithm?",
            answers: {
              detailed: "Dijkstra's algorithm uses a greedy approach and requires all edge weights to be non-negative. If a negative weight edge is present, Dijkstra's can produce incorrect results because it assumes that once a node is finalised, no shorter path to it can be found — but a negative edge later could produce one. Bellman-Ford, which relaxes all edges V−1 times, correctly handles negative weights. It also detects *negative weight cycles* (if a path's cost can be reduced indefinitely, a negative cycle exists — reportable after V−1 iterations if relaxation still occurs). Use Bellman-Ford when: the graph has negative edge weights, you need to detect negative cycles, or the graph is sparse and V is small (its O(VE) is acceptable).",
              simplified: "Use Bellman-Ford when the graph has negative edge weights. Dijkstra's fails in that case because it assumes no shorter path can be found after settling a node."
            },
            isFree: true
          },
          {
            id: "icp-u3-t1-q2",
            question: "Explain Floyd-Warshall's algorithm and its key recurrence relation.",
            answers: {
              detailed: "Floyd-Warshall computes *all-pairs* shortest paths in a weighted graph (with or without negative edges, but no negative cycles). It works by iteratively considering each vertex k as a potential intermediate node. **Recurrence:** dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]). Interpretation: the shortest path from i to j either doesn't go through k (keep current dist[i][j]) or goes through k (dist[i][k] + dist[k][j]). After considering all k from 1 to V, dist[i][j] contains the true shortest path. Initialisation: dist[i][j] = edge weight if (i,j) is an edge, 0 if i==j, ∞ otherwise. Time: O(V³). Space: O(V²). Negative cycle detection: if dist[i][i] < 0 after the algorithm, a negative cycle exists.",
              simplified: "Floyd-Warshall finds shortest paths between all pairs of vertices. It checks: 'Can going through vertex k make the path from i to j shorter?' and updates accordingly. Runs in O(V³)."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "icp-u4-t1", title: "Dynamic Programming (DP)", progress: 0, status: "locked",
        content: `### DP Fundamentals
Solves problems with **Overlapping Subproblems** and **Optimal Substructure**.
- **Memoization (Top-Down)** — recursive + cache results.
- **Tabulation (Bottom-Up)** — iteratively fill a table.

Classic problems: 0/1 Knapsack, LCS, LIS, Matrix Chain Multiplication.`,
        questions: [
          {
            id: "icp-u4-t1-q1",
            question: "What two properties must a problem have to be solvable by Dynamic Programming?",
            answers: {
              detailed: "1. **Optimal Substructure:** An optimal solution to the problem contains optimal solutions to its sub-problems. Example: the shortest path from A to C through B requires the shortest path from A to B AND from B to C. This allows building the global optimum from local optima. 2. **Overlapping Subproblems:** The same sub-problems are solved multiple times in a naive recursive approach. DP stores (memoizes) the result of each sub-problem so it's computed only once, reducing exponential recursive time to polynomial. Contrast with Divide-and-Conquer (Merge Sort) which also has optimal substructure but sub-problems are *disjoint* — not overlapping — so memoization doesn't help.",
              simplified: "DP requires: (1) Optimal Substructure — solving sub-problems optimally gives the overall optimal solution, and (2) Overlapping Subproblems — the same sub-problem appears multiple times, so caching saves repeated computation."
            },
            isFree: true
          },
          {
            id: "icp-u4-t1-q2",
            question: "Explain the 0/1 Knapsack problem and its DP solution.",
            answers: {
              detailed: "**Problem:** Given n items each with weight wᵢ and value vᵢ, and a knapsack of capacity W, find the subset of items maximising total value without exceeding W. Items cannot be split (0/1 — either taken or not). **DP Definition:** dp[i][w] = maximum value using first i items with weight capacity w. **Recurrence:** dp[i][w] = max(dp[i-1][w], dp[i-1][w-wᵢ] + vᵢ) if wᵢ ≤ w, else dp[i-1][w]. Base case: dp[0][w] = 0 for all w. **Interpretation:** For each item, decide to exclude it (dp[i-1][w]) or include it (value vᵢ + best solution with remaining capacity w−wᵢ). Time: O(nW), Space: O(nW), reducible to O(W) with 1D DP.",
              simplified: "Knapsack: maximise value without exceeding weight. DP table: dp[i][w] = best value with first i items and capacity w. For each item, choose: skip it or take it (if it fits). Fill the table bottom-up."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "icp-u5-t1", title: "Advanced Data Structures", progress: 0, status: "locked",
        content: `### Segment Trees
Answer range queries (sum, min, max) and point updates in O(log n). Built as a binary tree over an array — each node stores the result for a range.

### Fenwick Tree (Binary Indexed Tree)
Simpler implementation for prefix sum queries and point updates in O(log n). Uses bitwise operations to navigate the tree.`,
        questions: [
          {
            id: "icp-u5-t1-q1",
            question: "What is a Segment Tree and what operations does it support efficiently?",
            answers: {
              detailed: "A Segment Tree is a binary tree where: the leaves represent individual array elements, and each internal node represents the aggregate (sum, min, max, GCD, etc.) of a range of elements. **Build:** O(n) — fill leaves, compute internal nodes bottom-up. **Range Query:** O(log n) — decompose [l, r] into O(log n) pre-computed nodes and aggregate. **Point Update:** O(log n) — update the leaf and propagate changes up to the root. **Range Update with Lazy Propagation:** O(log n) — defer updates using lazy tags to avoid updating every element immediately. Segment Trees are the go-to structure for: range sum, range minimum query (RMQ), range GCD, and any associative operation over a subarray.",
              simplified: "A Segment Tree stores range aggregates (like sums) in a binary tree. It answers range queries (sum of elements l to r) and updates in O(log n) instead of O(n) for naive approaches."
            },
            isFree: true
          },
          {
            id: "icp-u5-t1-q2",
            question: "Compare Segment Trees and Fenwick Trees (BIT) — when would you use each?",
            answers: {
              detailed: "**Fenwick Tree (BIT):** Supports prefix sum queries and point updates in O(log n). Extremely simple to code (~10 lines). Uses bitwise trick i & (-i) to traverse. Only works for operations with an inverse (sum/subtraction — not min/max). Space: O(n). **Segment Tree:** Supports arbitrary associative range queries (sum, min, max, GCD, XOR) and both point and range updates (with lazy propagation). More code but far more flexible. Space: O(4n). **Use BIT when:** you only need prefix/range sum queries and point updates — it's faster in practice due to cache locality and simpler code. **Use Segment Tree when:** you need range updates, range min/max queries, or any non-invertible aggregate operation. BIT cannot do range min/max directly; Segment Tree can.",
              simplified: "BIT is simpler and faster for prefix sums only. Segment Tree is more powerful — handles range min/max, range updates, and any aggregate. Use BIT for sum problems; Segment Tree for everything else."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  "Data Visualization and Exploration With R": {
    "1": [], "2": [],
    "3": [
      {
        id: "dvr-u3-t1", title: "Advanced Graphics with ggplot2", progress: 0, status: "locked",
        content: `### The Grammar of Graphics (ggplot2)
ggplot2 builds plots as layers: **Data** → **Aesthetics** (mapping variables to visual properties) → **Geometries** (the actual marks: points, lines, bars) → **Facets** → **Themes**.`,
        questions: [
          {
            id: "dvr-u3-t1-q1",
            question: "What is the role of an 'Aesthetic' mapping in ggplot2?",
            answers: {
              detailed: "In ggplot2, aesthetics (aes()) define how *data variables are mapped to visual properties* of the plot. Common aesthetics: x and y (position), colour and fill (colour of points/bars), size (size of points), shape (shape of points), alpha (transparency), linetype (solid, dashed). Example: aes(x = weight, y = height, colour = gender) maps the 'weight' column to x-axis position, 'height' to y-axis, and 'gender' to point colour — automatically creating a legend. Aesthetic mappings are data-driven (inside aes()); fixed visual properties not tied to data go outside aes() as static arguments (e.g., colour = 'red').",
              simplified: "Aesthetics in ggplot2 map data columns to visual features. E.g., aes(x=age, y=income, colour=gender) automatically assigns age to x-axis, income to y-axis, and colours points by gender."
            },
            isFree: true
          },
          {
            id: "dvr-u3-t1-q2",
            question: "What is faceting in ggplot2 and when is it useful?",
            answers: {
              detailed: "Faceting creates a matrix of sub-plots, each showing a subset of the data defined by levels of a categorical variable. Two functions: **facet_wrap(~variable)** — wraps sub-plots into a grid, determining rows/columns automatically. **facet_grid(row_var ~ col_var)** — creates a strict grid where rows are defined by one variable and columns by another. Useful when: you want to compare the same plot across different groups without overlaying them (which can cause overplotting). Example: plot income vs education, faceted by country — you get one clean scatter plot per country rather than a cluttered single plot. Faceting is a key technique for multi-dimensional exploratory analysis.",
              simplified: "Faceting creates separate sub-plots for each category in a variable. Instead of overlaying all groups on one cluttered plot, you get one clean panel per group — great for comparing trends across categories."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "dvr-u4-t1", title: "Interactive Visualizations with Shiny & Plotly", progress: 0, status: "locked",
        content: `### R Shiny
Build interactive web apps entirely in R. A Shiny app has two parts: **ui** (layout and input widgets) and **server** (reactive logic connecting inputs to outputs).

### Plotly
Converts ggplot2 objects to interactive HTML widgets with \`ggplotly(plot)\`. Supports hover, zoom, and filter.`,
        questions: [
          {
            id: "dvr-u4-t1-q1",
            question: "What is R Shiny and what are its two main components?",
            answers: {
              detailed: "R Shiny is a framework that lets R users build interactive web applications without writing HTML, CSS, or JavaScript. A Shiny app has two main components: **1. UI (User Interface):** Defines the layout and input controls (sliders, dropdowns, text inputs) and output placeholders (plots, tables, text). Built using functions like fluidPage(), sliderInput(), plotOutput(). **2. Server Function:** Contains the reactive R code that listens for input changes and updates outputs accordingly. Uses reactive() and render*() functions (renderPlot, renderTable). Key concept: **Reactivity** — when a user changes an input, Shiny automatically re-executes only the server code that depends on that input, updating the relevant outputs.",
              simplified: "Shiny has two parts: the UI (what the user sees — buttons, sliders, plots) and the Server (the R code that reacts to UI inputs and updates outputs). Change a slider → server reruns relevant code → plot updates."
            },
            isFree: true
          },
          {
            id: "dvr-u4-t1-q2",
            question: "What is Plotly and how does it differ from static ggplot2 plots?",
            answers: {
              detailed: "Plotly is a graphing library that produces interactive, browser-based visualisations. In R, ggplot2 produces static images (PNG/PDF). Plotly converts these to HTML widgets (via ggplotly()) or creates interactive charts directly (via plot_ly()). Key interactive features: **Hover tooltips** — hover over a data point to see its exact values. **Zoom and Pan** — drag to zoom into a region; double-click to reset. **Click-to-filter** — click legend items to show/hide groups. **Download** — built-in camera button exports the plot. These features are embedded in a self-contained HTML file, shareable without R. Plotly is ideal for dashboards and reports where readers should explore the data, not just view it.",
              simplified: "ggplot2 produces static images. Plotly makes the same charts interactive — users can hover to see values, zoom in, or click legend items to filter. Great for dashboards and shareable reports."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "dvr-u5-t1", title: "Spatial Data & Mapping in R", progress: 0, status: "locked",
        content: `### Spatial Visualisation
Packages: **sf** (Simple Features — reads/writes spatial vector data), **leaflet** (interactive maps).

**Choropleth maps** colour geographic polygons based on a numerical variable — ideal for showing regional statistics.`,
        questions: [
          {
            id: "dvr-u5-t1-q1",
            question: "What is a choropleth map and when is it the appropriate visualisation choice?",
            answers: {
              detailed: "A choropleth map is a thematic map where geographic regions (countries, states, districts) are shaded or coloured according to the value of a statistical variable for that region. Example: colouring Indian states by literacy rate — darker shades indicating higher rates. Appropriate when: (1) Your data has a geographic component that is the unit of analysis (not just a location attribute). (2) The variable varies meaningfully across regions. (3) The audience understands the geographic boundaries shown. Caveats: (a) Large regions visually dominate even with small populations — consider a cartogram instead. (b) Choice of colour scale (sequential, diverging) and bin breaks (equal interval, quantile, Jenks) significantly affects interpretation. (c) Avoid for point data — use dot maps or bubble maps instead.",
              simplified: "A choropleth map colours geographic regions (states, countries) based on a data value. Use it when data is naturally organised by region (e.g., population density by state). Darker/lighter shading shows higher/lower values."
            },
            isFree: true
          },
          {
            id: "dvr-u5-t1-q2",
            question: "What does the sf package provide and why is it important for spatial data in R?",
            answers: {
              detailed: "The **sf** (Simple Features) package provides a standard, tidy interface for handling geographic vector data in R. It represents spatial objects (points, lines, polygons) as standard R data frames where one column (geometry) stores the spatial information alongside regular attribute columns — enabling use of dplyr and ggplot2 directly on spatial data. sf reads/writes standard geospatial formats: GeoJSON, Shapefile (.shp), GeoPackage. It implements the ISO 19125 Simple Features standard, ensuring interoperability with PostGIS, QGIS, and other GIS tools. Coordinate Reference Systems (CRS) are managed with st_transform(). Spatial operations (st_intersects, st_buffer, st_area, st_union) are integrated. It replaces the older sp package and is now the standard in R spatial analysis.",
              simplified: "The sf package lets R treat geographic shapes (points, lines, polygons) like regular data frames. It reads map files (Shapefile, GeoJSON), handles coordinate systems, and works with ggplot2 and dplyr for spatial analysis."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  "Cyber Security": {
    "1": [], "2": [],
    "3": [
      {
        id: "cs-u3-t1", title: "Web Application Attacks (OWASP Top 10)", progress: 0, status: "locked",
        content: `### Common Web Vulnerabilities
- **SQL Injection (SQLi)** — attacker inserts malicious SQL into input fields, manipulating the database query.
- **Cross-Site Scripting (XSS)** — malicious scripts injected into trusted web pages, executed in victims' browsers.
- **CSRF** — tricks an authenticated user into unknowingly submitting a malicious request.`,
        questions: [
          {
            id: "cs-u3-t1-q1",
            question: "How does a SQL Injection attack work? Give an example.",
            answers: {
              detailed: "SQL Injection exploits insufficient input validation where user input is directly concatenated into an SQL query. Example: a login form builds the query: SELECT * FROM users WHERE username='INPUT' AND password='INPUT'. If the attacker enters the username as: `admin' --`, the query becomes: SELECT * FROM users WHERE username='admin' --' AND password='anything'. The `--` is a SQL comment, commenting out the password check. The query returns the admin user without checking the password — authentication bypassed. Impact ranges from authentication bypass and data exfiltration to data deletion (DROP TABLE) and OS command execution (in some DB configurations). Prevention: *Prepared Statements (Parameterised Queries)* where the query structure is fixed and user input is passed as a separate parameter, never interpreted as SQL syntax.",
              simplified: "SQLi inserts SQL code into input fields. E.g., entering `admin'--` in a login form comments out the password check, logging in as admin without a password. Fixed by using parameterised queries instead of concatenating user input."
            },
            isFree: true
          },
          {
            id: "cs-u3-t1-q2",
            question: "What is XSS and what is the difference between Stored and Reflected XSS?",
            answers: {
              detailed: "Cross-Site Scripting (XSS) injects malicious JavaScript into a web page, which then executes in the browser of any user who views that page. **Stored (Persistent) XSS:** The malicious script is *stored on the server* (e.g., in a comment field in the database). Every user who loads the page gets served the malicious script. More dangerous — affects all visitors without attacker interaction. **Reflected (Non-Persistent) XSS:** The malicious script is embedded in a URL parameter and is *reflected off the server* in the response (e.g., a search page that displays 'You searched for: <SCRIPT>'). The attacker must trick a victim into clicking the crafted URL. Only affects the victim who clicks the link. Prevention: **Output Encoding** (HTML-encode all dynamic content), **Content Security Policy (CSP)** headers, input validation.",
              simplified: "XSS injects JavaScript into web pages. Stored XSS saves the script on the server (affects all visitors). Reflected XSS embeds the script in a URL (only affects who clicks the link). Fix: encode all output and use CSP headers."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "cs-u4-t1", title: "Malware & Threat Actors", progress: 0, status: "locked",
        content: `### Malware Types
- **Virus** — attaches to legitimate files; spreads when files are shared.
- **Worm** — self-replicates across networks without a host file.
- **Trojan** — disguises itself as legitimate software; does not self-replicate.
- **Ransomware** — encrypts files; demands payment for decryption key.
- **Rootkit** — hides attacker presence at OS/firmware level.`,
        questions: [
          {
            id: "cs-u4-t1-q1",
            question: "What distinguishes a Worm from a Virus?",
            answers: {
              detailed: "A **Virus** is a malicious code fragment that must attach itself to a legitimate *host file* (executable, document). It cannot self-propagate — it spreads when an infected file is manually shared (copied, emailed, downloaded) and then executed. A **Worm** is a *standalone* malicious program that self-replicates and spreads *autonomously* across networks by exploiting vulnerabilities (e.g., unpatched OS bugs, open network shares, weak credentials). It does not need to attach to a host file. Example: the 2017 WannaCry ransomware was worm-like — it spread across networks using the EternalBlue SMB exploit without any user interaction. Impact: worms spread faster and wider than viruses; a single unpatched system can infect an entire network within minutes.",
              simplified: "A virus attaches to a file and spreads only when the infected file is shared. A worm is standalone and spreads itself automatically across networks by exploiting vulnerabilities — no human action needed."
            },
            isFree: true
          },
          {
            id: "cs-u4-t1-q2",
            question: "What is Ransomware and what steps should be taken after an attack?",
            answers: {
              detailed: "Ransomware is malware that *encrypts the victim's files* using strong asymmetric encryption (e.g., RSA + AES) and demands a ransom payment (usually cryptocurrency) in exchange for the decryption key. The attacker holds the private key; without it, decryption is computationally infeasible. Steps after an attack: (1) **Isolate** — immediately disconnect infected systems from the network to prevent spread. (2) **Preserve** — do not restart or wipe systems (forensic evidence); capture memory if possible. (3) **Identify** — identify the ransomware family (ID Ransomware tool) to check if a decryptor is publicly available. (4) **Restore from backups** — the only reliable recovery method; this is why offline/immutable backups are critical. (5) **Report** — notify relevant authorities (CERT-In in India). (6) **Post-incident analysis** — identify the initial vector (phishing, unpatched system) and remediate.",
              simplified: "Ransomware encrypts your files and demands payment for the key. Response: isolate the system, identify the malware strain (a free decryptor may exist), restore from clean backups, and report the incident. Never pay the ransom — it encourages attacks and doesn't guarantee recovery."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "cs-u5-t1", title: "Incident Response Lifecycle", progress: 0, status: "locked",
        content: `### The IR Lifecycle (NIST SP 800-61)
1. **Preparation** — policies, IR team, tools, playbooks.
2. **Detection & Analysis** — identify and confirm the incident.
3. **Containment** — short-term (isolate) and long-term (patch).
4. **Eradication** — remove the threat (malware, backdoors).
5. **Recovery** — restore systems; validate integrity.
6. **Post-Incident Activity** — lessons learned; update defences.`,
        questions: [
          {
            id: "cs-u5-t1-q1",
            question: "What is the purpose of the Containment phase in Incident Response?",
            answers: {
              detailed: "Containment's goal is to *limit the damage* caused by the incident and prevent it from spreading further — without yet eradicating the threat. Two sub-phases: **Short-Term Containment:** Immediate actions to halt spread: isolating affected systems from the network (unplugging network cables, disabling ports at the switch), blocking attacker IPs at the firewall, resetting compromised credentials. Done urgently, sometimes sacrificing system availability. **Long-Term Containment:** Applying temporary fixes that allow limited operations while the proper eradication is prepared: patching the exploited vulnerability on less-critical systems, increasing monitoring, rerouting traffic. Important: before containing, *preserve forensic evidence* (memory dumps, logs) — eradication destroys evidence. The order matters: identify scope → contain → preserve evidence → eradicate.",
              simplified: "Containment stops the attack from spreading without fully fixing it yet. Short-term: disconnect infected systems now. Long-term: apply temporary patches. Always preserve forensic evidence before eradicating."
            },
            isFree: true
          },
          {
            id: "cs-u5-t1-q2",
            question: "Why is the Post-Incident Activity (Lessons Learned) phase important?",
            answers: {
              detailed: "The Lessons Learned phase transforms a security incident from a pure negative event into an organisational learning opportunity. It involves: (1) **Root Cause Analysis** — what vulnerability or gap allowed the incident to occur? (2) **Timeline reconstruction** — when did the attack start? How long did it go undetected (dwell time)? (3) **Process gaps** — were the IR playbooks adequate? Did the team have the right tools? (4) **Policy updates** — revise security policies, patch management schedules, and user awareness training based on findings. (5) **Metrics** — Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR) tracked over time. Without this phase, organisations repeat the same mistakes. Regulatory frameworks (ISO 27001, NIST CSF) mandate post-incident reviews.",
              simplified: "Lessons Learned prevents the same incident from happening again. Teams review what went wrong, how long it took to detect, what policies need updating, and how to improve defences — turning every incident into a security improvement."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  "Natural Language Processing(NLP)": {
    "1": [], "2": [],
    "3": [
      {
        id: "nlp-u3-t1", title: "Syntax, Parsing, and POS Tagging", progress: 0, status: "locked",
        content: `### Syntactic Analysis
- **POS Tagging** — assigns grammatical categories (NOUN, VERB, ADJ) to tokens using probabilistic models (HMM, CRF) or neural taggers.
- **Parsing** — builds a parse tree showing the grammatical structure of a sentence according to a context-free grammar.`,
        questions: [
          {
            id: "nlp-u3-t1-q1",
            question: "What does POS tagging achieve and why is it a prerequisite for many NLP tasks?",
            answers: {
              detailed: "Part-of-Speech (POS) tagging assigns a grammatical label (NOUN, VERB, ADJECTIVE, ADVERB, PREPOSITION, etc.) to each token in a sentence based on both its dictionary definition and its context. Example: 'The bank can guarantee deposits' — 'bank' is NOUN, 'can' is MODAL, 'guarantee' is VERB. Why it's a prerequisite: (1) **Named Entity Recognition (NER)** — most named entities are proper NOUNs; POS tags help filter. (2) **Parsing** — grammatical structure depends on word categories. (3) **Sentiment Analysis** — adjectives and adverbs carry sentiment; POS tags help identify them. (4) **Disambiguation** — 'book a flight' (VERB) vs 'read a book' (NOUN) — POS tags resolve polysemy. (5) **Machine Translation** — target language word order depends on source POS structure.",
              simplified: "POS tagging labels each word with its grammatical role (noun, verb, adjective etc.). It's a foundation step — many tasks (parsing, entity recognition, sentiment analysis) depend on knowing each word's grammatical category."
            },
            isFree: true
          },
          {
            id: "nlp-u3-t1-q2",
            question: "What is the difference between Constituency Parsing and Dependency Parsing?",
            answers: {
              detailed: "**Constituency Parsing** (Phrase Structure Parsing) breaks a sentence into nested *phrases* (constituents) according to a context-free grammar. It produces a parse tree where internal nodes are phrase categories (NP, VP, PP) and leaves are words. Example: [S [NP The cat] [VP [V sat] [PP [P on] [NP the mat]]]]. Shows phrase groupings and hierarchical structure. **Dependency Parsing** identifies binary grammatical *relationships* between individual words. Each word (except root) has exactly one head, and the edge is labelled with the dependency type (nsubj, dobj, amod). Example: 'cat' ←nsubj— 'sat', 'mat' ←pobj— 'on'. More direct encoding of who-does-what-to-whom. Dependency parsing is more useful for information extraction and cross-lingual tasks (word order independent).",
              simplified: "Constituency parsing groups words into nested phrases (noun phrase, verb phrase). Dependency parsing shows direct word-to-word relationships (subject → verb → object). Dependency parsing is more useful for extracting meaning; constituency for understanding sentence structure."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "nlp-u4-t1", title: "Semantics & Word Embeddings", progress: 0, status: "locked",
        content: `### Word Embeddings
Instead of sparse one-hot vectors, represent words as dense real-valued vectors (typically 50–300 dimensions) where semantic similarity corresponds to vector closeness.

- **Word2Vec** (Mikolov, 2013) — two training objectives: CBOW (predict word from context) and Skip-gram (predict context from word).
- **GloVe** — global co-occurrence statistics.
- **FastText** — character n-grams; handles rare and misspelled words.`,
        questions: [
          {
            id: "nlp-u4-t1-q1",
            question: "Why are Word Embeddings superior to One-Hot Encoding for NLP tasks?",
            answers: {
              detailed: "One-Hot Encoding represents each word as a binary vector of length |V| (vocabulary size) with a single 1 and rest 0s. Problems: (1) **Dimensionality** — for a 100K-word vocabulary, each word is a 100K-dimensional sparse vector. (2) **No semantic information** — all words are equidistant from each other (cosine similarity between any two one-hot vectors = 0). 'Dog' and 'Cat' are as 'different' as 'Dog' and 'Table'. (3) **No generalisation** — the model cannot leverage the fact that 'dogs' and 'puppies' are related. Word Embeddings solve all three: (1) Dense, low-dimensional (300-D vs 100K-D). (2) Capture semantic similarity — cosine(dog, cat) > cosine(dog, table). (3) Enable analogy reasoning — King − Man + Woman ≈ Queen (vector arithmetic). Embeddings are pretrained on large corpora and transfer to downstream tasks.",
              simplified: "One-hot encoding gives every word a unique but unrelated vector — 'dog' and 'cat' are as different as 'dog' and 'democracy'. Word embeddings put similar words in similar positions in vector space, allowing the model to understand that 'dog' and 'puppy' are related."
            },
            isFree: true
          },
          {
            id: "nlp-u4-t1-q2",
            question: "Explain the Word2Vec Skip-gram model — how does it train embeddings?",
            answers: {
              detailed: "The Skip-gram model trains word embeddings by learning to *predict context words given a centre word*. For a sentence like 'The quick brown fox jumps', with window size 2, the model creates training pairs: (fox, quick), (fox, brown), (fox, jumps), (fox, over). **Architecture:** Input = one-hot vector of the centre word → Embedding Matrix W (|V| × d) → embedding vector → output layer W' (d × |V|) → softmax → predicted probability distribution over vocabulary. Training objective: maximise P(context word | centre word). After training, W becomes the embedding matrix — each row is the word vector. The model is discarded; only W is kept. Key insight: words appearing in similar contexts (contexts shape meaning — distributional hypothesis) get similar embedding vectors because they are trained to predict the same context words.",
              simplified: "Skip-gram trains by trying to predict surrounding words from a centre word. E.g., given 'fox', predict 'quick', 'brown', 'jumps'. Words appearing in similar contexts end up with similar vectors. The learned lookup table is the embedding matrix."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "nlp-u5-t1", title: "Transformers & Large Language Models", progress: 0, status: "locked",
        content: `### The Transformer Architecture
Introduced in 'Attention Is All You Need' (Vaswani et al., 2017). Processes entire sequences *simultaneously* (unlike RNNs).

**Self-Attention:** For each token, computes how much attention to pay to every other token.
$$\text{Attention}(Q,K,V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

**Multi-Head Attention:** Multiple attention heads capture different types of relationships.

Modern LLMs (BERT, GPT, LLaMA) are built on stacks of Transformer layers.`,
        questions: [
          {
            id: "nlp-u5-t1-q1",
            question: "What is the Self-Attention mechanism and what problem does it solve compared to RNNs?",
            answers: {
              detailed: "Self-Attention (or Intra-Attention) allows each token in a sequence to attend to (gather context from) *every other token simultaneously*. For token i, it computes a weighted sum of all token representations, where weights are determined by compatibility between token i and all other tokens. This solves the core RNN limitation: **long-range dependencies**. In an RNN, information from position 1 must pass through every intermediate hidden state to reach position 100 — each step risks information loss (vanishing gradient). Self-Attention creates *direct connections* between any two positions regardless of distance, with O(1) information path length. Additionally, RNNs are sequential (position 2 computed after position 1), making them slow to train. Transformers process all positions *in parallel*, leveraging modern GPU hardware for much faster training.",
              simplified: "Self-attention lets every word in a sentence look directly at every other word to understand context. Unlike RNNs (which process one word at a time and lose context over long distances), attention connects any two words directly — regardless of how far apart they are."
            },
            isFree: true
          },
          {
            id: "nlp-u5-t1-q2",
            question: "What is the difference between BERT and GPT in terms of architecture and use case?",
            answers: {
              detailed: "**BERT (Bidirectional Encoder Representations from Transformers):** Uses only the *Encoder* stack of the Transformer. Trained with Masked Language Modelling (MLM — predict masked tokens) and Next Sentence Prediction (NSP). Bidirectional — each token attends to both left and right context simultaneously. Excels at *understanding* tasks: sentiment analysis, named entity recognition, question answering, text classification. Fine-tuned by adding a task-specific head. **GPT (Generative Pre-trained Transformer):** Uses only the *Decoder* stack with causal (left-to-right) masking — each token can only attend to previous tokens. Trained with next-token prediction (language modelling). Auto-regressive — generates text one token at a time. Excels at *generation* tasks: text generation, summarisation, translation, code generation. Key distinction: BERT reads the whole sentence at once (encoder); GPT generates the next word step by step (decoder).",
              simplified: "BERT is an encoder — it reads the full sentence bidirectionally, making it great for classification and extraction tasks. GPT is a decoder — it generates text left to right one token at a time, making it great for text generation and conversation."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  "Design Patterns": {
    "1": [], "2": [],
    "3": [
      {
        id: "dp-u3-t1", title: "Behavioral Patterns", progress: 0, status: "locked",
        content: `### Behavioral Design Patterns
Concerned with communication and responsibility between objects.
- **Observer** — define one-to-many dependency; subject notifies all observers on state change.
- **Strategy** — define a family of algorithms; encapsulate each; make them interchangeable at runtime.
- **Command** — encapsulate a request as an object; supports undo/redo.`,
        questions: [
          {
            id: "dp-u3-t1-q1",
            question: "When should the Strategy pattern be used? Give an example.",
            answers: {
              detailed: "Use the Strategy pattern when: (1) You have multiple algorithms for a specific task that are interchangeable. (2) You want to switch algorithms at runtime without changing the client code. (3) You want to isolate algorithm implementation from the code that uses it (Open/Closed Principle). Structure: a Context class holds a reference to a Strategy interface. Concrete strategy classes implement the interface with different algorithms. At runtime, the context is configured with a concrete strategy. Example: A payment system with a single PaymentProcessor class. Instead of a giant if/else for payment types, define a PaymentStrategy interface with a pay() method, with CreditCardStrategy, UpiStrategy, NetBankingStrategy as implementations. At runtime, inject the appropriate strategy. Adding a new payment method = new class only, no modification to existing code.",
              simplified: "Use Strategy when you have multiple ways of doing the same task and want to switch between them at runtime. E.g., a sorting algorithm that can swap between QuickSort, MergeSort, or BubbleSort without changing the calling code."
            },
            isFree: true
          },
          {
            id: "dp-u3-t1-q2",
            question: "Explain the Command pattern and how it enables undo/redo functionality.",
            answers: {
              detailed: "The Command pattern encapsulates a *request as an object*, decoupling the sender of a request from its receiver. Each command object implements an interface with execute() and undo() methods. The Invoker (e.g., a toolbar button) holds a command object and calls execute() on it — it doesn't know what the command does. Undo/Redo implementation: maintain a *history stack* of executed commands. When the user clicks Undo, pop the top command and call undo() on it. When Redo is needed, maintain a separate redo stack. Example: In a text editor, a TypeCommand stores the typed text. execute() inserts it; undo() removes it. A MoveCommand stores old and new cursor positions; undo() moves the cursor back. Each action becomes a reversible object, making complex undo stacks trivial to implement.",
              simplified: "Command wraps an action in an object with execute() and undo(). A history stack of commands enables unlimited undo — just call undo() on each command in reverse order. Used in text editors, drawing apps, and version control."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "dp-u4-t1", title: "Structural Patterns", progress: 0, status: "locked",
        content: `### Structural Design Patterns
Concerned with how classes and objects are composed into larger structures.
- **Adapter** — converts an interface into another; allows incompatible classes to work together.
- **Decorator** — adds behaviour to an object dynamically without altering its class.
- **Facade** — provides a simplified interface to a complex subsystem.`,
        questions: [
          {
            id: "dp-u4-t1-q1",
            question: "What problem does the Adapter pattern solve? Give a real-world analogy.",
            answers: {
              detailed: "The Adapter pattern (also called Wrapper) solves the problem of *interface incompatibility* between two classes that cannot be modified but need to work together. It introduces an Adapter class that wraps the *Adaptee* (the class with the incompatible interface) and exposes the *Target* interface expected by the client. Structure: Client calls Target interface → Adapter implements Target and holds a reference to Adaptee → Adapter translates Target calls into Adaptee calls. Real-world analogy: An electrical plug adapter. Your Indian charger (Adaptee) has a round-pin plug, but the UK socket (Target) accepts square pins. The adapter converts one plug shape to the other without modifying either. In software: integrating a third-party analytics library (Adaptee) that uses a different method signature than your logging interface (Target) — write an Adapter that bridges them.",
              simplified: "Adapter bridges two incompatible interfaces. Like a plug adapter converting an Indian round pin to a UK square pin — it doesn't change either plug, it just makes them work together."
            },
            isFree: true
          },
          {
            id: "dp-u4-t1-q2",
            question: "How does the Decorator pattern differ from Inheritance for extending behaviour?",
            answers: {
              detailed: "Inheritance extends behaviour *statically at compile time* — you define a subclass that adds new methods/overrides. Problems: (1) Inflexible — behaviours are baked in; you need a class for every combination (e.g., BoldItalicText, BoldUnderlineText). (2) Violates OCP if you must modify existing classes. The Decorator pattern extends behaviour *dynamically at runtime* by wrapping an object in another object that implements the same interface but adds behaviour before/after delegating to the wrapped object. You compose decorators: BoldDecorator(ItalicDecorator(Text)). Benefits: (1) Any combination of behaviours without class explosion. (2) Follows Single Responsibility — each decorator adds one responsibility. (3) Open/Closed — add new decorators without touching existing code. Trade-off: many small objects; can be harder to debug. Java's I/O streams (BufferedReader wrapping FileReader wrapping InputStream) are the classic real-world example.",
              simplified: "Inheritance adds behaviour at compile time (requires new subclasses for every combination). Decorator adds behaviour at runtime by wrapping objects — compose decorators freely without class explosion. Java's I/O streams use this pattern."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "dp-u5-t1", title: "Architectural Patterns — MVC & Beyond", progress: 0, status: "locked",
        content: `### Model-View-Controller (MVC)
Separates an application into three concerns:
- **Model** — data and business logic (no UI awareness).
- **View** — UI presentation (reads Model; no business logic).
- **Controller** — processes user input; updates Model; selects View.

### Related Patterns
- **MVP** — Presenter handles all UI logic; View is passive.
- **MVVM** — ViewModel exposes data streams; View binds to them (used in Angular, SwiftUI).`,
        questions: [
          {
            id: "dp-u5-t1-q1",
            question: "Explain the MVC pattern and the responsibility of each component.",
            answers: {
              detailed: "**Model:** Represents the application's data, business rules, and logic. Completely independent of the UI — has no knowledge of how data is displayed. Manages data access, validation, and computation. Notifies observers (Views) when data changes. **View:** Responsible solely for rendering the UI — displaying data it receives from the Controller (in passive MVC) or from the Model directly. Multiple Views can display the same Model data differently (e.g., a table and a chart showing the same dataset). Contains no business logic. **Controller:** The mediator. Receives user input (HTTP requests, button clicks), processes it (may validate, transform), updates the Model accordingly, and selects which View to render with the appropriate Model data. Benefits of MVC: separation of concerns allows independent development/testing of Model, View, and Controller; Views are swappable without touching business logic.",
              simplified: "Model = data and rules. View = what the user sees. Controller = handles user input and updates the Model and View. Separating these three means you can change the UI without touching business logic, and vice versa."
            },
            isFree: true
          },
          {
            id: "dp-u5-t1-q2",
            question: "What is the difference between MVC, MVP, and MVVM?",
            answers: {
              detailed: "All three separate UI from business logic but differ in how they handle UI logic and data flow. **MVC:** Controller handles input and updates both Model and View. View can directly observe and read the Model. Problem: tight View-Model coupling; Controller can become bloated. Used in: Spring MVC, Ruby on Rails, ASP.NET MVC. **MVP:** Presenter replaces Controller. View is *passive* — it delegates all user events to the Presenter and only renders what the Presenter tells it to. No direct Model-View contact. Easier to unit test the View (via a mock interface). Used in: Android (older), WinForms. **MVVM:** ViewModel exposes observable data streams (not methods). View *binds* to ViewModel properties — changes propagate automatically through data binding without the ViewModel knowing about the View. Best for reactive/declarative UIs. Used in: Angular (TypeScript), SwiftUI, Jetpack Compose, WPF.",
              simplified: "MVC: View can access Model directly; Controller routes. MVP: Presenter fully controls the View (View is passive and dumb). MVVM: View auto-updates by binding to ViewModel observables — no explicit update calls needed. MVVM is best for modern reactive UIs."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  "Data Analytics: Descriptive, Predictive, Prescriptive": {
    "1": [], "2": [],
    "3": [
      {
        id: "da-u3-t1", title: "Predictive Analytics & Regression", progress: 0, status: "locked",
        content: `### Regression Models
- **Linear Regression** — models a linear relationship between features and a continuous output: ŷ = β₀ + β₁x₁ + ... + βₙxₙ. Minimises Mean Squared Error.
- **Logistic Regression** — for binary classification. Uses the sigmoid function to output probabilities ∈ (0,1). Decision boundary: P ≥ 0.5 → class 1.`,
        questions: [
          {
            id: "da-u3-t1-q1",
            question: "What is the difference between Linear Regression and Logistic Regression?",
            answers: {
              detailed: "**Linear Regression:** Used for *regression* (predicting a continuous numerical value). Output is unbounded: ŷ ∈ (−∞, +∞). Loss function: Mean Squared Error (MSE). Example: predicting house prices, temperature, salary. Assumes a linear relationship between features and output. **Logistic Regression:** Despite the name, used for *binary classification*. Applies a sigmoid function σ(z) = 1/(1+e⁻ᶻ) to the linear combination of inputs, squashing the output to (0,1) — interpreted as probability P(class=1|X). Threshold (typically 0.5) converts probability to a class label. Loss function: Binary Cross-Entropy. Example: spam/not-spam, disease/no-disease. Key difference: type of output (continuous vs probability/class); loss function; the sigmoid activation.",
              simplified: "Linear regression predicts a number (e.g., house price). Logistic regression predicts a probability between 0 and 1 and classifies into one of two categories (e.g., spam or not spam). Both fit a line, but logistic applies sigmoid to constrain output to [0,1]."
            },
            isFree: true
          },
          {
            id: "da-u3-t1-q2",
            question: "What is overfitting and how can it be detected and prevented?",
            answers: {
              detailed: "Overfitting occurs when a model learns the training data too well — memorising noise and specific patterns that don't generalise to unseen data. Signs: (1) Very low training error but high validation/test error (large train-test accuracy gap). (2) Model is overly complex (too many parameters relative to training samples). Prevention: (1) **Regularisation** — L1 (Lasso, drives some weights to zero, feature selection) or L2 (Ridge, shrinks weights but not to zero) penalise large coefficients. (2) **Cross-Validation** — use k-fold CV to estimate generalisation performance on held-out data. (3) **Early Stopping** — in iterative methods (neural nets, gradient boosting), stop training when validation error starts increasing. (4) **More Data** — the most reliable fix; larger training sets reduce overfitting. (5) **Simpler model** — reduce model complexity (fewer features, shallower tree depth, fewer neurons).",
              simplified: "Overfitting = model memorises training data but fails on new data (low train error, high test error). Fix by: adding regularisation (L1/L2), using cross-validation, getting more data, or using a simpler model."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "da-u4-t1", title: "Time Series Forecasting", progress: 0, status: "locked",
        content: `### Time Series Components
- **Trend** — long-term direction (upward, downward, flat).
- **Seasonality** — regular periodic fluctuations (daily, weekly, annual).
- **Noise (Residual)** — random, unpredictable variation.

### ARIMA
AutoRegressive Integrated Moving Average. Combines:
- **AR(p)** — regression on past values.
- **I(d)** — differencing to make series stationary.
- **MA(q)** — regression on past forecast errors.`,
        questions: [
          {
            id: "da-u4-t1-q1",
            question: "What are the three main components of a Time Series?",
            answers: {
              detailed: "1. **Trend (T):** The long-term, smooth directional movement in the data. Can be upward (GDP growth over decades), downward (cost of solar panels), or flat. Identified by smoothing the data (moving average, regression). 2. **Seasonality (S):** Regular, periodic fluctuations that repeat at known intervals — weekly (retail sales spike on weekends), monthly (utility bills higher in summer), annual (retail sales spike in December). Amplitude and period are fixed. Distinguished from cycles by having a fixed, predictable period. 3. **Noise/Residual (ε):** The random, irregular variation remaining after trend and seasonality are removed. Cannot be predicted or modelled — represents genuine randomness (measurement error, unexpected events). Classical decomposition: Y = T + S + ε (additive) or Y = T × S × ε (multiplicative, for data where variation grows with the series).",
              simplified: "Time series = Trend (long-term direction) + Seasonality (regular recurring patterns like holiday peaks) + Noise (random unpredictable variation). A good model captures the first two; the third is irreducible error."
            },
            isFree: true
          },
          {
            id: "da-u4-t1-q2",
            question: "What does 'stationarity' mean in time series and why does ARIMA require it?",
            answers: {
              detailed: "A time series is *stationary* if its statistical properties (mean, variance, autocorrelation structure) are constant over time. Non-stationary series: stock prices (upward trend — mean changes), seasonal data (variance changes). Stationarity matters because ARIMA's AR and MA components model autocorrelation — the relationship between an observation and its past values — which is only stable and mathematically tractable if the series is stationary. The 'I(d)' component of ARIMA makes the series stationary through *differencing*: replace the series with the differences between consecutive values (Yₜ − Yₜ₋₁). First-order differencing often removes trends; seasonal differencing removes seasonality. The Augmented Dickey-Fuller (ADF) test is used to formally test for stationarity. The number of differences d needed before achieving stationarity sets the d parameter in ARIMA(p,d,q).",
              simplified: "A stationary series has a constant mean and variance over time. ARIMA needs this because its math assumes the relationships between past and present values don't change. Non-stationary data (e.g., trending stock prices) is transformed by differencing until it becomes stationary."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "da-u5-t1", title: "Prescriptive Analytics & Optimisation", progress: 0, status: "locked",
        content: `### Prescriptive Analytics
Goes beyond predicting *what will happen* (predictive) to recommending *what to do* (prescriptive).

Uses: **Linear Programming** (LP), **Integer Programming**, **Simulation**, **Heuristics** (Genetic Algorithms, Simulated Annealing).

Example: LP optimises supply chain routing — minimise cost subject to supply, demand, and capacity constraints.`,
        questions: [
          {
            id: "da-u5-t1-q1",
            question: "How does Prescriptive Analytics differ from Predictive Analytics?",
            answers: {
              detailed: "**Predictive Analytics** answers 'What is likely to happen?' It uses historical data and statistical/ML models to forecast future outcomes (e.g., 'There is a 75% probability that this customer will churn next month'). It describes future states but doesn't act on them. **Prescriptive Analytics** answers 'What should we do about it?' It takes the predicted outcomes as inputs and uses optimisation algorithms, simulation, and decision models to recommend the *best course of action* given constraints (e.g., 'Offer this customer a ₹200 discount — modelling shows this maximises expected lifetime value'). Hierarchy: Descriptive (what happened?) → Diagnostic (why?) → Predictive (what will happen?) → Prescriptive (what should we do?). Prescriptive is the most advanced and generates direct business value but requires both predictive models and optimisation expertise.",
              simplified: "Predictive says 'this customer will likely churn.' Prescriptive goes further: 'here is the exact action to take to prevent it, and here's the optimal budget to spend.' Predictive forecasts; prescriptive decides."
            },
            isFree: true
          },
          {
            id: "da-u5-t1-q2",
            question: "What is Linear Programming and what are its components?",
            answers: {
              detailed: "Linear Programming (LP) is a mathematical method for optimising (maximising or minimising) a *linear objective function* subject to a set of *linear equality and inequality constraints*, with all variables being continuous. **Components:** 1. **Decision Variables** — the quantities to be determined (e.g., x₁ = units of product A to produce). 2. **Objective Function** — the linear expression to optimise: maximise/minimise Z = c₁x₁ + c₂x₂ + ... 3. **Constraints** — linear inequalities reflecting resource limitations: a₁₁x₁ + a₁₂x₂ ≤ b₁ (e.g., machine hours ≤ 100). 4. **Non-negativity** — xᵢ ≥ 0 (cannot produce negative quantities). Solved with the *Simplex Method* or interior-point methods. The optimal solution lies at a vertex of the feasible polytope. Applications: production planning, resource allocation, transportation, diet optimisation.",
              simplified: "LP finds the best (max/min) value of a linear expression (like profit) subject to linear constraints (like resource limits). Components: decision variables (what to decide), objective function (what to optimise), constraints (the limits). Solved by the Simplex method."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  "Information Security": {
    "1": [], "2": [],
    "3": [
      {
        id: "is-u3-t1", title: "Access Control Models", progress: 0, status: "locked",
        content: `### Access Control Models
- **DAC (Discretionary)** — the *data owner* decides who can access resources. Flexible but prone to over-sharing. (e.g., Unix file permissions).
- **MAC (Mandatory)** — the *OS/system* enforces access based on security labels (Top Secret, Secret, Public). Users cannot override. (e.g., SELinux, military systems).
- **RBAC (Role-Based)** — access granted based on *job role* (Admin, Editor, Viewer). Widely used in enterprise applications.`,
        questions: [
          {
            id: "is-u3-t1-q1",
            question: "What is RBAC and why is it preferred in enterprise environments?",
            answers: {
              detailed: "Role-Based Access Control (RBAC) assigns permissions to *roles* rather than directly to individual users. Users are then assigned to roles. Example: the 'Manager' role has permission to approve expenses and view salary data. All users assigned the Manager role inherit these permissions. Why preferred in enterprises: (1) **Scalability** — adding a new employee: just assign their role. Removing: revoke the role. No need to manage 500 individual permission sets. (2) **Least Privilege** — users get exactly the permissions their role requires, nothing more. (3) **Audit-friendly** — clear mapping of who can do what; easy to review and demonstrate compliance. (4) **Separation of Duties** — conflicting roles (e.g., 'Invoice Creator' and 'Payment Approver') can be prevented, reducing fraud risk. Hierarchical RBAC allows roles to inherit from parent roles.",
              simplified: "RBAC assigns permissions to job roles, then assigns users to roles. New employee? Assign a role — done. No individual permission management. Enterprise-friendly: scalable, auditable, and enforces least privilege."
            },
            isFree: true
          },
          {
            id: "is-u3-t1-q2",
            question: "Compare DAC and MAC access control models.",
            answers: {
              detailed: "**DAC (Discretionary Access Control):** The *resource owner* (user who created a file) decides who can read, write, or execute it. Access is at the owner's discretion. Implementation: Unix/Linux file permission bits (rwx for owner, group, others), Windows ACLs. Weakness: a user can share a sensitive file with anyone — including malicious processes running under their account (Confused Deputy Problem). Trojan horses can exfiltrate data silently. **MAC (Mandatory Access Control):** Access is controlled by the *operating system* based on *security labels* (classifications like Top Secret, Secret, Unclassified) assigned to both subjects (users/processes) and objects (files, devices). The Bell-LaPadula model governs MAC: a subject can only read objects at their level or below (no read up) and write to their level or above (no write down — prevents leaking secret data into unclassified files). Users *cannot override* MAC policies even for their own files. More secure but less flexible. Used in military systems, SELinux.",
              simplified: "DAC: owners decide who accesses their files (flexible but risky — malware can access anything the user can). MAC: the OS enforces strict labels (Top Secret, Unclassified) — users can't override, preventing information leakage between security levels."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "is-u4-t1", title: "Security Protocols — SSL/TLS", progress: 0, status: "locked",
        content: `### TLS (Transport Layer Security)
Successor to SSL. Secures application-layer protocols (HTTPS, SMTPS, etc.) between client and server.

**TLS Handshake (simplified TLS 1.3):**
1. Client Hello — supported cipher suites, key share.
2. Server Hello — chosen cipher suite, server key share, certificate.
3. Client verifies certificate (chain of trust to a CA).
4. Both derive the *session key* — all further communication encrypted symmetrically.`,
        questions: [
          {
            id: "is-u4-t1-q1",
            question: "Why does TLS switch from asymmetric to symmetric encryption after the handshake?",
            answers: {
              detailed: "TLS uses asymmetric cryptography (RSA or ECDH) *only during the handshake* for two purposes: (1) Authenticating the server's identity via its certificate (signed by a trusted CA). (2) Securely establishing a shared *session key* that both parties know but was never transmitted in plaintext. Once the session key is established, all bulk data transfer uses *symmetric encryption* (e.g., AES-256-GCM). Reason: asymmetric operations (RSA key exchange, signature verification) are 100–1000x slower than symmetric operations. AES on modern hardware with AES-NI instructions can encrypt gigabytes per second. Encrypting an entire HTTPS session with RSA would be too slow for practical use. The handshake's overhead is a one-time cost; the cheap symmetric session key handles all subsequent data.",
              simplified: "Asymmetric encryption is slow but solves the key exchange problem. TLS uses it only to agree on a shared session key, then switches to fast symmetric (AES) encryption for actual data. Best of both worlds: secure key exchange + fast bulk encryption."
            },
            isFree: true
          },
          {
            id: "is-u4-t1-q2",
            question: "What is a digital certificate and what role does a Certificate Authority (CA) play?",
            answers: {
              detailed: "A digital certificate (X.509 standard) is a signed document that binds a public key to an identity (domain name, organisation). It contains: subject name (e.g., *.google.com), the subject's public key, issuer (the CA), validity period, and the CA's digital signature over all of this. **Certificate Authority (CA):** A trusted third party that verifies the identity of certificate applicants and signs their certificates with the CA's private key. Browsers and operating systems ship with a pre-installed list of trusted Root CAs (the Trust Store). When a browser connects to a server: (1) Server presents its certificate. (2) Browser verifies the CA's signature on the certificate using the CA's public key (from its trust store). (3) Browser checks the domain name matches, the certificate hasn't expired, and hasn't been revoked (CRL/OCSP). If all checks pass, the connection is trusted. This *chain of trust* extends from Root CA → Intermediate CA → End-entity certificate.",
              simplified: "A digital certificate proves that a public key belongs to a specific website. A CA (like DigiCert, Let's Encrypt) verifies the website's identity and signs the certificate. Browsers trust the CA, so they trust the certificate — establishing HTTPS trust."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "is-u5-t1", title: "Risk Management & Security Auditing", progress: 0, status: "locked",
        content: `### Risk Management
**Risk = Likelihood × Impact**

Options:
- **Mitigate** — reduce likelihood or impact (patch vulnerabilities, add controls).
- **Transfer** — shift financial risk (cyber insurance).
- **Accept** — acknowledge and monitor low-priority risks.
- **Avoid** — eliminate the activity causing the risk.

### Security Auditing
Systematic review of security controls, logs, and configurations to verify compliance and detect anomalies.`,
        questions: [
          {
            id: "is-u5-t1-q1",
            question: "What are the four risk treatment strategies and when is each appropriate?",
            answers: {
              detailed: "1. **Risk Mitigation (Reduction):** Apply controls to reduce the likelihood or impact of a risk. Appropriate when: the risk is significant, controls are cost-effective (control cost < expected loss). Examples: patching vulnerabilities, adding MFA, encrypting sensitive data. 2. **Risk Transfer:** Shift the financial consequence to a third party, typically through cyber insurance or contractual liability clauses. Appropriate when: residual risk after mitigation exceeds risk appetite, and insurance/contracts are available. Does not eliminate the risk — just the financial burden. 3. **Risk Acceptance:** Acknowledge the risk and decide to live with it. Appropriate when: risk level is within acceptable tolerance AND the cost of treatment exceeds the expected loss. Must be documented and approved by senior management. 4. **Risk Avoidance:** Eliminate the activity that gives rise to the risk. Appropriate when: risk is catastrophically high and cannot be adequately mitigated/transferred. Example: deciding not to store credit card numbers (avoiding PCI-DSS scope) or not entering a high-risk market.",
              simplified: "Mitigate = add controls to reduce risk. Transfer = buy insurance. Accept = the risk is too small to bother with. Avoid = stop doing the risky activity entirely. Choose based on risk level vs cost of treatment."
            },
            isFree: true
          },
          {
            id: "is-u5-t1-q2",
            question: "What is the purpose of security auditing and what does an audit typically examine?",
            answers: {
              detailed: "A security audit is a systematic, independent evaluation of an organisation's security posture against a defined standard (ISO 27001, NIST CSF, PCI-DSS) or internal policy. Purpose: (1) **Compliance verification** — confirm controls meet regulatory/contractual requirements. (2) **Risk identification** — discover gaps, misconfigurations, and vulnerabilities. (3) **Accountability** — deter insider threats through awareness of monitoring. (4) **Improvement** — produce findings that drive remediation. What an audit examines: *Technical controls* — firewall rules, patch levels, encryption configurations, access control lists, log integrity. *Administrative controls* — security policies, employee training records, change management procedures. *Physical controls* — data centre access logs, CCTV coverage, visitor records. *Log analysis* — authentication logs, privileged access logs, anomaly detection. Output: an audit report with findings rated by severity and recommended remediations.",
              simplified: "A security audit checks whether security controls are working as intended and meet compliance standards. It examines technical settings (firewalls, patches), administrative policies (who can access what), physical security, and system logs for anomalies."
            },
            isFree: false
          }
        ]
      }
    ]
  },

  "AGILE SOFTWARE DEVELOPMENT": {
    "1": [], "2": [],
    "3": [
      {
        id: "asd-u3-t1", title: "The Scrum Framework", progress: 0, status: "locked",
        content: `### Scrum
An Agile framework for managing complex software projects through timeboxed iterations called **Sprints** (1–4 weeks).

**Roles:** Product Owner (owns backlog priority), Scrum Master (removes impediments), Development Team (self-organising, cross-functional).

**Artifacts:** Product Backlog, Sprint Backlog, Increment.

**Ceremonies:** Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective.`,
        questions: [
          {
            id: "asd-u3-t1-q1",
            question: "What is the responsibility of the Product Owner in Scrum?",
            answers: {
              detailed: "The Product Owner (PO) is accountable for *maximising the value* of the product and the work of the Development Team. Specific responsibilities: (1) **Managing the Product Backlog** — creating, ordering, and maintaining the backlog of user stories and features. Items at the top should be detailed, estimated, and ready for the next Sprint. (2) **Defining 'Done'** — articulating and communicating what constitutes a successfully completed backlog item. (3) **Stakeholder Management** — representing and balancing the needs of customers, business stakeholders, and the development team. (4) **Prioritisation decisions** — deciding what gets built next based on business value, ROI, risk, and dependencies. The PO is the single point of contact for product direction — the team asks the PO what to build, not a committee. The PO does not manage how the team builds — that is the team's autonomy.",
              simplified: "The Product Owner owns the backlog — deciding what gets built and in what order based on business value. They represent stakeholders and are the single authority on what the team should work on next."
            },
            isFree: true
          },
          {
            id: "asd-u3-t1-q2",
            question: "What is the purpose of the Sprint Retrospective and how does it differ from the Sprint Review?",
            answers: {
              detailed: "**Sprint Review:** A *product-focused* meeting where the team demonstrates the working Increment to stakeholders (including the Product Owner and customers). Stakeholders give feedback; the Product Backlog may be updated. Inspects *what was built*. Timeboxed to 4 hours for a 4-week Sprint. **Sprint Retrospective:** A *process-focused* meeting for the Scrum Team only (no stakeholders). The team reflects on the *how* of their work — collaboration, processes, tools, Definition of Done. Three questions: (1) What went well? (2) What didn't go well? (3) What one improvement will we commit to for the next Sprint? The retro produces a concrete action item for process improvement. Timeboxed to 3 hours for a 4-week Sprint. Key difference: Review = inspect the product; Retro = inspect and adapt the team's process.",
              simplified: "Sprint Review: show stakeholders what was built this Sprint (product feedback). Sprint Retrospective: team-only meeting to reflect on how they worked and agree on one improvement for next Sprint (process improvement)."
            },
            isFree: false
          }
        ]
      }
    ],
    "4": [
      {
        id: "asd-u4-t1", title: "Kanban & Extreme Programming (XP)", progress: 0, status: "locked",
        content: `### Kanban
Visualises workflow on a board (To Do → In Progress → Done). Core practice: **WIP Limits** — cap the number of items in each column to expose bottlenecks.

### Extreme Programming (XP)
Engineering-focused Agile with practices:
- **Test-Driven Development (TDD)** — write tests first.
- **Pair Programming** — two developers at one computer.
- **Continuous Integration** — integrate and test code multiple times per day.
- **Refactoring** — improve code structure without changing behaviour.`,
        questions: [
          {
            id: "asd-u4-t1-q1",
            question: "What is the purpose of limiting Work In Progress (WIP) in Kanban?",
            answers: {
              detailed: "WIP limits set a maximum number of work items allowed in a particular workflow stage simultaneously. Purpose: (1) **Expose Bottlenecks** — when a stage hits its WIP limit, no more items can enter it. This forces the team to stop starting new work and help resolve the bottleneck instead of piling up more items behind it. (2) **Reduce Context Switching** — multitasking (high WIP) degrades quality and increases cognitive load. Lower WIP means people focus on fewer items at a time. (3) **Improve Flow Efficiency** — Little's Law: Average Cycle Time = Average WIP / Average Throughput. Reducing WIP reduces cycle time — items spend less time waiting in queues. (4) **Increase Predictability** — with stable WIP, cycle time becomes more predictable, making commitments to stakeholders more reliable. WIP limits are chosen empirically and adjusted over time.",
              simplified: "WIP limits prevent starting too many things at once. When a stage is 'full', the team must finish existing work before taking on more. This exposes bottlenecks, reduces multitasking, and speeds up overall delivery."
            },
            isFree: true
          },
          {
            id: "asd-u4-t1-q2",
            question: "What is Pair Programming and what are its benefits and drawbacks?",
            answers: {
              detailed: "Pair Programming is an XP practice where two developers work together at a single computer. One is the *Driver* (writes code); the other is the *Navigator* (reviews, thinks about design, spots bugs). Roles switch regularly. **Benefits:** (1) Real-time code review — bugs caught immediately, reducing costly late-discovery defects. (2) Knowledge sharing — skills and domain knowledge transfer between developers; reduces single points of failure (bus factor). (3) Better design — two minds think through alternatives; less likely to write overly complex code. (4) Fewer interruptions — the pair stays focused together. **Drawbacks:** (1) Appears to double labour cost (though studies show ~15% overhead, not 100%, due to fewer bugs and rework). (2) Personality clashes — not all developers work well together. (3) Remote pairs require tooling (VS Code Live Share, etc.). (4) Inexperienced navigators may contribute little if skill gap is large.",
              simplified: "Two developers share one computer — one types (Driver), one reviews and thinks ahead (Navigator). Benefits: catches bugs immediately, spreads knowledge, improves design. Drawback: appears costly but studies show ~15% overhead, offset by fewer bugs."
            },
            isFree: false
          }
        ]
      }
    ],
    "5": [
      {
        id: "asd-u5-t1", title: "CI/CD & DevOps Practices", progress: 0, status: "locked",
        content: `### CI/CD Pipeline
- **Continuous Integration (CI)** — developers merge code to a shared branch frequently (multiple times/day). Each merge triggers automated build + test.
- **Continuous Delivery (CD)** — every passing build is automatically deployed to a staging environment; release to production is a manual decision.
- **Continuous Deployment** — every passing build is automatically released to production (no manual gate).`,
        questions: [
          {
            id: "asd-u5-t1-q1",
            question: "What is the main benefit of Continuous Integration?",
            answers: {
              detailed: "The primary benefit of Continuous Integration (CI) is **rapid detection and resolution of integration errors**. In traditional development, developers work in long-lived branches for weeks or months. When they finally merge, conflicts and integration bugs can be massive and painful to fix ('integration hell'). CI solves this by requiring developers to merge to the main branch *frequently* (ideally multiple times per day). Each merge automatically triggers: (1) compilation/build, (2) unit and integration tests, (3) static code analysis (linting, security scanning). Since changes are small and frequent, any failure is localised to a small changeset — easy to diagnose and fix in minutes, not days. Secondary benefits: always having a working build, faster feedback to developers, reduced rework from late-discovered defects, and a deployable artifact available at any time.",
              simplified: "CI means every code commit automatically gets built and tested. Since changes are small and frequent, bugs are found and fixed within hours, not weeks. Eliminates 'integration hell' that occurs with large, infrequent merges."
            },
            isFree: true
          },
          {
            id: "asd-u5-t1-q2",
            question: "What is the difference between Continuous Delivery and Continuous Deployment?",
            answers: {
              detailed: "Both are extensions of Continuous Integration that automate the path from code commit to deployment. **Continuous Delivery:** Every build that passes the automated test suite is *deployable to production* and is automatically deployed to a staging/pre-production environment for final validation. However, the actual *release to production requires a manual trigger* — a human decides when to release. This suits organisations that need business/regulatory approval for releases, or where production releases need coordination (e.g., database migrations, marketing campaigns). **Continuous Deployment:** Fully automated end-to-end — every build passing all tests is *automatically deployed directly to production* without any manual gate. Requires very high confidence in the automated test suite and robust monitoring/rollback capabilities. Examples: Netflix, Amazon (who famously deployed to production thousands of times per day). Key: Delivery = can release anytime but choose when; Deployment = always releasing automatically.",
              simplified: "Continuous Delivery: every passing build is deployable to production, but a human presses the 'release' button. Continuous Deployment: that button doesn't exist — every passing build goes to production automatically."
            },
            isFree: false
          }
        ]
      }
    ]
  }
};