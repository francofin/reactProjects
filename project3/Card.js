function Card(){
    return(
        <div className="row">
            <div className="col s2">
                <div className="card hoverable small">
                    <div className="card-image">
                        <img src="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
                    <div className="card-content">
                        <p>React From the Beginning</p>
                        <p>Robert Bunch</p>
                    </div>
                    <div className="card-action">
                        <a href="#">$9.99</a>
                    </div>
                </div>
            </div>	
        </div>
    )
}