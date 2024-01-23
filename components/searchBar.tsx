import { IoSearchOutline } from '../utils/icons';

interface SearchBarProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<any>>;
}

const SearchBar = ({ input, setInput }: SearchBarProps ) => {
  return (
    <div className='relative'>
      <IoSearchOutline size={20} className='absolute left-3 top-1/2 transform -translate-y-1/2' />
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Buscar producto'
        className='input input-sm pl-10 pr-4 py-2 bg-gray-100 outline-none rounded '
      />
    </div>
  );
};

export default SearchBar;