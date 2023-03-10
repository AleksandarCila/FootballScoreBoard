import React, { FC } from "react";

import { Flex, Text, NumberInput, NumberInputField } from "@chakra-ui/react";

type TeamScoreDisplayProps = {
  name: string;
  score: number;
  isPlayingHome: boolean;
  isEditable?: boolean;
  onChange?: React.Dispatch<React.SetStateAction<number>>;
};

export const TeamScoreDisplay: FC<TeamScoreDisplayProps> = ({
  name,
  score,
  isPlayingHome,
  isEditable = false,
  onChange,
}) => {
  const flexDirection = isPlayingHome ? "row" : "row-reverse";

  const handleChange = (valueAsString: string, valueAsNumber: number) => {
    if (onChange)
      if (isNaN(valueAsNumber)) onChange(0);
      else onChange(parseInt(valueAsString));
  };

  return (
    <Flex
      flexDirection={flexDirection}
      alignItems="center"
      justifyContent="flex-end"
      gap={5}
      mx={3}
      flex={1}
    >
      <Text fontSize="md">{name}</Text>
      {isEditable ? (
        <NumberInput
          defaultValue={0}
          value={score}
          min={0}
          onChange={handleChange}
          width="100px"
          p="0"
        >
          <NumberInputField />
        </NumberInput>
      ) : (
        <Text fontSize="l">{score}</Text>
      )}
    </Flex>
  );
};
