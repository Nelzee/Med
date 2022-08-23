import { Modal, useModal, Button, Text, Input, Grid } from "@nextui-org/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveAppointment } from "../../../actions/approveAppointmentActions";

export default function App({ appointmentDetails }) {
  const { setVisible, bindings } = useModal();
  const dispatch = useDispatch();

  const approveAppointmentState = useSelector(
    (state) => state.approveAppointment
  );
  const { response, error, loading } = approveAppointmentState;

  const [appointment, setAppointment] = useState({
    id: appointmentDetails._id,
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setAppointment((appointment) => {
      return { ...appointment, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async () => {
    dispatch(approveAppointment(appointment));
    console.log(approveAppointmentState);
  };

  return (
    <div>
      <Button
        auto
        css={{ backgroudColor: "blue", color: "$errorSolidContrast" }}
        onClick={() => setVisible(true)}
      >
        Open modal
      </Button>
      <Modal
        blur
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            hello
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container gap={4}>
            <Grid>
              <Input
                onChange={handleChange}
                width="186px"
                label="Time"
                type="time"
                name="time"
              />
            </Grid>
            <Grid>
              <Input
                onChange={handleChange}
                width="186px"
                label="Date"
                type="date"
                name="date"
              />
            </Grid>
          </Grid.Container>
          <Text id="modal-description"></Text>
        </Modal.Body>
        <Modal.Footer>
          <nput type="date" />
          <Button
            auto
            flat
            css={{ backgroundColor: "$red600", color: "$accents1" }}
            onClick={() => setVisible(false)}
          >
            Close
          </Button>
          <Button onPress={handleSubmit} auto>
            Schedule Appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
