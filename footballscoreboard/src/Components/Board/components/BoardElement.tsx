import { FC, ReactNode } from "react";
import { Divider, Flex, Text } from "@chakra-ui/react";

type BoardElementProps = {
  title: string;
  children: ReactNode;
};

export const BoardElement: FC<BoardElementProps> = ({ title, children }) => {
  return (
    <Flex flexDirection="column" textAlign="center" p="5">
      <Text fontSize="2xl">{title}</Text>
      <Divider my="5"/>
      {children}
    </Flex>
  );
};
