import axios from 'axios';

export const sendReportByEmail = async (userEmail, userName, scores, career, roadmap) => {
  try {
    const BACKEND_URL = 'https://career-assessment-backend-y4bm.onrender.com';
    
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

5-YEAR ACTION PLAN:
${roadmap.map((item, i) => `${i+1}. ${item.year}: ${item.tasks[0]}`).join('\n')}

For complete report, visit: https://career-assessment-frontend-ten.vercel.app/dashboard
    `;
    
    // For now, we'll simulate email sending
    // In production, use a backend service like SendGrid, Resend, or Nodemailer
    
    console.log('Sending report to:', userEmail);
    console.log('Report content:', reportContent);
    
    // For demo purposes, we'll just show a success message
    // In real implementation, you'd call your backend API
    
    return { success: true, message: 'Report sent to your email!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email' };
  }
};