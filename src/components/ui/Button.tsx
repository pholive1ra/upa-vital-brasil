type Props = {
  text: String;
};

export const Button = ({ text }: Props) => {
  return (
    <>
      <button className="bg-[#60A5FA] px-6 py-2.5 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
        {text}
      </button>
    </>
  );
};
