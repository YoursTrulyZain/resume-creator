import { useState } from 'react'
import './App.css'
import EducationCard from './components/EducationCard'
import ExperienceCard from './components/ExperienceCard'
import GeneralCard from './components/GeneralCard'

function App() {
  const [editMode, setEditMode] = useState(true);
  const [generalInfo, setGeneralInfo] = useState(
    {
      name: "", 
      email: "",
      phoneNumber: ""
    });
  const [educationInfo, setEducationInfo] = useState(
    {
      schoolName: "",
      areaOfStudy: "",
      graduationDate: ""
    });
  const [experienceInfo, setExperienceInfo] = useState(
    {
      companyName: "",
      jobTitle: "",
      jobDescription: "",
      dateFrom: "",
      dateTo: ""
    });

    const handleEditClick = () => {
      setEditMode(true);
    }

    const handleSubmitClick = () => {
      setEditMode(false);
    }

  return (
    <>
    {editMode ? 
    (
      <div style={{maxWidth: "fit-content", margin: "auto"}}>
        <h3>General Information</h3>

        <GeneralCard 
        generalInfo = {generalInfo} 
        setGeneralInfo={setGeneralInfo}>
        </GeneralCard>

        <h3>Educational Experience</h3>
        <EducationCard 
        educationInfo = {educationInfo}
        setEducationInfo = {setEducationInfo}>
        </EducationCard>
        
        <h3>Practical Experience</h3>
        <ExperienceCard 
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}>
        </ExperienceCard>

      </div>
    )
    :
    (
      <div>
        <h1>{generalInfo.name}</h1>
        <h1>{generalInfo.email}</h1>
        <h1>{generalInfo.phoneNumber}</h1>
        <h1>{educationInfo.schoolName}</h1>
        <h1>{educationInfo.areaOfStudy}</h1>
        <h1>{educationInfo.graduationDate}</h1>
        <h1>{experienceInfo.companyName}</h1>
        <h1>{experienceInfo.jobTitle}</h1>
        <h1>{experienceInfo.jobDescription}</h1>
        <h1>{experienceInfo.dateFrom}</h1>
        <h1>{experienceInfo.dateTo}</h1>
      </div>
    )}

    <button onClick={handleEditClick}>Edit</button> <button onClick={handleSubmitClick}>Submit</button>

    </>
  );
}

export default App

// {display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}


