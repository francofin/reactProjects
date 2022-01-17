class CitiesContainer extends React.Component{
    render(){
        const cities = this.props.data.map((city,i)=>{
            const randomImage = `https://picsum.photos/id/${400+i*4}/200/200`
            return(
                <City key={i} city={city} image={randomImage} />
            )
        })
        return(
            <div className="row">
                <div className="cities center-align">
                    {cities}
                </div>
            </div>
        )
    }
}
