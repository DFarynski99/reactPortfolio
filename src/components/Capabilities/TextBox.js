export default function TextBox({id, title, description, cta}){
    return <div id={id}>
        <div className={'title'}>{title}</div>
        <div className={'description'}>{description}</div>
        <div className={'cta'}>{cta}</div>
    </div>
}