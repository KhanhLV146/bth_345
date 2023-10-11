import { useEffect,useState } from "react";
import axios from "axios";
const Covid  = () =>{

    const [dataCovid, setDataCovid] = useState([])
 useEffect ( () =>{
    let getInfor = async() => {
        let res = await axios.get('https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST')
        let data = res && res.data? res.data:[];
        setDataCovid(data)
    }
        getInfor()
 }
 ,[]);
    return(     
             <table>
                {
                    console.log("check data covid:", dataCovid)
                }
        <thead>
        <tr>
        <th>Name</th>
          <th>Death</th>
          <th>Treating</th>
          <th>New case</th>
          <th>Recover</th>


        </tr>
        </thead>
        <tbody>
            {dataCovid.detail && dataCovid.detail.length>0 &&
             dataCovid.detail.map(item =>{
                return(
                    <tr >
                    <td>{item.name}</td>
                      <td>{item.death}</td>
                      <td>{item.treating}</td>
                      <td>{item.case}</td>
                      <td>{item.recover}</td>
            
                    </tr>
                )
             })
             }

        </tbody>
        
      </table>

        )
}
export default Covid;