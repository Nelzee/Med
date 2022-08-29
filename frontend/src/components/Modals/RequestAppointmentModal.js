import {
  Modal,
  useModal,
  Button,
  Text,
  Grid,
  Dropdown,
  Container,
  Card,
  Row,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { makeAppointment } from "../../actions/reserveAppointmentActions";
import axios from "../../api/axios";

const cities = [
  { value: "Harare", label: "Harare" },
  { value: "Bulawayo", label: "Bulawayo" },
  { value: "Chitungwiza", label: "Chitungwiza" },
  { value: "Mutare", label: "Mutare" },
  { value: "Gweru", label: "Gweru" },
  { value: "Kwekwe", label: "Kwekwe" },
  { value: "Kadoma", label: "Kadoma" },
  { value: "Masvingo", label: "Masvingo" },
  { value: "Chinhoyi", label: "Chinhoyi" },
  { value: "Marondera", label: "Marondera" },
  { value: "Bindura", label: "Bindura" },
  { value: "Hwange", label: "Hwange" },
  { value: "Beitbridge", label: "Beitbridge" },
  { value: "Zvishavane", label: "Zvishavane" },
  { value: "Victoria Falls", label: "Victoria Falls" },
  { value: "Redcliff", label: "Redcliff" },
  { value: "Chiredzi", label: "Chiredzi" },
  { value: "Gwanda", label: "Gwanda" },
  { value: "Lupane", label: "Lupane" },
];

export default function App() {
  const dispatch = useDispatch();
  const { setVisible, bindings } = useModal();

  const userLogin = useSelector((state) => state.userLogin);
  const { response } = userLogin;
  const reserveAppointmentState = useSelector(
    (state) => state.reserveAppointment
  );
  const {
    response: appointmentResponse,
    error: appointmentError,
    loading,
  } = reserveAppointmentState;

  const [doctors, setDoctors] = useState([]);
  const [selected, setSelected] = useState(new Set(["Harare"]));
  const [appointment, setAppointment] = useState({
    userId: response?._id,
    doctorId: "",
    details: "",
  });

  const handleChange = (e) => {
    setAppointment((appointment) => {
      return { ...appointment, [e.target.name]: e.target.value };
    });
  };

  const handleSelect = (e, i) => {
    setDoctors((doctors) => {
      const nxt = doctors.map((doc) => {
        return { ...doc, selected: false };
      });
      nxt[i].selected = true;
      setAppointment((app) => {
        return { ...app, doctorId: nxt[i]._id };
      });
      return nxt;
    });
  };

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/appointments/${selectedValue}`);
      setDoctors(
        data.map((d) => {
          return { ...d, selected: false };
        })
      );
    };

    fetching();
  }, [selectedValue]);

  const handleSubmit = () => {
    console.log(appointment);
    dispatch(makeAppointment(appointment));
  };

  return (
    <div>
      <Button
        auto
        css={{ backgroudColor: "blue", color: "$errorSolidContrast" }}
        onClick={() => setVisible(true)}
      >
        Request Appointment
      </Button>
      <Modal
        css={{ minHeight: "500px" }}
        blur
        scroll
        width="800px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Grid.Container gap={2} justify="center">
            <Grid css={{ paddingTop: "$0", marginTop: "$0" }} xs={12}>
              <Text id="modal-title" size={22}>
                Select a doctor you wan't to request an appointment with
              </Text>
            </Grid>
            <Grid xs={12}>
              <Dropdown>
                <Dropdown.Button flat>{selectedValue}</Dropdown.Button>
                <Dropdown.Menu
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                  aria-label="Static Actions"
                >
                  {cities.map((city) => (
                    <Dropdown.Item key={city.label}>{city.value}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
          </Grid.Container>
        </Modal.Header>
        <Modal.Body>
          <Container xl>
            {doctors?.length !== 0 ? (
              doctors.map((doctor, i) => (
                <>
                  <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{
                      border: ` solid  ${
                        doctor.selected ? "3px blue" : "black 1px"
                      } `,
                    }}
                    onPress={(e) => handleSelect(e, i)}
                  >
                    <Card.Body>
                      <Text size={22}>DR. {doctor.firstName}</Text>
                      <Text>13 Poplar Road Lochinvar</Text>
                    </Card.Body>
                  </Card>
                  <Spacer y={0.5} />
                </>
              ))
            ) : (
              <Text id="modal-title" size={22}>
                No Doctors to show
              </Text>
            )}
          </Container>
        </Modal.Body>
        <Spacer y={1} />
        <Modal.Footer>
          <Textarea
            onChange={handleChange}
            name="details"
            width="90%"
            size="lg"
            bordered
            color="secondary"
          />
          <Button
            auto
            flat
            css={{ backgroundColor: "$error", color: "$white" }}
            onClick={() => setVisible(false)}
            justify="center"
          >
            Close
          </Button>
          <Button onPress={handleSubmit} auto>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
