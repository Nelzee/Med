import {
  Modal,
  useModal,
  Button,
  Text,
  Checkbox,
  Grid,
} from "@nextui-org/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../api/axios";

export default function App() {
  const { setVisible, bindings } = useModal();
  const [organs, setOrgans] = useState([]);

  const userLogin = useSelector((state) => state.userLogin);
  const {
    response: { _id },
  } = userLogin;

  const handleSubmit = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    await axios.post("/api/users/organs", { id: _id, organs }, config);
    console.log(organs);
    setVisible(false);
  };
  return (
    <div>
      <Button auto shadow color="secondary" onClick={() => setVisible(true)}>
        Select Organs
      </Button>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Select Organs
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container gap={2}>
            <Checkbox.Group
              label="Select Organs"
              color="secondary"
              value={organs}
              onChange={setOrgans}
            >
              <Grid xl={6}>
                <Checkbox value="kidney">Kidney</Checkbox>
                <Checkbox value="skin">Skin</Checkbox>
                <Checkbox value="bone">Bone</Checkbox>
                <Checkbox value="bone-marrow">Bone Marrow</Checkbox>
                <Checkbox value="umbilical-cord-blood">
                  Umbilical Cord Blood
                </Checkbox>
                <Checkbox value="amnion">Amnion</Checkbox>
              </Grid>
              <Grid xl={6}>
                <Checkbox value="blood">Blood</Checkbox>
                <Checkbox value="liver-lobe">Liver Lobe</Checkbox>
                <Checkbox value="lung">Lung</Checkbox>
                <Checkbox value="part-of-pancreas">Part Of Pancreas</Checkbox>
                <Checkbox value="part-of-intestine">Part Of Intestine</Checkbox>
              </Grid>
            </Checkbox.Group>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button auto onClick={handleSubmit}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
