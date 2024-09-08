export interface GeneralInfo {
    name: string, 
    email: string,
    phoneNumber: string
}

export interface GeneralProperties {
    generalInfo: GeneralInfo,
    setGeneralInfo: (generalInfo: GeneralInfo) => void;
}

export interface EducationInfo {
    schoolName: string,
    areaOfStudy: string,
    graduationDate: string
}

export interface EducationProperties {
    educationInfo: EducationInfo,
    setEducationInfo: (educationInfo: EducationInfo) => void;
}

export interface ExperienceInfo {
    companyName: string,
    jobTitle: string,
    jobDescription: string,
    dateFrom: string,
    dateTo: string
}

export interface ExperienceProperties {
    experienceInfo: ExperienceInfo,
    setExperienceInfo: (experienceInfo: ExperienceInfo) => void;
}