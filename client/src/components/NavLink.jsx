import {Link as RouterLink} from "react-router-dom";
import {Link} from "@chakra-ui/react";

export const NavLink = ({to, children}) => (
    <Link
        py={"3"}
        px={"6"}
        color={"white"}
        fontSize={"20px"}
        _hover={{
            textDecoration: "none",
            shadow: "md",
        }}
        to={to}
        shadow={"sm"}
        mx={"3"}
        as={RouterLink}
    >
        {children}
    </Link>
);
