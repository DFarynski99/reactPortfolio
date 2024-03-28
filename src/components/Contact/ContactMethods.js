export default function ContactMethods({id, img, message, link}){

    return <div id={id} className={'contactMethods'}>
        <img src={img}/><a className={id} href={link}>{message}</a>


    </div>
}