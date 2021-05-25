import React from "react";

function ProfileComponent({
  myinfo: { name, lastName, profession, phoneNumber, adress, bio },
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
      </div>
    </div>
  );
}

export default ProfileComponent;
