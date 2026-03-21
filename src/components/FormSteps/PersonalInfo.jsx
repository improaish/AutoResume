import { useResume } from '../../context/ResumeContext';

export default function PersonalInfo() {
  const { data, updatePersonalInfo } = useResume();
  const { personalInfo } = data;

  return (
    <div className="step-container">
      <div className="step-header">
        <h2>Personal Details</h2>
        <p>Start with your basic information and professional summary.</p>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            value={personalInfo.fullName}
            onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="john@example.com" 
            value={personalInfo.email}
            onChange={(e) => updatePersonalInfo('email', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input 
            type="tel" 
            placeholder="+1 (555) 123-4567" 
            value={personalInfo.phone}
            onChange={(e) => updatePersonalInfo('phone', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Location (City, Country)</label>
          <input 
            type="text" 
            placeholder="New York, NY" 
            value={personalInfo.location}
            onChange={(e) => updatePersonalInfo('location', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>LinkedIn URL</label>
          <input 
            type="url" 
            placeholder="linkedin.com/in/johndoe" 
            value={personalInfo.linkedin}
            onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Portfolio / Website</label>
          <input 
            type="url" 
            placeholder="johndoe.com" 
            value={personalInfo.portfolio}
            onChange={(e) => updatePersonalInfo('portfolio', e.target.value)}
          />
        </div>
        <div className="form-group full-width">
          <label>Professional Summary</label>
          <textarea 
            placeholder="Brief professional summary reflecting your experience and goals..."
            value={personalInfo.summary}
            onChange={(e) => updatePersonalInfo('summary', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
