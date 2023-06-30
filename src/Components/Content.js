import React, { useState } from "react";
import "./Content.css";


const TreeName = ({name}) => (
    <h2><b>{name ? `Вы ввели название ${name}.` : 'Введите свой запрос.'}</b></h2>
);
function Output(props) {
    const newItem = props.list.filter((newVal) =>  newVal.name === props.val);
    if (newItem.length != 0) {
        return (
            <div className='output'>
            <p>{newItem[0].discr}</p>
            <div className="block"><img src={newItem[0].img} /></div>
            </div>
        );
    } else {
        return(<div className="block">Такого дерева не существует!</div>);
    }
};
function NameForm(props) {
    const [name, change] = React.useState('');

    const handleChange = (event) => {
        change(event.target.value);
    }

    return (
        <form>
            <label>
                Название:
                <input type="text" value={name} onChange={(e) => handleChange(e)} />
            </label>
            <br />
            <TreeName name={name} />
            <Output val = {name} list = {props.list}/>
        </form>
    );
}
const Content = (props) => {
        return (
            <NameForm list={props.list}/>
        )
    }
export default Content;