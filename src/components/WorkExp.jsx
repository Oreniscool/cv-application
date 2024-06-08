/* eslint-disable react/prop-types */
import { Input } from './Inputs';

export default function WorkExp({ workExp, setWorkExp }) {
  function handlePositionChange(e) {
    setWorkExp({ ...workExp, position: e.target.value });
  }
  function handleWorkplaceChange(e) {
    setWorkExp({ ...workExp, workplace: e.target.value });
  }
  function handleStartingYearChange(e) {
    setWorkExp({ ...workExp, startingYear: e.target.value });
  }
  function handleResponsibilitiesChange(e) {
    setWorkExp({ ...workExp, responsibilities: e.target.value });
  }
  return (
    <div className="info">
      <h2>{'Work Experience'}</h2>
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
        type="date"
      ></Input>
      <Input
        label="Job responsibilities"
        value={workExp.responsibilities == null ? '' : workExp.responsibilities}
        onChange={handleResponsibilitiesChange}
      ></Input>
    </div>
  );
}
