// React , Next js packages
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// MUI packages
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
// Third party packages
import axios from "axios";
import { useSnackbar } from "notistack";

// Custom packages

function Footer() {
  /** custom hooks */
  const { enqueueSnackbar } = useSnackbar();

  //** useState hooks */

  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [textArea, setTextArea] = useState("");

  // const handleFormSubmit = () => {
  //   const data = {
  //     student_name: name,
  //     student_email: email,
  //     student_mobile: mobile,
  //     student_message: textArea,
  //   };
  //   console.log(data, "check final list data");
  // };

  /** custom handlers */
  const handleSubmitForm = async (e: any) => {
    try {
      e.preventDefault();
      setLoading(true);

      if (name === "" && email === "" && mobile === "" && textArea === "") {
        setWarning(true);
      } else {
        setWarning(false);
        //** form data */
        const data = {
          student_name: name,
          student_email: email,
          student_mobile: mobile,
          student_message: textArea,
        };

        await axios.post("/api/hourmailer", data);
        enqueueSnackbar("Your Form Submitted Successfully", {
          variant: "success",
        });
        console.log("check form datata", data);
        //** form reset  */
        setName("");
        setEmail("");
        setMobile("");
        setTextArea("");
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar("please fill empty box", {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box mb={10} id="footerId">
      <Box
        py={2}
        display={`flex`}
        flexDirection={`row`}
        justifyContent={`space-between`}
        alignItems={`center`}
      >
        <Image src={`/logo.svg`} width={56} height={56} alt="logo" />
        <Box>
          <Link href={`https://www.linkedin.com/`} target={`_blank`}>
            <Image
              src={`/images/linkdin.svg`}
              width={30}
              height={20}
              alt="logo"
            />
          </Link>
          <Link href={`https://www.instagram.com/`} target={`_blank`}>
            <Image
              src={`/images/insta.svg`}
              width={30}
              height={20}
              alt="logo"
            />
          </Link>
        </Box>
      </Box>
      {/* form field */}
      <form onSubmit={handleSubmitForm}>
        <Stack
          direction={{ sm: `row`, xs: "column" }}
          justifyContent={`space-between`}
          alignItems={`center`}
        >
          <input
            type="text"
            placeholder="Full Name"
            className="customInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="customInput"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Id"
            className="customInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Stack>
        <Stack mt={{ sm: 3 }} direction={`column`}>
          <textarea
            placeholder="Write here..."
            className="customTextarea"
            rows={10}
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
          />
        </Stack>
        {warning && (
          <Typography variant="body2" color={`error`}>
            please fill empty box{" "}
          </Typography>
        )}
        <Box
          display={`flex`}
          flexDirection={`row`}
          justifyContent={`flex-end`}
          mt={3.75}
        >
          <Button variant="contained" type="submit" sx={{ pl: 8, pr: 8 }}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Footer;
