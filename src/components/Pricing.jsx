import { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  const [open, setOpen] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [sessionPopupOpen, setSessionPopupOpen] = useState(false);
  const [facilityPopupOpen, setFacilityPopupOpen] = useState(false); // State untuk pop-up fasilitas
  const [selectedFacility, setSelectedFacility] = useState(""); // State untuk fasilitas yang dipilih
  const [organisationPopupOpen, setOrganisationPopupOpen] = useState(false); // State untuk pop-up fasilitas
  const [selectedOrganisasi, setSelectedOrganisation] = useState(""); // State untuk fasilitas yang dipilih

  // Handle Open Modal
  const handleOpenModal = (courses) => {
    setSelectedCourses(courses);
    setOpen(true);
  };

  // Handle Close Modal
  const handleCloseModal = () => {
    setOpen(false);
  };

  // Handle Open Pop-up Mata Kuliah
  const handleOpenPopup = (courses) => {
    setSelectedCourses(courses);
    setPopupOpen(true);
  };

  // Handle Close Pop-up Mata Kuliah
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  // Handle Open Pop-up Sesi
  const handleOpenSessionPopup = () => {
    setSessionPopupOpen(true);
  };

  // Handle Close Pop-up Sesi
  const handleCloseSessionPopup = () => {
    setSessionPopupOpen(false);
  };

  // Handle Open Pop-up Fasilitas
  const handleOpenFacilityPopup = (facility) => {
    setSelectedFacility(facility);
    setFacilityPopupOpen(true);
  };

  // Handle Close Pop-up Fasilitas
  const handleCloseFacilityPopup = () => {
    setFacilityPopupOpen(false);
  };
  
  // Handle Open Pop-up Fasilitas
  const handleOpenOrganisationPopup = (organisasi) => {
    setSelectedOrganisation(organisasi);
    setOrganisationPopupOpen(true);
  };

  // Handle Close Pop-up Fasilitas
  const handleCloseOrganisation = () => {
    setOrganisationPopupOpen(false);
  };

  return (
    <div className="mt-20" id="pricing">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide font-poppins">
        Program Studi
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8 font-poppins">
                {option.title}
                {option.title === "Sistem Informasi" && (
                  <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Favorit)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-2xl mt-6 mr-2 font-poppins">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Semester</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2 font-poppins">
                      {feature === "Mata Kuliah" ? (
                        <>
                          {feature}
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleOpenPopup(option.courses)}
                            style={{ marginLeft: "10px", fontFamily: "Poppins" }}
                          >
                            Lihat
                          </Button>
                        </>
                      ) : feature === "Sesi" ? (
                        <>
                          {feature}
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={handleOpenSessionPopup}
                            style={{ marginLeft: "10px", fontFamily: "Poppins" }}
                          >
                            Lihat
                          </Button>
                        </>
                      ) : feature === "Fasilitas" ? (
                        <>
                          {feature}
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleOpenFacilityPopup(option.facilities)}
                            style={{ marginLeft: "10px", fontFamily: "Poppins" }}
                          >
                            Lihat
                          </Button>
                        </>
                        ) : feature === "Organisasi" ? (
                          <>
                            {feature}
                            <Button
                              variant="outlined"
                              size="small"
                              onClick={() => handleOpenOrganisationPopup(option.organisasies)}
                              style={{ marginLeft: "10px", fontFamily: "Poppins" }}
                            >
                              Lihat
                            </Button>
                          </>
                      ) : (
                        feature
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-blue-900 border border-blue-900 rounded-lg transition duration-200 font-poppins"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Courses */}
      <Modal open={open} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            padding: 3,
            borderRadius: 1,
            boxShadow: 24,
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <Typography variant="h6" component="h2" style={{ fontFamily: "Poppins" }}>
            Daftar Mata Kuliah
          </Typography>
          <ul>
            {selectedCourses.length > 0 ? (
              selectedCourses.map((course, i) => (
                <li key={i} style={{ fontFamily: "Poppins", color: "black" }}>
                  {i + 1}. {course}
                </li>
              ))
            ) : (
              <Typography variant="body2" style={{ fontFamily: "Poppins", color: "black" }}>
                Tidak ada mata kuliah yang tersedia
              </Typography>
            )}
          </ul>
          <Button
            onClick={handleCloseModal}
            variant="contained"
            color="primary"
            style={{ marginTop: "10px", fontFamily: "Poppins" }}
          >
            Tutup
          </Button>
        </Box>
      </Modal>

      {/* Pop-up for Courses */}
      <Modal open={popupOpen} onClose={handleClosePopup}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            padding: 3,
            borderRadius: 2,
            boxShadow: 24,
            maxHeight: "80vh",
            overflowY: "auto",
            textAlign: "center", // Teks di tengah
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            Daftar Mata Kuliah
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              textAlign: "left",
              padding: "0 20px",
            }}
          >
            {selectedCourses.length > 0 ? (
              selectedCourses.map((course, i) => (
                <Typography key={i} variant="body1" style={{ fontFamily: "Poppins", color: "#555" }}>
                  {i + 1}. {course}
                </Typography>
              ))
            ) : (
              <Typography variant="body2" style={{ fontFamily: "Poppins", color: "#555" }}>
                Tidak ada mata kuliah yang tersedia
              </Typography>
            )}
          </Box>
          <Button
            onClick={handleClosePopup}
            variant="contained"
            color="primary"
            style={{
              marginTop: "20px",
              fontFamily: "Poppins",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            Tutup
          </Button>
        </Box>
      </Modal>

      {/* Pop-up for Sesi */}
      <Modal open={sessionPopupOpen} onClose={handleCloseSessionPopup}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            padding: 3,
            borderRadius: 2,
            boxShadow: 24,
            maxHeight: "80vh",
            overflowY: "auto",
            textAlign: "center", // Teks di tengah
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            Jadwal Sesi
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              textAlign: "left",
              padding: "0 20px",
            }}
          >
            <Typography variant="body1" style={{ fontFamily: "Poppins", color: "#555" }}>
              <strong>Sesi Pagi:</strong> 08.00 WIB – 11.40 WIB
            </Typography>
            <Typography variant="body1" style={{ fontFamily: "Poppins", color: "#555" }}>
              <strong>Sesi Siang:</strong> 14.00 WIB – 17.40 WIB
            </Typography>
            <Typography variant="body1" style={{ fontFamily: "Poppins", color: "#555" }}>
              <strong>Sesi Malam:</strong> 18.00 WIB – 21.00 WIB
            </Typography>
          </Box>
          <Button
            onClick={handleCloseSessionPopup}
            variant="contained"
            color="primary"
            style={{
              marginTop: "20px",
              fontFamily: "Poppins",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            Tutup
          </Button>
        </Box>
      </Modal>

            {/* Pop-up for Facilities */}
            <Modal open={facilityPopupOpen} onClose={handleCloseFacilityPopup}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            padding: 3,
            borderRadius: 2,
            boxShadow: 24,
            maxHeight: "80vh", // Max height for scrollable content
            overflowY: "auto", // Enables scrolling when content overflows
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            Fasilitas
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              textAlign: "left",
              padding: "0 20px",
            }}
          >
{selectedFacility && selectedFacility.length > 0 ? (
  selectedFacility.map((facility, index) => (
    <Typography key={index} variant="body1" style={{ fontFamily: "Poppins", color: "#555" }}>
      {index + 1}. {facility}
    </Typography>
  ))
) : (
  <Typography variant="body2" style={{ fontFamily: "Poppins", color: "#555" }}>
    Tidak ada facilitas yang tersedia
  </Typography>
)}


          </Box>
          <Button
            onClick={handleCloseFacilityPopup}
            variant="contained"
            color="primary"
            style={{
              marginTop: "20px",
              fontFamily: "Poppins",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            Tutup
          </Button>
        </Box>
      </Modal>

      {/* Pop-up for Organisasi */}
      <Modal open={organisationPopupOpen} onClose={handleCloseOrganisation}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            padding: 3,
            borderRadius: 2,
            boxShadow: 24,
            maxHeight: "80vh", // Max height for scrollable content
            overflowY: "auto", // Enables scrolling when content overflows
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            Fasilitas
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              textAlign: "left",
              padding: "0 20px",
            }}
          >
{selectedOrganisasi && selectedOrganisasi.length > 0 ? (
  selectedOrganisasi.map((organisasi, index) => (
    <Typography key={index} variant="body1" style={{ fontFamily: "Poppins", color: "#555" }}>
      {index + 1}. {organisasi}
    </Typography>
  ))
) : (
  <Typography variant="body2" style={{ fontFamily: "Poppins", color: "#555" }}>
    Tidak ada organisasi yang tersedia
  </Typography>
)}


          </Box>
          <Button
            onClick={handleCloseOrganisation}
            variant="contained"
            color="primary"
            style={{
              marginTop: "20px",
              fontFamily: "Poppins",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            Tutup
          </Button>
        </Box>
      </Modal>


    </div>
  );
};

export default Pricing;
