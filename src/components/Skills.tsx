import React from 'react';
import { Code2, Database, Globe, BarChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code2,
      color: "blue",
      skills: [
        { name: "Python", level: 90 },
        { name: "C/C++", level: 85 },
        { name: "R", level: 80 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      category: "Web Technologies",
      icon: Globe,
      color: "teal",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 70 },
        { name: "Node.js", level: 65 }
      ]
    },
    {
      category: "Data & Analytics",
      icon: BarChart,
      color: "purple",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "Data Visualization", level: 85 },
        { name: "Statistical Analysis", level: 75 }
      ]
    },
    {
      category: "Tools & Concepts",
      icon: Database,
      color: "green",
      skills: [
        { name: "Git/GitHub", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "DBMS", level: 75 },
        { name: "DSA", level: 70 }
      ]
    }
  ];

  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "Priyanshu_Ranjan10",
      color: "orange",
      stats: "Problem Solver"
    },
    {
      platform: "HackerRank",
      username: "sharmapriyansh13",
      color: "green",
      stats: "Coding Enthusiast"
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'from-blue-500 to-blue-600',
      progress: 'bg-blue-500',
      text: 'text-blue-600',
      light: 'bg-blue-50'
    },
    teal: {
      bg: 'from-teal-500 to-teal-600',
      progress: 'bg-teal-500',
      text: 'text-teal-600',
      light: 'bg-teal-50'
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      progress: 'bg-purple-500',
      text: 'text-purple-600',
      light: 'bg-purple-50'
    },
    green: {
      bg: 'from-green-500 to-green-600',
      progress: 'bg-green-500',
      text: 'text-green-600',
      light: 'bg-green-50'
    },
    orange: {
      bg: 'from-orange-500 to-orange-600',
      progress: 'bg-orange-500',
      text: 'text-orange-600',
      light: 'bg-orange-50'
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set spanning multiple domains of technology
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            
            return (
              <div
                key={categoryIndex}
                className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                        <span className={`text-sm font-medium ${colors.text}`}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full ${colors.progress} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Coding Profiles */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Coding Profiles</h3>
            <p className="text-gray-600">Active on competitive programming platforms</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {codingProfiles.map((profile, index) => {
              const colors = colorClasses[profile.color as keyof typeof colorClasses];
              
              return (
                <div
                  key={index}
                  className={`${colors.light} rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-gray-200`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-xl">
                      {profile.platform.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{profile.platform}</h4>
                  <p className={`font-medium ${colors.text} mb-2`}>@{profile.username}</p>
                  <p className="text-gray-600 text-sm">{profile.stats}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Concepts */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Core Concepts</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Data Structures & Algorithms', 'Database Management', 'Object-Oriented Programming', 'Machine Learning', 'Web Development', 'Statistical Analysis'].map((concept, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-medium transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;