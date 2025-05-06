interface SkillNodeProps {
  skill: string;
  onDelete: () => void;
}

function SkillNode({ skill, onDelete }: SkillNodeProps) {
  return (
    <div className="skill-node">
      <span>{skill}</span>
      <button onClick={onDelete} className="delete-skill">
        &times;
      </button>
    </div>
  );
}

export default SkillNode;