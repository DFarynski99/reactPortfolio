export default function ProjectCards({className, id, youtubeEmbedLink, projectTitle, projectDescription, projectGitHub, projectWebsite, websiteStatus}){

    // Determine the text based on the card id and websiteStatus
    let websiteText = websiteStatus; // Default text
    if (id === 'cardFive' && websiteStatus === 'Local Host Only') {
        websiteText = 'Closed Source'; // Change the text for the fifth card
    }

    return <div className={className} id={id}>

        <iframe src={youtubeEmbedLink} className={'projectCardVideo'}></iframe>
        <div className={'projectCardTitle'}>{projectTitle}</div>
        <div className={'projectCardDescription'}>{projectDescription}</div>
        <a className={'projectCardGitHub'} href={projectGitHub}>Github</a>
        {/* Use the websiteText variable for conditional rendering */}
        {
            websiteStatus === 'Local Host Only' ?
                (
                    // Display as non-clickable text based on condition
                    <span id='localHost'>{websiteText}</span>
                ) :
                (
                    // Display as clickable link otherwise
                    <a className={'projectCardWebsite'} href={projectWebsite} target="_blank" rel="noopener noreferrer">{websiteText}</a>
                )
        }
    </div>;
}
