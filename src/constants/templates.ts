export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
    <h1>Business Letter</h1>
    <h2>[Your Name]</h2>
    <p>[Your Address]</p>
    <p>[City, State ZIP Code]</p>
    <p>[Email Address]</p>
    <p>[Phone Number]</p>

    <h2>Date</h2>
    <p>[Current Date]</p>

    <h2>Recipient</h2>
    <p>[Recipient Name]</p>
    <p>[Title]</p>
    <p>[Company Name]</p>
    <p>[Address]</p>

    <h2>Dear [Recipient Name],</h2>
    <p>Opening paragraph - state the purpose of your letter and grab the reader's attention.</p>
    <p>Body paragraph(s) - provide details, explanations, or supporting information.</p>
    <p>Closing paragraph - summarize your main points and indicate next steps.</p>

    <h2>Sincerely,</h2>
    <p>[Your Name]</p>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
    <h1>Cover Letter</h1>
    <h2>Contact Information</h2>
    <p>[Your Name]</p>
    <p>[Your Address]</p>
    <p>[Email Address]</p>
    <p>[Phone Number]</p>

    <h2>Date</h2>
    <p>[Current Date]</p>

    <h2>Employer Information</h2>
    <p>[Hiring Manager Name]</p>
    <p>[Company Name]</p>
    <p>[Company Address]</p>

    <h2>Dear Hiring Manager,</h2>
    <p>I am writing to express my strong interest in the [Position Title] role at [Company Name].</p>
    <p>In my previous role, I successfully achieved [specific achievement] that relates to this position.</p>
    <p>I am confident that my skills and experience would make me a valuable addition to your team.</p>
    <p>Thank you for considering my application.</p>

    <h2>Best regards,</h2>
    <p>[Your Name]</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
    <h1>Letter</h1>
    <h2>From</h2>
    <p>[Your Name]</p>
    <p>[Your Address]</p>
    <p>[City, State ZIP Code]</p>

    <h2>Date</h2>
    <p>[Current Date]</p>

    <h2>To</h2>
    <p>[Recipient Name]</p>
    <p>[Recipient Address]</p>

    <h2>Dear [Recipient Name],</h2>
    <p>Opening paragraph - introduce the purpose of your letter.</p>
    <p>Body paragraphs - provide the main content and details.</p>
    <p>Closing paragraph - summarize and provide any next steps.</p>

    <h2>Sincerely,</h2>
    <p>[Your Name]</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
    <h1>Project Proposal</h1>
    
    <h2>Executive Summary</h2>
    <p>Brief overview of the proposed project, its objectives, and expected outcomes.</p>

    <h2>Project Description</h2>
    <p>Detailed description of the project, including background information and context.</p>

    <h2>Objectives</h2>
    <p>Clear, measurable goals that the project aims to achieve.</p>

    <h2>Scope of Work</h2>
    <p>Detailed breakdown of tasks, deliverables, and project boundaries.</p>

    <h2>Methodology</h2>
    <p>Approach and methods that will be used to complete the project.</p>

    <h2>Timeline</h2>
    <p>Project schedule with key milestones and deadlines.</p>

    <h2>Budget</h2>
    <p>Cost breakdown including resources, materials, and labor.</p>

    <h2>Team & Resources</h2>
    <p>Key personnel and resources required for project success.</p>

    <h2>Risk Assessment</h2>
    <p>Potential risks and mitigation strategies.</p>

    <h2>Expected Outcomes</h2>
    <p>Anticipated results and benefits of the project.</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
    <h1>[Your Name]</h1>
    <h2>Contact Information</h2>
    <p>[Your Address]</p>
    <p>[Phone Number] | [Email Address]</p>
    <p>[LinkedIn Profile] | [Portfolio Website]</p>

    <h2>Professional Summary</h2>
    <p>Brief overview of your professional background, key skills, and career objectives.</p>

    <h2>Work Experience</h2>
    <p>[Job Title] - [Company Name] ([Start Date] - [End Date])</p>
    <p>Description of responsibilities and achievements in this role.</p>

    <h2>Education</h2>
    <p>[Degree] in [Field of Study] - [University Name] ([Graduation Year])</p>
    <p>Relevant coursework, honors, or academic achievements.</p>

    <h2>Skills</h2>
    <p>List of relevant technical and soft skills.</p>

    <h2>Certifications</h2>
    <p>Relevant professional certifications and licenses.</p>
    `,
  },
  {
    id: "software-proposal",
    label: "Software Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
    <h1>Software Development Proposal</h1>
    <h2>ProjectOverview</h2>
    <p>Brief description of the proposed software development project.</p>

    <h2>Scope of work</h2>
    <p>Detailed breakdown of project deliverables and requirements</p>

    <h2>Timeline</h2>
    <p>Project milestones and delivery schedule.</p>

    <h2>Budget</h2>
    <p>Cost breakdown and payment terms.</p>
    `,
  },
];
