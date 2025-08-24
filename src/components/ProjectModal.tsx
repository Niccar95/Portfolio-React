interface IModalProps {
  isModalOpen: boolean;
}

const ProjectModal = ({ isModalOpen }: IModalProps) => {
  return (
    <>
      {isModalOpen && (
        <div className="modalBackdrop">
          <div className="projectModal">
            <p>sdsdhsaujdhsu</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectModal;
