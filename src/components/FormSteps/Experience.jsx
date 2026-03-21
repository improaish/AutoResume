import { useResume } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

export default function Experience() {
  const { data, addExperience, updateExperience, removeExperience } = useResume();
  const { experience } = data;

  return (
    <div className="step-container">
      <div className="step-header">
        <h2>Work Experience</h2>
        <p>List your relevant work experience, starting with the most recent.</p>
      </div>

      {experience.map((exp, index) => (
        <div key={exp.id} className="item-card fade-in">
          <div className="item-actions">
            <button className="btn-icon danger" onClick={() => removeExperience(exp.id)} title="Remove">
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="form-grid">
            <div className="form-group">
              <label>Job Title / Role</label>
              <input 
                type="text" 
                placeholder="Software Engineer"
                value={exp.role}
                onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input 
                type="text" 
                placeholder="Tech Corp Inc."
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Start Date</label>
              <input 
                type="text" 
                placeholder="Jan 2020"
                value={exp.startYear}
                onChange={(e) => updateExperience(exp.id, 'startYear', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>End Date (or Present)</label>
              <input 
                type="text" 
                placeholder="Present"
                value={exp.endYear}
                onChange={(e) => updateExperience(exp.id, 'endYear', e.target.value)}
              />
            </div>
            <div className="form-group full-width">
              <label>Description & Achievements</label>
              <textarea 
                placeholder="• Developed new features...&#10;• Orchestrated cloud deployment...&#10;• Mentored junior developers..."
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <button className="btn-secondary" onClick={addExperience} style={{ marginTop: '1rem' }}>
        <Plus size={18} /> Add Experience
      </button>
    </div>
  );
}
