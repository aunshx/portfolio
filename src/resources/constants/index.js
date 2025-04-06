export const VERTICAL_MARGIN = 'mt-12';

export const RESUME_LINK = 'https://drive.google.com/file/d/1RwM5cBplNVzH_OQr7UfEKXOTacZEd29D/view?usp=sharing';

// PROJECTS, portfolio, image urls
export const forestDssProj = 'https://i.postimg.cc/C53SYbWp/forestdss.png'
export const redditInfinitProj = 'https://i.postimg.cc/HL3JHsds/reddit-Infinit.png'
export const resviewProj = 'https://i.postimg.cc/02mF4z0m/resview.png'
export const omdbProj = 'https://i.postimg.cc/7LFXyVVN/omdbAPI.png'

export const PROJECT_LIST = [
    {
        id: 1,
        title: 'FRREDSS',
        subTitle: 'Web-App',
        description: 'Forest Resources and Renewable Energy Decision Support System (FRREDSS): An online siting and decision support application modeled for forest biomass',
        image: forestDssProj,
        tech: [
            'Biomass',
            'Technoeconomic Assessment',
            'LCA',
            'Agriculture',
            'Modelling',
        ],
        gitUrl: 'https://github.com/ucdavis/cecdss',
        link: 'https://forestdss.ucdavis.edu',
        tag: 'California OPR x UC Davis'
    },
    {
        id: 2,
        title: 'ResView',
        subTitle: 'Blockchain Visualizer',
        description: 'My portfolio website. Includes client side static site and admin overview functionalities to check stats and messages.',
        image: resviewProj,
        tech: ['Showcase', 'Personal', 'Messages', 'Mui', 'Javascript'],
        gitUrl: 'https://github.com/aunshx/portfolio',
        link: 'https://resview.resilientdb.com/pages/home',
        tag: 'ExpoLab'
    },
    {
        id: 3,
        title: 'Reddit Infiniti',
        subTitle: 'Web API Project',
        description: 'A simple project to utilize the Reddit API by lazy-loading. Filtered API Data is processed and consumed in real-time while scrolling.',
        image: redditInfinitProj,
        tech: [
            'Dual-Mode',
            'Reddit API',
            'Snoowrap',
            'Data Cleaning',
            'Lazy-load',
        ],
        gitUrl: 'https://github.com/aunshx/fun-with-reddit',
        link: 'https://sumptuous-sandy-basket.glitch.me/',
    },
    {
        id: 4,
        title: 'Movie Catalogue',
        subTitle: 'Omdb API Real time search',
        description: 'A project featuring real-time search and lazy loading using the Omdb movie API.',
        image: omdbProj,
        tech: [
            'Typescript',
            'API',
            'Lazy-Loading',
            'Responsive',
            'Search',
        ],
        gitUrl: 'https://github.com/aunshx/omdb_api',
        link: 'https://main--calm-cajeta-d1c26b.netlify.app/',
    },
];

// EDUCATION 
export const EDUCATION_LIST = [
    {
        title: "University of California, Davis",
        degree: "MS. Electrical and Computer Engineering",
        start: "Sep 2023",
        end: "Sep 2025",
        abbr: "UCD",
    },
    {
        title: "University of Pune",
        degree: "BE. Electronics and Telecommunication",
        start: "June 2016",
        end: "May 2020",
        abbr: "SPPU",
        // gpa: '3.94/4.00',
        extra: 'Student Council | Top 10 of the class in all years'
    },
];

// BLOG, articles 
export const ARTICLES_LIST = [
    {
        "title": "How to Send WhatsApp Messages From Your React App Easily",
        "description": "A very simple way to send messages on WhatsApp web in React.",
        "link": "https://javascript.plainenglish.io/send-whatsapp-web-messages-in-react-easily-3bf2a82a2eb2",
        "technologies": ["react", "redux"],
        "stats": {
            "views": "24K",
            "upvotes": "162"
        }
    },
    {
        "title": "Enable HTTPS for Localhost During Local Development in Node.js",
        "description": "A tutorial on how to go from http://localhost:PORT to https://localhost:PORT.",
        "link": "https://javascript.plainenglish.io/enable-https-for-localhost-during-local-development-in-node-js-96204453d72b",
        "technologies": ["nodejs", "ssl"],
        "stats": {
            "views": "15.8K",
            "upvotes": "417"
        }
    },
    {
        "title": " Initialize a project in node with npm init",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, minus?",
        "link": "https://medium.com/@aunsh/initialize-a-project-in-node-with-npm-init-dc6f2196033",
        "technologies": ["nodejs", "api", "snoowrap"],
        "stats": {
            "views": "2.9K",
            "upvotes": "15"
        }
    },
    {
        "title": "Under the hood: Worst case complexities & working of all JS array methods",
        "description": "Get to know the Big O if JS array methods and their working",
        "link": "https://aunsh.medium.com/under-the-hood-worst-case-complexities-workings-of-popular-js-array-methods-739d5fef314a",
        "technologies": ["javascript", "big-O", "analysis"],
        "stats": {
            "views": "1.5K",
            "upvotes": "187"
        }
    },
    {
        "title": "CipherPrint: Developing smart digital fingerprints",
        "description": "Utilizing Machine Learning and Optimal Hashing to develop unique device fingerprints",
        "link": "https://aunsh.medium.com/cipherprint-optimizing-machine-learning-and-hashing-to-develop-unique-device-fingerprints-d93ccef21b34",
        "technologies": ["networks", "math", 'security'],
        "stats": {
            "views": "124",
            "upvotes": "2"
        }
    },
    {
        "title": "Automate tasks in node with node-cron",
        "description": "Make your life easier by automating mundane tasks with node-cron",
        "link": "https://aunsh.medium.com/automate-tasks-in-node-with-node-cron-fbb276bdaede",
        "technologies": ["node", "node-cron"],
        "stats": {
            "views": "686",
            "upvotes": "77"
        }
    },
    {
        "title": "ResView: A PBFT visualizer based on the ResilientDb blockchain fabric",
        "description": "A novel PBFT graphical visualizer based on the ResilientDb sustainable blockchain fabric.",
        "link": "https://aunsh.medium.com/resview-a-pbft-visualizer-based-on-the-resilientdb-blockchain-fabric-3ffaeb2aaee5",
        "technologies": ["blockchain", "d3.js", "sockets"],
        "stats": {
            "views": "191",
            "upvotes": "39"
        }
    },
    {
        "title": "Creating a simple server using node and express",
        "description": "A simple local server to get you started with backend development using node.js",
        "link": "https://aunsh.medium.com/creating-a-server-in-using-node-and-express-1ff36c7fa358",
        "technologies": ["express", "typescript"],
        "stats": {
            "views": "129",
            "upvotes": "29"
        }
    }
];

// RESEARCH 
export const RESEARCH_LIST = [
    {
        "title": "Spatio-temporal Forecasting of Agricultural Crop Yields with Machine Learning",
        "description": "A platform for predicting agricultural crop distributions across California using spatio-temporal machine learning techniques",
        "tags": ["Machine Learning", "Agriculture", "Geospatial Analysis"],
        "achievements": [
            "Thesis"
        ],
        "link": "https://drive.google.com/file/d/16OJgNEtry66OZOVhmm6F2xEvsaN8kYtj/view?usp=sharing"
    },
    {
        "title": "Decision Support for Biomass Energy Assessment and Lifecycle Analysis",
        "description": "Analyzing forest biomass resources across California to determine economic feasibility and environmental impacts of potential biopower facilities.",
        "tags": [ "GIS", "Lifecycle Assessment", "Technoeconomic Modeling"],
        "achievements": [],
        "link": "https://forestdss.ucdavis.edu/"
    },
    {
        title: "Byzantine Fault Tolerance Consensus Visualization",
        description: "Novel practical byzantine fault tolerance consensus visualizer based on the ResilientDb sustainable blockchain fabric",
        tags: ["Blockchain", "DDS", "D3.js"],
        achievements: [],
        link: "https://blog.resilientdb.com/2023/12/06/ResView.html"
    },
    {
        title: "5G Dual Band Pass Filter for Wi-Fi and WLAN Operations",
        description: "New generation of dual band pass 5G filter for Wi-Fi and WLAN operating t 2.45 GHz and 5.5 GHz.",
        tags: ["5G", "Antenna Tech", "Telecomm"],
        achievements: ["Best Paper"],
        link: "https://drive.google.com/file/d/1vU5t8YAz7mKWWKG1-l77xMDisG6grjzA/view?usp=sharing"
    }
];

// EXPERIENCE, Work
export const EXP_LIST = [
    {
        name: "UC Davis",
        type: "Education and Computer Science",
        work: [
            "Currently pursuing my Master's in Electrical and Computer Engineering at the University of California, Davis",
            "Working as a Graduate Teaching Assistant for Prof. Sophia Mattingly, course EDU 122",
            "Working with Prof. Mohammad Sadoghi at the Exploratory Systems Lab on the sustainable blockchain fabric - ResilientDb"
        ],
        description: "Currently pursuing my Master's in Electrical and Computer Engineering at the University of California, Davis. Working as a Graduate Teaching Assistant for Prof. Sophia Mattingly, course EDU 122. Working with Prof. Mohammad Sadoghi at the Exploratory Systems Lab on the sustainable blockchain fabric - ResilientDb",
        position: "Graduate Student Researcher",
        duration: "Apr '24 - Present",
        link: 'https://ucdavis.edu'
    },
    {
        name: "Prosperix",
        type: "Software",
        work: [
            "My work will be updated shortly! Till then here is what Prosperix does:-",
            "Prosperix is a workforce innovation company that develops software solutions that enable businesses to build an extraordinary workforce. To help businesses realize their highest potential and deliver meaningful impact, we have pioneered a new way of building and managing a thriving workforce. Our ultimate aim is for our solutions to positively impact human, workforce, and business prosperity.",
        ],
        description: "My work will be updated shortly! Till then here is what Prosperix does. Prosperix is a workforce innovation company that develops software solutions that enable businesses to build an extraordinary workforce. To help businesses realize their highest potential and deliver meaningful impact, we have pioneered a new way of building and managing a thriving workforce. Our ultimate aim is for our solutions to positively impact human, workforce, and business prosperity.",
        position: "SDE",
        duration: "Mar '23 - Aug '23",
        link: 'https://prosperix.com',
        tech: ['React', 'TS', 'CSS', 'Blockchain']
    },
    {
        name: "Dr SB's",
        type: "Software",
        work: [
            "Designed and worked on the company website using React and Node.js. Developed the dB schema using PostgreSQL",
            "Implemented authentication and authorization using Google OAuth",
            "Digitized lab report generation from MS Word to Web. Reduced lab report generation time significantly",
            "Developed direct web to WhatsApp report sharing by developing npm packages",
            "Implemented RESTful APIs in Node.js for analytics measurement and created customer check-in and reminder functionalities",
        ],
        description: "Designed and worked on the company website using React and Node.js. Developed the dB schema using PostgreSQL. Implemented authentication and authorization using Google OAuth. Digitized lab report generation from MS Word to Web. Reduced lab report generation time significantly. Developed direct web to WhatsApp report sharing by developing npm packages. Implemented RESTful APIs in Node.js for analytics measurement and created customer check-in and reminder functionalities",
        position: "Software Development Engineer",
        duration: "Jan '22 - Feb '23",
        link: ''
    },
    {
        name: "2WheelR",
        type: "Analytics and Web",
        work: [
            "Developed and set up business process to collect and collate data which was later analyzed to generate actionable insights resulting in increased revenue and margin",
            "Designed a dashboard by selecting relevant KPIs which was implemented as a part of the digital transformation effort",
        ],
        description: "Developed and set up business process to collect and collate data which was later analyzed to generate actionable insights resulting in increased revenue and margin. Designed a dashboard by selecting relevant KPIs which was implemented as a part of the digital transformation effort",
        position: "CEO's Strategy & Operations Team",
        duration: "Jan '21 - Dec '21",
        link: 'https://2wheelr.com'
    },
    {
        name: "Teach for India",
        type: "NGO",
        work: [
            "Taught and mentored 60 students coming from under-privileged communities in Math, History and Science at a local school",
            "Conducted personality development workshops, field visits and gatherings to increase engagement, merit and holistic development",
        ],
        description: "Taught and mentored 60 students coming from under-privileged communities in Math, History and Science at a local school. Conducted personality development workshops, field visits and gatherings to increase engagement, merit and holistic development",
        position: "Fellow",
        duration: "May '20 - Jun '21",
        link: 'https://www.teachforindia.org/'
    },
    {
        name: "Forbes Marshall",
        type: "Internship",
        work: [
            "Designed the control circuit of the Swiss New Water's novel disinfectant dispenser according to IPC specifications and implemented it using schematics developed in Eagle",
            "Developed schematics for a prototype based on Texas Instruments' XTR 111 precision voltage-to-current converter",
            "Oversaw purchase and procurement of materials required for the product",
        ],
        description: "Designed the control circuit of the Swiss New Water's novel disinfectant dispenser according to IPC specifications and implemented it using schematics developed in Eagle. Developed schematics for a prototype based on Texas Instruments' XTR 111 precision voltage-to-current converter. Oversaw purchase and procurement of materials required for the product",
        position: "Project Trainee",
        duration: "Jun '19 - Jul '19",
        link: 'https://www.forbesmarshall.com/'
    },
    {
        name: "Open Links Fdn",
        type: "NGO",
        work: [
            "Created and trained a network of volunteers to aide in the increase of the reach of the organization",
            "Facilitated inclusive communication between all stakeholders for efficient workflow and optimum utilization of resources",
            "Conducted multiple workshops to elevate technological literacy and facilitate holistic personality development in various schools for students coming from under-privileged communities.",
        ],
        description: "Created and trained a network of volunteers to aide in the increase of the reach of the organization. Facilitated inclusive communication between all stakeholders for efficient workflow and optimum utilization of resources. Conducted multiple workshops to elevate technological literacy and facilitate holistic personality development in various schools for students coming from under-privileged communities.",
        position: "Volunteer",
        duration: "Nov '18 - May '20",
        link: 'https://openlinksfoundation.org'
    },
];
