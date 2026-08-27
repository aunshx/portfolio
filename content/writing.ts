import type { WritingItem } from "./types";

/** View counts are real, taken from the published article stats. */
export const WRITING: WritingItem[] = [
  {
    title: "How to Send WhatsApp Messages From Your React App Easily",
    description: "A very simple way to send messages on WhatsApp web in React.",
    link: "https://javascript.plainenglish.io/send-whatsapp-web-messages-in-react-easily-3bf2a82a2eb2",
    technologies: ["react", "redux"],
    views: 24000,
    upvotes: 162,
  },
  {
    title: "Enable HTTPS for Localhost During Local Development in Node.js",
    description:
      "A tutorial on how to go from http://localhost:PORT to https://localhost:PORT.",
    link: "https://javascript.plainenglish.io/enable-https-for-localhost-during-local-development-in-node-js-96204453d72b",
    technologies: ["nodejs", "ssl"],
    views: 15800,
    upvotes: 417,
  },
  {
    title: "Initialize a project in node with npm init",
    description:
      "How to initialize a project with the npm init command and use the package.json file to start coding our projects in node.",
    link: "https://medium.com/@aunsh/initialize-a-project-in-node-with-npm-init-dc6f2196033",
    technologies: ["nodejs", "api", "snoowrap"],
    views: 2900,
    upvotes: 15,
  },
  {
    title:
      "Under the hood: Worst case complexities & working of all JS array methods",
    description: "Get to know the Big O of JS array methods and their working.",
    link: "https://aunsh.medium.com/under-the-hood-worst-case-complexities-workings-of-popular-js-array-methods-739d5fef314a",
    technologies: ["javascript", "big-O", "analysis"],
    views: 1500,
    upvotes: 187,
  },
  {
    title: "Automate tasks in node with node-cron",
    description: "Make your life easier by automating mundane tasks with node-cron.",
    link: "https://aunsh.medium.com/automate-tasks-in-node-with-node-cron-fbb276bdaede",
    technologies: ["node", "node-cron"],
    views: 686,
    upvotes: 77,
  },
  {
    title:
      "ResView: A PBFT visualizer based on the ResilientDb blockchain fabric",
    description:
      "A novel PBFT graphical visualizer based on the ResilientDb sustainable blockchain fabric.",
    link: "https://aunsh.medium.com/resview-a-pbft-visualizer-based-on-the-resilientdb-blockchain-fabric-3ffaeb2aaee5",
    technologies: ["blockchain", "d3.js", "sockets"],
    views: 191,
    upvotes: 39,
  },
  {
    title: "Creating a simple server using node and express",
    description:
      "A simple local server to get you started with backend development using node.js.",
    link: "https://aunsh.medium.com/creating-a-server-in-using-node-and-express-1ff36c7fa358",
    technologies: ["express", "typescript"],
    views: 129,
    upvotes: 29,
  },
  {
    title: "CipherPrint: Developing smart digital fingerprints",
    description:
      "Utilizing Machine Learning and Optimal Hashing to develop unique device fingerprints.",
    link: "https://aunsh.medium.com/cipherprint-optimizing-machine-learning-and-hashing-to-develop-unique-device-fingerprints-d93ccef21b34",
    technologies: ["networks", "math", "security"],
    views: 124,
    upvotes: 2,
  },
];

export const TOTAL_VIEWS = WRITING.reduce((n, a) => n + a.views, 0);
