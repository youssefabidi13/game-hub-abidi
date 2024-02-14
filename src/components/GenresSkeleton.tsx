import React from "react";
import { List, ListItem, Skeleton, HStack } from "@chakra-ui/react";

const GenresSkeleton = () => {
  return (
    <List>
      {[1, 2, 3, 4, 5].map(
        (
          index // Assuming 5 skeleton items
        ) => (
          <ListItem key={index} paddingY="5px">
            <HStack>
              <Skeleton boxSize="32px" borderRadius={8} />
              <Skeleton width="100px" height="32px" />
            </HStack>
          </ListItem>
        )
      )}
    </List>
  );
};

export default GenresSkeleton;
