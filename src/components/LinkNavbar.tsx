import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Screen } from "../navigation/screens";

interface LinkNavbarProps {
  to: keyof typeof Screen;
}

const LinkNavbar = ({
  children,
  to,
}: React.PropsWithChildren<{ to: keyof typeof Screen }>) => {
  return <Link to={Screen[to]}>{children}</Link>;
};

export default LinkNavbar;
