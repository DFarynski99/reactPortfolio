export default function TextBox({id, title, description, onClick, cta}){
    return <div id={id}>
        <div className={'title'}>{title}</div>
        <div className={'description'}>{description}</div>
        <a className={'cta'}>
            <button onClick={onClick} className={'capabilityButton'}>{cta}</button>
        </a></div>
}