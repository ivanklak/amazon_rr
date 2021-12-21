import React from "react";

import SkeletonElement from "./SkeletonElement";

import "./Skeleton.css";
import Shimmer from "./Shimmer";

const SkeletonProduct = () => (
    <div className="skeleton-wrapper">
        <div className="skeleton-product">
            <SkeletonElement type="title"/>
            <SkeletonElement type="thumbnail"/>
            <SkeletonElement type="title"/>
        </div>
        <Shimmer/>
    </div>
);
export default SkeletonProduct;