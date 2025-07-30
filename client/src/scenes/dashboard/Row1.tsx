import DashboardBox from "../../components/DashboardBox";
import { useGetKpisQuery } from "../../state/api";

type Props = {};

const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  return (
    <>
      <DashboardBox bgcolor={"#ffffff"} gridArea={"a"}></DashboardBox>
      <DashboardBox bgcolor={"#ffffff"} gridArea={"b"}></DashboardBox>
      <DashboardBox bgcolor={"#ffffff"} gridArea={"c"}></DashboardBox>
    </>
  );
};

export default Row1;
