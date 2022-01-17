class Nav extends React.Component{
    constructor(){
        super();
    }
    

    render(){
        const navLinks = this.props.data.map((link, i)=> {
            return(<li key={i} className="nav-item active"> <a className="nav-link" href="#">{link.title}</a></li>)
        })
        console.log(navLinks)
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {navLinks}
                    </ul>
                </div>
            </nav>
        )
    }
}