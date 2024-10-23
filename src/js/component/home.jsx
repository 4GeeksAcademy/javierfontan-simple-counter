import React from "react";

import Card from "./Card";
import CardClock from "./CardClock";


//create your first component


const Home = ({ one, two, three, four, five, six }) => {

    let digits = [
        { title: six % 10 },
        { title: five % 10 },
        { title: four % 10 },
        { title: three % 10 },
        { title: two % 10 },
        { title: one % 10 }

    ]
    return (
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col">
                    <CardClock />
                </div>
                {digits.map((value, _index) => {
                    return (
                        <div className="col">
                            <Card title={value.title} />
                        </div>)
                })}
            </div>
        </div>
    );
};

export default Home;