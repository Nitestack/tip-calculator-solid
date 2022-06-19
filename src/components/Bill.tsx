import type { ParentComponent } from "solid-js";
import { createSignal } from "solid-js";
import DollarIcon from "../icon-dollar.svg";
import { setBill, billInput, setBillInput } from "./Calculator";

const Bill: ParentComponent = () => {
    const [error, setError] = createSignal("");
    function onBillChange() {
        return (ev: InputEvent & { currentTarget: HTMLInputElement; target: Element; }) => {
            const value = ev.currentTarget.value;
            setBillInput(value);
            const newBill = parseFloat(value);
            setError("");
            if (!isNaN(newBill) && newBill != 0) setBill(newBill);
            else setError("Please enter a valid bill");
        };
    };
    return (
        <>
            <div class="flex items-center">
                <p class="basis-1/2 text-left text-custom-grayish-cyan"> Bill </p>
                {error() && <p class="basis-1/2 text-right text-red-600"> {error()} </p>}
            </div>
            <div class={(error() ? "border border-solid border-red-600" : "") + " relative flex items-center mt-2 lg:mt-7 rounded-lg bg-custom-light-grayish-cyan py-2 px-4 shadow-lg"}>
                <div class="flex-none">
                    <img src={DollarIcon} />
                </div>
                <div class="flex-1">
                    <input value={billInput()} placeholder="0.00" type="number" class="caret-custom-strong-cyan text-end bg-transparent text-3xl text-custom-very-dark-cyan p-1 rounded-lg w-full" min={0} minLength={1} onInput={onBillChange()} />
                </div>
            </div>
        </>
    );
};
export default Bill;