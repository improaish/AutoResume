import { useResume } from './context/ResumeContext';
import { User, GraduationCap, Briefcase, Wrench, Trophy, Printer } from 'lucide-react';

import PersonalInfo from './components/FormSteps/PersonalInfo';
import Education from './components/FormSteps/Education';
import Experience from './components/FormSteps/Experience';
import Skills from './components/FormSteps/Skills';
import Projects from './components/FormSteps/Projects';

import Template1 from './components/Templates/Template1';
import Template2 from './components/Templates/Template2';
import Template3 from './components/Templates/Template3';
import Template4 from './components/Templates/Template4';
import Template5 from './components/Templates/Template5';

const steps = [
  { id: 1, name: 'Personal Details', icon: User },
  { id: 2, name: 'Education', icon: GraduationCap },
  { id: 3, name: 'Experience', icon: Briefcase },
  { id: 4, name: 'Skills', icon: Wrench },
  { id: 5, name: 'Projects & Awards', icon: Trophy },
];

const templates = [
  { id: 'template1', name: 'Minimalist' },
  { id: 'template2', name: 'Two-Column' },
  { id: 'template3', name: 'Creative Tech' },
  { id: 'template4', name: 'Executive' },
  { id: 'template5', name: 'Compact Bold' },
];

export default function AppLayout() {
  const { data, setStep, setTemplate } = useResume();
  const { activeStep, activeTemplate } = data;

  const renderActiveStep = () => {
    switch (activeStep) {
      case 1: return <PersonalInfo />;
      case 2: return <Education />;
      case 3: return <Experience />;
      case 4: return <Skills />;
      case 5: return <Projects />;
      default: return <PersonalInfo />;
    }
  };

  const renderActiveTemplate = () => {
    switch (activeTemplate) {
      case 'template1': return <Template1 />;
      case 'template2': return <Template2 />;
      case 'template3': return <Template3 />;
      case 'template4': return <Template4 />;
      case 'template5': return <Template5 />;
      default: return <Template1 />;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <h1>
          <div style={{ width: 24, height: 24, backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
          AutoResume
        </h1>
        
        <nav className="nav-steps">
          {steps.map(step => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id} 
                className={`nav-item ${activeStep === step.id ? 'active' : ''}`}
                onClick={() => setStep(step.id)}
              >
                <Icon size={20} />
                <span>{step.name}</span>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Form Area */}
      <main className="form-area">
        <div className="fade-in">
          {renderActiveStep()}
        </div>
        
        <div className="form-navigation">
          <button 
            className="btn-secondary" 
            onClick={() => setStep(Math.max(1, activeStep - 1))}
            disabled={activeStep === 1}
            style={{ opacity: activeStep === 1 ? 0.5 : 1 }}
          >
            Previous
          </button>
          
          <button 
            className="btn-primary" 
            onClick={() => setStep(Math.min(5, activeStep + 1))}
            disabled={activeStep === 5}
            style={{ opacity: activeStep === 5 ? 0.5 : 1 }}
          >
            Next Step
          </button>
        </div>
      </main>

      {/* Live Preview Area */}
      <aside className="preview-area">
        <div className="template-switcher">
          {templates.map(tpl => (
            <button 
              key={tpl.id}
              className={`template-btn ${activeTemplate === tpl.id ? 'active' : ''}`}
              onClick={() => setTemplate(tpl.id)}
            >
              {tpl.name}
            </button>
          ))}
          <button className="btn-primary" onClick={handlePrint} style={{ marginLeft: 'auto' }}>
            <Printer size={18} /> Print
          </button>
        </div>

        <div className="resume-preview-container">
          {renderActiveTemplate()}
        </div>
      </aside>
    </div>
  );
}
