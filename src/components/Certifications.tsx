import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning",
      issuer: "Stanford University",
      platform: "Coursera",
      category: "Machine Learning",
      color: "blue",
      verified: true
    },
    {
      title: "Introduction to Big Data",
      issuer: "UC San Diego",
      platform: "Coursera",
      category: "Data Science",
      color: "teal",
      verified: true
    },
    {
      title: "Data Visualization with Tableau",
      issuer: "Board Infinity",
      platform: "Coursera",
      category: "Data Visualization",
      color: "purple",
      verified: true
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      platform: "Coursera",
      category: "Networking",
      color: "green",
      verified: true
    },
    {
      title: "DSA Self Paced",
      issuer: "GeeksforGeeks",
      platform: "GeeksforGeeks",
      category: "Programming",
      color: "orange",
      verified: true
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'from-blue-500 to-blue-600',
      text: 'text-blue-600',
      light: 'bg-blue-50',
      border: 'border-blue-200'
    },
    teal: {
      bg: 'from-teal-500 to-teal-600',
      text: 'text-teal-600',
      light: 'bg-teal-50',
      border: 'border-teal-200'
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      text: 'text-purple-600',
      light: 'bg-purple-50',
      border: 'border-purple-200'
    },
    green: {
      bg: 'from-green-500 to-green-600',
      text: 'text-green-600',
      light: 'bg-green-50',
      border: 'border-green-200'
    },
    orange: {
      bg: 'from-orange-500 to-orange-600',
      text: 'text-orange-600',
      light: 'bg-orange-50',
      border: 'border-orange-200'
    }
  };

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional certifications from leading institutions and platforms
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const colors = colorClasses[cert.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg border-2 ${colors.border} hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden`}
              >
                {/* Header Accent */}
                <div className={`h-2 bg-gradient-to-r ${colors.bg}`}></div>
                
                <div className="p-6">
                  {/* Certificate Icon and Verified Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    {cert.verified && (
                      <div className="flex items-center text-green-600 text-xs font-medium">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Certificate Title */}
                  <h3 className={`text-xl font-bold mb-3 ${colors.text} group-hover:text-gray-800 transition-colors duration-300 line-clamp-2`}>
                    {cert.title}
                  </h3>

                  {/* Issuer Information */}
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-700 font-semibold text-sm">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 text-sm">
                      via {cert.platform}
                    </p>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-6">
                    <span className={`inline-block px-3 py-1 ${colors.light} ${colors.text} text-xs rounded-full font-medium border ${colors.border}`}>
                      {cert.category}
                    </span>
                  </div>

                  {/* Action Button */}
                  <button className={`w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r ${colors.bg} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform group-hover:scale-105`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-white">5+</span>
            </div>
            <p className="font-semibold text-gray-800">Certifications</p>
            <p className="text-gray-600 text-sm">Completed</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-white">4+</span>
            </div>
            <p className="font-semibold text-gray-800">Platforms</p>
            <p className="text-gray-600 text-sm">Learning Sources</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-white">5+</span>
            </div>
            <p className="font-semibold text-gray-800">Categories</p>
            <p className="text-gray-600 text-sm">Skill Areas</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <p className="font-semibold text-gray-800">All Verified</p>
            <p className="text-gray-600 text-sm">Authentic</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Continuous Learning</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I believe in continuous professional development and staying updated with the latest technologies and methodologies in the field.
            </p>
            <div className="flex justify-center space-x-4">
              <span className="px-6 py-3 bg-white text-gray-700 rounded-lg shadow-md font-medium">
                Currently Learning: Advanced ML
              </span>
              <span className="px-6 py-3 bg-white text-gray-700 rounded-lg shadow-md font-medium">
                Next: Cloud Computing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;