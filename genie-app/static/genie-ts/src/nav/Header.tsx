import Icon from '../assets/Icon.svg';

export default function () {

    return (
        <header className="bg-jiraBlue rounded-xl py-5 px-10 text-white">
            <img src={Icon} alt="Genie Logo" height={43} />
            <span>GENIE</span>
            <span>Perform complex Jira tasks, just by telling Genie what to do.</span>
        </header>
    );



}
