import { countBy, filter } from "lodash";
import { CurrentLevelData, LevelInfo } from ".";

export const convertKeyToReadableName = (key: string, level: number) => {
  switch (key) {
    case "conditionInvest":
      return "Total Invest Value";
    case "conditionNumF1":
      return "Minimum F1s";
    case "conditionF1Level":
      return `Including minimum F1 reached to level ${
        level - 1 < 0 ? 0 : level - 1
      }`;
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

export const convertValueToReadable = (
  key: string,
  levelData: LevelInfo,
  currentLevelData: CurrentLevelData
) => {
  switch (key) {
    case "conditionInvest":
      return Number(currentLevelData.totalInvestment).toFixed();

    case "conditionNumF1":
      return Number(currentLevelData.totalF1).toFixed();
    case "conditionF1Level":
      return filter(
        currentLevelData.f1Level,
        (o) => o.level >= levelData["conditionF1Level"]
      ).length;
    case "conditionRevenue":
      return Number(currentLevelData.totalRevenue).toFixed();
    default:
      return false;
  }
};
