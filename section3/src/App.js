import react, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {

  constructor(){
    super();

    this.state = {
      article:[]
    }

    
  }

  componentDidMount(){
    const url = 'https://fmpcloud.io/api/v3/stock_news?limit=50&apikey=3da6aaea4ffa4232c7ada6b09e15af62'
      axios.get(url).then((res)=>{
        console.log(res.data);
        const articles = res.data;
        const articleSelected = [...this.state.article]
        articleSelected.push(articles[0])
        // console.log(articleSelected)
          this.setState({
            article:articleSelected
          })
      })

      var elems = document.querySelectorAll('.modal');
    var instances = window.M.Modal.init(elems);
  }

  render(){
    // console.log("Article in State", this.state.article)
    // let article = this.state.article[0];
    
    const modalItem = this.state.article.map((article, i) => {
      console.log("In map", article)
      return (
          <div className="modal-content" key={i}>
            <img src={article.image} />
            <h4 style={{color:'black'}}>{article.symbol}</h4>
            <p style={{color:'black'}}>{article.text}</p>
          </div>
      )
    })

    // console.log(modalItem)
    return (
      <div className="App">
        <header className="App-header">
          {/* <h5>{this.state.temp}</h5> */}
          <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
          <div id="modal1" className="modal" >
          {modalItem}
        <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
