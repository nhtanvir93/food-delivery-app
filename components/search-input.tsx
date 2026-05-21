import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { View, TextInput } from "react-native";

import { COLORS } from "@/constants/theme";
import { useColorScheme } from "@/lib/useColorScheme";

const SearchInput = ({
  value = "",
  placeholder = "Type here...",
  onChangeText,
}: {
  value?: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
}) => {
  const [searchKey, setSearchKey] = useState(value);
  const { colorScheme } = useColorScheme();

  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

  useEffect(() => {
    onChangeText(searchKey);
  }, [searchKey, onChangeText]);

  return (
    <View className="flex-row items-center gap-1 rounded-xl border border-border bg-input px-3 py-1">
      <Ionicons
        name="search-outline"
        size={24}
        color={theme.textMutedForeground}
      />
      <TextInput
        className="text-lg text-foreground"
        value={searchKey}
        placeholder={placeholder}
        onChangeText={setSearchKey}
      />
    </View>
  );
};

export default SearchInput;
