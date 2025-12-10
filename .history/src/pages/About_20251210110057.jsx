import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaAddressBook,
} from "react-icons/fa";

const AboutMe = () => {
  // Gradient border style
  const gradientBorderStyle = {
    borderRadius: "20px",
    border: "3px solid",
    borderImageSource:
      "linear-gradient(90deg, #03045E, #0077B6, #00B4D8, #90E0EF)",
    borderImageSlice: 1,
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <Typography
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
        className="text-center mb-10 text-white font-extrabold tracking-wide"
      >
        About Me
      </Typography>

      {/* Main Content Grid */}
      <Grid container spacing={4} alignItems="flex-start">
        {/* Left Column: Profile Card */}
        <Grid item xs={12} md={4}>
          <Card
            className="h-full bg-[#0f172a] shadow-2xl overflow-hidden"
            sx={gradientBorderStyle}
          >
            {/* Header Section */}
            <div className="h-32 bg-[#001f3f]"></div>

            {/* Content Section */}
            <CardContent className="text-center">
              {/* Profile Image */}
              <div className="relative -mt-16 flex justify-center">
                <img
                  src="aboutMe.jpg"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-[#00B4D8] shadow-xl"
                />
              </div>

              {/* Name */}
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
                className="font-bold mt-4 text-white"
              >
                Oscar Siyabonga Madalane
              </Typography>

              {/* Title with custom styling */}
              <Typography
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                }}
                className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mt-2"
              >
                Senior Full Stack Developer & Tech Instructor
              </Typography>

              {/* Contact Info */}
              <Typography className="mt-6 font-semibold text-[#38bdf8]">
                Contact Information
              </Typography>
              <div className="mt-2 space-y-3 text-white">
                <div className="flex items-center justify-center gap-2">
                  <FaEnvelope /> oscarmadalane@gmail.com
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FaPhone /> +27 78 732 0132
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FaGithub />
                  <a
                    href="https://github.com/Madalane-Software"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    github.com/Madalane-Software
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FaLinkedin />
                  <a
                    href="https://www.linkedin.com/in/oscar-siyabonga-madalane/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FaAddressBook /> Johannesburg, South Africa
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column: Professional Summary */}
        <Grid item xs={12} md={8}>
          <Card
            sx={gradientBorderStyle}
            className="h-full bg-[#0f172a] shadow-xl"
          >
            <CardContent>
              <Typography
                sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                className="font-bold mb-4 text-cyan-400"
              >
                Professional Summary
              </Typography>

              <Typography className="text-gray-300 leading-relaxed">
                A highly driven and adaptable individual with proven experience
                in software development and information technology. Skilled in
                developing innovative systems, teaching, and leading
                collaborative tech projects. Passionate about creating smart
                IoT ecosystems, AI-powered applications, and scalable digital
                solutions that bridge real-world challenges with modern
                technology. Known for precision, efficiency, and a strong work
                ethic that emphasizes problem-solving and high-quality delivery.
                Continually growing through research, teaching, and hands-on
                development across full-stack, machine learning, and embedded
                systems.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
