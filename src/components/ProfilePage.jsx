import React, { useState } from "react";
// import Container from '@mui/material/Container'
import {
  Grid,
  Typography,
  Box,
  Container,
  Paper,
  InputBase,
  Divider,
  TextField,
  RadioGroup,
  Button,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const ProfilePage = () => {
  const [email, setEmail] = useState("user@gmail.com");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const handleSave = () => {
    // Handle save logic here
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ border: "1px solid gray" }}>
        <Grid
          marginTop={4}
          display={"flex"}
          justifyContent={"flex-start"}
          container
        >
          <Grid  sx={{ marginLeft: 20 }} xs={2}>
            <Paper
              elevation={0}
              sx={{
                p: "2px 4px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                // alignItems: "center",
                paddingLeft: 2,
                paddingY: 3,
                width: "100%",
                bgcolor: "#ECEEEF",
              }}
            >
              <Typography variant="body2" fontWeight={"bold"}>
                FirstName
              </Typography>
              {email}
            </Paper>
            <Paper
              elevation={0}
              sx={{
                marginTop: 5,
                paddingLeft: 2,
                paddingY: 2,
                border: "1px solid #ECEEEF",
                cursor: "pointer",
                borderRadius: 0,
              }}
            >
              <Typography variant="body2">Orders</Typography>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                paddingLeft: 2,
                paddingY: 2,
                border: "1px solid #ECEEEF",
                cursor: "pointer",
                borderRadius: 0,
              }}
            >
              <Typography variant="body2">Gift Vouchers</Typography>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                paddingLeft: 2,
                paddingY: 2,
                border: "1px solid #ECEEEF",
                cursor: "pointer",
                borderRadius: 0,
              }}
            >
              <Typography variant="body2">Profile</Typography>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                paddingLeft: 2,
                paddingY: 2,
                border: "1px solid #ECEEEF",
                cursor: "pointer",
                borderRadius: 0,
              }}
            >
              <Typography variant="body2">FAQs</Typography>
            </Paper>
            <Button
              sx={{
                width: "100%",
                color: "red",
                bgcolor: "white",
                border: "1px solid red",
                marginTop: 3,
                fontFamily: "Source  Sans Pro, sans-serif",
                fontSize: "0.8rem",
                borderRadius:0,
                "&:hover": {
                  bgcolor: "red",
                  color: "white",
                  borderRadius: "0",
                },
              }}
              variant="text"
            >
              Delete My Account
            </Button>
            <Button
              sx={{
                width: "100%",
                color: "red",
                bgcolor: "white",
                border: "1px solid red",
                marginTop: 2,
                fontFamily: "Source  Sans Pro, sans-serif",
                fontSize: "0.8rem",
                borderRadius:0,
                "&:hover": {
                  bgcolor: "red",
                  color: "white",
                  borderRadius: "0",
                },
              }}
              variant="text"
            >
              Logout
            </Button>
          </Grid>
          <Grid item marginLeft={7} xs={6}>
            <Box marginBottom={2}>
              <Typography
                textTransform={"uppercase"}
                variant="body2"
                sx={{ color: "#A7A9AC" }}
              >
                Edit Profile
              </Typography>
            </Box>
            <Box
              paddingLeft={2.5}
              paddingTop={3}
              paddingBottom={5}
              border={"1px solid gray"}
            >
              <Typography variant="body2">Email Id</Typography>
              <Paper
                elevation={0}
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                  marginTop: 1,
                  bgcolor: "#ECEEEF",
                  borderRadius: 2,
                }}
              >
                <InputBase
                  sx={{
                    ".MuiInputBase-root": {
                      WebkitTextFillColor: "black",
                      opacity: 1,
                    },
                    ml: 1,
                    flex: 1,
                  }}
                  defaultValue={email}
                  readOnly
                />
              </Paper>
            </Box>
            <Box marginTop={3} paddingBottom={5} border={"1px solid black"}>
              <Typography
                variant="body2"
                sx={{ marginTop: 3, marginBottom: 3, marginLeft: 2.5 }}
              >
                General Information
              </Typography>

              <Divider />
              <Divider />
              <Grid display={"flex"} justifyContent={"space-around"} container>
                <Grid
                  display={"flex"}
                  item
                  flexDirection={"column"}
                  justifyContent={"center"}
                  xs={5.3}
                >
                  <TextField
                    label="First Name"
                    variant="outlined"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                  <Typography sx={{ marginTop: 1 }} variant="subtitle2">
                    Gender
                  </Typography>
                  <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    row
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  item
                  xs={5.3}
                >
                  <LocalizationProvider
                    sx={{ width: "100%" }}
                    dateAdapter={AdapterDayjs}
                  >
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker label="Basic date picker" />
                    </DemoContainer>
                  </LocalizationProvider>
                  <TextField
                    label="Mobile Number"
                    variant="outlined"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Address"
                    variant="outlined"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Divider />
                <Box display="flex" justifyContent="center" marginTop="20px">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    style={{
                      backgroundColor: "rgb(16,123,122)",
                      width: "200px",
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProfilePage;
