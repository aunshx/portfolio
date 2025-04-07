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
        subTitle: 'Siting Tool',
        description: 'Forest Resources and Renewable Energy Decision Support System (FRREDSS): An online siting and decision support application modeled for forest biomass based on the $1.2 million grant from CA Office of Planning and Research',
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
        description: 'A novel PBFT graphical visualizer based on the ResilientDb sustainable blockchain fabric.',
        image: resviewProj,
        tech: ['Showcase', 'Personal', 'Messages', 'Mui', 'Javascript'],
        gitUrl: 'https://github.com/ResilientApp/ResView',
        link: 'https://resview.resilientdb.com/pages/home',
        tag: 'ExpoLab'
    },
    {
        id: 3,
        title: 'Reddit Infiniti',
        subTitle: 'Web API Project',
        description: 'Utilizing the Reddit API by continuous streaming and processing API Data to showcase tech memes.',
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
        tag: ''
    },
    {
        id: 4,
        title: 'Movie Catalogue',
        subTitle: 'Real-time search',
        description: 'Featuring real-time search and lazy loading using the Omdb movie API.',
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
        tag: ''
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
        "link": "https://ucdavis.app.box.com/file/1602222716525?s=ptum3pvtfarexagd1nmgy479gej1otmz"
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
            "Spearheaded development and system design of version 2.0 of the Forest Resources and Renewable Energy Decision Support System (FRREDSS)",
            "Implemented competitive feedstock analysis visualization using Python, TypeScript, Leaflet, CSS, and PostgreSQL",
            "Orchestrated CI/CD pipeline development and oversaw production deployment of the application"
        ],
        description: "Spearheaded development of the Forest Resources and Renewable Energy Decision Support System (FRREDSS) 2.0, implemented feedstock analysis visualization with Python and TypeScript, and orchestrated CI/CD pipeline development while building advanced reporting tools and transportation cost modeling interfaces.",
        position: "Graduate Student Researcher",
        duration: "Jun '24 - Present",
        link: 'https:/its.ucdavis.edu',
        tech: ["Biomass", "Technoeconomic Analysis", "Lifecycle Assessment "]

    },
    {
        name: "Exploratory Systems Lab",
        type: "Software",
        work: [
            "Architected and implemented ResView, a novel PBFT consensus protocol visualization tool for blockchain systems",
            "Developed interactive data visualization components that track message propagation timing and consensus achievement",
            "Created simulation capabilities allowing users to induce replica failures for testing Byzantine fault tolerance mechanisms"
        ],
        description: "Architected ResView, a novel PBFT consensus protocol visualization tool for blockchain systems using React.js, D3.js and websockets, developed interactive components tracking message propagation timing and consensus achievement, and created simulation capabilities for testing Byzantine fault tolerance mechanisms.",
        position: "Software Developer",
        duration: "Aug '23 - Dec '24",
        link: 'https://resilientdb.com',
        tech: ['React', 'D3', 'WebSockets', 'Blockchain']
    },
    {
        name: "Prosperix",
        type: "Software",
        work: [
            "Collaborated with an international team to develop two key in-app modules for the company's brand cut-over project",
            "Implemented robust UI/UX using ReactJS, CSS, Tailwind, and Git",
            "Designed fast and reliable APIs using GraphQL queries and enabled agile software development using CI-CD techniques"
        ],
        description: "Collaborated with an international team to develop key in-app modules for a brand cut-over project, implemented robust UI/UX using ReactJS, CSS and Tailwind, and designed fast and reliable APIs using GraphQL queries while enabling agile software development with CI-CD techniques.",
        position: "Software Developer",
        duration: "Mar '23 - Aug '23",
        link: 'https://prosperix.com',
        tech: ['React', 'GraphQL', 'Tailwind', 'CSS']
    },
    {
        name: "2WheelR",
        type: "Analytics and Web",
        work: [
            "Designed and implemented comprehensive KPI dashboards using SQL and Tableau that streamlined decision-making processes",
            "Reduced reporting time by 20% and enabled real-time performance monitoring across departments",
            "Developed market segmentation models and competitive analyses that strengthened the company's market positioning"
        ],
        description: "Designed and implemented comprehensive KPI dashboards using SQL and Tableau that streamlined decision-making processes, reduced reporting time by 20%, and played a key role in analytics strategy that secured 2nd place in Asia's largest startup competition through market segmentation models and competitive analyses.",
        position: "Engineering Analyst",
        duration: "Jul '21 - Jun '22",
        link: 'https://2wheelr.com'
    },
    {
        name: "Teach for India",
        type: "NGO",
        work: [
            "Led high school mathematics and science curriculum for underprivileged students",
            "Conducted personality development workshops, field visits and gatherings to increase engagement",
            "Received fellowship for commitment to educational equity"
        ],
        description: "Led high school mathematics and science curriculum for underprivileged students as a Fellow while conducting personality development workshops, field visits and gatherings to increase engagement, merit and holistic development.",
        position: "Fellow",
        duration: "May '20 - Jun '21",
        link: 'https://www.teachforindia.org/'
    }
];