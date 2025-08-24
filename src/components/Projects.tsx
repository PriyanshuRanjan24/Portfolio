import React from 'react';
import { ExternalLink, Github, Calendar, TrendingUp, Shield, BarChart3, Clock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Video Game Sales Prediction and Analysis",
      description: "Built ML models (Linear Regression, Decision Tree, k-NN) to predict global video game sales across 5 regions with RMSE of 2.5 and 85% accuracy.",
      technologies: ["Machine Learning", "R", "Data Analysis"],
      icon: TrendingUp,
      color: "blue",
      date: "Nov 2024",
      achievements: ["RMSE: 2.5", "85% Accuracy", "5 Regions Analysis"]
    },
    {
      id: 2,
      title: "SpamSense: Hybrid Filtering",
      description: "Developed hybrid BERT model with 95% accuracy in spam email detection. Integrated NER to improve precision by 10% and reduced false positives by 15%.",
      technologies: ["Python", "BERT", "NLP", "Machine Learning"],
      icon: Shield,
      color: "teal",
      date: "Sept 2024",
      achievements: ["95% Accuracy", "10% Precision Boost", "15% False Positive Reduction"]
    },
    {
      id: 3,
      title: "COVID-19 Data Analysis Dashboard",
      description: "Created interactive dashboard analyzing 1M+ COVID-19 records with intuitive data visualization for epidemiological insights.",
      technologies: ["Tableau", "Data Visualization", "Analytics"],
      icon: BarChart3,
      color: "purple",
      date: "Mar 2024",
      achievements: ["1M+ Records", "Interactive Dashboard", "Epidemiological Insights"]
    },
    {
      id: 4,
      title: "Task Scheduler",
      description: "Engineered web-based task scheduler handling 100+ tasks with color-coded, real-time tracking system improving task organization by 30%.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      icon: Clock,
      color: "green",
      date: "Jan 2024",
      achievements: ["100+ Tasks", "Real-time Tracking", "30% Improvement"]
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'from-blue-500 to-blue-600',
      text: 'text-blue-600',
      border: 'border-blue-200',
      hover: 'hover:border-blue-300'
    },
    teal: {
      bg: 'from-teal-500 to-teal-600',
      text: 'text-teal-600',
      border: 'border-teal-200',
      hover: 'hover:border-teal-300'
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      text: 'text-purple-600',
      border: 'border-purple-200',
      hover: 'hover:border-purple-300'
    },
    green: {
      bg: 'from-green-500 to-green-600',
      text: 'text-green-600',
      border: 'border-green-200',
      hover: 'hover:border-green-300'
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing my expertise in Machine Learning, Data Analysis, and Web Development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            const colors = colorClasses[project.color as keyof typeof colorClasses];
            
            return (
              <div
                key={project.id}
                className={`group bg-white rounded-2xl shadow-lg border-2 ${colors.border} ${colors.hover} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden`}
              >
                {/* Project Header */}
                <div className={`h-2 bg-gradient-to-r ${colors.bg}`}></div>
                
                <div className="p-8">
                  {/* Icon and Date */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className={`text-2xl font-bold mb-4 ${colors.text} group-hover:text-gray-800 transition-colors duration-300`}>
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Key Achievements</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.achievements.map((achievement, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium`}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 ${colors.text} bg-opacity-10 text-xs rounded-full font-medium border ${colors.border}`}
                          style={{ backgroundColor: `${project.color === 'blue' ? '#3B82F6' : project.color === 'teal' ? '#14B8A6' : project.color === 'purple' ? '#8B5CF6' : '#10B981'}10` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button className={`flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r ${colors.bg} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </button>
                    <button className={`px-6 py-3 border-2 ${colors.border} ${colors.text} rounded-lg font-medium hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105`}>
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Explore More Projects</h3>
            <p className="text-gray-600 mb-6">Check out my complete portfolio on GitHub</p>
            <a
              href="https://github.com/priyanshuranjan24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;