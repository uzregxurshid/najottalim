import {useEffect, useState} from "react";

const Datahook = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}?albumId=1`)
            .then(response => response.json())
            .then(data=>setData(data.slice(0,6)))

    }, [])
    return data;
};

export default Datahook;