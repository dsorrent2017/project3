import React from 'react';
import { Header, Message } from "semantic-ui-react";


export const menu = () => {
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> Menu </Header>
                <p>Our Menu</p>
            </Message>
            <div classNme="menu">
                <h1>Our Menu</h1>
                <ul>
                    <h3>Salads</h3>
                    <li>

                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Ceasar</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Bruschetta</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Spinach Salad</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Meatball Sub</span>
                        </label>
                    </li>
                </ul>


                <ul>
                    <h3>Panini</h3>
                    <li>

                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Caprese Panini</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Eggplant Panini</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Grilled Chicken Panini</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Meatball Sub</span>
                        </label>
                    </li>
                </ul>
                <ul>
                    <h3>Pasta</h3>
                    <li>

                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Luiguini Marinara</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Fettucini Alfredo</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Rigatoni Bolognese</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Cheese Ravioli</span>
                        </label>
                    </li>
                </ul>

                <ul>
                    <h3>Chicken</h3>
                    <li>

                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Chicken Francese</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Chicken Alfredo</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Chicken Parmigiana</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" />
                            <span class="icon"></span>
                            <span class="list">Breaded Chicken Cutlet</span>
                        </label>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu;
