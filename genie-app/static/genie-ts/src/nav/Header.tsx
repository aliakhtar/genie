import Icon from '../assets/Icon.svg';

export default function () {

    return (
        <header className="bg-jiraBlue rounded-xl py-2.5 px-10 text-white">
            <div>
                <img src={Icon} alt="Genie Logo" height={43} className="inline" />
                <span className="text-xl font-extrabold tracking-widest inline mx-2.5 my-3">GENIE</span>
            </div>
            <p className="my-5 px-5">Perform complex Jira tasks, just by telling Genie what to do.</p>
        </header>
    );



}
