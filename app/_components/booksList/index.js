import Image from "next/image";
import { useRouter } from "next/navigation";

const BooksList = ({ data }) => {
  const router = useRouter();
  return (
    <div className="overflow-auto">
      <table className="w-full text-sm">
        <thead className="text-gray text-left">
          <tr>
            <th className="font-normal pb-6 min-w-[57px]"></th>
            <th className="font-normal pb-6 min-w-[100px]">Name</th>
            <th className="font-normal pb-6 min-w-[100px]">Username</th>
            <th className="font-normal pb-6 min-w-[200px]">Email</th>
            <th className="font-normal pb-6 min-w-[200px]">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(({ id, email, name, phone, username }, indx) => {
            return (
              <tr
                key={id}
                onClick={() => router.push(`/book/${id}`)}
                className="relative cursor-pointer"
              >
                <td className="py-5">
                  <Image
                    width="25"
                    height="27"
                    src="/images/folder.svg"
                    alt="folder"
                  />
                  <span className="text-white absolute z-10 left-0 md:top-6 top-8 text-xs w-[25px] h-[27] flex items-center justify-center">
                    {id}
                  </span>
                </td>
                <td className="py-5">{name}</td>
                <td className="py-5">{username}</td>
                <td className="py-5">{email}</td>
                <td className="py-5">{phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <style jsx>{`
        tbody tr::after {
          content: "";
          display: block;
          border: solid 1px #ecf1f6;
          border-radius: 10px;
          inset: 0;
          left: 40px;
          top: 5px;
          bottom: 5px;
          position: absolute;
          z-index: 0;
        }
        table td {
          position: relative;
          z-index: 1;
        }

        tbody tr:hover::after {
          background: #5d5fef;
          transition: 0.4s;
        }
        tbody tr:hover td {
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default BooksList;
