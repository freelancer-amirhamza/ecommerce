import React from "react";
import Link from "next/link";

const Breadcrumb = ({ items }) => {
  return (
    <div className="text-color">
      { items.map((item, index) => (
        <span className="capitalize" key={index} >
            {items.length - 1 !== index ? (
                <>
                <Link href={item.href} >
                    {item.label}
                </Link>
                <span className="mx-2">/</span>
                </>
            ) : (
                <span className="text-title" >
                    {item.label}
                </span>
            ) }
        </span>
      ))

      }
    </div>
  );
};

export default Breadcrumb;
