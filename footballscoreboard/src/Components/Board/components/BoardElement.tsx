import { FC, ReactNode } from "react";
import { Flex, Text } from "@chakra-ui/react";

type BoardElementProps = {
  title: string;
  children: ReactNode;
};

export const BoardElement: FC<BoardElementProps> = ({ title, children }) => {
  return (
    <Flex flexDirection="column">
      <Text>{title}</Text>
      {children}
    </Flex>
  );
};
