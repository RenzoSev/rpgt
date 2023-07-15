export function FormAccount() {
  return (
    <>
      <fieldset className="mb-[15px] flex items-center gap-5">
        <label
          className="text-ctp-mauve w-[90px] text-right text-[15px]"
          htmlFor="name"
        >
          Name
        </label>

        <input
          className="text-ctp-crust shadow-ctp-lavender focus:shadow-ctp-lavender inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
          id="name"
          defaultValue="Leeroy Jenkins"
        />
      </fieldset>
      <fieldset className="mb-[15px] flex items-center gap-5">
        <label
          className="text-ctp-lavender w-[90px] text-right text-[15px]"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="text-ctp-lavender shadow-ctp-lavender focus:shadow-ctp-lavender inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
          id="password"
          defaultValue="@ljenkins"
        />
      </fieldset>
    </>
  );
}
