import React from "react";

import SkeletonElement from "./SkeletonElement";

import "./Skeleton.css";
import Shimmer from "./Shimmer";

const SkeletonOrder = () => (
    <div className="skeletonOrder-wrapper">
        <div className="skeleton-order">
            <SkeletonElement type="orderAvatar"/>
            <SkeletonElement type="title"/>
        </div>
        <Shimmer/>
    </div>
);
export default SkeletonOrder;