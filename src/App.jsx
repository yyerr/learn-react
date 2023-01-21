import LearnFirstReact from "./components/LearnFirstReact";
import LearnForm from "./components/LearnForm";
import LearnUseRef from "./components/LearnUseRef";
import LearnUseRef2 from "./components/LearnUseRef2";
import LearnUseEffect from "./components/LearnUseEffect";
import LearnAjaxApi from "./components/LearnAjaxApi";
import LearnLocalStorage from "./components/LearnLocalStorage";
import LearnCustomHooks from "./components/LearnCustomHooks";

export default function App() {
    return (
        <div className='bg-blue-700 grid place-content-center min-h-screen'>
            <LearnCustomHooks />
            {/* <LearnAjaxApi />
            <LearnLocalStorage />
            <LearnUseEffect />
            <LearnUseRef2 />
            <LearnUseRef />
            <LearnForm />
            <LearnFirstReact /> */}
        </div>
    )
}