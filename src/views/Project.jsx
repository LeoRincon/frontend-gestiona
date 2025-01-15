import InitialSidebar from "./components/InitialSidebar";
import InitialView from "./components/InitialView";
import { welcomeTexts } from "../utils/const";

import "./project.css";

export default function Project() {
  const { title, descriptions } = welcomeTexts;


  return (
    <div className="container">
      <InitialSidebar />
      <InitialView
        title={title}
        descriptions={descriptions}
      />
    </div>
  );
}
