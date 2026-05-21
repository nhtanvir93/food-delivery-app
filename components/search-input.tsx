import Ionicons from "@expo/vector-icons/Ionicons";
import {
  forwardRef,
  memo,
  type Ref,
  useImperativeHandle,
  useState,
} from "react";
import { View, TextInput } from "react-native";

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
        placeholder={placeholder}
        onChangeText={setSearchKey}
      />
    </View>
  );
};

export default memo(forwardRef(SearchInput));
