import { countBy, filter } from "lodash";
import { CurrentLevelData, LevelInfo } from ".";

export const convertKeyToReadableName = (key: string) => {
  switch (key) {
    case "conditionInvest":
      return "Total Invest Value";
    case "conditionNumF1":
      return "Minimum F1s";
    case "conditionF1Level":
      return "Including minimum F1 reached level";
    case "conditionRevenue":
      return "Revenue reached value";
    default:
      break;
  }
};

export const convertValueToReadableStatus = (
  key: string,
  levelData: LevelInfo,
  currentLevelData: CurrentLevelData
) => {
  switch (key) {
    case "conditionInvest":
      return currentLevelData.totalInvestment >= levelData["conditionInvest"];

    case "conditionNumF1":
      return currentLevelData.totalF1 >= levelData["conditionNumF1"];
    case "conditionF1Level":
      return (
        filter(
          currentLevelData.f1Level,
          (o) => o.level >= levelData["conditionF1Level"]
        ).length >= levelData["conditionNumF1"]
      );
    case "conditionRevenue":
      return currentLevelData.totalRevenue >= levelData["conditionRevenue"];
    default:
      return false;
  }
};