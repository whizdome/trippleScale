import { BotMessageSquare, BatteryCharging, Fingerprint, ShieldHalf, PlugZap, GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Hands-On Labs",
    description:
      "Engage in practical labs that simulate real-world DevOps challenges using modern tools.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Cloud Mastery",
    description:
      "Learn to deploy and manage applications on AWS, Azure, and Google Cloud platforms.",
  },
  {
    icon: <ShieldHalf />,
    text: "CI/CD Pipelines",
    description:
      "Master the creation of continuous integration and continuous delivery pipelines to automate workflows.",
  },
  {
    icon: <BatteryCharging />,
    text: "Infrastructure as Code",
    description:
      "Gain hands-on experience with tools like Terraform and Ansible to automate and scale infrastructure.",
  },
  {
    icon: <PlugZap />,
    text: "Real-Time Monitoring",
    description:
      "Implement monitoring and logging tools like Prometheus and Grafana to keep systems running smoothly.",
  },
  {
    icon: <GlobeLock />,
    text: "Security Best Practices",
    description:
      "Learn essential practices to secure your pipelines and applications against modern threats.",
  },
];

export const testimonials = [
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

export const checklistItems = [
  {
    title: "Build CI/CD Pipelines",
    description:
      "Automate deployments and integrate continuous testing to streamline workflows.",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Manage scalable infrastructure using tools like Terraform and CloudFormation.",
  },
  {
    title: "Master Containerization",
    description:
      "Deploy containerized applications with Docker and orchestrate them with Kubernetes.",
  },
  {
    title: "Enhance Team Collaboration",
    description:
      "Use Git and DevOps tools to improve code quality and streamline teamwork.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Access to introductory modules",
      "Community support",
      "Basic CI/CD pipeline setup tutorials",
    ],
  },
  {
    title: "Pro",
    price: "$50",
    features: [
      "Access to advanced modules",
      "One-on-one mentorship sessions",
      "Hands-on labs for Docker and Kubernetes",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Full course access",
      "Dedicated instructor support",
      "Certificate of completion",
      "Exclusive job placement assistance",
    ],
  },
];

export const devopsResourcesLinks = [
  { href: "#", text: "Learning Paths" },
  { href: "#", text: "Course Modules" },
  { href: "#", text: "Practice Labs" },
  { href: "#", text: "Study Guides" },
  { href: "#", text: "Certification Prep" },
];

export const toolsLinks = [
  { href: "#", text: "Docker" },
  { href: "#", text: "Kubernetes" },
  { href: "#", text: "Jenkins" },
  { href: "#", text: "Terraform" },
  { href: "#", text: "Git" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
