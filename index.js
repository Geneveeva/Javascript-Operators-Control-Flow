function Subjects(classGroup) {
  const sciences = "Physics, Chemistry, Biology, Technical Drawing";
  const social = "Accounting, Commerce, Marketing, Geography";
  const arts = "Government, Economics, Literature, History";
  const general = "English, Mathematics";

  switch (classGroup) {
    case "arts":
      return general + " " + arts;
    case "sciences":
      return general + " " + sciences;
    case "social":
      return general + " " + social;
    default:
      return general;
  }
}
