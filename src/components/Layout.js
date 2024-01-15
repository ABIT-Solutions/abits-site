// Layout.js

import React from 'react';
import Grid from '@mui/material/Grid';
import CustomToolbar from './CustomToolbar';
import CompanyTopTitle from './CompanyTopTitle';
import CompanyTopSubTitle from './CompanyTopSubtitle';
import CompanyTellUsAboutYourProjButton from './CompanyTellUsAboutYourProjButton';

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
            <CompanyTopTitle></CompanyTopTitle>
          </Grid>
          <Grid item xs={12}>
            <CompanyTopSubTitle></CompanyTopSubTitle>
          </Grid>
          <Grid item xs={12}>
            <CompanyTellUsAboutYourProjButton></CompanyTellUsAboutYourProjButton>
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
