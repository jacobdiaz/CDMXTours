type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const LanguageSelect = (props: SelectProps) => {
  return (
    <select
      className='select w-fit max-w-xs font-ssp bg-black hidden md:block'
      {...props}
      defaultValue='Change Language'
    >
      <option disabled>Change Language</option>
      <option value='en'>🇬🇧 English</option>
      <option value='es'>🇲🇽 Español</option>
    </select>
  );
};

export default LanguageSelect;
