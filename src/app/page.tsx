"use client"
import React, { useState } from 'react';
import { Github, Linkedin, Menu, Instagram, Mail, X, FileUser } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Portfolio = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    React.useEffect(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
      document.documentElement.style.scrollPaddingTop = '4rem';
      
      return () => {
        document.documentElement.style.scrollBehavior = 'auto';
        document.documentElement.style.scrollPaddingTop = '0';
      };
    }, []);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
  const experiences = [
    {
      title: "Cloud Engineer Intern",
      company: "Megalogic",
      period: "Oct 2024 - Dec 2024",
      description: <p>
        • Led a team of 6 cross-learning path members (Cloud Computing and Machine Learning) <br />
        • Designed a real-time cloud-based architecture using Google Cloud. <br />
        • Integrated YOLOv8 models developed by the Machine Learning team into the cloud system
      </p> ,
      Image: "/images/megalogic.png",
      Link: <a href="https://megalogic.id/" target="_blank">More</a>
    },    
    {
      title: "Bangkit Academy 2024 By Google, GoTo, Tokopedia, Traveloka - Cloud Computing Learning Path",
      company: "Dicoding Indonesia",
      period: "Sep 2024 - Dec 2024",
      description: <p>
      • Selected as one of 4.500 accepted students from 46.000+ applicants across Indonesia <br />
      • Selected as one of 550 students for the Capstone Project Company Track <br />
      • Learned Google Cloud technology and web development.
      </p> ,
      Image: "/images/bangkit.png",
      Link: <a href="https://www.linkedin.com/posts/anandasheva_lifeatbangkit-bangkitacademy2024-kampusmerdeka-activity-7246002116383629313-XdNl?utm_source=share&utm_medium=member_desktop" target="_blank">More</a>
    },
    {
      title: "UI/UX Design Intern",
      company: "Nuri",
      period: "Mar 2024 - Apr 2024",
      description: <p>• Responsible for developing COD (Cash on Delivery) payment features on the application with design thinking method
      <br />• Developed wireframes and prototypes to test initial designs. Use design tools like Figma to create final visuals of user prototypes.
      <br />• Successfully gained fulfillment score reach within 80+ in final assessment test
      </p> ,
      Image: "/images/1.png",
      Link: <a href="https://medium.com/@sheva1257/desiredesign-nuris-cod-payment-system-ui-ux-study-case-048432c1ed37" target="_blank">More</a>
    },
    {
      title: "AIESEC in UNILA",
      company: "Organization",
      period: "Aug 2023 - Sep 2023",
      description: <p>• Completed local projects addressing educational challenges in underprivileged communities, impacting over 150 students, aligned with SDG 12: Responsible Consumption and SDG 13: Climate Action
      <br />• Developed leadership and managerial skills for youth student
      </p>,
      Image: "/images/aiesec.png",
      Link: <a href="https://www.linkedin.com/company/aiesec-in-universitas-lampung/" target="_blank">More</a>
    },
    {
      title: "Himakom Unila",
      company: "Student Associations",
      period: "Jan 2023 - Dec 2023",
      description: <p>• Achieved 500+ views per upload within 2 months <br />• Successfully created over 25+ content creations, including feeds, reels, stories, and YouTube&quot;
      <br />• Ensured that all content meets the needs and objectives of the organization and adheres to quality and consistency standards</p>, 
      Image: "/images/himakom.jpg",
      Link: <a href="https://drive.google.com/drive/folders/1HlhUd6QjbWm9cQgnzuCmDipVZkaYIKy2?usp=sharing" target="_blank">More</a>
    },
    {
      title: "GEMASTIK XVII 2024 Participant - UX Design",
      company: "Event",
      period: "Mar 2024 - Jun 2024",
      description: <p>• Being part of Gemastik Event held in UNNES
      </p>,
      Image: "/images/gemastik.png",
      Link: <a href="" target="_blank">More</a>
    },
    {
      title: "Speakers",
      company: "University of Lampung",
      period: "Sep 2022",
      description: "• Speaker at the department socialization attended by more than 30 teachers throughout Lampung province",
      Image: "/images/pembicara.png",
      Link: <a href="https://drive.google.com/file/d/1HhxbgHW2Ys3lwJ-jha76g6_C063ACi-Z/view?usp=sharing" target="_blank">More</a>
    }
  ];
  
  const projects = [
    {
      title: "Skintology",
      tech: "HTML, JavaScript, TailwindCSS",
      Image: "/images/7.png",
      Link: <a href="https://sistem-pakar-skintology.vercel.app/" target="_blank">More</a>
    },     
    {
      title: "F1 One Lap Prediction",
      tech: "Python, Pandas, PyTorch, NumPy, Streamlit",
      Image: "/images/8.png",
      Link: <a href="https://github.com/AnandaSheva/data-analysis-of-F1" target="_blank">More</a>
    },    
    {
      title: "Toolventory",
      tech: "HTML, CSS, PHP",
      Image: "/images/5.png",
      Link: <a href="https://github.com/AnandaSheva/Toolventory-Project-ADSI" target="_blank">More</a>
    },
    {
      title: "FloraGO",
      tech: "Kotlin",
      Image: "/images/tam.jpg",
      Link: <a href="https://github.com/AnandaSheva/FloraApp" target="_blank">More</a>
    },
    {
      title: "Siakadu",
      tech: "HTML, Bootstrap",
      Image: "/images/6.png",
      Link: <a href="https://github.com/AnandaSheva/CRUD-Web-with-PHPNative" target="_blank">More</a>
    },
    {
      title: "GO GROCERIES",
      tech: "HTML, CSS, JavaScript",
      Image: "/images/3.jpg",
      Link: <a href="" target="_blank">More</a>
    },
    {
      title: "Hospitality Plus",
      tech: "Java",
      Image: "/images/4.png",
      Link: <a href="https://github.com/AnandaSheva/HospitalityPlus-UASPBO" target="_blank">More</a>
    },
    {
      title: "E-Learn",
      tech: "Figma",
      Image: "/images/2.png",
      Link: <a href="https://www.figma.com/proto/bT5VNG50Zo7HBm2tIeazEJ/RPL-E-Learn?node-id=52-19&starting-point-node-id=52%3A19&t=93QOqhgTnkpnCBnZ-1" target="_blank">More</a>
    },
  ];

  return (
    <div className="min-h-screen bg-cyan-50">
      
       {/* Navbar */}
       <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <a href="#main" className="text"> <img src="/images/icon.png" alt="Logo" className="h-8 w-8 rounded-full" /></a> 
              <a href="#main" className="text"> <span className="ml-2 text-xl font-bold">Sheva</span></a> 
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-semibold">About</a>
              <a href="#experience" className="text-gray-700 hover:text-gray-900 font-semibold">Experiences</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 font-semibold">Projects</a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 transition-transform duration-300 ease-in-out">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48' : 'max-h-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block text-gray-700 hover:text-gray-900 font-semibold py-2 transition-colors duration-200" onClick={toggleMenu}>About</a>
            <a href="#experience" className="block text-gray-700 hover:text-gray-900 font-semibold py-2 transition-colors duration-200" onClick={toggleMenu}>Experiences</a>
            <a href="#projects" className="block text-gray-700 hover:text-gray-900 font-semibold py-2 transition-colors duration-200" onClick={toggleMenu}>Projects</a>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section id="main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Ananda Sheva Hidayat</h1>
      <p className="mt-4 text-xl text-gray-600">Software Developer & Machine Learning enthusiast.</p> <br />
      <Card className="flex flex-row items-center rounded-xl shadow-md px-4 py-2 h-auto max-w-xl w-full md:w-3/4 lg:h-32 transform hover:scale-105 duration-300" >
  <div className="w-16 h-16 md:w-20 md:h-20 mr-4">
    <img src="images/unila.png" alt="unila" className="object-contain w-full h-full" />
  </div>
  <div className="flex-1">
    <CardHeader>
      <CardTitle className='text-base md:text-lg'><br />Computer Science Student</CardTitle>
      <CardDescription className="text-sm md:text-base">University of Lampung <br /> 2022 - Present</CardDescription>
      <CardContent></CardContent>
    </CardHeader>
  </div>
</Card> 
      <div className="mt-6 flex space-x-6">
        <a href="https://github.com/AnandaSheva" target="_blank"><Github className="h-8 w-8 text-gray-600 hover:text-black duration-300 transition-transform transform hover:scale-110" /></a>
        <a href="https://www.linkedin.com/in/anandashevahidayat/" target="_blank"><Linkedin className="h-8 w-8 text-gray-600 hover:text-blue-700 transition-transform transform hover:scale-110 duration-300" /></a>
        <a href="https://www.instagram.com/shevaananda_/" target="_blank"><Instagram className="h-8 w-8 text-gray-600 hover:text-pink-500 transition-transform transform hover:scale-110 duration-300" /></a>
        <a href="mailto:sheva1257@gmail.com"><Mail className="h-8 w-8 text-gray-600 hover:text-red-500 transition-transform transform hover:scale-110 duration-300" /></a>
        <a href="https://drive.google.com/file/d/1aKmMk36hAUwMGNlV3yv-dUTBReR7YrCq/view?usp=sharing" target='_blank'><FileUser className="h-8 w-8 text-gray-600 hover:text-blue-300 transition-transform transform hover:scale-110 duration-300" /></a>
      </div>
    </div>
    <div className="relative w-full h-80 md-flex">
      <img src="/images/me.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
    </div>
  </div>
</div>

      </section>
      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">About <span className='text-cyan-600'>Me</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <center>
            Ananda Sheva Hidayat is a third-year Computer Science student at the University of Lampung, with a keen interest in software development and machine learning.
Known for being a hardworking and responsible individual, he has gained extensive organizational experience, showcasing his ability to organize and lead effectively.
He possesses intermediate programming skills and is adept at developing software and machine learning applications, utilizing various frameworks.
His diverse experiences include collaborating on both internal and external projects, maintaining freelance work, leading teams, and analyzing data.
            </center>
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <center className='pt-8'>
            Kindly hit the social media profile or reach out to sheva1257@gmail.com for inquiries or simply connecting!
            </center>
          </p>
        </div>
      </section>

{/* Experience Section */}
<section id="experience" className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-8">My <span className='text-cyan-600'>Experiences</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="flex flex-col transition-transform transform hover:scale-95">
          <div className="relative w-full h-0 pb-[56.25%]">
            <img
              src={exp.Image}
              alt={`${exp.title} image`}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-t-md"
            />
          </div>
          <CardHeader>
            <CardTitle>{exp.title}</CardTitle>
            <CardDescription>{exp.company} • {exp.period}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{exp.description}</p>
            <p className='text-black hover:text-blue-300'>{exp.Link}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* Projects Section */}
<section id='projects' className="bg-white py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-8">My <span className='text-cyan-600'>Projects</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card key={index} className="flex flex-col transition-transform transform hover:scale-95">
          <div className="relative w-full h-0 pb-[56.25%]">
            <img
              src={project.Image}
              alt={`${project.title} image`}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-t-md"
            />
          </div>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.tech}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-black hover:text-blue-300'>{project.Link}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Footer */}
<footer className="bg-gray-900 text-white py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center">
      <p className="text-gray-300">© 2024 Ananda Sheva Hidayat. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="https://github.com/AnandaSheva" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5 cursor-pointer hover:text-gray-300 transition-transform transform hover:scale-125" />
        </a>
        <a href="https://linkedin.com/in/anandashevahidayat" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5 cursor-pointer hover:text-gray-300 transition-transform transform hover:scale-125" />
        </a>
        <a href="https://instagram.com/shevaananda_" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-5 w-5 cursor-pointer hover:text-gray-300 transition-transform transform hover:scale-125" />
        </a>
        <a href="mailto:sheva1257@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail className="h-5 w-5 cursor-pointer hover:text-gray-300 transition-transform transform hover:scale-125" />
        </a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};
export default Portfolio;
