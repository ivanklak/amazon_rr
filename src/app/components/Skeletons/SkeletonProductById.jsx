import React from "react";

import SkeletonElement from "./SkeletonElement";

import "./Skeleton.css";
import Shimmer from "./Shimmer";

const SkeletonProductById = () => (
    <div className="skeleton-productId-wrapper">
        <div className="skeleton-productId">
            <div>
                <SkeletonElement type="thumbnail"/>
            </div>
            <div>
                <SkeletonElement type="title"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
            </div>
        </div>
        <Shimmer/>
    </div>
);
export default SkeletonProductById;