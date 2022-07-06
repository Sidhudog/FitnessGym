import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import {excerciseOptions,exerciseOptions,fetchData} from "../utils/fetchData";
import { HorizontalRule } from "@mui/icons-material";
import HorizontalScrollbar from './HorizontalScrollBar'



const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
const [search,setSearch] = useState('') 
const [bodyParts,setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions);


        setBodyParts(['all',...bodyPartsData]);
    }

    fetchExercisesData();
  },[])
  

  const handleSearch = async () => {
    if(search){
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",exerciseOptions
      );

      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
        setExercises("")
        setExercises(searchedExercises);
        console.log(exercises);
    }
  }

  return (
    <Stack
      direction="column"
      mt="40px"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        fontWeight="600"
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none" },
            width: { lg: "800px", xs: "350px" },
          }}
          height="70px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        ></TextField>
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "12px" },
            height: "50px",
            m: "5px",
            position: "absolute",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data = {bodyParts} bodyPart = {bodyPart} setBodyPart={setBodyPart} ></HorizontalScrollbar>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
