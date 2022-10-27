import React from "react";

export default function Container(props: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className={`container ${props.className}`}>{props.children}</div>;
}
