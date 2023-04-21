import React from "react";
import team from "./icons/team.svg";
import project from "./icons/folder.svg";
import calendar from "./icons/calendar.svg";
import document from "./icons/document.svg";
import reports from "./icons/reports.svg";
import home from "./icons/home.svg";
import Sidebar_Text from "./Sidebar_Text";

function SidebarList({ Click, move }) {
  const MenuHome = [[home, "Home"]];
  const MenuTeam = [[team, "team"]];
  const MenuProject = [[project, "Project"]];
  const MenuCalendar = [[calendar, "Calendar"]];
  const MenuDocument = [[document, "Document"]];
  const MenuReports = [[reports, "Reports"]];
  return (
    <div>
      <Sidebar_Text Click={Click} move={move} Card={MenuHome} />
      <Sidebar_Text Click={Click} move={move} Card={MenuTeam} />
      <Sidebar_Text Click={Click} move={move} Card={MenuProject} />
      <Sidebar_Text Click={Click} move={move} Card={MenuCalendar} />
      <Sidebar_Text Click={Click} move={move} Card={MenuDocument} />
      <Sidebar_Text Click={Click} move={move} Card={MenuReports} />
    </div>
  );
}

export default SidebarList;
