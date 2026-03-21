import { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { X, Plus } from 'lucide-react';

export default function Skills() {
  const { data, addSkill, removeSkill } = useResume();
  const { skills } = data;
  
  const [hardInput, setHardInput] = useState('');
  const [softInput, setSoftInput] = useState('');

  const handleAddHard = (e) => {
    e.preventDefault();
    addSkill('hard', hardInput);
    setHardInput('');
  };

  const handleAddSoft = (e) => {
    e.preventDefault();
    addSkill('soft', softInput);
    setSoftInput('');
  };

  return (
    <div className="step-container">
      <div className="step-header">
        <h2>Skills</h2>
        <p>Highlight your technical and interpersonal skills.</p>
      </div>

      <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
        
        {/* Hard Skills Section */}
        <div className="item-card fade-in">
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary)', fontSize: '1.2rem' }}>Hard Skills (Technical)</h3>
          
          <form onSubmit={handleAddHard} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <input 
              type="text" 
              placeholder="e.g. React, Python, AWS..."
              value={hardInput}
              onChange={(e) => setHardInput(e.target.value)}
              style={{ flex: 1 }}
            />
            <button type="submit" className="btn-secondary">
              <Plus size={18} /> Add
            </button>
          </form>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.hard.map((skill, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  backgroundColor: 'rgba(0, 255, 102, 0.1)', color: 'var(--primary)',
                  padding: '0.4rem 0.8rem', borderRadius: '100px', fontSize: '0.9rem', border: '1px solid rgba(0, 255, 102, 0.2)'
                }}
              >
                {skill}
                <X size={14} style={{ cursor: 'pointer' }} onClick={() => removeSkill('hard', index)} />
              </div>
            ))}
            {skills.hard.length === 0 && <span style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.9rem' }}>No hard skills added yet.</span>}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="item-card fade-in">
          <h3 style={{ marginBottom: '1rem', color: 'white', fontSize: '1.2rem' }}>Soft Skills (Interpersonal)</h3>
          
          <form onSubmit={handleAddSoft} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <input 
              type="text" 
              placeholder="e.g. Leadership, Communication..."
              value={softInput}
              onChange={(e) => setSoftInput(e.target.value)}
              style={{ flex: 1 }}
            />
            <button type="submit" className="btn-secondary">
              <Plus size={18} /> Add
            </button>
          </form>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.soft.map((skill, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  backgroundColor: 'var(--field-bg)', color: 'var(--text-main)',
                  padding: '0.4rem 0.8rem', borderRadius: '100px', fontSize: '0.9rem', border: '1px solid var(--border-color)'
                }}
              >
                {skill}
                <X size={14} style={{ cursor: 'pointer' }} onClick={() => removeSkill('soft', index)} />
              </div>
            ))}
            {skills.soft.length === 0 && <span style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.9rem' }}>No soft skills added yet.</span>}
          </div>
        </div>

      </div>
    </div>
  );
}
