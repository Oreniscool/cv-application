/* eslint-disable react/prop-types */
import Back from '../assets/back-arrow-svgrepo-com.svg';
import '../styles/cv.css';

function Top({ person }) {
  return (
    <div className="top">
      <div className="basic">
        <h2>{person.basicInfo.firstName + ' ' + person.basicInfo.lastName}</h2>
        <h4>{person.basicInfo.profession}</h4>
        <div className="address">{person.contactInfo.address}</div>
      </div>
      <ul className="contact">
        <li>{person.contactInfo.email}</li>
        <li>{person.contactInfo.phone}</li>
        <li>{person.contactInfo.website}</li>
      </ul>
    </div>
  );
}
function Summary({ person }) {
  return (
    <div className="summary">
      <h4>Professional summary: </h4>
      <p>{person.basicInfo.summary}</p>
    </div>
  );
}
function Education({ person }) {
  return (
    <div className="education">
      <h3>Education</h3>
      <div className="content">
        <div className="degree">{person.educationInfo.degree}</div>
        <div className="university">at {person.educationInfo.organisation}</div>
        <div className="starting-year">
          starting {person.educationInfo.startingYear}
        </div>
        <div className="gpa">GPA: {person.educationInfo.gpa}</div>
      </div>
    </div>
  );
}
function Work({ person }) {
  return (
    <div className="work">
      <h3>Work Experience</h3>
      <div className="content">
        <div className="position">{person.workExp.position}</div>
        <div className="workplace">at {person.workExp.workplace}</div>
        <div className="responsibilities">
          handling {person.workExp.responsibilities}
        </div>
        <div className="starting-year">from {person.workExp.startingYear}</div>
      </div>
    </div>
  );
}

function CVTemplate({ person, classes, handleBack }) {
  return (
    <div className={classes}>
      <img src={Back} alt="" className="back" onClick={handleBack} />
      <div className="board">
        <Top person={person}></Top>
        <Summary person={person}></Summary>
        <Education person={person}></Education>
        <Work person={person}></Work>
      </div>
    </div>
  );
}
export default CVTemplate;
