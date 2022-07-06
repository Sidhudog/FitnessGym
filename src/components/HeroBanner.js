import React from "react";
import { Box, Stack, Typography ,Button} from "@mui/material";
import Banner from '../assets/images/banner.png'; 
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "150px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px" mb="30px">
        HeroBanner
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mt="40px"
        mb="40px"
      >
        Sweat,Smile <br /> and Reapeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mt="40px" mb="40px">
        Check out most effective exercises
      </Typography>

      <Button
        variant="contained"
        href="#exercises"
        sx={{
          backgroundColor: "#FF2625"
        }}
      >
        Explore Exrecises
      </Button>
      <Typography
        fontWeight="600"
        color="#FF2625"
        fontSize="200px"
        sx={{
          opacity: "0.2",
          display: { lg: "block", xs: "none" },
        }}
        mt="140px"
        mb="30px"
      >
        Exercises
      </Typography>
      <img src={Banner} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
