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
    <Flex flexDirection={flexDirection} gap={2} mx={3}>
      <Text>{name}</Text>
      {isEditable ? (
        <NumberInput
          defaultValue={0}
          value={score}
          min={0}
          onChange={handleChange}
        >
          <NumberInputField />
        </NumberInput>
      ) : (
        <Text>{score}</Text>
      )}
    </Flex>
  );
};
