export const saveAssessmentProgress = (moduleId, answers, currentQuestion = null) => {
  const progress = {
    moduleId,
    answers,
    currentQuestion,
    timestamp: new Date().toISOString(),
    userId: localStorage.getItem('userId')
  };
  localStorage.setItem(`progress_${moduleId}`, JSON.stringify(progress));
  localStorage.setItem('lastProgress', JSON.stringify(progress));
};

export const loadAssessmentProgress = (moduleId) => {
  const saved = localStorage.getItem(`progress_${moduleId}`);
  if (saved) {
    return JSON.parse(saved);
  }
  return null;
};

export const clearProgress = () => {
  for (let i = 1; i <= 7; i++) {
    localStorage.removeItem(`progress_module${i}`);
  }
  localStorage.removeItem('lastProgress');
};

export const hasSavedProgress = () => {
  return localStorage.getItem('lastProgress') !== null;
};

export const getResumeModule = () => {
  const lastProgress = localStorage.getItem('lastProgress');
  if (lastProgress) {
    const data = JSON.parse(lastProgress);
    return data.moduleId;
  }
  return null;
};