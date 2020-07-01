import React from 'react';

import './modal.css'

const Modal = (isModalVisible: any, setIsModalVisible: any) => {
    return (
        <div className="card-demo">
            <div className="card">
                <div className="card__header">
                    <h3>Lorem Ipsum</h3>
                </div>
                <div className="card__body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                        suspendisse ultrices gravida.
                    </p>
                </div>
                <div className="card__footer">
                    <button className="button button--secondary button--block">See All</button>
                </div>
            </div>
        </div>
    )
    // return <div><h1>Hello world 2</h1></div>
};

export default Modal;