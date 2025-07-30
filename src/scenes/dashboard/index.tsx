import { Box, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {};

const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"`;

const gridTemplateSmallScreens = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"`;
const Dashboard = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { palette } = useTheme();
  return (
    <Box
      width={"100%"}
      height="100%"
      display={"grid"}
      gap={"1.5rem"}
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridTemplateColumns: "1fr",
              gridTemplateRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Box bgcolor={"#ffffff"} gridArea={"a"}></Box>
      <Box bgcolor={"#ffffff"} gridArea={"b"}></Box>
      <Box bgcolor={"#ffffff"} gridArea={"c"}></Box>
      <Box bgcolor={"#ffffff"} gridArea={"d"}></Box>
      <Box bgcolor={"#ffffff"} gridArea={"e"}></Box>
      <Box bgcolor={"#ffffff"} gridArea={"f"}></Box>
      <Box bgcolor={"#ffffff"} gridArea={"g"}></Box>
      <Box bgcolor={"#ffffff"} gridArea={"h"}></Box>
      <Box bgcolor={"#ffffff"} gridArea={"i"}></Box>
      <Box bgcolor={"#ffffff"} gridArea={"j"}></Box>
    </Box>
  );
};

export default Dashboard;
