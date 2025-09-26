import { useEffect } from "react";
import NavSection from "./components/nav.jsx"
import IntroSection from "./components/intro.jsx"
import AboutSection from "./components/about.jsx"
import WorkAreaSection from "./components/workArea.jsx"
import ContactSection from "./components/contact.jsx"
import FooterSection from "./components/footer.jsx"

function App() {
  return (
    <>
      <NavSection />
      <IntroSection />
      <AboutSection />
      <WorkAreaSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default App
