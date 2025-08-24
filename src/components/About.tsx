import { Calendar, GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a passionate Computer Science Engineer with a strong foundation in 
              <span className="font-semibold text-blue-600"> Machine Learning</span>, 
              <span className="font-semibold text-blue-600"> Data Analysis</span>, and 
              <span className="font-semibold text-blue-600"> Web Development</span>. 
              My journey in technology has been driven by curiosity and the desire to solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With experience in building ML models, creating interactive dashboards, and developing 
              web applications, I bring a unique blend of analytical thinking and technical skills. 
              I'm particularly interested in leveraging data science and machine learning to create 
              innovative solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Education</h3>
                  <p className="text-gray-600 text-sm">B.Tech CSE from LPU</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Experience</h3>
                  <p className="text-gray-600 text-sm">Fresh Graduate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">7.27</h3>
              <p className="text-gray-600 font-medium">CGPA</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4+</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">4+</h3>
              <p className="text-gray-600 font-medium">Projects</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">5+</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">5+</h3>
              <p className="text-gray-600 font-medium">Certifications</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">8+</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">8+</h3>
              <p className="text-gray-600 font-medium">Technologies</p>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Education Journey</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-xl font-semibold text-gray-800">B.Tech Computer Science & Engineering</h4>
                <span className="text-blue-600 font-medium">Aug 2021 – 2025</span>
              </div>
              <p className="text-gray-600 mb-1">Lovely Professional University, Punjab</p>
              <p className="text-gray-700 font-medium">CGPA: 7.27</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-teal-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-xl font-semibold text-gray-800">12th Standard</h4>
                <span className="text-teal-600 font-medium">2020 – 2021</span>
              </div>
              <p className="text-gray-600 mb-1">Harivansh Uchh Vidyalay, Patna</p>
              <p className="text-gray-700 font-medium">Percentage: 73.4%</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-xl font-semibold text-gray-800">10th Standard</h4>
                <span className="text-green-600 font-medium">2017 – 2018</span>
              </div>
              <p className="text-gray-600 mb-1">DAV WALMI, Patna</p>
              <p className="text-gray-700 font-medium">Percentage: 80.4%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;