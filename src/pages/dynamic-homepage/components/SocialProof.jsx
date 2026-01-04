import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [githubStats, setGithubStats] = useState({
    contributions: 0,
    repositories: 0,
    followers: 0
  });

  const testimonials = [
    {
      id: 1,
      name: "Tejasvi Raj Singh",
      role: "Student",
      company: "Parul University",
      avatar: "public/assets/images/max.jpg",
      content: <b>Mr Max</b>,
      rating: 3,
      project: "Software Developer"
    },
   
  ];

  const achievements = [
   
  ];

  // Simulate GitHub stats animation
  useEffect(() => {
    const animateStats = () => {
      const targets = { contributions: 472, repositories: 16, followers: 3 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setGithubStats({
          contributions: Math.floor(targets?.contributions * progress),
          repositories: Math.floor(targets?.repositories * progress),
          followers: Math.floor(targets?.followers * progress)
        });

        if (step >= steps) {
          clearInterval(interval);
          setGithubStats(targets);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

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
            GitHub 
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            My last commit was today .
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* GitHub Activity & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* GitHub Stats */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-brand">
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Github" size={24} className="text-primary" />
                <h3 className="text-xl font-semibold text-primary">
                  Activity
                </h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm text-success">Active</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {githubStats?.contributions}
                  </div>
                  <div className="text-sm text-text-secondary">
                    Contributions
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {githubStats?.repositories}
                  </div>
                  <div className="text-sm text-text-secondary">
                    Repositories
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {githubStats?.followers}
                  </div>
                  <div className="text-sm text-text-secondary">
                    Year
                  </div>
                </div>
              </div>

              {/* Contribution Graph Simulation */}
              <div className="space-y-2">
                <div className="text-sm text-text-secondary mb-2">
                  Recent contributions
                </div>
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 84 }, (_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.01, duration: 0.2 }}
                      className={`w-3 h-3 rounded-sm ${
                        Math.random() > 0.7 
                          ? 'bg-success' 
                          : Math.random() > 0.4 
                          ? 'bg-success/60' :'bg-border'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements?.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-4 text-center hover-lift"
                >
                  <Icon 
                    name={achievement?.icon} 
                    size={24} 
                    className={`mx-auto mb-2 ${achievement?.color}`}
                  />
                  <h4 className="font-semibold text-primary text-sm mb-1">
                    {achievement?.title}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {achievement?.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Client Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Current Availability */}
            <div className="bg-success/10 border border-success/20 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <div>
                  <div className="font-medium text-success">
                    
                   <a href="https://github.com/tejasvirajsingh" target="_blank">
                        GitHub Profile
                        </a>





                  </div>
                 
                </div>
              </div>
            </div>

            {/* Testimonial Carousel */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-brand">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonials?.[currentTestimonial]?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-text-primary leading-relaxed">
                  "{testimonials?.[currentTestimonial]?.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonials?.[currentTestimonial]?.avatar}
                    alt={testimonials?.[currentTestimonial]?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonials?.[currentTestimonial]?.name}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {testimonials?.[currentTestimonial]?.role}
                    </div>
                    <div className="text-xs text-accent">
                      {testimonials?.[currentTestimonial]?.company}
                    </div>
                  </div>
                </div>

                {/* Project Tag */}
                <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                  <Icon name="Briefcase" size={14} />
                  <span>{testimonials?.[currentTestimonial]?.project}</span>
                </div>
              </motion.div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentTestimonial 
                        ? 'bg-accent w-6' :'bg-border hover:bg-accent/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;