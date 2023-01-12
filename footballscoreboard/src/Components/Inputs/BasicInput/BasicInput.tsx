import { FC, ChangeEvent } from "react";
import { Flex, Input, Text } from "@chakra-ui/react";

type BasicInputProps = {
  label: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export const BasicInput: FC<BasicInputProps> = ({ label, value, onChange }) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  };

  return (
    <Flex flexDirection="column" textAlign="center" gap={2}>
      <Input
        value={value}
        onChange={handleOnChange}
        size="md"
        placeholder={label}
      />
    </Flex>
  );
};
