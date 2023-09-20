import { catppuccin } from "@/app/styles/colors";
import classNames from "classnames";
import { GiTwoCoins } from "react-icons/gi";

interface ITabGold {
  gold: number;
  textColor?: "dark" | "light";
}

export function TabGold({ gold, textColor = "light" }: ITabGold) {
  const textColors = {
    light: "text-ctp-subtext0",
    dark: "text-black",
  };

  return (
    <div className="flex items-center gap-1">
      <GiTwoCoins color={catppuccin.mocha.yellow} />
      <span
        className={classNames(
          "text-lg font-bold text-ctp-subtext0",
          textColors[textColor],
        )}
      >
        {gold}
      </span>
    </div>
  );
}
