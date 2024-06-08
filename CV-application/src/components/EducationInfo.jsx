/* eslint-disable react/prop-types */
import { Input } from './Inputs';

export default function EducationInfo({ educationInfo, setEducationInfo }) {
  function handleOrganisationChange(e) {
    setEducationInfo({ ...educationInfo, organisation: e.target.value });
  }
  function handleDegreeChange(e) {
    setEducationInfo({ ...educationInfo, degree: e.target.value });
  }
  function handleStartingYearChange(e) {
    setEducationInfo({ ...educationInfo, startingYear: e.target.value });
  }
  function handleGpaChange(e) {
    setEducationInfo({ ...educationInfo, gpa: e.target.value });
  }
  return (
    <div className="info">
      <h2>{'Education info'}</h2>
      <Input
        label="University/Institution"
        value={
          educationInfo.organisation == null ? '' : educationInfo.organisation
        }
        onChange={handleOrganisationChange}
      ></Input>
      <Input
        label="Program/Degree"
        value={educationInfo.degree == null ? '' : educationInfo.degree}
        onChange={handleDegreeChange}
      ></Input>
      <Input
        label="Starting Year"
        value={
          educationInfo.startingYear == null ? '' : educationInfo.startingYear
        }
        onChange={handleStartingYearChange}
        type="date"
      ></Input>
      <Input
        label="GPA"
        value={educationInfo.gpa == null ? '' : educationInfo.gpa}
        onChange={handleGpaChange}
        type="number"
        min="0"
        max="10"
      ></Input>
    </div>
  );
}
