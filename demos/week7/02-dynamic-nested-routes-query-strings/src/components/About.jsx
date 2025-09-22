import { Outlet, Link } from "react-router";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum
        numquam reprehenderit quam fuga illum, odio, nostrum blanditiis aliquid
        eos asperiores quos? Velit, officia temporibus!
      </p>
      {/* this Outlet here represents CompanyInfo, but it only shows when the user navigates to /about/company-info */}
      <Outlet />
      <Link to={"/about/company-info"}>Company Info</Link>
    </>
  );
}
