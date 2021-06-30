import "./App.css";
import ProfileComponent from "./profile/ProfileComponent";
import { myinfo } from "./profile/myInformations";

function App() {
  const handleName = (a) => {
    alert(a);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      <ProfileComponent myinfo={myinfo} myFunction={handleName}>
        <img
          src="http://www.collegedomigban.org/public/img/avatars.png"
          alt="photo de profile"
          style={{ width: "41%", height: "70%", padding: "0 5% 0 2%" }}
        />
      </ProfileComponent>
    </div>
  );
}

export default App;
