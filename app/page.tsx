import { ModeToggle } from "@/shadcn/components/general/mode-toggle";

export default function Page() {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between border-b p-4'>
        <h1 className='text-2xl font-medium'>Safi Siddiqui</h1>

        <ModeToggle />
      </div>
    </div>
  );
}
