import React from "react";
import {
  BotMessageSquare,
  BatteryCharging,
  Fingerprint,
  ShieldHalf,
  PlugZap,
  Cloud,
  Globe,
} from "lucide-react";

import {
  CommandLineIcon,
  CloudIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

const courses = [
  {
    title: "DevOps Engineering",
    icon: <CommandLineIcon />,
    shortDescription:
      "Master modern DevOps practices and tools including Docker, Kubernetes, and CI/CD pipelines.",
    description:
      "Comprehensive DevOps course covering the entire software delivery lifecycle, from development to deployment and monitoring.",
    outline: [
      "Introduction to DevOps Principles",
      "Version Control with Git",
      "Container Management with Docker",
      "Orchestration with Kubernetes",
      "CI/CD Pipeline Implementation",
      "Infrastructure as Code",
      "Cloud Platforms (AWS/Azure)",
      "Monitoring and Logging",
      "Security Best Practices",
      "Real-world Projects",
    ],
  },
  {
    title: "Cloud Computing",
    icon: <CloudIcon />,
    shortDescription:
      "Learn cloud architecture and deployment using AWS, Azure, and Google Cloud Platform.",
    description:
      "Deep dive into cloud computing concepts and practical implementation across major cloud platforms.",
    outline: [
      "Cloud Computing Fundamentals",
      "AWS Core Services",
      "Azure Fundamentals",
      "Cloud Security",
      "Serverless Architecture",
      "Cloud Storage Solutions",
      "Network Architecture",
      "Cost Optimization",
      "High Availability Design",
      "Cloud Migration Strategies",
    ],
  },
  {
    title: "Full Stack Development",
    icon: <CodeBracketIcon />,
    shortDescription:
      "Build modern web applications using React, Node.js, and other cutting-edge technologies.",
    description:
      "Comprehensive program covering both frontend and backend development with modern frameworks and tools.",
    outline: [
      "HTML5, CSS3, and JavaScript",
      "React.js Frontend Development",
      "Node.js Backend Development",
      "Database Design & Management",
      "API Development",
      "Authentication & Authorization",
      "Testing & Debugging",
      "Performance Optimization",
      "Deployment Strategies",
      "Final Project Implementation",
    ],
  },
];

const testimonials = [
  {
    user: "John DevOps",
    company: "Cloud Innovators",
    image: user1,
    text: "This course transformed my career. The hands-on labs and real-world scenarios made me job-ready in no time.",
  },
  {
    user: "Jane Automation",
    company: "Tech Titans",
    image: user2,
    text: "Learning DevOps has never been easier. The instructors are experienced and ensure you truly understand the concepts.",
  },
  {
    user: "David Pipeline",
    company: "Startup Ventures",
    image: user3,
    text: "The skills I gained from this course landed me my first DevOps role. Highly recommended for anyone looking to break into tech!",
  },
  {
    user: "Emily SRE",
    company: "NextGen Systems",
    image: user4,
    text: "I loved the structured approach. From basics to advanced topics, this course has it all!",
  },
  {
    user: "Michael Infrastructure",
    company: "Enterprise Solutions",
    image: user5,
    text: "Building infrastructure as code was a game-changer for me. The projects helped me understand best practices.",
  },
  {
    user: "Sarah Jenkins",
    company: "Agile DevOps",
    image: user6,
    text: "The practical sessions on CI/CD pipelines and monitoring were extremely valuable. I feel confident in my skills now!",
  },
];

const App = () => {
  return (
    <div>
      <header>
        <nav>
          {navItems.map((item, index) => (
            <a key={index} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="courses">
          <h2>Courses</h2>
          {courses.map((course, index) => (
            <div key={index}>
              <h3>{course.title}</h3>
              {course.icon}
              <p>{course.shortDescription}</p>
              <ul>
                {course.outline.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="testimonials">
          <h2>Testimonials</h2>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <img src={testimonial.image} alt={testimonial.user} />
              <p>{testimonial.text}</p>
              <strong>{testimonial.user}</strong> - {testimonial.company}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
