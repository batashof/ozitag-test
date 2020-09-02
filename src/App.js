import React from 'react';
import {ReactComponent as Menu} from "./menu.svg";
import {ReactComponent as Close} from "./close.svg";
import './App.scss';

function App() {

    return (
        <div className="app">
            <div className="app__body">
                <header className="app__header">
                    <input id="burger" className="app__burger-input" type="checkbox"/>
                    <label className="app__burger-label" htmlFor="burger">
                        <Menu className="app__burger-logo"/>
                    </label>
                    <label className="app__close-label" htmlFor="burger">
                        <Close className="app__close-logo"/>
                    </label>
                    <div className="app__menu">
                        <div className="app__menu-item">
                            Элемент 1
                        </div>
                        <input id="radio1" type="radio" className="radio-input" name="radio"/>

                        <div className="app__menu-item">

                            Элемент 2
                            <label htmlFor="radio1" className="app__menu-item-arrow">
                                <i className="arrow"/>
                            </label>

                            <div className="app__dropdown-menu">
                                <div className="app__dropdown-menu-item">
                                    Элемент 2.1
                                </div>
                                <input id="radio22" type="radio" className="radio-input2" name="radio2"/>

                                <div className="app__dropdown-menu-item">
                                    Элемент 2.2
                                    <label htmlFor="radio22" className="app__menu-item-arrow">
                                        <i className="arrow"/>
                                    </label>
                                    {/*<i className="arrow"/>*/}
                                    <div className="app__dropdown-menu2">


                                        <div className="app__dropdown-menu-row">
                                            Элемент 2.2.1
                                        </div>
                                        <div className="app__dropdown-menu-row">
                                            Элемент 2.2.2
                                        </div>
                                        <div className="app__dropdown-menu-row">
                                            Элемент 2.2.3
                                        </div>
                                    </div>
                                </div>
                                <div className="app__dropdown-menu-item">
                                    Элемент 2.3
                                </div>
                                <input id="radio24" type="radio" className="radio-input2" name="radio2"/>

                                <div className="app__dropdown-menu-item">
                                    Элемент 2.4
                                    <label htmlFor="radio24" className="app__menu-item-arrow">
                                        <i className="arrow"/>
                                    </label>
                                    {/*<i className="arrow"/>*/}

                                    <div className="app__dropdown-menu2">
                                        <div className="app__dropdown-menu-row">
                                            Элемент 2.4.1
                                        </div>
                                        <div className="app__dropdown-menu-row">
                                            Элемент 2.4.2
                                        </div>
                                        <div className="app__dropdown-menu-row">
                                            Элемент 2.4.3
                                        </div>
                                        <div className="app__dropdown-menu-row">
                                            Элемент 2.4.4
                                        </div>
                                        <div className="app__dropdown-menu-row">
                                            Элемент 2.4.5
                                        </div>
                                        <div className="app__dropdown-menu-row">
                                            Элемент 2.4.6
                                        </div>
                                        <div className="app__dropdown-menu-row">
                                            Элемент 2.4.7
                                        </div>
                                    </div>
                                </div>
                                <div className="app__dropdown-menu-item">
                                    Элемент 2.5
                                </div>
                                <div className="app__dropdown-menu-item">
                                    Элемент 2.6
                                </div>

                            </div>
                            {/*<div className="app__blur"/>*/}

                        </div>
                        <div className="app__menu-item">
                            Элемент 3
                        </div>
                        <input id="radio2" type="radio" className="radio-input" name="radio"/>
                        <div className="app__menu-item">
                            Элемент 4
                            <label htmlFor="radio2" className="app__menu-item-arrow">
                                <i className="arrow"/>
                            </label>
                            <div className="app__dropdown-menu">
                                <div className="app__dropdown-menu-item">
                                    Элемент 4.1
                                </div>
                                <div className="app__dropdown-menu-item">
                                    Элемент 4.1
                                </div>
                            </div>
                            {/*<div className="app__blur"/>*/}

                        </div>
                        <div className="app__menu-item">
                            Элемент 5
                        </div>
                        <div className="app__menu-item">
                            Элемент 6
                        </div>

                    </div>



                </header>


                <div className="app__content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ante id ipsum egestas consequat
                    vitae nec sem. Integer vehicula nunc non enim gravida luctus. Aenean erat nibh, facilisis in augue
                    sed, eleifend suscipit ligula. Sed nunc elit, dictum lobortis sagittis id, placerat quis lorem.
                    Nullam id nisi non lectus congue tincidunt sit amet id mauris. Nam pellentesque sodales massa. Morbi
                    id erat sed purus molestie vestibulum. In hac habitasse platea dictumst. Nunc eu eros nulla. Ut
                    accumsan convallis egestas. Donec quis tellus consectetur eros malesuada ultricies sed at leo.
                    Vivamus rhoncus cursus orci id faucibus.
                </div>
            </div>
        </div>
    );
}

export default App;
