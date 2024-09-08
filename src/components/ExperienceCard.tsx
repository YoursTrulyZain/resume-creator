import { ExperienceProperties } from "../types";

function ExperienceCard({experienceInfo, setExperienceInfo}: ExperienceProperties) {

    const handleSetInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const key = e.target.name; 
        setExperienceInfo({...experienceInfo, [key]: value});
    }

    return (
        <>
        <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        onChange={handleSetInfo}
        value={experienceInfo.companyName}>
        </input>
        <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        onChange={handleSetInfo}
        value={experienceInfo.jobTitle}>
        </input>
        <input
        type="text"
        name="jobDescription"
        placeholder="Job Description"
        onChange={handleSetInfo}
        value={experienceInfo.jobDescription}>
        </input>
        <input
        type="date"
        name="dateFrom"
        placeholder="Date from"
        onChange={handleSetInfo}
        value={experienceInfo.dateFrom}>
        </input>
        <input
        type="date"
        name="dateTo"
        placeholder="Date to"
        onChange={handleSetInfo}
        value={experienceInfo.dateTo}>
        </input>
        </>
    );
}

export default ExperienceCard;