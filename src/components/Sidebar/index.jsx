import React from "react";

const RelatedInfo = (props) => {
    return(
        <aside>
            <ul>
                <li>{props.relInfo1}</li>
                <li>{props.relInfo2}</li>
                <b><li>{props.relInfo3}</li></b>
                <li>{props.relInfo4}</li>
            </ul>
        </aside>
    )
}
export default RelatedInfo;