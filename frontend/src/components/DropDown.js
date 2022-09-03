import React from "react";
import { Dropdown, Text } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import { Navigate, useNavigate } from "react-router-dom";

export default function App({ cred }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const handleLogout = () => {
    navigate("/");
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
            Signed in with
          </Text>
          <Text b color="inherit" css={{ d: "flex" }}>
            {cred.email}
          </Text>
        </Dropdown.Item>

        <Dropdown.Item key="logout" color="error" withDivider>
          Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
