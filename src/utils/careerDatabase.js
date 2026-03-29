export const careerDatabase = {
  "Software Engineer": {
    title: "Software Engineer",
    salary: {
      entry: "₹6-12 LPA",
      mid: "₹15-30 LPA",
      senior: "₹40-80 LPA",
      global: "$80,000 - $150,000"
    },
    education: "B.Tech/B.E. in Computer Science, IT, or related field",
    companies: ["Google", "Microsoft", "Amazon", "Meta", "Apple", "Infosys", "TCS", "Wipro"],
    dailyTasks: [
      "Write and test code for software applications",
      "Collaborate with cross-functional teams",
      "Debug and fix software issues",
      "Participate in code reviews",
      "Design system architecture"
    ],
    skills: ["Python", "Java", "JavaScript", "Data Structures", "Algorithms", "System Design"],
    growth: "25% growth expected in next 5 years",
    resources: [
      { type: "course", name: "CS50: Introduction to Computer Science", link: "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science" },
      { type: "course", name: "The Complete Web Developer Bootcamp", link: "https://www.udemy.com/course/the-complete-web-developer-bootcamp/" },
      { type: "video", name: "Day in the Life of a Software Engineer", link: "https://www.youtube.com/watch?v=IqB0PxrPqRw" },
      { type: "website", name: "LeetCode for Practice", link: "https://leetcode.com/" }
    ]
  },
  "Data Scientist": {
    title: "Data Scientist",
    salary: {
      entry: "₹8-15 LPA",
      mid: "₹20-35 LPA",
      senior: "₹45-80 LPA",
      global: "$90,000 - $160,000"
    },
    education: "B.Tech/B.Sc in Statistics, Mathematics, Computer Science, or Data Science",
    companies: ["Google", "Amazon", "Microsoft", "Meta", "Netflix", "Uber", "Airbnb"],
    dailyTasks: [
      "Analyze complex datasets to find patterns",
      "Build machine learning models",
      "Create data visualizations",
      "Present findings to stakeholders",
      "Clean and preprocess data"
    ],
    skills: ["Python", "SQL", "Machine Learning", "Statistics", "Data Visualization", "TensorFlow"],
    growth: "30% growth expected in next 5 years",
    resources: [
      { type: "course", name: "Google Data Analytics Professional Certificate", link: "https://www.coursera.org/professional-certificates/google-data-analytics" },
      { type: "course", name: "Machine Learning by Andrew Ng", link: "https://www.coursera.org/learn/machine-learning" },
      { type: "video", name: "What is Data Science?", link: "https://www.youtube.com/watch?v=X3paOmcrTjQ" },
      { type: "website", name: "Kaggle - Data Science Projects", link: "https://www.kaggle.com/" }
    ]
  },
  "Data Analyst": {
    title: "Data Analyst",
    salary: {
      entry: "₹4-8 LPA",
      mid: "₹10-18 LPA",
      senior: "₹20-30 LPA",
      global: "$60,000 - $100,000"
    },
    education: "B.Tech/B.Sc/B.Com in Statistics, Mathematics, Economics, or Computer Science",
    companies: ["Deloitte", "PwC", "EY", "KPMG", "Accenture", "IBM", "Wipro"],
    dailyTasks: [
      "Collect and analyze data",
      "Create dashboards and reports",
      "Identify trends and patterns",
      "Present insights to management",
      "Maintain data integrity"
    ],
    skills: ["SQL", "Excel", "Tableau", "Power BI", "Python", "Statistics"],
    growth: "22% growth expected in next 5 years",
    resources: [
      { type: "course", name: "IBM Data Analyst Professional Certificate", link: "https://www.coursera.org/professional-certificates/ibm-data-analyst" },
      { type: "course", name: "Data Analysis with Python", link: "https://www.freecodecamp.org/learn/data-analysis-with-python/" },
      { type: "video", name: "A Day in the Life of a Data Analyst", link: "https://www.youtube.com/watch?v=UyFfEHJpVYo" }
    ]
  },
  "UX Designer": {
    title: "UX Designer",
    salary: {
      entry: "₹5-10 LPA",
      mid: "₹12-22 LPA",
      senior: "₹25-40 LPA",
      global: "$70,000 - $120,000"
    },
    education: "B.Des / BFA / B.Tech in Design, Human-Computer Interaction, or related field",
    companies: ["Google", "Apple", "Meta", "Microsoft", "Adobe", "Figma"],
    dailyTasks: [
      "Conduct user research",
      "Create wireframes and prototypes",
      "Design user interfaces",
      "Test designs with users",
      "Collaborate with developers"
    ],
    skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "HTML/CSS"],
    growth: "20% growth expected in next 5 years",
    resources: [
      { type: "course", name: "Google UX Design Certificate", link: "https://www.coursera.org/professional-certificates/google-ux-design" },
      { type: "course", name: "UI/UX Design Specialization", link: "https://www.coursera.org/specializations/ui-ux-design" },
      { type: "video", name: "What is UX Design?", link: "https://www.youtube.com/watch?v=7XgSggFZ4Ts" }
    ]
  },
  "Business Consultant": {
    title: "Business Consultant",
    salary: {
      entry: "₹8-15 LPA",
      mid: "₹18-30 LPA",
      senior: "₹35-60 LPA",
      global: "$80,000 - $150,000"
    },
    education: "MBA / BBA / B.Com / Economics",
    companies: ["McKinsey", "Boston Consulting Group", "Bain", "Deloitte", "PwC", "EY", "KPMG"],
    dailyTasks: [
      "Analyze business problems",
      "Develop strategic solutions",
      "Present recommendations to clients",
      "Conduct market research",
      "Manage client relationships"
    ],
    skills: ["Strategic Thinking", "Problem Solving", "Communication", "Data Analysis", "Presentation Skills"],
    growth: "15% growth expected in next 5 years",
    resources: [
      { type: "course", name: "Business Strategy Specialization", link: "https://www.coursera.org/specializations/business-strategy" },
      { type: "course", name: "Management Consulting Specialization", link: "https://www.coursera.org/specializations/management-consulting" },
      { type: "video", name: "Day in the Life of a Consultant", link: "https://www.youtube.com/watch?v=3ZqYI4zTk8Y" }
    ]
  }
};

export const collegeDatabase = {
  "Science (PCM)": {
    india: [
      { name: "Indian Institute of Technology (IIT)", location: "Various Cities", ranking: "Top 10" },
      { name: "National Institute of Technology (NIT)", location: "Various Cities", ranking: "Top 20" },
      { name: "Birla Institute of Technology (BITS Pilani)", location: "Pilani, Goa, Hyderabad", ranking: "Top 5 Private" },
      { name: "Delhi Technological University (DTU)", location: "Delhi", ranking: "Top 10" },
      { name: "Vellore Institute of Technology (VIT)", location: "Vellore", ranking: "Top 10 Private" }
    ],
    abroad: [
      { name: "Massachusetts Institute of Technology (MIT)", location: "USA", ranking: "World #1" },
      { name: "Stanford University", location: "USA", ranking: "World #2" },
      { name: "University of Cambridge", location: "UK", ranking: "World #5" },
      { name: "National University of Singapore (NUS)", location: "Singapore", ranking: "Top 10 Asia" },
      { name: "ETH Zurich", location: "Switzerland", ranking: "Top 10 Europe" }
    ]
  },
  "Arts & Humanities": {
    india: [
      { name: "Jawaharlal Nehru University (JNU)", location: "Delhi", ranking: "Top 5" },
      { name: "Delhi University (DU)", location: "Delhi", ranking: "Top 5" },
      { name: "Jamia Millia Islamia", location: "Delhi", ranking: "Top 10" },
      { name: "Banaras Hindu University (BHU)", location: "Varanasi", ranking: "Top 10" },
      { name: "St. Stephen's College", location: "Delhi", ranking: "Top 5" }
    ],
    abroad: [
      { name: "Harvard University", location: "USA", ranking: "World #1" },
      { name: "University of Oxford", location: "UK", ranking: "World #1" },
      { name: "University of Cambridge", location: "UK", ranking: "World #2" },
      { name: "Sorbonne University", location: "France", ranking: "Top 10 Europe" }
    ]
  },
  "Commerce": {
    india: [
      { name: "Shri Ram College of Commerce (SRCC)", location: "Delhi", ranking: "Top 1" },
      { name: "Lady Shri Ram College (LSR)", location: "Delhi", ranking: "Top 5" },
      { name: "Christ University", location: "Bangalore", ranking: "Top 5 Private" },
      { name: "St. Xavier's College", location: "Mumbai", ranking: "Top 5" },
      { name: "NMIMS", location: "Mumbai", ranking: "Top 5 Private" }
    ],
    abroad: [
      { name: "London School of Economics (LSE)", location: "UK", ranking: "World #1 for Economics" },
      { name: "Harvard Business School", location: "USA", ranking: "World #1" },
      { name: "Wharton School", location: "USA", ranking: "World #2" },
      { name: "INSEAD", location: "France/Singapore", ranking: "Top 5 Global" }
    ]
  }
};