import { createRoot } from "react-dom/client";
import './tailwind.css';
import UserForm from "./Userform";
import HitungGajiForm from "./HitungGajiForm";    
import Tailwindcss from "./Tailwindcss";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <UserForm />
            <Tailwindcss/>
            <HitungGajiForm/>
        </div>
    );
            