import React from "react";
import PropTypes from "prop-types";

function ProfileComponent({
  myinfo: { name, lastName, profession, phoneNumber, adress, bio },
  myFunction,
  children,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border: "2px solid blue",
        borderRadius: "1rem",
        width: "30%",
        padding: "1%",
      }}
    >
      {children}
      <div
        style={{
          diplay: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h1>
          {name} {lastName}
        </h1>
        <p>
          <b>Profession :</b> {profession}
        </p>
        <p>
          <b>Phone:</b> {phoneNumber}
        </p>
        <p>
          <b>Adress:</b> {adress}
        </p>
        <p>
          <b>Bio:</b> {bio}
        </p>
        <button
          onClick={() => myFunction(name)}
          style={{
            backgroundColor: "white",
            border: "1px solid green",
            borderRadius: "1rem",
            padding: "3% 8%",
            cursor: "pointer",
            color: "#00468B",
          }}
        >
          Display Profile Name
        </button>
      </div>
    </div>
  );
}

ProfileComponent.defaultProps = {
  myinfo: {
    name: "undefined",
    lastName: "undefined",
    profession: "undefined",
    phoneNumber: "undefined",
    adress: "undefined",
    bio: "undefined",
  },
  myFunction: () => {
    alert("The function doesn't exist");
  },
};
ProfileComponent.propTypes = {
  myinfo: PropTypes.objectOf(PropTypes.string),
};

export default ProfileComponent;
