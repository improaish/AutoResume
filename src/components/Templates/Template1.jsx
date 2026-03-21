import { useResume } from '../../context/ResumeContext';

export default function Template1() {
  const { data } = useResume();
  const { personalInfo, education, experience, skills, projects } = data;

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '40px', color: '#333', height: '100%', boxSizing: 'border-box' }}>
      {/* Header */}
      <div style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '20px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '32px', margin: '0 0 5px 0', color: '#111' }}>{personalInfo.fullName || 'Your Name'}</h1>
        <div style={{ display: 'flex', gap: '15px', fontSize: '12px', color: '#555', flexWrap: 'wrap' }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
          {personalInfo.linkedin && <span>• {personalInfo.linkedin}</span>}
          {personalInfo.portfolio && <span>• {personalInfo.portfolio}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#444' }}>{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '16px', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #eee', paddingBottom: '5px', marginBottom: '15px' }}>Experience</h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                <strong style={{ fontSize: '14px', color: '#111' }}>{exp.role}</strong>
                <span style={{ fontSize: '12px', color: '#666' }}>{exp.startYear} - {exp.endYear || 'Present'}</span>
              </div>
              <div style={{ fontSize: '13px', fontStyle: 'italic', color: '#555', marginBottom: '5px' }}>{exp.company}</div>
              {exp.description && (
                <div style={{ fontSize: '12px', color: '#444', whiteSpace: 'pre-line', lineHeight: '1.5' }}>
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '16px', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #eee', paddingBottom: '5px', marginBottom: '15px' }}>Education</h2>
          {education.map(edu => (
            <div key={edu.id} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: '13px', color: '#111' }}>{edu.institution}</strong>
                <span style={{ fontSize: '12px', color: '#666' }}>{edu.startYear} - {edu.endYear}</span>
              </div>
              <div style={{ fontSize: '13px', color: '#444' }}>{edu.degree} {edu.score ? `• ${edu.score}` : ''}</div>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '16px', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #eee', paddingBottom: '5px', marginBottom: '15px' }}>Projects</h2>
          {projects.map(proj => (
            <div key={proj.id} style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '13px', fontWeight: 'bold' }}>{proj.title} {proj.link && <span style={{ fontWeight: 'normal', color: '#666' }}>({proj.link})</span>}</div>
              <div style={{ fontSize: '12px', color: '#555', marginBottom: '3px' }}>{proj.description}</div>
              <div style={{ fontSize: '12px', color: '#444', whiteSpace: 'pre-line' }}>{proj.achievements}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {(skills.hard.length > 0 || skills.soft.length > 0) && (
        <div>
          <h2 style={{ fontSize: '16px', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #eee', paddingBottom: '5px', marginBottom: '10px' }}>Skills</h2>
          <div style={{ fontSize: '13px', lineHeight: '1.6' }}>
            {skills.hard.length > 0 && <div><strong>Technical:</strong> {skills.hard.join(', ')}</div>}
            {skills.soft.length > 0 && <div><strong>Interpersonal:</strong> {skills.soft.join(', ')}</div>}
          </div>
        </div>
      )}
    </div>
  );
}
