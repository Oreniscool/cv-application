/* eslint-disable react/prop-types */
import { useState } from 'react';
import BasicInfo from './components/BasicInfo';
import ContactInfo from './components/ContactInfo';
import EducationInfo from './components/EducationInfo';
import WorkExp from './components/WorkExp';
import './App.css';
import './styles/Info.css';

function App() {
  const [person, setPerson] = useState({
    basicInfo: {},
    contactInfo: {},
    educationInfo: {},
    workExp: {},
  });
  console.log(person);
  function setBasicInfo(newBasicInfo) {
    setPerson({ ...person, basicInfo: newBasicInfo });
  }
  function setContactInfo(newContactInfo) {
    setPerson({ ...person, contactInfo: newContactInfo });
  }
  function setEducationInfo(newEducationInfo) {
    setPerson({ ...person, educationInfo: newEducationInfo });
  }
  function setWorkExp(newWorkExp) {
    setPerson({ ...person, workExp: newWorkExp });
  }
  return (
    <>
      <span className="left">
        <BasicInfo
          basicInfo={person.basicInfo}
          setBasicInfo={setBasicInfo}
        ></BasicInfo>
        <ContactInfo
          contactInfo={person.contactInfo}
          setContactInfo={setContactInfo}
        ></ContactInfo>
        <EducationInfo
          educationInfo={person.educationInfo}
          setEducationInfo={setEducationInfo}
        ></EducationInfo>
        <WorkExp workExp={person.workExp} setWorkExp={setWorkExp}></WorkExp>
      </span>
      <span className="right"></span>
    </>
  );
}

export default App;
