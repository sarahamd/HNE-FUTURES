import { Box, Typography, Avatar, Card, Grid, Tab } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { TbChargingPile, TbUsers, TbMapPin, TbPlugConnected, TbEdit, TbChartBar, TbCoinPound, TbBatteryCharging2 } from 'react-icons/tb';
import { FaHistory } from 'react-icons/fa';
import { PiShareNetwork } from 'react-icons/pi';
import { MdOutlineManageHistory } from 'react-icons/md';
import { SlEnergy } from 'react-icons/sl';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const DashboardFeatures = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState('1');
const features = [
    {
      title: 'Total Chargers',
      subtitle: 'View The Total Number Of Chargers In Your Network',
      icon: <TbChargingPile size={25} />
    },
    {
      title: 'Total Sessions',
      subtitle: 'Monitor The Total Number Of Charging Sessions',
      icon: <TbPlugConnected size={25} />
    },
    {
      title: 'Total Revenue',
      subtitle: 'Track Monthly Revenue, Revenue By Charger, Top 5 Revenue By Owner, Average Revenue Per Session, and Total Revenue.',
      icon: <TbChartBar size={25} />
    },
    {
      title: 'Total Energy',
      subtitle: 'View The Total Energy Consumption',
      icon: <SlEnergy size={25} />
    },
    {
      title: 'Charger Status',
      subtitle: 'Get Real-Time Updates On The Status Of All Your Chargers',
      icon: <TbBatteryCharging2 size={25} />
    },
    {
      title: 'Add/Edit Chargers',
      subtitle: 'Easily Add Or Edit Charger Details',
      icon: <TbEdit size={25} />
    },
    {
      title: 'Charging Stations Map',
      subtitle: 'A Map With The Location Of All Your Charging Stations Is Available With Respective Status',
      icon: <TbMapPin size={25} />
    },
    {
      title: 'OCPP Charger Operations',
      subtitle: 'Perform OCPP Operations Like Remote Start/Stop Transaction,Trigger Message, Reset, Unlock Connectors',
      icon: <PiShareNetwork size={25} />
    },
    {
      title: 'Dynamic Load Management (DLM)',
      subtitle: 'Optimise Energy Distribution In A Simultaneous EV AC Or DC Charging Infrastructure Avoiding Grid Overload Issues, Minimising Operational Costs',
      icon: <MdOutlineManageHistory size={25} />
    },
    {
      title: 'Session History',
      subtitle: 'Consult Session History And View Detailed Information About Any Session',
      icon: <FaHistory size={25} />
    },
    {
      title: 'Advanced Tariff System',
      subtitle: 'Upload All Kinds Of Tariffs Without Additional Programming',
      icon: <TbCoinPound size={25} />
    },
    {
      title: 'User Groups And Users',
      subtitle: 'Admins Can Manage Users And Groups.',
      icon: <TbUsers size={25} />
    }
  ];
  const charger=[
    {
      title: 'Total Chargers',
      subtitle: 'View The Total Number Of Chargers In Your Network',
      icon: <TbChargingPile size={25} />
    },
  {
    title: 'Add/Edit Chargers',
    subtitle: 'Easily Add Or Edit Charger Details',
    icon: <TbEdit size={25} />
  },
  {
    title: 'Charger Status',
    subtitle: 'Get Real-Time Updates On The Status Of All Your Chargers',
    icon: <TbBatteryCharging2 size={25} />
  },
  {
    title: 'Charging Stations Map',
    subtitle: 'A Map With The Location Of All Your Charging Stations Is Available With Respective Status',
    icon: <TbMapPin size={25} />
  },
  {
    title: 'OCPP Charger Operations',
    subtitle: 'Perform OCPP Operations Like Remote Start/Stop Transaction,Trigger Message, Reset, Unlock Connectors',
    icon: <PiShareNetwork size={25} />
  },
  {
    title: 'Dynamic Load Management (DLM)',
    subtitle: 'Optimise Energy Distribution In A Simultaneous EV AC Or DC Charging Infrastructure Avoiding Grid Overload Issues, Minimising Operational Costs',
    icon: <MdOutlineManageHistory size={25} />
  },]
  const session=[{
    title: 'Total Sessions',
    subtitle: 'Monitor The Total Number Of Charging Sessions',
    icon: <TbPlugConnected size={25} />
  }, {
    title: 'Session History',
    subtitle: 'Consult Session History And View Detailed Information About Any Session',
    icon: <FaHistory size={25} />
  }]
  const Revenue=[ {
    title: 'Total Revenue',
    subtitle: 'Track Monthly Revenue, Revenue By Charger, Top 5 Revenue By Owner, Average Revenue Per Session, and Total Revenue.',
    icon: <TbChartBar size={25} />
  },]

  const other=[  {
    title: 'Total Energy',
    subtitle: 'View The Total Energy Consumption',
    icon: <SlEnergy size={25} />
  },  {
    title: 'Advanced Tariff System',
    subtitle: 'Upload All Kinds Of Tariffs Without Additional Programming',
    icon: <TbCoinPound size={25} />
  },
  {
    title: 'User Groups And Users',
    subtitle: 'Admins Can Manage Users And Groups.',
    icon: <TbUsers size={25} />
  }]
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  

  return (
    <>
      <Box marginBottom={4}>
     
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Dashboard Features
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          Manage and Optimize Your Charging Stations Efficiently
        </Box>
      </Box>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
              <Tab label="ALL" value="1" />
              <Tab label="CHARGER" value="2" />
              <Tab label="SESSION" value="3" />
              <Tab label="REVENUE" value="4" />
              <Tab label="OTHER" value="5" />
            </TabList>
          </Box>
          <Box p={3}>
            <TabPanel value="1">
              <Grid container spacing={2}>
                {features.map((item, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Card
                      sx={{
                        padding: 4,
                        borderRadius: 4,
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <Box display={'flex'} flexDirection={'column'} height={'100%'}>
                        <Avatar
                          sx={{
                            width: 53,
                            height: 53,
                            marginBottom: 2,
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.background.paper,
                          }}
                        >
                          {item.icon}
                        </Avatar>
                        <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 500 }}>
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value="2">
              <Grid container spacing={2}>
                {charger.map((item, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Card
                      sx={{
                        padding: 4,
                        borderRadius: 4,
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <Box display={'flex'} flexDirection={'column'} height={'100%'}>
                        <Avatar
                          sx={{
                            width: 53,
                            height: 53,
                            marginBottom: 2,
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.background.paper,
                          }}
                        >
                          {item.icon}
                        </Avatar>
                        <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 500 }}>
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              </TabPanel>

            <TabPanel value="3">
            <Grid container spacing={2}>
                {session.map((item, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Card
                      sx={{
                        padding: 4,
                        borderRadius: 4,
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <Box display={'flex'} flexDirection={'column'} height={'100%'}>
                        <Avatar
                          sx={{
                            width: 53,
                            height: 53,
                            marginBottom: 2,
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.background.paper,
                          }}
                        >
                          {item.icon}
                        </Avatar>
                        <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 500 }}>
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
                </TabPanel>
            <TabPanel value="4">  <Grid container spacing={2}>
                {Revenue.map((item, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Card
                      sx={{
                        padding: 4,
                        borderRadius: 4,
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <Box display={'flex'} flexDirection={'column'} height={'100%'}>
                        <Avatar
                          sx={{
                            width: 53,
                            height: 53,
                            marginBottom: 2,
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.background.paper,
                          }}
                        >
                          {item.icon}
                        </Avatar>
                        <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 500 }}>
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid></TabPanel>
            <TabPanel value="5">  <Grid container spacing={2}>
                {other.map((item, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Card
                      sx={{
                        padding: 4,
                        borderRadius: 4,
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <Box display={'flex'} flexDirection={'column'} height={'100%'}>
                        <Avatar
                          sx={{
                            width: 53,
                            height: 53,
                            marginBottom: 2,
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.background.paper,
                          }}
                        >
                          {item.icon}
                        </Avatar>
                        <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 500 }}>
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid></TabPanel>
          </Box>
        </TabContext>
      </Box>
    </>
  );
}

export default DashboardFeatures;































// import Avatar from "@mui/material/Avatar";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
// import { useTheme } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";
// import { TbChargingPile,TbUsers,TbMapPin, TbPlugConnected, TbEdit,TbChartBar, TbCoinPound,TbBatteryCharging2 } from "react-icons/tb";
// import { FaHistory } from "react-icons/fa";
// import { PiShareNetwork } from "react-icons/pi";
// import { MdOutlineManageHistory } from "react-icons/md";
// import { SlEnergy } from "react-icons/sl";

// const DashboardFeatures = () => {
//   const theme = useTheme();
//   return (
//     <Box>
      // <Box marginBottom={4}>
      //   <Typography
      //     sx={{
      //       textTransform: "uppercase",
      //       fontWeight: "medium",
      //     }}
      //     gutterBottom
      //     color={"secondary"}
      //     align={"center"}
      //   >
      //     Dashboard Features
      //   </Typography>
      //   <Box
      //     component={Typography}
      //     fontWeight={700}
      //     variant={"h3"}
      //     gutterBottom
      //     align={"center"}
      //   >
      //     Manage and Optimize Your Charging Stations Efficiently
      //   </Box>
      // </Box>
//       <Box>
//         <Grid container spacing={4}>
//           {[
//             {
//               title: "Total Chargers",
//               subtitle: "View The Total Number Of Chargers In Your Network",
//               icon: <TbChargingPile size={25} />
//             },
//             {
//               title: "Total Sessions",
//               subtitle: "Monitor The Total Number Of Charging Sessions",
//               icon: <TbPlugConnected size={25} />
//             },
//             {
//               title: "Total Revenue",
//               subtitle: "Track Monthly Revenue, Revenue By Charger, Top 5 Revenue By Owner, Average Revenue Per Session, and Total Revenue.",
//               icon: <TbChartBar size={25} />
//             },
            
//             {
//               title: "Total Energy",
//               subtitle: "View The Total Energy Consumption",
//               icon:<SlEnergy size={25} />

//             },
//             {
//               title: "Charger Status",
//               subtitle: "Get Real-Time Updates On The Status Of All Your Chargers",
//               icon: <TbBatteryCharging2 size={25} />

//             },
//             // {
//             //   title: "Charger Type",
//             //   subtitle: "View Different Types Of Chargers In Your Network",
//             //   icon:"AC/DC"
//             // },
//             {
//               title: "Add/Edit Chargers",
//               subtitle: "Easily Add Or Edit Charger Details",
//               icon: <TbEdit size={25} />

//             },
//             {
//                 title: "Charging Stations Map",
//                 subtitle: "A Map With The Location Of All Your Charging Stations Is Available With Respective Status",
//                 icon: <TbMapPin size={25} />
//               },
//             {
//               title: "OCPP Charger Operations",
//               subtitle: "Perform OCPP Operations Like Remote Start/Stop Transaction,Trigger Message, Reset, Unlock Connectors",
//               icon: <PiShareNetwork size={25}/>
//             },  {
//               title: "Dynamic Load Management (DLM)",
//               subtitle:"Optimise Energy Distribution In A Simultaneous EV AC Or DC Charging Infrastructure Avoiding Grid Overload Issues, Minimising Operational Costs",
//               icon: <MdOutlineManageHistory size={25} />
//               // subtitle: `Optimize EV charging to avoid grid overload and blackouts. Minimize costs with on-site maintenance and priority plugs for faster charging.`,

//               // icon: <SlEnergy size={25} />
//             },
//             {
//               title: "Session History",
//               subtitle: "Consult Session History And View Detailed Information About Any Session",
//               icon: <FaHistory size={25}/>
//             },
//             {
//               title: "Advanced Tariff System",
//               subtitle: "Upload All Kinds Of Tariffs Without Additional Programming",
//               icon: <TbCoinPound size={25} />
//             },
            
//               {
//                 title: "User Groups And Users",
//                 subtitle: "Admins Can Manage Users And Groups. ",
//                 // subtitle: "Admins Can Manage Users And Groups. Users Are Identified By Email And Can Use RFID Cards Or The ChargeSurfing App To Operate Chargers.",
//                 icon: <TbUsers size={25} />
//               }
//           ].map((item, i) => (
//             <Grid item xs={12} sm={6} md={4} key={i}>
//               <Box
//                 component={Card}
//                 padding={4}
//                 borderRadius={4}
//                 width={"100%"}
//                 height={"100%"}
//                 data-aos={"fade-up"}
//               >
//                 <Box display={"flex"} flexDirection={"column"}>
//                   <Box
//                     component={Avatar}
//                     width={53}
//                     height={53}
//                     marginBottom={2}
//                     bgcolor={theme.palette.primary.main}
//                     color={theme.palette.background.paper}
//                   >
//                     {item.icon}
//                   </Box>
//                   <Box
//                     component={Typography}
//                     variant={"h6"}
//                     gutterBottom
//                     sx={{ fontWeight: 500 }}
//                   >
//                     {item.title}
//                   </Box>
//                   <Typography color="text.secondary">
//                     {item.subtitle}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default DashboardFeatures;
