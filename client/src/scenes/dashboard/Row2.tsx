import DashboardBox from "../../components/DashboardBox";

type Props = {};

const Row2 = (props: Props) => {
  return (
    <>
      <DashboardBox bgcolor={"#ffffff"} gridArea={"d"}></DashboardBox>
      <DashboardBox bgcolor={"#ffffff"} gridArea={"e"}></DashboardBox>
      <DashboardBox bgcolor={"#ffffff"} gridArea={"f"}></DashboardBox>
    </>
  );
};

export default Row2;
