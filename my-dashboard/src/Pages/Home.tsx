import React, { useEffect, useState } from "react";
import { Container, Box, Flex, Text } from "@mantine/core";

interface DataItem {
  companyInfo: {
    operatingCompany: string;
    companyType: string;
    lawFirm_businessName: string;
  };
  address1: {
    type: string;
    state: string;
    city: string;
    country: string;
    zip: string;
    phone: number;
  };
  LawFirmInfo: {
    speciality: string;
    caseMangement: string;
    accountManager: string;
  };
  CompanyNotificationSettings: {
    newUserInvited: string;
    newUserAdded: string;
    paymentMethodChanged: string;
  };
}
function Home() {
  const [data, setData] = useState<DataItem[]>([]);
  //   let data: DataItem[] = Data.data;
  //   console.log(data);
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3000/data");
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container m={0} w={"70%"} style={{ textAlign: "left" }}>
      <Container style={{ borderBottom: "dashed #ADADAD" }} pb={40}>
        <h1>Company Information</h1>
        <Box>
          {data.map((ele: DataItem, index: number) => (
            <Box>
              <Flex align="left" gap={100} mt={40}>
                <Box w={"200px"}>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    Operating Company
                  </Text>
                  <Text key={index} weight={"bold"}>
                    {ele.companyInfo.operatingCompany}
                  </Text>
                </Box>
                <Box w={"200px"}>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    Company type
                  </Text>
                  <Text key={index} weight={"bold"}>
                    {ele.companyInfo.companyType}
                  </Text>
                </Box>
                <Box w={"200px"}>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    Law firm or business name
                  </Text>
                  <Text key={index} weight={"bold"}>
                    {ele.companyInfo.lawFirm_businessName}
                  </Text>
                </Box>
              </Flex>

              <Box w={"200px"} mt={20}>
                <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                  Address 1
                </Text>
                <Text weight={"bold"}>{ele.address1.type}</Text>
              </Box>

              <Flex align="left" gap={100} mt={20}>
                <Box w={"200px"}>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    State
                  </Text>
                  <Text key={index} weight={"bold"}>
                    {ele.address1.state}
                  </Text>
                </Box>

                <Box w={"200px"}>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    City
                  </Text>
                  <Text key={index} weight={"bold"}>
                    {ele.address1.city}
                  </Text>
                </Box>

                <Box w={"200px"}>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    Country
                  </Text>
                  <Text key={index} weight={"bold"}>
                    {ele.address1.country}
                  </Text>
                </Box>
              </Flex>

              <Flex align="left" gap={100} mt={20}>
                <Box style={{ textAlign: "left" }} w={"200px"}>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    Zip code
                  </Text>
                  <Text key={index} weight={"bold"}>
                    {ele.address1.zip}
                  </Text>
                </Box>

                <Box w={"200px"}>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    Phone number
                  </Text>
                  <Text key={index} weight={"bold"}>
                    {ele.address1.phone}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Box>
      </Container>

      <Container style={{ borderBottom: "dashed #ADADAD" }} pb={40}>
        <h1>Law Firm Information</h1>
        <Box>
          {data.map((ele: DataItem, index: number) => (
            <Box>
              <Flex align="left" gap={100} mt={40}>
                <Box w={"200px"}>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    Firm Speciality
                  </Text>
                  <Text key={index} weight={"bold"}>
                    {ele.LawFirmInfo.speciality}
                  </Text>
                </Box>
                <Box w={"200px"}>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    Case managment
                  </Text>
                  <Text key={index} weight={"bold"}>
                    {ele.LawFirmInfo.caseMangement}
                  </Text>
                </Box>
              </Flex>
              <Box w={"200px"} mt={20}>
                <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                  Account manager
                </Text>
                <Text key={index} weight={"bold"}>
                  {ele.LawFirmInfo.accountManager}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      <Container style={{ borderBottom: "dashed #ADADAD" }} pb={40}>
        <h1>Company notification settings</h1>
        <Box>
          {data.map((ele: DataItem, index: number) => (
            <Box>
              <Flex align="left" gap={100} mt={40}>
                <Box w={"200px"}>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    New user invited
                  </Text>
                  <Text key={index} weight={"bold"}>
                    {ele.CompanyNotificationSettings.newUserInvited}
                  </Text>
                </Box>
                <Box w={"200px"}>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    New user added
                  </Text>
                  <Text key={index} weight={"bold"}>
                    {ele.CompanyNotificationSettings.newUserAdded}
                  </Text>
                </Box>
              </Flex>
              <Box w={"200px"} mt={20}>
                <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                  Payment method changed
                </Text>
                <Text key={index} weight={"bold"}>
                  {ele.CompanyNotificationSettings.paymentMethodChanged}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Container>
  );
}

export default Home;
