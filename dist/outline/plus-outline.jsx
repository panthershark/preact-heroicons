/** @jsx h */
import { h } from "preact";
import { forwardRef } from "preact/compat";
export const PlusOutline = forwardRef((props, ref) => {
    return (<svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
    </svg>);
});
