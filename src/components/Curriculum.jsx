import "./Curriculum.css";

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

      <div className="experience">
        <h4 className="experience-title">Practical experience</h4>
        <div className="experience-position">
          <b>Position:</b> {formData.position}
        </div>
        <div className="experience-company">
          <b>Company:</b> {formData.company}
        </div>
        <div className="experience-dates">
          <b>Period:</b> {formData.started} - {formData.ended}
        </div>
        <div className="experience-responsibilities">
          <b>Main responsibilities:</b> {formData.responsibilities}
        </div>
      </div>
    </div>
  );
}
