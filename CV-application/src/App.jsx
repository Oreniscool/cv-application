/* eslint-disable react/prop-types */
import { useState } from 'react';
import classNames from 'classnames';
import BasicInfo from './components/BasicInfo';
import ContactInfo from './components/ContactInfo';
import EducationInfo from './components/EducationInfo';
import WorkExp from './components/WorkExp';
import CVTemplate from './components/CVTemplate';
import './App.css';
import './styles/Info.css';

function App() {
  const [cvClasses, setCvClasses] = useState(classNames('hidden', 'cv'));
  const [person, setPerson] = useState({
    basicInfo: {},
    contactInfo: {},
    educationInfo: {},
    workExp: {},
  });
  function handleBack() {
    setCvClasses(classNames('hidden', 'cv'));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(person);
    setCvClasses('cv');
  }
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
      <form className="left" onSubmit={handleSubmit}>
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
        <input type="submit" value="Submit CV" className="submit" />
      </form>
      <CVTemplate
        person={person}
        classes={cvClasses}
        handleBack={handleBack}
      ></CVTemplate>
    </>
  );
}

export default App;
