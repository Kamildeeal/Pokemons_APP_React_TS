import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Screen } from "../navigation/screens";

interface LinkNavbarProps {
  to: keyof typeof Screen;
  onClick?: () => void;
}

const LinkNavbar = ({
  children,
  to,
  onClick,
}: React.PropsWithChildren<LinkNavbarProps>) => {
  return (
    <Link to={Screen[to]} onClick={onClick}>
      {children}
    </Link>
  );
};

export default LinkNavbar;
