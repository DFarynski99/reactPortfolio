export default function FooterElements({divID, buttonID, buttonName, onClick}) {
  return (
    <div id={divID}>
      <button id={buttonID} onClick={onClick}>{buttonName}</button>
    </div>
  );
}
