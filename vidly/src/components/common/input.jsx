import React from 'react';

const Input = ({label, onChange, value, type, name, errors}) => {
    return (
    <div className="form-group">
        <label htmlFor="">{label}</label>
        <input type={type} className="form-control" name={name} onChange={onChange} value={value} />
        {errors && <div className="alert alert-danger">{errors}</div> }
    </div>
    );
}
 
export default Input;