import "../styles/Curriculum.css";

export default function Curriculum({ formData }) {
  return (
    <div className="curriculum">
      <div className="identity">
        <h3 className="name">{formData.name}</h3>
        <div className="contact">
          {formData.mail} | {formData.phone}
        </div>
      </div>
      <div className="education">
        <h4 className="education-title">Educational experience</h4>
        <div className="studySchool">
          <b>School:</b> {formData.school}
        </div>
        <div className="studyTitle">
          <b>Study title:</b> {formData.studyTitle}
        </div>
        <div className="studyDate">
          <b>Study date:</b> {formData.studyDate}
        </div>
      </div>

      <div className="experiences">
        <h4 className="experience-title">Practical experience</h4>
        <div className="experience-list">
          {formData.experiences.map((experience, index) => (
            <div key={index} className="experience">
              <div className="experience-position">
                <b>Position:</b> {experience.position}
              </div>
              <div className="experience-company">
                <b>Company:</b> {experience.company}
              </div>
              <div className="experience-dates">
                <b>Period:</b> {experience.started} - {experience.ended}
              </div>
              <div className="experience-responsibilities">
                <b>Main responsibilities:</b> {experience.responsibilities}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
