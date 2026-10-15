import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // https://www.figma.com/es-la/comunidad/file/894542039433511203/financial-dashboard
  const projects = [
    {
      figma: 'https://www.figma.com/design/aWM4UWrIqXkIazj1qu4dEn/Financial-Dashboard--Community-?node-id=1-8&t=R9894Xy0Kh7Nf2Ro-0',
      demo: '/demos/dashboard-1',
      label: 'Financial dashboard'
    }
  ];
  return (
    <div >

      <nav className="p-7">
        <ul className="grid grid-cols-7">
          {
            projects.map((project, index)=>{
              return <li key={index} className="rounded-lg p-7 bg-green-500 flex flex-col">
                <h3 className="font-semibold">{project.label}</h3>

                <a href={project.figma} target="_blank">Figma</a>
                <Link href={project.demo}>Demo</Link>
              </li>
            })
          }

        </ul>
      </nav>
    </div>
  );
}
