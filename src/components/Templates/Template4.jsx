import { useResume } from '../../context/ResumeContext';

export default function Template4() {
  const { data } = useResume();
  const { personalInfo, education, experience, skills, projects } = data;

  return (
    <div style={{ fontFamily: '"Times New Roman", Times, serif', padding: '40px 50px', color: '#000', height: '100%', boxSizing: 'border-box', backgroundColor: '#fff' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '25px' }}>
        <h1 style={{ fontSize: '32px', textTransform: 'uppercase', letterSpacing: '2px', borderBottom: '2px solid #000', paddingBottom: '10px', margin: '0 0 10px 0' }}>
          {personalInfo.fullName || 'First Last'}
        </h1>
        <div style={{ fontSize: '13px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.email && <span>• {personalInfo.email}</span>}
          {personalInfo.linkedin && <span>• {personalInfo.linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', textAlign: 'center', letterSpacing: '1px', borderBottom: '1px solid #000', margin: '0 0 10px 0' }}>Professional Summary</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.5', textAlign: 'justify', margin: 0 }}>
            {personalInfo.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', textAlign: 'center', letterSpacing: '1px', borderBottom: '1px solid #000', margin: '0 0 10px 0' }}>Professional Experience</h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '14px' }}>
                <span>{exp.company}</span>
                <span>{exp.location}</span>
                <span>{exp.startYear} – {exp.endYear || 'Present'}</span>
              </div>
              <div style={{ fontStyle: 'italic', fontSize: '14px', marginBottom: '5px' }}>{exp.role}</div>
              {exp.description && (
                <div style={{ fontSize: '13px', lineHeight: '1.5', whiteSpace: 'pre-line' }}>
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Projects & Achievements */}
      {projects.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', textAlign: 'center', letterSpacing: '1px', borderBottom: '1px solid #000', margin: '0 0 10px 0' }}>Key Projects & Achievements</h2>
          {projects.map(proj => (
            <div key={proj.id} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <strong>{proj.title}</strong>
              </div>
              {proj.description && <div style={{ fontSize: '13px', fontStyle: 'italic', marginBottom: '3px' }}>{proj.description}</div>}
              {proj.achievements && <div style={{ fontSize: '13px', lineHeight: '1.5', whiteSpace: 'pre-line' }}>{proj.achievements}</div>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', textAlign: 'center', letterSpacing: '1px', borderBottom: '1px solid #000', margin: '0 0 10px 0' }}>Education</h2>
          {education.map(edu => (
            <div key={edu.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '5px' }}>
              <div>
                <strong>{edu.institution}</strong> — {edu.degree} {edu.score ? `(${edu.score})` : ''}
              </div>
              <div style={{ fontStyle: 'italic' }}>
                {edu.startYear} – {edu.endYear}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {(skills.hard.length > 0 || skills.soft.length > 0) && (
        <div>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', textAlign: 'center', letterSpacing: '1px', borderBottom: '1px solid #000', margin: '0 0 10px 0' }}>Additional Skills</h2>
          <div style={{ fontSize: '13px', textAlign: 'center', lineHeight: '1.6' }}>
             {skills.hard.length > 0 && <div><strong>Technical:</strong> {skills.hard.join(', ')}</div>}
             {skills.soft.length > 0 && <div><strong>Interpersonal:</strong> {skills.soft.join(', ')}</div>}
          </div>
        </div>
      )}

    </div>
  );
}
