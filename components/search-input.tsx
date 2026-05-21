import Ionicons from "@expo/vector-icons/Ionicons";
import { memo, useState } from "react";
import { View, TextInput } from "react-native";

const SearchInput = ({
  placeholder = "Type here...",
}: {
  placeholder?: string;
}) => {
  const [searchKey, setSearchKey] = useState("");

  return (
    <View className="flex-row items-center gap-1 rounded-xl border border-border bg-input px-3 py-1">
      <Ionicons
        className="text-muted-foreground"
        name="search-outline"
        size={24}
      />
      <TextInput
        className="flex-1 text-lg text-foreground"
        placeholder={placeholder}
        onChangeText={setSearchKey}
      />
    </View>
  );
};

export default memo(SearchInput);
