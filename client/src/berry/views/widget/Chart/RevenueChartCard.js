import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';
import { Box, Divider, Grid, Typography, useMediaQuery } from '@material-ui/core';

// third party
import Chart from 'react-apexcharts';

// project imports
import MainCard from './../../../ui-component/cards/MainCard';

//===========================|| REVENUE CHART CARD ||===========================//

const RevenueChartCard = ({ chartData }) => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));
    const matchDownXs = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <MainCard title="Total Revenue">
            <Grid container spacing={2} direction={matchDownMd && !matchDownXs ? 'row' : 'column'}>
                <Grid item xs={12} sm={7} md={12}>
                    <Chart {...chartData} />
                </Grid>
                <Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
                    <Grid item>
                        <Divider />
                    </Grid>
                </Box>
                <Grid item container justifyContent="space-around" alignItems="center" xs={12} sm={5} md={12}>
                    <Grid item sm={4}>
                        <Grid container direction="column">
                            <Typography variant="h6">Youtube</Typography>
                            <Typography variant="subtitle1" style={{ color: theme.palette.error.main }}>
                                + 16.85%
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={4}>
                        <Grid container direction="column">
                            <Typography variant="h6">Facebook</Typography>
                            <Box color={theme.palette.primary.main}>
                                <Typography variant="subtitle1" color="inherit">
                                    +45.36%
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item sm={4}>
                        <Grid container direction="column">
                            <Typography variant="h6">Twitter</Typography>
                            <Typography variant="subtitle1" style={{ color: theme.palette.secondary.main }}>
                                - 50.69%
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

RevenueChartCard.propTypes = {
    chartData: PropTypes.object
};

export default RevenueChartCard;