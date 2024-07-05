import { Icon } from "@mui/material";
import styles from "../Interest/interest.module.css";
interface data {
  text: string;
  Icon: React.ComponentType;
}

export default function InterestIcon({ text, Icon }: data) {
  return (
    <div className={styles.interestIcons}>
      <Icon />
      <p className={styles.interestText}>{text}</p>
    </div>
  );
}
