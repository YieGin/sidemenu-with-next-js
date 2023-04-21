import React from "react";
import Teams_Text from "./Teams_Text";

function TeamsList({ move, Click }) {
  const MenuHeroicons = [["H", "Heroicons"]];
  const MenuTailwind = [["T", "Tailwind"]];
  const MenuWorkcation = [["W", "Workcatio"]];
  return (
    <div>
      <Teams_Text Card={MenuHeroicons} move={move} Click={Click} />
      <Teams_Text Card={MenuTailwind} move={move} Click={Click} />
      <Teams_Text Card={MenuWorkcation} move={move} Click={Click} />
    </div>
  );
}

export default TeamsList;
