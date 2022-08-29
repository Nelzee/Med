import {
  Button,
  Card,
  Container,
  Grid,
  Loading,
  Text,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAppointment } from "../../actions/reserveAppointmentActions";
import RequestAppointmentModal from "../../components/Modals/RequestAppointmentModal";
import axios from "../../api/axios";
import "./AppointmentsPage.css";

const days = ["", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", ""];
const months = [
  "January",
  "February",
  "March",
  "Avril",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const AppointmentsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { response } = userLogin;

  const appointmentDelete = useSelector((state) => state.deleteAppointment);
  const { loading, response: deleteResponse } = appointmentDelete;

  const [approvedAppointments, setApprovedAppointments] = useState([]);

  useEffect(() => {
    if (!response) {
      navigate("/");
    }
  }, [response]);

  let dateRaw, date;
  useEffect(() => {
    const getAppointments = async () => {
      const { data } = await axios.get(
        `/api/appointments/approved/${response._id}`
      );
      console.log(data);
      setApprovedAppointments(data);
    };
    getAppointments();
  }, [response._id]);

  const handleDelete = (id, e) => {
    dispatch(deleteAppointment(id));
    if (deleteResponse?.message === "Scheduled appointment cancelled") {
      setApprovedAppointments((approvedAppointments) => {
        return approvedAppointments.filter((appointment) => {
          return appointment._id !== id;
        });
      });
    }
  };
  return (
    <>
      <Grid.Container gap={2} css={{ minHeight: "100vh", padding: "20px" }}>
        <RequestAppointmentModal />
        {approvedAppointments.map((ap) => {
          const dateRaw = new Date(ap.date);
          const date = `${days[dateRaw.getDay()]} ${dateRaw.getDate()} ${
            months[dateRaw.getMonth()]
          } ${dateRaw.getFullYear()}`;

          return (
            <Grid xs={12}>
              <Card>
                <Card.Header>
                  <Text>
                    DR {ap.doctor.firstName[0]}. {ap.doctor.lastName}
                  </Text>
                </Card.Header>
                <Card.Body>
                  <Text>Default card. (shadow)</Text>
                </Card.Body>
                <Card.Footer>
                  <Text>{ap.time}</Text>
                  <Text>{date}</Text>
                  <Button
                    color="primary"
                    onPress={(e) => handleDelete(ap._id, e)}
                    auto
                  >
                    {loading ? (
                      <Loading type="spinner" color="currentColor" size="sm" />
                    ) : (
                      "Cancel Appointment"
                    )}
                  </Button>
                </Card.Footer>
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
    </>
  );
};

export default AppointmentsPage;
