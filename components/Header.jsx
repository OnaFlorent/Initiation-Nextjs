"use client";
import React, { useContext } from "react";
import { CursorContext } from "./CursorContext";

import { motion } from "framer-motion";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.header
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="p-24"
    >
      Header
    </motion.header>
  );
};

export default Header;
