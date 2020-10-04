import React from 'react';
import './App.css';
import Background from './image/UCSB.jpg';


var sectionStyle = {
  backgroundImage: `url(${Background})`
};

function App() {
  return (
    <div className="body">
        <div className="header" id="header"> 
          <div className="head">
            <a href="http://www.ucsb.edu">University of California, Santa Barbara</a>
          </div>
        </div>
        <div className="pstat_header">
          <div className="logo">
                <a href="/">
                  <img class="site-logo" src="https://www.pstat.ucsb.edu/sites/default/themes/at_lsit/images/department/pstat-banner-navy.svg" alt="Department of Statistics and Applied Probability - UC Santa Barbara"/>
                </a>            
          </div>
        </div>
        <div className="menu">
          
            <li><a href="" style={{fontSize:22 + 'px'}}>About</a></li>
            <li><a href="" style={{fontSize:22 + 'px'}}>Undergraduate</a></li>
            <li><a href="" style={{fontSize:22 + 'px'}}>Graduate</a></li>
            <li><a href="" style={{fontSize:22 + 'px'}}>Course</a></li>
            <li><a href="" style={{fontSize:22 + 'px'}}>Resources</a></li>
            <li><a href="" style={{fontSize:22 + 'px'}}>People</a></li>
            <li><a href="" style={{fontSize:22 + 'px'}}>News and Events</a></li>
            <li><a href="" style={{fontSize:22 + 'px'}}>Employment</a></li>
            <li><a href="" style={{fontSize:22 + 'px'}}>Forms</a></li>
            <li><a href="" style={{fontSize:22 + 'px'}}>Giveing</a></li>
            <div class="clear"></div>
         </div>
      <div className="pic" style={sectionStyle}>
        <div className="head_content">
          <h2>
              Available Programs
          </h2>
          <p>
            The department of Statistics and Applied Probability offers three graduate degrees graduate guide book
          </p>
          <ul>
              <li>
                  The 
                  <a href="https://www.pstat.ucsb.edu/graduate/phd" target="_blank">
                      PhD in Statistics and Applied Probability
                  </a>
                  , with available emphases in Bioengineering, Quantitative Methods for the Social Sciences, and Financial Mathematics and Statistics;
              </li>
              <li>
                  The 
                  <a href="https://www.pstat.ucsb.edu/graduate/ma" target="_blank">
                      MA in Statistics
                  </a>
                  , with available concentrations in Applied Statistics, Data Science and Mathematical Statistics; and
              </li>
              <li>
                  The combined 
                  <a href="https://www.pstat.ucsb.edu/undergrad/actuarial-science/bs-ms">
                      5-year BS/MS degree in Actuarial Science
                  </a>
                  , only available to UCSB undergraduates in the Actuarial major.
              </li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
      <div className="lower_body">
        <div className="left_col">
          <div className="Gra_menu">
            <h1>
              Graduate menu
            </h1>
            <div>
              <h2>
                Prospective Students
              </h2>
              <h2>
                Area Requirements
              </h2>
              <h2>
              PhD Program
              </h2>
              <h2>
              MA Program
              </h2>
              <h2>
              BS/MS in Actuarial Science
              </h2>
              <h2>
              Current Students
              </h2>
              <h3>
              Alumni
              </h3>
            </div>
            
          </div>
          <div className="links">
            <h1>
              Quick Links
            </h1>
            <li>
              <a>
                PSTAT Graduate Student Handbook
              </a>
            </li>
            <li>
              <a>
                OISS
              </a>
            </li>
            <li>
              <a>
                Graduate Division Registor
              </a>
              </li>
            <li>
              <a>
                Academic Calender
              </a>
            </li>
            <h1>
                Contact us!
            </h1>
            <div>
                Department of Statistics and Applied Probability
            </div>
            <div>
                South Hall 5607
            </div>
            <p>
                Hours: Mon-Fri 9:00am-12:00pm, 1:00pm-4:00pm
            </p>
            <p>
                Tel: 805-893-2129
            </p>
            <p>
                <a href="mailto:gradinfo@pstat.ucsb.edu">
                    Email
                </a>
            </p>
          </div>
        </div>
        <div className="right_col">
          <h2>
              Area Requirements
          </h2>
          <p>
              In order to ensure breadth in the course of study, the Department of Statistics and Applied Probability has set up area requirements in the disciplines of applied statistics, data science, mathematical statistics, and probability. Students may also choose to satisfy a pure mathematics area requirement offered by the 
              <a href="http://www.math.ucsb.edu/">
                  Department of Mathematics
              </a>
              . The area requirements vary for each degree, concentration, and emphasis. Each area requirement consists of two parts:
          </p>
          <ol>
          <li>
              Completion of the designated one-year graduate sequence with a minimum grade of "B" or better in each class
          </li>
          <li>
              A qualifying examination on both undergraduate and graduate material. The qualifying examination is offered once a year, generally in Spring or Summer. Each student has up to two attempts for each qualifying exam, and must pass the requisite number of exams within three years of joining the department.
          </li>
          </ol>
          <p>
              <a href="https://www.pstat.ucsb.edu/graduate/area-requirements">
                  <em>
                      More on area requirements...
                  </em>
              </a>
          </p>
          <h2>
              Research Areas
          </h2>
          <p>
              The department has a very diverse faculty with a wide-range of interests. Current research areas include Theoretical Statistics and Statistical Methodology, Computational Statistics, Probability, Financial Mathematics, Environmental Statistics, and Biostatistics.&nbsp;The department is also host to the Center for Financial Mathematics and Actuarial Research, which offers further research opportunity in both academics and industry.
          </p>
          <p>
              <a href="https://www.pstat.ucsb.edu/about/research">
                  <em>
                      More on research areas...
                  </em>
              </a>
          </p>
          <h2>
              Admissions
          </h2>
          <p>
              The graduate program is open to students who have a Bachelor’s Degree in Mathematics, Statistics, or other closely related fields, with an overall minimum GPA of 3.0 or equivelant. All applicants need to take the Graduate Record Examination (GRE). Applicants from non-English speaking countries must also take the TOEFL or IELTS exam.
          </p>
          <p>
              <a href="/graduate/prospective">
                  <em>
                      More on admissions...
                  </em>
              </a>
          </p>
          <h2>
              Funding
          </h2>
          <p>
              Teaching assistantships are the primary source of funding for graduate students within the Department of Statistics and Applied Probability. As graduate students progress in their studies, research assistantships also become available. Fellowships and scholarships are available to new applicants. All applicants who submit the application by January 1st will automatically be considered for funding. Very few merit-based fellowships are considered for contuing students that have shown great promise within the department; students must be nominated for consideration for such fellowships by the faculty.
          </p>
          <p>
              <em>
                  <a href="/graduate/current/financial">
                      More on funding...
                  </a>
              </em>
          </p>
        </div>
      </div>


    </div>
  );
}

export default App;
