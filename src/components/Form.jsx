import React from 'react';

const Form = ({ value, setValue, handleSubmit, isLoading }) => {
    const changeValue = (event) => {
        setValue(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="app-form">
            <input
                onChange={changeValue}
                value={value}
                type="text"
                className="app-input"
                placeholder="Укажите GitHub-аккаунт"
            />
            <button className="app-form_btn" disabled={isLoading}>
                {isLoading ? 'Загрузка' : 'Найти'}
            </button>
        </form>
    );
};

export default Form;
