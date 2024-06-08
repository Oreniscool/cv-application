/* eslint-disable react/prop-types */

import { Input, TextArea } from './Inputs';

function BasicInfo({ basicInfo, setBasicInfo }) {
  function handleFirstNameChange(e) {
    setBasicInfo({ ...basicInfo, firstName: e.target.value });
  }
  function handleLastNameChange(e) {
    setBasicInfo({ ...basicInfo, lastName: e.target.value });
  }
  function handleProfessionChange(e) {
    setBasicInfo({ ...basicInfo, profession: e.target.value });
  }
  function handleSummaryChange(e) {
    setBasicInfo({ ...basicInfo, summary: e.target.value });
  }
  return (
    <div className="info">
      <h2>{'Basic information'}</h2>
      <Input
        label="First name"
        value={basicInfo.firstName == null ? '' : basicInfo.firstName}
        onChange={handleFirstNameChange}
      ></Input>
      <Input
        label="Last name"
        value={basicInfo.lastName == null ? '' : basicInfo.lastName}
        onChange={handleLastNameChange}
      ></Input>
      <Input
        label="Profession"
        value={basicInfo.profession == null ? '' : basicInfo.profession}
        onChange={handleProfessionChange}
      ></Input>
      <TextArea
        label="Summary"
        value={basicInfo.summary == null ? '' : basicInfo.summary}
        onChange={handleSummaryChange}
      ></TextArea>
    </div>
  );
}

export default BasicInfo;
