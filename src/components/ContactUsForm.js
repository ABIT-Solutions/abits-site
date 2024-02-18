// ContactUsForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Snackbar } from '@mui/material';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '', // Added company field
    phoneNumber: '', // Added phoneNumber field
    message: '',
  });

  const [formError, setFormError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if required fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setFormError(true);
      return;
    }

    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add your logic to send the form data to a server or perform any other actions
  };

  return (
    <form className="contactUsForm" id="contactUsForm" onSubmit={handleSubmit}>
      <Box sx={{ maxWidth: 400, margin: 'auto' }}>
        <Typography variant="h5" gutterBottom>
          {/*Contact Us*/}
        </Typography>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Telephone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" style={{ backgroundColor: "#C0C0C0" }} sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
      <Snackbar
        open={formError}
        autoHideDuration={6000}
        onClose={() => setFormError(false)}
        message="Please fill in required fields."
      />
    </form>
  );
};

export default ContactUsForm;
