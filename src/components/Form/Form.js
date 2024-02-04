import React, { useEffect, useState } from 'react';
import './Form.css'

const Form = () => {
    const [userData, setUserData] = useState([]);
    const [errorFlag, setErrorFlag] = useState(false);
    const [editFlag, setEditFlag] = useState(-1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        education: '',
        languages: [],
        gender: ''
    });
    const education = [{ value: '', text: 'Select Education' }, { value: 'ssc', text: 'SSC' }, { value: 'bsc', text: 'BSC' }, { value: 'hsc', text: 'HSC' }]
    const gender = [{ value: 'male', text: 'Male' }, { value: 'female', text: 'Female' }, { value: 'other', text: 'Other' }]
    const language = [{ value: 'javascript', text: 'JavaScript' }, { value: 'html', text: 'HTML' }, { value: 'css', text: 'CSS' }];
    const onChangesHandler = (event) => {
        if (event.target.name === 'language') {
            let temp = { ...formData };
            if (event.target.checked)
                temp.languages.push(event.target.value);
            else
                temp.languages = temp.languages.filter((item) => item !== event.target.value)
            setFormData(temp);
        }
        else {
            setFormData(() => ({
                ...formData,
                [event.target.name]: event.target.value
            }))
        }
    }
    const options = (option) => {
        switch (option) {
            case 'education':
                return education.map((item) => <option value={item.value} key={item.value}>{item.text}</option>)
            case 'gender':
                return gender.map((item) => <div className="input-container" key={item.value}>
                    <input type="radio" name="gender" value={item.value} onChange={onChangesHandler} checked={formData.gender === item.value} />
                    <label htmlFor="male">{item.text}</label>
                </div>)
            case 'language':
                return language.map((item) => <div className="input-container" key={item.value}>
                    <input type="checkbox" name="language" value={item.value} onChange={onChangesHandler} checked={formData.languages.includes(item.value)} />
                    <label htmlFor="male">{item.text}</label>
                </div>)
            default:
        }
        // return temp;
    }
    const checkEmptyValue = () => {
        let errorFlag = false;
        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                const value = formData[key];
                if (value === '' || Array.isArray(value) && value.length === 0) {
                    errorFlag = true;
                }
            }
        }
        return errorFlag;
    }
    const onSubmitHandler = (event) => {
        const reset = {
            name: '',
            email: '',
            education: '',
            languages: [],
            gender: ''
        }
        event.preventDefault();
        setErrorFlag(true)
        if (!checkEmptyValue()) {
            const temp = [...userData];
            if (editFlag === -1) {
                temp.push(formData);
                alert("Record Added Successfully")

            }
            else {
                temp[editFlag] = formData;
                setEditFlag(-1)
                alert("Record Updated Successfully")
            }
            setUserData(temp);
            setFormData(reset);
            setErrorFlag(false);

        }
        else {
            console.warn("Error")
        }
    }
    const showDetails = () => {
        return userData.map((item, index) =>
            <div className='card' key={item.email}>
                <p>Name :{item.name}</p>
                <p>Email :{item.email}</p>
                <p>Education :{item.education}</p>
                <p>Gender :{item.gender}</p>
                <p>Skills :  {item.languages.map((lang, index) => <span key={index}>{lang}{index < item.languages.length - 1 ? ',' : ''}</span>)}</p>
                <button className='edit' onClick={() => editUser(item, index)}>Edit</button>
                <button className='delete' onClick={() => deleteUser(index)}>Delete</button>
            </div>
        )
    }
    const deleteUser = (index) => {
        let tempUser = [...userData];
        tempUser.splice(index, 1);
        setUserData(tempUser)
        alert("Record Deleted Successfully")
    }
    const editUser = (user, index) => {
        setEditFlag(index)
        setFormData(user);
    }
    useEffect(() => {
        console.log(userData)
    }, [userData])
    return <div className='form-container'>
        <form action="submit">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={formData.name} onChange={onChangesHandler} />
                {formData.name === '' && errorFlag ? <p className='error'>Please enter name</p> : ''}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={formData.email} onChange={onChangesHandler} />
                {formData.email === '' && errorFlag ? <p className='error'>Please enter email</p> : ''}
            </div>
            <div className="form-group">
                <label htmlFor="education">Education</label>
                <select name="education" value={formData.education} onChange={onChangesHandler} >
                    {options('education')}
                </select>
                {formData.education === '' && errorFlag ? <p className='error'>Please select education</p> : ''}
            </div>
            <div className="form-group">
                <label htmlFor="gender">Select Gender</label>
                {options('gender')}
                {formData.gender === '' && errorFlag ? <p className='error'>Please select gender</p> : ''}

            </div>
            <div className="form-group">
                <label htmlFor="gender">Select Language</label>
                {options('language')}
                {formData.languages.length === 0 && errorFlag ? <p className='error'>Please select atleast one language</p> : ''}


            </div>
            <button onClick={onSubmitHandler}>Submit</button>
        </form>
        <div className="show-details-container">
            {showDetails()}
        </div>
    </div>
}

export default Form;