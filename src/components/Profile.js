import React from "react";

const Profile = props => (
  <div style={{ display: "inline-flex" }}>
    <img
      src={props.profile.picture}
      alt="picture"
      style={{ borderRadius: 100 }}
    />
    <p>
      <b>What they call you 'round these parts:</b> "{props.profile.nickname}"
    </p>
  </div>
);

export default Profile;
