const style = {
    modal: `fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50`,
    modalContent: `bg-blue-200 rounded-lg shadow-lg py-8 px-20 w-[90%] md:w-[35%] relative`,
    closeButton: `absolute top-4 right-4 text-black text-2xl cursor-pointer`,
    input: `w-full px-3 py-2 border border-gray-500 rounded-lg bg-blue-200 placeholder-[#838383] text-black mb-4`,
    textarea: `w-full px-3 py-2 border border-gray-500 rounded-lg bg-blue-200 placeholder-[#838383] text-black mb-4 resize-none`,
    button: `w-full py-2 bg-blue-300 text-black rounded-lg`
};

type NewProjectsProps = {
    onClose: () => void;
};

const NewProjects: React.FC<NewProjectsProps> = ({ onClose }) => {
    return (
        <div className={style.modal}>
            <div className={style.modalContent}>
                <span className={style.closeButton} onClick={onClose}>&times;</span>
                <h2 className="text-2xl font-bold text-center font-ptSans">Matching Time...</h2>
                <p className="text-sm font-bold text-center mb-8">Fill in your details</p>
                <form action="https://getform.io/f/axojjmrb" method='POST'>
                    <select id="sort-dropdown" className={style.input}>
                        <option value=" " disabled>Type of freelancer</option>
                        <option value="newest">option1</option>
                        <option value="highest">option2</option>
                        <option value="lowest">option3</option>
                    </select>
                    <input className={style.input} type="text" placeholder="Project title" required />
                    <textarea className={style.textarea} name="message" placeholder="Project Description" rows={6} required />
                    <input className={style.input} type="text" placeholder="Project fee" required />
                    <input className={style.input} type="text" placeholder="Project timeline" required />
                    <button className={style.button} type="submit">Finish</button>
                </form>
            </div>
        </div>
    );
};

export default NewProjects;
