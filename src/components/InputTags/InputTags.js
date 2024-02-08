import React, { useEffect, useState } from 'react';
import "./InputTags.css"
const InputTags = () => {
    const [dropdownData, setDropdownData] = useState([]);
    const [serachQuerry, setSearchQuerry] = useState('')
    const [selectedData, setSelectedData] = useState([]);

    const inputHandler = (event) => {
        setSearchQuerry(event.target.value);
    }
    const selectedOptionsHandler = (data) => {
        setSearchQuerry('')
        setSelectedData([...selectedData, data]);
        setDropdownData([]);
    }
    const displayDropdownData = () => {
        return dropdownData.map((data) => <div className='option' key={data.email} onClick={() => selectedOptionsHandler(data)}>
            <img src={data.image} alt="" />
            <span>{data.firstName + " " + data.lastName}</span>
        </div>)
    }
    const deletePillsHandler = (toBeDeleted) => {
        const temp = selectedData?.filter((data) => data.email !== toBeDeleted.email)
        setSelectedData(temp);
    }
    const displayPills = () => {
        return selectedData.map((data) => <div className="tag" key={data.email}><img src={data.image} alt="demo" /><span>{data.firstName + " " + data.lastName}</span><span className='close' onClick={() => deletePillsHandler(data)}>&times;</span></div>)
    }
    const backspacePillsHandler = (event) => {
        if (serachQuerry === '' && event.key === 'backspace' && selectedData.length > 0); {
            const temp = [...selectedData];
            temp.pop();
            setSelectedData(temp);
        }
    }
    useEffect(() => {
        // console.log(serachQuerry)
        const fetchUsers = () => {
            const url = `https://dummyjson.com/users/search?q=${serachQuerry}`
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setDropdownData(data.users)
                })
                .catch((error) => console.log(error))
        }
        let timer;
        timer = setTimeout(() => {
            if (serachQuerry) {
                fetchUsers();
            }
            else setDropdownData([])
        }, 500)
        return () => {
            if (timer) clearTimeout(timer);
        }

    }, [serachQuerry])
    return <div className='input-tags-component'>
        <h1>Input Tags</h1>
        <div className="tags-container">
            {displayPills()}
            <input type="text" placeholder='Enter Skill' value={serachQuerry} onChange={inputHandler} onKeyUp={backspacePillsHandler} />
        </div>
        {
            dropdownData.length ?
                <div className="dropdown-options">
                    {displayDropdownData()}
                </div>
                : ''}
    </div>
}
// serachQuerry && dropdownData.length === 0 ? <p>No record found!</p> : serachQuerry ? <p>Loading...</p> : ''}
// 
export default InputTags;