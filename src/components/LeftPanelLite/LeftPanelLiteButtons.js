export default function LeftPanelLiteButtons({divID, id, buttonType, onClick}){

    return <div id={divID}>
        <button id={id} onClick={onClick}>{buttonType}</button>
    </div>
}