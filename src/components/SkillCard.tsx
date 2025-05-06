import React from 'react';

interface SkillCardProps {
  skill: string;
  setSkill: (updatedSkill: string) => void;
}

function SkillCard({ skill, setSkill }: SkillCardProps) {
  const handleSetSkill = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(e.target.value);
  };

  return (
    <input
      type="text"
      name="skill"
      placeholder="Skill"
      onChange={handleSetSkill}
      value={skill}
    />
  );
}

export default SkillCard;