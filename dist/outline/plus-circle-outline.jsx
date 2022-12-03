/** @jsx h */
import { h } from "preact";
import { forwardRef } from "preact/compat";
export const PlusCircleOutline = forwardRef((props, ref) => {
    return (<svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>);
});
