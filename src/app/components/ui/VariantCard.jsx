export default function VariantCard({
  name,
  size,
  weight,
  fontFamily,
  description,
  sample,
  property,
  ...props
}) {
  return (
    <div
      className='grid overflow-y-visible grid-cols-1 sm:grid-cols-[8rem_1fr] gap-8 border-b-1 border-tertiary py-4 min-h-[150px]'
      {...props}
    >
      <div className='grid grid-cols-3 sm:grid-cols-1 gap-3 w-full justify-center items-center'>
        <p className='text-xs font-medium text-tertiary text-center'>{name}</p>
        <p
          style={{
            fontFamily,
            fontWeight: weight,
            fontSize: `${size}px`,
            lineHeight: 1,
          }}
          className={`${property} leading-none`}
        >
          {sample}
        </p>
        <p className='text-[10px] font-medium text-tertiary text-center'>
          {description}
        </p>
      </div>

      <div
        style={{
          fontFamily,
          fontWeight: weight,
          fontSize: `${size}px`,
          lineHeight: 1.1,
        }}
        className={`${property} w-full flex flex-col pl-2 gap-1 text-left justify-center leading-tight truncate`}
      >
        <p>ABCDEFGHIJKLMNOPWRSTUVWXYZ</p>
        <p>abcdefghijklmnopqrstuvwxyz</p>
        <p>0123456789 ."/</p>
      </div>
    </div>
  );
}
