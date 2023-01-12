import { FC, ChangeEvent, FocusEvent, useState } from "react";
import { Flex, Input, Text } from "@chakra-ui/react";
import { useValidate } from "./hooks";

type BasicInputProps = {
  label: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export const BasicInput: FC<BasicInputProps> = ({ label, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const { error } = useValidate(value, label);

  const handleFocusGained = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
  };

  const handleFocusLost = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  };

  return (
    <Flex
      flexDirection="column"
      textAlign="center"
      gap={2}
      onFocus={handleFocusGained}
      onBlur={handleFocusLost}
    >
      <Input
        value={value}
        onChange={handleOnChange}
        size="sm"
        placeholder={label}
      />
      {isFocused && (
        <Text color="red.300" as="i" fontSize="sm">
          {error}
        </Text>
      )}
    </Flex>
  );
};
