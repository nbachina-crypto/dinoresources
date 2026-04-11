export type TopicStatus = "completed" | "in-progress" | "locked";

export interface PracticeQuestion {
  question: string;
  answer: string;
}

export interface QuestionBank {
  "2mark"?: PracticeQuestion[];
  "5mark"?: PracticeQuestion[];
  "8mark"?: PracticeQuestion[];
}

export interface AiTopic {
  id: string;
  title: string;
  progress: number;
  status: TopicStatus;
  content: string; 
  questions: PracticeQuestion[] | QuestionBank; 
}

export const aiSyllabus: Record<string, Record<string, AiTopic[]>> = {
  
  "Artificial intelligence": {
    "1": [], "2": [],
    "3": [
      {
        id: "ai-u3-t1", title: "Knowledge Representation & Reasoning", progress: 0, status: "locked",
        content: "### Knowledge Representation\nKnowledge representation is how AI agents store and manipulate information. It relies on logic to deduce new information. **Propositional Logic** uses basic facts (True/False), while **First-Order Logic (FOL)** introduces variables, quantifiers (For All, Exists), and predicates to represent complex real-world relationships.",
        questions: [
          { question: "What is the difference between Propositional and First-Order Logic?", answer: "Propositional logic deals with simple declarative statements, whereas First-Order Logic allows for variables, objects, and quantifiers to express relationships." }
        ]
      },
      {
        id: "ai-u3-t2", title: "Knowledge Representation & Reasoning", progress: 0, status: "locked",
        content: "### Knowledge Representation\nKnowledge representation is how AI agents store and manipulate information. It relies on logic to deduce new information. **Propositional Logic** uses basic facts (True/False), while **First-Order Logic (FOL)** introduces variables, quantifiers (For All, Exists), and predicates to represent complex real-world relationships.",
        questions: [
          { question: "What is the difference between Propositional and First-Order Logic?", answer: "Propositional logic deals with simple declarative statements, whereas First-Order Logic allows for variables, objects, and quantifiers to express relationships." }
        ]
      }
    ],
    "4": [
      {
        id: "ai-u4-t1", title: "Planning & Machine Learning Basics", progress: 0, status: "locked",
        content: "### AI Planning\nPlanning involves finding a sequence of actions to achieve a goal from an initial state (e.g., using STRIPS). \n### Machine Learning\nML allows agents to improve performance through experience. It encompasses Supervised Learning (labeled data), Unsupervised Learning (finding patterns in unlabeled data), and Reinforcement Learning (reward-based).",
        questions: [
          { question: "What is Supervised Learning?", answer: "A type of machine learning where the model is trained on a labeled dataset, meaning the desired output is known during training." }
        ]
      }
    ],
    "5": [
      {
        id: "ai-u5-t1", title: "Expert Systems & Advanced AI", progress: 0, status: "locked",
        content: "### Expert Systems\nThese are computer programs that emulate the decision-making ability of a human expert. They consist of a **Knowledge Base** (facts/rules) and an **Inference Engine** (applies rules to data). Advanced AI now blends these systems with Deep Learning for domains like medical diagnosis.",
        questions: [
          { question: "What are the two main components of an Expert System?", answer: "The Knowledge Base and the Inference Engine." }
        ]
      }
    ]
  },

  "Compiler Design": {
    "1": [], "2": [],
    "3": [
      {
        id: "cd-u3-t1", title: "Syntax-Directed Translation & Intermediate Code", progress: 0, status: "locked",
        content: "### Syntax-Directed Translation (SDT)\nSDT attaches rules or program fragments to productions in a context-free grammar. It evaluates attributes of nodes in a parse tree. \n### Intermediate Code Generation\nCompilers convert source code to an intermediate representation (like Three-Address Code) because it is machine-independent and easier to optimize.",
        questions: [
          { question: "Why do compilers generate Intermediate Code?", answer: "It separates the front-end (source code) from the back-end (target machine), allowing for machine-independent code optimization." }
        ]
      }
    ],
    "4": [
      {
        id: "cd-u4-t1", title: "Code Optimization", progress: 0, status: "locked",
        content: "### Code Optimization\nThe goal is to improve the intermediate code so that the final machine code runs faster or uses less memory. Techniques include **Constant Folding** (calculating constants at compile time), **Dead Code Elimination** (removing code that never executes), and **Loop Unrolling**.",
        questions: [
          { question: "What is Dead Code Elimination?", answer: "An optimization technique that removes segments of code that do not affect the program's output or will never be executed." }
        ]
      }
    ],
    "5": [
      {
        id: "cd-u5-t1", title: "Target Code Generation", progress: 0, status: "locked",
        content: "### Code Generation\nThe final phase of the compiler. It takes the optimized intermediate code and maps it to the target machine's architecture. It involves **Instruction Selection** (choosing the right assembly instructions), **Register Allocation** (deciding which values stay in CPU registers), and **Instruction Scheduling**.",
        questions: [
          { question: "What is Register Allocation?", answer: "The process of assigning variables from the source program to the limited number of physical CPU registers to minimize memory access time." }
        ]
      }
    ]
  },

  "Cryptography and Network Security": {
    "1": [], "2": [],

    "3": [
      {
        id: "cns-u3-t1",
        title: "Public Key Cryptography & RSA Algorithm",
        progress: 0,
        status: "locked",
        content: `### Public Key (Asymmetric) Cryptography
Unlike symmetric cryptography (which uses a single shared key), asymmetric cryptography uses a **pair of keys**:
- **Public Key (PU):** Known to everyone, used to *encrypt* messages or *verify* signatures.
- **Private Key (PR):** Kept secret by the owner, used to *decrypt* messages or *create* signatures.

**Concept Diagram:**
\`\`\`text
Sender (Alice)                         Receiver (Bob)
[Plaintext] -> (Bob's Public Key) -> [Ciphertext] -> (Bob's Private Key) -> [Plaintext]
\`\`\`

---

### The RSA Algorithm
Developed by Rivest, Shamir, and Adleman, RSA is the most widely used public-key cryptosystem. Its security relies on the mathematical difficulty of factoring the product of two very large prime numbers.

**Key Generation Process:**
1. Choose two distinct large prime numbers, $p$ and $q$.
2. Calculate $n = p \\times q$ (This $n$ is used as the modulus for both keys).
3. Calculate Euler's Totient function: $\\phi(n) = (p - 1)(q - 1)$.
4. Choose an integer $e$ such that $1 < e < \\phi(n)$ and $e$ is coprime to $\\phi(n)$. (This is the public exponent).
5. Determine $d$ as the multiplicative inverse of $e$ modulo $\\phi(n)$. Meaning: $(d \\times e) \\equiv 1 \\pmod{\\phi(n)}$. (This is the private exponent).

**The Keys:**
- **Public Key:** $KU = \\{e, n\\}$
- **Private Key:** $KR = \\{d, n\\}$

**Encryption & Decryption:**
- **Encryption:** Given plaintext $M$ (where $M < n$), the ciphertext $C$ is calculated as:
  $$C = M^e \\pmod{n}$$
- **Decryption:** Given ciphertext $C$, the plaintext $M$ is recovered as:
  $$M = C^d \\pmod{n}$$`,
        questions: {
          "2mark": [
            {
              question: "Define Asymmetric Cryptography.",
              answer: "A cryptographic system that uses pairs of keys: public keys which may be disseminated widely, and private keys which are known only to the owner."
            },
            {
              question: "What is the mathematical foundation of the RSA algorithm?",
              answer: "The practical difficulty of factoring the product of two very large prime numbers ($n = p \\times q$)."
            },
            {
              question: "State Euler's Totient function $\\phi(n)$ for RSA.",
              answer: "$\\phi(n) = (p-1)(q-1)$, where $p$ and $q$ are the two prime numbers chosen initially."
            }
          ],
          "5mark": [
            {
              question: "Differentiate between Symmetric and Asymmetric Cryptography.",
              answer: "**Symmetric:** Uses one shared key for both encryption and decryption. Faster, but key distribution is difficult. Examples: DES, AES.\n**Asymmetric:** Uses two keys (public and private). Slower, but solves the key distribution problem and provides non-repudiation (digital signatures). Examples: RSA, ECC."
            },
            {
              question: "List the step-by-step process of RSA Key Generation.",
              answer: "1. Select primes $p,q$.\n2. Calculate $n=pq$.\n3. Calculate $\\phi(n)=(p-1)(q-1)$.\n4. Choose public key $e$ such that $\\text{gcd}(\\phi(n), e) = 1$.\n5. Calculate private key $d$ such that $d \\equiv e^{-1} \\pmod{\\phi(n)}$.\n6. Publish $(e,n)$ as Public Key, keep $(d,n)$ as Private Key."
            }
          ],
          "8mark": [
            {
              question: "Explain the RSA algorithm with an example where p=3, q=11, and M=5.",
              answer: "**1. Key Generation:**\n- $p=3, q=11$\n- $n = p \\times q = 33$\n- $\\phi(n) = (3-1)(11-1) = 2 \\times 10 = 20$\n- Choose $e$: Let's pick $e=3$ (since gcd(3, 20) = 1).\n- Calculate $d$: $(d \\times 3) \\equiv 1 \\pmod{20}$. By testing values, $d=7$ (since $7 \\times 3 = 21$, and $21 \\pmod{20} = 1$).\n- Public Key: $\\{3, 33\\}$\n- Private Key: $\\{7, 33\\}$\n\n**2. Encryption (M=5):**\n- $C = M^e \\pmod{n} = 5^3 \\pmod{33} = 125 \\pmod{33} = 26$\n- Ciphertext $C = 26$\n\n**3. Decryption (C=26):**\n- $M = C^d \\pmod{n} = 26^7 \\pmod{33} = 8,031,810,176 \\pmod{33} = 5$\n- Plaintext recovered $M = 5$."
            },
            {
              question: "Discuss the advantages, disadvantages, and common applications of Public Key Cryptography.",
              answer: "**Advantages:**\n1. Solves the Key Distribution Problem (no need to securely share a secret key).\n2. Provides Digital Signatures (ensuring non-repudiation and authentication).\n\n**Disadvantages:**\n1. Computationally intensive and much slower than symmetric encryption.\n2. Vulnerable to chosen-ciphertext attacks if not padded correctly.\n3. Requires a larger key size for equivalent security.\n\n**Applications:**\n1. Secure Key Exchange (e.g., setting up symmetric keys for TLS).\n2. Digital Signatures.\n3. Secure Email (PGP/S/MIME)."
            }
          ]
        }
      }
    ],

    "4": [
      {
        id: "cns-u4-t1",
        title: "Message Authentication, MAC & Hash Functions",
        progress: 0,
        status: "locked",
        content: `### Cryptographic Hash Functions
A hash function $H$ accepts a variable-length block of data $M$ as input and produces a fixed-size hash value $h = H(M)$. 
The primary purpose is **Data Integrity**—verifying that a message has not been altered.

**Key Requirements of a Cryptographic Hash:**
1. **Pre-image Resistance (One-way):** Given a hash $h$, it is computationally infeasible to find $M$ such that $H(M) = h$.
2. **Second Pre-image Resistance (Weak Collision Resistance):** Given $M1$, it is infeasible to find another message $M2$ such that $H(M1) = H(M2)$.
3. **Collision Resistance (Strong Collision Resistance):** It is infeasible to find *any* two distinct messages $M1$ and $M2$ such that $H(M1) = H(M2)$.

---

### Message Authentication Code (MAC)
A MAC uses a **shared secret key** to authenticate a message, ensuring both integrity and authenticity.
- $MAC = C(K, M)$
- Only someone with the secret key $K$ could have generated the MAC.
- **Limitation:** Does *not* provide non-repudiation (since both sender and receiver know the same key, either could have created the MAC).

### Digital Signatures
Uses **asymmetric keys** to provide authentication, data integrity, and **non-repudiation**.
**Process:**
1. Sender hashes the message: $h = H(M)$.
2. Sender encrypts the hash with their **Private Key** to create the signature.
3. Receiver decrypts the signature using the Sender's **Public Key** to retrieve the hash.
4. Receiver hashes the received message and compares the two hashes. If they match, the signature is valid.`,
        questions: {
          "2mark": [
            {
              question: "What is a Hash Function?",
              answer: "A mathematical algorithm that maps data of arbitrary size to a bit string of a fixed size (a hash), primarily used for verifying data integrity."
            },
            {
              question: "What is a Message Authentication Code (MAC)?",
              answer: "A short piece of information used to authenticate a message, generated using a cryptographic algorithm and a shared secret key."
            },
            {
              question: "What is the Avalanche Effect in hashing?",
              answer: "A property where a small change in the input (even a single bit) results in a drastically different, unpredictable output hash."
            }
          ],
          "5mark": [
            {
              question: "Explain the three main security properties required for a cryptographic hash function.",
              answer: "1. **Pre-image Resistance (One-way property):** Hard to reverse the hash to find the original message.\n2. **Second Pre-image Resistance:** Hard to find a different message that produces the same hash as a given message.\n3. **Collision Resistance:** Hard to find *any* two different messages that produce the exact same hash."
            },
            {
              question: "Differentiate between MAC and Digital Signatures.",
              answer: "**MAC:** Uses symmetric (shared) keys. Provides integrity and authentication. Does *not* provide non-repudiation (either party can generate it). Faster.\n**Digital Signature:** Uses asymmetric (public/private) keys. Provides integrity, authentication, and *non-repudiation* (only the private key holder can generate it). Slower."
            }
          ],
          "8mark": [
            {
              question: "Explain the process of creating and verifying a Digital Signature with a neat diagrammatic representation.",
              answer: "**Creation (Sender Side):**\n1. The sender creates a message $M$.\n2. The sender computes the hash of the message: $H(M)$.\n3. The sender encrypts the hash using their *Private Key* ($PR_A$) to create the signature: $Sig = E(PR_A, H(M))$.\n4. The sender transmits $M$ concatenated with $Sig$.\n\n**Verification (Receiver Side):**\n1. The receiver receives $M$ and $Sig$.\n2. The receiver calculates the hash of the received message: $H'(M)$.\n3. The receiver decrypts the signature using the sender's *Public Key* ($PU_A$) to reveal the original hash: $H(M) = D(PU_A, Sig)$.\n4. The receiver compares $H'(M)$ and $H(M)$. If they match, the signature is authentic and the message is unaltered.\n\n**Provides:** Authentication, Integrity, and Non-Repudiation."
            },
            {
              question: "Describe the general structure and working principle of the SHA (Secure Hash Algorithm) family.",
              answer: "SHA functions operate iteratively on blocks of data.\n1. **Padding:** The message is padded so its length is a specific multiple (e.g., 512 bits for SHA-1/256). The padding includes the original message length.\n2. **Initialization:** A set of constant initial hash values (buffers) are defined.\n3. **Processing Blocks:** The message is processed in blocks (e.g., 512-bit blocks). Each block passes through a compression function consisting of multiple rounds (e.g., 64 or 80 rounds) of logical operations (AND, OR, XOR, Shifts) and modular additions, mixing the message block with the current buffer state.\n4. **Output:** The final state of the buffers after all blocks are processed represents the fixed-size message digest (e.g., 256 bits)."
            }
          ]
        }
      }
    ],

    "5": [
      {
        id: "cns-u5-t1",
        title: "IPsec & Firewalls",
        progress: 0,
        status: "locked",
        content: `### IP Security (IPsec)
IPsec is a suite of protocols for securing network connections at the **Network Layer** (Layer 3) of the OSI model. It authenticates and encrypts packets of data to provide secure IPv4 and IPv6 communications.

**Core Protocols of IPsec:**
1. **Authentication Header (AH):** Provides connectionless integrity and data origin authentication for IP datagrams, and protection against replay attacks. *It does not provide encryption (confidentiality).*
2. **Encapsulating Security Payload (ESP):** Provides confidentiality (encryption), data origin authentication, connectionless integrity, and an anti-replay service.

**Modes of Operation:**
- **Transport Mode:** Only the payload of the IP packet is encrypted/authenticated. The original IP header remains intact. (Usually used for Host-to-Host communication).
- **Tunnel Mode:** The entire original IP packet is encrypted/authenticated, and a new IP header is added. (Usually used for Gateway-to-Gateway/VPN communication).

---

### Firewalls
A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.

**Types of Firewalls:**
1. **Packet Filtering Firewall:** Inspects packets at the Network layer based on source/destination IP, ports, and protocols. (Stateless, fast, but less secure).
2. **Stateful Inspection Firewall:** Tracks the operating state and characteristics of network connections. It only allows packets that belong to a known active connection.
3. **Application-Level Gateway (Proxy Firewall):** Filters traffic at the Application layer (Layer 7). It understands specific protocols (HTTP, FTP) and can inspect the payload deeply. (Highly secure, but slower).`,
        questions: {
          "2mark": [
            {
              question: "What is the purpose of IPsec?",
              answer: "To provide secure communication over IP networks by authenticating and encrypting IP packets at the Network Layer."
            },
            {
              question: "Define a Firewall.",
              answer: "A hardware or software system that filters incoming and outgoing network traffic based on a set of user-defined security rules to protect an internal network."
            },
            {
              question: "What is the difference between Transport Mode and Tunnel Mode in IPsec?",
              answer: "Transport mode encrypts only the payload, leaving the original IP header visible. Tunnel mode encrypts the entire original IP packet and adds a new IP header."
            }
          ],
          "5mark": [
            {
              question: "Explain the two main protocols used in IPsec.",
              answer: "1. **Authentication Header (AH):** Provides data integrity, authentication, and anti-replay protection, but *no encryption*. It protects the payload and parts of the IP header.\n2. **Encapsulating Security Payload (ESP):** Provides confidentiality (encryption) along with authentication, integrity, and anti-replay. It is the primary protocol used in VPNs."
            },
            {
              question: "Briefly explain the three main types of Firewalls.",
              answer: "1. **Packet Filtering:** Examines individual packets in isolation against rules (IPs, ports). Fast but dumb.\n2. **Stateful Inspection:** Keeps track of active connections (state table) and allows traffic only if it belongs to an established session.\n3. **Application Proxy:** Acts as an intermediary at the application layer, deeply inspecting the payload of protocols like HTTP or FTP before forwarding."
            }
          ],
          "8mark": [
            {
              question: "Discuss the architecture of IPsec. Explain the concepts of Security Association (SA) and Security Policy Database (SPD).",
              answer: "**IPsec Architecture Concepts:**\n\n**1. Security Association (SA):**\nAn SA is a one-way (simplex) logical connection between a sender and receiver that affords security services to the traffic carried on it. If two hosts need to communicate securely in both directions, two SAs are required. An SA is uniquely identified by three parameters:\n- Security Parameter Index (SPI)\n- IP Destination Address\n- Security Protocol Identifier (AH or ESP)\n\n**2. Security Policy Database (SPD):**\nThe SPD dictates what traffic needs to be protected. When a packet arrives, the IPsec implementation checks the SPD to determine the action:\n- **Discard:** Drop the packet.\n- **Bypass:** Do not apply IPsec (send as cleartext).\n- **Protect:** Apply IPsec. If 'Protect' is chosen, the SPD points to the appropriate SA in the Security Association Database (SAD) to apply the encryption/authentication.\n\nTogether, AH/ESP, SAs, and the SPD form the core of how IPsec processes network traffic securely."
            },
            {
              question: "Explain Application-Level Gateways (Proxies) in detail. What are their advantages and limitations compared to Packet Filters?",
              answer: "**Application-Level Gateway (Proxy Firewall):**\nOperates at the Application Layer of the OSI model. Instead of letting traffic flow directly from the client to the server, the firewall acts as a middleman (proxy). The client connects to the proxy, and the proxy connects to the server.\n\n**Working:**\nIt understands the specific application protocol (e.g., HTTP). It can inspect the actual content of the web page or email, not just the IP headers. It can block specific commands within a protocol (e.g., allowing FTP GET but blocking FTP PUT).\n\n**Advantages over Packet Filters:**\n1. Deep packet inspection: Can detect malware or malicious commands hidden in the payload.\n2. Hides internal IP addresses completely from the outside world.\n3. Detailed logging of application-level events.\n\n**Limitations:**\n1. Significant performance overhead (slower) because it must process traffic all the way up to layer 7 and maintain two separate TCP connections.\n2. Requires a specific proxy application for each protocol (HTTP proxy, FTP proxy, etc.)."
            }
          ]
        }
      }
    ]
  },

  "Web Application Development and Software Frameworks(WAD)": {
    "1": [], "2": [],
    "3": [
      {
        id: "wad-u3-t1", title: "Frontend Frameworks (React/Angular)", progress: 0, status: "locked",
        content: "### Component-Based Architecture\nModern frameworks break UI into reusable components. React uses a **Virtual DOM** for efficient rendering. State management tools (like Redux or Context API) handle data that changes over time across different components.",
        questions: [
          { question: "What is the advantage of the Virtual DOM in React?", answer: "It improves performance by minimizing direct manipulation of the actual DOM, updating only the elements that have changed." }
        ]
      }
    ],
    "4": [
      {
        id: "wad-u4-t1", title: "Backend Development & RESTful APIs", progress: 0, status: "locked",
        content: "### Node.js & Express\nNode allows JavaScript to run on the server. Express is a framework for routing and handling HTTP requests. \n### REST APIs\nRepresentational State Transfer APIs use standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources seamlessly.",
        questions: [
          { question: "What HTTP method is typically used to update an existing resource in a REST API?", answer: "The PUT or PATCH method." }
        ]
      }
    ],
    "5": [
      {
        id: "wad-u5-t1", title: "Databases & Authentication", progress: 0, status: "locked",
        content: "### NoSQL & MongoDB\nUnlike relational databases, MongoDB stores data in flexible, JSON-like documents. \n### Authentication (JWT)\nJSON Web Tokens (JWT) are used for stateless authentication. Upon login, the server issues a token, which the client stores and sends with subsequent requests to access protected routes.",
        questions: [
          { question: "Why is JWT considered stateless?", answer: "Because the server doesn't need to store session data; the token itself contains all the information needed to verify the user." }
        ]
      }
    ]
  },

  "OOSE Based Application Development": {
    "1": [], "2": [],
    "3": [{ id: "oose-u3-t1", title: "Object-Oriented Analysis & UML", progress: 0, status: "locked", content: "### UML Diagrams\nUnified Modeling Language (UML) visually represents a system. **Use Case Diagrams** show user interactions, while **Class Diagrams** detail system structure (classes, attributes, relationships like inheritance and composition).", questions: [{ question: "What does a Class Diagram illustrate?", answer: "The static structure of a system by showing classes, their attributes, operations, and the relationships among objects." }] }],
    "4": [{ id: "oose-u4-t1", title: "Software Design Patterns", progress: 0, status: "locked", content: "### Design Patterns\nReusable solutions to common problems. **Creational** (e.g., Singleton, Factory), **Structural** (e.g., Adapter), and **Behavioral** (e.g., Observer). They improve code maintainability and readability.", questions: [{ question: "What is the purpose of the Singleton pattern?", answer: "To restrict the instantiation of a class to a single, globally accessible instance." }] }],
    "5": [{ id: "oose-u5-t1", title: "Testing & Deployment", progress: 0, status: "locked", content: "### Software Testing\nEnsures software meets requirements. **Unit Testing** tests individual components. **Integration Testing** checks how components work together. Deployment strategies ensure smooth delivery to production environments.", questions: [{ question: "What is the focus of Unit Testing?", answer: "Testing individual functions or modules in isolation to ensure they perform correctly." }] }]
  },

  "Digital Forensics": {
    "1": [], "2": [],
    "3": [{ id: "df-u3-t1", title: "Network Forensics & Packet Analysis", progress: 0, status: "locked", content: "### Network Forensics\nThe capture, recording, and analysis of network events to discover the source of security attacks. Tools like Wireshark analyze Packet Capture (PCAP) files to inspect headers and payloads.", questions: [{ question: "What does a PCAP file contain?", answer: "A record of data packets traveling over a network, used for deep packet inspection." }] }],
    "4": [{ id: "df-u4-t1", title: "Mobile Device Forensics", progress: 0, status: "locked", content: "### Mobile Forensics\nRecovering digital evidence from mobile devices. It involves seizing the device, isolating it from networks (Faraday bags), and extracting data (logical or physical extraction) while maintaining data integrity.", questions: [{ question: "Why are mobile devices placed in Faraday bags upon seizure?", answer: "To block wireless signals and prevent remote wiping or altering of the device's data." }] }],
    "5": [{ id: "df-u5-t1", title: "Forensic Reporting & Ethics", progress: 0, status: "locked", content: "### Legal & Ethical Principles\nEvidence must follow a strict **Chain of Custody** to be admissible in court. The forensic report must be objective, reproducible, and clearly document all tools, procedures, and findings.", questions: [{ question: "What is the Chain of Custody?", answer: "A chronological documentation detailing the seizure, custody, transfer, and analysis of digital evidence." }] }]
  },

  "Artificial Neural Networks": {
    "1": [], "2": [],
    "3": [{ id: "ann-u3-t1", title: "Multilayer Perceptrons & Backpropagation", progress: 0, status: "locked", content: "### Backpropagation\nA supervised learning algorithm used to train neural networks. It calculates the gradient of the loss function and updates the weights backwards from the output layer to the input layer using Gradient Descent.", questions: [{ question: "What is the role of the loss function in training an ANN?", answer: "It measures the difference between the predicted output and the actual target, guiding the network on how to adjust its weights." }] }],
    "4": [{ id: "ann-u4-t1", title: "Recurrent & Associative Networks", progress: 0, status: "locked", content: "### Hopfield Networks\nA form of recurrent artificial neural network that serves as a content-addressable memory system with binary threshold nodes. They are guaranteed to converge to a local minimum.", questions: [{ question: "What is a primary application of a Hopfield Network?", answer: "Pattern recognition and acting as associative memory to recover patterns from noisy inputs." }] }],
    "5": [{ id: "ann-u5-t1", title: "Self-Organizing Maps (SOM)", progress: 0, status: "locked", content: "### SOM & Competitive Learning\nAn unsupervised learning technique that produces a low-dimensional (usually 2D) representation of higher-dimensional data. Neurons compete to be activated, preserving the topological properties of the input space.", questions: [{ question: "How does a Self-Organizing Map differ from a standard Feedforward network?", answer: "It uses unsupervised, competitive learning to cluster data topologically, rather than error-correction learning." }] }]
  },

  "Deep Learning": {
    "1": [], "2": [],
    "3": [{ id: "dl-u3-t1", title: "Convolutional Neural Networks (CNNs)", progress: 0, status: "locked", content: "### CNN Architecture\nDesigned for spatial data like images. **Convolutional Layers** apply filters to detect features (edges, textures). **Pooling Layers** reduce spatial dimensions. Finally, Fully Connected layers perform the classification.", questions: [{ question: "What is the primary function of a Pooling layer in a CNN?", answer: "To down-sample the spatial dimensions, reducing computation and making feature detection translation-invariant."}] }],
    "4": [{ id: "dl-u4-t1", title: "RNNs and LSTM Networks", progress: 0, status: "locked", content: "### Sequential Data\nRNNs handle sequences (text, time-series) by maintaining a hidden state. However, they suffer from the vanishing gradient problem. **Long Short-Term Memory (LSTM)** networks solve this using gates (Forget, Input, Output) to regulate memory over long sequences.", questions: [{ question: "How does an LSTM address the vanishing gradient problem?", answer: "By using a cell state and gating mechanisms to selectively retain or forget information over long sequences." }] }],
    "5": [{ id: "dl-u5-t1", title: "Advanced Architectures: GANs", progress: 0, status: "locked", content: "### Generative Adversarial Networks\nConsists of two networks fighting each other. The **Generator** tries to create fake data (like images) to fool the discriminator. The **Discriminator** tries to distinguish real data from fake data. Over time, the generator creates hyper-realistic outputs.", questions: [{ question: "What are the two competing components of a GAN?", answer: "The Generator and the Discriminator." }] }]
  },

  "Introduction to Competitive Programming(ICP)": {
    "1": [], "2": [],
    "3": [{ id: "icp-u3-t1", title: "Advanced Graph Algorithms", progress: 0, status: "locked", content: "### Shortest Paths\nGraphs model networks. **Dijkstra's Algorithm** finds the shortest path from a source to all nodes in graphs with non-negative weights. **Bellman-Ford** handles negative weights. **Floyd-Warshall** is for all-pairs shortest path.", questions: [{ question: "When would you choose Bellman-Ford over Dijkstra's algorithm?", answer: "When the graph contains negative weight edges." }] }],
    "4": [{ id: "icp-u4-t1", title: "Dynamic Programming (DP)", progress: 0, status: "locked", content: "### DP Concepts\nSolving complex problems by breaking them down into overlapping subproblems. **Memoization** (Top-down) caches results. **Tabulation** (Bottom-up) builds solutions iteratively. Classic problems: 0/1 Knapsack, Longest Common Subsequence.", questions: [{ question: "What two properties must a problem have to be solvable by Dynamic Programming?", answer: "Optimal Substructure and Overlapping Subproblems." }] }],
    "5": [{ id: "icp-u5-t1", title: "Advanced Data Structures", progress: 0, status: "locked", content: "### Segment Trees\nUsed for answering range queries (like sum or minimum in an array segment) and updating elements efficiently in O(log n) time. **Fenwick Trees (BIT)** offer similar capabilities with simpler bitwise operations and less code.", questions: [{ question: "What is the time complexity of a range sum query using a Segment Tree?", answer: "O(log n)." }] }]
  },

  "Data Visualization and Exploration With R": {
    "1": [], "2": [],
    "3": [{ id: "dvr-u3-t1", title: "Advanced Graphics with ggplot2", progress: 0, status: "locked", content: "### The Grammar of Graphics\nggplot2 builds plots in layers. You define the **Data**, map variables to **Aesthetics** (x, y, color), and add **Geometries** (points, lines). Faceting allows creating multiple sub-plots based on categorical variables.", questions: [{ question: "What is the role of an 'Aesthetic' mapping in ggplot2?", answer: "It defines how data variables are mapped to visual properties like position, color, size, or shape." }] }],
    "4": [{ id: "dvr-u4-t1", title: "Interactive Visualizations", progress: 0, status: "locked", content: "### R Shiny & Plotly\nStatic plots don't allow user exploration. **Plotly** converts ggplot objects into interactive HTML widgets. **Shiny** allows building full interactive web applications entirely in R, connecting UI inputs directly to R backend logic.", questions: [{ question: "What is the primary use of the R Shiny framework?", answer: "To build interactive web applications directly from R without needing web development languages like HTML/JS." }] }],
    "5": [{ id: "dvr-u5-t1", title: "Spatial Data & Mapping", progress: 0, status: "locked", content: "### Mapping in R\nSpatial data involves coordinates (lat/long). Packages like `sf` and `leaflet` are used to render interactive maps. Choropleth maps color geographic regions based on a statistical variable (e.g., population density).", questions: [{ question: "What is a choropleth map?", answer: "A map that uses differences in shading or color within predefined areas to indicate average values of a property." }] }]
  },

  "Cyber Security": {
    "1": [], "2": [],
    "3": [{ id: "cs-u3-t1", title: "Web Application Attacks", progress: 0, status: "locked", content: "### OWASP Top 10\nCommon vulnerabilities include **SQL Injection (SQLi)**, where malicious SQL statements are inserted into entry fields, and **Cross-Site Scripting (XSS)**, where attackers inject malicious scripts into trusted websites viewed by other users.", questions: [{ question: "How does an attacker execute an XSS attack?", answer: "By injecting malicious client-side scripts into web pages viewed by other users." }] }],
    "4": [{ id: "cs-u4-t1", title: "Malware & Threat Actors", progress: 0, status: "locked", content: "### Types of Malware\n**Viruses** attach to files, **Worms** disguise as legitimate software, and **Ransomware** encrypts user files demanding payment. Advanced Persistent Threats (APTs) are stealthy, continuous computer hacking processes often state-sponsored.", questions: [{ question: "What distinguishes a Worm from a Virus?", answer: "A worm is a standalone program that self-replicates and spreads across networks without needing to attach to a host file." }] }],
    "5": [{ id: "cs-u5-t1", title: "Incident Response", progress: 0, status: "locked", content: "### The IR Lifecycle\nWhen a breach occurs, teams follow a lifecycle: Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned. Disaster Recovery (DR) focuses on restoring IT infrastructure post-event.", questions: [{ question: "What occurs during the 'Containment' phase of Incident Response?", answer: "Isolating the affected systems to prevent the threat from spreading further across the network." }] }]
  },

  "Natural Language Processing(NLP)": {
    "1": [], "2": [],
    "3": [{ id: "nlp-u3-t1", title: "Syntax, Parsing, and POS Tagging", progress: 0, status: "locked", content: "### Syntactic Analysis\nUnderstanding sentence structure. **Part-of-Speech (POS) Tagging** assigns grammatical categories (noun, verb) to words. **Parsing** creates a syntax tree showing the grammatical structure according to context-free grammar rules.", questions: [{ question: "What does POS tagging achieve?", answer: "It categorizes words in a text corresponding to a particular part of speech based on both its definition and its context." }] }],
    "4": [{ id: "nlp-u4-t1", title: "Semantics & Word Embeddings", progress: 0, status: "locked", content: "### Word2Vec & Embeddings\nInstead of representing words as distinct IDs, embeddings represent words as dense vectors in a continuous vector space where words with similar meanings are closer together. Algorithms like Word2Vec and GloVe capture semantic context.", questions: [{ question: "Why are Word Embeddings superior to One-Hot Encoding?", answer: "Embeddings capture semantic meaning and context by placing similar words closer together in vector space, whereas one-hot encoding treats all words as equidistant and unrelated." }] }],
    "5": [{ id: "nlp-u5-t1", title: "Transformers & LLMs", progress: 0, status: "locked", content: "### The Attention Mechanism\nTransformers process entire sequences simultaneously, rather than word-by-word like RNNs. The **Self-Attention** mechanism allows the model to weigh the importance of different words in a sentence relative to a specific word, paving the way for models like BERT and GPT.", questions: [{ question: "What is the main advantage of the Self-Attention mechanism in Transformers?", answer: "It allows the model to look at other words in the input sequence to gather context for the current word being processed." }] }]
  },

  "Design Patterns": {
    "1": [], "2": [],
    "3": [{ id: "dp-u3-t1", title: "Behavioral Patterns", progress: 0, status: "locked", content: "### Observer & Strategy\nBehavioral patterns identify common communication patterns between objects. The **Observer** pattern lets objects subscribe to event notifications (like pub/sub). The **Strategy** pattern lets you define a family of algorithms and swap them out dynamically at runtime.", questions: [{ question: "When should the Strategy pattern be used?", answer: "When you have multiple algorithms for a specific task and want to switch between them at runtime without altering the objects that use them." }] }],
    "4": [{ id: "dp-u4-t1", title: "Structural Patterns", progress: 0, status: "locked", content: "### Adapter & Decorator\nStructural patterns compose classes into larger structures. The **Adapter** allows incompatible interfaces to work together (like a plug adapter). The **Decorator** pattern attaches new behaviors to objects dynamically without altering their code.", questions: [{ question: "What problem does the Adapter pattern solve?", answer: "It acts as a bridge between two incompatible interfaces, allowing them to communicate." }] }],
    "5": [{ id: "dp-u5-t1", title: "Architectural Patterns", progress: 0, status: "locked", content: "### MVC Architecture\nModel-View-Controller separates an application into three components. The **Model** manages data and logic, the **View** handles UI display, and the **Controller** takes user input and updates the Model/View. This enforces separation of concerns.", questions: [{ question: "In the MVC pattern, what is the role of the Controller?", answer: "To accept user input, process it, and update the Model and View accordingly." }] }]
  },

  "Data Analytics: Descriptive, Predictive, Prescriptive": {
    "1": [], "2": [],
    "3": [{ id: "da-u3-t1", title: "Predictive Analytics & Regression", progress: 0, status: "locked", content: "### Predictive Modeling\nUses historical data to predict future outcomes. **Linear Regression** predicts continuous values (e.g., housing prices). **Logistic Regression** handles binary classification (e.g., spam vs. not spam).", questions: [{ question: "What is the difference between Linear and Logistic Regression?", answer: "Linear regression predicts a continuous numerical output, while logistic regression predicts categorical/binary outcomes." }] }],
    "4": [{ id: "da-u4-t1", title: "Time Series Forecasting", progress: 0, status: "locked", content: "### Time Series Analysis\nAnalyzing data points collected over time intervals. Key components include Trend, Seasonality, and Noise. Methods like ARIMA (AutoRegressive Integrated Moving Average) use past values to forecast future trends.", questions: [{ question: "What are the three main components of a Time Series?", answer: "Trend, Seasonality, and Random Noise." }] }],
    "5": [{ id: "da-u5-t1", title: "Prescriptive Analytics & Optimization", progress: 0, status: "locked", content: "### Prescriptive Analytics\nGoes beyond predicting *what* will happen by recommending *how* to make it happen. It uses optimization algorithms, simulation, and heuristics (like Linear Programming in supply chain routing) to find the best course of action.", questions: [{ question: "How does Prescriptive analytics differ from Predictive analytics?", answer: "Predictive forecasts what will happen, while prescriptive recommends the best actions to achieve a desired outcome based on those predictions." }] }]
  },

  "Information Security": {
    "1": [], "2": [],
    "3": [{ id: "is-u3-t1", title: "Access Control Models", progress: 0, status: "locked", content: "### MAC, DAC, RBAC\nAccess control determines who can access what. **DAC** (Discretionary) lets the data owner decide access. **MAC** (Mandatory) uses strict OS-enforced security labels (Top Secret). **RBAC** (Role-Based) assigns permissions based on a user's job role.", questions: [{ question: "What is the primary feature of Role-Based Access Control (RBAC)?", answer: "Access is granted based on the user's role or job function within the organization, not individually." }] }],
    "4": [{ id: "is-u4-t1", title: "Security Protocols (SSL/TLS)", progress: 0, status: "locked", content: "### Secure Communication\n**TLS** (Transport Layer Security) encrypts internet traffic. It uses a 'Handshake' where the client and server authenticate each other using asymmetric encryption (certificates) and then establish a symmetric key for fast, secure data transfer.", questions: [{ question: "Why does TLS switch from asymmetric to symmetric encryption after the handshake?", answer: "Because symmetric encryption is computationally much faster for encrypting large amounts of bulk data." }] }],
    "5": [{ id: "is-u5-t1", title: "Risk Management & Auditing", progress: 0, status: "locked", content: "### Risk Assessment\nIdentifying vulnerabilities and assessing the impact of a breach. Risk can be Mitigated, Transferred (insurance), Accepted, or Avoided. **Auditing** involves logging system events continuously to detect unauthorized activity and ensure compliance.", questions: [{ question: "What does 'Risk Transfer' mean in Information Security?", answer: "Shifting the financial consequence of a risk to a third party, typically through cyber insurance." }] }]
  },

  "AGILE SOFTWARE DEVELOPMENT": {
    "1": [], "2": [],
    "3": [{ id: "asd-u3-t1", title: "The Scrum Framework", progress: 0, status: "locked", content: "### Scrum Roles & Artifacts\nScrum operates in timeboxed iterations called **Sprints**. The **Product Owner** prioritizes the backlog, the **Scrum Master** removes blockers, and the Team builds the product. Daily Standups keep everyone aligned.", questions: [{ question: "What is the responsibility of the Product Owner in Scrum?", answer: "To maximize the value of the product by managing and prioritizing the Product Backlog." }] }],
    "4": [{ id: "asd-u4-t1", title: "Kanban & XP", progress: 0, status: "locked", content: "### Kanban\nA visual workflow management system that limits 'Work In Progress' (WIP) to improve flow. \n### Extreme Programming (XP)\nFocuses on engineering practices like Test-Driven Development (TDD), Pair Programming, and continuous refactoring for high code quality.", questions: [{ question: "What is the purpose of limiting Work In Progress (WIP) in Kanban?", answer: "To identify bottlenecks and ensure tasks are fully completed before new work is started, improving overall workflow." }] }],
    "5": [{ id: "asd-u5-t1", title: "Continuous Integration & Deployment (CI/CD)", progress: 0, status: "locked", content: "### CI/CD Pipelines\nAgile requires fast delivery. **Continuous Integration** automatically merges and tests developers' code daily. **Continuous Deployment** automatically releases that validated code to production servers, reducing manual errors and release times.", questions: [{ question: "What is the main benefit of Continuous Integration?", answer: "It allows teams to detect and fix integration errors rapidly by automatically testing code every time a change is merged." }] }]
  }
};