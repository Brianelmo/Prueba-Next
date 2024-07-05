import HeaderProfile from "./Header/Header";
import style from "./page.module.css";
import AboutSection from "./AboutMe/AboutMe";
import Interest from "./Interest/Interest";
import ContactMe from "./Contact/ContactMe";

export default function Home() {
  return (
    <main className={style.main}>
      <HeaderProfile />
      <section className={style.aboutMeq}>
        <AboutSection />
      </section> 
      <section className={style.interestSection}>
        <Interest/>
      </section> 

      <section>
        <ContactMe/>
      </section>
    </main>
  );
}
