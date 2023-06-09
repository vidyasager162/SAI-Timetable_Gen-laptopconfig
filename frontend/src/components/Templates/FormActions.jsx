import React from "react";

function FormActions(props) {
  return (
    <div className="text-center">
      <button className="btn btn-lg btn-primary login-button mb-0">
        Add / Save
      </button>
      <button
        type="button"
        className="btn btn-lg btn-primary login-button mb-0"
        onClick={() => {
          props.flag === "createschedule"
            ? props.action("")
            : props.action(false);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default FormActions;
