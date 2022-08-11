
import React from "react";
import ModalCenter from "./components/Modal/modalCenter";





export default function App() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>

    <div
    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">

      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(!showModal)}
      >
        Teste de Modal
      </button>

      </div>


      <ModalCenter SetShowModal={showModal} title="teste" textBody="tefasfjiajisçgldjfgçl
      sdfg
      d
      fg
      dfg
      dfg" />
     
    </>
  );
}