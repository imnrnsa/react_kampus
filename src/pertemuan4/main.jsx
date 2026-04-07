import { createRoot } from "react-dom/client";
import './tailwind.css';
import ResponsiveText from "./ResponsiveText";
// import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
// import FrameworkList from "./FrameworkList";

createRoot(document.getElementById("root"))
    .render(
        <div>
           {/* <FrameworkList/> */}
            {/* <FrameworkListSearchFilter/> */}
            <ResponsiveText/>
        </div>
    );