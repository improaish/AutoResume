import { useResume } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

export default function Education() {
  const { data, addEducation, updateEducation, removeEducation } = useResume();
  const { education } = data;

  return (
    <div className="step-container">
      <div className="step-header">
        <h2>Education</h2>
        <p>Add your schooling and higher education details.</p>
      </div>

      {education.map((edu, index) => (
        <div key={edu.id} className="item-card fade-in">
          <div className="item-actions">
            <button className="btn-icon danger" onClick={() => removeEducation(edu.id)} title="Remove">
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="form-grid">
            <div className="form-group">
              <label>Education Type</label>
              <select 
                value={edu.type} 
                onChange={(e) => updateEducation(edu.id, 'type', e.target.value)}
              >
                <option value="High School">High School</option>
                <option value="College / University">College / University</option>
                <option value="Bootcamp / Certificate">Bootcamp / Certificate</option>
              </select>
            </div>
            <div className="form-group">
              <label>Institution Name</label>
              <input 
                type="text" 
                placeholder="University of Examples"
                value={edu.institution}
                onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Degree / Field of Study</label>
              <input 
                type="text" 
                placeholder="B.S. in Computer Science"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Grade / Score</label>
              <input 
                type="text" 
                placeholder="3.8 GPA"
                value={edu.score}
                onChange={(e) => updateEducation(edu.id, 'score', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Start Year</label>
              <input 
                type="text" 
                placeholder="2018"
                value={edu.startYear}
                onChange={(e) => updateEducation(edu.id, 'startYear', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>End Year (or Expected)</label>
              <input 
                type="text" 
                placeholder="2022"
                value={edu.endYear}
                onChange={(e) => updateEducation(edu.id, 'endYear', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <button className="btn-secondary" onClick={() => addEducation('College / University')}>
          <Plus size={18} /> Add College/University
        </button>
        <button className="btn-secondary" onClick={() => addEducation('High School')}>
          <Plus size={18} /> Add High School
        </button>
      </div>
    </div>
  );
}
