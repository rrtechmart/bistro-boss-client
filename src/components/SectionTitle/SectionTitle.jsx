

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" w-96 mx-auto">
            <p className="text-yellow-500 text-center">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-2 py-4 mt-2 text-center mb-2"> {heading} </h3>
            
        </div>
    );
};

export default SectionTitle;