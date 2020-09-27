import React from "react";
import Style from "./style.module.css";

const RelatedInfo = (props) => {
    return (

        <aside>
            <ul className={Style.sidebar}>
                <li>{props.relInfo1}</li>
                <li>{props.relInfo2}</li>
                <b>
                    <li>{props.relInfo3}</li>
                </b>
                <li>{props.relInfo4}</li>
            </ul>
        </aside>

    )
}
export default RelatedInfo;