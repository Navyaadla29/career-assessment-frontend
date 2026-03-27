export const calculateAllScores = () => {
  try {
    const module1 = JSON.parse(localStorage.getItem('module1') || '{}');
    const module2 = JSON.parse(localStorage.getItem('module2') || '{}');
    const module3 = JSON.parse(localStorage.getItem('module3') || '{}');
    const module4 = JSON.parse(localStorage.getItem('module4') || '{}');
    const module5 = JSON.parse(localStorage.getItem('module5') || '{}');
    const module6 = JSON.parse(localStorage.getItem('module6') || '{}');
    const module7 = JSON.parse(localStorage.getItem('module7') || '{}');

    const aptitude = calculateCategoryScore([module2, module6]);
    const creativity = calculateCategoryScore([module1, module3, module7]);
    const commerce = calculateCategoryScore([module4, module6]);
    const leadership = calculateCategoryScore([module3, module5, module7]);

    return {
      aptitude,
      creativity,
      commerce,
      leadership,
      total: Math.round((aptitude + creativity + commerce + leadership) / 4)
    };
  } catch (error) {
    console.error('Error calculating scores:', error);
    return { aptitude: 0, creativity: 0, commerce: 0, leadership: 0, total: 0 };
  }
};

const calculateCategoryScore = (modules) => {
  let total = 0;
  let count = 0;
  
  modules.forEach(module => {
    Object.values(module).forEach(value => {
      const numValue = Number(value);
      if (!isNaN(numValue) && numValue > 0) {
        total += numValue;
        count++;
      }
    });
  });
  
  if (count === 0) return 0;
  const average = (total / count) * 20;
  return Math.min(100, Math.max(0, Math.round(average)));
};

export const getCareerRecommendation = (scores) => {
  const { aptitude, creativity, commerce, leadership } = scores;
  
  if (aptitude >= creativity && aptitude >= commerce && aptitude >= leadership) {
    return {
      career: 'Software Engineer / Data Scientist',
      match: aptitude,
      industry: 'Technology & Engineering',
      growth: '+25%',
      description: 'Your strong analytical and problem-solving skills make you perfect for technology roles. Consider careers in software development, data science, or AI engineering.'
    };
  } else if (creativity >= aptitude && creativity >= commerce && creativity >= leadership) {
    return {
      career: 'Creative Director / UX Designer',
      match: creativity,
      industry: 'Arts & Design',
      growth: '+18%',
      description: 'Your creative thinking and expression skills are exceptional. Consider careers in design, content creation, or creative direction.'
    };
  } else if (commerce >= aptitude && commerce >= creativity && commerce >= leadership) {
    return {
      career: 'Business Analyst / Financial Advisor',
      match: commerce,
      industry: 'Business & Finance',
      growth: '+22%',
      description: 'Your numerical and business acumen make you ideal for finance, accounting, or business analysis roles.'
    };
  } else {
    return {
      career: 'Project Manager / Team Lead',
      match: leadership,
      industry: 'Management',
      growth: '+20%',
      description: 'Your leadership and people skills are excellent for management and administrative roles.'
    };
  }
};