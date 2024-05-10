export default function Tab({ label, active, onClick}) {
return (
    <div className={`flex flex-col cursor-pointer`}>
        <div className={active ? 'text-primary' : ''}><strong>{label}</strong></div>
        <div className={`w-full h-[3px] mt-1 ${ active ? 'bg-primary' : ''}`}></div>
    </div>
);
}
