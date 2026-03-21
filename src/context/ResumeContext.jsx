import { createContext, useContext, useState } from 'react';

const defaultState = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    portfolio: '',
    summary: '',
  },
  education: [
    { id: 'edu-1', type: 'High School', institution: '', degree: '', startYear: '', endYear: '', score: '' }
  ],
  experience: [],
  skills: {
    hard: [],
    soft: []
  },
  projects: [],
  activeTemplate: 'template1',
  activeStep: 1, // 1: Personal, 2: Education, 3: Experience, 4: Skills, 5: Projects
};

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [data, setData] = useState(defaultState);

  const updatePersonalInfo = (field, value) => {
    setData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const addEducation = (type) => {
    setData(prev => ({
      ...prev,
      education: [...prev.education, { 
        id: `edu-${Date.now()}`, 
        type, 
        institution: '', 
        degree: '', 
        startYear: '', 
        endYear: '', 
        score: '' 
      }]
    }));
  };

  const updateEducation = (id, field, value) => {
    setData(prev => ({
      ...prev,
      education: prev.education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu)
    }));
  };

  const removeEducation = (id) => {
    setData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addExperience = () => {
    setData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        id: `exp-${Date.now()}`,
        company: '',
        role: '',
        startYear: '',
        endYear: '',
        description: ''
      }]
    }));
  };

  const updateExperience = (id, field, value) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
    }));
  };

  const removeExperience = (id) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addSkill = (type, skill) => { // type: 'hard' | 'soft'
    if(!skill.trim()) return;
    setData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [type]: [...prev.skills[type], skill.trim()]
      }
    }));
  };

  const removeSkill = (type, index) => {
    setData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [type]: prev.skills[type].filter((_, i) => i !== index)
      }
    }));
  };

  const addProject = () => {
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, {
        id: `proj-${Date.now()}`,
        title: '',
        link: '',
        description: '',
        achievements: ''
      }]
    }));
  };

  const updateProject = (id, field, value) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(proj => proj.id === id ? { ...proj, [field]: value } : proj)
    }));
  };

  const removeProject = (id) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id)
    }));
  };

  const setTemplate = (templateId) => {
    setData(prev => ({ ...prev, activeTemplate: templateId }));
  };

  const setStep = (step) => {
    setData(prev => ({ ...prev, activeStep: step }));
  };

  return (
    <ResumeContext.Provider value={{ 
      data, 
      updatePersonalInfo, 
      addEducation, updateEducation, removeEducation,
      addExperience, updateExperience, removeExperience,
      addSkill, removeSkill,
      addProject, updateProject, removeProject,
      setTemplate, setStep
    }}>
      {children}
    </ResumeContext.Provider>
  );
}

export const useResume = () => useContext(ResumeContext);
