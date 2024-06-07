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
      {'Education info'}
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
      ></Input>
      <Input
        label="GPA"
        value={educationInfo.gpa == null ? '' : educationInfo.gpa}
        onChange={handleGpaChange}
      ></Input>
    </div>
  );
}
