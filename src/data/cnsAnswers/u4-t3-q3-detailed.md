## X.509 Certificates
**X.509 certificates** are standardized digital certificates defined by the **ITU-T X.509 standard**. They are used in **Public Key Infrastructure (PKI)** to associate a **public key** with an entity’s identity.
---
## Structure of an X.509 Certificate
An X.509 certificate contains the following fields:
```
Version
Serial Number
Signature Algorithm
Issuer (Certificate Authority)
Validity Period (Not Before, Not After)
Subject (Owner of certificate)
Subject Public Key Info
Issuer Unique ID (optional)
Subject Unique ID (optional)
Extensions (e.g., key usage, constraints)
Digital Signature of CA
```
---
## Working Principle
* A **Certificate Authority (CA)** verifies the identity of an entity
* The CA issues a certificate by **digitally signing** it
```
Cert = Sign(K_priv(CA), [Subject, K_pub(Subject), other fields])
```
* The receiver verifies the certificate using the **CA’s public key**
> If the signature is valid, the public key is trusted.
---
## Example
* A user connects to a server
The server provides its certificate:
```
Cert(Server) = Sign(K_priv(CA), [Server, K_pub(Server)])
```
* The client verifies using the CA’s public key
* If valid, the client trusts `K_pub(Server)` and proceeds with secure communication
---
## Certificate Chain
Certificates are often verified using a chain of trust:
```
End Entity Certificate → Intermediate CA → Root CA
```
* The **Root CA** is pre-trusted (e.g., in browsers)
* Each certificate is verified step by step
---
## Extensions (X.509 v3)
Common extensions include:
* **Key Usage** → defines allowed operations (encryption, signing)
* **Subject Alternative Name (SAN)** → additional identities (e.g., domain names)
* **Basic Constraints** → indicates whether the certificate is a CA
---
## Revocation Mechanisms
Certificates can be revoked before expiry using:
* **CRL (Certificate Revocation List)**
* **OCSP (Online Certificate Status Protocol)**
---
## Role in Security
### Authentication
* Confirms that the public key belongs to the claimed entity
---
### Data Integrity
* CA’s signature ensures certificate has not been altered
---
### Confidentiality
* Enables secure key exchange (e.g., in **SSL/TLS**)
---
### Non-Repudiation
* Supports digital signatures linking actions to entities
---
### Trust Establishment
* Provides a **hierarchical trust model** using trusted CAs
---
## Applications
X.509 certificates are used in:
* **SSL/TLS (HTTPS)**
* **Secure email**
* **VPNs**
* **Code signing**
* **Digital signatures**
