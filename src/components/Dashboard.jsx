import React, { useState } from "react";
import {
  Container,
  TextField,
  Divider,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Typography,
  Grid,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Inbox as InboxIcon,
  Mail as MailIcon,
  Drafts as DraftsIcon,
} from "@mui/icons-material";

const Dashboard = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSave = () => {
    // Handle save logic here
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const listItems = (
    <List>
      {["Orders", "Profile", "Submit Design"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <Container
          maxWidth="md"
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            paddingTop: "40px",
            width: "60%",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                style={{ textAlign: "center", marginTop: "5px" }}
              >
                EDIT PROFILE
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
              />
              <Typography
                variant="subtitle1"
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                GENERAL INFORMATION
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
            </Grid>
            <Grid item xs={6}>
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
              <Typography variant="h6" gutterBottom>
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
            <Grid item xs={6}>
              <TextField
                label="Date of Birth"
                variant="outlined"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                fullWidth
                margin="normal"
              />
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
            <Grid item xs={12}>
              <Divider style={{ margin: "20px 0" }} />
              <Box display="flex" justifyContent="center" marginTop="20px">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                  style={{ backgroundColor: "rgb(16,123,122)", width: "200px" }}
                >
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {listItems}
        </Drawer>
      </div>
    </div>
  );
};

export default Dashboard;
