import React from "react";
import { Header, Avatar, Group, Text, Flex, Image } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
function Navbar() {
  return (
    <Header height={100} p={20} style={{ fontFamily: "Open Sans" }}>
      <Flex justify="space-between" align="center">
        <Image
          src="https://www.prolegalserve.com/wp-content/uploads/2023/02/Pro-Legal-Serve-Logo.png"
          maw={240}
          radius="md"
        />

        <Group noWrap>
          <Avatar
            src={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
            }
            size={50}
            radius="xl"
          />
          <div>
            <Flex gap={10}>
              <Text fz="xs" fw={700} style={{ fontSize: "17px" }}>
                John Deo
              </Text>
              <IconChevronDown size={16} />
            </Flex>
            <Flex>
              <Text fz="xs" fw={700} c="dimmed">
                Server
              </Text>
            </Flex>
          </div>
        </Group>
      </Flex>
    </Header>
  );
}

export default Navbar;
