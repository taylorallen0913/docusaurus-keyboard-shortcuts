import React, { Fragment } from 'react';

import './modal.css'

const Modal = ({ isModalVisible, setIsModalVisible }: any) => {
    return (
        <Fragment>
            {
                isModalVisible ?
                    <div className="card-modal-container">
                        <div className="card-modal-background" />
                        <div className="card-modal-content">
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
                                        <button onClick={() => setIsModalVisible(false)}>Hide Modal</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <button onClick={() => setIsModalVisible(true)}>Set Modal Visible</button>
            }
        </Fragment>
    )
};

export default Modal;