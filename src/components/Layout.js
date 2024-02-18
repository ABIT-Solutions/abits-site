// Layout.js

import React from 'react';
import Grid from '@mui/material/Grid';
import CustomToolbar from './CustomToolbar';
import TopTitle from './TopTitle';
import TopSubTitle from './TopSubtitle';
import TellUsAboutYourProjButton from './TellUsAboutYourProjButton';
import ContactUsTitle from './ContactUsTitle';
import ContactUsForm from './ContactUsForm';
import AboutUsTitle from './AboutUsTitle';
import AboutUsContent from './AboutUsContent';
import ServicesTitle from './ServicesTitle';
import ServicesContent from './ServicesContent';

const Layout = ({ children }) => {
  return (
    <Grid container>
      {/* CustomToolbar spans the entire width */}
      <Grid item xs={12}>
        <CustomToolbar />
      </Grid>

      {/* Main content section */}
      <Grid item xs={12}>
        <Grid container rowSpacing={1} columnSpacing={1}>
          <Grid item xs={12}>
            <TopTitle></TopTitle>
          </Grid>
          <Grid item xs={12}>
            <TopSubTitle></TopSubTitle>
          </Grid>
          <Grid item xs={12}>
            <TellUsAboutYourProjButton></TellUsAboutYourProjButton>
          </Grid>
          <Grid item xs={12}>
            <AboutUsTitle></AboutUsTitle>
          </Grid>
          <Grid item xs={12}>
            <AboutUsContent></AboutUsContent>
          </Grid>
          <Grid item xs={12}>
            <ServicesTitle></ServicesTitle>
          </Grid>
          <Grid item xs={12}>
            <ServicesContent></ServicesContent>
          </Grid>
          <Grid item xs={12}>
            <ContactUsTitle></ContactUsTitle>
          </Grid>
          <Grid item xs={12}>
            <ContactUsForm></ContactUsForm>
          </Grid>
          {/*<Grid item xs={12}>
            {children}
          </Grid>*/}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
