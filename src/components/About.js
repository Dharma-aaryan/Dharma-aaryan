import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I'm a passionate developer and data enthusiast who loves creating beautiful, functional, and user-centered digital experiences. With a strong foundation in modern web technologies and data analysis, I bring ideas to life through clean code, thoughtful design, and data-driven insights.</p>
            
            <div className="skills">
              <div className="skill-category">
                <h3>Frontend Development</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Vue.js</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Sass</span>
                  <span className="skill-tag">Tailwind CSS</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>Backend & Database</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">Redis</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>Data Science & Analytics</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Pandas</span>
                  <span className="skill-tag">NumPy</span>
                  <span className="skill-tag">Matplotlib</span>
                  <span className="skill-tag">Seaborn</span>
                  <span className="skill-tag">Scikit-learn</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>Data Visualization</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Tableau</span>
                  <span className="skill-tag">Power BI</span>
                  <span className="skill-tag">D3.js</span>
                  <span className="skill-tag">Plotly</span>
                  <span className="skill-tag">Chart.js</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>Machine Learning</h3>
                <div className="skill-tags">
                  <span className="skill-tag">TensorFlow</span>
                  <span className="skill-tag">PyTorch</span>
                  <span className="skill-tag">Keras</span>
                  <span className="skill-tag">NLP</span>
                  <span className="skill-tag">Computer Vision</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>Cloud & DevOps</h3>
                <div className="skill-tags">
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Kubernetes</span>
                  <span className="skill-tag">CI/CD</span>
                  <span className="skill-tag">Git</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-sections">
            <div className="experience-section">
              <h3>Professional Experience</h3>
              <div className="experience-item">
                <div className="experience-header">
                  <h4>Senior Full Stack Developer</h4>
                  <span className="experience-company">TechCorp Solutions</span>
                  <span className="experience-date">2022 - Present</span>
                </div>
                <p>Led development of scalable web applications using React and Node.js. Implemented data visualization dashboards and real-time analytics features.</p>
              </div>
              
              <div className="experience-item">
                <div className="experience-header">
                  <h4>Data Analyst</h4>
                  <span className="experience-company">DataInsights Inc.</span>
                  <span className="experience-date">2020 - 2022</span>
                </div>
                <p>Analyzed large datasets using Python and SQL. Created interactive dashboards and reports for business stakeholders.</p>
              </div>
              
              <div className="experience-item">
                <div className="experience-header">
                  <h4>Frontend Developer</h4>
                  <span className="experience-company">WebStudio Pro</span>
                  <span className="experience-date">2019 - 2020</span>
                </div>
                <p>Developed responsive web applications and improved user experience through modern design principles.</p>
              </div>
            </div>
            
            <div className="education-section">
              <h3>Education</h3>
              <div className="education-item">
                <div className="education-header">
                  <h4>Master of Science in Data Science</h4>
                  <span className="education-school">Stanford University</span>
                  <span className="education-date">2018 - 2020</span>
                </div>
                <p>Specialized in machine learning, statistical analysis, and big data processing. Graduated with distinction.</p>
              </div>
              
              <div className="education-item">
                <div className="education-header">
                  <h4>Bachelor of Computer Science</h4>
                  <span className="education-school">MIT</span>
                  <span className="education-date">2014 - 2018</span>
                </div>
                <p>Focused on software engineering, algorithms, and database systems. Minor in Mathematics.</p>
              </div>
              
              <div className="education-item">
                <div className="education-header">
                  <h4>Certifications</h4>
                  <span className="education-school">Various Institutions</span>
                  <span className="education-date">Ongoing</span>
                </div>
                <p>AWS Certified Solutions Architect, Google Cloud Professional Data Engineer, Microsoft Azure Data Scientist Associate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;