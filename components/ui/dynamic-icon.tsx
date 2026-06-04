// components/ui/dynamic-icon.tsx
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ICON_LIBS = {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
} as const;

type IconLib = keyof typeof ICON_LIBS;
type IconString = `${IconLib}:${string}`;

interface DynamicIconProps {
  icon: IconString;
  size?: number;
  color?: string;
}

export default function DynamicIcon({
  icon,
  size = 20,
  color,
}: DynamicIconProps) {
  const [lib, name] = icon.split(":") as [IconLib, string];
  const IconComponent = ICON_LIBS[lib];

  if (!IconComponent) {
    return null;
  }

  // @ts-expect-error — name is dynamic, TS can't narrow it
  return <IconComponent name={name} size={size} color={color} />;
}
