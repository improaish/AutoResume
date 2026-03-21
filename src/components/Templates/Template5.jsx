import { useResume } from '../../context/ResumeContext';

export default function Template5() {
  const { data } = useResume();
  const { personalInfo, education, experience, skills, projects } = data;

  return (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', padding: '35px', color: '#1a1a1a', height: '100%', boxSizing: 'border-box', backgroundColor: '#fff' }}>
      
      {/* Header Grid */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '4px solid var(--primary)', paddingBottom: '15px', marginBottom: '20px' }}>
        <div style={{ flex: '70%' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '900', letterSpacing: '-1.5px', margin: '0 0 5px 0', textTransform: 'uppercase', color: '#111' }}>
            {personalInfo.fullName || 'First Last'}
          </h1>
          {personalInfo.summary && (
            <div style={{ fontSize: '13px', lineHeight: '1.4', color: '#444', maxWidth: '90%' }}>
              {personalInfo.summary}
            </div>
          )}
        </div>
        <div style={{ flex: '30%', textAlign: 'right', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '4px', fontWeight: 'bold', color: '#333' }}>
          {personalInfo.email && <div>{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
          {personalInfo.linkedin && <div>{personalInfo.linkedin}</div>}
          {personalInfo.portfolio && <div>{personalInfo.portfolio}</div>}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '30px' }}>
        
        {/* Main Left Column */}
        <div style={{ flex: '65%' }}>
          {/* Experience */}
          {experience.length > 0 && (
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'var(--primary)', width: '12px', height: '12px', display: 'inline-block', marginRight: '8px' }}></span>
                Experience
              </h2>
              {experience.map(exp => (
                <div key={exp.id} style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '15px', margin: '0', fontWeight: '800' }}>{exp.company}</h3>
                    <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase' }}>{exp.startYear} - {exp.endYear || 'Present'}</span>
                  </div>
                  <div style={{ fontSize: '13px', fontStyle: 'italic', marginBottom: '5px' }}>{exp.role}</div>
                  {exp.description && (
                    <div style={{ fontSize: '12px', lineHeight: '1.5', color: '#444', whiteSpace: 'pre-line' }}>
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
              <h2 style={{ fontSize: '18px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                <span style={{ backgroundColor: 'var(--primary)', width: '12px', height: '12px', display: 'inline-block', marginRight: '8px' }}></span>
                Key Projects
              </h2>
              {projects.map(proj => (
                <div key={proj.id} style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '14px', margin: '0', fontWeight: '800' }}>{proj.title}</h3>
                  </div>
                  {proj.description && <div style={{ fontSize: '12px', color: '#444', marginBottom: '3px' }}>{proj.description}</div>}
                  {proj.achievements && <div style={{ fontSize: '11px', color: '#555', whiteSpace: 'pre-line' }}>{proj.achievements}</div>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div style={{ flex: '35%' }}>
          
          {/* Skills */}
          {(skills.hard.length > 0 || skills.soft.length > 0) && (
            <div style={{ marginBottom: '25px', backgroundColor: '#f9f9f9', padding: '15px', borderTop: '3px solid var(--primary)' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '10px' }}>Expertise</h2>
              
              {skills.hard.length > 0 && (
                <div style={{ marginBottom: '10px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '5px', textTransform: 'uppercase', color: '#666' }}>Hard Skills</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {skills.hard.map((skill, i) => (
                      <span key={i} style={{ backgroundColor: '#111', color: '#fff', fontSize: '10px', padding: '2px 6px', fontWeight: 'bold' }}>{skill}</span>
                    ))}
                  </div>
                </div>
              )}
              
              {skills.soft.length > 0 && (
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '5px', textTransform: 'uppercase', color: '#666' }}>Soft Skills</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {skills.soft.map((skill, i) => (
                      <span key={i} style={{ border: '1px solid #111', color: '#111', fontSize: '10px', padding: '2px 6px', fontWeight: 'bold' }}>{skill}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div style={{ padding: '15px', borderLeft: '3px solid var(--primary)', backgroundColor: '#f9f9f9' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '15px' }}>Education</h2>
              {education.map(edu => (
                <div key={edu.id} style={{ marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '13px', margin: '0', fontWeight: '800' }}>{edu.degree}</h3>
                  <div style={{ fontSize: '12px', color: '#444' }}>{edu.institution}</div>
                  <div style={{ fontSize: '11px', color: '#777', marginTop: '2px' }}>{edu.startYear} - {edu.endYear}</div>
                  {edu.score && <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--primary)', marginTop: '2px' }}>{edu.score}</div>}
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
      
    </div>
  );
}
