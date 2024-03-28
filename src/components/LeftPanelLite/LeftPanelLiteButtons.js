export default function LeftPanelLiteButtons({id, buttonType, onClick}){

    return <div>
        <button id={id} onClick={onClick}>{buttonType}</button>
    </div>
}