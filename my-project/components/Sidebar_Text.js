import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Sidebar_Text({ move, Card }) {
  return (
    <div className="flex-row">
      {Card &&
        Card.map((CardList) => (
          <>
            <div
              className={
                move
                  ? "gap-x-3 flex mt-10"
                  : "justify-center items-center gap-x-3 flex mt-10"
              }
            >
              <Image
                className={move ? "w-9 h9" : "w-8 h-8"}
                src={CardList[0]}
              />
              <motion.p
                animate={{ opacity: move ? 0 : 1 }}
                transition={{ delay: 0 }}
                className="w-20 text-lg font-medium text-black"
              >
                {CardList[1]}
              </motion.p>
            </div>
          </>
        ))}
    </div>
  );
}

export default Sidebar_Text;
