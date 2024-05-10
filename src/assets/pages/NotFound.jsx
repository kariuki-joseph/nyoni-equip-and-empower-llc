import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="center">
        <h1 className="h3 font-bold">Page Not Found</h1>
        <p className="mt-3">Sorry, that page does not exist.</p>

        <NavLink to="/" className='mt-4 text-primary'>Go to Home</NavLink>
    </div>
  )
}
