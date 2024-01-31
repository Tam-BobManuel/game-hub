import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color =
    score > 75 ? "green" : score > 60 ? "yellow" : score > 45 ? "" : "red";
  return (
    <Badge fontSize="14px" paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;
