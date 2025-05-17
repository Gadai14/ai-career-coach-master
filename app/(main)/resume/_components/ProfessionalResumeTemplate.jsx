import React from "react";

const ProfessionalResumeTemplate = ({ resumeData }) => {
  const {
    fullName,
    title,
    contactInfo = {},
    summary = "",
    skills = "",
    experience = [],
    education = [],
    projects = [],
  } = resumeData;

  // Function to ensure text doesn't overflow by truncating if necessary
  const truncateText = (text, maxLength = 100) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div 
      className="bg-white text-gray-800 w-full" 
      id="resume-pdf"
      style={{ 
        fontFamily: 'Arial, sans-serif',
        maxWidth: '210mm', // A4 width
        height: '297mm',   // A4 height
        padding: '15mm',
        margin: '0 auto',
        boxSizing: 'border-box',
        pageBreakInside: 'avoid'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        {/* Left sidebar */}
        <div style={{ 
          width: '30%', 
          backgroundColor: '#f3f4f6', 
          padding: '15px',
          borderRadius: '4px',
          height: '100%',
          minHeight: '267mm', // Account for padding to fit A4
        }}>
          {/* Profile image placeholder */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ 
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: '#d1d5db',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              margin: '0 auto'
            }}>
              <span style={{ fontSize: '40px', color: '#6b7280' }}>👤</span>
            </div>
          </div>

          {/* Contact Information */}
          <div style={{ marginBottom: '25px' }}>
            <h2 style={{ 
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderBottom: '1px solid #9ca3af',
              paddingBottom: '5px',
              marginBottom: '10px' 
            }}>
              Contact
            </h2>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {contactInfo.email && (
                <li style={{ 
                  fontSize: '13px', 
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'flex-start'
                }}>
                  <span style={{ marginRight: '8px' }}>📧</span> 
                  <span style={{ 
                    wordBreak: 'break-word',
                    display: 'inline-block',
                    width: 'calc(100% - 20px)'
                  }}>
                    {contactInfo.email}
                  </span>
                </li>
              )}
              {contactInfo.mobile && (
                <li style={{ 
                  fontSize: '13px', 
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'flex-start' 
                }}>
                  <span style={{ marginRight: '8px' }}>📱</span> 
                  <span>{contactInfo.mobile}</span>
                </li>
              )}
              {contactInfo.address && (
                <li style={{ 
                  fontSize: '13px', 
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'flex-start' 
                }}>
                  <span style={{ marginRight: '8px' }}>📍</span>
                  <span>{contactInfo.address}</span>
                </li>
              )}
              {contactInfo.linkedin && (
                <li style={{ 
                  fontSize: '13px', 
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'flex-start' 
                }}>
                  <span style={{ marginRight: '8px' }}>💼</span> 
                  <span style={{ 
                    wordBreak: 'break-word',
                    display: 'inline-block',
                    width: 'calc(100% - 20px)'
                  }}>
                    {contactInfo.linkedin}
                  </span>
                </li>
              )}
              {contactInfo.twitter && (
                <li style={{ 
                  fontSize: '13px', 
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'flex-start' 
                }}>
                  <span style={{ marginRight: '8px' }}>🐦</span> 
                  <span style={{ 
                    wordBreak: 'break-word',
                    display: 'inline-block',
                    width: 'calc(100% - 20px)'
                  }}>
                    {contactInfo.twitter}
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* Skills Section */}
          {skills && (
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderBottom: '1px solid #9ca3af',
                paddingBottom: '5px',
                marginBottom: '10px' 
              }}>
                Skills
              </h2>
              <div style={{ fontSize: '13px' }}>
                {skills.split(",").map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '9999px',
                      padding: '4px 10px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#4b5563',
                      marginRight: '6px',
                      marginBottom: '6px'
                    }}
                  >
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Leadership or additional section */}
          <div style={{ marginBottom: '25px' }}>
            <h2 style={{ 
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderBottom: '1px solid #9ca3af',
              paddingBottom: '5px',
              marginBottom: '10px' 
            }}>
              Leadership
            </h2>
            <p style={{ fontSize: '13px', lineHeight: '1.5' }}>
              Demonstrated leadership through project management, team collaboration,
              and problem-solving initiatives.
            </p>
          </div>
        </div>

        {/* Right content */}
        <div style={{ width: '70%', padding: '15px' }}>
          {/* Name and title */}
          <div style={{ marginBottom: '25px' }}>
            <h1 style={{ 
              fontSize: '32px', 
              fontWeight: 'bold', 
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '5px',
              marginTop: 0,
              color: '#1f2937'
            }}>
              {fullName || "Your Name"}
            </h1>
            <h2 style={{ 
              fontSize: '18px', 
              color: '#4b5563', 
              textTransform: 'uppercase',
              marginTop: 0
            }}>
              {title || "Professional Title"}
            </h2>
          </div>

          {/* Summary */}
          {summary && (
            <div style={{ marginBottom: '25px' }}>
              <p style={{ fontSize: '13px', lineHeight: '1.5' }}>{summary}</p>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderBottom: '1px solid #9ca3af',
                paddingBottom: '5px',
                marginBottom: '15px' 
              }}>
                Education
              </h2>
              <div>
                {education.map((edu, index) => (
                  <div key={index} style={{ marginBottom: index < education.length - 1 ? '15px' : 0 }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      flexWrap: 'wrap'
                    }}>
                      <h3 style={{ 
                        fontWeight: '600', 
                        fontSize: '14px',
                        margin: '0 0 5px 0'
                      }}>
                        {edu.title || edu.institution}
                      </h3>
                      <span style={{ 
                        fontSize: '13px', 
                        color: '#6b7280',
                        minWidth: '120px',
                        textAlign: 'right'
                      }}>
                        {edu.startDate} - {edu.endDate || "Present"}
                      </span>
                    </div>
                    <p style={{ 
                      fontSize: '13px', 
                      margin: '0 0 5px 0'
                    }}>{edu.institution}</p>
                    {edu.description && (
                      <p style={{ 
                        fontSize: '13px', 
                        margin: '5px 0 0 0',
                        lineHeight: '1.5'
                      }}>{truncateText(edu.description, 200)}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderBottom: '1px solid #9ca3af',
                paddingBottom: '5px',
                marginBottom: '15px' 
              }}>
                Experience
              </h2>
              <div>
                {experience.map((exp, index) => (
                  <div key={index} style={{ marginBottom: index < experience.length - 1 ? '15px' : 0 }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      flexWrap: 'wrap'
                    }}>
                      <h3 style={{ 
                        fontWeight: '600', 
                        fontSize: '14px',
                        margin: '0 0 5px 0' 
                      }}>
                        {exp.title}
                      </h3>
                      <span style={{ 
                        fontSize: '13px', 
                        color: '#6b7280',
                        minWidth: '120px',
                        textAlign: 'right'
                      }}>
                        {exp.startDate} - {exp.endDate || "Present"}
                      </span>
                    </div>
                    <p style={{ 
                      fontSize: '13px', 
                      fontStyle: 'italic',
                      margin: '0 0 5px 0'
                    }}>{exp.company}</p>
                    {exp.description && (
                      <p style={{ 
                        fontSize: '13px', 
                        margin: '5px 0 0 0',
                        lineHeight: '1.5'
                      }}>{truncateText(exp.description, 200)}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{ 
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderBottom: '1px solid #9ca3af',
                paddingBottom: '5px',
                marginBottom: '15px' 
              }}>
                Projects
              </h2>
              <div>
                {projects.map((project, index) => (
                  <div key={index} style={{ marginBottom: index < projects.length - 1 ? '15px' : 0 }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      flexWrap: 'wrap'
                    }}>
                      <h3 style={{ 
                        fontWeight: '600', 
                        fontSize: '14px',
                        margin: '0 0 5px 0' 
                      }}>
                        {project.title}
                      </h3>
                      <span style={{ 
                        fontSize: '13px', 
                        color: '#6b7280',
                        minWidth: '120px',
                        textAlign: 'right'
                      }}>
                        {project.startDate} - {project.endDate || "Present"}
                      </span>
                    </div>
                    {project.company && (
                      <p style={{ 
                        fontSize: '13px', 
                        fontStyle: 'italic',
                        margin: '0 0 5px 0'
                      }}>{project.company}</p>
                    )}
                    {project.description && (
                      <p style={{ 
                        fontSize: '13px', 
                        margin: '5px 0 0 0',
                        lineHeight: '1.5'
                      }}>{truncateText(project.description, 200)}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          <div style={{ marginBottom: '10px' }}>
            <h2 style={{ 
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderBottom: '1px solid #9ca3af',
              paddingBottom: '5px',
              marginBottom: '10px' 
            }}>
              References
            </h2>
            <p style={{ fontSize: '13px' }}>Available upon request</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalResumeTemplate;