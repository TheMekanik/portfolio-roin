import project1 from "../assets/projects/mockup_ecommerce.png";
import project2 from "../assets/projects/mockup_beasiswa.png";
import project3 from "../assets/projects/mockup_portfolio.png";
import project4 from "../assets/projects/char.png";
import project5 from "../assets/projects/dashboard_sales.jpeg";

export const HERO_CONTENT = `Hi, I am Ahmad Ro'in Fannani, an active student currently pursuing Information Systems studies. I have an interest in data analytics and web development, focusing on utilizing complex data to create useful information and creating system for business solutions. I have experience working on data analytics projects using Python and have been involved in web development projects as a full-stack and front-end developer. I enjoy working in teams, leveraging my adaptive skills, communication, and team management abilities gained from my organizational experiences.`;

export const ABOUT_TEXT = `With a strong interest in data analytics and web development, I have worked on data analytics projects using Python and Google Looker Studio, enhancing my ability to analyze and interpret data. I also have hands-on experience in web development with HTML, CSS, JavaScript, and PHP. Proficient in modern frameworks like React.js, Node.js, Express.js, and Laravel, I have also mastered database management with MySQL. Passionate about problem-solving, I enjoy collaborating, learning new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "January 2024 - December 2025",
    role: "Staff of Advocacy and Student Welfare Department",
    company: "Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer UPN 'Veteran' Jakarta",
    description: `Bridged communication between students and faculty, empowering student voices and fostering transparency through feedback sessions and advocacy meetings. Helped address key issues such as facility improvements and academic support, strengthening trust and student participation in policy discussions.`,
    profile_link : "https://www.instagram.com/p/DFcfH-GTLuc/?img_index=1",
  },
  {
    year: "January 2025 - Present",
    role: "Vice Chair of Commission II",
    company: "Senat Mahasiswa Fakultas Ilmu Komputer UPN 'Veteran' Jakarta",
    description: `Gathered, accommodated, and followed up on student aspirations at the Faculty of Computer Science, UPN Veteran Jakarta. Facilitated communication with the faculty's executive student organization and conducted educational initiatives on advocacy and student rights.`,
    profile_link: "https://www.instagram.com/p/DCy4mO7yuyO/?img_index=1",
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "An e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    link: "https://github.com/TheMekanik/ecommerce-laravel.git",
  },
  {
    title: "Scholarship Information System",
    image: project2,
    description:
      "A website based system that allows students to apply, update profiles, and upload documents, while administrators manage student data, issue recommendations, and review applications.",
    technologies: ["PHP", "CSS", "Laravel", "MySQL"],
    link: "https://github.com/TheMekanik/SistemBeasiswa.git",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing my education, organizational experiences, projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Sentiment Analysis of Indonesian Public Opinion on Platform X Regarding the 12% VAT Increase in Indonesia Using a Lexicon-Based Model",
    image: project4,
    description:
      "A project aims to analyze public reactions to Indonesia's planned VAT (Value Added Tax) increase to 12% by examining comments on social media platform 'X'",
    technologies: ["Python", "Pandas", "Matplotlib", "Sastrawi"],
    link: "https://colab.research.google.com/drive/1LRgNFfgfurXqaE0YeDFIjHPGcI4J9R-n?usp=sharing",
  },
  {
    title: "Sales Report Data Visualization",
    image: project5,
    description:
      "A project that visualizes U.S. retail sales data to identify key sales trends, customer groups, and product categories. It highlights regional and seasonal patterns, revenue drivers, and the effectiveness of different shipping methods, providing insights to improve performance and focus on growth opportunities.",
    technologies: ["Google Looker Studio"],
    link: "https://lookerstudio.google.com/reporting/3ed65acd-5f49-4e0b-bf93-1dfda31c8663",
  },
];

export const CONTACT = {
  address: "Jakarta, Indonesia ",
  phoneNo: "+62-815-1456-5145 ",
  email: "ahmadroinn24@gmail.com",
};
