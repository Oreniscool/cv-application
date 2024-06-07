/* eslint-disable react/prop-types */
import { Input } from './Inputs';

export default function WorkExp({ workExp, setWorkExp }) {
  function handlePositionChange(e) {
    setWorkExp({ ...workExp, organisation: e.target.value });
  }
  function handleWorkplaceChange(e) {
    setWorkExp({ ...workExp, degree: e.target.value });
  }
  function handleStartingYearChange(e) {
    setWorkExp({ ...workExp, startingYear: e.target.value });
  }
  function handleResponsibilitiesChange(e) {
    setWorkExp({ ...workExp, gpa: e.target.value });
  }
  return (
    <div className="info">
      {'Work Experience'}
      <Input
        label="Title/Position"
        value={workExp.position == null ? '' : workExp.position}
        onChange={handlePositionChange}
      ></Input>
      <Input
        label="Workplace/Company"
        value={workExp.workplace == null ? '' : workExp.workplace}
        onChange={handleWorkplaceChange}
      ></Input>
      <Input
        label="Starting Year"
        value={workExp.startingYear == null ? '' : workExp.startingYear}
        onChange={handleStartingYearChange}
      ></Input>
      <Input
        label="Job responsibilities"
        value={workExp.responsibilities == null ? '' : workExp.responsibilities}
        onChange={handleResponsibilitiesChange}
      ></Input>
    </div>
  );
}
