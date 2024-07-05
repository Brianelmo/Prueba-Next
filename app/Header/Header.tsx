import styles from './header.module.css'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import ToggleMode from '../components/ToggleMode';

export default function HeaderProfile() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerInfo}>
        <AccountCircleRoundedIcon sx={{fontSize: 90}}/>
        <div className={styles.userInfo}>
          <div className={styles.userName}>John Doe</div>
          <div className={styles.userSubtitle}>Software Engineer</div>
        </div>
            
        </div>
        <div className={styles.darkMode}> 
        <ToggleMode/>
        </div>
      </header>
    </div>
  );
}
