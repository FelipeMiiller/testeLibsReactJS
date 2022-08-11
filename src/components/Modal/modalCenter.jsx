import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";



export default function ModalCenter(SetShowModal,title,textBody,buttonTextConfimation) {
  const [showModal, setShowModal] = React.useState(false);



  useEffect(() => {

    setShowModal(SetShowModal)

  }, [SetShowModal])











 
  return (
    


        <>
        <div className= { (showModal ? "block " : "hidden ") +"opacity-25 fixed inset-0 z-40 bg-black"  }></div>
          <div
            className={
              (showModal ? "block " : "hidden ") +
              "modal fade fixed justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"}
          
           
              tabIndex="-1"

            onClick={() => setShowModal(!showModal)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(!showModal)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {textBody}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t space-x-2 border-solid border-blueGray-200 rounded-b">
                  <button
                    className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 
                    focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    type="button"
                    onClick={() => setShowModal(!showModal)}
                  >
                    Close
                  </button>
                  <button
                    className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 
                    focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                    type="button"
                    onClick={() => setShowModal(!showModal)}
                  >
                    {buttonTextConfimation}
                  </button>
                </div>
              </div>
            </div>
          </div>
         
        
     
    </>
  );
}



ModalCenter.defaultProps = {
  buttonTextConfimation: "Confirm",
  
};

ModalCenter.propTypes = {
  SetShowModal: PropTypes.bool,
  title: PropTypes.string,
  textBody: PropTypes.string,
  buttonTextConfimation: PropTypes.string,
  onClickFunction: PropTypes.func,
};


