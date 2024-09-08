import { EducationProperties } from "../types";

function EducationCard({educationInfo, setEducationInfo}: EducationProperties) {

    const handleSetInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const key = e.target.name;
        setEducationInfo({...educationInfo, [key]: value});
    }

    return (
        <>
        <input
        type="text"
        name="schoolName"
        placeholder="School Name"
        onChange={handleSetInfo}
        value={educationInfo.schoolName}>
        </input>
        <input
        type="text"
        name="areaOfStudy"
        placeholder="Area of Study"
        onChange={handleSetInfo}
        value={educationInfo.areaOfStudy}>
        </input>
        <input
        type="date"
        name="graduationDate"
        placeholder="Graduation Date"
        onChange={handleSetInfo}
        value={educationInfo.graduationDate}>
        </input>
        </>
    );
}

export default EducationCard;