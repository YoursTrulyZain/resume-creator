import { useState } from 'react';
import './App.css';
import EducationCard from './components/EducationCard';
import ExperienceCard from './components/ExperienceCard';
import GeneralCard from './components/GeneralCard';
import SkillNode from './components/SkillNode';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {
  const [editMode, setEditMode] = useState(true);
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });
  const [educationInfoList, setEducationInfoList] = useState([
    { schoolName: '', areaOfStudy: '', graduationDate: '' },
  ]);
  const [experienceInfoList, setExperienceInfoList] = useState([
    { companyName: '', jobTitle: '', jobDescription: '', dateFrom: '', dateTo: '' },
  ]);
  const [skills, setSkills] = useState<string[]>([]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSubmitClick = () => {
    setEditMode(false);
  };

  const addEducationBlock = () => {
    setEducationInfoList([
      ...educationInfoList,
      { schoolName: '', areaOfStudy: '', graduationDate: '' },
    ]);
  };

  const deleteEducationBlock = (index: number) => {
    setEducationInfoList(educationInfoList.filter((_, i) => i !== index));
  };

  const addExperienceBlock = () => {
    setExperienceInfoList([
      ...experienceInfoList,
      { companyName: '', jobTitle: '', jobDescription: '', dateFrom: '', dateTo: '' },
    ]);
  };

  const deleteExperienceBlock = (index: number) => {
    setExperienceInfoList(experienceInfoList.filter((_, i) => i !== index));
  };

  const addSkill = (skill: string) => {
    if (skill.trim() !== '') {
      setSkills([...skills, skill]);
    }
  };

  const deleteSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleDownloadPDF = async () => {
    const resumeElement = document.querySelector('.resume') as HTMLElement;
    if (!resumeElement) return;

    const canvas = await html2canvas(resumeElement, {
      scale: 2, // Increase resolution for better quality
      useCORS: true, // Handle cross-origin issues if any
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
  };

  return (
    <div className="container">
      {editMode ? (
        <>
          <div className="section">
            <h3>General Information</h3>
            <div className="card">
              <GeneralCard generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
            </div>
          </div>

          <div className="section">
            <h3>Educational Experience</h3>
            {educationInfoList.map((educationInfo, index) => (
              <div className="card" key={index}>
                <EducationCard
                  educationInfo={educationInfo}
                  setEducationInfo={(updatedInfo) =>
                    setEducationInfoList(
                      educationInfoList.map((info, i) =>
                        i === index ? updatedInfo : info
                      )
                    )
                  }
                />
                <button onClick={() => deleteEducationBlock(index)}>Delete</button>
              </div>
            ))}
            <button onClick={addEducationBlock}>Add Education</button>
          </div>

          <div className="section">
            <h3>Practical Experience</h3>
            {experienceInfoList.map((experienceInfo, index) => (
              <div className="card" key={index}>
                <ExperienceCard
                  experienceInfo={experienceInfo}
                  setExperienceInfo={(updatedInfo) =>
                    setExperienceInfoList(
                      experienceInfoList.map((info, i) =>
                        i === index ? updatedInfo : info
                      )
                    )
                  }
                />
                <button onClick={() => deleteExperienceBlock(index)}>Delete</button>
              </div>
            ))}
            <button onClick={addExperienceBlock}>Add Experience</button>
          </div>

          <div className="section">
            <h3>Skills</h3>
            <div className="card">
              <div className="skill-input">
                <input
                  type="text"
                  placeholder="Enter a skill"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      addSkill(e.currentTarget.value);
                      e.currentTarget.value = '';
                    }
                  }}
                />
              </div>
              <div className="skill-list">
                {skills.map((skill, index) => (
                  <SkillNode
                    key={index}
                    skill={skill}
                    onDelete={() => deleteSkill(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="resume">
          <header className="resume-header">
            <h1>{generalInfo.name}</h1>
            <p>
              {generalInfo.email} | {generalInfo.phoneNumber}
            </p>
          </header>

          <section className="resume-section">
            <h2>Education</h2>
            {educationInfoList.map((educationInfo, index) => (
              <div className="resume-item" key={index}>
                <h3>{educationInfo.schoolName}</h3>
                <p>
                  <strong>Area of Study:</strong> {educationInfo.areaOfStudy}
                </p>
                <p>
                  <strong>Graduation Date:</strong> {educationInfo.graduationDate}
                </p>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h2>Experience</h2>
            {experienceInfoList.map((experienceInfo, index) => (
              <div className="resume-item" key={index}>
                <h3>{experienceInfo.companyName}</h3>
                <p>
                  <strong>Job Title:</strong> {experienceInfo.jobTitle}
                </p>
                <p>
                  <strong>Description:</strong> {experienceInfo.jobDescription}
                </p>
                <p>
                  <strong>Dates:</strong> {experienceInfo.dateFrom} - {experienceInfo.dateTo}
                </p>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h2>Skills</h2>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        </div>
      )}

      <div style={{ textAlign: 'center' }}>
        {editMode ? (
          <button onClick={handleSubmitClick}>Submit</button>
        ) : (
          <>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDownloadPDF}>Download PDF</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;


