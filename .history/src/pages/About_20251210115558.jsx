import React from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Chip,
  Avatar,
  Divider,
  Button,
  Card,
  CardContent
} from "@mui/material";
import {
  School as SchoolIcon,
  Work as WorkIcon,
  Build as BuildIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Description as DescriptionIcon
} from "@mui/icons-material";
import { Link } from "react-router-dom";

// Import your profile picture
import ProfilePicture from "../assets/Profile.jpg";

export default function About() {
  const gradientStyle = {
    background: "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const gradientBorderStyle = {
    position: "relative",
    background:
      "linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%) border-box",
    border: "2px solid transparent",
    borderRadius: "12px",
  };

  const skills = {
    programming: ["Python", "Java", "JavaScript", "Node.js"],
    database: ["SQL", "MySQL", "MongoDB", "Firebase"],
    frameworks: ["React", "Express.js", "Tailwind CSS"],
    tools: ["Windows", "Git", "VS Code", "Docker"],
  };

  const education = [
    {
      degree: "Advanced Diploma in ICT in Application Development",
      institution: "University of Mpumalanga",
      period: "2025",
      details:
        "Relevant Coursework: Advanced Software Development, Cloud Computing, Mobile App Development, AI and Machine Learning",
    },
    {
      degree: "Diploma in ICT in Application Development",
      institution: "University of Mpumalanga",
      period: "2021-2024",
      details:
        "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management, Software Engineering",
    },
    {
      degree: "Business Processes in Financial Accounting SAP S/4HANA",
      institution: "Mentec Foundation",
      period: "2024",
      details:
        "Basic understanding of financial accounting processes using SAP S/4HANA.",
    },
  ];

  const certifications = [
    "Introduction to Cybersecurity - Cisco Networking Academy (2024)",
    "Cyber Security Short Course - Oxford Home Study (2023)",
  ];

  return (
    <Box className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] py-12 px-4">
      <Container maxWidth="xl">
        {/* HEADER */}
        <Box className="text-center mb-6">
          <Typography
            variant="h4"
            className="font-bold mb-2"
            sx={{ ...gradientStyle, fontSize: { xs: "2rem", md: "3rem" } }}
          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            className="text-gray-300 max-w-2xl mx-auto"
            sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            Passionate Software Developer with a drive for creating innovative solutions
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* LEFT COLUMN – PROFILE CARD */}
          <Grid item xs={12} sm={10} md={4}>
            <Card
              sx={{
                ...gradientBorderStyle,
                height: "auto",
              }}
              className="bg-[#0f172a] shadow-xl"
            >
              <CardContent
                className="flex flex-col items-center"
                sx={{ p: { xs: 2, sm: 3, md: 4 } }}
              >
                {/* Profile Image */}
                <Box
                  className="mb-4 p-1 rounded-full"
                  sx={{
                    background:
                      "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
                  }}
                >
                  <Avatar
                    src={ProfilePicture}
                    alt="Oscar Madalane"
                    sx={{
                      width: { xs: 120, sm: 150, md: 180 },
                      height: { xs: 120, sm: 150, md: 180 },
                      border: "4px solid transparent",
                      backgroundColor: "#1e293b",
                    }}
                  />
                </Box>

                {/* Name */}
                <Typography
                  variant="h5"
                  className="font-bold text-center"
                  sx={{
                    color: "#22d3ee",
                    fontSize: { xs: "1.3rem", md: "1.7rem" },
                  }}
                >
                  Oscar Siyabonga Madalane
                </Typography>

                <Typography
                  variant="body2"
                  className="text-gray-300 mb-3 text-center"
                  sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                >
                  Frontend Developer
                </Typography>

                <Divider className="w-full my-4 border-gray-600" />

                {/* CONTACT */}
                <Box className="w-full space-y-3">
                  <Box className="flex items-center">
                    <LocationIcon className="text-purple-400 mr-3" />
                    <Typography className="text-gray-300 text-sm">
                      Nelspruit, South Africa
                    </Typography>
                  </Box>

                  <Box className="flex items-center">
                    <EmailIcon className="text-purple-400 mr-3" />
                    <Typography className="text-gray-300 text-sm">
                      madalaneoscar50@gmail.com
                    </Typography>
                  </Box>

                  <Box className="flex items-center">
                    <PhoneIcon className="text-purple-400 mr-3" />
                    <Typography className="text-gray-300 text-sm">
                      072 896 8717
                    </Typography>
                  </Box>
                </Box>

                <Divider className="w-full my-5 border-gray-600" />

                {/* QUICK STATS */}
                <Grid container spacing={2} className="text-center">
                  <Grid item xs={6}>
                    <Typography className="text-cyan-400 font-bold text-xl">
                      1+
                    </Typography>
                    <Typography className="text-gray-400 text-sm">
                      Years Experience
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className="text-purple-400 font-bold text-xl">
                      6+
                    </Typography>
                    <Typography className="text-gray-400 text-sm">
                      Technologies
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className="text-cyan-400 font-bold text-xl">
                      3+
                    </Typography>
                    <Typography className="text-gray-400 text-sm">
                      Certifications
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className="text-purple-400 font-bold text-xl">
                      4+
                    </Typography>
                    <Typography className="text-gray-400 text-sm">
                      Projects
                    </Typography>
                  </Grid>
                </Grid>

                <Button
                  fullWidth
                  variant="outlined"
                  href="/resume.pdf"
                  target="_blank"
                  startIcon={<DescriptionIcon />}
                  className="mt-5 rounded-full font-semibold"
                  sx={{
                    border: "2px solid #8b5cf6",
                    color: "#8b5cf6",
                    "&:hover": {
                      backgroundColor: "#8b5cf6",
                      color: "white",
                    },
                  }}
                >
                  Download CV
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* RIGHT COLUMN */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {/* SUMMARY */}
              <Grid item xs={12}>
                <Card
                  sx={{ ...gradientBorderStyle, height: "auto" }}
                  className="bg-[#0f172a] shadow-xl"
                >
                  <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <Typography
                      variant="h5"
                      className="font-bold mb-3"
                      sx={{
                        color: "#22d3ee",
                        fontSize: { xs: "1.2rem", md: "1.6rem" },
                      }}
                    >
                      Professional Summary
                    </Typography>

                    <Typography className="text-gray-300 mb-3 text-sm leading-relaxed">
                      I am a dedicated ICT graduate from the University of
                      Mpumalanga with a strong passion for software development.
                    </Typography>

                    <Typography className="text-gray-300 mb-3 text-sm leading-relaxed">
                      I specialize in building applications using modern web
                      technologies with interest in AI, IoT, and cloud
                      solutions.
                    </Typography>

                    <Typography className="text-gray-300 text-sm leading-relaxed">
                      When I'm not coding, I explore new technologies and work
                      on open-source projects.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* EDUCATION */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{ ...gradientBorderStyle, height: "100%" }}
                  className="bg-[#0f172a] shadow-xl"
                >
                  <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <Typography
                      variant="h6"
                      className="font-bold mb-4 flex items-center"
                      sx={{
                        color: "#22d3ee",
                        fontSize: { xs: "1.1rem", md: "1.3rem" },
                      }}
                    >
                      <SchoolIcon className="mr-2" />
                      Education
                    </Typography>

                    {education.map((edu, index) => (
                      <Box key={index} className="mb-5">
                        <Typography
                          className="font-semibold text-purple-400 mb-1"
                          sx={{ fontSize: "1rem" }}
                        >
                          {edu.degree}
                        </Typography>

                        <Typography className="text-cyan-300 text-sm mb-2">
                          {edu.institution} • {edu.period}
                        </Typography>

                        <Typography className="text-gray-300 text-xs leading-relaxed">
                          {edu.details}
                        </Typography>
                      </Box>
                    ))}

                    <Divider className="my-4 border-gray-600" />

                    <Typography
                      variant="h6"
                      className="font-bold mb-4 flex items-center"
                      sx={{
                        color: "#22d3ee",
                        fontSize: { xs: "1.1rem", md: "1.3rem" },
                      }}
                    >
                      <WorkIcon className="mr-2" />
                      Certifications
                    </Typography>

                    {certifications.map((cert, i) => (
                      <Box key={i} className="flex items-start mb-3">
                        <DescriptionIcon className="text-purple-400 mr-2" />
                        <Typography className="text-gray-300 text-sm">
                          {cert}
                        </Typography>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Grid>

              {/* SKILLS */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{ ...gradientBorderStyle, height: "100%" }}
                  className="bg-[#0f172a] shadow-xl"
                >
                  <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <Typography
                      variant="h6"
                      className="font-bold mb-4 flex items-center"
                      sx={{
                        color: "#06b6d4",
                        fontSize: { xs: "1.1rem", md: "1.3rem" },
                      }}
                    >
                      <BuildIcon className="mr-2" />
                      Technical Skills
                    </Typography>

                    {Object.entries(skills).map(([category, items]) => (
                      <Box key={category} className="mb-4">
                        <Typography
                          className="font-semibold text-purple-400 mb-2"
                          sx={{ fontSize: "1rem" }}
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Typography>

                        <Box className="flex flex-wrap gap-2">
                          {items.map((skill, index) => (
                            <Chip
                              key={index}
                              label={skill}
                              size="small"
                              className="bg-blue-900 text-cyan-300 border border-cyan-700"
                            />
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* CTA */}
            <Box className="text-center mt-8">
              <Box className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  component={Link}
                  to="/projects"
                  variant="contained"
                  className="rounded-full px-8 py-2 font-semibold"
                  sx={{
                    background:
                      "linear-gradient(45deg, #06b6d4 20%, #2563eb 90%)",
                  }}
                >
                  View My Projects
                </Button>

                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  className="rounded-full px-8 py-2 font-semibold"
                  sx={{
                    border: "2px solid #8b5cf6",
                    color: "#8b5cf6",
                    "&:hover": {
                      backgroundColor: "#8b5cf6",
                      color: "white",
                    },
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
