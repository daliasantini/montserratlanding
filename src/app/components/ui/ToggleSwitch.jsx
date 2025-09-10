export default function ToggleSwitch({ label, name, checked, onChange }) {
  return (
    <div className='flex w-full gap-3 items-center justify-end'>
      <span style={{fontFamily: 'Montserrat Alternates'}} className='text-xs text-tertiary font-medium'>
        Montserrat Alternates:
      </span>
      <label className='cursor-pointer'>
        <input
          type='checkbox'
          name={name}
          checked={checked}
          onChange={onChange}
          className='hidden'
        />
        <div
          className={`w-9 h-6 flex items-center bg-background border-[1.5px] border-tertiary rounded-full p-1 pl-1 transition ${
            checked ? 'bg-transparent' : ''
          }`}
        >
          <div
            className={` w-[14px] h-[14px] rounded-full transform transition ${
              checked ? 'translate-x-3 bg-accent' : 'bg-tertiary'
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
}
