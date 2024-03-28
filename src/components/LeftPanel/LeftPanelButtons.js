export default function LeftPanelButtons({text, divID, buttonID, onClick}){
    
    return <div id={divID}>
        <button onClick={onClick} id={buttonID}>{text}</button>
    </div>
}