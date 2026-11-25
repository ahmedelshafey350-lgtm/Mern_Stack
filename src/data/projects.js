// Real, publishable projects live in `projects`. Drafts live in drafts.js and are never shown.
// A project appears publicly ONLY if publication === 'Published' AND getProblems(p) is empty.
// Publication: Draft (hidden) | Ready (complete, still hidden) | Published (visible) | Archived (hidden)
import { drafts } from "./drafts";

export const categories = [
  "Frontend Development",
  "Backend Development",
  "MERN Stack Applications",
  "React.js Applications",
  "API Development",
  "Database Management",
  "Full Stack Projects",
  "Engineering & Software Integration",
];
export const statuses = ["Completed", "In Progress", "Planned"];
export const publications = ["Draft", "Ready", "Published", "Archived"];

/* Template for a real project (copy into the array below):
{
  id: 'my-project', slug: 'my-project', title: '', shortDescription: '', fullDescription: '',
  category: 'MERN Stack Applications', status: 'Completed', publication: 'Published',
  technologies: [], features: [], challenges: [], solutions: [],
  architecture: [], database: [], apiEndpoints: [{ method: 'GET', path: '/api/x', note: '' }],
  // kind: 'screenshot' (real app screenshot) or 'concept' (clearly labelled conceptual artwork, not a screenshot)
  images: [{ src: '/images/my-project-1.webp', alt: 'What the screenshot shows', kind: 'screenshot' }],
  githubUrl: '', liveUrl: '', documentationUrl: '', featured: false, date: '',
}
Put image files in /public/images/. Use a different image for every project. */
const img = (slug, alt) => [
  { src: `/images/${slug}.svg`, alt, kind: "concept" },
];
export const projects = [
  {
    id: "course-management-api",
    slug: "course-management-api",
    title: "Course Management REST API",
    category: "API Development",
    featured: true,
    publication: "Published",
    shortDescription:
      "A RESTful backend for managing course records with full CRUD support, built on Express and MongoDB Atlas.",
    fullDescription:
      "A RESTful API for managing courses. It supports creating, retrieving, updating and deleting course records, with the backend organised into Express routes and controllers and persisted in MongoDB Atlas through Mongoose.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    features: [
      "CRUD operations: create, retrieve, update and delete courses",
      "Backend organised with Express routes and controllers",
      "MongoDB Atlas connection through Mongoose",
      "JSON handling middleware and CORS configuration",
      "Environment variables for application configuration",
    ],
    architecture: [
      "Client",
      "Express (JSON + CORS middleware)",
      "Routes",
      "Controllers",
      "Mongoose",
      "MongoDB Atlas",
    ],
    database: ["Course: title, description, category, price"],
    GitHubL:"https://github.com/ahmedelshafey350-lgtm/Crud_Operation.git",
    images: img(
      "course-management-api",
      "Conceptual illustration of a request flowing from a client through an Express server to a MongoDB database",
    ),
  },
  {
    id: "movie-web-app",
    slug: "movie-web-app",
    title: "Movie Web Application",
    category: "React.js Applications",
    featured: true,
    publication: "Published",
    shortDescription:
      "A responsive movie app with API-driven browsing, Redux state, movie detail pages and Firebase integration.",
    fullDescription:
      "A responsive movie application built from reusable React components and hooks. Movie data comes from an API through Axios, global state is managed with Redux, React Router handles navigation and movie details pages, and Firebase provides authentication and application services.",
    technologies: [
      "React.js",
      "Redux",
      "Axios",
      "Firebase",
      "React Router",
      "Bootstrap",
    ],
    features: [
      "Responsive layout",
      "Reusable components and React Hooks",
      "Movie API integration with Axios",
      "Global state management with Redux",
      "Navigation and movie details pages with React Router",
      "Firebase integration for authentication and services",
    ],
    architecture: [
      "React components",
      "Redux store",
      "Axios",
      "Movie API",
      "Firebase",
    ],
    GitHubL:"https://github.com/ahmedelshafey350-lgtm/Movie.git",
    images: img(
      "movie-web-app",
      "Conceptual illustration of a film strip with three movie poster frames",
    ),
  },
  {
    id: "weather-app",
    slug: "weather-app",
    title: "Weather Forecast Application",
    category: "React.js Applications",
    featured: true,
    publication: "Published",
    shortDescription:
      "A responsive, multilingual weather app showing current conditions and temperatures for cities worldwide.",
    fullDescription:
      "A responsive weather application that shows current weather conditions and temperatures for cities around the world, with multilingual support through i18next.",
    technologies: ["React.js", "Weather API", "i18next"],
    features: [
      "Current conditions and temperatures for cities worldwide",
      "Multilingual support",
      "Responsive design",
    ],
    architecture: ["React UI", "Weather API", "i18next translations"],
    images: img(
      "weather-app",
      "Conceptual illustration of a sun behind a cloud with rain and a forecast bar chart",
    ),
  },
  {
    id: "todo-list",
    slug: "todo-list",
    title: "Todo List Application",
    category: "React.js Applications",
    publication: "Published",
    shortDescription:
      "A task manager for adding, editing, completing and deleting tasks, saved in the browser with localStorage.",
    fullDescription:
      "A task management application built with React. Tasks can be added, edited, completed and deleted, and they persist between visits through localStorage.",
    technologies: ["React.js", "localStorage"],
    features: [
      "Add, edit, complete and delete tasks",
      "Persistent task storage with localStorage",
    ],
    architecture: ["React UI", "Task state", "localStorage"],
    images: img(
      "todo-list",
      "Conceptual illustration of a checklist with two completed and two open tasks",
    ),
  },
  {
    id: "portfolio-website",
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Frontend Development",
    publication: "Published",
    shortDescription:
      "This responsive portfolio, showcasing development skills, projects, experience and contact information.",
    fullDescription:
      "A responsive personal portfolio that presents development skills, projects, experience and contact information. It is the site you are viewing.",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "Lucide React",
    ],
    features: [
      "Responsive multi-page layout",
      "Showcases skills, projects, experience and contact details",
      "Light and dark themes",
    ],
    architecture: [
      "React components",
      "React Router pages",
      "Central data files",
    ],
    GitHubL:"https://ahmedelshafey350-lgtm.github.io/Ahmed-portfolio/",
    images: img(
      "portfolio-website",
      "Conceptual wireframe illustration of a portfolio website layout in a browser window",
    ),
  },
  {
    id: "travel-booking-website",
    slug: "travel-booking-website",
    title: "Travel Booking Website",
    category: "Frontend Development",
    publication: "Published",
    shortDescription:
      "Front-end internship work at EraaSoft: a travel website with tours, hotels, booking and checkout pages.",
    fullDescription:
      "A travel booking website built during my Front-End internship at EraaSoft, covering tours, hotels, booking and checkout pages.",
    technologies: ["Front-End Development"],
    features: ["Tours pages", "Hotels pages", "Booking page", "Checkout page"],
    images: img(
      "travel-booking-website",
      "Conceptual illustration of a map route ending at a location pin beside a hotel building",
    ),
  },
  {
    id: "books-ecommerce-website",
    slug: "books-ecommerce-website",
    title: "Books E-commerce Website",
    category: "Frontend Development",
    publication: "Published",
    shortDescription:
      "Front-end internship work at EraaSoft: an online bookstore with product listings and user-friendly interfaces.",
    fullDescription:
      "A books e-commerce website built during my Front-End internship at EraaSoft, featuring product listings and user-friendly interfaces.",
    technologies: ["Front-End Development"],
    features: ["Product listings", "User-friendly interfaces"],
    GitHubL:"https://ahmedelshafey350-lgtm.github.io/Techsphere/",
    images: img(
      "books-ecommerce-website",
      "Conceptual illustration of a row of colorful books on a shelf",
    ),
  },
  {
    id: "ai-image-generator",
    slug: "ai-image-generator",
    title: "AI Image Generator Application",
    category: "Frontend Development",
    publication: "Published",
    shortDescription:
      "Front-end internship work at EraaSoft: an AI image generator application.",
    fullDescription:
      "An AI image generator application built during my Front-End internship at EraaSoft.",
    technologies: ["Front-End Development"],
    features: [
      "Image generator application interface built during the internship",
    ],
    GitHubL:"https://ahmedelshafey350-lgtm.github.io/Crud_Frontend/",
    images: img(
      "ai-image-generator",
      "Conceptual illustration of an image frame with a mountain and sun above a prompt input bar",
    ),
  },
];

// Required fields for public visibility.
export function getProblems(p, all = []) {
  const m = [];
  if (!p.slug || !/^[a-z0-9-]+$/.test(p.slug)) m.push("slug");
  if (!p.title?.trim()) m.push("title");
  if ((p.fullDescription || p.shortDescription || "").trim().length < 40)
    m.push("description (min 40 characters)");
  if (!categories.includes(p.category)) m.push("category");
  if (p.status && !statuses.includes(p.status)) m.push("status");
  if (!p.technologies?.length) m.push("technologies");
  if (!p.features?.length) m.push("at least one feature");
  const first = p.images?.[0];
  if (!first?.src || !first?.alt?.trim()) m.push("image with src and alt text");
  else if (
    all.some((o) => o !== p && o.images?.some((i) => i.src === first.src))
  )
    m.push("unique image (reused by another project)");
  return m;
}

const dev = typeof import.meta !== "undefined" && import.meta.env?.DEV;
export const publicProjects = projects.filter((p) => {
  const problems = getProblems(p, projects);
  if (dev && ["Published", "Ready"].includes(p.publication) && problems.length)
    console.warn(
      `[projects] "${p.slug}" is ${p.publication} but incomplete: ${problems.join(", ")}`,
    );
  return p.publication === "Published" && problems.length === 0;
});
export const getProject = (slug) => publicProjects.find((p) => p.slug === slug);
export const draftCount = drafts.length;
