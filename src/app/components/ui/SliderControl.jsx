export default function SliderControl({
  label,
  name,
  value,
  min,
  max,
  step,
  type = 'range',
  checked,
  onChange,
  children,
  ...props
}) {
  return (
    <div className='w-full flex items-center justify-between gap-5 py-5 flex-wrap'>
      <label
        htmlFor={name}
        className='uppercase text-xs text-left text-tertiary'
        hidden
      >
        {label}
      </label>

      <div className='grid grid-cols-2 place-content-between text-xs w-full'>
        <p className='place-items-start text-left font-bold'>{label}: </p>
        <p className='place-items-end text-right '>
          {value} {children}
        </p>
      </div>

      <div className='flex items-center w-full'>
        <input
          type={type}
          name={name}
          label={label}
          className='w-full h-[1.35px] cursor-pointer accent-foreground'
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          {...props}
        />
      </div>
    </div>
  );
}
