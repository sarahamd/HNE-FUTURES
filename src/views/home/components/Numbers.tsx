import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Numbers = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    delay: 100,
    triggerOnce: true,
  });

  return (
    <Box>
      <Box marginTop={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"secondary"}
          align={"center"}
        >
          Our success so far
        </Typography>
      </Box>
      <Box marginTop={2}>
        <Grid container spacing={2}>
          {[
            {
              title: 100,
              subtitle: "More than 100 happy charger owners in Egypt",
              suffix: "+",
            },
            {
              title: 2000,
              subtitle: "More than 2000 charging sessions every month",
              suffix: "+",
            },
            {
              title: 97,
              subtitle: "97% customers satisfaction rating over 2 years",
              suffix: "%",
            },
          ].map((item, i) => (
            <Grid key={i} item xs={12} md={4}>
              <Typography variant="h3" align={"center"} gutterBottom>
                <Box fontWeight={600} ref={ref}>
                  <CountUp
                    redraw={false}
                    end={inView ? item.title : 0}
                    start={0}
                    suffix={item.suffix}
                  />
                </Box>
              </Typography>
              <Typography color="text.secondary" align={"center"} component="p">
                {item.subtitle}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Numbers;
