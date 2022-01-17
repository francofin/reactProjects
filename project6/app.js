// ReactDOM.render here

let cards = data.map((lang, i)=> {
    return(<Card key={i} data = {lang} />)
})
console.log(cards)

ReactDOM.render(
    <div className="row">
        {/* <Card data={data[0]} />
        <Card data={data[1]} />
        <Card data={data[2]} />
        <Card data={data[3]} />
        <Card data={data[4]} />
        <Card data={data[5]} /> */}
        {cards}
    </div>,
    document.getElementById('root')
)