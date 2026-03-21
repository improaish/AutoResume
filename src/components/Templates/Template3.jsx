import { useResume } from '../../context/ResumeContext';

export default function Template3() {
  const { data } = useResume();
  const { personalInfo, education, experience, skills, projects } = data;

  return (
    <div style={{ fontFamily: '"Roboto Mono", monospace, sans-serif', padding: '40px', color: '#2d3748', height: '100%', boxSizing: 'border-box', backgroundColor: '#fff' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '900', letterSpacing: '-1px', color: '#1a202c', margin: '0 0 10px 0' }}>
          {personalInfo.fullName || 'YOUR NAME'}
        </h1>
        <div style={{ fontSize: '13px', display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', color: 'var(--primary)', fontWeight: 'bold' }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </div>

      <div style={{ height: '4px', backgroundColor: '#1a202c', marginBottom: '25px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: '20%', width: '15%', height: '100%', backgroundColor: 'var(--primary)' }}></div>
      </div>

      {personalInfo.summary && (
        <div style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '30px', fontWeight: '500', color: '#4a5568' }}>
          {personalInfo.summary}
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '18px', backgroundColor: '#1a202c', color: 'white', display: 'inline-block', padding: '4px 12px', marginBottom: '15px' }}>
            &gt; EXPERIENCES
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ marginBottom: '20px', paddingLeft: '15px', borderLeft: '2px solid var(--primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ fontSize: '16px', color: '#1a202c' }}>{exp.role} @ {exp.company}</strong>
                <span style={{ fontSize: '12px', fontFamily: 'sans-serif', backgroundColor: '#edf2f7', padding: '2px 8px', borderRadius: '4px' }}>
                  {exp.startYear} - {exp.endYear || 'Present'}
                </span>
              </div>
              {exp.description && (
                <div style={{ fontSize: '13px', marginTop: '8px', lineHeight: '1.6', color: '#4a5568', whiteSpace: 'pre-line' }}>
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills Grid */}
      {(skills.hard.length > 0 || skills.soft.length > 0) && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '18px', backgroundColor: '#1a202c', color: 'white', display: 'inline-block', padding: '4px 12px', marginBottom: '15px' }}>
            &gt; SKILLS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {skills.hard.length > 0 && (
              <div>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '8px' }}>Hard Skills</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skills.hard.map((skill, i) => (
                    <span key={i} style={{ border: '1px solid #cbd5e0', padding: '4px 8px', fontSize: '12px', borderRadius: '2px' }}>{skill}</span>
                  ))}
                </div>
              </div>
            )}
            {skills.soft.length > 0 && (
              <div>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '8px' }}>Soft Skills</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skills.soft.map((skill, i) => (
                    <span key={i} style={{ backgroundColor: '#f7fafc', border: '1px solid #cbd5e0', padding: '4px 8px', fontSize: '12px', borderRadius: '2px' }}>{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '18px', backgroundColor: '#1a202c', color: 'white', display: 'inline-block', padding: '4px 12px', marginBottom: '15px' }}>
            &gt; PROJECTS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            {projects.map(proj => (
              <div key={proj.id} style={{ border: '1px solid #e2e8f0', padding: '15px', borderRadius: '4px' }}>
                <h3 style={{ fontSize: '15px', margin: '0 0 5px 0', color: '#1a202c' }}>{proj.title}</h3>
                {proj.description && <div style={{ fontSize: '12px', color: '#718096', marginBottom: '8px' }}>{proj.description}</div>}
                {proj.achievements && <div style={{ fontSize: '12px', color: '#4a5568', whiteSpace: 'pre-line' }}>{proj.achievements}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div>
          <h2 style={{ fontSize: '18px', backgroundColor: '#1a202c', color: 'white', display: 'inline-block', padding: '4px 12px', marginBottom: '15px' }}>
            &gt; EDUCATION
          </h2>
          {education.map(edu => (
            <div key={edu.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div>
                <strong style={{ fontSize: '14px', color: '#1a202c' }}>{edu.degree}</strong>
                <div style={{ fontSize: '13px', color: '#4a5568' }}>{edu.institution}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '12px', color: '#718096' }}>{edu.startYear} - {edu.endYear}</div>
                {edu.score && <div style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 'bold' }}>{edu.score}</div>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
