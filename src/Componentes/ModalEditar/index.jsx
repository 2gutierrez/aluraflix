import styled from 'styled-components';
import EditarCard from 'Componentes/EditarCard';
import botonx from './botonx.png';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 750px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  z-index: 20;
  form {
    button {
      position: relative;
      top: 20px;
      right: 50px;
      z-index: 30;
    }
  }
`;

const ModalEditar = ({ editarcard, closeModal, onSubmit }) => {
  return (
    <>
      <Overlay onClick={closeModal} />
      <DialogEstilizado open={!!editarcard}>
        <EditarCard onSubmit={onSubmit} onClose={closeModal} />
        <form method="dialog">
          <button type="button" className='botonx' onClick={closeModal}>
            <img src={botonx} alt="botonx" />
          </button>
        </form>
      </DialogEstilizado>
    </>
  );
};

export default ModalEditar;
