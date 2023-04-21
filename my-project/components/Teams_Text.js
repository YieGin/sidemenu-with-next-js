import React from "react";
import { motion } from "framer-motion";

function Teams_Text({ Card, move, Click }) {
  return (
    <div className="mt-10">
      {Card &&
        Card.map((Items) => (
          <div className="flex gap-x-3 items-center">
            <div className="bg-black flex justify-center items-center rounded-[10px] text-white w-10 h-10">
              {Items[0]}
            </div>
            <motion.p
              animate={{ opacity: move ? 0 : 1 }}
              transition={{ delay: 0 }}
              className={Click ? "text-[0px]" : "text-[19px]"}
            >
              {Items[1]}
            </motion.p>
          </div>
        ))}
    </div>
  );
}

export default Teams_Text;
