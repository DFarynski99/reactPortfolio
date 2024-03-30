import LeftPanelButtons from "./LeftPanelButtons";
import LetterD from "./LetterD";
import Socials from "./Socials";
import { useNavigate } from "react-router-dom";
export default function LeftPanel() {


  const navigate = useNavigate();

    const goToHome = () => {
        navigate("/", { state: { scrollToCapabilities: true } });
    };


    return (
    <div id={"leftPanel"}>
      <LetterD />

      <div id={"leftPanelButtonCSS"}>
        <LeftPanelButtons
          divID={"leftPanelBlogHomeDiv"}
          buttonID={"leftPanelBlogHomeButton"}
          text={"Back To Home"}
          onClick={goToHome}
        />
      </div>

      <Socials />
    </div>
  );
}
