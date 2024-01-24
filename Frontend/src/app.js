import react from 'react';
import reactDom from 'react-dom/client';
import { useState, useEffect } from 'react';



const Header = () => {
    var [Timer, setTimer] = useState(60);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (Timer > 0) {
                setTimer(Timer - 1);
            }
            else {
                setTimer(60);
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    })



    return (
        <div className='header'>
            <div className="title">
                <a href="/"><img src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" alt="img" width="200px" height="50px" /></a>
            </div>


            <div className="buttons">
                <select className="curr" id="curr" style={{ padding: '2px', margin: '2px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.258)', borderRadius: '10px' }}>
                    <option value="INR" >INR</option>
                </select>

                <select className="con" id="con" style={{ padding: '2px', margin: '3px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.258)', borderRadius: '10px', marginLeft: '10px' }}>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="USDT">USDT</option>
                    <option value="XRP">XRP</option>
                    <option value="TRX">TRX</option>
                    <option value="DASH">DASH</option>
                    <option value="ZEC">ZEC</option>
                    <option value="XEM">XEM</option>
                    <option value="IOST">IOST</option>
                    <option value="WIN">WIN</option>
                    <option value="BTT">BTT</option>
                    <option value="WRX">WRX</option>
                </select>

                <button type="button" className="btn" style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.258)', borderRadius: '10px', marginLeft: '10px' }}>BUY BTC</button>
            </div>


            <ul style={{ listStyleType: "none" }}>
                <li><h4 style={{ color: 'aqua', marginTop: '3px', border: '2px solid aqua', borderRadius: '50px', padding: '3px' }}>{Timer}</h4></li>
                <li><button type='button' style={{ borderRadius: "10px", marginLeft: '10px', padding: '12px', backgroundColor: 'aqua', color: 'white' }}>Connect Telegram</button></li>
                <li style={{ marginLeft: '10px' }}>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </li>
            </ul>

        </div>
    )
}
const Body = () => {
    const [json, setJson] = useState([])
    useEffect(()=>{
        getData();
    },[]);
    async function getData(){
        const data = await fetch("http://localhost:7000")
        var  json = await data.json();
        console.log(json)
        setJson(json);
    }
    //console.log(json)
    if(json.length >0){
    return (
        <>
            <h1 style={{ color: 'grey', marginTop: '-10px', textAlign: 'center', marginLeft: '-70px' }}>Best Price To Trade</h1>
            <table rules='rows'>
                
                <tr style={{color: 'grey', fontSize: '30px',fontFamily: 'sans-serif', marginLeft: '-102px'}}>
                    <td>Name</td>
                    <td>Last</td>
                    <td>Buy</td>
                    <td>Sell</td>
                    <td>Volume</td>
                    <td>Base_unit</td>
                </tr>
                <tr style={{color: 'white', fontSize: '30px',fontFamily: 'sans-serif'}}>
                    <td>{json[0].name}</td>
                    <td>{json[0].last}</td>
                    <td>{json[0].buy}</td>
                    <td>{json[0].sell}</td>
                    <td>{json[0].volume}</td>
                    <td>{json[0].base_unit}</td>
                </tr>
                <tr style={{color: 'white', fontSize: '30px',fontFamily: 'sans-serif'}}>
                    <td>{json[1].name}</td>
                    <td>{json[1].last}</td>
                    <td>{json[1].buy}</td>
                    <td>{json[1].sell}</td>
                    <td>{json[1].volume}</td>
                    <td>{json[1].base_unit}</td>
                </tr>
                <tr style={{color: 'white', fontSize: '30px',fontFamily: 'sans-serif'}}>
                    <td>{json[2].name}</td>
                    <td>{json[2].last}</td>
                    <td>{json[2].buy}</td>
                    <td>{json[2].sell}</td>
                    <td>{json[2].volume}</td>
                    <td>{json[2].base_unit}</td>
                </tr>
                <tr style={{color: 'white', fontSize: '30px',fontFamily: 'sans-serif'}}>
                    <td>{json[3].name}</td>
                    <td>{json[3].last}</td>
                    <td>{json[3].buy}</td>
                    <td>{json[3].sell}</td>
                    <td>{json[3].volume}</td>
                    <td>{json[3].base_unit}</td>
                </tr>
                <tr style={{color: 'white', fontSize: '30px',fontFamily: 'sans-serif'}}>
                    <td>{json[4].name}</td>
                    <td>{json[4].last}</td>
                    <td>{json[4].buy}</td>
                    <td>{json[4].sell}</td>
                    <td>{json[4].volume}</td>
                    <td>{json[4].base_unit}</td>
                </tr>
                <tr style={{color: 'white', fontSize: '30px',fontFamily: 'sans-serif'}}>
                    <td>{json[5].name}</td>
                    <td>{json[5].last}</td>
                    <td>{json[5].buy}</td>
                    <td>{json[5].sell}</td>
                    <td>{json[5].volume}</td>
                    <td>{json[5].base_unit}</td>
                </tr>
                <tr style={{color: 'white', fontSize: '30px',fontFamily: 'sans-serif'}}>
                    <td>{json[6].name}</td>
                    <td>{json[6].last}</td>
                    <td>{json[6].buy}</td>
                    <td>{json[6].sell}</td>
                    <td>{json[6].volume}</td>
                    <td>{json[6].base_unit}</td>
                </tr>
                <tr style={{color: 'white', fontSize: '30px',fontFamily: 'sans-serif'}}>
                    <td>{json[7].name}</td>
                    <td>{json[7].last}</td>
                    <td>{json[7].buy}</td>
                    <td>{json[7].sell}</td>
                    <td>{json[7].volume}</td>
                    <td>{json[7].base_unit}</td>
                </tr>
                <tr style={{color: 'white', fontSize: '30px',fontFamily: 'sans-serif'}}>
                    <td>{json[8].name}</td>
                    <td>{json[8].last}</td>
                    <td>{json[8].buy}</td>
                    <td>{json[8].sell}</td>
                    <td>{json[8].volume}</td>
                    <td>{json[8].base_unit}</td>
                </tr>
                <tr style={{color: 'white', fontSize: '30px',fontFamily: 'sans-serif'}}>
                    <td>{json[9].name}</td>
                    <td>{json[9].last}</td>
                    <td>{json[9].buy}</td>
                    <td>{json[9].sell}</td>
                    <td>{json[9].volume}</td>
                    <td>{json[9].base_unit}</td>
                </tr>
                
            </table>
        </>
    )}
    else{
        return (
            <h2 style={{color: 'hotpink'}}>Please Wait...</h2>
        )
    }
}
const Footer = () => {
    return (
        <>
        <h5 style={{ color: 'white' }}>Copyright &#169; 2019 &nbsp;&nbsp;HodlInfo.com</h5>
        <h5 style={{ color: 'white' ,textAlign: 'right',marginTop: '-40px'}}>Support</h5>
        <hr></hr>
        <button className='but'>Add Hodlinfo to home screen</button>
        </>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}


const root = reactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />)