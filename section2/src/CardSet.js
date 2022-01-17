import React, {Component} from "react";
import Card from './Card';

class CardSet extends Component{
    constructor(){
        super();

        this.state = {
            requestChosen:[]
        }
    }

    handleContact = (index) => {
        // console.log(event);
        console.log(index);
        const copyOfCards = [...this.state.requestChosen];
        copyOfCards.push(this.props.cards[index])
        this.setState({requestChosen:copyOfCards})
    }


    render(){

        const savedCards = this.state.requestChosen.map((savedLang, i) => {
            return(
                <Card key={i} card={savedLang} />
            )
        })

        const cardsData = this.props.cards.map((lang, i) => {
            console.log(lang)
            return(
            <div className="col-4" key={i}>
                <div className="card">
                    <Card card={lang} />
                    <button onClick={()=>{this.handleContact(i)}} className="btn btn-success">Save</button>
                </div>
            </div>
            )
          })
        //   console.log(this.state.requestChosen)
        return(
            <div className="row">
                {cardsData}
                {savedCards}
            </div> 
        )
    }

}

export default CardSet;