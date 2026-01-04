import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "LeafLive",
      description: "LeafLive is an AI-powered web platform designed to help farmers and agricultural professionals detect crop diseases early and accurately using leaf images. The system leverages computer vision and machine learning to analyze plant leaves and provide instant health insights, enabling timely treatment and improved crop productivity.",
      image: "public/assets/images/LeafLive.png",
      technologies: [ "HTML", "CSS", "Javascript", "React", "Next.js",  "APIs", "MongoDb"],
      liveUrl: "https://leaflive.netlify.app/",
      githubUrl: "https://github.com/tejasvirajsingh/Magic-oF-Code/tree/main/Hackathon",
      impact: {
        metric: "40%",
        description: "increase in conversion rate"
      },
      category: "Full-Stack",
      status: "Live"
    },
    {
      id: 2,
      title: "Portfolio",
      description: "Welcome to my personal portfolio website — a digital space that showcases my skills, projects, and journey as a passionate Computer Science student and aspiring software developer.",
      image: "public/assets/images/tej_pro.png",
      technologies: [ "Javascript",  "React.js",   "Node.js", ],
      liveUrl: "https://tejasvimax.vercel.app/",
      githubUrl: "https://github.com/tejasvirajsingh/Portfolio-React-js.",
      impact: {
        metric: "60%",
        description: "Reach"
      },
      category: "SaaS",
      status: "Live"
    }
    
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Projects
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Showcasing innovative Project Ideas..
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects?.map((project, index) => (
            <motion.div
              key={project?.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project?.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group interactive-card overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project?.status === 'Live' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
                  }`}>
                    {project?.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {project?.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    hoveredProject === project?.id 
                      ? { opacity: 1 } 
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
                >
                  <Button
                    variant="secondary"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                    className="bg-white/30 text-primary hover:bg-black"
                  >
                    Live Demo
                  </Button>
                 
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-200">
                    {project?.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Icon name="ExternalLink" size={16} className="text-text-secondary" />
                    <Icon name="Github" size={16} className="text-text-secondary" />
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed">
                  {project?.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-text-primary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact Metric */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-success" />
                    <span className="text-lg font-bold text-success">
                      {project?.impact?.metric}
                    </span>
                  </div>
                  <span className="text-sm text-text-secondary">
                    {project?.impact?.description}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;