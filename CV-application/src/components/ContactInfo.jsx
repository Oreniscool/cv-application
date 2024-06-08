/* eslint-disable react/prop-types */
import { Input } from './Inputs';

export default function ContactInfo({ contactInfo, setContactInfo }) {
  function handleEmailChange(e) {
    setContactInfo({ ...contactInfo, email: e.target.value });
  }
  function handlePhoneChange(e) {
    setContactInfo({ ...contactInfo, phone: e.target.value });
  }
  function handleAddressChange(e) {
    setContactInfo({ ...contactInfo, address: e.target.value });
  }
  function handleWebsiteChange(e) {
    setContactInfo({ ...contactInfo, website: e.target.value });
  }
  return (
    <div className="info">
      <h2>{'Contact information'}</h2>
      <Input
        label="Email"
        value={contactInfo.email == null ? '' : contactInfo.email}
        onChange={handleEmailChange}
        placeholder="xyz@abc.com"
        type="email"
      ></Input>
      <Input
        label="Phone Number"
        value={contactInfo.phone == null ? '' : contactInfo.phone}
        onChange={handlePhoneChange}
        type="tel"
        placeholder="420 420 6969"
        pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
      ></Input>
      <Input
        label="Address"
        value={contactInfo.address == null ? '' : contactInfo.address}
        onChange={handleAddressChange}
      ></Input>
      <Input
        label="Website"
        value={contactInfo.website == null ? '' : contactInfo.website}
        onChange={handleWebsiteChange}
      ></Input>
    </div>
  );
}
