import {
  Modal,
  useModal,
  Button,
  Text,
  Checkbox,
  Grid,
} from "@nextui-org/react";
import { useState } from "react";

export default function App() {
  const { setVisible, bindings } = useModal();
  const [selected, setSelected] = useState(["buenos-aires", "sydney"]);
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
            <Grid>
              <Checkbox.Group
                label="Select cities (controlled)"
                color="secondary"
                value={selected}
                onChange={setSelected}
              >
                <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                <Checkbox value="auckland">Auckland</Checkbox>
                <Checkbox value="sydney">Sydney</Checkbox>
              </Checkbox.Group>
            </Grid>
            <Grid>
              <Checkbox.Group
                label="Select cities (uncontrolled)"
                defaultValue={["buenos-aires", "auckland"]}
              >
                <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                <Checkbox value="auckland">Auckland</Checkbox>
                <Checkbox value="sydney">Sydney</Checkbox>
              </Checkbox.Group>
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button auto onClick={() => setVisible(false)}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
