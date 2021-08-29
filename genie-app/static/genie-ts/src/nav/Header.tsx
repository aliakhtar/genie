import Icon from '../assets/Icon.svg';
import {url} from "inspector";

export default function () {

    const logoStyle = {
        backgroundImage: Icon
    };
    return (
        <header className="bg-jiraBlue rounded-xl py-2.5 px-10 text-white">
            <div className="flex flex-row justify-start items-stretch">
                <div className="min-h-full" style={logoStyle} />
                <div className="flex flex-col">
                    <p className="text-xl font-extrabold tracking-widest inline mx-2.5">GENIE</p>
                    <p className="my-3 mx-2.5">Perform complex Jira tasks, just by telling Genie what to do.</p>
                </div>

            </div>
        </header>
    );



}
