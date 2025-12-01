const CountdownTimer = () => {
  return (
    <div className=" flex gap-4 items-center justify-center pb-6">
      <div>
        <p className="text-xs font-medium">Days</p>
        <p className="text-lg sm:text-[32px] font-bold">03</p>
      </div>

      <div className="pt-4 grid gap-2">
        <div className="w-1 h-1 rounded-full bg-button-background" />
        <div className="w-1 h-1 rounded-full bg-button-background" />
      </div>

      <div>
        <p className="text-xs font-medium">Hours</p>
        <p className="text-lg sm:text-[32px] font-bold">23</p>
      </div>

      <div className="pt-4 grid gap-2">
        <div className="w-1 h-1 rounded-full bg-button-background" />
        <div className="w-1 h-1 rounded-full bg-button-background" />
      </div>

      <div>
        <p className="text-xs font-medium">Minutes</p>
        <p className="text-lg sm:text-[32px] font-bold">19</p>
      </div>

      <div className="pt-4 grid gap-2">
        <div className="w-1 h-1 rounded-full bg-button-background" />
        <div className="w-1 h-1 rounded-full bg-button-background" />
      </div>

      <div>
        <p className="text-xs font-medium">Seconds</p>
        <p className="text-lg sm:text-[32px] font-bold">56</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
