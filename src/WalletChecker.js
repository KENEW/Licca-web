import React,{useState,useEffect} from 'react';
import fetch from "node-fetch";

function App() {

    const [wallet,setWallet]  = useState([]);
    const [user,setUser]      = useState('');
    const [cleaned,setCleaned] = useState();

    const testWallet = "0x6678eB423E5F954A8d7ab47Fa3373F9F743C1686";
    const saveWallet = async (e) =>{

        if(cleaned.includes(user)){
            console.log("You are Whitelist")
        }
        else{
            console.log("You are not Whitelist")
        }
    }
    const whitelistedWAllet = async () => {
        try{

            let allWallet = [];

            const res = await fetch('https://sheet.best/api/sheets/c4098674-7cae-4890-a1b6-ba6825b2c3b5');

            const data = await res.json();
            console.log(data);

            for (const x of Array(data.length).keys()) {
                allWallet.push(data[x].Address);
            }
        }
        catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        whitelistedWAllet();

    },[])
}
