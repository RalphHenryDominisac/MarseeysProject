import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ButtonCategoryStyle from "../ButtonCategoryStyle";
import ItemsCategoryButton from "../ItemsCategoryButton";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";




function preventDefault(event) {
  event.preventDefault();
}

export default function DrinksButtons() {
   const navigate = useNavigate();

   const navigateToCustomerListPage = () => {
     navigate("/customerlistpage");
   };


  return (
    <React.Fragment>
      {/* <Stack spacing={0} direction="row">
        <ButtonCategoryStyle title="BBQ" />
        <ButtonCategoryStyle title="Beef" />
        <ButtonCategoryStyle title="Bilao" />
        <ButtonCategoryStyle title="Chicken" />
        <ButtonCategoryStyle title="Desserts" />
        <ButtonCategoryStyle title="Drinks" />
      </Stack>
      <Stack spacing={0} direction="row">
        <ButtonCategoryStyle title="Food Trays" />
        <ButtonCategoryStyle title="Handaan" />
        <ButtonCategoryStyle title="Noodles" />
        <ButtonCategoryStyle title="Pica-pica" />
        <ButtonCategoryStyle title="Platters" />
        <ButtonCategoryStyle title="Pork" />
      </Stack>
      <Stack spacing={0} direction="row" sx={{ mb: 6 }}>
        <ButtonCategoryStyle title="Rice" />
        <ButtonCategoryStyle title="Seafood" />
        <ButtonCategoryStyle title="Sizzling" />
        <ButtonCategoryStyle title="Solo Meals" />
        <ButtonCategoryStyle title="Soup" />

        <ButtonCategoryStyle title="Vegetables" />
      </Stack> */}

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton title="Tocino BBQ" price="80.00" availables="20" />
        <ItemsCategoryButton
          title="Pork Sisig"
          price="130.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Battered Chicken"
          price="100.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Salted Egg Chicken"
          price="130.00"
          availables="20"
        />

        <ItemsCategoryButton
          title="Pork Liempo"
          price="110.00"
          availables="20"
        />
      </Stack>

      <Stack spacing={0} direction="row" sx={{ mb: 4.5 }}>
        <ItemsCategoryButton title="Pecho Inasal" price="120.00" availables="20" />
        <ItemsCategoryButton
          title="Grilled Pusit"
          price="110.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Paa Inasal"
          price="120.00"
          availables="20"
        />
        <ItemsCategoryButton
          title="Garlic Chicken"
          price="110.00"
          availables="20"
        />

      
      </Stack>

     

      <Button
        variant="contained"
        onClick={navigateToCustomerListPage}
        sx={{
          ":hover": {
            bgcolor: "#FFB644", // theme.palette.primary.main
          },
          mt: 17,
          ml: 85,
          width: 160,
          textTransform: "none",
          bgcolor: "#F2A42A",
          fontFamily: "Barlow Condensed",
          fontSize: "18px",
          height: "32px",
        }}
      >
        Customer List
      </Button>
    </React.Fragment>
  );
}