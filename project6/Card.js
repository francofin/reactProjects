// function Card(props){

// }

class Card extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div className="col-4">
                <div className="card" style={{width:400}}>
                    <img src={this.props.data.image} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.specialty}</h5>
                        <p className="card-text">{this.props.data.name}</p>
                        <a href="#" className="btn btn-primary">See More</a>
                    </div>
                </div>
            </div>
        )
    }

}