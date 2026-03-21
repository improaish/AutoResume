import { useResume } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

export default function Projects() {
  const { data, addProject, updateProject, removeProject } = useResume();
  const { projects } = data;

  return (
    <div className="step-container">
      <div className="step-header">
        <h2>Projects & Achievements</h2>
        <p>Showcase your key projects, publications, or major awards.</p>
      </div>

      {projects.map((proj) => (
        <div key={proj.id} className="item-card fade-in">
          <div className="item-actions">
            <button className="btn-icon danger" onClick={() => removeProject(proj.id)} title="Remove">
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="form-grid">
            <div className="form-group">
              <label>Project / Award Title</label>
              <input 
                type="text" 
                placeholder="E-commerce Application"
                value={proj.title}
                onChange={(e) => updateProject(proj.id, 'title', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Link (Optional)</label>
              <input 
                type="url" 
                placeholder="github.com/johndoe/project"
                value={proj.link}
                onChange={(e) => updateProject(proj.id, 'link', e.target.value)}
              />
            </div>
            <div className="form-group full-width">
              <label>Short Description</label>
              <input 
                type="text" 
                placeholder="A full-stack app handling 1k+ daily users"
                value={proj.description}
                onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
              />
            </div>
            <div className="form-group full-width">
              <label>Key Features / Achievements</label>
              <textarea 
                placeholder="• Implemented Redis caching...&#10;• Won 1st place in Hackathon..."
                value={proj.achievements}
                onChange={(e) => updateProject(proj.id, 'achievements', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <button className="btn-secondary" onClick={addProject} style={{ marginTop: '1rem' }}>
        <Plus size={18} /> Add Project/Achievement
      </button>
    </div>
  );
}
