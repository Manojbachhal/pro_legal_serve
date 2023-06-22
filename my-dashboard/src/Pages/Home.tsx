import React, { useEffect, useState } from "react";
import { Container, Box, Flex, Text, Button, Paper } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import DottedLine from "../Components/DottedLine";

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

  const getData = async () => {
    try {
      const res = await fetch("https://uptight-cyan-chicken.cyclic.app/data");
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
    <Container
      m={0}
      w={"100%"}
      p="20px 0px 20px 20px "
      style={{
        textAlign: "left",
        background: "#EEEADC",
        fontFamily: "Open Sans",
      }}
    >
      <Paper style={{ background: "white" }} radius="20px 0px 0px 20px">
        <Container p="20px 0px 40px 60px">
          <h1 style={{ fontSize: "25px", fontWeight: 700 }}>
            Company Information
          </h1>
          <Box>
            {data.map((ele: DataItem, index: number) => (
              <Box>
                <Flex align="left" gap={100} mt={40}>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Operating Company
                    </Text>
                    <Text key={index} fw={700}>
                      {ele.companyInfo.operatingCompany}
                    </Text>
                  </Box>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Company type
                    </Text>
                    <Text key={index} fw={700}>
                      {ele.companyInfo.companyType}
                    </Text>
                  </Box>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Law firm or business name
                    </Text>
                    <Text key={index} fw={700}>
                      {ele.companyInfo.lawFirm_businessName}
                    </Text>
                  </Box>
                </Flex>

                <Box w={"200px"} mt={20}>
                  <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                    Address 1
                  </Text>
                  <Text fw={700}>{ele.address1.type}</Text>
                </Box>

                <Flex align="left" gap={100} mt={20}>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      State
                    </Text>
                    <Text key={index} fw={700}>
                      {ele.address1.state}
                    </Text>
                  </Box>

                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      City
                    </Text>
                    <Text key={index} fw={700}>
                      {ele.address1.city}
                    </Text>
                  </Box>

                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Country
                    </Text>
                    <Text key={index} fw={700}>
                      {ele.address1.country}
                    </Text>
                  </Box>
                </Flex>

                <Flex align="left" gap={100} mt={20}>
                  <Box style={{ textAlign: "left" }} w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Zip code
                    </Text>
                    <Text key={index} fw={700}>
                      {ele.address1.zip}
                    </Text>
                  </Box>

                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Phone number
                    </Text>
                    <Text key={index} fw={700}>
                      {ele.address1.phone}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Box>
        </Container>
        <DottedLine />

        <Container p="20px 0px 40px 60px">
          <h1 style={{ fontSize: "25px", fontWeight: 700 }}>
            Law Firm Information
          </h1>
          <Box>
            {data.map((ele: DataItem, index: number) => (
              <Box>
                <Flex align="left" gap={100} mt={40}>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Firm Speciality
                    </Text>
                    <Text key={index} fw={700}>
                      {ele.LawFirmInfo.speciality}
                    </Text>
                  </Box>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Case managment
                    </Text>
                    <Text key={index} fw={700}>
                      {ele.LawFirmInfo.caseMangement}
                    </Text>
                  </Box>
                </Flex>
                <Box w={"200px"} mt={20}>
                  <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                    Account manager
                  </Text>
                  <Text key={index} fw={700}>
                    {ele.LawFirmInfo.accountManager}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
        <DottedLine />
        <Container p="20px 0px 40px 60px">
          <h1 style={{ fontSize: "25px", fontWeight: 700 }}>
            Company notification settings
          </h1>
          <Box>
            {data.map((ele: DataItem, index: number) => (
              <Box>
                <Flex align="left" gap={100} mt={40}>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      New user invited
                    </Text>
                    <Text key={index} fw={700}>
                      {ele.CompanyNotificationSettings.newUserInvited}
                    </Text>
                  </Box>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      New user added
                    </Text>
                    <Text key={index} fw={700}>
                      {ele.CompanyNotificationSettings.newUserAdded}
                    </Text>
                  </Box>
                </Flex>
                <Box w={"200px"} mt={20}>
                  <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                    Payment method changed
                  </Text>
                  <Text key={index} fw={700}>
                    {ele.CompanyNotificationSettings.paymentMethodChanged}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>

        <Flex mt={40} pb={40} justify={"end"} mr={40}>
          <Button bg={"#E4C441"} style={{ fontSize: "17px", color: "black" }}>
            Next
            <IconArrowRight size={15} />
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
}

export default Home;
