import Ionicons from "@expo/vector-icons/Ionicons";
import {
  forwardRef,
  memo,
  type Ref,
  useImperativeHandle,
  useState,
} from "react";
import { View, TextInput, Pressable } from "react-native";

import { COLORS } from "@/constants/theme";
import { useColorScheme } from "@/lib/useColorScheme";

export interface SearchInputType {
  getValue: () => string;
  clear: () => void;
}

const SearchInput = (
  {
    placeholder = "Type here...",
  }: {
    placeholder?: string;
  },
  ref: Ref<SearchInputType>,
) => {
  const [searchKey, setSearchKey] = useState("");

  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

  useImperativeHandle(
    ref,
    () => ({
      getValue: () => searchKey,
      clear: () => setSearchKey(""),
    }),
    [searchKey],
  );

  return (
    <View className="flex-row items-center gap-1 rounded-xl border border-border bg-input px-3">
      <Ionicons
        className="text-muted-foreground"
        name="search-outline"
        size={24}
      />
      <TextInput
        className="flex-1 tracking-wide text-black"
        value={searchKey}
        placeholder={placeholder}
        onChangeText={setSearchKey}
      />
      {searchKey.length > 0 && (
        <Pressable onPress={() => setSearchKey("")}>
          <Ionicons
            name="close-circle-outline"
            size={24}
            color={theme.destructive}
          />
        </Pressable>
      )}
    </View>
  );
};

export default memo(forwardRef(SearchInput));
