export const calculateAllScores = () => {
  try {
    // Get all module answers
    const module1 = JSON.parse(localStorage.getItem('module1') || '{}');
    const module2 = JSON.parse(localStorage.getItem('module2') || '{}');
    const module3 = JSON.parse(localStorage.getItem('module3') || '{}');
    const module4 = JSON.parse(localStorage.getItem('module4') || '{}');
    const module5 = JSON.parse(localStorage.getItem('module5') || '{}');
    const module6 = JSON.parse(localStorage.getItem('module6') || '{}');
    const module7 = JSON.parse(localStorage.getItem('module7') || '{}');

    // Calculate each category score
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
    return {
      aptitude: 0,
      creativity: 0,
      commerce: 0,
      leadership: 0,
      total: 0
    };
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
  const average = (total / count) * 20; // Convert 1-5 scale to 0-100
  return Math.min(100, Math.max(0, Math.round(average)));
};

export const getCareerRecommendation = (scores) => {
  const { aptitude, creativity, commerce, leadership } = scores;
  
  if (aptitude > 70 && creativity > 50) {
    return {
      career: 'Software Engineer',
      match: aptitude,
      industry: 'Technology & Engineering',
      growth: '+25%',
      description: 'Your strong analytical and problem-solving skills align perfectly with software development.'
    };
  } else if (creativity > 70 && leadership > 50) {
    return {
      career: 'Creative Director',
      match: creativity,
      industry: 'Arts & Design',
      growth: '+15%',
      description: 'Your creative vision and leadership abilities make you perfect for creative roles.'
    };
  } else if (commerce > 70 && leadership > 50) {
    return {
      career: 'Business Analyst',
      match: commerce,
      industry: 'Business & Management',
      growth: '+20%',
      description: 'Your analytical and business acumen make you ideal for business roles.'
    };
  } else if (leadership > 70) {
    return {
      career: 'Project Manager',
      match: leadership,
      industry: 'Management',
      growth: '+18%',
      description: 'Your leadership skills and people management abilities are outstanding.'
    };
  } else {
    return {
      career: 'Product Manager',
      match: Math.round((aptitude + creativity + commerce + leadership) / 4),
      industry: 'Business & Technology',
      growth: '+22%',
      description: 'Your diverse skills make you a great fit for product management roles.'
    };
  }
};