export default function SizeSlider({
  label,
  name,
  value,
  min,
  max,
  step,
  type = 'range',
  checked,
  onChange,
  ...props
}) {
  return (
    <div className='w-full flex items-center justify-between gap-6 py-2 flex-wrap'>
      <label
        htmlFor={name}
        className='uppercase text-xs text-left text-tertiary'
        hidden
      >
        {label} : <span className='font-bold text-blue'>{value}</span>
      </label>

      <div className='flex items-center w-full'>
        <span className='pr-4 font-thin text-sm'>8</span>
        <input
          type={type}
          name={name}
          className='w-full h-[1.35px] cursor-pointer accent-foreground'
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          {...props}
        />
        <span className='pl-4 font-black text-sm'>{value}</span>
      </div>
    </div>
  );
}
