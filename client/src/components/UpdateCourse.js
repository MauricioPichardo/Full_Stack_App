import React from 'react';


export default (props) => {
  const {
    errors,
    submitText,
    elements,
    cancel,
    submit,
  } = props;

  function newCourse(event) {
    event.preventDefault();
    submit();
  }

  function noCourse(event) {
    event.preventDefault();
    cancel();
  }





  return (
      <div className="bounds course--detail">
        <h1>Create Course</h1>
        <div>
          <div>
            <h2 className="validation--errors--label">Validation errors</h2>
            <div className="validation-errors">
              <ul>
                <li>Please provide a value for "Title"</li>
                <li>Please provide a value for "Description"</li>
              </ul>
            </div>
          </div>
        <ErrorsCourse errors={errors} />
          <form onSubmit={newCourse}>

                      {elements()}
                      <div className="pad-bottom">
                      </div>
                      <div className="actions--bar">
                          <div className="bounds">
                            <div className="grid-100">
                            <button className="button" type="submit">{submitText}</button>
                            <button className="button button-secondary" onClick={noCourse}>Cancel</button>
                            </div>
                          </div>
                      </div>
          </form>
    </div>
    </div>
  );
}

function ErrorsCourse({ errors }) {
  let errorsDisplay = null;

  if (errors.length) {
    errorsDisplay = (
      <div>
        <h2 className="validation--errors--label">Validation errors</h2>
        <div className="validation-errors">
          <ul>
            {errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </div>
      </div>
    );
  }

  return errorsDisplay;
}
