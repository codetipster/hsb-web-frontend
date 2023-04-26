![[Github repo  size in bytes]](https://img.shields.io/github/languages/code-size/codetipster/hsb-web-frontend)
![[Node version]](https://img.shields.io/npm/v/npm)
# HSB
A tax management application used to facilitate tax management related conversation between the HSB group, tax accountants, and tax clients.

The server side application for this website is found here:


### Overview
HSB digital platform consists of an administrative web based desktop on the management side, and a mobile application client component that enables clients interact with the web platform from the client side.
There are three main category of users:
- An admin with an overall access and an ability to assign Accountants to registered clients 
- Accountants (created by the admin), manages the tax management accounts  for assigned clients
- Clients (Also created in the database by the admin ONLY)

### How to run this application (Locally)
A deployed version of this application(web) is currently running on the following live URL(https://hsbkanzlei.de).

Follow these steps to get it running on your local machine;
- Clone this repository by running `git clone https://github.com/codetipster/hsb-web-frontend.git` from your terminal.
- Cd into cloned project with `cd hsb-web-frontend`.
- run `npm install`to install all required dependencies.
- run `npm start`to start the project on localhost.
- for test purposes, please login with [email: admin@gmail.com, password: 12345]

#### Server setup
-  Clone the server side repository by running `git clone https://github.com/codetipster/hsb.git`
- cd into cloned project with `cd hsb`.
- run `npm install`to install dependencies
- Visit `https://www.mongodb.com/cloud/atlas` to sign up for a free account if you don't have one already
- After signing in, create a new cluster by following the prompts. Choose a cloud provider, region, and cluster tier according to your requirements. With a free tier, you can create an M0 Sandbox cluster with limited resources. Add your database authentication method.
- Create a database user: Click the "Database Access" menu item in the left sidebar. Click "Add New Database User" and create a new user with a username and password. Make a note of the credentials, as you'll need them later to connect to the database. Set the user privileges as needed (e.g., "Read and Write to Any Database").
- Whitelist your IP address: Click the "Network Access" menu item in the left sidebar. Click "Add IP Address" and add your local machine's IP address or a range of IP addresses that should be allowed to connect to the database. Alternatively, you can choose "Allow Access from Anywhere," but this is less secure and not recommended for production environments.
-  Get the connection string: Click on the "Clusters" menu item in the left sidebar. Click on the "Connect" button next to your cluster, then click on "Connect Your Application." Choose "Node.js" as the driver and the appropriate driver version. You'll see a connection string like this: 
`mongodb+srv://username:password@clustername.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
- create a .env file at the root of your cloned project and update your own .env file with the connection string you got in the previous step as your MONGODB_REMOTE_URL variable like this: MONGODB_REMOTE_URL=mongodb+srv://username:password@clustername.mongodb.net/my_database?retryWrites=true&w=majority.
- Also specify a different PORT within your .env file: PORT = 8080
- start the server by running `npm run dev` to start the local web server on port 8080

### Architecture
![Architecture diagram](src/assets/Screenshot%202023-04-25%20at%2018.58.54.png)
The highlevel overview of how the entire HSB application works is as outlined in the diagram above.

- Frontend Application: The frontend of the desktop admin and accountant application is built with React, which is a popular JavaScript library for building user interfaces. React will provide the user interface for the admin and accountant desktop application.

- Backend Application(server side:): The backend of the application is built with Node, which is a popular JavaScript runtime environment. Node will handle the business logic of the application, communicate with the database and provide an API to the frontend.

- Mobile Application: The mobile application is built with Flutter, which is an open-source mobile application development framework created by Google. Flutter allows the application to be developed for both Android and iOS devices, and will provide the user interface for clients to communicate with the admin and accountant applications.

- Database: The application's database is powered by MongoDB(this semester we decided to switch to PostgreSQL-WIP status), which is a popular NoSQL document-oriented database. MongoDB will store all the data for the application, including accountants, clients, and their communications.

### Threat Model
![Where web applications without security measures lie](src/assets/Screenshot%202023-04-25%20at%2016.26.16.png)

1. Authentication and access control: The website must ensure that only authorized users have access to sensitive tax information. Threats to authentication and access control could include unauthorized access to user accounts through phishing or other social engineering attacks, weak password policies, or vulnerabilities in the website's login system.

2. Data confidentiality and integrity: The website must ensure that sensitive tax information is kept confidential and cannot be altered or manipulated by unauthorized users. Threats to data confidentiality and integrity could include hacking or malware attacks that result in data theft or manipulation, or insider threats such as employees or contractors who misuse their access to the website's systems.

3. Denial of Service (DoS) attacks: The website must be able to withstand DoS attacks, which are attempts to overwhelm the website's servers with a flood of traffic or requests. These attacks can prevent legitimate users from accessing the website's services, and could be carried out by hackers or other malicious actors.
Compliance and regulatory issues: The website must comply with relevant tax laws and regulations, such as the Internal Revenue Service (IRS) guidelines for electronic tax filing. Threats to compliance and regulatory issues could include data breaches that expose user information, or failure to properly secure data and systems.

4. Third-party integration(Future thoughts for payments): The website may need to integrate with third-party software or services, such as payment processing systems or tax preparation software(future considerations). Threats to third-party integration could include vulnerabilities in these systems that could be exploited to gain unauthorized access to the website's data or systems.

![Threat model diagram](src/assets/Screenshot%202023-04-25%20at%2019.24.07.png)

### Before Security:
Unsecured HTTP requests: 
The login function from the login page was sending an HTTP POST request to our remote server with the user's email and password in plain text. If this connection is not secured with HTTPS, this could allow an attacker to intercept and view the user's sensitive information.

No rate limiting: 
The code did not originally implement rate limiting for the login request. This meant that users were allowed to make multiple countless attempts at login into the application, making the application potentially susceptible to brute force attacks.  can 
#### Solution (After Security)

Here's a summary of the changes made to address the identified security vulnerabilities:

1. Insecure password storage: Replaced `useState` with `useRef` for email and password storage. `useRef` doesn't trigger a re-render, and it isn't accessible via React DevTools, which makes it a safer choice for storing sensitive information.

2. No input sanitization: Imported the DOMPurify library to sanitize user input. DOMPurify helps prevent Cross-Site Scripting (XSS) attacks by sanitizing the user input before sending it to the server.

3. Insecure localStorage usage: Replaced localStorage with HttpOnly cookies for storing the user token and user ID. HttpOnly cookies can only be accessed by the server and not by any client-side JavaScript code, which reduces the risk of XSS attacks. The login credentials should not be stored in the browser's local storage or session storage as it can make the user's sensitive information easily accessible to malicious scripts. Using browser cookies with the secure and HTTP-only flags set to store the authentication token, provides better security and prevents cross-site scripting (XSS) attacks.

4. Implementing rate limiting for both client side and server side.



Lack of server-side validation: 
The server-side validation of the user input was not originally implemented, which meant that malicious users could potentially exploit vulnerabilities by submitting malicious data.

No protection against Cross-Site Scripting (XSS) attacks: The application does not sanitize user input, which could lead to cross-site scripting (XSS) attacks. Malicious users could inject scripts into the application, allowing them to steal user data or perform other malicious actions.
Lack of password security measures: The application does not enforce strong password policies, such as requiring a minimum password length or complexity, which could make it easier for attackers to crack user passwords.
Insecure password storage: It is unclear how the user's password is being stored on the server. If the passwords are stored in plaintext or using weak hashing algorithms, they could be easily compromised in the event of a data breach.
Lack of CSRF protection: The application does not implement CSRF protection, which could allow attackers to submit malicious requests on behalf of the user.
### Safety Measures
To mitigate the above mentioned threats, we sort to implement a range of security measures, such as:

1. Strong authentication and access control policies, including two-factor authentication and password policies that require strong, unique passwords.

2. Encryption of sensitive tax data in transit and at rest.

3. Redundant systems and backups to ensure availability of data and services in the event of a DoS or other attack.

4. Compliance with relevant regulations and standards, such as the Payment Card Industry Data Security Standard (PCI DSS) or the IRS e-file program requirements.

5. Regular security training and awareness programs for employees and contractors, to help prevent insider threats and social engineering attacks.

