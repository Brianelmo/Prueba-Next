import InterestIcon from "../components/InterestIcon";
import CodeIcon from "@mui/icons-material/Code";
import BookIcon from "@mui/icons-material/Book";
import AudiotrackRoundedIcon from "@mui/icons-material/AudiotrackRounded";
import AirplanemodeActiveRoundedIcon from "@mui/icons-material/AirplanemodeActiveRounded";
import DirectionsRunRoundedIcon from "@mui/icons-material/DirectionsRunRounded";
import styles from "./interest.module.css";

export default function Interest() {
  return (
    <div>
      <h2>User Interest</h2>
      <div className={styles.interesDiv}>
        <InterestIcon text="Coding" Icon={CodeIcon} />
        <InterestIcon text="Reading" Icon={BookIcon} />
        <InterestIcon text="Music" Icon={AudiotrackRoundedIcon} />
        <InterestIcon text="Travel" Icon={AirplanemodeActiveRoundedIcon} />
        <InterestIcon text="Running" Icon={DirectionsRunRoundedIcon} />
      </div>
    </div>
  );
}
