import React from "react";
import { Dropdown, Text } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

export default function App({ cred }) {
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const handleLogout = () => {
    console.log("logout");
    dispatch(logout());
  };

  switch (selectedValue) {
    case "logout":
      handleLogout();
      break;

    default:
      break;
  }

  console.log(selectedValue);
  return (
    <Dropdown>
      <Dropdown.Button flat color="primary" css={{ tt: "capitalize" }}>
        {cred.name}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="profile" css={{ height: "$18" }}>
          <Text b color="inherit" css={{ d: "flex" }}>
            Signed in as
          </Text>
          <Text b color="inherit" css={{ d: "flex" }}>
            {cred.email}
          </Text>
        </Dropdown.Item>
        <Dropdown.Item key="settings" withDivider>
          My Settings
        </Dropdown.Item>
        <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
        <Dropdown.Item key="analytics" withDivider>
          Analytics
        </Dropdown.Item>
        <Dropdown.Item key="system">System</Dropdown.Item>
        <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
        <Dropdown.Item key="help_and_feedback" withDivider>
          Help & Feedback
        </Dropdown.Item>
        <Dropdown.Item key="logout" color="error" withDivider>
          Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
