//useState with an object
import { useState } from 'react';

function CreateUserForm() {
  const [userInfo, setUserInfo] = useState({ firstName: '', lastName: '' });
  const [submittedUser, setSubmittedUser] = useState(null); // ← new state

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedUser(userInfo); // save submitted info
  }

  function updateFirstName(event) {
    setUserInfo({ ...userInfo, firstName: event.target.value });
  }

  function updateLastName(event) {
    setUserInfo({ ...userInfo, lastName: event.target.value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            name="firstName"
            value={userInfo.firstName}
            onChange={updateFirstName}
          />
        </label>
        <label>
          Last Name
          <input
            name="lastName"
            value={userInfo.lastName}
            onChange={updateLastName}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* 👇 Show submitted user after form submit */}
      {submittedUser && (
        <p>
          Submitted: {submittedUser.firstName} {submittedUser.lastName}
        </p>
      )}
    </>
  );
}

export default CreateUserForm;
