function Card(props) {
    console.log(props);
    return (
            <div className="col-6">
                <div className="card" style={{width:400}}>
                    <img src={props.data.image} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.specialty}</h5>
                        <p className="card-text">{props.data.name}</p>
                        <a href="#" className="btn btn-primary">See More</a>
                    </div>
                </div>
            </div>
    )
}