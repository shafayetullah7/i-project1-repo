import { Box, Modal } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // maxWidth: 400,
    width:400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

    
    '@media (max-width: 500px)': {
        maxWidth: 300, // Adjust the maxWidth for screens up to 400px wide (e.g., mobile devices)
    },
  };
  
  const CustomModal = ({ open, handleClose,content }) => {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {content};
        </Box>
      </Modal>
    );
  };

export default CustomModal;