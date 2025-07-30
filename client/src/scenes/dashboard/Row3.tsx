import DashboardBox from "../../components/DashboardBox";

type Props = {};

const Row3 = (props: Props) => {
  return (
    <>
      <DashboardBox bgcolor={"#ffffff"} gridArea={"g"}></DashboardBox>
      <DashboardBox bgcolor={"#ffffff"} gridArea={"h"}></DashboardBox>
      <DashboardBox bgcolor={"#ffffff"} gridArea={"i"}></DashboardBox>
      <DashboardBox bgcolor={"#ffffff"} gridArea={"j"}></DashboardBox>
    </>
  );
};

export default Row3;
