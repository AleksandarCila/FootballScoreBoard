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
      gap={2}
      mx={3}
      flex={1}
    >
      <Text>{name}</Text>
      {isEditable ? (
        <NumberInput
          defaultValue={0}
          value={score}
          min={0}
          onChange={handleChange}
          width="50px"
        >
          <NumberInputField />
        </NumberInput>
      ) : (
        <Text>{score}</Text>
      )}
    </Flex>
  );
};
