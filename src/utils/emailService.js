export const sendReportByEmail = async (userEmail, userName, scores, career, roadmap) => {
  try {
    // Create report content
    const reportContent = `
CAREER ASSESSMENT REPORT
========================
Generated for: ${userName}
Email: ${userEmail}
Date: ${new Date().toLocaleDateString()}

YOUR TOP CAREER MATCH: ${career.career}
Match Score: ${career.match}%
Industry: ${career.industry}
Growth Projection: ${career.growth}

YOUR SCORES:
- Aptitude & Logic: ${scores.aptitude}/100
- Creativity & Expression: ${scores.creativity}/100
- Commerce & Finance: ${scores.commerce}/100
- Leadership & People: ${scores.leadership}/100

For complete report, visit: https://career-assessment-frontend-ten.vercel.app/dashboard
    `;
    
    console.log('Sending report to:', userEmail);
    console.log('Report content:', reportContent);
    
    // For demo purposes, we'll just show a success message
    return { success: true, message: 'Report sent to your email!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email' };
  }
};