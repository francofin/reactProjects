import React, {useState, useEffect} from 'react';
import "./SearchBox.css";
import useControlledInput from '../../customHooks/useControlledInput';


function SearchBox(props) {

    // const [where, changeWhere] = useState("")
    // const [checkIn, changeCheckIn] = useState('')
    // const [checkOut, changeCheckOut] = useState('')
    // const [guests, changeGuests] = useState(1)

    const where = useControlledInput('')
    const checkIn = useControlledInput('')
    const checkOut = useControlledInput('')
    const guests = useControlledInput(1)


    const submitSearch = (e) =>{
        e.preventDefault();
        props.history.push(`/search/${where.value}`)
    }

    return(
        <div className="home-search-box col m4">
            <h1>
                Where In the Metaverse Would You Like to Go
            </h1>
            <form className='search-box-form' onSubmit={submitSearch}>
                <div className="col m12">
                    <div className="form-label">Where</div>
                    <div className="input-field" id="where">
                        {/* <input onChange={(e)=>changeWhere(e.target.value)} type="text" placeholder="choose location" value={where}/> */}
                        <input {...where} type="text" placeholder="choose location" />
                    </div>
                </div>
                <div className="col m6">
                    <div className="form-label">Check In</div>
                    <div className="input-field" id="where">
                        {/* <input onChange={(e)=>changeCheckIn(e.target.value)} type="date" placeholder='date' value={checkIn}/> */}
                        <input {...checkIn} type="text" placeholder="choose location" />
                    </div>
                </div>
                <div className="col m6">
                    <div className="form-label">Check Out</div>
                    <div className="input-field" id="where">
                        {/* <input onChange={(e)=>changeCheckOut(e.target.value)} type="date" placeholder='date' value={checkOut}/> */}
                        <input {...checkOut} type="text" placeholder="choose location" />
                    </div>
                </div>
                <div className="col m12">
                    <div className="form-label">Number of Guests</div>
                    <div className="input-field" id="where">
                        {/* <input onChange={(e)=>changeGuests(e.target.value)} type="number" placeholder="how many people" value={guests}/> */}
                        <input {...guests} type="text" placeholder="choose location" />
                    </div>
                </div>
                <div className="col m12 submit-btn">
                    <div className="input-field" id="submit-btn">
                        <input className="btn-large waves-effect waves-light red accent-2" type="submit"/>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default SearchBox;