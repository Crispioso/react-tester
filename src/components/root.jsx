import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './checkbox.jsx';
import RadioGroup from './radioGroup.jsx';

const root = document.getElementById('root');

function Form() {
    return (
        <form>
            <Checkbox id="something" value="something" label="Something" />
            <RadioGroup/>
        </form>
    )
}

ReactDOM.render(
    <Form/>,
    root
);

// function getTime(offset) {
//     const date = new Date();
//
//     if (!offset) {
//         return date.toLocaleTimeString();
//     }
//
//     if (offset > 0) {
//         const dateAdd = new Date(date);
//         dateAdd.setSeconds( date.getSeconds() + offset );
//         return dateAdd.toLocaleTimeString();
//     }
//
//     if (offset < 0) {
//         const dateSub = new Date(date);
//         dateSub.setSeconds( date.getSeconds() + offset );
//         return dateSub.toLocaleTimeString();
//     }
// }
//
// function HelloTime(props) {
//     return (
//         <div>
//             <h1>{props.heading}</h1>
//             <h2>It is {props.time}.</h2>
//         </div>
//     )
// }
//
// function AllTimes() {
//     return (
//         <div>
//             <HelloTime time={getTime()} heading="Hello there :)" />
//             <HelloTime time={getTime(1)} heading="Oh em gee, future timez!" />
//             <HelloTime time={getTime(-1)} heading="Past t!mez, spookeh :'( " />
//         </div>
//     )
// }
//
// function tick() {
//     const element = <AllTimes/>;
//     ReactDOM.render(
//         element,
//         root
//     );
// }
//
// tick();
//
// setInterval(tick, 1000);

// const element = <h1>Hello</h1>;
// ReactDOM.render(
//     element,
//     root
// );