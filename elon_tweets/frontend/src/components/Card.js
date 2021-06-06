
export default function Card(props){
    return(
        <div className="card">
            <h1>{props.title}</h1>
            <h2>{props.info}</h2>
        </div>
    )
}