const style = {
  modal: `fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50`,
  modalContent: `bg-blue-200 rounded-lg shadow-lg p-8 w-[90%] md:w-[50%] relative`,
  closeButton: `absolute top-4 right-4 text-black text-2xl cursor-pointer`,
  input: `w-full px-3 py-2 border border-gray-500 rounded-lg bg-blue-200 placeholder-[#838383] text-black mb-4`,
  textarea: `w-full px-3 py-2 border border-gray-500 rounded-lg bg-blue-200 placeholder-[#838383] text-black mb-4 resize-none`,
  button: `w-full py-2 bg-blue-300 text-black rounded-lg`
};

type EnquireFormProps = {
  onClose: () => void;
};

const EnquireForm: React.FC<EnquireFormProps> = ({ onClose }) => {
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <span className={style.closeButton} onClick={onClose}>&times;</span>
        <h2 className="text-2xl font-bold mb-4 text-center">Enquire About Role</h2>
        <form action="https://getform.io/f/axojjmrb" method='POST'>
          <input className={style.input} type="text" name="name" placeholder="Full Name" required />
          <input className={style.input} type="email" name="email" placeholder="Email" required />
          <textarea className={style.textarea} name="message" placeholder="Your Message" required />
          <button className={style.button} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EnquireForm;
