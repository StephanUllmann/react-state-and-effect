import { useState } from 'react';
export default function UpdatingForm() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    hobbies: {
      podcasts: false,
      biking: false,
      dnd: false,
    },
  });

  const fullName = formValues.firstName + ' ' + formValues.lastName;

  const handleFormInput = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheckboxes = (e) => {
    const hobbies = { ...formValues.hobbies, [e.target.name]: e.target.checked };
    setFormValues({ ...formValues, hobbies });
  };

  return (
    <>
      <h1 className='text-2xl mb-7'>
        Updating Forms and <em>Nested</em> Objects
      </h1>
      <form>
        <label>
          First Name:{' '}
          <input
            className='text-black'
            type='text'
            name='firstName'
            id='firstName'
            value={formValues.firstName}
            onChange={handleFormInput}
          />
        </label>
        <label>
          Last Name:{' '}
          <input
            className='text-black'
            type='text'
            name='lastName'
            id='lastName'
            value={formValues.lastName}
            onChange={handleFormInput}
          />
        </label>
        <fieldset>
          Hobbies: <br />
          <label>
            Podcasts:{' '}
            <input
              type='checkbox'
              name='podcasts'
              id='podcasts'
              checked={formValues.hobbies.podcasts}
              onChange={handleCheckboxes}
            />
          </label>
          <br />
          <label>
            Biking:{' '}
            <input
              type='checkbox'
              name='biking'
              id='podcasts'
              checked={formValues.hobbies.biking}
              onChange={handleCheckboxes}
            />
          </label>
          <br />
          <label>
            D&D:{' '}
            <input
              type='checkbox'
              name='dnd'
              id='podcasts'
              checked={formValues.hobbies.dnd}
              onChange={handleCheckboxes}
            />
          </label>
        </fieldset>
      </form>
      <p>{fullName}</p>
      {Object.entries(formValues.hobbies).map(([hobby, apply]) => {
        if (apply) return <p key={hobby}>{hobby}</p>;
      })}
    </>
  );
}
