
# HSB
A tax management application used to facilitate tax management related conversation between the HSB group, tax accountants, and tax clients.

![[Github repo  size in bytes]](https://img.shields.io/github/languages/code-size/codetipster/hsb-web-frontend)]

### Overview
HSB digital platform consists of an administrative web based desktop on the management side, and a mobile application client component that enables clients interact with the web platform from the client side.
There are three main category of users:
- An admin with an overall access and an ability to assign Accountants to registered clients 
- Accountants (created by the admin), manages the tax management accounts  for assigned clients
- Clients (Also created in the database by the admin ONLY)

### Architecture
### Threat Model
![Where web applications without security measures lie](src/assets/Screenshot%202023-04-25%20at%2016.26.16.png)

1. Authentication and access control: The website must ensure that only authorized users have access to sensitive tax information. Threats to authentication and access control could include unauthorized access to user accounts through phishing or other social engineering attacks, weak password policies, or vulnerabilities in the website's login system.

2. Data confidentiality and integrity: The website must ensure that sensitive tax information is kept confidential and cannot be altered or manipulated by unauthorized users. Threats to data confidentiality and integrity could include hacking or malware attacks that result in data theft or manipulation, or insider threats such as employees or contractors who misuse their access to the website's systems.

3. Denial of Service (DoS) attacks: The website must be able to withstand DoS attacks, which are attempts to overwhelm the website's servers with a flood of traffic or requests. These attacks can prevent legitimate users from accessing the website's services, and could be carried out by hackers or other malicious actors.
Compliance and regulatory issues: The website must comply with relevant tax laws and regulations, such as the Internal Revenue Service (IRS) guidelines for electronic tax filing. Threats to compliance and regulatory issues could include data breaches that expose user information, or failure to properly secure data and systems.

4. Third-party integration: The website may need to integrate with third-party software or services, such as payment processing systems or tax preparation software(future considerations). Threats to third-party integration could include vulnerabilities in these systems that could be exploited to gain unauthorized access to the website's data or systems.

### Safety Measures
To mitigate the above mentioned threats, we sort to implement a range of security measures, such as:

1. Strong authentication and access control policies, including two-factor authentication and password policies that require strong, unique passwords.

2. Encryption of sensitive tax data in transit and at rest.

3. Redundant systems and backups to ensure availability of data and services in the event of a DoS or other attack.

4. Compliance with relevant regulations and standards, such as the Payment Card Industry Data Security Standard (PCI DSS) or the IRS e-file program requirements.

5. Regular security training and awareness programs for employees and contractors, to help prevent insider threats and social engineering attacks.