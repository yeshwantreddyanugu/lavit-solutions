import { DivisionProps, ProjectProps, CareerPosition } from '../types';

export const divisions: DivisionProps[] = [
  {
    title: "Lavit Events",
    subtitle: "Engineering Grand Experiences",
    description: "From corporate conferences to grand weddings, we deliver immersive event experiences with state-of-the-art technology and flawless execution.",
    imageSrc: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
    ctaText: "See Events",
    delay: 0.1
  },
  {
    title: "Lavit Civil",
    subtitle: "Building Modern India",
    description: "Our construction division specializes in commercial, residential, and infrastructure projects with a focus on quality, sustainability, and innovation.",
    imageSrc: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
    ctaText: "View Projects",
    delay: 0.2
  },
  {
    title: "Lavit Solar",
    subtitle: "Clean Energy. Smart Grids.",
    description: "Leading the renewable energy revolution with cutting-edge solar installations for residential, commercial, and utility-scale applications.",
    imageSrc: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    ctaText: "Go Solar",
    stats: "120+ MW Installed",
    delay: 0.3
  },
  {
    title: "Lavit Electrical",
    subtitle: "Safe. Scalable. Smart.",
    description: "Comprehensive electrical solutions from design to installation, maintenance, and upgrades for commercial and industrial facilities.",
    imageSrc: "https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg",
    ctaText: "See Systems",
    delay: 0.1
  },
  {
    title: "Lavit Elevators",
    subtitle: "Next-Gen Vertical Transport",
    description: "Modern elevator systems featuring cutting-edge technology, energy efficiency, and superior safety standards for all building types.",
    imageSrc: "https://images.pexels.com/photos/3990847/pexels-photo-3990847.jpeg",
    ctaText: "Step Inside",
    delay: 0.2
  },
  {
    title: "Quick Fix Services",
    subtitle: "On-Demand Repair. Anytime.",
    description: "24/7 maintenance and repair services for residential and commercial properties with rapid response and expert technicians.",
    imageSrc: "https://images.pexels.com/photos/8005363/pexels-photo-8005363.jpeg",
    ctaText: "Book Now",
    delay: 0.3
  }
];

export const projects: ProjectProps[] = [
  {
    id: "proj1",
    title: "Horizon Heights Commercial Tower",
    type: "Civil Construction",
    scale: "32-floor Premium Office Space",
    imageSrc: "https://images.pexels.com/photos/162557/architecture-building-sky-blue-162557.jpeg"
  },
  {
    id: "proj2",
    title: "National Tech Summit 2024",
    type: "Event Management",
    scale: "5,000+ Attendees",
    imageSrc: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
  },
  {
    id: "proj3",
    title: "SunPark Solar Farm",
    type: "Renewable Energy",
    scale: "50MW Installation",
    imageSrc: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg"
  },
  {
    id: "proj4",
    title: "Metro Line Electrical Systems",
    type: "Electrical Infrastructure",
    scale: "City-wide Transit Project",
    imageSrc: "https://images.pexels.com/photos/3817676/pexels-photo-3817676.jpeg"
  },
  {
    id: "proj5",
    title: "Grand Hotel Modernization",
    type: "Elevator Installation",
    scale: "12 High-Speed Units",
    imageSrc: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
  },
  {
    id: "proj6",
    title: "Corporate Campus Maintenance",
    type: "Quick Fix Services",
    scale: "Ongoing Annual Contract",
    imageSrc: "https://images.pexels.com/photos/8961148/pexels-photo-8961148.jpeg"
  }
];

export const careerPositions: CareerPosition[] = [
  {
    id: "career1",
    title: "Project Manager",
    department: "Civil Construction",
    location: "Mumbai",
    type: "Full-time"
  },
  {
    id: "career2",
    title: "Solar Installation Specialist",
    department: "Renewable Energy",
    location: "Bangalore",
    type: "Full-time"
  },
  {
    id: "career3",
    title: "Event Coordinator",
    department: "Events",
    location: "Delhi",
    type: "Full-time"
  },
  {
    id: "career4",
    title: "Electrical Engineer",
    department: "Electrical Works",
    location: "Hyderabad",
    type: "Full-time"
  },
  {
    id: "career5",
    title: "Service Technician",
    department: "Quick Fix Services",
    location: "Multiple Locations",
    type: "Full-time"
  }
];