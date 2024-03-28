import './HeroshotHeadings.css';

export default function HeroshotHeadings({text, id}){


    return <div id={id} className={'heroshotHeadings'}>
        {text}
    </div>
}