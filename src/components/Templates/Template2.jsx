import { useResume } from '../../context/ResumeContext';

export default function Template2() {
  const { data } = useResume();
  const { personalInfo, education, experience, skills, projects } = data;

  return (
    <div style={{ display: 'flex', fontFamily: 'Inter, sans-serif', color: '#333', height: '100%', boxSizing: 'border-box' }}>
      
      {/* Sidebar */}
      <div style={{ width: '30%', backgroundColor: '#f4f4f4', padding: '30px', borderRight: '10px solid var(--primary)' }}>
        
        {/* Contact Info */}
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '16px', color: '#222', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Contact</h2>
          <div style={{ fontSize: '12px', color: '#555', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {personalInfo.email && <div>{personalInfo.email}</div>}
            {personalInfo.phone && <div>{personalInfo.phone}</div>}
            {personalInfo.location && <div>{personalInfo.location}</div>}
            {personalInfo.linkedin && <div>{personalInfo.linkedin}</div>}
            {personalInfo.portfolio && <div>{personalInfo.portfolio}</div>}
          </div>
        </div>

        {/* Education Sidebar */}
        {education.length > 0 && (
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '16px', color: '#222', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Education</h2>
            {education.map(edu => (
              <div key={edu.id} style={{ marginBottom: '15px' }}>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#333' }}>{edu.degree}</div>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px' }}>{edu.institution}</div>
                <div style={{ fontSize: '11px', color: '#888' }}>{edu.startYear} - {edu.endYear}</div>
                {edu.score && <div style={{ fontSize: '11px', color: '#888' }}>Score: {edu.score}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills Sidebar */}
        {(skills.hard.length > 0 || skills.soft.length > 0) && (
          <div>
            <h2 style={{ fontSize: '16px', color: '#222', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Skills</h2>
            
            {skills.hard.length > 0 && (
              <div style={{ marginBottom: '15px' }}>
                <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' }}>Technical</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {skills.hard.map((skill, i) => (
                    <span key={i} style={{ backgroundColor: '#e0e0e0', padding: '3px 8px', borderRadius: '4px', fontSize: '11px' }}>{skill}</span>
                  ))}
                </div>
              </div>
            )}
            
            {skills.soft.length > 0 && (
              <div>
                <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' }}>Interpersonal</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {skills.soft.map((skill, i) => (
                    <span key={i} style={{ backgroundColor: '#e0e0e0', padding: '3px 8px', borderRadius: '4px', fontSize: '11px' }}>{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div style={{ width: '70%', padding: '40px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '38px', margin: '0 0 10px 0', color: '#111', lineHeight: '1.2' }}>
            {personalInfo.fullName || 'Your Name'}
          </h1>
          {personalInfo.summary && (
            <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#444', marginTop: '15px' }}>
              {personalInfo.summary}
            </p>
          )}
        </div>

        {/* Experience */}
        {experience.length > 0 && (
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '20px', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '2px solid #eee', paddingBottom: '5px', marginBottom: '20px' }}>Experience</h2>
            {experience.map(exp => (
              <div key={exp.id} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', margin: '0', color: '#222' }}>{exp.role}</h3>
                    <div style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 'bold' }}>{exp.company}</div>
                  </div>
                  <span style={{ fontSize: '12px', color: '#777', backgroundColor: '#f4f4f4', padding: '2px 8px', borderRadius: '10px' }}>{exp.startYear} - {exp.endYear || 'Present'}</span>
                </div>
                {exp.description && (
                  <div style={{ fontSize: '13px', color: '#444', whiteSpace: 'pre-line', lineHeight: '1.6', marginTop: '8px' }}>
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div>
            <h2 style={{ fontSize: '20px', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '2px solid #eee', paddingBottom: '5px', marginBottom: '20px' }}>Projects & Achievements</h2>
            {projects.map(proj => (
              <div key={proj.id} style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                  <h3 style={{ fontSize: '15px', margin: '0', color: '#222' }}>{proj.title}</h3>
                  {proj.link && <a href={proj.link} style={{ fontSize: '12px', color: '#666', textDecoration: 'none' }}>({proj.link})</a>}
                </div>
                {proj.description && <div style={{ fontSize: '13px', color: '#555', marginBottom: '5px', fontStyle: 'italic' }}>{proj.description}</div>}
                {proj.achievements && <div style={{ fontSize: '13px', color: '#444', whiteSpace: 'pre-line', paddingLeft: '15px', borderLeft: '2px solid #eee' }}>{proj.achievements}</div>}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
