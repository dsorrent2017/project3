import React from 'react';
// import { Header, Message } from "semantic-ui-react";
import "./style.css"

//Dan -- Maybe use some of the code from the Menus.page in the pages folcer
export const Menu = () => {
    return (
        <>
            <div className="message-container" size="huge" secondary="true">
              
                {/* <p>Our Menu</p> */}
            </div>
            <div className="menu-food">
                <h1>Our Menu</h1>
                <ul>
                    <h3>Salads</h3>
                    <li>

                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Ceasar</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Bruschetta</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Spinach Salad</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Meatball Sub</span>
                        </label>
                    </li>
                </ul>


                <ul>
                    <h3>Panini</h3>
                    <li>

                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Caprese Panini</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Eggplant Panini</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Grilled Chicken Panini</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Meatball Sub</span>
                        </label>
                    </li>
                </ul>
                <ul>
                    <h3>Pasta</h3>
                    <li>

                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Luiguini Marinara</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Fettucini Alfredo</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Rigatoni Bolognese</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Cheese Ravioli</span>
                        </label>
                    </li>
                </ul>

                <ul>
                    <h3>Chicken</h3>
                    <li>

                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Chicken Francese</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Chicken Alfredo</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Chicken Parmigiana</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span className="icon"></span>
                            <span className="list">Breaded Chicken Cutlet</span>
                        </label>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu;
