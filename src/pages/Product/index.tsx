import React, {FC} from "react";
import {RouteComponentProps} from "react-router-dom";

interface IProductProps {
    id: string;
}

const Product: FC<RouteComponentProps<IProductProps>> = props => {

    console.log(props);

    return (
        <div>
            Product {props.match.params.id}
        </div>
    );
};

export default Product;